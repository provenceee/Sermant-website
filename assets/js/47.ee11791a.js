(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{492:function(e,t,a){"use strict";a.r(t);var n=a(26),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dynamic-configuration-center-user-manual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-configuration-center-user-manual"}},[e._v("#")]),e._v(" Dynamic Configuration Center User Manual")]),e._v(" "),t("p",[e._v("This paper introduces the scenario model of Dynamic Configuration Center in Sermant and how to use it.")]),e._v(" "),t("h2",{attrs:{id:"dynamic-configuration-center-in-sermant-scene-and-positioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-configuration-center-in-sermant-scene-and-positioning"}},[e._v("#")]),e._v(" Dynamic Configuration Center in Sermant Scene and Positioning")]),e._v(" "),t("p",[e._v("The dynamic configuration center is a supporting component for the dynamic configuration function of Sermant, which allows Sermant to dynamically pull configuration from the configuration center to achieve a variety of service governance capabilities. Users can enable dynamic configuration capabilities and deploy dynamic configuration centers on demand.")]),e._v(" "),t("p",[e._v("Configuration center makes Sermant have the key ability of dynamic configuration on the basis of static configuration, and solves the problem of immutable configuration provided by the former, which is the implementation basis of service management diversification in Sermant. For example,")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("In the flowcontrol plugin, the configuration and delivery of traffic marking and flow control rules are realized by Sermant dynamic configuration and configuration center as the medium to achieve dynamic flow control.")])]),e._v(" "),t("li",[t("p",[e._v("In the routing plugin, the configuration of label routing rules is also effective through this configuration center capability.")])])]),e._v(" "),t("p",[e._v("There are many mature open source products in the field of real-time configuration center and Sermant does not provide a single implementation of configuration center, but integrates the open source configuration center to achieve the business goal of real-time dynamic configuration of service governance rules.")]),e._v(" "),t("p",[e._v("In the concrete implementation, sermant-agent defines a set of general interfaces for dynamic configuration. Based on this architecture,")]),e._v(" "),t("ul",[t("li",[e._v("The user determines the type of configuration center that the Sermant actually connects to through the configuration of the sermant-agent. It is also possible to directly operate the dynamic configuration center in the operation and maintenance scenario according to the manual of each service governance plugin to achieve the business goal of dynamic configuration.")]),e._v(" "),t("li",[e._v("In the development of plugins, developers only need the common interface of Sermant dynamic configuration to realize the function of dynamic configuration, and do not need to pay attention to the selection and implementation of the dynamic configuration center itself.")])]),e._v(" "),t("p",[e._v("The following architecture diagram illustrates the principle of the architecture.")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/dynamic-configuration-center.png"}}),e._v(" "),t("h2",{attrs:{id:"parameter-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[e._v("#")]),e._v(" Parameter Configuration")]),e._v(" "),t("p",[e._v("For configuration of the dynamic configuration center, see the corresponding open source dynamic configuration center("),t("a",{attrs:{href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZooKeeper"),t("OutboundLink")],1),e._v(" , "),t("a",{attrs:{href:""}},[e._v("ServiceComb Kie")]),e._v(". We will not go into details in this paper.")]),e._v(" "),t("p",[e._v("First, when configure "),t("code",[e._v("agent.config.serviceBlackList")]),e._v(" in "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#parameters-related-to-agent-framework"}},[e._v("Parameters Related to Agent Framework of Sermant-agent User Manual")]),e._v(" to decide which core services are forbidden to start, it is necessary to remove "),t("code",[e._v("com.huaweicloud.sermant.implement.service.dynamicconfig.BufferedDynamicConfigService")]),e._v(" to "),t("strong",[e._v("enable dynamic configuration service")]),e._v(".")],1),e._v(" "),t("p",[e._v("Second, you can configure parameters for dynamic configuration center of sermant-agent in "),t("code",[e._v("agent/config/config.properties")]),e._v(" of sermant-agent product package. For specific parameters, please refer to "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#parameters-related-to-dynamic-configuration-center"}},[e._v("Parameters Related to Dynamic Configuration Center of Sermant-agent User Manual")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"sermant-dynamic-configuration-center-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-dynamic-configuration-center-model"}},[e._v("#")]),e._v(" Sermant Dynamic Configuration Center Model")]),e._v(" "),t("p",[e._v("以sermant-agent中的"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/service/dynamicconfig/api/KeyGroupService.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeyGroupService.publishConfig"),t("OutboundLink")],1),e._v("接口函数说明Sermant中的配置模型。")]),e._v(" "),t("p",[e._v("The configuration model in Sermant is illustrated by the interface function "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/service/dynamicconfig/api/KeyGroupService.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeyGroupService.publishConfig"),t("OutboundLink")],1),e._v(" in sermant-agent.")]),e._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * Sets the configuration value for a key under the group\n *\n * @param key     key\n * @param group   group\n * @param content configuration value\n * @return success\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("publishConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("As you can see in the example above, the two parameters used to determine the configuration in sermant-agent are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("key")]),e._v(": the key value of the smallest configuration unit。")]),e._v(" "),t("li",[t("code",[e._v("group")]),e._v(": group, like a prefix for "),t("code",[e._v("key")]),e._v(". Sermant mainly uses the group to be related with some configuration center tenant isolation function。")])]),e._v(" "),t("p",[e._v("For different configuration centers, there are different matching models for group and key. This is explained in detail below.")]),e._v(" "),t("p",[e._v("For users, to use the dynamic configuration center, you need to obtain the instance of "),t("code",[e._v("DynamicConfigService")]),e._v(" in the development process of the plugin, and call various abstract interfaces provided by "),t("code",[e._v("DynamicConfigService")]),e._v(" according to their own scenarios to perform corresponding service governance. You can refer to "),t("a",{attrs:{href:"https://sermant.io/zh/document/developer-guide/dev-complex-plugin.html#%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE%E5%8A%9F%E8%83%BD",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugin function development related chapters"),t("OutboundLink")],1),e._v(" for detailed API interface parsing and development guide.")]),e._v(" "),t("h2",{attrs:{id:"sermant-implementation-of-configuration-model-based-on-different-dynamic-configuration-centers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-implementation-of-configuration-model-based-on-different-dynamic-configuration-centers"}},[e._v("#")]),e._v(" Sermant Implementation of Configuration Model Based on Different Dynamic Configuration Centers")]),e._v(" "),t("p",[e._v("The following sections discuss several typical implementations of configuration centers. By understanding the implementation of the model, users can understand how to find the corresponding configuration items in different configuration centers and how to configure them dynamically to achieve the goal of service governance management.")]),e._v(" "),t("h3",{attrs:{id:"implementation-of-configuration-model-based-on-zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-configuration-model-based-on-zookeeper"}},[e._v("#")]),e._v(" Implementation of Configuration Model Based on Zookeeper")]),e._v(" "),t("p",[e._v("For "),t("code",[e._v("ZooKeeper")]),e._v(" servers, the dynamic configuration is the value of the ZooKeeper node. The "),t("code",[e._v("Key")]),e._v(" and "),t("code",[e._v("Group")]),e._v(" should be used as elements to build the "),t("strong",[e._v("node path")]),e._v(". Since "),t("code",[e._v("Group")]),e._v(" contains user-specific information, it should be the prefix string for the "),t("strong",[e._v("node path")]),e._v(" so that the "),t("code",[e._v("Key")]),e._v(" value exists as the second half:")]),e._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("/${group}/${key} -> ${value}\n")])])]),t("h3",{attrs:{id:"implementation-of-configuration-model-based-on-servicecomb-kie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-configuration-model-based-on-servicecomb-kie"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Implementation of Configuration Model Based on ServiceComb Kie")])]),e._v(" "),t("p",[e._v("For the "),t("code",[e._v("Kie")]),e._v(" service, the so-called dynamic configuration is the value of the "),t("code",[e._v("Kie'")]),e._v(" configuration. "),t("code",[e._v("Kie")]),e._v(" queries the associated configuration based on the label. "),t("code",[e._v("Key")]),e._v(" and "),t("code",[e._v("Group")]),e._v(" are the elements of the associated configuration. "),t("code",[e._v("Key")]),e._v(" is the name of the configured Key, and "),t("code",[e._v("Group")]),e._v(" is the label of the associated Key. Each "),t("code",[e._v("Key")]),e._v(" can be configured with one or more labels. The format is usually as follows:")]),e._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[e._v("{\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"keyName",                # key')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"value",                # value')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "labels"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("{")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "service"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"serviceName"     #labels, kv form and support multiple labels')]),e._v("\n  },\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "status"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"enabled"')]),e._v("\n}\n")])])]),t("p",[e._v("Compared with "),t("code",[e._v("Zookeeper")]),e._v(", "),t("code",[e._v("Kie")]),e._v(" is more focused on "),t("code",[e._v("Group")]),e._v(" and its value transfer format is different. The value transfer format of "),t("code",[e._v("Kie")]),e._v(" is as follows:")]),e._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("groupKey1=groupValue1[&groupKey2=groupVaue2...]\n")])])]),t("blockquote",[t("p",[t("code",[e._v("groupKey")]),e._v(" is the key of label, "),t("code",[e._v("groupValue")]),e._v(" is the value of label. Multiple labels are spliced by "),t("code",[e._v("&")]),e._v(". "),t("code",[e._v("Group")]),e._v(" could be  generated by LabelGroupUtils.")]),e._v(" "),t("p",[t("strong",[e._v("NOTE：")])]),e._v(" "),t("p",[e._v("​\tIf the input "),t("code",[e._v("Group")]),e._v(" is not in the above format, the label "),t("code",[e._v("Group=input Group")]),e._v(" will be added by default.")])]),e._v(" "),t("h2",{attrs:{id:"configuration-center-and-version-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-center-and-version-supported"}},[e._v("#")]),e._v(" Configuration Center and Version Supported")]),e._v(" "),t("p",[e._v("The configuration center components currently supported by Sermant are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZooKeeper"),t("OutboundLink")],1),e._v(", version 3.6.3.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://servicecomb.apache.org/cn/release/kie-downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceComb Kie"),t("OutboundLink")],1),e._v(", version 0.2.0.")])]),e._v(" "),t("h2",{attrs:{id:"startup-and-result-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startup-and-result-validation"}},[e._v("#")]),e._v(" Startup and Result Validation")]),e._v(" "),t("p",[e._v("This document uses the demo plugin in "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/sermant-template/template",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sermant-examples"),t("OutboundLink")],1),e._v(" to demonstrate dynamic configuration capability, whose implementation adds a listener to listen for dynamic configuration changes.")]),e._v(" "),t("h3",{attrs:{id:"zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" Zookeeper")]),e._v(" "),t("h4",{attrs:{id:"startup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startup"}},[e._v("#")]),e._v(" Startup")]),e._v(" "),t("p",[e._v("First, start the configuration center Zookeeper. You can learn how to deployment it by official information.")]),e._v(" "),t("p",[e._v("Then refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html"}},[e._v("Sermant-agent User Manual")]),e._v(" startup and result verification section to start the host application mounting sermant-agent.")],1),e._v(" "),t("h4",{attrs:{id:"publish-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-configuration"}},[e._v("#")]),e._v(" Publish Configuration")]),e._v(" "),t("p",[e._v("Use the Zookeeper command-line tool or visualization tool to publish configuration. Using a command-line tool as an example, enter the following command:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("create /app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default/demo "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),e._v("\n")])])]),t("p",[e._v("Where "),t("code",[e._v("app=default")]),e._v(" is the group, "),t("code",[e._v("demo")]),e._v(" is the key, and "),t("code",[e._v("test")]),e._v(" is the value.")]),e._v(" "),t("p",[e._v("When the node data is successfully created, the dynamic configuration is successfully published in the configuration center.")]),e._v(" "),t("h4",{attrs:{id:"validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),t("p",[e._v("Check out the sermant log file sermant-0.log. The default log file path is "),t("code",[e._v("./logs/sermant/core")]),e._v(".")]),e._v(" "),t("p",[e._v("Observe if the log file contains the following log output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2022-12-29 15:48:01.963 [ERROR] [com.huawei.example.demo.common.DemoLogger] [println:42] [main-EventThread] [DemoDynaConfService]-DynamicConfigEvent{key='demo', group='app=default', content='test', eventType=CREATE} com.huaweicloud.sermant.core.service.dynamicconfig.common.DynamicConfigEvent[source=demo,app=default]\n")])])]),t("p",[e._v("If the log output is correct, it means that the dynamic configuration is published successfully and the sermant-agent has listened to the dynamic configuration.")]),e._v(" "),t("h3",{attrs:{id:"kie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kie"}},[e._v("#")]),e._v(" Kie")]),e._v(" "),t("p",[e._v("Kie is used in a similar way to Zoopeepr, with the only difference that publishing configuration is performed in the way of Kie.")]),e._v(" "),t("h4",{attrs:{id:"startup-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startup-2"}},[e._v("#")]),e._v(" Startup")]),e._v(" "),t("p",[e._v("First, start the configuration center Kie. You can learn how to deployment it by official information.")]),e._v(" "),t("p",[e._v("Then refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html"}},[e._v("Sermant-agent User Manual")]),e._v(" startup and result verification section to start the host application mounting sermant-agent.")],1),e._v(" "),t("h4",{attrs:{id:"publish-configuration-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-configuration-2"}},[e._v("#")]),e._v(" Publish Configuration")]),e._v(" "),t("p",[e._v("Publish the following dynamic configuration via Kie:")]),e._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[e._v("{\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"demo",          ')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"test",              ')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "labels"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("{")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"default"     ')]),e._v("\n  },\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "status"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"enabled"')]),e._v("\n}\n")])])]),t("p",[e._v("Where "),t("code",[e._v("app=default")]),e._v(" is the group, "),t("code",[e._v("demo")]),e._v(" is the key, and "),t("code",[e._v("test")]),e._v(" is the value.")]),e._v(" "),t("p",[e._v("When the node data is successfully created, the dynamic configuration is successfully published in the configuration center.")]),e._v(" "),t("h4",{attrs:{id:"validation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation-2"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),t("p",[e._v("Check out the sermant log file sermant-0.log. The default log file path is "),t("code",[e._v("./logs/sermant/core")]),e._v(".")]),e._v(" "),t("p",[e._v("Observe if the log file contains the following log output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2022-12-29 16:45:14.456 [ERROR] [com.huawei.example.demo.common.DemoLogger] [println:42] [main-EventThread] [DemoDynaConfService]-DynamicConfigEvent{key='demo', group='app=default', content='test', eventType=CREATE} com.huaweicloud.sermant.core.service.dynamicconfig.common.DynamicConfigEvent[source=demo,app=default]\n")])])]),t("p",[e._v("If the log output is correct, it means that the dynamic configuration is published successfully and the sermant-agent has listened to the dynamic configuration.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);