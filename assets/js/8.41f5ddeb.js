(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{388:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(396),core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(107);__webpack_exports__.a={data:()=>({selected:void 0,options:[]}),created:async function(){try{let response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get("https://api.github.com/repos/provenceee/Sermant-website/git/trees/test");const versionsNode=response.data.tree.find(t=>"versions.json"==t.path.toLowerCase());response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get(versionsNode.url),this.options=eval("("+window.atob(response.data.content)+")").versions.map(t=>({value:t,text:t})),this.options.unshift({value:"latest",text:"latest"});const path=window.location.pathname;if(path.startsWith("/Sermant-website/versions/")){const t=26,e=path.indexOf("/",t);this.selected=path.substring(t,e)}else this.selected="latest"}catch(t){}},methods:{onChange(t){const e="latest"==this.selected?"":"/versions/"+this.selected,s=window.location.pathname;let a=16;const i=s.indexOf("/versions/");i>=0&&(a=i+10);const n=s.indexOf("/",a);window.location.pathname=s.substring(0,16)+e+s.substring(n)}}}},389:function(t,e,s){},390:function(t,e,s){},391:function(t,e,s){"use strict";s.r(e);var a=s(388).a,i=s(39),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Versions:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?s:s[0]},t.onChange]}},t._l(t.options,(function(s){return e("option",{domProps:{value:s.value}},[t._v("\n      "+t._s(s.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=n.exports},392:function(t,e,s){"use strict";s(389)},393:function(t,e,s){"use strict";var a=s(399),i=s(400),n=s(402),o=s(398),r=s(391);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var c={name:"Navbar",components:{SidebarButton:n.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:a.a,Versions:r.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},_=(s(392),s(39)),d=Object(_.a)(c,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1),t._v(" "),e("Versions")],1)}),[],!1,null,null,null);e.a=d.exports},394:function(t,e,s){"use strict";s(390)},397:function(t,e,s){"use strict";s.r(e);var a=s(393),i=s(401),n={name:"Base",components:{Navbar:a.a,Sidebar:i.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",s=>{s.clientX>e.clientWidth&&s.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=(s(394),s(39)),r=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"0f3332e1",null);e.default=r.exports}}]);