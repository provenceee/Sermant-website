(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{530:function(e,t,a){"use strict";a.r(t);var v=a(26),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"backend使用手册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend使用手册"}},[e._v("#")]),e._v(" Backend使用手册")]),e._v(" "),t("p",[e._v("Backend包含Sermant数据处理后端模块和前端信息展示模块，旨在为Sermant提供运行时的可观测能力，当前主要包括Sermant心跳信息, 上报事件的接收和展示，webhook推送等功能。")]),e._v(" "),t("p",[e._v("Backend与Sermant配合使用。Sermant挂载在宿主应用启动后作为数据发送端，可定时发送当前Sermant的心跳数据(服务名、主机名、实例ID、版本号、IP、时间戳、挂载插件信息)，事件数据(Sermant启停、核心服务启停、字节码增强、日志数据等)。Backend作为数据接收端，可接收处理Sermant发送的心跳和事件等数据，将紧急事件推送至webhook，并在前端可视化展示，提供观测Sermant运行状态的能力。")]),e._v(" "),t("blockquote",[t("p",[e._v("注：Backend为"),t("strong",[e._v("非必要组件")]),e._v("，用户可按需部署。")])]),e._v(" "),t("h2",{attrs:{id:"参数配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[e._v("#")]),e._v(" 参数配置")]),e._v(" "),t("h3",{attrs:{id:"sermant-agent参数配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent参数配置"}},[e._v("#")]),e._v(" sermant-agent参数配置")]),e._v(" "),t("p",[e._v("参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[e._v("Sermant-agent使用手册")]),e._v("，设置以下内容：")],1),e._v(" "),t("ul",[t("li",[e._v("参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#核心服务相关参数"}},[e._v("核心服务相关参数配置")]),e._v("说明，开启以下服务：\n"),t("ul",[t("li",[e._v("设置"),t("code",[e._v("agent.service.heartbeat.enable")]),e._v("值为"),t("code",[e._v("true")]),t("strong",[e._v("开启心跳服务")])]),e._v(" "),t("li",[e._v("设置"),t("code",[e._v("agent.service.gateway.enable")]),e._v("值为"),t("code",[e._v("true")]),t("strong",[e._v("开启网关服务")])])])],1),e._v(" "),t("li",[e._v("参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#事件上报相关参数"}},[e._v("事件上报相关参数")]),e._v("，设置以下参数：\n"),t("ul",[t("li",[e._v("设置"),t("code",[e._v("event.enable")]),e._v("值为"),t("code",[e._v("true")]),t("strong",[e._v("开启事件上报")])]),e._v(" "),t("li",[e._v("设置"),t("code",[e._v("event.offerWarnLog")]),e._v("值为"),t("code",[e._v("true")]),t("strong",[e._v("上报warn级别日志")])]),e._v(" "),t("li",[e._v("设置"),t("code",[e._v("event.offerErrorLog")]),e._v("值为"),t("code",[e._v("true")]),t("strong",[e._v("上报error级别日志")])])])],1),e._v(" "),t("li",[e._v("参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#心跳相关参数"}},[e._v("心跳相关参数配置")]),e._v("，根据需要设置心跳发送间隔")],1),e._v(" "),t("li",[e._v("参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#网关相关参数"}},[e._v("Gateway相关参数配置")]),e._v("，根据实际环境设置Gateway参数")],1)]),e._v(" "),t("h3",{attrs:{id:"backend参数配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend参数配置"}},[e._v("#")]),e._v(" Backend参数配置")]),e._v(" "),t("p",[e._v("Backend参数可在编译打包前通过"),t("code",[e._v("sermant-backend/src/main/resources/application.properties")]),e._v("配置文件进行修改，同时也支持在jar包启动前通过-D参数或环境变量的方式进行配置。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("参数键")])]),e._v(" "),t("th",[t("strong",[e._v("说明")])]),e._v(" "),t("th",[t("strong",[e._v("默认值")])]),e._v(" "),t("th",[t("strong",[e._v("是否必须")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("server.port")]),e._v(" "),t("td",[e._v("Backend的服务占用端口")]),e._v(" "),t("td",[e._v("8900")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("netty.port")]),e._v(" "),t("td",[e._v("Netty消息接收端口")]),e._v(" "),t("td",[e._v("127.0.0.1")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("netty.wait.time")]),e._v(" "),t("td",[e._v("Netty的读等待时间，单位：s")]),e._v(" "),t("td",[e._v("60")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("max.effective.time")]),e._v(" "),t("td",[e._v("判断应用心跳存活的有效时间，单位：ms")]),e._v(" "),t("td",[e._v("60000")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("max.cache.time")]),e._v(" "),t("td",[e._v("应用心跳在缓存中的有效时间，单位：ms")]),e._v(" "),t("td",[e._v("600000")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("database.type")]),e._v(" "),t("td",[e._v("事件存储类型，当前支持redis数据库和内存")]),e._v(" "),t("td",[e._v("MEMORY")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("database.address")]),e._v(" "),t("td",[e._v("redis数据库地址")]),e._v(" "),t("td",[e._v("127.0.0.1:6379")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("database.user")]),e._v(" "),t("td",[e._v("redis数据库用户名")]),e._v(" "),t("td",[e._v("default")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("database.password")]),e._v(" "),t("td",[e._v("redis数据库密码")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("database.event.expire")]),e._v(" "),t("td",[e._v("事件过期时间，单位：天")]),e._v(" "),t("td",[e._v("7")]),e._v(" "),t("td",[e._v("否")])]),e._v(" "),t("tr",[t("td",[e._v("webhook.eventpush.level")]),e._v(" "),t("td",[e._v("webhook事件推送级别，支持EMERGENCY,IMPORTANT,NORMAL三种级别;支持飞书和钉钉两种webhook")]),e._v(" "),t("td",[e._v("EMERGENCY")]),e._v(" "),t("td",[e._v("否")])])])]),e._v(" "),t("h2",{attrs:{id:"支持版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持版本"}},[e._v("#")]),e._v(" 支持版本")]),e._v(" "),t("p",[e._v("Backend使用JDK 1.8版本开发，因此运行环境需JDK 1.8及以上版本。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/openeuler/bishengjdk-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("HuaweiJDK 1.8"),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://github.com/openjdk/jdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenJDK 1.8"),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OracleJDK 1.8"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"启动和结果验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动和结果验证"}},[e._v("#")]),e._v(" 启动和结果验证")]),e._v(" "),t("h3",{attrs:{id:"启动backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动backend"}},[e._v("#")]),e._v(" 启动Backend")]),e._v(" "),t("p",[e._v("Backend的Jar包位于sermant-agent产品包agent/server目录下，通过执行以下命令来运行Backend(为方便验证webhook推送能力，指定事件推送级别为NORMAL)：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dwebhook.eventpush.level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("NORMAL "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" sermant-backend-1.0.0.jar\n")])])]),t("h3",{attrs:{id:"设置webhook信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置webhook信息"}},[e._v("#")]),e._v(" 设置webhook信息")]),e._v(" "),t("ul",[t("li",[e._v("通过浏览器访问地址"),t("code",[e._v("http://127.0.0.1:8900/")])]),e._v(" "),t("li",[e._v("点击菜单栏"),t("strong",[e._v("事件管理 -> 配置")]),e._v(" 进入webhook配置界面，如下图所示:")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-manager.png"}}),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-webhook.png"}}),e._v(" "),t("ul",[t("li",[e._v("开启webhook，如下图所示：")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-webhook-enable.png"}}),e._v(" "),t("ul",[t("li",[e._v("点击webhook的编辑按钮，设置webhook地址，如下图所示：")])]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-webhook-url.png"}}),e._v(" "),t("ul",[t("li",[e._v("点击webhook的测试连接按钮，可在对应webhook接收到测试事件通知\n"),t("ul",[t("li",[t("p",[e._v("飞书测试事件推送如下图所示：")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-webhook-feishu.png"}})],1),e._v(" "),t("li",[t("p",[e._v("钉钉测试事件推送如下图所示：")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-webhook-dingding.png"}})],1)])])]),e._v(" "),t("h3",{attrs:{id:"宿主应用挂载sermant-agent启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宿主应用挂载sermant-agent启动"}},[e._v("#")]),e._v(" 宿主应用挂载sermant-agent启动")]),e._v(" "),t("p",[e._v("首先按照上文参数配置一节描述，正确修改相关配置。然后参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[e._v("sermant-agent使用手册")]),e._v("中启动和结果验证一节描述的方式启动宿主应用。")],1),e._v(" "),t("h3",{attrs:{id:"结果验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果验证"}},[e._v("#")]),e._v(" 结果验证")]),e._v(" "),t("h4",{attrs:{id:"验证sermant实例状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证sermant实例状态"}},[e._v("#")]),e._v(" 验证sermant实例状态")]),e._v(" "),t("p",[e._v("通过浏览器访问地址"),t("code",[e._v("http://127.0.0.1:8900/")]),e._v(" 可查看前端展示页面，若页面中如下展示sermant-agent实例的心跳信息，则验证心跳成功。")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-instance.jpeg"}}),e._v(" "),t("h4",{attrs:{id:"验证事件管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证事件管理"}},[e._v("#")]),e._v(" 验证事件管理")]),e._v(" "),t("p",[e._v("通过点击事件管理标签中的观测按钮，可查看agent上报的事件信息，若页面中如下展示sermant-agent实例上报的事件信息，则验证事件上报成功。")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event.jpeg"}}),e._v(" "),t("h4",{attrs:{id:"验证webhook事件通知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证webhook事件通知"}},[e._v("#")]),e._v(" 验证webhook事件通知")]),e._v(" "),t("p",[e._v("由于backend设置了webhook事件推送级别为"),t("strong",[e._v("NORMAL")]),e._v("，所以webhook会接收到sermant启动上报的所有事件，推送内容格式与上述webhook测试连接相同，由于事件过多不便于展示，使用者可自行测试验证。")]),e._v(" "),t("h4",{attrs:{id:"验证事件查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证事件查询"}},[e._v("#")]),e._v(" 验证事件查询")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("上报时间查询")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，下图红色方框位置设置查询的事件时间范围，点击查询按钮进行查询")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-time.png"}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("服务名查询")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，下图红色方框位置设置按服务名查询，输入需要查询的服务名(支持单个或多个服务名查询)，点击查询按钮进行查询")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-service-1.png"}}),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-service-2.png"}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("ip查询")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，下图红色方框位置设置按ip查询，输入需要查询的ip地址(支持单个或多个ip查询)，点击查询按钮进行查询")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-ip-1.png"}}),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-ip-2.png"}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("级别查询")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，下图红色方框位置选择需要查询的事件级别，支持多选，选择后点击筛选进行查询")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-level.png "}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("类型查询")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，下图红色方框位置选择需要查询的事件类型，支持多选，选择后点击筛选进行查询")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-query-type.png"}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("详细信息展示")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，点击下图红色方框位置查看事件详细信息")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-detail.png"}})],1),e._v(" "),t("li",[t("p",[t("strong",[e._v("事件自动刷新")])]),e._v(" "),t("p",[e._v("在"),t("strong",[e._v("事件管理 -> 监测")]),e._v("页面，点击下图红色方框自动刷新按钮，开启事件自动刷新")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/backend/backend-event-auto.png"}})],1)])],1)}),[],!1,null,null,null);t.default=_.exports}}]);