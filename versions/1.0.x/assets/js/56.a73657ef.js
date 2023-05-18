(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{502:function(t,a,v){"use strict";v.r(a);var e=v(26),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"流控常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流控常见问题"}},[t._v("#")]),t._v(" 流控常见问题")]),t._v(" "),a("p",[t._v("本文档主要说明在使用流控插件时遇到的常见问题。")]),t._v(" "),a("h2",{attrs:{id:"关于业务场景的apipath是如何定义的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于业务场景的apipath是如何定义的"}},[t._v("#")]),t._v(" 关于业务场景的apiPath是如何定义的")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("apiPath")]),t._v("指需要作用的接口，针对不同框架定义会有所不同，当前支持http与dubbo协议请求：\n"),a("ul",[a("li",[a("code",[t._v("http协议")]),t._v("： 指请求的路径，例如存在接口http://localhost:8080/test, 则其"),a("code",[t._v("apiPath")]),t._v("为"),a("code",[t._v("/test")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("dubbo协议")]),t._v("：由"),a("code",[t._v('"请求接口：接口版本.方法"')]),t._v("组成，如果无接口版本或者版本为0.0.0，则"),a("code",[t._v("apiPath")]),t._v("为"),a("code",[t._v('"请求接口.方法"')]),t._v("。")])])])]),t._v(" "),a("h2",{attrs:{id:"如何确定配置规则生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何确定配置规则生效"}},[t._v("#")]),t._v(" 如何确定配置规则生效")]),t._v(" "),a("ul",[a("li",[t._v("首先需在配置中心上正确配置相关业务场景与治理策略，配置后可观察agent日志，一般在jar包启动路径的logs文件夹下，查看sermant-x.log文件， 搜索"),a("code",[t._v("has been")]),t._v("或者配置的键名， 若搜索到的日志与当前时间匹配，则说明规则已生效。")])]),t._v(" "),a("h2",{attrs:{id:"熔断策略未生效的可能原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断策略未生效的可能原因"}},[t._v("#")]),t._v(" 熔断策略未生效的可能原因")]),t._v(" "),a("ul",[a("li",[t._v("熔断生效有一定的前提，通常熔断从两个指标来判定：\n"),a("ul",[a("li",[a("code",[t._v("异常比例")]),t._v("：即接口请求发生异常时所占比例，在规定时间内发生异常的比例大于配置的即会触发熔断；")]),t._v(" "),a("li",[a("code",[t._v("慢调用比例")]),t._v("：即接口请求发生慢调用所占比例，设置熔断策略时需设置慢调用的阈值，例如100ms，则必须接口调用耗时超出100ms且超过配置的慢调用比例才可触发；")])])]),t._v(" "),a("li",[t._v("因此针对以上两项指标，首先排查应用接口是否满足以上其中一个条件，且规则时间内调用超过最小调用数（minimumNumberOfCalls配置）才可触发。")])]),t._v(" "),a("h2",{attrs:{id:"隔离仓规则未生效的可能原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离仓规则未生效的可能原因"}},[t._v("#")]),t._v(" 隔离仓规则未生效的可能原因")]),t._v(" "),a("ul",[a("li",[t._v("隔离仓规则需满足以下条件：\n"),a("ul",[a("li",[a("code",[t._v("调用满足并发数")]),t._v("（maxConcurrentCalls配置）要求，例如配置的阈值为2，则确保并发数需大于2；")]),t._v(" "),a("li",[a("code",[t._v("最大等待时间")]),t._v("（maxWaitDuration配置），即在达到最大并发数时，线程等待最大时间，超过该时间未拿到许可便会触发；")])])]),t._v(" "),a("li",[t._v("因此在实际测试时，若模拟该规则，建议确保业务接口耗时大于最大等待时间，并且并发数大于配置值。")])]),t._v(" "),a("h2",{attrs:{id:"重试规则未生效的可能原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重试规则未生效的可能原因"}},[t._v("#")]),t._v(" 重试规则未生效的可能原因")]),t._v(" "),a("ul",[a("li",[t._v("确保下游应用抛出的异常或者状态码符合重试策略要求，例如默认dubbo会检测下游是否抛出RpcException，Spring应用则可配置指定状态码检测。")])]),t._v(" "),a("h2",{attrs:{id:"启动报httphostconnectexception异常的可能原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动报httphostconnectexception异常的可能原因"}},[t._v("#")]),t._v(" 启动报HttpHostConnectException异常的可能原因")]),t._v(" "),a("ul",[a("li",[t._v("出现该异常的原因是未启动"),a("code",[t._v("Sermant")]),t._v("后台服务"),a("code",[t._v("sermant-backhend")]),t._v(", 找到启动类"),a("code",[t._v("com.huawei.apm.backend.NettyServerApplication")]),t._v("启动后台服务，并重启应用即可。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);