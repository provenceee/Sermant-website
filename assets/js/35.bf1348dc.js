(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{480:function(e,a,s){"use strict";s.r(a);var t=s(26),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"version-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-management"}},[e._v("#")]),e._v(" Version Management")]),e._v(" "),a("p",[e._v("This document is about "),a("strong",[e._v("Version Management of Sermant")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Sermant")]),e._v(" manages versions via "),a("a",{attrs:{href:"https://github.com/mojohaus/versions-maven-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("versions-maven-plugin"),a("OutboundLink")],1),e._v(". Common commands are as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Update current version to "),a("code",[e._v("${version}")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn versions:set "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DnewVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${version}")]),e._v("\n")])])]),a("p",[e._v("This command keeps the original "),a("code",[e._v("pom")]),e._v(" file backup by default.")])]),e._v(" "),a("li",[a("p",[e._v("Rollback the version:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn versions:revert\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Commit the new version updated (delete the original "),a("code",[e._v("pom")]),e._v(" file backup):")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn versions:commit\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Update current version to "),a("code",[e._v("${version}")]),e._v(" and commit:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn versions:set "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DnewVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${version}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DgenerateBackupPoms")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])]),a("p",[e._v("This command will not back up the original "),a("code",[e._v("pom")]),e._v(" file, be careful not to write the wrong version number when executing it.")])])]),e._v(" "),a("p",[e._v("After executing the above update commands, only the modules with the same version as the top-level module in the project will be modified. If you need to update a module separately, you can specify it with "),a("code",[e._v("-pl")]),e._v(", for example:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn versions:set "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DnewVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${version}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DgenerateBackupPoms")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${module}")]),e._v("\n")])])]),a("p",[e._v("Where "),a("code",[e._v("${module}")]),e._v(" can be "),a("code",[e._v("${groupId}:${artifactId}")]),e._v(". Or you can input relative path of the module. In the case of multiple modules, please use "),a("code",[e._v("','")]),e._v(".")]),e._v(" "),a("p",[e._v("For more information on setting versions with the "),a("code",[e._v("versions:set")]),e._v(" command, refer to "),a("a",{attrs:{href:"http://www.mojohaus.org/versions-maven-plugin/set-mojo.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versions Maven Plugin versions:set"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Refer to "),a("a",{attrs:{href:"http://www.mojohaus.org/versions-maven-plugin/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versions Maven Plugin Introduction"),a("OutboundLink")],1),e._v(" for more "),a("code",[e._v("versions-maven-plugin")]),e._v(" commands.")])])}),[],!1,null,null,null);a.default=r.exports}}]);