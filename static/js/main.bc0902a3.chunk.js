(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),r=s.n(a),i=s(20),n=s.n(i),o=(s(27),s(10)),l=s(11),d=s(12),j=s(14),h=s(13),b=s(7),u=s(2),m=(s(28),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={scrolled:!1,layout:"watercolor"},c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;!1===this.state.scrolled&&window.scrollY>=50&&this.setState({scrolled:!0}),document.addEventListener("scroll",(function(){!1===e.state.scrolled&&window.scrollY>=50?e.setState({scrolled:!0}):!0===e.state.scrolled&&window.scrollY<50&&e.setState({scrolled:!1})}))}},{key:"render",value:function(){return Object(c.jsxs)(b.a,{className:"App",children:[Object(c.jsxs)("div",{className:"header".concat(this.state.scrolled?" scrolled":""),children:[Object(c.jsxs)("div",{className:"header-menu",children:[Object(c.jsxs)("div",{className:"menu-logo",children:[Object(c.jsx)("div",{className:"hamburger hamburger-top"}),Object(c.jsx)("div",{className:"hamburger hamburger-bottom"})]}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/products",children:"Products"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/textiles",children:"Textiles"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/misc",children:"Misc"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/about",children:"About"})})]}),Object(c.jsx)("h2",{className:"title-name",children:Object(c.jsx)(b.b,{className:"title-link",to:"/",children:"Rose Kirby"})})]}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/products",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/textiles",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/misc",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/about",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/osmo",children:Object(c.jsx)(w,{})}),Object(c.jsx)(u.a,{path:"/mitrium",children:Object(c.jsx)(w,{})}),Object(c.jsx)(u.a,{path:"/poly",children:Object(c.jsx)(w,{})}),Object(c.jsx)(u.a,{path:"/hopper",children:Object(c.jsx)(w,{})})]})]})}}]),s}(r.a.Component)),O=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={scrolled:!1,content:{sections:[]},isLoaded:!1,imagesLoaded:!1},c}return Object(d.a)(s,[{key:"waitForLoad",value:function(e){e&&(e.addEventListener("load",this.imageLoaded),++this.imgCount)}},{key:"imageLoaded",value:function(e){e.target.removeEventListener("load",this.imageLoaded),++this.imgLoadCount===this.imgCount&&this.setState({isLoaded:!0})}},{key:"componentDidMount",value:function(){var e=this;this.imgCount=this.imgLoadCount=0,fetch("/index.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,content:t}),setTimeout((function(){e.setState({imagesLoaded:!0})}),2e3)}),(function(t){e.setState({isLoaded:!0,error:t})}));var t=document.createElement("script");t.src="/scripts.js",t.async=!0,document.body.appendChild(t),!1===this.state.scrolled&&window.scrollY>=50&&this.setState({scrolled:!0}),document.addEventListener("scroll",(function(){!1===e.state.scrolled&&window.scrollY>=50?e.setState({scrolled:!0}):!0===e.state.scrolled&&window.scrollY<50&&e.setState({scrolled:!1})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"watercolor-page",children:[Object(c.jsx)(v,{}),Object(c.jsx)("div",{className:"watercolor-splash".concat(this.state.isLoaded&&this.state.imagesLoaded?"  isloaded":"")}),Object(c.jsx)(x,{}),this.state.content.sections.map((function(e,t){return Object(c.jsx)(p,{section:e})})),Object(c.jsx)(f,{})]})}}]),s}(r.a.Component);function x(e){return Object(c.jsxs)("div",{className:"watercolor-leader",children:[Object(c.jsx)("div",{className:"watercolor-category"}),Object(c.jsxs)("div",{className:"watercolor-beginning",children:[Object(c.jsxs)("h1",{children:[Object(c.jsx)("span",{id:"babyy",children:"Industrial"})," Design is My Passion"]}),Object(c.jsx)("p",{children:"Hi! I'm Rose and these are some things I made. I care about sustainability and plants and stuff, but Im also real good at CAD and sewing."}),Object(c.jsx)("div",{className:"watercolor-sheet-tip"})]}),Object(c.jsx)("div",{className:"watercolor-introduction"})]})}var p=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={stuck:!1},c.stickyScroll=c.stickyScroll.bind(Object(o.a)(c)),c.categoryRef=r.a.createRef(),c}return Object(d.a)(s,[{key:"stickyScroll",value:function(){console.log(window.scrollY),console.log(this.categoryRef.current.offsetTop),window.scrollY>=this.categoryRef.current.offsetTop&&(console.log(this.state.stuck),this.setState({stuck:!0}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"watercolor-section",children:[Object(c.jsx)("div",{className:"watercolor-category",children:Object(c.jsx)("div",{ref:this.categoryRef,onClick:this.stickyScroll,className:this.state.stuck?"stuck":"",children:Object(c.jsx)("h2",{children:this.props.section.title})})}),Object(c.jsx)("div",{className:"watercolor-slides",children:this.props.section.slides.map((function(e,t){return Object(c.jsx)(g,{slide:e})}))})]})}}]),s}(r.a.Component);function g(e){return Object(c.jsxs)("div",{className:"watercolor-slide",children:[Object(c.jsx)("div",{className:"watercolor-sheet",children:Object(c.jsx)(b.b,{to:e.slide.url,children:Object(c.jsx)("img",{className:"watercolor-image",src:"/images/osmo/watercolor-thumbnail.png",alt:"watercolor thumbnail for "+e.slide.title})})}),Object(c.jsx)("div",{className:"watercolor-sidebar",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)(b.b,{to:e.slide.url,children:e.slide.title})}),Object(c.jsx)("span",{children:e.slide.subtitle}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.slide.topics}),Object(c.jsx)("p",{children:e.slide.description})]})})]})}function f(e){return Object(c.jsxs)("div",{className:"watercolor-follower",children:[Object(c.jsx)("div",{className:"watercolor-category"}),Object(c.jsxs)("div",{className:"watercolor-ending",children:[Object(c.jsx)("div",{className:"watercolor-sheet-tip"}),Object(c.jsx)("h1",{children:"Thats it! ...or is it?"}),Object(c.jsx)("p",{children:"Hope you enjoyed! Now go back and beat it on hard mode"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"\xa9 Rose Kirby | 2021"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{className:"watercolor-follower-link",href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:"instant gram"}),Object(c.jsx)("a",{className:"watercolor-follower-link",href:"/behance.txt",target:"_blank",children:"bee hands"})]}),Object(c.jsxs)("div",{className:"watercolor-conclusion",children:[Object(c.jsx)("h2",{children:"Contact me!"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"mailto:rose@rosekir.by",target:"_blank",rel:"noreferrer",children:"There's more where that came from"})]})]})}function v(){return Object(c.jsx)("img",{className:"watercolor-pens",src:"/images/pens.png",alt:""})}function w(e){return Object(c.jsx)("div",{className:"project-page",children:Object(c.jsx)(N,{src:"/images/osmo/hero-shot.png",alt:"osmo hero shot"})})}function N(e){return Object(c.jsx)("div",{className:"full-image",children:Object(c.jsx)("img",{src:e.src,alt:e.alt})})}var y=m,k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),r(e),i(e)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.bc0902a3.chunk.js.map