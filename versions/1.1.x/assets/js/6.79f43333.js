(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{388:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(396),core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(107);__webpack_exports__.a={data:()=>({selected:void 0,options:[]}),created:async function(){try{let response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/main");const versionsNode=response.data.tree.find(t=>"versions.json"==t.path);if(response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get(versionsNode.url),this.options=eval("("+window.atob(response.data.content)+")").versions.map(t=>({value:t,text:t})),0==this.options.length)return;this.options.unshift({value:"latest",text:"latest"});const path=window.location.pathname;if(path.startsWith("/Sermant-website/versions/")){const t=26,e=path.indexOf("/",t);this.selected=path.substring(t,e)}else this.selected="latest"}catch(t){console.log(t)}},methods:{onChange(t){const e=window.location.pathname,s=e.indexOf("/versions/"),a=s>=0?s+10:16,i=e.indexOf("/",a),o="latest"==this.selected?"":"/versions/"+this.selected;window.location.pathname=e.substring(0,16)+o+e.substring(i)}}}},389:function(t,e,s){},390:function(t,e,s){},391:function(t,e,s){"use strict";s.r(e);var a=s(388).a,i=s(39),o=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Versions:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?s:s[0]},t.onChange]}},t._l(t.options,(function(s){return e("option",{domProps:{value:s.value}},[t._v("\n      "+t._s(s.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=o.exports},392:function(t,e,s){"use strict";s(389)},393:function(t,e,s){"use strict";var a=s(399),i=s(400),o=s(402),n=s(398),r=s(391);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:o.a,NavLinks:n.a,SearchBox:i.a,AlgoliaSearchBox:a.a,Versions:r.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},h=(s(392),s(39)),u=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1),t._v(" "),e("Versions")],1)}),[],!1,null,null,null);e.a=u.exports},394:function(t,e,s){"use strict";s(390)},397:function(t,e,s){"use strict";s.r(e);var a=s(393),i=s(401),o={name:"Base",components:{Navbar:a.a,Sidebar:i.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",s=>{s.clientX>e.clientWidth&&s.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},n=(s(394),s(39)),r=Object(n.a)(o,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"0f3332e1",null);e.default=r.exports},421:function(t,e,s){},444:function(t,e,s){"use strict";s(421)},453:function(t,e,s){"use strict";s.r(e);var a={name:"HomePage",components:{Base:s(397).default},data:()=>({githubStars:0,move:!1}),created(){this.getGithubStars()},mounted(){this.move=!0},computed:{quickStart(){return this.$frontmatter.quickStart},blogs(){return this.$frontmatter.blogs}},methods:{goToDocument(){-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push("/zh/document/"):this.$router.push("/en/document/")},goToBlogs(){-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push("/zh/blog/"):this.$router.push("/en/blog/")},goToGithub(){window.open("https://github.com/huaweicloud/Sermant")},getGithubStars(){this.$axios.get("https://api.github.com/repos/huaweicloud/sermant").then(t=>{this.githubStars=t.data.stargazers_count||0}).catch(t=>{console.log(t)})}}},i=(s(444),s(39)),o=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("Base",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"home-page"},[e("div",{staticClass:"content-box"},[e("div",{class:{"logo-box":!0,move:t.move}},[e("img",{attrs:{src:t.$withBase("/img/sermant-logo.png"),alt:"Sermant",width:"500px",height:"100px"}})]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.$description))])]),t._v(" "),e("div",{staticClass:"button-box"},[e("el-button",{staticStyle:{width:"140px"},attrs:{type:"danger",icon:"el-icon-reading",round:""},on:{click:t.goToDocument}},[t._v("\n            "+t._s(t.quickStart)+"\n          ")]),t._v(" "),e("el-button",{staticStyle:{width:"140px"},attrs:{type:"blogs",icon:"el-icon-document",round:""},on:{click:t.goToBlogs}},[t._v("\n            "+t._s(t.blogs)+"\n          ")]),t._v(" "),e("div",{staticClass:"github-box",on:{click:t.goToGithub}},[e("div",{staticClass:"img-box"},[e("svg",{staticClass:"icon",attrs:{t:"1664449732894",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2540",width:"200",height:"200"}},[e("path",{attrs:{d:"M512 73.142857q119.428571 0 220.285714 58.857143T892 291.714286 950.857143 512q0 143.428571-83.714286 258T650.857143 928.571429q-15.428571 2.857143-22.857143-4t-7.428571-17.142858q0-1.714286 0.285714-43.714285t0.285714-76.857143q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285715t53.714286-22.285714 46.285714-38 30.285714-60T792 489.142857q0-68-45.142857-117.714286 21.142857-52-4.571429-116.571428-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714285 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571T330.285714 262.571429 281.714286 254.857143q-25.714286 64.571429-4.571429 116.571428-45.142857 49.714286-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714285 22.285714 58.571429 10.285715q-22.285714 20.571429-28 58.857143-12 5.714286-25.714286 8.571428t-32.571428 2.857143-37.428572-12.285714T276.571429 728q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714285l-11.428572-1.714286q-12 0-16.571428 2.571428t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714285t18 29.142858l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 0.285714 50.571428t0.285714 31.142857q0 10.285714-7.428571 17.142858t-22.857143 4q-132.571429-44-216.285714-158.571429T73.142857 512q0-119.428571 58.857143-220.285714T291.714286 132 512 73.142857zM239.428571 703.428571q1.714286-4-4-6.857142-5.714286-1.714286-7.428571 1.142857-1.714286 4 4 6.857143 5.142857 3.428571 7.428571-1.142858z m17.714286 19.428572q4-2.857143-1.142857-9.142857-5.714286-5.142857-9.142857-1.714286-4 2.857143 1.142857 9.142857 5.714286 5.714286 9.142857 1.714286z m17.142857 25.714286q5.142857-4 0-10.857143-4.571429-7.428571-9.714285-3.428572-5.142857 2.857143 0 10.285715t9.714285 4z m24 24q4.571429-4.571429-2.285714-10.857143-6.857143-6.857143-11.428571-1.714286-5.142857 4.571429 2.285714 10.857143 6.857143 6.857143 11.428571 1.714286z m32.571429 14.285714q1.714286-6.285714-7.428572-9.142857-8.571429-2.285714-10.857142 4t7.428571 8.571428q8.571429 3.428571 10.857143-3.428571z m36 2.857143q0-7.428571-9.714286-6.285715-9.142857 0-9.142857 6.285715 0 7.428571 9.714286 6.285714 9.142857 0 9.142857-6.285714z m33.142857-5.714286q-1.142857-6.285714-10.285714-5.142857-9.142857 1.714286-8 8.571428t10.285714 4.571429 8-8z","p-id":"2541"}})])]),t._v(" "),e("div",{staticClass:"star-label"},[t._v("Stars")]),t._v(" "),e("div",{staticClass:"star"},[t._v(t._s(t.githubStars))])])],1),t._v(" "),e("div",{staticClass:"feature-box"},[e("Content",{attrs:{"slot-key":"feature1"}}),t._v(" "),e("Content",{attrs:{"slot-key":"feature2"}}),t._v(" "),e("Content",{attrs:{"slot-key":"feature3"}})],1),t._v(" "),e("div",{staticStyle:{background:"#EEEEEE"}},[e("div",{staticClass:"contact-box"},[e("Content",{attrs:{"slot-key":"Vision"}}),t._v(" "),e("Content",{attrs:{"slot-key":"Disclaimer"}}),t._v(" "),e("div",[e("Content",{attrs:{"slot-key":"Contact"}}),t._v(" "),e("div",{staticClass:"wechat-QR-box"},[e("img",{attrs:{src:t.$withBase("/img/contact-wechat.jpg"),alt:"Contact",width:"120px",height:"120px/"}})])],1)],1)]),t._v(" "),e("Content",{staticClass:"content-footer",attrs:{"slot-key":"footer"}})],1)])]},proxy:!0}])})}),[],!1,null,"2ad04d98",null);e.default=o.exports}}]);