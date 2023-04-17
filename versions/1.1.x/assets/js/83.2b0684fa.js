(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{526:function(t,e,a){"use strict";a.r(e);var r=a(39),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"backend使用手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend使用手册"}},[t._v("#")]),t._v(" Backend使用手册")]),t._v(" "),e("p",[t._v("Backend包含Sermant数据处理后端模块和前端信息展示模块，旨在为Sermant提供运行时的可观测能力，当前主要包括Sermant心跳信息的接收和展示等功能。本文介绍如何使用Backend。")]),t._v(" "),e("p",[t._v("Backend与sermant-agent配合使用。sermant-agent挂载在宿主应用启动后作为数据发送端，可定时发送当前Sermant的心跳数据，包含应用名、实例ID、版本号、IP、时间戳、挂载插件信息等。Backend作为数据接收端，可接收处理sermant-agent发送的心跳数据，并在前端可视化展示，提供观测运行状态的能力。")]),t._v(" "),e("p",[t._v("Backend为"),e("strong",[t._v("非必要组件")]),t._v("，用户可按需部署。")]),t._v(" "),e("h2",{attrs:{id:"参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),e("h3",{attrs:{id:"sermant-agent参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent参数配置"}},[t._v("#")]),t._v(" sermant-agent参数配置")]),t._v(" "),e("p",[t._v("首先在"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#agent框架相关参数"}},[t._v("Sermant-agent使用手册agent框架相关参数配置")]),t._v("中"),e("code",[t._v("agent.config.serviceBlackList")]),t._v(" 配置禁止启动的核心服务时，需去除"),e("code",[t._v("com.huaweicloud.sermant.implement.service.heartbeat.HeartbeatServiceImpl")]),t._v("以"),e("strong",[t._v("启用心跳服务")]),t._v("。")],1),t._v(" "),e("p",[t._v("其次，修改sermant-agent产品包"),e("code",[t._v("agent/config/config.properties")]),t._v("配置文件的相关配置，具体参数说明请参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#Backend相关参数"}},[t._v("Sermant-agent使用手册Backend相关参数配置")]),t._v("。")],1),t._v(" "),e("p",[t._v("心跳的部分数据从sermant-agent启动参数中采集，因此还需按实际场景配置启动参数，具体参数说明请参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#Sermant-agent启动参数"}},[t._v("Sermant-agent使用手册的启动参数配置")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"backend参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend参数配置"}},[t._v("#")]),t._v(" Backend参数配置")]),t._v(" "),e("p",[t._v("Backend参数可在编译打包前通过"),e("code",[t._v("sermant-backend-lite/src/main/resources/application.properties")]),t._v("配置文件进行修改，同时也支持在jar包启动前通过-D参数或环境变量的方式进行配置。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("参数键")])]),t._v(" "),e("th",[e("strong",[t._v("说明")])]),t._v(" "),e("th",[e("strong",[t._v("默认值")])]),t._v(" "),e("th",[e("strong",[t._v("是否必须")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("server.port")]),t._v(" "),e("td",[t._v("Backend的服务占用端口")]),t._v(" "),e("td",[t._v("8900")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("netty.port")]),t._v(" "),e("td",[t._v("Netty消息接收端口")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("netty.wait.time")]),t._v(" "),e("td",[t._v("Netty的读等待时间，单位：s")]),t._v(" "),e("td",[t._v("60")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("max.effective.time")]),t._v(" "),e("td",[t._v("判断应用心跳存活的有效时间，单位：ms")]),t._v(" "),e("td",[t._v("60000")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("max.cache.time")]),t._v(" "),e("td",[t._v("应用心跳在缓存中的有效时间，单位：ms")]),t._v(" "),e("td",[t._v("600000")]),t._v(" "),e("td",[t._v("否")])])])]),t._v(" "),e("h2",{attrs:{id:"支持版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持版本"}},[t._v("#")]),t._v(" 支持版本")]),t._v(" "),e("p",[t._v("Backend使用JDK 1.8版本开发，因此运行环境需JDK 1.8及以上版本。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://gitee.com/openeuler/bishengjdk-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("HuaweiJDK 1.8"),e("OutboundLink")],1),t._v(" / "),e("a",{attrs:{href:"https://github.com/openjdk/jdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenJDK 1.8"),e("OutboundLink")],1),t._v(" / "),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OracleJDK 1.8"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"启动和结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动和结果验证"}},[t._v("#")]),t._v(" 启动和结果验证")]),t._v(" "),e("h3",{attrs:{id:"启动backend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动backend"}},[t._v("#")]),t._v(" 启动Backend")]),t._v(" "),e("p",[t._v("Backend的Jar包位于sermant-agent产品包agent/server目录下，通过执行以下命令来运行Backend：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" sermant-backend-lite.jar\n")])])]),e("h3",{attrs:{id:"宿主应用挂载sermant-agent启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宿主应用挂载sermant-agent启动"}},[t._v("#")]),t._v(" 宿主应用挂载sermant-agent启动")]),t._v(" "),e("p",[t._v("首先按照上文参数配置一节描述，正确修改相关配置。然后参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[t._v("sermant-agent使用手册")]),t._v("中启动和结果验证一节描述的方式启动宿主应用。")],1),t._v(" "),e("h3",{attrs:{id:"结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结果验证"}},[t._v("#")]),t._v(" 结果验证")]),t._v(" "),e("p",[t._v("通过浏览器访问地址http://127.0.0.1:8900/ 可查看前端展示页面，若页面中如下展示sermant-agent实例的心跳信息，则说明部署验证成功。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/backend.png"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);