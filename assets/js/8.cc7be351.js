(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{390:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(394),core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a={data:()=>({selected:void 0,options:[]}),mounted:function(){this.$axios.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/version-support").then(response=>{const versionNode=response.data.tree.find(t=>"versions.json"===t.path);this.$axios.get(versionNode.url).then(res=>{if(this.options=eval("("+window.atob(res.data.content)+")").versions.map(t=>({value:t,text:t})),0===this.options.length)return;this.options.unshift({value:"latest",text:"latest"});const path=window.location.pathname;if(path.startsWith("/versions/")){const t=10,e=path.indexOf("/",t);this.selected=path.substring(t,e)}else this.selected="latest"}).catch(t=>console.error(t))}).catch(t=>console.error(t))},methods:{onChange(t){const e=window.location.pathname,n=e.indexOf("/versions/"),s=n>=0?n+10:0,i=e.indexOf("/",s),a="latest"===this.selected?"":"/versions/"+this.selected;window.location.pathname=a+e.substring(i)}}}},391:function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));n(394);var s=n(108);const i=/#.*$/,a=/\.(md|html)$/,o=/\/$/,r=/^[a-z]+:/i;let l=[];function c(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(c(t))return t;const e=t.match(i),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(a,"")}(t);return o.test(s)?t:s+".html"+n}const p=()=>new Promise((t,e)=>{s.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/version-support").then(n=>{const i=n.data.tree.find(t=>"versions.json"===t.path);s.a.get(i.url).then(e=>{l=JSON.parse(window.atob(e.data.content)).versions,t(l)}).catch(t=>{console.error(t),e()})}).catch(t=>{console.error(t),e()})})},392:function(t,e,n){},393:function(t,e,n){},395:function(t,e,n){},396:function(t,e,n){"use strict";var s=n(391),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t=>this.link):"/"===this.link},isNonHttpURI(){return Object(s.d)(this.link)||Object(s.e)(this.link)},isBlankTarget(){return"_black"===this.target},isInternal(){return!Object(s.c)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.c)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(26),o=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal&&!t.item.isOutLink?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},397:function(t,e,n){"use strict";var s=n(408),i=n(396),a=n(391),o={name:"NavLinks",data:()=>({versionDropdown:null}),components:{NavLink:i.a,DropdownLink:s.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const a=t[i],o=s[i]&&s[i].label||a.lang;let r;return a.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===r)||(r=i)),{text:o,link:r}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(this.resolveNavLinkItem(t),{items:(t.items||[]).map(this.resolveNavLinkItem)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["Github","Gitlab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}},mounted(){this.setVersions()},methods:{resolveNavLinkItem:t=>Object.assign(t,{type:t.items&&t.items.length?"links":"link"}),async setVersions(){if(0===a.f.length){if(!await Object(a.b)())return}const t=window.location.pathname,e=this.$page.path;let n="Versions";let s=t.indexOf("/versions");if(-1===s)n="latest";else{const e=s+"/versions".length+1,i=t.indexOf("/",e);let o=t.substring(e,i);a.f.some(t=>t===o)&&(n=o)}const i=["latest",...a.f].filter(t=>t!==n);this.versionDropdown={text:n,ariaLabel:"Select version",items:i.map(t=>{let s,i=t;if("latest"===t)s=e.substring(e.indexOf(n)+n.length);else{const i="/versions/"+t;s="latest"===n?`${i}${e.substring(e.indexOf("/"))}`:`${i}${e.substring(e.indexOf(n)+n.length)}`}return{text:i,link:s,isOutLink:!0}})}}}},r=(n(399),n(26)),l=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),e("div",{staticClass:"nav-item"},[t.versionDropdown?e("DropdownLink",{attrs:{item:t.versionDropdown}}):t._e()],1),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=l.exports},398:function(t,e,n){"use strict";n.r(e);var s=n(390).a,i=n(26),a=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Versions:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?n:n[0]},t.onChange]}},t._l(t.options,(function(n){return e("option",{domProps:{value:n.value}},[t._v("\n      "+t._s(n.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=a.exports},399:function(t,e,n){"use strict";n(392)},400:function(t,e,n){"use strict";n(393)},401:function(t,e,n){"use strict";var s=n(404),i=n(406),a=n(409),o=n(397),r=n(398);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var c={name:"Navbar",components:{SidebarButton:a.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:s.a,Versions:r.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},u=(n(400),n(26)),h=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=h.exports},402:function(t,e,n){"use strict";n(395)},403:function(t,e,n){"use strict";n.r(e);var s=n(401),i=n(407),a={name:"Base",components:{Navbar:s.a,Sidebar:i.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",n=>{n.clientX>e.clientWidth&&n.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=(n(402),n(26)),r=Object(o.a)(a,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"0f3332e1",null);e.default=r.exports}}]);