(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(e,t,a){"use strict";var n=a(4),c=a(5),r=a(7),o=a(6),i=a(8),s=a(0),l=a.n(s),m=a(12),u=a.n(m),p=(a(28),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=u()("c-icon",this.props.className);return l.a.createElement("i",{className:e,style:this.props.style,onClick:this.props.onClick},l.a.createElement("svg",{"aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"#icon-".concat(this.props.type)})))}}]),t}(s.Component));t.a=p},19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=a(34),s=(a(24),[{path:"/magnet",name:"Magnet",icon:"magnet",exact:!0,component:Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(5),a.e(6)]).then(a.bind(null,101))})},{path:"/",name:"Home",icon:"movie1",exact:!0,component:Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,100))})},{path:"/*",name:"NotFound",icon:"404",component:Object(n.lazy)(function(){return a.e(7).then(a.bind(null,99))})}]),l=a(4),m=a(5),u=a(7),p=a(6),h=a(8),d=a(35),b=a(32),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.routes,t=void 0===e?[]:e;return c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},"Loading")},c.a.createElement(d.a,null,t.map(function(e,t){return c.a.createElement(b.a,{key:t,path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes,exact:e.exact}))}})})))}}]),t}(n.Component),f=a(33),E=a(36),y=a(13),g=(a(29),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={navigates:[{path:"/",name:"Home",icon:"movie",exact:!0},{path:"/magnet",name:"Magnet",icon:"magnet"}]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"c-sidebar"},c.a.createElement("div",{className:"c-sidebar__header"}),c.a.createElement("div",{className:"c-sidebar__body"},c.a.createElement("ul",{className:"c-sidebar__navigator-list"},this.state.navigates.map(function(t,a){return c.a.createElement("nav",{className:"c-sidebar__navigator-item ".concat(e.props.location.pathname===t.path?"is-active":""),key:a},c.a.createElement(f.a,{className:"navigator-link",to:t.path},c.a.createElement(y.a,{className:"navigator-link__icon",type:t.icon}),c.a.createElement("span",{className:"navigator-link__name"},t.name)))}))),c.a.createElement("div",{className:"c-sidebar-footer"}))}}]),t}(n.Component)),j=Object(E.a)(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,null,c.a.createElement("main",{className:"layout"},c.a.createElement("aside",{className:"layout__aside"},c.a.createElement(j,null)),c.a.createElement("div",{className:"layout__content"},c.a.createElement(v,{routes:s})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,3]]]);
//# sourceMappingURL=main.eae0261e.chunk.js.map