(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{188:function(e,t,a){e.exports=a(385)},198:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(27),l=a.n(r),o=a(10),s=a(91),u=a.n(s),i=a(148);function m(){return(m=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}),(function(e){throw new Error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=a(41),E=a(9),f=a(24);function v(e){l.a.render(c.a.createElement(B,{select:e}),document.getElementById("root"))}function b(){var e=Object(E.g)();return c.a.createElement("button",{className:"backbutton",onClick:function(){e.push("/"),v()}},"Go back")}a(198);function y(e){console.log("page: "+e),l.a.render(c.a.createElement(d.a,null,c.a.createElement(E.a,{to:e.country}),c.a.createElement(p,{country:e})),document.getElementById("root"))}function p(e){return console.log(e),c.a.createElement("div",{className:"countrypage"},c.a.createElement("h1",null,"Teste"),c.a.createElement(b,null))}function h(e,t,a){v(t),e.sort((function(e,a){return a[t]-e[t]}));var n=e.map((function(e){return c.a.createElement("div",{className:"countrydiv",key:e.country,onClick:function(){!function(e){console.log("was clicked"),y(e)}(e)}},e[t]," in ",e.country," ",c.a.createElement("img",{src:e.countryInfo.flag,className:"countryflag",alt:"countryflag"}))}));return a?n:n.reverse()}function g(e){return"cases"===e?"blue":"deaths"===e?"red":"green"}var j=a(96);a(199),a(200);function O(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)({}),u=Object(o.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(!0),E=Object(o.a)(d,2),v=E[0],b=E[1],y=Object(n.useState)(""),p=Object(o.a)(y,2),O=p[0],k=p[1];return Object(n.useEffect)((function(){m({color:g(Object.values(e.type).join(""))})}),[e.type]),Object(n.useEffect)((function(){0===r.length&&l(h(Array.from(e.countries),e.type,v))}),[e,v,r]),c.a.createElement("div",{className:"separators"},c.a.createElement(f.d,{key:"tabs"},c.a.createElement(f.b,{key:"tablist",className:"tablist"},c.a.createElement(f.a,{key:"cases",onClick:function(){N(h(e.countries,"cases",v),l,O)}},"CASES"),c.a.createElement(f.a,{key:"deaths",onClick:function(){N(h(e.countries,"deaths",v),l,O)}},"DEATHS"),c.a.createElement(f.a,{key:"recovered",onClick:function(){N(h(e.countries,"recovered",v),l,O)}},"RECOVERED")),c.a.createElement(f.c,{style:i,key:"casesview",className:"tab"},c.a.createElement("h2",null,"Total Cases: ",e.cases)),c.a.createElement(f.c,{style:i,key:"deathsview",className:"tab"},c.a.createElement("h2",null,"Total Deaths: ",e.deaths)),c.a.createElement(f.c,{style:i,key:"recoveredview",className:"tab"},c.a.createElement("h2",null,"Total Recovered: ",e.recovered))),c.a.createElement("button",{className:"arrowbutton",onClick:function(){if(b(!v)," "===r)return" ";l(r.reverse())}},v?c.a.createElement(j.b,{className:"arrow"}):c.a.createElement(j.a,{className:"arrow"})),c.a.createElement("input",{className:"search",type:"text",placeholder:"search... ",value:O,onChange:function(t){N(h(e.countries,e.type,v),l,t.target.value),k(t.target.value)}}),c.a.createElement("div",{className:"countrylist"},r))}function N(e,t,a){if(0===a.length)t(e);else{var n=e.filter((function(e){return!!e.key.toUpperCase().includes(a.toUpperCase())&&e}));n.length>0?t(n):t(" ")}}var k=a(388),w=a(390),S=a(389);a(201),a(202);function C(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],m=u[1];return Object(n.useEffect)((function(){l(e.countries),m(g(Object.values(e.type).join("")))}),[e]),c.a.createElement("div",null,c.a.createElement(k.a,{id:"mapview",className:"mapview",center:[38.7071,-9.13549],zoom:2,minZoom:2,maxZoom:18,maxBounds:[[-89.98155760646617,-180],[89.99346179538875,180]]},c.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}{y}.png"}),Array.from(r).map((function(t,a){return c.a.createElement(S.a,{key:a,center:[t.countryInfo.lat,t.countryInfo.long],color:i,radius:t[e.type]})}))))}var D=a(34),x=function(e){return e>8e6?(e/1e6).toString()+" M":e>1e3?(e/1e3).toString()+" K":e.toString()};a(381);function I(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(""),E=Object(o.a)(d,2),f=E[0],v=E[1];return Object(n.useEffect)((function(){l(e.dataHistorical[e.type]),r&&m(Object.keys(r).map((function(e){return{name:new Date(e).toLocaleDateString("en-US",{month:"long",day:"numeric"}),cases:r[e]}}))),v(g(Object.values(e.type).join("")))}),[e,r]),c.a.createElement(D.c,{className:"grafic"},c.a.createElement(D.b,{data:i,margin:{top:10,right:30,left:10,bottom:0}},c.a.createElement(D.e,{dataKey:"name"}),c.a.createElement(D.f,{tickFormatter:x}),c.a.createElement(D.d,null),c.a.createElement(D.a,{type:"monotone",dataKey:"cases",stroke:f,fill:f})))}a(382);function T(e){return c.a.createElement("div",{className:"mainbody",key:"mainbody"},c.a.createElement("div",{className:"view",key:"view"},c.a.createElement(O,{key:"countrylist",cases:e.globalData.cases,deaths:e.globalData.deaths,recovered:e.globalData.recovered,countries:e.countriesData,type:e.type})),c.a.createElement("div",{className:"data"},c.a.createElement("div",{className:"mapview",key:"mapview"},c.a.createElement(C,{key:"mapview",countries:e.countriesData,type:e.type})),c.a.createElement("div",{className:"graficview",key:"graficview"},c.a.createElement(I,{dataHistorical:e.historicalData,type:e.type}))))}a(383);function A(){var e=Object(E.g)();return c.a.createElement("div",{className:"nopage"},c.a.createElement("div",{className:"sep"}),c.a.createElement("h1",null,"Page Not Found"),c.a.createElement("h1",null,"Error 404"),c.a.createElement("button",{className:"returnbutton",style:{backgroundColor:"#9a4ef1"},onClick:function(){return e.push("/")}},"Return Home"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"loader loader1"}),c.a.createElement("div",{className:"loader loader2"}),c.a.createElement("div",{className:"loader loader3"}),c.a.createElement("div",{className:"loader loader4"}),c.a.createElement("div",{className:"loader loader5"}),c.a.createElement("div",{className:"loader loader6"}),c.a.createElement("div",{className:"loader loader7"}),c.a.createElement("div",{className:"loader loader8"}),c.a.createElement("div",{className:"loader loader9"}),c.a.createElement("div",{className:"loader loader10"})))}function B(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],m=u[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),b=v[0],p=v[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),j=g[0],O=g[1];return Object(n.useEffect)((function(){0===r.length&&(H("https://disease.sh/v2/all",l),H("https://disease.sh/v2/countries",m),H("https://disease.sh/v2/historical/all?lastdays=30",p)),O(Object.values(e))}),[e,r]),c.a.createElement(d.a,null,c.a.createElement("div",{className:"router"},c.a.createElement(E.d,null,c.a.createElement(E.b,{exact:!0,path:"/"},c.a.createElement(T,{globalData:r,countriesData:i,type:j,historicalData:b})),c.a.createElement(E.b,{path:"/Portugal"},c.a.createElement(y,null)),c.a.createElement(E.b,{component:R}))))}function H(e,t){(function(e){return m.apply(this,arguments)})(e).then((function(e){t(e)})).catch((function(e){t("Not connect")}))}var R=function(){return c.a.createElement("div",null,c.a.createElement(A,null))};a(384);l.a.render(c.a.createElement(B,{select:"cases"}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.013c9763.chunk.js.map