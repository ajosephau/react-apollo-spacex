(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{106:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(32),l=n.n(c),i=n(143),o=n(142),u=n(141),m=n(109),s=n(145),h=n(140),E=n(79),p=n(30),g=n(134),d=n(137),f=n(139),y=n(133),b=n(135),v=n(138),k=n(132),w=n(136),_=n(144),x=function(e){var a=e.index,n=e.launch;return r.a.createElement(k.a,{key:a},r.a.createElement(y.a,{component:"th",scope:"row"},n.mission_name),r.a.createElement(y.a,{align:"right"},n.launch_year),r.a.createElement(y.a,{align:"right"},r.a.createElement(_.a,{checked:n.upcoming})),r.a.createElement(y.a,{align:"right"},r.a.createElement(_.a,{checked:n.launch_success})))};function j(){var e=Object(E.a)(['\nquery launches {\n  launches(sort: "launch_year") {\n      id\n      mission_name\n      upcoming\n      launch_year\n      launch_success\n    }\n  }\n']);return j=function(){return e},e}var A=Object(p.gql)(j()),O=Object(g.a)({table:{minWidth:550}}),q=function(e){var a=O(),n=e.launches,t=[];return n.forEach((function(e,a){t.push(r.a.createElement(x,{key:a,index:a,launch:e}))})),r.a.createElement(b.a,{component:w.a},r.a.createElement(d.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,null,"Mission name"),r.a.createElement(y.a,{align:"right"},"Year"),r.a.createElement(y.a,{align:"right"},"Upcoming launch?"),r.a.createElement(y.a,{align:"right"},"Launch success?"))),r.a.createElement(f.a,null,t)))},L=function(){var e=Object(p.useQuery)(A),a=e.loading,n=e.error,t=e.data;return a?r.a.createElement("div",null,"Loading..."):n?(console.error(n),r.a.createElement("div",null,"Error!")):r.a.createElement(q,{launches:t.launches})},C=function(){return r.a.createElement("div",{className:"launchWrapper"},r.a.createElement(L,null))};function J(){return r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear()," ",r.a.createElement(h.a,{color:"inherit",href:"https://assignar.com/"},"Anthony Joseph ",r.a.createElement("span",{role:"img","aria-label":"construction-worker"},"\ud83d\udc77")," for Assignar!")," ",".")}function S(){var e=new p.ApolloClient({link:new p.HttpLink({uri:"https://api.spacex.land/graphql/"}),cache:new p.InMemoryCache});return r.a.createElement(p.ApolloProvider,{client:e},r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(s.a,{my:5},r.a.createElement(m.a,{variant:"h4",component:"h1",gutterBottom:!0},"SpaceX Launches"),r.a.createElement(C,null),r.a.createElement(J,null))))}var W=n(59),M=n(82),N=Object(M.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:W.a.A400},background:{default:"#fff"}}});l.a.render(r.a.createElement(o.a,{theme:N},r.a.createElement(i.a,null),r.a.createElement(S,null)),document.querySelector("#root"))},90:function(e,a,n){e.exports=n(106)}},[[90,1,2]]]);
//# sourceMappingURL=main.d06b7330.chunk.js.map