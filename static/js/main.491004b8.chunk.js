(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{132:function(e,t,n){e.exports={mySort:"MySort_mySort__Vqm3W",sort__btn:"MySort_sort__btn__3wecl"}},28:function(e,t,n){e.exports={login_form:"AuthPageStyleSheets_login_form__2dJxW",title:"AuthPageStyleSheets_title__6h226",main_form:"AuthPageStyleSheets_main_form__cD3hM",form:"AuthPageStyleSheets_form__2JqqJ",form_title__email:"AuthPageStyleSheets_form_title__email__37ri4",form_title__password:"AuthPageStyleSheets_form_title__password__3fG4O",login_btn:"AuthPageStyleSheets_login_btn__bbn_9"}},347:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(24),c=n.n(a),s=n(21),o=n(52),i=n(358),l=n(178),u=n(36),d=n.n(u),j=n(60),b=n(129),h=n.n(b),f=h.a.create({baseURL:"https://todo-rastorguev.herokuapp.com"}),p=h.a.create({baseURL:"https://todo-rastorguev.herokuapp.com"});p.interceptors.request.use((function(e){return e.headers.authorization="Bearer ".concat(localStorage.getItem("token")),e}));var m=n(177),g=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]&&s[2],e.prev=1,e.next=4,f.post("/user/registration",{email:t,password:n});case 4:if(a=e.sent,(c=a.data).token){e.next=8;break}return e.abrupt("return");case 8:localStorage.setItem("token",c.token),r&&r(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t&&m.b.error("Email already exists");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]&&s[2],e.prev=1,e.next=4,f.post("/user/login",{email:t,password:n});case 4:if(a=e.sent,(c=a.data).token){e.next=8;break}return e.abrupt("return");case 8:localStorage.setItem("token",c.token),r&&r(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),m.b.error("Incorrect login or password");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}(),x=n(28),v=n.n(x),y=n(23),_=n(5);function S(e){var t,n=e.isAuth,a=e.setIsAuth,c=function(e,t){var n=Object(r.useState)(e),a=Object(s.a)(n,2),c=a[0],i=a[1],l=Object(r.useState)(!1),u=Object(s.a)(l,2),d=u[0],j=u[1],b=function(e,t){var n=Object(r.useState)(!0),a=Object(s.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],j=Object(r.useState)(!1),b=Object(s.a)(j,2),h=b[0],f=b[1],p=Object(r.useState)(!1),m=Object(s.a)(p,2),g=m[0],O=m[1];return Object(r.useEffect)((function(){for(var n in t)switch(n){case"minLength":e.length<t[n]?d(!0):d(!1);break;case"isEmpty":o(!e);break;case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?f(!1):f(!0)}}),[t,e]),Object(r.useEffect)((function(){O(!(c||u||h))}),[c,u,h]),{isEmpty:c,minLengthError:u,emailError:h,inputValid:g}}(c,t);return Object(o.a)({value:c,isDirty:d,onChange:function(e){i(e.target.value)},onBlur:function(e){j(!0)}},b)},u=c("",{isEmpty:!0,isEmail:!0}),d=c("",{isEmpty:!0,minLength:6});return n?Object(_.jsx)(y.a,{to:"/"}):(u.isDirty&&u.isEmpty?t=Object(_.jsx)("div",{style:{position:"absolute",marginLeft:"19rem",color:"#9d2323cd",fontWeight:400,fontSize:16},children:"Required field"}):u.isDirty&&u.emailError&&(t=Object(_.jsx)("div",{style:{position:"absolute",marginLeft:"19rem",color:"#9d2323cd",fontWeight:400,fontSize:16},children:"Invalid Email"})),Object(_.jsxs)("div",{className:v.a.login_form,children:[Object(_.jsx)("p",{className:v.a.title,children:"Create account"}),Object(_.jsxs)("div",{className:v.a.main_form,children:[t,Object(_.jsxs)("form",{children:[Object(_.jsxs)("div",{className:v.a.form,children:[Object(_.jsx)("p",{className:v.a.form_title__email,children:"email:"}),Object(_.jsx)(i.a,{onChange:function(e){return u.onChange(e)},onBlur:function(e){return u.onBlur(e)},value:u.value,style:{marginBottom:15,marginTop:20,marginLeft:32,position:"relative"},type:"email",name:"email",placeholder:"ex: index@mail.com"})]}),d.isDirty&&d.minLengthError&&Object(_.jsx)("div",{style:{position:"absolute",margin:"-10px 0 0 16rem",color:"#9d2323cd",fontWeight:400,fontSize:16},children:"Password must be at least 6 characters"}),Object(_.jsxs)("div",{className:v.a.form,children:[Object(_.jsx)("p",{className:v.a.form_title__password,children:"password:"}),Object(_.jsx)(i.a,{onChange:function(e){return d.onChange(e)},onBlur:function(e){return d.onBlur(e)},value:d.value,type:"password",placeholder:"ex: steveJobs123"})]})]}),Object(_.jsx)(l.a,{disabled:!u.inputValid||!d.inputValid,onClick:function(){g(u.value,d.value,a)},className:v.a.login_btn,type:"primary",children:"Register!"})]})]}))}function k(e){var t=e.setIsAuth,n=e.isAuth,a=Object(r.useState)(),c=Object(s.a)(a,2),o=c[0],u=c[1],d=Object(r.useState)(),j=Object(s.a)(d,2),b=j[0],h=j[1];return n?Object(_.jsx)(y.a,{to:"/"}):Object(_.jsxs)("div",{className:v.a.login_form,children:[Object(_.jsx)("p",{className:v.a.title,children:"Welcome back!"}),Object(_.jsxs)("div",{className:v.a.main_form,children:[Object(_.jsxs)("form",{children:[Object(_.jsxs)("div",{className:v.a.form,children:[Object(_.jsx)("p",{className:v.a.form_title__email,children:"email:"}),Object(_.jsx)(i.a,{onChange:function(e){return u(e.target.value)},value:o,style:{marginBottom:15,marginLeft:32},type:"email",placeholder:"ex: index@mail.com"})]}),Object(_.jsxs)("div",{className:v.a.form,children:[Object(_.jsx)("p",{className:v.a.form_title__password,children:"password:"}),Object(_.jsx)(i.a,{onChange:function(e){return h(e.target.value)},value:b,type:"password",placeholder:"ex: steveJobs123"})]})]}),Object(_.jsx)(l.a,{onClick:function(){O(o,b,t)},className:v.a.login_btn,type:"ghost",children:"Login!"})]})]})}var w=n(50);function A(e){var t=e.isAuth,n=e.setIsAuth;return Object(_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:30},children:[Object(_.jsx)("div",{children:Object(_.jsx)("p",{style:{fontSize:60,fontWeight:100,color:"white",display:"inline"},children:"Todo"})}),Object(_.jsx)("div",{children:t?Object(_.jsx)(w.b,{to:"/",children:Object(_.jsx)(l.a,{onClick:function(){!function(e){localStorage.removeItem("token"),e(!1)}(n)},value:"small",type:"primary",children:"Logout"})}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(w.b,{to:"/login",children:Object(_.jsx)(l.a,{style:{marginRight:10},value:"small",type:"ghost",children:"Sign In"})}),Object(_.jsx)(w.b,{to:"/registration",children:Object(_.jsx)(l.a,{value:"small",type:"primary",children:"Sign Up"})})]})})]})}var T=n(356),C=n(354),D=n(355),I=n(357),N=n(110),E=n(126),z=n.n(E),L=n(359),B=function(e){var t=e.todo,n=e.removeTodo,a=e.patchTodo,c=e.dragAndDrop,o=Object(r.useState)(!1),u=Object(s.a)(o,2),d=u[0],j=u[1],b=Object(r.useState)(!0),h=Object(s.a)(b,2),f=h[0],p=h[1];return Object(_.jsx)(T.b.Item,{style:{borderBottom:"1px solid #f0f0f042"},children:Object(_.jsxs)(C.a,{draggable:!0,onDragOver:c.dragOverHandler,onDragLeave:c.dragLeaveHandler,onDragStart:c.dragStartHandler,onDrop:c.dropHandler,justify:"space-between",style:{width:"100%",alignItems:"center",color:"#fff",cursor:"grab"},children:[Object(_.jsx)(D.a,{style:{cursor:"pointer"},children:Object(_.jsxs)(C.a,{onClick:function(e){e.stopPropagation(),j(!0)},align:"middle",children:[Object(_.jsx)(z.a,{checked:!!t.done,onClick:function(e){e.stopPropagation(),a(t.id,{done:!t.done})},style:{marginRight:10}}),Object(_.jsx)(I.a,{style:{color:"#fff",fontSize:15},children:d?Object(_.jsx)(i.a,{style:{width:"50vh"},size:"small",autoFocus:!0,onBlur:function(){return j(!1)},onKeyDown:function(e){"Enter"===e.code&&(a(t.id,{title:e.target.value}),j(!1))},defaultValue:t.title}):t.title})]})}),Object(_.jsxs)(D.a,{children:[t.createdAt.slice(11,19),Object(_.jsx)(N.a,{placement:"right",title:"Delete",children:Object(_.jsx)(l.a,{disabled:!f,onClick:function(e){e.stopPropagation(),p(!1),n(t.id)},style:{marginLeft:65,marginRight:18},shape:"circle",size:"small",icon:Object(_.jsx)(L.a,{})})})]})]})})};var P=function(e){var t=e.todos,n=e.setTodos,a=e.removeTodo,c=e.selectToDo,o=e.patchTodo,i=e.setPage;t.length||i((function(e){return 1===e?e:e-1}));var l=Object(r.useState)({}),u=Object(s.a)(l,2),d=u[0],j=u[1],b=function(e){return{dragOverHandler:function(e){e.preventDefault(),e.target.style.background="lightgrey"},dragLeaveHandler:function(e){e.target.style.background="inherit"},dragStartHandler:function(t){j(e)},dropHandler:function(t){t.preventDefault(),t.target.style.background="inherit";var n=d.id,r=e.id;r!==n&&o(d.id,{selectedTodoId:n,targetTodoId:r})}}};return Object(_.jsx)(T.b,{style:{marginTop:35},size:"large",dataSource:t,renderItem:function(e){return Object(_.jsx)(B,{dragAndDrop:b(e),setTodos:n,patchTodo:o,todos:t,todo:e,selectToDo:c,removeTodo:a},e.id)}})},R=n(132),H=n.n(R),W=function(e){var t=e.setFilter,n=function(e){return function(){t((function(t){return Object(o.a)(Object(o.a)({},t),{},{filterType:e})}))}},r=function(e){return function(){t((function(t){return Object(o.a)(Object(o.a)({},t),{},{sortDirection:e})}))}};return Object(_.jsxs)("div",{className:H.a.mySort,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(l.a,{size:"small",style:{marginRight:10,color:"#fff"},type:"ghost",shape:"round",onClick:n(""),children:"All"}),Object(_.jsx)(l.a,{size:"small",style:{marginRight:10,color:"#fff"},type:"ghost",shape:"round",onClick:n("done"),children:"Done"}),Object(_.jsx)(l.a,{size:"small",style:{color:"#fff"},type:"ghost",shape:"round",onClick:n("undone"),children:"In process"})]}),Object(_.jsxs)("div",{className:H.a.sort__btn,children:[Object(_.jsx)("p",{style:{marginRight:23,marginBottom:0,color:"#fff"},children:"Sort by date"}),Object(_.jsx)(l.a,{size:"small",style:{marginRight:10,color:"#fff"},type:"ghost",shape:"round",onClick:r("asc"),children:Object(_.jsx)("i",{className:"fas fa-chevron-up"})}),Object(_.jsx)(l.a,{size:"small",style:{color:"#fff"},type:"ghost",shape:"round",onClick:r("desc"),children:Object(_.jsx)("i",{className:"fas fa-chevron-down"})})]})]})},J=function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(i.a,Object(o.a)(Object(o.a)({style:{borderRadius:10,height:35}},e),{},{placeholder:"Buy milk..."}))})},F=function(e){var t=e.createTodo,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],o=a[1];return Object(_.jsx)("div",{children:Object(_.jsx)("form",{style:{alignItems:"center",paddingTop:5,paddingBottom:10},children:Object(_.jsx)(J,{onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),""===c.trim()?m.b.error("Write something"):(t(c),o("")))},onChange:function(e){return o(e.target.value)},value:c,type:"text"})})})};function q(e){var t=e.isAuth,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(1),l=Object(s.a)(i,2),u=l[0],b=l[1],h=Object(r.useState)({sortDirection:"asc",filterType:"all"}),f=Object(s.a)(h,2),g=f[0],O=f[1],x=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={order:g.sortDirection},"done"!==g.filterType&&"undone"!==g.filterType||(t.filterBy=g.filterType),e.next=5,p.get("/todos",{params:t});case 5:n=e.sent,o(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o([]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.post("/todo",{title:t,done:!1});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),m.b.error("You need to sign in");case 8:x();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/todo/".concat(t));case 2:x();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/todos/".concat(t),n);case 2:x();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x(),u>=2&&b(1)}),[g,t]),Object(_.jsxs)("div",{children:[Object(_.jsx)(F,{createTodo:v}),Object(_.jsx)(T.b,{pagination:{size:"small",pageSize:5,current:u,onChange:function(e){b(e)},total:c.length,hideOnSinglePage:!0},children:Object(_.jsxs)(D.a,{xs:24,md:{span:24,offset:0},children:[Object(_.jsx)(W,{fetchTodos:x,setFilter:O}),Object(_.jsx)(P,{setTodos:o,setPage:b,patchTodo:S,removeTodo:y,todos:c.slice(5*(u-1),5*u)})]})})]})}n(347);var V=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){a(!!localStorage.getItem("token"))}),[]),Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(w.a,{children:[Object(_.jsx)(A,{isAuth:n,setIsAuth:a}),Object(_.jsx)(y.a,{to:"/login"}),Object(_.jsx)(y.d,{children:n?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(y.b,{path:"/",children:Object(_.jsx)(q,{isAuth:n})})}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(y.b,{path:"/login",children:Object(_.jsx)(k,{isAuth:n,setIsAuth:a})}),Object(_.jsx)(y.b,{path:"/registration",children:Object(_.jsx)(S,{isAuth:n,setIsAuth:a})}),Object(_.jsx)(y.a,{to:"/login"})]})})]})})};n(348);c.a.render(Object(_.jsx)(w.a,{children:Object(_.jsx)(V,{})}),document.getElementById("root"))}},[[349,1,2]]]);
//# sourceMappingURL=main.491004b8.chunk.js.map