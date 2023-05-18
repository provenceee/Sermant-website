(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{509:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"创建首个插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建首个插件"}},[t._v("#")]),t._v(" 创建首个插件")]),t._v(" "),a("p",[t._v("本文用于指导如何在本地开发你的第一个插件。")]),t._v(" "),a("h2",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gitee.com/openeuler/bishengjdk-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("HuaweiJDK 1.8"),a("OutboundLink")],1),t._v(" / "),a("a",{attrs:{href:"https://github.com/openjdk/jdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenJDK 1.8"),a("OutboundLink")],1),t._v(" / "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OracleJDK 1.8"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven 3"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"基于archetype模版创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于archetype模版创建项目"}},[t._v("#")]),t._v(" 基于Archetype模版创建项目")]),t._v(" "),a("h3",{attrs:{id:"生成项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成项目"}},[t._v("#")]),t._v(" 生成项目")]),t._v(" "),a("p",[t._v("本地执行如下Maven指令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ mvn archetype:generate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeGroupId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud.sermant "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeArtifactId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sermant-template-archetype "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DgroupId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud.sermant "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dversion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dpackage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DartifactId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("first-plugin\n")])])]),a("p",[t._v("执行上述指令后，出现下述日志后回车进行确认：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: groupId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.huaweicloud.sermant\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: artifactId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first-plugin\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: package "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.huaweicloud\nConfirm properties configuration:\ngroupId: com.huaweicloud.sermant\nartifactId: first-plugin\nversion: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1\npackage: com.huaweicloud\n Y: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \n")])])]),a("p",[t._v("出现下述成功提示日志，则通过Archetype模版创建项目成功：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ------------------------------------------------------------------------\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" BUILD SUCCESS\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ------------------------------------------------------------------------\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total time:  01:30 min\n")])])]),a("h3",{attrs:{id:"工程结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程结构"}},[t._v("#")]),t._v(" 工程结构")]),t._v(" "),a("p",[t._v("基于Archetype生成的模板工程目录如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── application\n├── config\n└── template\n    ├── config\n    ├── template-plugin\n    └── template-service\n")])])]),a("p",[a("code",[t._v("application")]),t._v("：为测试应用模块，该模块用于测试模板中已定义的插件是否能够生效，正式进行项目开发时可清理。")]),t._v(" "),a("p",[a("code",[t._v("config")]),t._v("：为Sermant的配置目录，参考"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#Sermant-agent使用参数配置"}},[t._v("Sermant配置")]),t._v("。")],1),t._v(" "),a("p",[a("code",[t._v("template")]),t._v("：template插件模块，此处进行插件能力的开发。")]),t._v(" "),a("p",[a("code",[t._v("template\\template-plugin")]),t._v("：template插件的主模块，参考"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/package-structure.html#插件主模块"}},[t._v("插件主模块")]),t._v("。")],1),t._v(" "),a("p",[a("code",[t._v("template\\template-service")]),t._v("：template插件的服务模块，参考"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/package-structure.html#插件服务模块"}},[t._v("插件服务模块")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"开发插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发插件"}},[t._v("#")]),t._v(" 开发插件")]),t._v(" "),a("p",[t._v("首先找到模板工程"),a("code",[t._v("template\\template-plugin")]),t._v("下的"),a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v("类，我们可以在其中声明我们期望增强的类，指定该类中我们期望增强的方法，并为其定义增强逻辑。")]),t._v(" "),a("h3",{attrs:{id:"声明需增强的类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明需增强的类"}},[t._v("#")]),t._v(" 声明需增强的类")]),t._v(" "),a("p",[t._v("指定期望增强的类，需在"),a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v("中的"),a("code",[t._v("getClassMatcher()")]),t._v("方法实现如下逻辑：")]),t._v(" "),a("ol",[a("li",[t._v("定义"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/bytecode-enhancement.html#类匹配器"}},[t._v("类匹配器")]),a("code",[t._v('ClassMatcher.nameEquals("com.huaweicloud.template.Application")')]),t._v("，该匹配器通过类名称匹配"),a("code",[t._v("com.huaweicloud.template.Application")]),t._v("类。")],1)]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassMatcher")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClassMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.template.Application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注：上述逻辑已在模版代码中实现")]),t._v(" "),a("p",[a("code",[t._v("com.huaweicloud.template.Application")]),t._v("逻辑如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good afternoon!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们将通过该插件在其前后增加"),a("code",[t._v('System.out.println("Good morning!")')]),t._v("和"),a("code",[t._v('System.out.println("Good night!")')]),t._v("逻辑。")])]),t._v(" "),a("h3",{attrs:{id:"声明需增强的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明需增强的方法"}},[t._v("#")]),t._v(" 声明需增强的方法")]),t._v(" "),a("p",[t._v("指定需要增强的类后，需要指定该类中你期望增强的方法，并为该方法定义增强逻辑，上述步骤需要在"),a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v("中的"),a("code",[t._v("getInterceptDeclarers(ClassLoader classLoader)")]),t._v("方法中添加如下逻辑：")]),t._v(" "),a("ol",[a("li",[t._v("定义一个"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/bytecode-enhancement.html#方法匹配器"}},[t._v("方法匹配器")]),a("code",[t._v('MethodMatcher.nameEquals("main")')]),t._v("，该匹配器通过方法名称匹配"),a("code",[t._v("com.huaweicloud.template.Application")]),t._v("类中的"),a("code",[t._v("main")]),t._v("方法。")],1),t._v(" "),a("li",[t._v("定义针对"),a("code",[t._v("main")]),t._v("方法的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/bytecode-enhancement.html#拦截器"}},[t._v("拦截器")]),t._v("，并在其"),a("code",[t._v("before")]),t._v("方法中补充"),a("code",[t._v('System.out.println("Good morning!")')]),t._v("逻辑，"),a("code",[t._v("after")]),t._v("方法中补充"),a("code",[t._v('System.out.println("Good night!")')]),t._v("逻辑，"),a("code",[t._v("before")]),t._v("方法和"),a("code",[t._v("after")]),t._v("方法将会在"),a("code",[t._v("main")]),t._v("方法执行前后生效。")],1)]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInterceptDeclarers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassLoader")]),t._v(" classLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good morning!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good night!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onThrow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注：上述逻辑已在模版代码中实现")])]),t._v(" "),a("h3",{attrs:{id:"添加增强声明的spi配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加增强声明的spi配置"}},[t._v("#")]),t._v(" 添加增强声明的SPI配置")]),t._v(" "),a("p",[t._v("开发插件的最后，不要忘记添加增强声明的"),a("strong",[t._v("SPI")]),t._v("配置，在工程中"),a("code",[t._v("template\\template-plugin")]),t._v("下的资源目录"),a("code",[t._v("resources")]),t._v("中添加"),a("code",[t._v("META-INF/services")]),t._v("目录，并在其中创建名为"),a("code",[t._v("com.huaweicloud.sermant.core.plugin.agent.declarer.PluginDeclarer")]),t._v("的"),a("strong",[t._v("SPI")]),t._v("文件，并向其中添加字节码增强声明类的类名：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer\n")])])]),a("h2",{attrs:{id:"打包构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包构建"}},[t._v("#")]),t._v(" 打包构建")]),t._v(" "),a("p",[t._v("在生成的项目根目录下执行 "),a("strong",[t._v("mvn package")]),t._v("，在生成项目的根目录下会生成构建产物目录：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── agent\n│   ├── Application.jar\n│   ├── common\n│   ├── config\n│   ├── core\n│   ├── implement\n│   ├── pluginPackage\n│   │   └── template\n│   └── sermant-agent.jar\n")])])]),a("p",[a("code",[t._v("Application.jar")]),t._v("为测试应用的可执行包，其他目录结构参考"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/#产品目录说明"}},[t._v("产品目录说明")])],1),t._v(" "),a("blockquote",[a("p",[t._v("注：该模版利用Maven的"),a("code",[t._v("maven-dependency-plugin:copy")]),t._v("插件将"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/#sermant-agent"}},[t._v("Sermant必要核心组件")]),t._v("从Maven中心仓拉取到本地构建产物目录中，开发者无需再关心启动Sermant所需的依赖及配置。")],1),t._v(" "),a("p",[a("code",[t._v("maven-dependency-plugin:copy")]),t._v("插件使用方式可参考Maven官方文档"),a("a",{attrs:{href:"https://maven.apache.org/plugins/maven-dependency-plugin/examples/copying-artifacts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dmaven-dependency-plugin:copy"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在项目根目录执行 "),a("code",[t._v("cd agent/")]),t._v("，在其中执行如下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("独立运行测试应用，执行如下命令 "),a("strong",[t._v("java -jar Application.jar")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" Application.jar \nGood afternoon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("携带"),a("strong",[t._v("Sermant")]),t._v("运行测试应用，执行如下命令 "),a("strong",[t._v("java -javaagent:sermant-agent.jar -jar Application.jar")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" Application.jar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading core library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Building argument map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading sermant agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Load sermant done. \nGood morning"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood afternoon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood night"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("p",[t._v("可以看到，在插件中定义的执行逻辑已被增强到测试应用中，至此你的首个插件就开发成功了，下面开始进行Sermant插件的进阶开发吧。")])])}),[],!1,null,null,null);a.default=n.exports}}]);