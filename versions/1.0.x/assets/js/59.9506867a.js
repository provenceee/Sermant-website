(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{501:function(a,t,e){"use strict";e.r(t);var s=e(39),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"快速开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),t("h2",{attrs:{id:"下载或编译111111"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载或编译111111"}},[a._v("#")]),a._v(" 下载或编译111111")]),a._v(" "),t("p",[a._v("点击"),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("此处"),t("OutboundLink")],1),a._v("下载"),t("strong",[a._v("Sermant")]),a._v("二进制包。如果您想自己编译项目，请遵循以下步骤。")]),a._v(" "),t("p",[a._v("执行"),t("em",[a._v("maven")]),a._v("命令来打包"),t("strong",[a._v("Sermant")]),a._v("项目的 "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/sermant-template",target:"_blank",rel:"noopener noreferrer"}},[a._v("demo module"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dmaven.test.skip")]),a._v("\n")])])]),t("h2",{attrs:{id:"启动sermant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动sermant"}},[a._v("#")]),a._v(" 启动Sermant")]),a._v(" "),t("p",[t("strong",[a._v("提前准备和启动zookeeper")]),a._v("，再启动 "),t("strong",[a._v("Sermant")]),a._v(" demo 应用：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run under Linux")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cp")]),a._v(" sermant-template/demo-application/target/demo-application.jar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -javaagent:sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  com.huawei.example.demo.DemoApplication\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run under Windows")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cp")]),a._v(" sermant-template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("demo-application"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("demo-application.jar ^\n  -javaagent:sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test ^\n  com.huawei.example.demo.DemoApplication\n")])])]),t("p",[a._v("查看demo-application的日志文件开头是否包含以下内容：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[INFO] Loading core library... \n[INFO] Building argument map... \n[INFO] Loading sermant agent... \n[INFO] Load sermant done. \n")])])]),t("p",[a._v("若日志如上正常输出，则说明sermant挂载成功。")])])}),[],!1,null,null,null);t.default=n.exports}}]);