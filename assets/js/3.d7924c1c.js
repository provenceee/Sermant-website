(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{390:function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));n(401);var i=n(108);const s=/#.*$/,a=/\.(md|html)$/,r=/\/$/,o=/^[a-z]+:/i;let l=[];function c(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=function(t){return decodeURI(t).replace(s,"").replace(a,"")}(t);return r.test(i)?t:i+".html"+n}const p=()=>new Promise((t,e)=>{i.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/version-support").then(n=>{const s=n.data.tree.find(t=>"versions.json"===t.path);i.a.get(s.url).then(e=>{l=JSON.parse(window.atob(e.data.content)).versions,t(l)}).catch(t=>{console.error(t),e()})}).catch(t=>{console.error(t),e()})})},391:function(t,e,n){},392:function(t,e,n){},394:function(t,e,n){"use strict";var i=n(390),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t=>this.link):"/"===this.link},isNonHttpURI(){return Object(i.d)(this.link)||Object(i.e)(this.link)},isBlankTarget(){return"_black"===this.target},isInternal(){return!Object(i.c)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.c)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(26),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal&&!t.item.isOutLink?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},395:function(t,e,n){"use strict";var i=n(406),s=n(394),a=n(390),r={name:"NavLinks",data:()=>({versionDropdown:null}),components:{NavLink:s.a,DropdownLink:i.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const a=t[s],r=i[s]&&i[s].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===o)||(o=s)),{text:r,link:o}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(this.resolveNavLinkItem(t),{items:(t.items||[]).map(this.resolveNavLinkItem)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["Github","Gitlab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}},watch:{$route(){this.setVersions()}},mounted(){this.setVersions()},methods:{resolveNavLinkItem:t=>Object.assign(t,{type:t.items&&t.items.length?"links":"link"}),async setVersions(){if(0===a.f.length){if(!await Object(a.b)())return}const t=window.location.pathname;let e="Versions";let n=t.indexOf("/versions");if(-1===n)e="latest";else{const i=n+"/versions".length+1,s=t.indexOf("/",i);let r=t.substring(i,s);a.f.some(t=>t===r)&&(e=r)}const i=["latest",...a.f].filter(t=>t!==e);this.versionDropdown={text:e,ariaLabel:"Select version",items:i.map(t=>{let e=t;const n=window.location.pathname,i=n.indexOf("/versions/"),s=i>=0?i+10:0,a=n.indexOf("/",s);return{text:e,link:("latest"===t?"":"/versions/"+t)+n.substring(a),isOutLink:!0}})}}}},o=(n(396),n(26)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),e("div",{staticClass:"nav-item"},[t.versionDropdown?e("DropdownLink",{attrs:{item:t.versionDropdown}}):t._e()],1),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=l.exports},396:function(t,e,n){"use strict";n(391)},397:function(t,e,n){"use strict";n(392)},398:function(t,e,n){"use strict";var i=n(402),s=n(404),a=n(407),r=n(395);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:a.a,NavLinks:r.a,SearchBox:s.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(n(397),n(26)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports},408:function(t,e,n){},413:function(t,e){t.exports=function(t){return null==t}},414:function(t,e,n){},415:function(t,e,n){},416:function(t,e,n){},431:function(t,e,n){"use strict";n(408)},436:function(t,e,n){"use strict";n(414)},437:function(t,e,n){var i=n(35),s=n(11),a=n(27);t.exports=function(t){return"string"==typeof t||!s(t)&&a(t)&&"[object String]"==i(t)}},438:function(t,e,n){"use strict";n(415)},439:function(t,e,n){"use strict";n(416)},451:function(t,e,n){"use strict";n.r(e);var i={name:"Home",components:{NavLink:n(394).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(n(431),n(26)),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,r=n(398),o=n(413),l=n.n(o),c=n(403),u={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=l()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:i="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,s){if(/bitbucket.org/.test(e)){return e.replace(c.a,"")+"/src"+`/${i}/`+(n?n.replace(c.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(c.a,"")+"/-/edit"+`/${i}/`+(n?n.replace(c.a,"")+"/":"")+s}return(c.e.test(e)?e:"https://github.com/"+e).replace(c.a,"")+"/edit"+`/${i}/`+(n?n.replace(c.a,"")+"/":"")+s}}},h=(n(436),Object(s.a)(u,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),d=n(437),p=n.n(d),f={name:"PageNav",props:["sidebarItems"],computed:{prev(){return m(g.PREV,this)},next(){return m(g.NEXT,this)}}};const g={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function m(t,{$themeConfig:e,$page:n,$route:i,$site:s,sidebarItems:a}){const{resolveLink:r,getThemeLinkConfig:o,getPageLinkConfig:u}=t,h=o(e),d=u(n),f=l()(d)?h:d;return!1===f?void 0:p()(f)?Object(c.f)(s.pages,f,i.path):r(n,a)}function v(t,e,n){const i=[];!function t(e,n){for(let i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const s=i[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[e+n]}}var b=f,k=(n(438),{components:{PageEdit:h,PageNav:Object(s.a)(b,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),_=(n(439),{name:"Layout",components:{Home:a,Page:Object(s.a)(k,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Sidebar:n(405).a,Navbar:r.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(c.g)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),L=Object(s.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=L.exports}}]);