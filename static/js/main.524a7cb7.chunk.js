(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{142:function(e,t,r){},143:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r(1),i=r.n(a),c=r(55),n=r.n(c),o=r(6),l=(r(63),r(57)),d=r(12),j=r(13),p=r(15),h=r(14),u=r(2),m=r(29),b=r(8),g=r.n(b),x=r(3);function O(){var e=Object(u.g)();return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var f={firstLoad:{},enter:{},view:{},exit:{}},v={firstLoad:{x:0},enter:{x:"-100vw"},view:{x:0,transition:{type:"tween",delay:.2,duration:1}},exit:{x:"-100vw",transition:{type:"tween",delay:0,duration:1}}},w={firstLoad:{opacity:1},enter:{opacity:0},view:{opacity:0,transition:{delay:1.5,duration:1}}},y={firstLoad:{opacity:1},enter:{opacity:0},view:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:1}}},N=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).state={content:{sections:[]},isLoaded:!1},s}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.imgCount=this.imgLoadCount=0,fetch("/index.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,content:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return Object(s.jsxs)(x.b.div,{className:"watercolor-page",variants:f,initial:void 0===(void 0!==this.props.location.state?this.props.location.state.from:void 0)?"firstLoad":"enter",animate:"view",exit:"exit",children:[Object(s.jsx)(O,{}),Object(s.jsx)(M,{}),Object(s.jsxs)(x.b.div,{className:"watercolor-page-content",variants:v,children:[Object(s.jsx)(x.b.div,{className:"watercolor-splash isloaded",variants:w}),Object(s.jsx)(k,{}),this.state.content.sections.map((function(e,t){return Object(s.jsx)(S,{section:e})})),Object(s.jsx)(I,{})]})]})}}]),r}(i.a.Component);function k(e){return Object(s.jsxs)("div",{className:"watercolor-leader",children:[Object(s.jsx)("div",{className:"watercolor-category"}),Object(s.jsxs)("div",{className:"watercolor-beginning",children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)("div",{class:"content",children:Object(s.jsx)("div",{class:"rolotext",children:Object(s.jsxs)("ul",{class:"rolotext-list",children:[Object(s.jsx)("li",{class:"rolotext-list-item",children:"Industrial"}),Object(s.jsx)("li",{class:"rolotext-list-item",children:"Sustainable"}),Object(s.jsx)("li",{class:"rolotext-list-item",children:"Systems"})]})})})," Design is My Passion"]}),Object(s.jsx)("p",{children:"These are things I made! I care about community and humans. I'm also real good at CAD and sewing."}),Object(s.jsx)("div",{className:"watercolor-sheet-tip"})]}),Object(s.jsx)("div",{className:"watercolor-introduction"})]})}var S=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).state={stuck:!1},s.stickyScroll=s.stickyScroll.bind(Object(m.a)(s)),s.categoryRef=i.a.createRef(),s}return Object(j.a)(r,[{key:"stickyScroll",value:function(){console.log(window.scrollY),console.log(this.categoryRef.current.offsetTop),window.scrollY>=this.categoryRef.current.offsetTop&&(console.log(this.state.stuck),this.setState({stuck:!0}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"watercolor-section",children:[Object(s.jsx)("div",{className:"watercolor-category",children:Object(s.jsx)("div",{ref:this.categoryRef,onClick:this.stickyScroll,className:this.state.stuck?"stuck":"",children:Object(s.jsx)("h2",{children:this.props.section.title})})}),Object(s.jsx)("div",{className:"watercolor-slides",children:this.props.section.slides.map((function(e,t){return Object(s.jsx)(C,{slide:e})}))})]})}}]),r}(i.a.Component);function C(e){return Object(s.jsxs)("div",{className:"watercolor-slide",children:[Object(s.jsx)("div",{className:"watercolor-sheet",children:Object(s.jsx)(o.b,{to:{pathname:e.slide.url,state:{from:"watercolor",to:"project"}},children:Object(s.jsx)("img",{className:"watercolor-image",src:e.slide.image,alt:"watercolor thumbnail for "+e.slide.title})})}),Object(s.jsx)("div",{className:"watercolor-sidebar",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:Object(s.jsx)(o.b,{to:{pathname:e.slide.url,state:{from:"watercolor",to:"project"}},children:e.slide.title})}),Object(s.jsx)(g.a,{className:"",children:e.slide.details})]})})]})}function I(e){return Object(s.jsxs)("div",{className:"watercolor-follower",children:[Object(s.jsx)("div",{className:"watercolor-category"}),Object(s.jsxs)("div",{className:"watercolor-ending",children:[Object(s.jsx)("div",{className:"watercolor-sheet-tip"}),Object(s.jsx)("h1",{children:"Thats it! ...or is it?"}),Object(s.jsx)("p",{children:"Hope you enjoyed! Now go back and beat it on hard mode"}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{className:"watercolor-follower-link",to:{pathname:"/about",state:{from:"watercolor",to:"project"}},children:"About"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"\xa9 Rose Kirby | 2021"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"watercolor-follower-link",href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:"instant gram"}),Object(s.jsx)("a",{className:"watercolor-follower-link",href:"/behance.txt",target:"_blank",children:"bee hands"})]}),Object(s.jsxs)("div",{className:"watercolor-conclusion",children:[Object(s.jsx)("h2",{children:Object(s.jsx)("a",{href:"mailto:rose@rosekir.by?subject=Hey%20Rose!",target:"_blank",rel:"noreferrer",children:"Contact me!"})}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"mailto:rose@rosekir.by?subject=Hey%20Rose!",target:"_blank",rel:"noreferrer",children:"There's more where that came from"})]})]})}function M(){return Object(s.jsx)(x.b.img,{className:"watercolor-pens",src:"/images/pens.png",alt:"",variants:y})}var H=Object(u.h)(N),L={enterRight:{x:"150vw"},enterUp:{y:"100%"},enterDown:{y:"-300vh",opacity:0},view:{x:0,y:0,opacity:1,transition:{type:"tween",delay:.2,duration:1}},exitRight:{x:"150vw",transition:{type:"tween",delay:.2,duration:1}},exitUp:{y:"-100%",transition:{type:"tween",delay:.2,duration:1}},exitDown:{y:"300vh",opacity:[1,0,0],transition:{type:"tween",delay:0,duration:1.2}}},R=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).state={scrolled:!1,content:{children:[]},isLoaded:!1,imagesLoaded:!1,style:document.createElement("style"),homepage:"index.json",pageOrder:[{title:"Home",url:"/"}]},s}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.imgCount=this.imgLoadCount=0,fetch("/projects.json").then((function(e){return e.json()})).then((function(t){if(e.setState({isLoaded:!0,content:t.projects.find((function(t){return t.slug===e.props.slug}))}),setTimeout((function(){e.setState({imagesLoaded:!0})}),2e3),void 0!==e.state.content.popColor||void 0!==e.state.content.strongBold){var r=e.state.style;r.innerHTML=".project-page strong {font-weight: "+(!0===e.state.content.strongBold?"bold":"inherit")+";color: "+e.state.content.popColor+";}",e.setState({style:r}),document.getElementsByTagName("head")[0].appendChild(e.state.style)}}),(function(t){console.log(t),e.setState({isLoaded:!0,error:t})})),fetch(this.state.homepage).then((function(e){return e.json()})).then((function(t){t.sections.map((function(t){t.slides.map((function(t){e.state.pageOrder.push(t)}))})),e.state.pageOrder.push({title:"Rose!",url:"/about"})}),(function(t){console.log(t),e.setState({isLoaded:!0,error:t})}))}},{key:"componentWillUnmount",value:function(){this.state.style.remove()}},{key:"render",value:function(){if(!this.state.content)return console.log("page has no data"),Object(s.jsx)(u.a,{to:"/"});var e,t;switch(void 0!==this.props.location.state?this.props.location.state.from:void 0){case"project":e="enterUp";break;case"projectBelow":e="enterDown";break;case"projectAbove":e="enterUp";break;case"watercolor":e="enterRight";break;default:e="enterUp"}switch(void 0!==this.props.history.location.state?this.props.history.location.state.to:void 0){case"project":t="exitUp";break;case"projectAbove":t="exitDown";break;case"projectBelow":t="exitUp";break;case"watercolor":t="exitRight";break;default:t="exitUp"}return Object(s.jsx)("div",{className:"project-page",children:Object(s.jsxs)(x.b.div,{variants:L,initial:e,animate:"view",exit:t,children:[this.state.content.children.map((function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e){case"ProjectFullImage":return Object(s.jsx)(T,{props:t});case"ProjectTitle":return Object(s.jsx)(W,{props:t});case"ProjectHeading":return Object(s.jsx)(P,{props:t});case"ProjectImageByText":return Object(s.jsx)(B,{props:t});case"ProjectImageByImage":return Object(s.jsx)(A,{props:t});case"ProjectColumns":return Object(s.jsx)(U,{props:t});case"ProjectCycleThree":return Object(s.jsx)(D,{props:t});case"ProjectImageCaptioned":return Object(s.jsx)(E,{props:t});case"ProjectImageGallery":return Object(s.jsx)(F,{props:t});default:return Object(s.jsx)(W,{props:t})}}(e.component,e.props)})),Object(s.jsx)(Y,{slug:this.props.slug,pageOrder:this.state.pageOrder})]})})}}]),r}(i.a.Component);function T(e){return Object(s.jsx)("div",{className:"project-full-image".concat(e.props.isTitle?" title":"").concat(void 0!==e.props.bleed?" "+e.props.bleed:""),style:void 0!==e.props.imageMaxWidth?{maxWidth:e.props.imageMaxWidth}:{},children:Object(s.jsx)("img",{src:e.props.src,alt:e.props.alt,style:void 0!==e.props.imageWidth?{width:e.props.imageWidth}:{},className:e.props.pageImage?"page-image":""})})}function W(e){return Object(s.jsx)(g.a,{className:"project-heading",children:e.props.value})}function P(e){return Object(s.jsx)(g.a,{className:"project-heading".concat(e.props.unfinished?" unfinished":""),children:e.props.value})}function B(e){return Object(s.jsxs)("div",{className:"project-image-by-text".concat(e.props.unfinished?" unfinished":""),children:["left"===e.props.imageSide?Object(s.jsx)("div",{className:"project-image-by-text-image left".concat(e.props.bleed?" bleed":""),style:void 0!==e.props.imageWidth?{flexBasis:e.props.imageWidth}:{},children:Object(s.jsx)("img",{src:e.props.src,alt:e.props.alt,className:e.props.pageImage?"page-image":""})}):null,Object(s.jsx)(g.a,{className:"project-image-by-text-text".concat(!1===e.props.details?"":" details").concat(e.props.smallText?" small-text":""),children:e.props.value}),void 0===e.props.imageSide||"right"===e.props.imageSide?Object(s.jsx)("div",{className:"project-image-by-text-image right".concat(e.props.bleed?" bleed":""),style:void 0!==e.props.imageWidth?{flexBasis:e.props.imageWidth}:{},children:Object(s.jsx)("img",{src:e.props.src,alt:e.props.alt,className:e.props.pageImage?"page-image":""})}):null]})}function A(e){return Object(s.jsxs)("div",{className:"project-image-by-image".concat(e.props.unfinished?" unfinished":""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:e.props.src1,alt:e.props.alt1,className:e.props.pageImage1?"page-image":""})}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:e.props.src2,alt:e.props.alt2,className:e.props.pageImage2?"page-image":""})})]})}function U(e){return Object(s.jsxs)("div",{className:"project-columns".concat(e.props.unfinished?" unfinished":""),children:[Object(s.jsx)(g.a,{className:"project-columns-heading",children:e.props.value}),Object(s.jsx)("div",{className:"project-columns-columns",children:e.props.columns.map((function(e,t){return void 0!==e.src?Object(s.jsx)("div",{className:"project-columns-column",children:Object(s.jsx)("img",{src:e.src,alt:e.alt,style:void 0!==e.opacity?{opacity:e.opacity}:{}})}):null}))}),Object(s.jsx)("div",{className:"project-columns-columns",children:e.props.columns.map((function(e,t){return Object(s.jsx)(g.a,{className:"project-columns-column",children:e.value})}))})]})}function D(e){return Object(s.jsxs)("div",{className:"project-cycle-three",children:[Object(s.jsx)("img",{className:"project-cycle-arrow",src:"/images/osmo/circle-arrow.png",alt:""}),Object(s.jsx)("img",{className:"project-cycle-arrow",src:"/images/osmo/circle-arrow.png",alt:"",style:{transform:"rotate(130deg)"}}),Object(s.jsx)("img",{className:"project-cycle-arrow",src:"/images/osmo/circle-arrow.png",alt:"",style:{transform:"rotate(230deg)"}}),Object(s.jsxs)("div",{className:"project-cycle-stage",children:[Object(s.jsx)("img",{src:e.props.stages[0].src,alt:e.props.stages[0].alt}),Object(s.jsx)(g.a,{className:"big-details",children:e.props.stages[0].value})]}),Object(s.jsxs)("div",{className:"project-cycle-stage",children:[Object(s.jsx)("img",{src:e.props.stages[2].src,alt:e.props.stages[2].alt}),Object(s.jsx)(g.a,{className:"big-details",children:e.props.stages[2].value})]}),Object(s.jsxs)("div",{className:"project-cycle-stage",children:[Object(s.jsx)("img",{src:e.props.stages[1].src,alt:e.props.stages[1].alt}),Object(s.jsx)(g.a,{className:"big-details",children:e.props.stages[1].value})]})]})}function E(e){return Object(s.jsxs)("div",{className:"project-image-captioned".concat(e.props.unfinished?" unfinished":""),children:[Object(s.jsx)("img",{src:e.props.src,alt:e.props.alt,style:void 0!==e.props.imageWidth?{width:e.props.imageWidth}:{}}),Object(s.jsxs)("div",{className:"project-image-captioned-caption",children:[Object(s.jsx)("h2",{className:"project-image-captioned-title",children:e.props.titleValue}),Object(s.jsx)("span",{className:"project-image-captioned-details",children:e.props.detailsValue})]})]})}var F=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).slider=i.a.createRef(),s}return Object(j.a)(r,[{key:"render",value:function(){var e=-(null!==this.slider.current?this.slider.current.clientWidth-this.slider.current.parentElement.clientWidth+2*parseFloat(window.getComputedStyle(this.slider.current).marginLeft)+2*parseFloat(window.getComputedStyle(this.slider.current).marginRight):1);return console.log(e),console.log(null!==this.slider.current?this.slider.current.clientWidth:null),console.log(null!==this.slider.current?this.slider.current.parentElement.clientWidth:null),console.log(null!==this.slider.current?parseFloat(window.getComputedStyle(this.slider.current).marginLeft):null),console.log(null!==this.slider.current?parseFloat(window.getComputedStyle(this.slider.current).marginRight):null),Object(s.jsxs)("div",{className:"project-image-gallery".concat(this.props.props.unfinished?" unfinished":""),children:[Object(s.jsx)(x.b.div,{className:"project-image-gallery-gallery",style:{transform:"translateZ(0)",cursor:"grab"},whileTap:{cursor:"grabbing"},children:Object(s.jsx)(x.b.div,{className:"project-image-gallery-slider",drag:"x",dragPropagation:!0,dragConstraints:{left:e,right:0},ref:this.slider,children:this.props.props.images.map((function(e,t){return Object(s.jsx)("img",{src:e.src,alt:e.alt,className:e.pageImage?"page-image":""})}))})}),Object(s.jsxs)("div",{className:"project-image-gallery-caption",children:[Object(s.jsx)("h2",{className:"project-image-captioned-title",children:this.props.props.titleValue}),Object(s.jsx)("span",{className:"project-image-captioned-details",children:this.props.props.detailsValue})]})]})}}]),r}(i.a.Component),_={initial:{},hover:{}},V={initial:{x:0,y:0,opacity:1},hover:{originX:0,originY:1,scale:3,x:0,y:0,opacity:.1,transition:{type:"tween",duration:.5}}};function Y(e){return Object(s.jsxs)("div",{className:"project-footer",children:[Object(s.jsxs)("div",{className:"project-footer-big",children:[Object(s.jsx)(o.b,{className:"project-footer-link project-footer-link-prev",to:{pathname:void 0!==e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))-1]?e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))-1].url:null,state:{from:"projectBelow",to:e.pageOrder.findIndex((function(t){return t.url===e.slug}))<=1?"watercolor":"projectAbove"}},children:Object(s.jsxs)(x.b.div,{variants:_,whileHover:"hover",children:[Object(s.jsx)("h3",{children:"Previous:"}),Object(s.jsx)("h2",{children:void 0!==e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))-1]?e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))-1].title:null}),e.pageOrder.findIndex((function(t){return t.url===e.slug}))<=1&&Object(s.jsx)(x.b.img,{src:"/images/left-arrow.svg",alt:"",className:"",variants:V}),e.pageOrder.findIndex((function(t){return t.url===e.slug}))>1&&Object(s.jsx)(x.b.img,{src:"/images/up-arrow.svg",alt:"",className:"",variants:V})]})}),e.pageOrder.findIndex((function(t){return t.url===e.slug}))+1<e.pageOrder.length&&Object(s.jsx)(o.b,{className:"project-footer-link project-footer-link-next",to:{pathname:void 0!==e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))+1]?e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))+1].url:null,state:{from:"projectAbove",to:"projectBelow"}},children:Object(s.jsxs)(x.b.div,{variants:_,whileHover:"hover",children:[Object(s.jsx)("h2",{children:"Next:"}),Object(s.jsx)("h1",{children:void 0!==e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))+1]?e.pageOrder[e.pageOrder.findIndex((function(t){return t.url===e.slug}))+1].title:null}),Object(s.jsx)(x.b.img,{src:"/images/down-arrow.svg",alt:"",className:"",variants:V})]})})]}),Object(s.jsxs)("div",{className:"project-footer-little",children:[Object(s.jsx)(o.b,{className:"watercolor-follower-link",to:{pathname:"/about",state:{from:"project",to:"project"}},children:"About"}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{className:"watercolor-follower-link",to:{pathname:"/",state:{from:"project",to:"watercolor"}},children:"Home"}),Object(s.jsx)("a",{href:"mailto:rose@rosekir.by?subject=Hey%20Rose!",target:"_blank",rel:"noreferrer",children:"Contact"})]})]})}var z=Object(u.h)(R),J={enterRight:{x:"150vw"},enterUp:{y:"100%"},view:{x:0,y:0,opacity:1,transition:{type:"tween",delay:.2,duration:1}},exitRight:{x:"150vw",transition:{type:"tween",delay:.2,duration:1}}},K=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).state={content:{}},s}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("/about.json").then((function(e){return e.json()})).then((function(t){e.setState({content:t}),console.log(e.state.content)}),(function(t){e.setState({error:t}),console.log(t)}))}},{key:"render",value:function(){var e;switch(void 0!==this.props.location.state?this.props.location.state.from:void 0){case"project":case"projectAbove":e="enterUp";break;case"watercolor":case"header":e="enterRight";break;default:e="enterUp"}return Object(s.jsxs)(x.b.div,{className:"about-page",variants:J,initial:e,animate:"view",exit:"exitRight",children:[Object(s.jsxs)("div",{className:"about-main",children:[Object(s.jsx)(g.a,{className:"about-main-content",children:this.state.content.mainContent,linkTarget:"_blank"}),Object(s.jsx)("div",{className:"about-main-image",children:Object(s.jsx)("img",{src:this.state.content.mainSrc,alt:this.state.content.mainAlt})})]}),Object(s.jsxs)("div",{className:"about-footer",children:[Object(s.jsx)(o.b,{className:"watercolor-follower-link",to:{pathname:"/",state:{from:"about",to:"watercolor"}},children:"Home"}),Object(s.jsx)("a",{href:"mailto:rose@rosekir.by?subject=Hey%20Rose!",target:"_blank",rel:"noreferrer",children:"Contact"})]})]})}}]),r}(i.a.Component),G=Object(u.h)(K),X=(r(142),i.a.createContext()),Z=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={headerMinimal:!1,headerShift:!1},e}return Object(j.a)(r,[{key:"render",value:function(){var e=this;return Object(s.jsx)(X.Provider,{value:{state:this.state,setHeaderMinimal:function(t){return e.setState({headerMinimal:t})},setHeaderShift:function(t){return e.setState({headerShift:t})}},children:this.props.children})}}]),r}(i.a.Component),q=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(d.a)(this,r),(s=t.call(this,e)).state={headerMinimal:!1},s}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="/scripts.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return Object(s.jsx)(Z,{children:Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(Q,{}),Object(s.jsx)(x.a,{exitBeforeEnter:!0,children:Object(s.jsxs)(u.d,{location:this.props.location,children:[Object(s.jsxs)(u.b,{exact:!0,path:"/",children:[Object(s.jsx)(X.Consumer,{children:function(e){e.state.headerMinimal&&e.setHeaderMinimal(!1),!e.state.headerShift&&e.setHeaderShift(!0)}}),Object(s.jsx)(H,{})]}),Object(s.jsx)(u.b,{path:"/products",children:Object(s.jsx)(H,{})},"products"),Object(s.jsx)(u.b,{path:"/textiles",children:Object(s.jsx)(H,{})}),Object(s.jsx)(u.b,{path:"/misc",children:Object(s.jsx)(H,{})}),Object(s.jsxs)(u.b,{path:"/about",children:[Object(s.jsx)(X.Consumer,{children:function(e){e.state.headerMinimal&&e.setHeaderMinimal(!1),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(G,{})]},"about"),Object(s.jsxs)(u.b,{path:"/osmo",children:[Object(s.jsx)(X.Consumer,{children:function(e){!e.state.headerMinimal&&e.setHeaderMinimal(!0),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(z,{slug:"/osmo"},"osmo")]}),Object(s.jsxs)(u.b,{path:"/mitrium",children:[Object(s.jsx)(X.Consumer,{children:function(e){!e.state.headerMinimal&&e.setHeaderMinimal(!0),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(z,{slug:"/mitrium"},"mitrium")]}),Object(s.jsxs)(u.b,{path:"/poly",children:[Object(s.jsx)(X.Consumer,{children:function(e){!e.state.headerMinimal&&e.setHeaderMinimal(!0),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(z,{slug:"/poly"},"osmo")]}),Object(s.jsxs)(u.b,{path:"/hopper",children:[Object(s.jsx)(X.Consumer,{children:function(e){!e.state.headerMinimal&&e.setHeaderMinimal(!0),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(z,{slug:"/hopper"},"hopper")]}),Object(s.jsxs)(u.b,{path:"/drawings",children:[Object(s.jsx)(X.Consumer,{children:function(e){!e.state.headerMinimal&&e.setHeaderMinimal(!0),e.state.headerShift&&e.setHeaderShift(!1)}}),Object(s.jsx)(z,{slug:"/drawings"},"drawings")]})]},this.props.location.pathname)})]})})}}]),r}(i.a.Component);function Q(e){var t=Object(x.d)().scrollY,r=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),r=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r}(),i=Object(a.useContext)(X),c=r.width,n=r.height,d=Math.min(c,n),j=Object(x.c)(t,[0,50],[0,18+.09*d+.45*c]);return Object(s.jsxs)(x.b.div,{className:"header".concat(i.state.headerMinimal?" minimal":""),initial:{x:0},style:{x:i.state.headerShift?j:0},transition:{duration:.2},children:[Object(s.jsxs)("div",{className:"header-menu",children:[Object(s.jsxs)(o.b,{className:"menu-logo title-link",to:{pathname:"/",state:{from:"header",to:"watercolor"}},children:[Object(s.jsx)("div",{className:"hamburger hamburger-top"}),Object(s.jsx)("div",{className:"hamburger hamburger-bottom"})]}),Object(s.jsx)("div",{className:"header-menu-item",children:Object(s.jsx)(o.b,{className:"header-link",to:{pathname:"/about",state:{from:"header",to:"watercolor"}},children:"About"})})]}),Object(s.jsx)("h2",{className:"title-name",children:Object(s.jsx)(o.b,{className:"title-link",to:{pathname:"/",state:{from:"header",to:"watercolor"}},children:"Rose Kirby"})}),Object(s.jsx)(X.Consumer,{children:function(e){return Object(s.jsx)("span",{children:e.state.headerMinimal})}})]})}var $=Object(u.h)(q),ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,145)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),s(e),a(e),i(e),c(e)}))};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(o.a,{className:"App",children:Object(s.jsx)($,{})})}),document.getElementById("root")),ee()},63:function(e,t,r){}},[[143,1,2]]]);
//# sourceMappingURL=main.524a7cb7.chunk.js.map