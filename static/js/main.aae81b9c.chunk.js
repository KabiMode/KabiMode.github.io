(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),r=s.n(a),i=s(20),n=s.n(i),l=(s(27),s(14)),o=s(10),d=s(11),j=s(13),h=s(12),b=s(7),u=s(2),m=(s(28),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={scrolled:!1,minimalHeader:!1},c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;!1===this.state.scrolled&&window.scrollY>=50&&this.setState({scrolled:!0}),document.addEventListener("scroll",(function(){!1===e.state.scrolled&&window.scrollY>=50?e.setState({scrolled:!0}):!0===e.state.scrolled&&window.scrollY<50&&e.setState({scrolled:!1})}))}},{key:"render",value:function(){return Object(c.jsx)(b.a,{className:"App",children:Object(c.jsxs)(u.c,{children:[Object(c.jsxs)(u.a,{exact:!0,path:"/",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(u.a,{path:"/products",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(u.a,{path:"/textiles",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(u.a,{path:"/misc",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(u.a,{path:"/about",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(u.a,{path:"/osmo",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled,minimal:!0}),Object(c.jsx)(N,{slug:"/osmo"})]}),Object(c.jsxs)(u.a,{path:"/mitrium",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled,minimal:!0}),Object(c.jsx)(N,{slug:"/mitrium"})]}),Object(c.jsxs)(u.a,{path:"/poly",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled,minimal:!0}),Object(c.jsx)(N,{slug:"/poly"})]}),Object(c.jsxs)(u.a,{path:"/hopper",children:[Object(c.jsx)(O,{scrolled:this.state.scrolled,minimal:!0}),Object(c.jsx)(N,{slug:"/hopper"})]})]})})}}]),s}(r.a.Component));function O(e){return Object(c.jsxs)("div",{className:"header".concat(e.scrolled?" scrolled":"").concat(e.minimal?" minimal":""),children:[Object(c.jsxs)("div",{className:"header-menu",children:[Object(c.jsx)("div",{className:"menu-logo",children:Object(c.jsxs)(b.b,{className:"title-link",to:"/",children:[Object(c.jsx)("div",{className:"hamburger hamburger-top"}),Object(c.jsx)("div",{className:"hamburger hamburger-bottom"})]})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/products",children:"Products"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/textiles",children:"Textiles"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/misc",children:"Misc"})}),Object(c.jsx)("div",{className:"header-menu-item",children:Object(c.jsx)(b.b,{className:"header-link",to:"/about",children:"About"})})]}),Object(c.jsx)("h2",{className:"title-name",children:Object(c.jsx)(b.b,{className:"title-link",to:"/",children:"Rose Kirby"})})]})}var x=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={scrolled:!1,content:{sections:[]},isLoaded:!1,imagesLoaded:!1},c}return Object(d.a)(s,[{key:"waitForLoad",value:function(e){e&&(e.addEventListener("load",this.imageLoaded),++this.imgCount)}},{key:"imageLoaded",value:function(e){e.target.removeEventListener("load",this.imageLoaded),++this.imgLoadCount===this.imgCount&&this.setState({isLoaded:!0})}},{key:"componentDidMount",value:function(){var e=this;this.imgCount=this.imgLoadCount=0,fetch("/index.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,content:t}),setTimeout((function(){e.setState({imagesLoaded:!0})}),2e3)}),(function(t){e.setState({isLoaded:!0,error:t})}));var t=document.createElement("script");t.src="/scripts.js",t.async=!0,document.body.appendChild(t),!1===this.state.scrolled&&window.scrollY>=50&&this.setState({scrolled:!0}),document.addEventListener("scroll",(function(){!1===e.state.scrolled&&window.scrollY>=50?e.setState({scrolled:!0}):!0===e.state.scrolled&&window.scrollY<50&&e.setState({scrolled:!1})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"watercolor-page",children:[Object(c.jsx)(w,{}),Object(c.jsx)("div",{className:"watercolor-splash".concat(this.state.isLoaded&&this.state.imagesLoaded?"  isloaded":"")}),Object(c.jsx)(p,{}),this.state.content.sections.map((function(e,t){return Object(c.jsx)(g,{section:e})})),Object(c.jsx)(v,{})]})}}]),s}(r.a.Component);function p(e){return Object(c.jsxs)("div",{className:"watercolor-leader",children:[Object(c.jsx)("div",{className:"watercolor-category"}),Object(c.jsxs)("div",{className:"watercolor-beginning",children:[Object(c.jsxs)("h1",{children:[Object(c.jsx)("span",{id:"babyy",children:"Industrial"})," Design is My Passion"]}),Object(c.jsx)("p",{children:"Hi! I'm Rose and these are some things I made. I care about sustainability and plants and stuff, but Im also real good at CAD and sewing."}),Object(c.jsx)("div",{className:"watercolor-sheet-tip"})]}),Object(c.jsx)("div",{className:"watercolor-introduction"})]})}var g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={stuck:!1},c.stickyScroll=c.stickyScroll.bind(Object(l.a)(c)),c.categoryRef=r.a.createRef(),c}return Object(d.a)(s,[{key:"stickyScroll",value:function(){console.log(window.scrollY),console.log(this.categoryRef.current.offsetTop),window.scrollY>=this.categoryRef.current.offsetTop&&(console.log(this.state.stuck),this.setState({stuck:!0}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"watercolor-section",children:[Object(c.jsx)("div",{className:"watercolor-category",children:Object(c.jsx)("div",{ref:this.categoryRef,onClick:this.stickyScroll,className:this.state.stuck?"stuck":"",children:Object(c.jsx)("h2",{children:this.props.section.title})})}),Object(c.jsx)("div",{className:"watercolor-slides",children:this.props.section.slides.map((function(e,t){return Object(c.jsx)(f,{slide:e})}))})]})}}]),s}(r.a.Component);function f(e){return Object(c.jsxs)("div",{className:"watercolor-slide",children:[Object(c.jsx)("div",{className:"watercolor-sheet",children:Object(c.jsx)(b.b,{to:e.slide.url,children:Object(c.jsx)("img",{className:"watercolor-image",src:e.slide.image,alt:"watercolor thumbnail for "+e.slide.title})})}),Object(c.jsx)("div",{className:"watercolor-sidebar",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)(b.b,{to:e.slide.url,children:e.slide.title})}),Object(c.jsx)("span",{children:e.slide.subtitle}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.slide.topics}),Object(c.jsx)("p",{children:e.slide.description})]})})]})}function v(e){return Object(c.jsxs)("div",{className:"watercolor-follower",children:[Object(c.jsx)("div",{className:"watercolor-category"}),Object(c.jsxs)("div",{className:"watercolor-ending",children:[Object(c.jsx)("div",{className:"watercolor-sheet-tip"}),Object(c.jsx)("h1",{children:"Thats it! ...or is it?"}),Object(c.jsx)("p",{children:"Hope you enjoyed! Now go back and beat it on hard mode"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"\xa9 Rose Kirby | 2021"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{className:"watercolor-follower-link",href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:"instant gram"}),Object(c.jsx)("a",{className:"watercolor-follower-link",href:"/behance.txt",target:"_blank",children:"bee hands"})]}),Object(c.jsxs)("div",{className:"watercolor-conclusion",children:[Object(c.jsx)("h2",{children:"Contact me!"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"mailto:rose@rosekir.by",target:"_blank",rel:"noreferrer",children:"There's more where that came from"})]})]})}function w(){return Object(c.jsx)("img",{className:"watercolor-pens",src:"/images/pens.png",alt:""})}var N=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={scrolled:!1,content:{children:[]},isLoaded:!1,imagesLoaded:!1},c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.imgCount=this.imgLoadCount=0,fetch("/projects.json").then((function(e){return e.json()})).then((function(t){console.log(e.props.slug),e.setState({isLoaded:!0,content:t.projects.find((function(t){return t.slug==e.props.slug}))}),setTimeout((function(){e.setState({imagesLoaded:!0})}),2e3)}),(function(t){console.log(t),e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this;return console.log(this.state.content.children[0]),Object(c.jsxs)("div",{className:"project-page",children:[this.state.content.children.map((function(t,s){return Object(c.jsx)(k,{props:e.state.content.children[s].props})})),Object(c.jsx)(y,{})]})}}]),s}(r.a.Component);function k(e){return Object(c.jsx)("div",{className:"project-full-image",children:Object(c.jsx)("img",{src:e.props.src,alt:e.props.alt})})}function y(e){return Object(c.jsx)("div",{className:"project-heading",children:Object(c.jsx)("h1",{children:"Project Name"})})}var L=m,S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),r(e),i(e)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.aae81b9c.chunk.js.map