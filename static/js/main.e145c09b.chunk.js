(this["webpackJsonpreact-nba-players"]=this["webpackJsonpreact-nba-players"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,c,a,i=n(5),o=n(0),s=n.n(o),l=n(3),j=n.n(l),b=(n(24),n(6)),u=n(19),d=n(9),h=n(8),f=(n(25),n(1)),O=function(e){var t=e.player,n=e.handleFavorite;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(x,{children:[Object(f.jsx)("b",{children:"Name: "}),t.first_name+" "+t.last_name,Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Position: "}),t.position,Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:"Favorite: "}),Object(f.jsx)(p,{type:"checkbox",checked:t.favorite,name:"favorite",onChange:function(e){return n(t.id,e.target.checked)}})]})})},x=h.a.section(r||(r=Object(b.a)(["\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    padding: 3%;\n    text-align: left;\n"]))),p=h.a.input(c||(c=Object(b.a)(["\n"]))),g=function(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)("white"),i=Object(d.a)(a,2),s=i[0],l=i[1],j=e.items.filter((function(e){return(e.first_name+" "+e.last_name).toLowerCase().includes(r.toLowerCase())})).map((function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{player:t,handleFavorite:e.handleFavorite})," ",Object(f.jsx)("br",{})]})}));return Object(f.jsxs)("div",{style:{padding:"5px",alignItems:"center",backgroundColor:s},children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsx)("label",{htmlFor:"search",children:"Search: "}),Object(f.jsx)("input",{type:"text",name:"search",value:r,onChange:function(e){return c(e.target.value)}}),e.bgColors&&Object(f.jsxs)("p",{children:["Background Color:",e.bgColors.map((function(e){return Object(f.jsx)("button",{onClick:function(){return l(e)},children:e})}))]}),Object(f.jsx)("ul",{children:j})]})},v=n(4);var m=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(v.d)();Object(o.useEffect)((function(){console.log("Fetching data"),c.info("Loading...",{timeout:1e3}),fetch("https://www.balldontlie.io/api/v1/players").then((function(e){return e.json()})).then((function(e){return r(e.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{favorite:!1})})))}),(function(e){return c.error("Error while fetching, try again")}))}),[]);var a=function(e,t){r((function(n){var r=n.find((function(t){return t.id===e}));return r&&(n[n.indexOf(r)].favorite=t,console.log(n)),Object(u.a)(n)}))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"NBA Players"}),Object(f.jsxs)(C,{children:[Object(f.jsx)(g,{title:"Players:",items:n,handleFavorite:a}),Object(f.jsx)(g,{title:"Favorites:",bgColors:["White","Teal","Yellow"],items:n.filter((function(e){return e.favorite})),handleFavorite:a})]})]})},C=h.a.div(a||(a=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n"]))),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},y=n(18),w={position:v.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:v.c.SCALE};j.a.render(Object(f.jsx)(v.a,Object(i.a)(Object(i.a)({template:y.a},w),{},{children:Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(m,{})})})),document.getElementById("root")),F()}},[[33,1,2]]]);
//# sourceMappingURL=main.e145c09b.chunk.js.map