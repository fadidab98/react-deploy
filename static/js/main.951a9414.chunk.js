(this["webpackJsonpmulti-react"]=this["webpackJsonpmulti-react"]||[]).push([[0],{14:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(19),r=a.n(l),n=(a(25),a(6)),i=a(4),d=(a(14),a(0)),o=Object(c.createContext)(),j=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(d.jsx)(o.Provider,{value:Object(c.useReducer)(t,a),children:s})},b=function(){return Object(c.useContext)(o)},m="SET_USER",u=function(e,t){switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{user:t.user});default:return e}};var x=function(e){var t=e.closeModal,a=Object(c.useState)({name:"",email:"",password:""}),s=Object(n.a)(a,2),l=s[0],r=s[1],o=b(),j=Object(n.a)(o,2),u=j[0].user,x=j[1],h=Object(c.useState)(""),O=(h.error,h.setError,Object(c.useState)(!1)),p=Object(n.a)(O,2),g=p[0],v=p[1],N=Object(c.useState)([]),f=Object(n.a)(N,2),w=f[0];return f[1],!1===g?Object(d.jsx)("div",{className:"signIn",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",children:"name"}),Object(d.jsx)("input",{type:"text",required:!0,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(e){return r(Object(i.a)(Object(i.a)({},l),{},{name:e.target.value}))},value:l.name})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",children:"Email"}),Object(d.jsx)("input",{type:"email",className:"form-control",onChange:function(e){return r(Object(i.a)(Object(i.a)({},l),{},{email:e.target.value}))},value:l.email,id:"exampleInputEmail7","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return r(Object(i.a)(Object(i.a)({},l),{},{password:e.target.value}))},value:l.password,id:"exampleInwputPassword1"})]}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(w),l.email!=u.email&&(x({type:m,user:l}),console.log(u),v(!0))},className:"btn btn-primary",children:"Submit"}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:t,children:"Cancel"})]})}):Object(d.jsx)("div",{className:"signIn pt-3",children:Object(d.jsxs)("form",{className:"text-center pt-5",children:[Object(d.jsx)("div",{className:"text-center mb-3 pt-3",children:Object(d.jsxs)("span",{className:"bg-success py-3 px-3 rounded-pill text-white ",children:[" ",Object(d.jsx)("i",{class:"fa fa-check","aria-hidden":"true"})]})}),Object(d.jsx)("h2",{children:"your account created"}),Object(d.jsx)("botton",{className:"btn btn-primary ",onClick:t,children:"Login Now"})]})})};var h=function(e){var t=e.login,a=e.error,s=Object(c.useState)(!1),l=Object(n.a)(s,2),r=l[0],o=l[1],j=Object(c.useState)({email:"",password:""}),b=Object(n.a)(j,2),m=b[0],u=b[1];return Object(d.jsx)("div",{className:"login-container",children:Object(d.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),t(m),console.log(m)},children:[""!=a?Object(d.jsx)("p",{class:"text-danger text-center",children:a}):"",Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",children:"Email"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(e){return u(Object(i.a)(Object(i.a)({},m),{},{email:e.target.value}))},value:m.email})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",onChange:function(e){return u(Object(i.a)(Object(i.a)({},m),{},{password:e.target.value}))},value:m.password})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Submit"}),Object(d.jsxs)("div",{className:"border-top pt-2 ",children:[!r&&Object(d.jsx)("button",{className:"btn btn-primary p-1 m-2",onClick:function(){return o(!0)},children:"Create account"}),r&&Object(d.jsx)(x,{closeModal:function(){return o(!1)}})]})]})})};a(27),a(17);var O=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"header-img",children:[Object(d.jsx)("img",{src:"./images/3.jpg"}),Object(d.jsxs)("div",{className:"header-text",children:[Object(d.jsx)("h3",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloribus."}),Object(d.jsx)("p",{className:"text-light",children:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloribus"}),Object(d.jsx)("button",{className:"btn btn-warning text-white",children:"Read More"})]}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"products",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"./images/3.jpg",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Card title"}),Object(d.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]})})]})})},p=a(11),g=a(2);var v=function(){var e=b(),t=Object(n.a)(e,2),a=t[0].user,s=(t[1],Object(c.useState)(!1)),l=Object(n.a)(s,2),r=l[0],i=l[1],o=Object(c.useState)({email:"",password:"",name:""}),j=Object(n.a)(o,2),m=j[0],u=j[1],x=Object(c.useState)(""),v=Object(n.a)(x,2),N=v[0],f=v[1];return Object(d.jsx)("div",{children:""!==m.email?Object(d.jsxs)(p.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"toggle-nave",style:{width:r?"300px":"0px"},children:[Object(d.jsx)("h2",{className:"text-center text-light pt-1 ",children:"Settings"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{children:"profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{children:"Privacy"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"logout-btn",onClick:function(){window.location.reload(),window.location.replace("http://localhost:3000/"),u({email:"",password:""})},children:"logout"})})]})]}),Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top mb-5",style:{backgroundColor:"#f7ca02",marginLeft:r?"300px":"0px"},children:[Object(d.jsxs)("button",{className:"navbar-brand brand-titl ",onClick:function(){return i(!r)},style:{fontSize:"1.7rem"},to:"/",children:[Object(d.jsx)("span",{style:{fontSize:"1.9rem"},children:"Fast"}),"-Food"]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(d.jsxs)("ul",{className:"navbar-nav m-auto font-rubik wow bounceInUp","data-wow-duration":"1s","data-wow-delay":"0.2s",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(p.b,{className:"nav-link text-center ",to:"/",children:"  Home  "})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(p.b,{className:"nav-link text-center",to:"/",children:"Foods  "})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(p.b,{className:"nav-link text-center",to:"/",children:"    About Us  "})})]}),Object(d.jsx)("div",{}),Object(d.jsx)("p",{className:"pt-3",children:a.name})]})]})]}),Object(d.jsx)(g.c,{children:Object(d.jsx)(g.a,{path:"/",component:O,exact:!0})})]}):Object(d.jsx)(h,{login:function(e){console.log(e),e.email==a.email&&e.password==a.password?(console.log("Loggin"),u({name:a.name,email:e.email,password:e.password}),console.log(a)):(console.log("Details do not match"),f("Details do not match"))},error:N})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{initialState:{user:[]},reducer:u,children:Object(d.jsx)(v,{})})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.951a9414.chunk.js.map