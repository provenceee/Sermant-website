# Metrics Functionality

This document aims to guide users on how to use the metrics functionality of Sermant to monitor core metrics and custom metrics of plugins in real-time through monitoring tools such as Prometheus.

## Feature Introduction

To meet users' needs for real-time monitoring of Sermant's operational status and performance, as well as in-depth insights into plugin behavior, Sermant integrates Prometheus monitoring support. Users can monitor core metrics and custom metrics of plugins through monitoring tools like Grafana and set up metric-based alerts to proactively identify potential issues, ensuring service stability.

## Development Example

The following demonstrates how to create custom metrics for plugins based on the project from the [Creating Your First Plugin](README.md) document.

1. In the `io.sermant.template.TemplateInterceptor` class under the `template\template-plugin` module, obtain the MetricService instance via ServiceManager to access the metrics service for custom metrics:

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   ```

2. Use the APIs provided by MetricService to perform relevant operations, such as creating Counters, Gauges, Timers, and Summaries.

   ```java
   @Override
   public ExecuteContext doBefore(ExecuteContext context) {
       metricService.counter("custom.counter", Tags.of("type", "http")).increment();
       return context;
   }
   ```

3. Enable the Metric service by configuring the `agent/config/config.properties` file as follows:

   > Note: The Metric service relies on the metrics endpoint exposed by the [HTTP Server service](./sermant-httpserver-service.md), so the HTTP service must be enabled first.

   ```properties
   # HTTP server switch
   agent.service.httpserver.enable=true
   # Metric service switch
   agent.service.metric.enable=true
   ```

4. Configure Prometheus to scrape the metrics endpoint exposed by Sermant: `http://localhost:47128/sermant/metrics`. In the Prometheus `prometheus.yml` file, configure as follows:

   ```yaml
   scrape_configs:
   - job_name: 'sermant-example'
     metrics_path: '/sermant/metrics'
     static_configs:
       - targets: ['localhost:47128']
   ```

5. Start Prometheus and verify the collection of metric data, as shown in the following image:
   ![pic](../../../binary-doc/metric-prometheus.png)

## API & Configuration

### API

1. Obtain the Metric service:

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   ```

2. Custom Metrics

Developers can customize various types of metrics (Counter, Gauge, Timer, Summary) through the MetricService interface to monitor program runtime status.

- Create a **Counter** type metric: used for counting, such as the number of requests. See [Micrometer Counters](https://docs.micrometer.io/micrometer/reference/concepts/counters.html).

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   Counter counter = metricService.counter("custom.counter");
   counter.increment();
   ```

- Create a **Gauge** type metric: used to display current values, such as memory usage. See [Micrometer Gauges](https://docs.micrometer.io/micrometer/reference/concepts/gauges.html).

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   Gauge gauge = metricService.gauge("custom.gauge");
   gauge.gaugeNumber(1);
   ```

- Create a **Timer** type metric: used to record time, such as method execution time. See [Micrometer Timers](https://docs.micrometer.io/micrometer/reference/concepts/timers.html).

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   Timer timer = metricService.timer("custom.timer");
   timer.record(10L, TimeUnit.SECONDS);
   ```

- Create a **Summary** type metric: used to record data distribution, such as request latency. See [Micrometer Distribution Summaries](https://docs.micrometer.io/micrometer/reference/concepts/distribution-summaries.html).

   ```java
   MetricService metricService = ServiceManager.getService(MetricService.class);
   Summary summary = metricService.summary("custom.summary");
   summary.record(1.0);
   ```

### Configuration

In the Sermant Agent package `agent/config/config.properties`, you can enable the Metric service using `agent.service.httpserver.enable` and `agent.service.metric.enable`. Other configurations for the Metric service are also included in this file:

```properties
# The metric type, currently supports prometheus.
metric.type=prometheus
# The maximum number of metrics.
metric.maxTimeSeries=1000
```

## Notes

- The Metric service relies on the metrics endpoint exposed by the HTTP service, so ensure the [HTTP service](./sermant-httpserver-service.md) is enabled before using the Metric service.
- Ensure correct usage of the MetricService API in plugins to avoid inaccurate or missing metric data.
- When configuring Prometheus, ensure the correct HTTP server address and port for Sermant are set so that Prometheus can retrieve metric data from Sermant.