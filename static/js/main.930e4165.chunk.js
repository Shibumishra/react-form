(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[0],{106:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(30),l=a.n(c),r=(a(106),a(107),a(108),a(35)),i=a(5),b=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-2",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("span",{className:"navbar-brand",children:"Routing"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/",className:"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/about",className:"nav-link",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/contact",className:"nav-link",children:"Contact"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/signin",className:"nav-link",children:"Sign In"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/signup",className:"nav-link",children:"Sign Up"})})]})})]})})})},j=a(11),o=function(){return Object(i.jsx)("h1",{children:"Home"})},d=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"About"})})},m=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Contact"})})},u=a(47),O=a(186),x=a(188),p=a(187),h=a(99),v={labelCol:{span:8},wrapperCol:{span:16}},g={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},f=function(){return Object(i.jsxs)(O.a,Object(u.a)(Object(u.a)({},v),{},{name:"nest-messages",onFinish:function(e){console.log(e)},validateMessages:g,children:[Object(i.jsx)(O.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0}],children:Object(i.jsx)(x.a,{})}),Object(i.jsx)(O.a.Item,{name:["user","email"],label:"Email",rules:[{type:"email"}],children:Object(i.jsx)(x.a,{})}),Object(i.jsx)(O.a.Item,{name:["user","age"],label:"Age",rules:[{type:"number",min:0,max:99}],children:Object(i.jsx)(p.a,{})}),Object(i.jsx)(O.a.Item,{name:["user","website"],label:"Website",children:Object(i.jsx)(x.a,{})}),Object(i.jsx)(O.a.Item,{name:["user","introduction"],label:"Introduction",children:Object(i.jsx)(x.a.TextArea,{})}),Object(i.jsx)(O.a.Item,{wrapperCol:Object(u.a)(Object(u.a)({},v.wrapperCol),{},{offset:8}),children:Object(i.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))},N=a.p+"static/media/pagenotfound.2dd5a513.gif",w=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("img",{style:{width:"100%",height:"90vh"},src:N,alt:"404: page not found!"})})},y=a(67),I=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(y.a)(c,2),r=l[0],b=l[1],o=Object(n.useState)(!1),d=Object(y.a)(o,2),m=d[0],u=d[1],O="abcd",x="12345",p=function(e){"username"===e.target.name&&s(e.target.value),"password"===e.target.name&&b(e.target.value)};return Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[m&&Object(i.jsx)(j.a,{to:"/"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("sumbit",a,r),O===a&&x===r&&(u(!0),window.localStorage.setItem("username",a),window.localStorage.setItem("password",r))},children:[Object(i.jsx)("label",{className:"m-2",children:"User Name"}),Object(i.jsx)("input",{type:"text",name:"username",value:a,placeholder:"Enter Username",onChange:p})," ",Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"m-2",children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",value:r,placeholder:"Enter Password",onChange:p})," ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"m-auto",type:"submit"})]})]})},C=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)(j.d,{children:[Object(i.jsx)(j.b,{path:"/",exact:!0,component:o}),Object(i.jsx)(j.b,{path:"/about",component:d}),Object(i.jsx)(j.b,{path:"/contact",component:m}),Object(i.jsx)(j.b,{path:"/signin",component:I}),Object(i.jsx)(j.b,{path:"/signup",component:f}),Object(i.jsx)(j.b,{component:w})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),S()}},[[183,1,2]]]);
//# sourceMappingURL=main.930e4165.chunk.js.map