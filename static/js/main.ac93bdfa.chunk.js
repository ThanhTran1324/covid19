(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{164:function(e,t,a){e.exports=a(352)},169:function(e,t,a){},170:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(47),c=a.n(o),s=(a(169),a(170),a(74)),i=a.n(s),l=a(127),d=a(128),m=a(129),u=a(139),h=a(140),p=a(9),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=window.innerWidth>0?window.innerWidth:Screen.width;n.setState({width:e}),n.getData()},n.getData=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/all",{method:"GET"}).then((function(e){return e.json()}));case 2:return t=e.sent,n.setState({dataUpdate:new Date(t.updated).toString()}),e.next=6,fetch("https://corona.lmao.ninja/states",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}));case 6:a=e.sent,n.setState({data:n.dataFilterFromrapidapi(a)});case 8:case"end":return e.stop()}}),e)}))),n.dataFilterFromrapidapi=function(e){var t=[];return e.map((function(e){var a={state:e.state,cases:e.cases,deaths:e.deaths,todayCases:e.todayCases};return t.push(a)})),t},n.state={width:0,dataUpdate:"",data:[]},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"center"},"Covid-19 Cases in USA"),r.a.createElement("p",null,"Last updated : ",this.state.dataUpdate,r.a.createElement("br",null),"Data from https://www.worldometers.info/"),r.a.createElement(p.h,{width:"95%",height:400},r.a.createElement(p.e,{data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(p.d,{strokeDasharray:"3 3"}),r.a.createElement(p.j,{dataKey:"state"}),r.a.createElement(p.k,null),r.a.createElement(p.f,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px",textTransform:"capitalize"}}),r.a.createElement(p.g,{y:0,stroke:"#000"}),r.a.createElement(p.c,{startIndex:0,endIndex:10,dataKey:"name",height:30,stroke:"#53DB90"}),r.a.createElement(p.b,{dataKey:"todayCases",fill:"#8884d8"}),r.a.createElement(p.b,{dataKey:"cases",fill:"#82ca9d"}),r.a.createElement(p.i,{cursor:{stroke:"rgba(126, 88, 96, 0.2)",strokeWidth:30}}),r.a.createElement(p.a,{type:"monotone",dataKey:"deaths",fill:"red",stroke:"red"}))))}}]),a}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.ac93bdfa.chunk.js.map