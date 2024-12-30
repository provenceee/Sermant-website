# 指标功能
本文档旨在指导用户如何使用Sermant的指标功能，以便通过Prometheus等监控工具实时监控Sermant的核心指标和插件的自定义指标。

## 功能介绍
为满足用户对Sermant运行状态和性能的实时监控需求，以及对插件行为的深入洞察，Sermant集成了Prometheus监控支持。用户可以通过Grafana等监控工具对Sermant的核心指标以及插件的自定义指标进行监控，并通过设置基于指标的告警来提前发现潜在问题，确保服务稳定性。

## 开发示例

以下是基于[创建首个插件](README.md)文档中的工程，演示插件如何创建自定义指标。

1. 在工程`template\template-plugin`模块下`io.sermant.template.TemplateInterceptor`类中，通过ServiceManager来获取MetricService实例以获取指标服务，用于自定义指标：

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   ```

2. 调用MetricService提供的API执行相应的操作，如创建Counter、Gauge、Timer、Summary等类型的指标。
   ```java
    @Override
    public ExecuteContext doBefore(ExecuteContext context) {
        // 增加一个插件自定义指标custom.counter，添加2个标签，分别是 type=http 和 scope=myFirstPluginId
        // 其中scope标签，通过 Tags.of().addScope(pluginId) 添加
        metricService.counter("custom.counter", Tags.of("type", "http").addScope("myFirstPluginId")).increment();
           
        // 增加一个Sermant核心指标custom.counter2，添加2个标签，分别是 service=heartbeat 和 scope=core
        // 其中scope标签，通过 Tags.of().addCoreScope() 或者 Tags.of().addScope("core") 添加
        // 备注：Sermant核心指标不能在插件中创建
        metricService.counter("custom.counter2", Tags.of("service", "heartbeat").addCoreScope()).increment();
        return context;
    }
   ```

3. 开启Metric服务，在`agent/config/config.properties`文件中设置以开启Metric服务，配置如下：

   > 注意：Metric服务依赖于 [HTTP Server服务](sermant-httpserver-service.md) 暴露的指标端点，因此需要先开启HTTP服务

   ```properties
   # HTTP server switch
   agent.service.httpserver.enable=true
   # Metric service switch
   agent.service.metric.enable=true
   ```

4. 配置Prometheus抓取Sermant暴露的指标端点：`http://localhost:47128/sermant/metrics` 。在Prometheus的`prometheus.yml`文件中，按以下格式进行配置：

   ```yaml
    scrape_configs:
    # job_name 是抓取作业的名称，每个作业名称应唯一
    - job_name: 'sermant-example'
      # metrics_path 指定从sermant获取指标数据的路径
      metrics_path: '/sermant/metrics'
      static_configs:
        # targets 列表包含了所有需要抓取的sermant agent地址，格式为 '主机:端口'
        - targets: ['localhost:47128']
   ```

5. 启动Prometheus并验证指标数据的收集，如下图所示：
   ![pic](../../../binary-doc/metric-prometheus.png)


## API & 配置

### API

