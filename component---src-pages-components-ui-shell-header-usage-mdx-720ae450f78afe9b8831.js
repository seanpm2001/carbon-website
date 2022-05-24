"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[73],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),l=a.n(i),s=a(1597),r=a(64905),o=a(81151),d=a(75900),p=a.n(d);var c=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:o}=a||i,d=`${l}/edit/${o}${r}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},h=a(56328),g=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===i,o=new RegExp(`${i}/?(#.*)?$`),d=a.replace(o,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var b=u,k=a(17680),A=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:d}=e;const{frontmatter:p={},relativePagePath:g,titleType:u}=t,{tabs:f,title:w,theme:N,description:v,keywords:E,date:T}=p,{interiorTheme:x}=(0,A.Z)(),{site:{pathPrefix:I}}=(0,s.useStaticQuery)("2456312558"),S=I?i.pathname.replace(I,""):i.pathname,C=f?S.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",U=N||x;return n.createElement(o.Z,{tabs:f,homepage:!1,theme:U,pageTitle:w,pageDescription:v,pageKeywords:E,titleType:u},n.createElement(c,{title:d?n.createElement(d,null):w,label:"label",tabs:f,theme:U}),f&&n.createElement(b,{title:w,slug:S,tabs:f,currentTab:C}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(y,{date:T})),n.createElement(h.Z,{pageContext:t,location:i,slug:S,tabs:f,currentTab:C}),n.createElement(r.Z,null))}},41353:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return y}});var n=a(45987),i=(a(67294),a(64983)),l=a(28399);const s=["components"],r={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=o("PageDescription"),p=o("InlineNotification"),c=o("AnchorLinks"),m=o("AnchorLink"),h=o("Row"),g=o("Column"),u=o("DoDontRow"),b=o("DoDont"),k=o("Caption"),A={_frontmatter:r},f=l.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(f,Object.assign({},A,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"This header is part of the Carbon UI shell. A shell is a collection of\ncomponents shared by all products within a platform. It provides a common set of\ninteraction patterns that persist between and across products.")),(0,i.kt)(p,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v11 update:")," The UI shell is now themeable and has been updated to use inline\ntheming. The UI shell uses Carbon theme tokens instead of component specific\ntokens and the color will follow each theme’s styles.")),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Content"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Behaviors"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Related"),(0,i.kt)(m,{mdxType:"AnchorLink"},"References"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"The UI shell header is the foundation for navigating and orienting your user to\nthe UI. The UI shell header can be used by itself or combined with the UI shell\nleft and right panels for more complex UI navigation."),(0,i.kt)("p",null,"The UI shell is made up of three components—the header, the\n",(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-left-panel/usage"},"left panel"),", and the\n",(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-right-panel/usage"},"right panel"),". All three can be used\nindependently, but the components were designed to work together."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Shell UI component"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"The highest level of navigation. The header can be used on its own for simple products or be used to trigger the left and right panels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Left panel"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional panel that is used for a product’s navigation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Right panel"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional panel that shows additional system-level actions or content associated with a system icon in the header.")))),(0,i.kt)("h3",null,"When to use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identify the UI by name."),(0,i.kt)("li",{parentName:"ul"},"Globally persistent location for navigational links and utilities.")),(0,i.kt)("h3",null,"Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header base"),(0,i.kt)("td",{parentName:"tr",align:null},"Has a persistent site title that can be used to identify a single page UI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header with navigation"),(0,i.kt)("td",{parentName:"tr",align:null},"Includes links and dropdowns for a simple navigation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header with actions"),(0,i.kt)("td",{parentName:"tr",align:null},"Actions or utilities appear in the header as icon buttons to give users quick access to common utilities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header with sidenav"),(0,i.kt)("td",{parentName:"tr",align:null},"The header can be paired with the ",(0,i.kt)("a",{parentName:"td",href:"/components/UI-shell-left-panel/usage"},"UI shell left panel")," to offer a deeper level of navigation in a UI.")))),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{mdxType:"Column"},(0,i.kt)("iframe",{loading:"lazy",src:"https://codesandbox.io/embed/header-with-actions-and-nav-m0lo2?fontsize=14&hidenavigation=1&view=preview",title:"header-with-actions-and-nav",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",sstyle:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("h3",null,"Anatomy"),(0,i.kt)("p",null,"The header spans the full width of the viewport and is the topmost element in\nthe browser window. The header is persistent throughout the product experience."),(0,i.kt)("p",null,"For each UI shell component, left-to-right translates to product-to-global. The\nleft side of the header contains items relevant at the product level. Moving to\nthe right along the header, the functions become more global. Elements in the\nmiddle of the header should represent system-level controls. Elements on the\nright side of the header, such as the switcher, are the most global in their\nscope and span multiple products."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQoz12QO28TQRSFz3qdIOdhpBCHmKRAQBEJQYeEBC0NFR0NiIIG8RNs79gOSWTSREp4pOIP8BA1BeInIEqKCNkEKV4bx7uemX14fdCsk4jkSlfnzL13vr2z4JMf4HsCOVhsElhA5ubytSwAiyTuXL1hvAlr5dLl7IXCvD23WLDzV4o2OwSKORvnkeEuEd7bAXj/Hfj4a4GKk3z6q2BuLsIGSYsl/+Jtqwi+Zp7fmcvjdPD5z+UT/+jb0p+7G8D1mSKK2dkH+cy5tytzS6+mMhObAOozyG4VkHsDYHU+M7VzHpPbxgN4AWB9EtZm0Z7dzcHenLYmthcy088eLt0CqmurEPXalqjVuLq+zmq9znK5TEcIVoRDx3EoalU6wmGpVEqzUqlQCEGnKlitVdMsi8oX8XIN5mkmN6SO2esPtC/DiORxxmf0bJq65jg+GhY8r49er9fodrt0XTdy3TYPDw+plKLW+kT/90bNTKfToef1h0pKc/4cRTGglILvDxqe59HzvMgMGvgxJAiCFCClTL1W4/pgMGD3b5dSqjgZkVqrT0cbeuj3+439/X222+3IfLXVavHg4ICm5roum80m9/b2TJ+t3+OeAUZxyDhhrMPEAD+kwDAMIaVsHG0RjUYjxnGc/pQoilJNt5SSySihDnTaN/NhGHKYMB4OE3MeA4MgOAFqraMkSVKQ0WOwAZonj5KEoVZp3/d9SjVgGJ/e8B869CtXB6isEAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Header anatomy",title:"Header anatomy",src:"/static/49fb2174cd7fb465b227b4138d777c42/3cbba/header_anatomy.png",srcSet:["/static/49fb2174cd7fb465b227b4138d777c42/7fc1e/header_anatomy.png 288w","/static/49fb2174cd7fb465b227b4138d777c42/a5df1/header_anatomy.png 576w","/static/49fb2174cd7fb465b227b4138d777c42/3cbba/header_anatomy.png 1152w","/static/49fb2174cd7fb465b227b4138d777c42/0b124/header_anatomy.png 1728w","/static/49fb2174cd7fb465b227b4138d777c42/0c3f5/header_anatomy.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hamburger menu"),": The hamburger icon is used to open product navigation\nsuch as the ",(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-left-panel/usage"},"left panel.")," The\nhamburger menu is only needed when there is a collapsable left navigation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Header name"),": For IBM products, the header name is always preceded by\n“IBM.”")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Header links"),": Links in the header are supported as product navigation, if\nrequired. These links move to the side menu in narrow screen widths.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sub-menu"),": Sub-menus are supported as product navigation, if required.\nInclude the down-pointing chevron after the link label. Sub-menus open on\nclick and are closed by either selecting an item in the menu, clicking\noutside the menu area, or clicking on the menu label. When open, the chevron\nshould point up. Sub-menu labels serve only to open the dropdown; they cannot\nlink to another page in the product.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Header utilities"),": These utilities are reserved for universal,\nsystem-level functions such as profile, search, notifications, and similar\nfunctions. Not every product on a system is required to show the same\nutilities, but it is recommended for a better cross-product user experience.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Switcher"),": The switcher provides a way for the user to easily navigate\n",(0,i.kt)("em",{parentName:"p"},"between")," products and systems. Recommended uses for this component include\nrecently used apps, frequently used apps, or all apps attached to the user’s\naccount. If the list is a manageable size, include all apps or products\navailable on the system."))),(0,i.kt)("h3",null,"Placement"),(0,i.kt)("p",null,"Icons are not a required element of the header and a product may choose to use\nany set of icons for their UI. Icons should always be aligned to the right of\nthe header with no gaps between icons."),(0,i.kt)(u,{mdxType:"DoDontRow"},(0,i.kt)(b,{caption:"Header utilities are right aligned with no gaps",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACyklEQVQ4y7WSzU4TURTH/22hDW2hYnunU0ppjSnQIE0xKBqjO9a6htKN8QX8WpDG+AyudKFREhOjD6AhXfsGLPgIpUGTUpF+TmmZmXvMnXYabAaDJt7kP+fMPXN+99xzBpIkgQUlSL4A/IkwXI+ScD1NwvWka61kxh4n4b0Xh/NZCoPP5yBY4uGQGHMwWXIE3X7HKwB0Tn0BEMOADXQA0HoPCIkxMFlCaJjhOoD7AN4DyAK4CeAlgBcARgBkAHwA8ADAXQCXMAQQAVTtAd8wIcZeS3Lw7ciktO5LyDn/7HjuwsxYbnhKyl28EjbkiQdyZsyXkMV3X1k09DBwLYbR+YjNAMqyTEKhUIgYY5ScmaXE5DQFRv0Ui0RpPnWVZBaksWCI7ty6TdPxKSMm7OTlOLFA4PPwkAdjUsgWDAYBt9utmnK5XGp4PKxFY1HN6XRqARbQUnMpzeP1ah6vR1u4saCNRyLawOCAFo3FWpGJCXI6nZ8AwGa32Xw+H7CyskKZTIZMu7y8TOl0urcnfGGFlpaWerF0Oq129z6urq4im83aFxcXAVVVSdd10jTNkPDNd9PvVzemCl9V1XdEBCKyl8tloFKpUK1W+xepwlYqlTVd18E5t+fzeUBsNhoNqtfrfytV5FWr1TXOuVFhoVD4HSjseXUu4H+psD/xD1VaA8XE2u22kSwmbi7OuWGt/oDuXg8ohtIDikQBFEFh8/m8oUKhQFtbW8ZBVotzbg0Up50Gbm5u0vb2Nu3u7hr+3t4e7e/v0+HhYX/l1kARFFc1r6woSkdNhVqtFjWbTSqXy9RQlD7gGRUeHR2ROZjTPbReOhHviPMzKhR9KhaLRlWi8QelEv0olehbvUgnmjiAU1vVqVjm9P0np1qTk9Li1DrRVUWxAIpelUolAyj6ubOzQxsbG9Q8OSZOnetpOlFFISo3iI7bnXdV45bAX6IwTLHYZkNIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of header icons right aligned with no gaps.",title:"Example of header icons right aligned with no gaps.",src:"/static/76ac6702816c491055355087ba54289f/a5df1/utility_placement_do.png",srcSet:["/static/76ac6702816c491055355087ba54289f/7fc1e/utility_placement_do.png 288w","/static/76ac6702816c491055355087ba54289f/a5df1/utility_placement_do.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(b,{type:"dont",caption:"Header utilities with a gap between the account and help icons.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACmUlEQVQ4y7WSS0/bQBDHxwkRxMaIhOx6kyg8egAuqFIPcOKDoATEvd+lp97aRuqpUg+VeqnEpd+CQwDxEK3kpJQ4D4cka+9UsyHUSd2KVupKf8/sY34zO2vgnENUgnOwGINtJw8vi2vwqvgEXhTWIMMYTJ9ljE2I1uiTjCrHWLLAedJguQREhuA8yRjTmopJRJNMZHMcB9KmCRnbhhRnP2kpAM4YGIkE2LYNQghtFxYWdEypVJoAVkmMMW0XFxermUzmTYE7b5854mjbEZ+fOuJTjrGqbdvVbDZbdRyH7OtsNvuOc/48n88Tx9BAIQSS8vk8MsZwa2sLNzc3tc+EwJwQyBwHC4UC7u7u4sbGBi4tLWm7vr5O544syyKOQZWDaZpyrNnZWVksFuXKyoqcm5uTlmkGJDOdlvPz83JnZ0eWSiU5MzMjV1dX75aXlzGVSr2nrliWZaTTaYD9/X08ODjAsS2Xy1ipVCbWxn50r1KpyHv/Q7lchr29PePw8BBASolhGGIQBFrkj+dxfmQuyR8Ohx8RERDRaLVaAJ7nYbvd/hdJsp7nPQBd1wWgxW63i51O528lKa7dbj8A6/X6JJDsY/Uo4H+pcDrwD1XGA+nFBoOBDqYXHw+llLZxf8D9mga2Wq1JIAUSkDbJXlxcaF1dXeHJyYlOFDeUUvFAyhYF1mo1PD09xfPzc+1fXl7i9fU13tzcTFceD6RNuur4yr7vj9Tzsd/vY6/Xw2aziV3fnwL+psLb21scP0y0h/EjRFQjKUUV+r8CqU+u6+qqqPH1RgO/NRr4pePiMKAECgcyRLep8Ot3he2eQr+vsD8Mpe/HVEi9ajQaGkj9PDs7w+PjY+wN71Dh6HpBiOj5iM0u4t1gNJdBPPAHeTQ0lhuzsyoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of the header icons with a gap between the account and help icons.",title:"Example of the header icons with a gap between the account and help icons.",src:"/static/d9453ba2dcbde0108bbe4c3bb67eeb83/a5df1/utility_placement_dont.png",srcSet:["/static/d9453ba2dcbde0108bbe4c3bb67eeb83/7fc1e/utility_placement_dont.png 288w","/static/d9453ba2dcbde0108bbe4c3bb67eeb83/a5df1/utility_placement_dont.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Example placement"),(0,i.kt)("p",null,"The example below shows a header with a switcher, typical platform utility\nicons, and search."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQoz7XPy07CYBAF4FmYXihyk7LRNS40RuMFWkB0KT6HCdYWE0Fd2SIYiC9jfASM6FvYBsSoiaEEKJvSf0zrUoOycJIvcxaTkwzEYjH4SYSPegLhELSECryJNegkqx4vp2vwul2H9+w1tNNXgPMaDCMlAJ7nfxTkIxDm54AJcKCLl0JLqMSNZHnFECqr7VR10chU19rZ2tLzTj2upyvCx8LZTCdaAFBVldY07TtVY8oXKnNxdUk/JE737tPn603hNHW3dZJpJIqbTfEs20gUhYZYWn8Uz/duNg7p2+UDAIqiOr/hQrNPFMsYNMfq/nBQ5wKzBuP36YFIyM06xbEvjI/dpX0sQD6fx98osozykeztQqGAiqygoih47GZFQVmWUZKkfUmSAAghDiJO5N5MYBNCcDwe5wghAIPBAC3LQne7hsPhNIhlWU6/38dut5szTRPAcRyCiMS2bY+bpxn3g9FohKZp5nq9nleI7ti27cGvxr/6/8JPhGgGjEqiAq4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"icon placement.",title:"icon placement.",src:"/static/bdad0a4f5265803fbea7cc2aaf722877/3cbba/example_placement.png",srcSet:["/static/bdad0a4f5265803fbea7cc2aaf722877/7fc1e/example_placement.png 288w","/static/bdad0a4f5265803fbea7cc2aaf722877/a5df1/example_placement.png 576w","/static/bdad0a4f5265803fbea7cc2aaf722877/3cbba/example_placement.png 1152w","/static/bdad0a4f5265803fbea7cc2aaf722877/92c65/example_placement.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Icon"),(0,i.kt)("th",{parentName:"tr",align:null},"Placement"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1. Search"),(0,i.kt)("td",{parentName:"tr",align:null},"Search should always be positioned as the furthest left icon. This is to allow for an expanding search field that does not disrupt other icon positions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2. Other"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of header icons a product uses may vary. This placement will help avoid disrupting the position of the core icons and inconsistencies as your user navigates between other product shell headers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3. Help"),(0,i.kt)("td",{parentName:"tr",align:null},"Help is positioned 4th from the right.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4. Notifications"),(0,i.kt)("td",{parentName:"tr",align:null},"Notifications should be 3rd from the right when paired with the account and switcher icon.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5. Account"),(0,i.kt)("td",{parentName:"tr",align:null},"The account should be the 2nd from the right. This global link gives a user quick access to their account from anywhere in the product UI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6. Switcher"),(0,i.kt)("td",{parentName:"tr",align:null},"The switcher should always be positioned as the furthest right icon. This ensures the icon does not shift when navigating across systems.")))),(0,i.kt)("h2",null,"Content"),(0,i.kt)("h3",null,"Main Elements"),(0,i.kt)("h4",null,"Header name"),(0,i.kt)("p",null,"The header name should be the name of the parent domain and be as brief as\npossible while giving the user a sense of place. The header name is always\npreceded by “IBM” for IBM products."),(0,i.kt)("h4",null,"Header links"),(0,i.kt)("p",null,"Header links should be unique and clearly describe the content and location that\nit will link to. Avoid using verbs as header links which could imply that an\naction will be taken when clicking a header link."),(0,i.kt)("h2",null,"Behaviors"),(0,i.kt)("h3",null,"Interactions"),(0,i.kt)("h4",null,"Mouse"),(0,i.kt)("p",null,"The header element target areas span the full height of the header. See the\nStyle tab for detailed visual information about the various states."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACQUlEQVQoz63M3WtScRgH8GcrAm8czuPLjheVMCd4PNSZHj2COSdjEk1dIxQiq4uu9EylpK5GXUVjjHPR5vEcJ0FbV82b/oL5lhs1aHg86nF0EXTRP/ELfzAIuqwHPnwfnufhgftLsYnodQaisx5I+Zfg9pwXbHoCDEYjEEYjGAwGIEkSCIIAnU6H6fV6sFgsmNVqBZvNhu+SySTAijcEUTuztjw7/2GVCZWjDo981TgjG02EbDaZZIIgZHKGlM1mszw1NYVNT0/LFovlgkSS5HuCIDLBYBAgNn8Ltp+/erZZ3Pix9eLlt83ihlLkC0qW55V1fl3heV7J5XI4M5kMls1m8SyfzyuFQuEsn89/z+Vyb2FcO6+3JuE/Va1Wm4SFhQWgKOop7Xb/Cvg51eWmNJ+T1tY8YS3BhLC73rC2Oh/SmDmXds1u1+YcDs3lcmEURfVpt/un0+ksJRIJAJqmoVKpxCRJkqrV6rYolYV3YkWoVQ+Ej3v72GH1QDis7gt7oiTs7O4Iu6VdoSSKQqmMbYvlcqkkik8QQgAIoQkAuAQAV/7RZfwrHA4Dx3FvAoEAikQiaJwMwyAf60MsyyLW60UcxyEfy+I5ffMGWvaH0OPFOEqHV9DDxTh6FImjdOjOp3T8HsBwOARVVeler5fudrvJXq+XGlNV9S8Xu4HaT533h6lRf5g6H2jJUX/4YKQOglp/ANDpdKDVakGj0YCjoyOcY81mE/uzr9frWKfZhtP2MXxtH8Pp5xOcX1odOGl34Dcrdhtc1eilZwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"UI shell header click targets.",title:"UI shell header click targets.",src:"/static/bf4065297f9957bd2c6190e5fc2babc8/3cbba/header_click_target.png",srcSet:["/static/bf4065297f9957bd2c6190e5fc2babc8/7fc1e/header_click_target.png 288w","/static/bf4065297f9957bd2c6190e5fc2babc8/a5df1/header_click_target.png 576w","/static/bf4065297f9957bd2c6190e5fc2babc8/3cbba/header_click_target.png 1152w","/static/bf4065297f9957bd2c6190e5fc2babc8/0b124/header_click_target.png 1728w","/static/bf4065297f9957bd2c6190e5fc2babc8/0c3f5/header_click_target.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Keyboard"),(0,i.kt)("p",null,"Some users may use a keyboard to navigate your site. Starting focus in the main\nnavigation lets them quickly navigate to other areas in your UI, but could block\nthem from the main content if there is a large number of navigation items to tab\nthrough first."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G1"},"Success Criterion 2.4.1 (Bypass Blocks)"),"\nsuggest bypassing these blocks by providing a “Skip to main” link at the start\nof the navigation’s focusable controls. This lets users easily skip the\nnavigation region and begin interacting with the page’s main content area."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,colMd:8,colSm:6,mdxType:"Column"},(0,i.kt)("img",{src:"/5d3277cc05d3ea02ae87c04f103a4bae/skip-to-main-content.gif",alt:"hint text"}),(0,i.kt)(k,{mdxType:"Caption"},'The "Skip to main content link" is the first focusable element on the Carbon website.'))),(0,i.kt)("h4",null,"Screen readers"),(0,i.kt)("p",null,"VoiceOver: Users can trigger a state change by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Control-Option-Space"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the header area has screen reader focus."),(0,i.kt)("p",null,"JAWS: Users can trigger a state change by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the\nheader area has screen reader focus."),(0,i.kt)("p",null,"NVDA: Users can trigger a state change by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the\nheader area has screen reader focus."),(0,i.kt)("h3",null,"Responsive behavior"),(0,i.kt)("p",null,"As a header scales down to fit smaller screen sizes, header links and menus\nshould collapse into a left-panel hamburger menu. See the examples below to\nbetter understand the header’s responsive behavior."),(0,i.kt)("p",null,"If your UI includes a left panel, the header links should be added above the\nleft panel items, pushing them down accordingly."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB+UlEQVQ4y5WSza7SQBTHD18hJMIjuHHhC7jyksjeB7msdEla4PIhauLCuHKvIJSvEBN8Al4BVrxAQ6Dt0NKGtvRvZu6AvTfXG23yy3/mnH/OzOkZIqKn+Xy+WSgUmkTUzGQyF00mk0JTqZQgm802E4mEyJ+Rnpt0Ov0plUq9IFVVX7XbbXQ6HdTrdbRaLTQaDbFWVRW1Wk1otVoVMUVRUKlULpw9PK8oyhsCcBWGYQiAE0j9XzwAiKLomlzXvdJ1Pdhut2EQBEEYCgkcxwksy/pXPMuyYBjGNXmeV3IcB/yScXjMNE1w436/B2NMrB/DMIy3vOVnAD48BmPs6+l0+gzg/V887wB8AfCSiOg5Ef1IJpN9rvcYENE3ANz3moh+pdPp7w/4ukT0k4hKNBqNSoPBALPZDPP5HOPxGJPJBMPhEDze7/exWCyeaJr2UdM0TKdTket2u+j1eiLPfZLbKZ9OpyA25TgRAHe9XucAVHH7eQ/4/kz5eDwWdV3HbrdDEARRGIYCx3EiOZTjcrnMGYZRlz/ftywruocvh1IWBfmGT5EXkifBdd2IT3e/3x9Xq1WOMVaXe19qHBGzLKtMvu8XN5uNuKFs8U5B27YvBW3b5ntfahwRY4yV+Tss8tYOhwNku+d3GMkWRUHTNOMt33l/jDERM02z/Bu71B4JfTznwgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of the header responding to different screen sizes.",title:"An example of the header responding to different screen sizes.",src:"/static/03db9c2fae6ff35278d2c97ae3eddec9/3cbba/responsive_header_1.png",srcSet:["/static/03db9c2fae6ff35278d2c97ae3eddec9/7fc1e/responsive_header_1.png 288w","/static/03db9c2fae6ff35278d2c97ae3eddec9/a5df1/responsive_header_1.png 576w","/static/03db9c2fae6ff35278d2c97ae3eddec9/3cbba/responsive_header_1.png 1152w","/static/03db9c2fae6ff35278d2c97ae3eddec9/0b124/responsive_header_1.png 1728w","/static/03db9c2fae6ff35278d2c97ae3eddec9/0c3f5/responsive_header_1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Related"),(0,i.kt)("p",null,"The following components are additional ways to organize and navigate data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-left-panel/usage/"},"UI Shell left panel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-right-panel/usage/"},"UI shell right panel")))),(0,i.kt)("h2",null,"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Susan Farrell,\n",(0,i.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/utility-navigation/"},"Utility Navigation: What It Is and How to Design It"),"\n(Nielsen Norman Group, 2015)"),(0,i.kt)("li",{parentName:"ul"},"WebAIM, ",(0,i.kt)("a",{parentName:"li",href:"https://webaim.org/techniques/skipnav/"},(0,i.kt)("em",{parentName:"a"},"“Skip Navigation” Links")),"\n(2013)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/standards-guidelines/wcag/"},"Web Content Accessibility Guidelines"),"\n(W3C, 2018)")),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}y.isMDXComponent=!0}}]);