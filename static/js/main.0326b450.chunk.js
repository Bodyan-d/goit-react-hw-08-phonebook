(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),o=n.n(c),s=n(27),i=n(76),u=n(13),l=n(57),b=n(16),d=n(77),j=n.n(d),p=n(32),f=n(78),h=n.n(f),m=n(24),O=n(10),x=n.n(O),g=n(18),v=n(25),y=n.n(v),k=localStorage.getItem("persist:root");y.a.defaults.baseURL="https://connections-api.herokuapp.com";var w,C=function(e){y.a.defaults.headers.post.Authorization="Bearer ".concat(e)},N=function(){y.a.defaults.headers.post.Authorization=""},S=Object(b.c)("auth/register",function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,y.a.post("/users/signup",t);case 4:return n=e.sent,r=n.data,C(r.token),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),_=Object(b.c)("auth/login",function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,y.a.post("/users/login",t);case 4:return n=e.sent,r=n.data,C(r.token),e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),L={register:S,logout:Object(b.c)("auth/logout",function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/users/logout");case 3:N(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),login:_,currentUser:Object(b.c)("auth/current",function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/users\u200b/current",{headers:{Authorization:"Bearer ".concat(null===k||void 0===k?void 0:k.token)}});case 3:n=e.sent,r=n.data,C(r.token),console.log(r),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},I={user:{name:null,email:null},token:null,isLoggedIn:!1},z=Object(b.e)({name:"auth",initialState:I,extraReducers:(w={},Object(m.a)(w,L.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(m.a)(w,L.logout.fulfilled,(function(e,t){e.user=I.user,e.token=I.token,e.isLoggedIn=I.isLoggedIn})),Object(m.a)(w,L.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(m.a)(w,L.currentUser.fulfilled,(function(e,t){console.log("fff"),e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),w)}).reducer,A=n(20),q=Object(b.b)("phonebook/filterContacts");function F(){return(F=Object(g.a)(x.a.mark((function e(t){var n,r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.next=3,y.a.post("/contacts",{name:n,number:r}).then((function(e){return e})).catch((function(e){return e}));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("/contacts/".concat(t)).then((function(e){return e})).catch((function(e){return e}));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(g.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U,R={postContact:function(e){return F.apply(this,arguments)},fetchContacts:function(){return E.apply(this,arguments)},deleteContact:function(e){return B.apply(this,arguments)}},D=Object(b.c)("contacts/fetchContacts",function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.fetchContacts(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=Object(b.c)("contacts/postContacts",function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.next=3,R.postContact({name:n,number:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(b.c)("contacts/deleteContacts",function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,R.deleteContact(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(b.d)([],(U={},Object(m.a)(U,D.fulfilled,(function(e,t){return t.payload})),Object(m.a)(U,M.fulfilled,(function(e,t){return[].concat(Object(l.a)(e),[t.payload])})),Object(m.a)(U,T.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),U)),K=Object(b.d)("",Object(m.a)({},q,(function(e,t){return t.payload}))),P=Object(A.b)({items:J,filter:K}),Z=[].concat(Object(l.a)(Object(b.f)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),[j.a]),V={key:"root",storage:h.a},$=Object(b.a)({reducer:{auth:Object(p.g)(V,z),contacts:P},devTools:!1,middleware:Z}),G=Object(p.h)($),H=(n(119),n(9)),Q=(n(120),n(44)),W=n(58),X=n(2),Y=["children"];function ee(e){var t=e.children,n=Object(W.a)(e,Y),r=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(X.jsx)(H.b,Object(Q.a)(Object(Q.a)({},n),{},{children:r?t:Object(X.jsx)(H.a,{to:"/login"})}))}var te=["redirectTo","children","restricted"];function ne(e){var t=e.redirectTo,n=void 0===t?"/":t,r=e.children,a=e.restricted,c=void 0!==a&&a,o=Object(W.a)(e,te),s=Object(u.c)((function(e){return e.auth.isLoggedIn}))&&c;return Object(X.jsx)(H.b,Object(Q.a)(Object(Q.a)({},o),{},{children:s?Object(X.jsx)(H.a,{to:n}):r}))}var re=n(132);function ae(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(X.jsx)("div",{children:Object(X.jsx)(s.b,{to:"/contacts",children:Object(X.jsx)(re.a,{variant:e?"contained":"disabled",color:"primary",children:"Contacts"})})})}var ce=n(163);function oe(){return Object(X.jsxs)(ce.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(X.jsx)(s.b,{to:"/register",children:Object(X.jsx)(re.a,{color:"primary",children:"Register"})}),Object(X.jsx)(s.b,{to:"/login",children:Object(X.jsx)(re.a,{color:"primary",children:"Login"})})]})}var se=n(165),ie=n(83),ue=n.n(ie),le=n(63),be=n.n(le);function de(){var e=Object(u.c)((function(e){return e.auth.user})),t=Object(u.b)();return Object(X.jsxs)("div",{className:be.a.cont,children:[Object(X.jsx)(se.a,{alt:"avatar",color:"primary",children:Object(X.jsx)(ue.a,{style:{fontSize:50},color:"primary"})}),Object(X.jsx)("p",{className:be.a.email,children:null===e||void 0===e?void 0:e.name}),Object(X.jsx)(re.a,{onClick:function(){return t(L.logout())},variant:"contained",color:"primary",size:"small",children:"Log out"})]})}var je=n(84),pe=n.n(je);function fe(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(X.jsxs)("div",{className:pe.a.AppBar,children:[Object(X.jsx)(ae,{}),e?Object(X.jsx)(de,{}):Object(X.jsx)(oe,{})]})}var he=n(29);n(127);function me(e){var t=e.name,n=e.number,r=e.handleChange,a=e.handleSubmit;return Object(X.jsxs)("form",{className:"phonebook-form",onSubmit:a,children:[Object(X.jsxs)("label",{className:"phonebook-label",children:["Name",Object(X.jsx)("input",{className:"phonebook-input",onChange:r,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(X.jsxs)("label",{className:"phonebook-label",children:["Number",Object(X.jsx)("input",{className:"phonebook-input",onChange:r,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(X.jsx)("button",{type:"submit",children:Object(X.jsx)(re.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}n(128);function Oe(e){var t=e.filter,n=e.handleChange;return Object(X.jsxs)("div",{children:[Object(X.jsx)("p",{className:"filter-title",children:"Find contacts by name"}),Object(X.jsx)("input",{className:"search",onChange:n,type:"text",name:"filter",value:t})]})}n(129);function xe(e){var t=e.contacts,n=e.deleteItem;return Object(X.jsx)("ul",{children:t.map((function(e){return Object(X.jsxs)("li",{className:"list-item",children:["".concat(e.name,": ").concat(e.number),Object(X.jsx)("button",{id:e.id,onClick:n,className:"delete-btn",children:"delete"})]},e.id)}))})}function ge(){var e=Object(r.useState)(""),t=Object(he.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(he.a)(c,2),s=o[0],i=o[1],l=Object(u.b)(),b=Object(u.c)((function(e){return e.contacts.items})),d=Object(u.c)((function(e){return e.contacts.filter})),j=function(e){"filter"!==e.target.name?"name"!==e.target.name?"number"!==e.target.name||i(e.target.value):a(e.target.value):l(q(e.target.value))},p=function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,l(T(n));case 3:return e.next=5,l(D());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)("div",{children:[Object(X.jsx)("h1",{children:"Phonebook"}),Object(X.jsx)(me,{name:n,number:s,handleChange:j,handleSubmit:function(e){e.preventDefault(),b.some((function(e){return e.name.includes(n)}))?alert("".concat(n," is already in contacts")):(l(M({name:n,number:s})),l(D()),a(""),i(""))}}),Object(X.jsx)("h2",{children:"Contacts"}),Object(X.jsx)(Oe,{filter:d,handleChange:j}),Object(X.jsx)(xe,{contacts:b.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})),deleteItem:p})]})}var ve=n(164),ye=n(85),ke=n.n(ye);function we(){var e=Object(r.useState)(""),t=Object(he.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(he.a)(c,2),s=o[0],i=o[1],l=(Object(u.c)((function(e){return e.isLoggedIn})),Object(u.b)()),b=function(e){console.log(e.target.type),"email"!==e.target.type?"password"!==e.target.type||i(e.target.value):a(e.target.value)};return Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(L.login({email:n,password:s})),a(""),i("")},noValidate:!0,autoComplete:"off",style:{width:300,display:"flex",flexDirection:"column"},children:[Object(X.jsx)(ve.a,{onChange:b,required:!0,id:"standard-required",label:"Email",type:"email",helperText:"Enter your email"}),Object(X.jsx)(ve.a,{onChange:b,required:!0,id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),Object(X.jsx)("button",{className:ke.a.submitForm,type:"submit",children:Object(X.jsx)(re.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}var Ce=n(64),Ne=n.n(Ce);function Se(){var e=Object(r.useState)(""),t=Object(he.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(he.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)(""),b=Object(he.a)(l,2),d=b[0],j=b[1],p=Object(u.b)(),f=function(e){"text"!==e.target.type?"email"!==e.target.type?"password"!==e.target.type||j(e.target.value):i(e.target.value):a(e.target.value)};return Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(L.register({name:n,email:s,password:d})),a(""),i(""),j("")},noValidate:!0,autoComplete:"off",className:Ne.a.registerForm,children:[Object(X.jsx)(ve.a,{onChange:f,required:!0,id:"standard-required",label:"Name",type:"name"}),Object(X.jsx)(ve.a,{onChange:f,required:!0,id:"standard-required",label:"Email",type:"email"}),Object(X.jsx)(ve.a,{onChange:f,required:!0,id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),Object(X.jsx)("button",{className:Ne.a.submitForm,type:"submit",children:Object(X.jsx)(re.a,{variant:"contained",color:"primary",size:"small",children:"Submit"})})]})}var _e=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){e(L.currentUser()),e(D())}),[]),Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)(fe,{}),Object(X.jsxs)(H.d,{children:[Object(X.jsx)(ee,{path:"/contacts",children:Object(X.jsx)(ge,{})}),Object(X.jsx)(ne,{path:"/login",restricted:!0,children:Object(X.jsx)(we,{})}),Object(X.jsx)(ne,{path:"/register",restricted:!0,children:Object(X.jsx)(Se,{})}),Object(X.jsx)(H.b,{path:"/",children:t?Object(X.jsx)(H.a,{to:"/contacts"}):Object(X.jsx)(H.a,{to:"/login"})})]})]})};o.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(u.a,{store:$,children:Object(X.jsx)(i.a,{loader:null,persistor:G,children:Object(X.jsx)(s.a,{children:Object(X.jsx)(_e,{})})})})}),document.getElementById("root"))},63:function(e,t,n){e.exports={cont:"UserMenu_cont__2okK6",email:"UserMenu_email__A_d-h"}},64:function(e,t,n){e.exports={registerForm:"Register_registerForm__2rzyO",submitForm:"Register_submitForm__2-8zK"}},84:function(e,t,n){e.exports={AppBar:"AppBar_AppBar__KkA67"}},85:function(e,t,n){e.exports={submitForm:"Login_submitForm__2fmvy"}}},[[130,1,2]]]);
//# sourceMappingURL=main.0326b450.chunk.js.map