1. 获取Metric服务
   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   ```

2. 自定义指标

开发者可通过如下MetricService接口自定义各类指标（`Counter`、`Gauge`、`Timer`、`Summary`），以实现对程序运行状态的监控。

- 创建**Counter**类型的指标：用于计数，例如请求数量，可参考[Micrometer Counters](https://docs.micrometer.io/micrometer/reference/concepts/counters.html)
   ```java
   // 获取MetricService实例，用于后续的指标操作
   MetricService metricService = ServiceManager.getService(MetricService.class);
   
   // 创建并获取一个计数器对象，命名为'custom.counter'
   // 如果是Sermant核心指标，则通过 Tags.of().addCoreScope() 或者 Tags.of().addScope("core") 作为scope标签
   // 如果是插件指标，需要通过 Tags.of().addScope(pluginId) 添加'pluginId'作为scope标签
   // 这里为指标添加了scope标签，是为了区分sermant核心指标还是sermant插件指标
   Counter counter = metricService.counter("custom.counter", Tags.of().addScope("myFirstPluginId"));
   
   // 增加计数器的值，此操作通常用于记录发生次数，例如记录请求次数或任务完成的数量
   counter.increment();
   ```

- 创建**Gauge**类型的指标：用于显示当前值，例如内存使用量，可参考[Micrometer Gauges](https://docs.micrometer.io/micrometer/reference/concepts/gauges.html)
   ```java
   // 获取MetricService实例，用于后续的指标操作
   MetricService metricService = ServiceManager.getService(MetricService.class);
   
   // 创建一个度量指标，类型为gauge，名称为"custom.gauge"
   // 如果是Sermant核心指标，则通过 Tags.of().addCoreScope() 或者 Tags.of().addScope("core") 作为scope标签
   // 如果是插件指标，需要通过 Tags.of().addScope(pluginId) 添加'pluginId'作为scope标签
   // 这里为指标添加了scope标签，是为了区分sermant核心指标还是sermant插件指标
   Gauge gauge = metricService.gauge("custom.gauge", Tags.of().addScope("myFirstPluginId"));
   
   // 设置gauge的数值为1，表示某个特定度量的当前值
   gauge.gaugeNumber(1);
   ```

- 创建**Timer**类型的指标：用于记录时间，例如方法执行时间，可参考[Micrometer Timers](https://docs.micrometer.io/micrometer/reference/concepts/timers.html)
   ```java
   // 获取MetricService实例，用于后续的指标操作
   MetricService metricService = ServiceManager.getService(MetricService.class);
   
   // 创建一个名为"custom.timer"的计时器，用于测量和记录时间
   // 如果是Sermant核心指标，则通过 Tags.of().addCoreScope() 或者 Tags.of().addScope("core") 作为scope标签
   // 如果是插件指标，需要通过 Tags.of().addScope(pluginId) 添加'pluginId'作为scope标签
   // 这里为指标添加了scope标签，是为了区分sermant核心指标还是sermant插件指标
   Timer timer = metricService.timer("custom.timer", Tags.of().addScope("myFirstPluginId"));
   
   // 记录一段特定的时间，此处为10秒，使用计时器进行度量
   timer.record(10L, TimeUnit.SECONDS);
   ```

- 创建**Summary**类型的指标：用于记录数据的分布情况，例如请求延迟，可参考[Micrometer Distribution Summaries](https://docs.micrometer.io/micrometer/reference/concepts/distribution-summaries.html)
   ```java
   // 获取MetricService实例，用于后续的度量操作
   MetricService metricService = ServiceManager.getService(MetricService.class);
   
   // 获取名为"custom.summary"的Summary度量对象，用于记录后续的数据观测值
   // 如果是Sermant核心指标，则通过 Tags.of().addCoreScope() 或者 Tags.of().addScope("core") 作为scope标签
   // 如果是插件指标，需要通过 Tags.of().addScope(pluginId) 添加'pluginId'作为scope标签
   // 这里为指标添加了scope标签，是为了区分sermant核心指标还是sermant插件指标
   Summary summary = metricService.summary("custom.summary", Tags.of().addScope("myFirstPluginId"));
   
   // 记录一个数据观测值到Summary度量对象中，此处记录的值为1.0
   summary.record(1.0);
   ```  

### 配置
在Sermant Agent的产品包 `agent/config/config.properties`，可通过`agent.service.httpserver.enable` 和 `agent.service.metric.enable` 配置项开启Metric服务，其他Metric服务的配置也在此文件中进行：

```properties
# The metric type, currently supports prometheus.
metric.type=prometheus
# The maximum number of metrics.
metric.maxTimeSeries=1000
# Defines the common tag keys for metrics, with multiple keys separated by commas, the default values include "agent", "agent.app.name", "agent.ip" and "scope". For a complete list of available tag keys, refer to{@link io.sermant.core.service.metric.entity.MetricCommonTagEnum}.
metric.common.tag.keys=agent,agent.app.name,agent.ip,scope
```
默认使用 `agent`、`agent.app.name`、`agent.ip`、`scope` 4个通用tag，用户也可以通过配置`metric.common.tag.keys`来指定需要使用的通用tag。

目前支持配置的通用tag如下：

| Tag key            | 描述                                                                                                                                        |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| agent              | 固定值，统一设置为"sermant"                                                                                                                        |
| agent.app.name     | Sermant应用的名称                                                                                                                              |
| agent.ip           | Sermant所在机器的IP地址                                                                                                                          |
| scope              | 指定Sermant指标的作用域。默认值为"undefined"。对于Sermant核心模块指标，需通过Tags.addCoreScope()设置，此时scope值为"core"。对于插件指标，需通过Tags.addScope("插件Id")设置，scope值为具体的插件Id |
| agent.service.name | Sermant服务的名称                                                                                                                              |
| agent.app.type     | Sermant应用的类型                                                                                                                              |
| agent.artifact     | Sermant artifact                                                                                                                          |
| agent.version      | Sermant的当前版本号                                                                                                                             |

## 注意事项
- Metric服务依赖于HTTP服务暴露的指标端点，因此在使用Metric服务前，请确保已开启[HTTP服务](sermant-httpserver-service.md)。
- 请在插件中正确使用MetricService API，以免造成指标数据不准确或丢失。
- 在配置Prometheus时，请确保正确设置了Sermant的HTTP Server地址和端口，以便Prometheus能够从Sermant获取指标数据。
