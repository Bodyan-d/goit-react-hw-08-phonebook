(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),o=n.n(c),s=n(27),i=n(76),u=n(13),l=n(57),d=n(16),b=n(77),p=n.n(b),j=n(32),f=n(78),h=n.n(f),m=n(25),O=n(9),g=n.n(O),v=n(18),x=n(23),y=n.n(x),k=localStorage.getItem("persist:root");console.log(JSON.parse(k).token),y.a.defaults.baseURL="https://connections-api.herokuapp.com";var w,C=function(e){y.a.defaults.headers.common.Authorization="Bearer ".concat(e)},S=function(){y.a.defaults.headers.common.Authorization=""},N=Object(d.c)("auth/register",function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,y.a.post("/users/signup",t);case 4:return n=e.sent,r=n.data,C(r.token),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),L=Object(d.c)("auth/login",function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,y.a.post("/users/login",t);case 4:return n=e.sent,r=n.data,C(null===r||void 0===r?void 0:r.token),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),_={register:N,logout:Object(d.c)("auth/logout",function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/users/logout");case 3:S(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),login:L,currentUser:Object(d.c)("auth/current",function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/users/current",{headers:{Authorization:"Bearer ".concat(null===(n=JSON.parse(k))||void 0===n?void 0:n.token.replace(/['"]/g,""))}});case 3:return r=e.sent,a=r.data,C(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},z={user:{name:null,email:null},token:null,isLoggedIn:!1},A=Object(d.e)({name:"auth",initialState:z,extraReducers:(w={},Object(m.a)(w,_.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(m.a)(w,_.logout.fulfilled,(function(e,t){e.user=z.user,e.token=z.token,e.isLoggedIn=z.isLoggedIn})),Object(m.a)(w,_.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(m.a)(w,_.currentUser.fulfilled,(function(e,t){console.log(t),e.user.name=t.payload.name,e.user.email=t.payload.email,e.isLoggedIn=!0})),w)}).reducer,I=n(20),B=Object(d.b)("phonebook/filterContacts");y.a.defaults.baseURL="https://connections-api.herokuapp.com";var q=localStorage.getItem("persist:root");function F(){return(F=Object(v.a)(g.a.mark((function e(t){var n,r,a,c,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,a=t.number,e.next=3,y.a.post("/contacts",{name:r,number:a},{headers:{Authorization:"Bearer ".concat(null===(n=JSON.parse(q))||void 0===n?void 0:n.token.replace(/['"]/g,""))}}).then((function(e){return e})).catch((function(e){return e}));case 3:return c=e.sent,o=c.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(v.a)(g.a.mark((function e(t){var n,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("/contacts/".concat(t),{headers:{Authorization:"Bearer ".concat(null===(n=JSON.parse(q))||void 0===n?void 0:n.token.replace(/['"]/g,""))}}).then((function(e){return e})).catch((function(e){return e}));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(v.a)(g.a.mark((function e(){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/contacts",{headers:{Authorization:"Bearer ".concat(null===(t=JSON.parse(q))||void 0===t?void 0:t.token.replace(/['"]/g,""))}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(JSON.parse(q).token);var U,R={postContact:function(e){return F.apply(this,arguments)},fetchContacts:function(){return E.apply(this,arguments)},deleteContact:function(e){return J.apply(this,arguments)}},D=Object(d.c)("contacts/fetchContacts",function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.fetchContacts(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=Object(d.c)("contacts/postContacts",function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.next=3,R.postContact({name:n,number:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(d.c)("contacts/deleteContacts",function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,R.deleteContact(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(d.d)([],(U={},Object(m.a)(U,D.fulfilled,(function(e,t){return t.payload})),Object(m.a)(U,M.fulfilled,(function(e,t){return[].concat(Object(l.a)(e),[t.payload])})),Object(m.a)(U,T.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),U)),P=Object(d.d)("",Object(m.a)({},B,(function(e,t){return t.payload}))),Z=Object(I.b)({items:K,filter:P}),V=[].concat(Object(l.a)(Object(d.f)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[p.a]),$={key:"root",storage:h.a},G=Object(d.a)({reducer:{auth:Object(j.g)($,A),contacts:Z},devTools:!1,middleware:V}),H=Object(j.h)(G),Q=(n(119),n(10)),W=(n(120),n(44)),X=n(58),Y=n(2),ee=["children"];function te(e){var t=e.children,n=Object(X.a)(e,ee),r=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(Y.jsx)(Q.b,Object(W.a)(Object(W.a)({},n),{},{children:r?t:Object(Y.jsx)(Q.a,{to:"/login"})}))}var ne=["redirectTo","children","restricted"];function re(e){var t=e.redirectTo,n=void 0===t?"/":t,r=e.children,a=e.restricted,c=void 0!==a&&a,o=Object(X.a)(e,ne),s=Object(u.c)((function(e){return e.auth.isLoggedIn}))&&c;return Object(Y.jsx)(Q.b,Object(W.a)(Object(W.a)({},o),{},{children:s?Object(Y.jsx)(Q.a,{to:n}):r}))}var ae=n(132);function ce(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(Y.jsx)("div",{children:Object(Y.jsx)(s.b,{to:"/contacts",children:Object(Y.jsx)(ae.a,{variant:e?"contained":"disabled",color:"primary",children:"Contacts"})})})}var oe=n(163);function se(){return Object(Y.jsxs)(oe.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(Y.jsx)(s.b,{to:"/register",children:Object(Y.jsx)(ae.a,{color:"primary",children:"Register"})}),Object(Y.jsx)(s.b,{to:"/login",children:Object(Y.jsx)(ae.a,{color:"primary",children:"Login"})})]})}var ie=n(165),ue=n(83),le=n.n(ue),de=n(63),be=n.n(de);function pe(){var e=Object(u.c)((function(e){return e.auth.user})),t=Object(u.b)();return Object(r.useEffect)((function(){t(_.currentUser())}),[t]),Object(Y.jsxs)("div",{className:be.a.cont,children:[Object(Y.jsx)(ie.a,{alt:"avatar",color:"primary",children:Object(Y.jsx)(le.a,{style:{fontSize:50},color:"primary"})}),Object(Y.jsx)("p",{className:be.a.email,children:null===e||void 0===e?void 0:e.name}),Object(Y.jsx)(ae.a,{onClick:function(){return t(_.logout())},variant:"contained",color:"primary",size:"small",children:"Log out"})]})}var je=n(84),fe=n.n(je);function he(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(Y.jsxs)("div",{className:fe.a.AppBar,children:[Object(Y.jsx)(ce,{}),e?Object(Y.jsx)(pe,{}):Object(Y.jsx)(se,{})]})}var me=n(29);n(127);function Oe(e){var t=e.name,n=e.number,r=e.handleChange,a=e.handleSubmit;return Object(Y.jsxs)("form",{className:"phonebook-form",onSubmit:a,children:[Object(Y.jsxs)("label",{className:"phonebook-label",children:["Name",Object(Y.jsx)("input",{className:"phonebook-input",onChange:r,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(Y.jsxs)("label",{className:"phonebook-label",children:["Number",Object(Y.jsx)("input",{className:"phonebook-input",onChange:r,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(Y.jsx)("button",{type:"submit",children:Object(Y.jsx)(ae.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}n(128);function ge(e){var t=e.filter,n=e.handleChange;return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("p",{className:"filter-title",children:"Find contacts by name"}),Object(Y.jsx)("input",{className:"search",onChange:n,type:"text",name:"filter",value:t})]})}n(129);function ve(e){var t=e.contacts,n=e.deleteItem;return Object(Y.jsx)("ul",{children:t.map((function(e){return Object(Y.jsxs)("li",{className:"list-item",children:["".concat(e.name,": ").concat(e.number),Object(Y.jsx)("button",{id:e.id,onClick:n,className:"delete-btn",children:"delete"})]},e.id)}))})}function xe(){var e=Object(r.useState)(""),t=Object(me.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(me.a)(c,2),s=o[0],i=o[1],l=Object(u.b)(),d=Object(u.c)((function(e){return e.contacts.items})),b=Object(u.c)((function(e){return e.contacts.filter})),p=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!d.some((function(e){return null===e||void 0===e?void 0:e.name.includes(n)}))){e.next=4;break}return alert("".concat(n," is already in contacts")),e.abrupt("return");case 4:return e.next=6,l(M({name:n,number:s}));case 6:l(D()),a(""),i("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){"filter"!==e.target.name?"name"!==e.target.name?"number"!==e.target.name||i(e.target.value):a(e.target.value):l(B(e.target.value))},f=function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,l(T(n));case 3:return e.next=5,l(D());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h1",{children:"Phonebook"}),Object(Y.jsx)(Oe,{name:n,number:s,handleChange:j,handleSubmit:p}),Object(Y.jsx)("h2",{children:"Contacts"}),Object(Y.jsx)(ge,{filter:b,handleChange:j}),Object(Y.jsx)(ve,{contacts:d.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(b.toLowerCase())})),deleteItem:f})]})}var ye=n(164),ke=n(85),we=n.n(ke);function Ce(){var e=Object(r.useState)(""),t=Object(me.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(me.a)(c,2),s=o[0],i=o[1],l=(Object(u.c)((function(e){return e.isLoggedIn})),Object(u.b)()),d=function(e){console.log(e.target.type),"email"!==e.target.type?"password"!==e.target.type||i(e.target.value):a(e.target.value)};return Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(_.login({email:n,password:s})),a(""),i("")},noValidate:!0,autoComplete:"off",style:{width:300,display:"flex",flexDirection:"column"},children:[Object(Y.jsx)(ye.a,{onChange:d,required:!0,id:"standard-required",label:"Email",type:"email",helperText:"Enter your email"}),Object(Y.jsx)(ye.a,{onChange:d,required:!0,id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),Object(Y.jsx)("button",{className:we.a.submitForm,type:"submit",children:Object(Y.jsx)(ae.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}var Se=n(64),Ne=n.n(Se);function Le(){var e=Object(r.useState)(""),t=Object(me.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(me.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)(""),d=Object(me.a)(l,2),b=d[0],p=d[1],j=Object(u.b)(),f=function(e){"text"!==e.target.type?"email"!==e.target.type?"password"!==e.target.type||p(e.target.value):i(e.target.value):a(e.target.value)};return Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(_.register({name:n,email:s,password:b})),a(""),i(""),p("")},noValidate:!0,autoComplete:"off",className:Ne.a.registerForm,children:[Object(Y.jsx)(ye.a,{onChange:f,required:!0,id:"standard-required",label:"Name",type:"name"}),Object(Y.jsx)(ye.a,{onChange:f,required:!0,id:"standard-required",label:"Email",type:"email"}),Object(Y.jsx)(ye.a,{onChange:f,required:!0,id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),Object(Y.jsx)("button",{className:Ne.a.submitForm,type:"submit",children:Object(Y.jsx)(ae.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}var _e=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){e(D())}),[]),Object(Y.jsxs)("div",{className:"container",children:[Object(Y.jsx)(he,{}),Object(Y.jsxs)(Q.d,{children:[Object(Y.jsx)(te,{path:"/contacts",children:Object(Y.jsx)(xe,{})}),Object(Y.jsx)(re,{path:"/login",restricted:!0,children:Object(Y.jsx)(Ce,{})}),Object(Y.jsx)(re,{path:"/register",restricted:!0,children:Object(Y.jsx)(Le,{})}),Object(Y.jsx)(Q.b,{path:"/",children:t?Object(Y.jsx)(Q.a,{to:"/contacts"}):Object(Y.jsx)(Q.a,{to:"/login"})})]})]})};o.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(u.a,{store:G,children:Object(Y.jsx)(i.a,{loader:null,persistor:H,children:Object(Y.jsx)(s.a,{children:Object(Y.jsx)(_e,{})})})})}),document.getElementById("root"))},63:function(e,t,n){e.exports={cont:"UserMenu_cont__2okK6",email:"UserMenu_email__A_d-h"}},64:function(e,t,n){e.exports={registerForm:"Register_registerForm__2rzyO",submitForm:"Register_submitForm__2-8zK"}},84:function(e,t,n){e.exports={AppBar:"AppBar_AppBar__KkA67"}},85:function(e,t,n){e.exports={submitForm:"Login_submitForm__2fmvy"}}},[[130,1,2]]]);
//# sourceMappingURL=main.c7de00b5.chunk.js.map