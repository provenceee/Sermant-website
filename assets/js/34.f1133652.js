(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{479:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"third-party-copyright-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#third-party-copyright-guide"}},[e._v("#")]),e._v(" Third Party Copyright Guide")]),e._v(" "),t("p",[e._v("This document focus on the "),t("strong",[e._v("copyright")]),e._v(" of "),t("strong",[e._v("third party")]),e._v(" source code or binary packages involved in the development process.")]),e._v(" "),t("h2",{attrs:{id:"source-code-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-code-reference"}},[e._v("#")]),e._v(" Source Code Reference")]),e._v(" "),t("p",[e._v("If the following situation exists in the code, it is considered as a "),t("strong",[e._v("reference")]),e._v(" to "),t("strong",[e._v("third party")]),e._v(" source code:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Copy Overall")]),e._v(": Copy files directly from "),t("strong",[e._v("third party")]),e._v(" source code and make changes based on them.")]),e._v(" "),t("li",[t("strong",[e._v("Partial Copy")]),e._v(": Copy some methods or inner classes in "),t("strong",[e._v("third party")]),e._v(" source code and use them in the self-developed code.")]),e._v(" "),t("li",[t("strong",[e._v("Reference Design")]),e._v(": If developers refer to the architecture of a "),t("strong",[e._v("third party")]),e._v(" when designing the architecture, and there is the same content in the two architectures, it is also considered as "),t("strong",[e._v("reference")]),e._v(".")])]),e._v(" "),t("p",[e._v("In all three cases, developers are required to complete the following work with the files involved:")]),e._v(" "),t("ul",[t("li",[e._v("Add instructions for copying "),t("strong",[e._v("third party")]),e._v(" source code to your "),t("code",[e._v("LICENSE")]),e._v(" file, like this:"),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("The following files contain a portion of ${THIRD PARTY PROJECT NAME} project.\n\n${RELATED FILE A} in this product is copied from ${THIRD PARTY FILE A} of ${THIRD PARTY PROJECT NAME} project.\n\n${RELATED FILE B} in this product is copied from ${THIRD PARTY FILE B} of ${THIRD PARTY PROJECT NAME} project.\n\n...\n\n${THIRD PARTY PROJECT NAME} project is published at ${THIRD PARTY PROJECT CODEBASES URL} and its license is ${THIRD PARTY PROJECT LICENSE NAME}.\n")])])]),e._v("Note:\n"),t("ul",[t("li",[t("p",[t("code",[e._v("THIRD PARTY PROJECT NAME")]),e._v(" represents the name of the "),t("strong",[e._v("third party")]),e._v(" project.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("RELATED FILE")]),e._v(" is the "),t("strong",[e._v("related file")]),e._v(" for this project: if it is a class, type the path of full qualified class name; Otherwise, type the project relative path.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("THIRD PARTY FILE")]),e._v(" represents the "),t("strong",[e._v("copied file")]),e._v(" of the "),t("strong",[e._v("third party")]),e._v(": if it is a class, type the path of full qualified class name; Otherwise, type the project relative path. If the "),t("strong",[e._v("third party")]),e._v(" project is a single module project, you can also type the relative path to the source directory.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("THIRD PARTY PROJECT CODEBASES URL")]),e._v(" represents the address of the "),t("strong",[e._v("third party")]),e._v(" project repository; If you can't find the address of source code, you can change it to the official website address or source code download address. In short, the principle is to be traceable.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("THIRD PARTY PROJECT LICENSE NAME")]),e._v(" represents to the "),t("code",[e._v("LICENSE")]),e._v(" name of the "),t("strong",[e._v("third party")]),e._v(" project, which is usually referred to the "),t("code",[e._v("licenses")]),e._v(" label in the "),t("code",[e._v("pom")]),e._v(" file, or pluralized if multiple "),t("code",[e._v("LICENSE")]),e._v(" exist:")]),e._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("...\nand its licenses are ${LICENSE A}, ${LICENSE B}, ..., and ${LICENSE C}.\n")])])])]),e._v(" "),t("li",[t("p",[e._v("If there is already an entry for the target "),t("strong",[e._v("third party")]),e._v(" project, just cut back and fill in the copy information in the middle.")])])])]),e._v(" "),t("li",[e._v("Type the header of the "),t("strong",[e._v("copied file")]),e._v(" (if exists) in the "),t("strong",[e._v("file in question")]),e._v(" and add the copy source information, like this:"),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("Based on ${THIRD PARTY FILE} from the ${THIRD PARTY PROJECT NAME} project.\n")])])])]),e._v(" "),t("li",[e._v("If a "),t("strong",[e._v("third party")]),e._v(" project contains a "),t("code",[e._v("NOTICE")]),e._v(" file, append it to the end of the "),t("code",[e._v("NOTICE")]),e._v(" file of current project. If it is already included, there is no need to append it more than once.")])]),e._v(" "),t("h2",{attrs:{id:"jar-package-with-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jar-package-with-dependencies"}},[e._v("#")]),e._v(" Jar Package with Dependencies")]),e._v(" "),t("p",[e._v("If developers:")]),e._v(" "),t("ul",[t("li",[e._v("have not modified the content of the "),t("code",[e._v("resources")]),e._v(" label.")]),e._v(" "),t("li",[e._v("develop the module of where the "),t("code",[e._v("sermant.basedir")]),e._v(" parameter correctly points to the top-level directory.")]),e._v(" "),t("li",[e._v("package the project without jar packages with dependencies or package the jar packages with dependencies via "),t("code",[e._v("shade")]),e._v(" and have not modified "),t("code",[e._v("transformers")]),e._v(" label.")])]),e._v(" "),t("p",[e._v("There is no need to make any adjustments to the output "),t("code",[e._v("jar")]),e._v(" package, otherwise please read the instructions below and take it as it is.")]),e._v(" "),t("p",[e._v("In the default packaging process, the current project's default "),t("code",[e._v("LICENSE")]),e._v(" file and "),t("code",[e._v("NOTICE")]),e._v(" file need to be inserted. These two files are stored in the "),t("code",[e._v("resources/META-INF")]),e._v(" directory of the "),t("code",[e._v("sermant-package")]),e._v(" module and are specifically pointed to by the "),t("code",[e._v("resources")]),e._v(" label.")]),e._v(" "),t("p",[e._v("In general, as long as the "),t("code",[e._v("sermant.basedir")]),e._v(" parameter in the packaged module (the "),t("code",[e._v("packaging")]),e._v(" label is not "),t("code",[e._v("pom")]),e._v(") points to the top-level directory of the project, these files will be added by default and don't need to be concerned.")]),e._v(" "),t("p",[e._v("When using the "),t("code",[e._v("shade")]),e._v(" "),t("code",[e._v("assembly")]),e._v(" or "),t("code",[e._v("spring")]),e._v(" package plugin to package a jar package with dependencies, if the "),t("code",[e._v("NOTICE")]),e._v(" file is included in the **third-party ** "),t("code",[e._v("jar")]),e._v(" package, it is best to merge it with the default "),t("code",[e._v("NOTICE")]),e._v(" file of current project. "),t("code",[e._v("ApacheNoticeResourceTransformer")]),e._v(" of "),t("code",[e._v("shade")]),e._v(" plugin just can do this. This is configured in the top-level project's "),t("code",[e._v("pom")]),e._v(" file. And it is not recommended to override the top-level project's settings of "),t("code",[e._v("shade")]),e._v(" plugin unless you need to modify the "),t("code",[e._v("Transformer")]),e._v(".")]),e._v(" "),t("p",[e._v("Note: The default "),t("code",[e._v("LICENSE")]),e._v(" file and "),t("code",[e._v("NOTICE")]),e._v(" file mentioned in this section refer to files that only contain information about current project. The "),t("code",[e._v("LICENSE")]),e._v(" file and "),t("code",[e._v("NOTICE")]),e._v(" file stored in the top-level directory of the project are the files after sorting out the source code copy information, containing information related to current project and the copied "),t("strong",[e._v("third party")]),e._v(" project information.")]),e._v(" "),t("h2",{attrs:{id:"release-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-package"}},[e._v("#")]),e._v(" RELEASE Package")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("RELEASE")]),e._v(" package needs to include the "),t("code",[e._v("LICENSE")]),e._v(" file of the project source code and the "),t("code",[e._v("NOTICE")]),e._v(" file. The former also needs to add the "),t("code",[e._v("LICENSE")]),e._v(" information of all the "),t("strong",[e._v("third party")]),e._v(" "),t("code",[e._v("jar")]),e._v(" packages included in the "),t("code",[e._v("RELEASE")]),e._v(" package. The "),t("code",[e._v("RELEASE")]),e._v(" package also requires "),t("strong",[e._v("third party")]),e._v(" "),t("code",[e._v("LICENSE")]),e._v(", which are different from the project's "),t("code",[e._v("LICENSE")]),e._v(", to be placed in the "),t("code",[e._v("licenses")]),e._v(" directory. The directory is located in the "),t("code",[e._v("resources")]),e._v(" directory of the "),t("code",[e._v("sermant-package")]),e._v(" module.")]),e._v(" "),t("p",[e._v("To summarize, the internal structure of the "),t("code",[e._v("RELEASE")]),e._v(" package looks like this:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("agent")]),e._v(" directory: core enhancement logic.")]),e._v(" "),t("li",[t("code",[e._v("server")]),e._v(" directory: supporting server sides.")]),e._v(" "),t("li",[t("code",[e._v("licenses")]),e._v(" directory: where "),t("code",[e._v("LICENSE")]),e._v(" of "),t("strong",[e._v("third-party-open-source dependencies")]),e._v(" that are different from the project's "),t("code",[e._v("LICENSE")]),e._v(" locates in.")]),e._v(" "),t("li",[t("code",[e._v("LICENSE")]),e._v(" file: the project's "),t("code",[e._v("LICENSE")]),e._v(" file, which appends a copy of the LICENSE statement of source code of "),t("strong",[e._v("third-party-open-source")]),e._v(" project, and the "),t("code",[e._v("LICENSE")]),e._v(" description of all "),t("code",[e._v("jar")]),e._v(" packages of "),t("strong",[e._v("third-party open-source dependencies")]),e._v(" included in the "),t("code",[e._v("RELEASE")]),e._v(" package.")]),e._v(" "),t("li",[t("code",[e._v("NOTICE")]),e._v(" file: the "),t("code",[e._v("NOTICE")]),e._v(" file of this project, appends the "),t("code",[e._v("NOTICE")]),e._v(" file of source code of "),t("strong",[e._v("third-party-open source")]),e._v(" project.")])]),e._v(" "),t("p",[e._v("This project generates a "),t("code",[e._v("LICENSE")]),e._v(" file, a "),t("code",[e._v("NOTICE")]),e._v(" file, and a "),t("code",[e._v("licenses")]),e._v(" directory for the "),t("code",[e._v("RELEASE")]),e._v("package as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Generate the "),t("code",[e._v("LICENSE")]),e._v(" information for all third-party "),t("code",[e._v("jar")]),e._v(" packages involved in the project via the "),t("code",[e._v("license-maven-plugin")]),e._v(":"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn license:aggregate-add-third-party\n")])])]),e._v("The resulting file, "),t("code",[e._v("LICENSE-binary-suffix.txt")]),e._v(", is stored in the "),t("code",[e._v("resources")]),e._v(" directory of the "),t("code",[e._v("sermant-package")]),e._v(" module. This process takes a long time to execute for the first time, so be patient.")]),e._v(" "),t("li",[e._v("Project components are packaged and exported to a temporary directory.")]),e._v(" "),t("li",[e._v("When"),t("code",[e._v("sermant-package")]),e._v("module is packaging, it will：\n"),t("ul",[t("li",[e._v("copy the "),t("code",[e._v("LICENSE")]),e._v(" file, "),t("code",[e._v("NOTICE")]),e._v(" file, and "),t("code",[e._v("licenses")]),e._v(" directory of source code of current project into a temporary directory.")]),e._v(" "),t("li",[e._v("run a script to append the "),t("code",[e._v("LICENSE-binary-suffix.txt")]),e._v(" file to the "),t("code",[e._v("LICENSE")]),e._v(" file in the temporary directory.")]),e._v(" "),t("li",[e._v("compress the temporary directory to a 'RELEASE' package.")])])])]),e._v(" "),t("p",[e._v("To sum up, developers can compile and release the "),t("code",[e._v("RELEASE")]),e._v(" package with the following command:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn license:aggregate-add-third-party clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dmaven.test.skip")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);