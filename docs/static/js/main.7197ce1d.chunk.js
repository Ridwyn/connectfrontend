(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{15:function(e,t,a){"use strict";a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(2),r=a.n(n),c=a(3),s=a(4),o=a(5),i=a.n(o),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/space/saveForm"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/space/custom_statuses"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/space/joinSpace"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/space/leaveSpace"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/space/getList"),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/space/getItem/").concat(t._id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/space/deleteItem"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},16:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return p}));var n=a(2),r=a.n(n),c=a(3),s=a(4),o=a(5),i=a.n(o),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/project/saveForm"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/project/getList/").concat(t.space_id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/project/deleteItem/").concat(t._id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},26:function(e,t,a){"use strict";a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(2),r=a.n(n),c=a(27),s=a(3),o=a(6),i=a(1),u=a(15),l=a(0),p={DELETE:"DELETE",LEAVE:"LEAVE",JOIN:"JOIN",EDIT:"EDIT",CREATE:"CREATE",GET:"GET",GETITEM:"GETITEM"},d=Object(i.createContext)(),j=function(e){var t=Object(i.useState)([]),a=Object(o.a)(t,2),n=a[0],j=a[1];Object(i.useEffect)((function(){b()}),[]);var b=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)();case 2:t=e.sent,j(Object(c.a)(JSON.parse(t)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(t);case 2:a=e.sent,j([a]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.type,c=void 0===a?"":a,s=t.payload,o=void 0===s?{}:s,i=null,e.t0=c,e.next=e.t0===p.DELETE?5:e.t0===p.EDIT?8:e.t0===p.CREATE?13:e.t0===p.LEAVE?18:e.t0===p.JOIN?21:e.t0===p.GET?24:e.t0===p.GETITEM?25:26;break;case 5:return e.next=7,Object(u.b)({space_id:o._id});case 7:case 20:case 23:case 24:return e.abrupt("return",b());case 8:return e.next=10,Object(u.g)(o);case 10:case 15:return i=e.sent,b(),e.abrupt("return",i);case 13:return e.next=15,Object(u.g)(o);case 18:return e.next=20,Object(u.f)(o);case 21:return e.next=23,Object(u.e)(o);case 25:return e.abrupt("return",h(o));case 26:return e.abrupt("return",n);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=Object(i.useMemo)((function(){return[n,m]}),[n]);return Object(l.jsx)(d.Provider,{value:f,children:e.children})}},28:function(e,t,a){"use strict";a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(2),r=a.n(n),c=a(3),s=a(6),o=a(1),i=a(16),u={name:null,description:null,usersAllowedToEdit:[],usersAllowedToDelete:[],canEdit:!1,canDelete:!1,workspace:null,created_at:Date,created_by:{},active_status_template:null},l=a(0),p={DELETE:"DELETE",LEAVE:"LEAVE",EDIT:"EDIT",CREATE:"CREATE",GET:"GET",GETONE:"GETONE"},d=Object(o.createContext)(),j=function(e){var t=Object(o.useState)([]),a=Object(s.a)(t,2),n=a[0],j=a[1],b=Object(o.useState)(u),h=Object(s.a)(b,2),m=h[0],f=h[1],x=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(t);case 2:return a=e.sent,j(a),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.type,c=void 0===a?"":a,s=t.payload,o=void 0===s?{}:s,u=null,e.t0=c,e.next=e.t0===p.DELETE?5:e.t0===p.EDIT?8:e.t0===p.CREATE?13:e.t0===p.LEAVE?18:e.t0===p.GET?19:20;break;case 5:return e.next=7,Object(i.a)({space_id:o._id});case 7:case 18:case 19:return e.abrupt("return",x(o));case 8:return e.next=10,Object(i.c)(o);case 10:case 15:return u=e.sent,x(o),e.abrupt("return",u);case 13:return e.next=15,Object(i.c)(o);case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(o.useMemo)((function(){return{projects:n,dispatchProject:O,projectStore:m,setProjectStore:f}}),[n]);return Object(l.jsx)(d.Provider,{value:g,children:e.children})}},29:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return j})),a.d(t,"a",(function(){return b}));var n=a(2),r=a.n(n),c=a(3),s=a(4),o=a(5),i=a.n(o),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/task/saveTask"),t,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/task/getList/").concat(t.project_id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/task/getAssignedTasks"),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/task/getItem/").concat(t._id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat(s.a,"/api/task/search?term=").concat(t.search_term),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat(s.a,"/api/task/deleteItem/").concat(t._id),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(4),a(5);var n=function(e){var t=new WebSocket("".concat("https:"===window.location.protocol?"wss":"ws","://localhost:4000/ws/task?token=").concat(localStorage.getItem("token").split('"')[1]));return t.onopen=function(e){console.log(" websocket is open")},t.onclose=function(){console.log("wesocket ios closed"),t=new WebSocket("ws://localhost:4000/ws/task?token=".concat(localStorage.getItem("token").split('"')[1]))},t.onerror=function(){console.log("wesocket error"),t=new WebSocket("ws://localhost:4000/ws/task?token=".concat(localStorage.getItem("token").split('"')[1]))},t}()},4:function(e,t,a){"use strict";t.a="http://d6e4eef.online-server.cloud"},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(39),s=a.n(c),o=a(9),i=a(7),u=a(2),l=a.n(u),p=a(3),d=a(6),j=a(4),b=a(5),h=a.n(b),m=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.type,n=t.payload,r=null,e.t0=a,e.next="LOGIN"===e.t0?5:"ACCOUNT_DATA"===e.t0?9:"SIGNUP"===e.t0?13:"LOGOUT"===e.t0?17:21;break;case 5:return e.next=7,h.a.post("".concat(j.a,"/api/login"),n);case 7:case 11:case 15:case 19:return r=e.sent,e.abrupt("return",r.data);case 9:return e.next=11,h.a.get("".concat(j.a,"/api/user/getProfile"),{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 13:return e.next=15,h.a.post("".concat(j.a,"/api/signup"),n);case 17:return e.next=19,h.a.post("".concat(j.a,"/api/logout"),n,{headers:{authorization:localStorage.getItem("token").split('"')[1]}});case 21:return e.abrupt("return",n);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=a(0),x=Object(n.createContext)(),O=function(e){var t=Object(n.useState)({}),a=Object(d.a)(t,2),r=a[0],c=a[1],s=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.type,n=t.payload,e.next=3,m({type:a,payload:n});case 3:return r=e.sent,e.next=6,c(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=Object(n.useMemo)((function(){return{user:r,dispatchUser:s}}),[r]);return Object(f.jsx)(x.Provider,{value:o,children:e.children})},g=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"d-flex flex-column ",children:[Object(f.jsxs)("section",{className:"d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("h2",{children:["Plan, Organise and Track ",Object(f.jsx)("br",{})," Group Projects With Colleagues  "]})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"col img-fluid",src:"/images/homapage_monitor.png",alt:""})})]}),Object(f.jsxs)("section",{className:"d-flex justify-content-around flex-wrap align-items-center flex-row-reverse  py-5 px-5",style:{backgroundColor:"#fff"},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Task Comments "}),Object(f.jsx)("p",{children:"Create comments on task so you dont forget where you left off."})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"col img-fluid",src:"/images/comment.png",alt:""})})]}),Object(f.jsxs)("section",{className:"d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5 ",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Instant Notification "}),Object(f.jsxs)("p",{children:["Get notified instant when you being assigned a task.",Object(f.jsx)("br",{}),"Always upto date with your team."]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"col img-fluid",src:"/images/notifications.png",alt:""})})]}),Object(f.jsxs)("section",{className:"d-flex justify-content-around flex-wrap align-items-center flex-row-reverse py-5 px-5 ",style:{backgroundColor:"#fff"},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Custom Status "}),Object(f.jsx)("p",{children:"Create Project Specific Status with our Custom Status."})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"col img-fluid",src:"/images/custom_status.png",alt:""})})]}),Object(f.jsxs)("section",{className:"d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5 ",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Feature Rich Editor  "}),Object(f.jsxs)("p",{children:["Using a Feature Rich Text Editor on your task. ",Object(f.jsx)("br",{}),"You can be as precise as you want"]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"col img-fluid",src:"/images/texteditor.gif",alt:""})})]})]})})};g.nav="nav1";var v=g,w=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"About"})})},k=function(){return Object(f.jsxs)("nav",{className:"navbar ",children:[Object(f.jsx)("h1",{}),Object(f.jsx)(o.b,{to:"/dashboard",className:"navbar-brand",style:{backgroundColor:"inherit"},children:Object(f.jsx)("img",{src:"/images/connect_logo.svg",width:"50",className:"img-fluid",alt:""})}),Object(f.jsxs)("ul",{className:"navbar-nav flex-row ml-auto",children:[Object(f.jsx)("li",{className:"nav-item mx-1",children:Object(f.jsx)(o.b,{to:"/about",className:"p-2 ",children:"About "})}),Object(f.jsx)("li",{className:"nav-item mx-1",children:Object(f.jsx)(o.b,{to:"/login",className:"p-2 ",children:"Login "})}),Object(f.jsx)("li",{className:"nav-item mx-1",children:Object(f.jsx)(o.b,{to:"/signup",className:"p-2 ",children:"Signup "})})]})]})},y=a(8),T=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1];return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"d-flex me-auto my-2",onSubmit:function(t){t.preventDefault(),e.push(Object(y.a)().SearchPage.urlPathText({search_term:r})),e.go(0)},children:[Object(f.jsx)("input",{className:"form-control me-2",value:r||"",onChange:function(e){return c(e.target.value)},type:"search",placeholder:"search task","aria-label":"Search"}),Object(f.jsx)("input",{className:"btn btn-outline-success",type:"submit",value:"Search"})]})})},S=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(o.b,{to:"/",className:"logout p-1 ",children:"Logout "})})},N=a(38),E=a(29),P=function(){var e=Object(n.useState)({name:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(i.f)(),s=Object(n.useState)(),o=Object(d.a)(s,2),u=o[0],j=o[1];Object(n.useEffect)(Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m({type:"ACCOUNT_DATA",payload:{}}).then((function(e){e||c.push("/login"),r(e)})),e.next=3,Object(E.b)();case 3:t=e.sent,j(t);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){console.log("message")}),[N.a.onmessage]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"navbar navbar-expand-sm ",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("a",{href:"/dashboard",className:"navbar-brand",style:{backgroundColor:"inherit"},children:Object(f.jsx)("img",{src:"/images/connect_logo.svg",width:"50",className:"img-fluid",alt:""})}),Object(f.jsx)("span",{children:a.name}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fas fa-ellipsis-h"})})}),Object(f.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(f.jsx)(T,{}),Object(f.jsxs)("ul",{className:"navbar-nav   mb-2 mb-lg-0 align-items-center mx-auto",children:[Object(f.jsxs)("li",{className:"nav-item m-1  dropdown",children:[Object(f.jsxs)("a",{className:"dropdown-btn p-1",href:"/#",id:"navbarDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Assigned task",Object(f.jsx)("i",{class:"fa-solid fa-caret-down px-1"})]}),Object(f.jsx)("ul",{className:"dropdown-content",children:u?u.map((function(e){return Object(f.jsx)("button",{className:"w-100",onClick:function(){return function(e){c.push(Object(y.a)().TaskForm.urlPathText({space_id:e.workspace,project_id:e.project,task_id:e._id})),c.go(0)}(e)},children:e.name})})):""})]}),Object(f.jsx)("li",{className:"nav-item m-1",children:Object(f.jsx)(S,{})})]})]})]})}),Object(f.jsx)("div",{})]})},_=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("footer",{className:"footer py-3 border-top",children:Object(f.jsxs)("h6",{className:"mx-auto text-center",children:["Copyright \xa9",String(new Date(Date.now()).getFullYear())]})})})},I=function(e){var t=e.children,a=Object(i.g)(),n={"/":Object(f.jsx)(k,{}),"/about":Object(f.jsx)(k,{}),"/login":null,"/signup":null};return Object(f.jsxs)("div",{children:[Object(f.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),n.hasOwnProperty(a.pathname)?n[a.pathname]:Object(f.jsx)(P,{}),Object(f.jsx)("main",{id:"#main",children:t}),Object(f.jsx)(_,{})]})},C=a(14),A=a(13),z=function(){var e=Object(i.f)(),t=Object(n.useState)({email:"",password:""}),a=Object(d.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],j=o[1],b=function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),j(""),r.email&&r.password){t.next=4;break}return t.abrupt("return",j("All fields are required"));case 4:m({type:"LOGIN",payload:r}).then((function(t){t.errorMsg?j(t.errorMsg):(console.log(t),document.cookie="token=".concat(t.token,";"),localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("token",JSON.stringify(t.token)),e.push("/dashboard"))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"form-signin text-center",onSubmit:b,children:[Object(f.jsx)("img",{className:"mb-4 ml-",src:"/images/connect_logo.svg",alt:"",width:"72",height:"72"}),Object(f.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign in"}),Object(f.jsx)("span",{className:"text-danger",children:u}),Object(f.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(f.jsx)("input",Object(C.a)({type:"email",name:"email",id:"inputEmail",className:"form-control ",placeholder:"Email address",required:"",autoFocus:"",onChange:function(e){return c(Object(A.a)(Object(A.a)({},r),{},{email:e.target.value}))},value:r.email},"required",!0)),Object(f.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(f.jsx)("input",Object(C.a)({type:"password",name:"password",id:"inputPassword",className:"form-control mt-2",placeholder:"Password",required:"",onChange:function(e){return c(Object(A.a)(Object(A.a)({},r),{},{password:e.target.value}))},value:r.password},"required",!0)),Object(f.jsx)("button",{className:"btn btn-lg  btn-block mt-3",type:"submit",children:"Sign in"})]})})},D=a(26),F=a(28),L=function(){var e=Object(n.useState)("col-lg-4 col-md-4 col-sm-12 d-block"),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("col-lg-8 col-md-8 col-sm-12 container"),s=Object(d.a)(c,2),u=s[0],l=s[1],p=Object(n.useState)("fas fa-arrow-left"),j=Object(d.a)(p,2),b=j[0],h=j[1],m=Object(n.useState)(!1),x=Object(d.a)(m,2),O=x[0],g=x[1];return Object(f.jsx)("div",{children:Object(f.jsx)("main",{className:"row",children:Object(f.jsx)(D.b,{children:Object(f.jsx)(F.b,{children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(n.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading ... "}),children:[Object(f.jsxs)("aside",{className:a,style:{minHeight:"100vh",borderRight:"1px solid #aaa",overflow:"auto",display:"block"},children:[Object(f.jsx)(i.a,{path:Object(y.a)().SpaceMenu.plainPathText,component:Object(y.a)().SpaceMenu.component}),Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)("h3",{children:"Projects loading ... "}),children:Object(f.jsx)(i.a,{path:Object(y.a)().ProjectMenu.plainPathText,component:Object(y.a)().ProjectMenu.component})}),Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)("h3",{children:"Tasks loading ... "}),children:Object(f.jsx)(i.a,{path:Object(y.a)().TaskMenu.plainPathText,component:Object(y.a)().TaskMenu.component})})]}),Object(f.jsxs)("section",{className:u,children:[Object(f.jsx)("button",{onClick:function(){O||(r("d-none"),l("col-10 container"),h("fas fa-arrow-right"),g(!O)),O&&(r("col-lg-4 col-md-4 col-sm-12 d-block"),l("col-lg-8 col-md-8 col-sm-12 container"),h("fas fa-arrow-left"),g(!O))},children:Object(f.jsx)("i",{class:b})}),Object(f.jsx)(i.a,{exact:!0,path:Object(y.a)().TaskView.plainPathText,component:Object(y.a)().TaskView.component}),Object(f.jsx)(i.a,{exact:!0,path:Object(y.a)().TaskForm.plainPathText,component:Object(y.a)().TaskForm.component}),Object(f.jsx)(i.a,{exact:!0,path:Object(y.a)().StatusTemplateForm.plainPathText,component:Object(y.a)().StatusTemplateForm.component}),Object(f.jsx)(i.a,{exact:!0,path:Object(y.a)().StatusTemplatesView.plainPathText,component:Object(y.a)().StatusTemplatesView.component}),Object(f.jsx)(i.a,{exact:!0,path:Object(y.a)().SearchPage.plainPathText,component:Object(y.a)().SearchPage.component})]})]})})})})})})},M=function(){var e=Object(i.f)(),t=Object(n.useState)({email:"",password:"",name:""}),a=Object(d.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],j=o[1],b=function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),j(""),r.email&&r.password){t.next=4;break}return t.abrupt("return",j("All fields are required"));case 4:m({type:"SIGNUP",payload:r}).then((function(t){t.errorMsg?j(t.errorMsg):(console.log(t),document.cookie="token=".concat(t.token,";"),localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("token",JSON.stringify(t.token)),e.push("/dashboard"))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"form-signin text-center",onSubmit:b,children:[Object(f.jsx)("img",{className:"mb-4 ml-",src:"/images/connect_logo.svg",alt:"",width:"72",height:"72"}),Object(f.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign in"}),Object(f.jsx)("span",{className:"text-danger",children:u}),Object(f.jsxs)("div",{className:"my-2",children:[Object(f.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Name"}),Object(f.jsx)("input",Object(C.a)({type:"name",name:"name",id:"inputEmail",className:"form-control ",placeholder:"Name",required:"",autoFocus:"",onChange:function(e){return c(Object(A.a)(Object(A.a)({},r),{},{name:e.target.value}))},value:r.name},"required",!0))]}),Object(f.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(f.jsx)("input",Object(C.a)({type:"email",name:"email",id:"inputEmail",className:"form-control ",placeholder:"Email address",required:"",autoFocus:"",onChange:function(e){return c(Object(A.a)(Object(A.a)({},r),{},{email:e.target.value}))},value:r.email},"required",!0)),Object(f.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(f.jsx)("input",Object(C.a)({type:"password",name:"password",id:"inputPassword",className:"form-control mt-2",placeholder:"Password",required:"",onChange:function(e){return c(Object(A.a)(Object(A.a)({},r),{},{password:e.target.value}))},value:r.password},"required",!0)),Object(f.jsx)("button",{className:"btn btn-lg  btn-block mt-3",type:"submit",children:"Sign Up"})]})})};var G=function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)(O,{children:Object(f.jsx)(I,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/",exact:!0,component:v}),Object(f.jsx)(i.a,{path:"/about",component:w}),Object(f.jsx)(i.a,{path:"/login",component:z}),Object(f.jsx)(i.a,{path:"/signup",component:M}),Object(f.jsx)(i.a,{path:"/dashboard",component:L})]})})})})},V=(a(74),function(e){e&&e instanceof Function&&a.e(13).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))});s.a.render(Object(f.jsxs)(r.a.StrictMode,{children:[Object(f.jsx)(G,{}),Object(f.jsx)("h1",{children:"welcome react"})]}),document.getElementById("root")),V()},8:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,81))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,82))})),o=r.a.lazy((function(){return a.e(11).then(a.bind(null,76))})),i=r.a.lazy((function(){return a.e(12).then(a.bind(null,80))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1)]).then(a.bind(null,83))})),l=r.a.lazy((function(){return a.e(9).then(a.bind(null,77))})),p=r.a.lazy((function(){return a.e(10).then(a.bind(null,78))})),d=r.a.lazy((function(){return a.e(8).then(a.bind(null,79))}));t.a=function(){return{SpaceMenu:{component:c,urlPathText:"/dashboard",plainPathText:"/dashboard"},SearchPage:{component:d,urlPathText:function(e){var t=e.search_term;return"/dashboard/search?term=".concat(t)},plainPathText:"/dashboard/search"},ProjectMenu:{component:s,urlPathText:function(e){var t=e.space_id;return"/dashboard/space/".concat(t)},plainPathText:"/dashboard/space/:space_id"},TaskMenu:{component:o,urlPathText:function(e){var t=e.space_id,a=e.project_id;return"/dashboard/space/".concat(t,"/project/").concat(a)},plainPathText:"/dashboard/space/:space_id/project/:project_id"},TaskView:{component:i,urlPathText:function(e){var t=e.space_id,a=e.project_id;return"/dashboard/space/".concat(t,"/project/").concat(a)},plainPathText:"/dashboard/space/:space_id/project/:project_id"},TaskForm:{component:u,urlPathText:function(e){var t=e.space_id,a=e.project_id,n=e.task_id;return"/dashboard/space/".concat(t,"/project/").concat(a,"/task_form/").concat(n)},plainPathText:"/dashboard/space/:space_id/project/:project_id/task_form/:task_id"},StatusTemplateForm:{component:l,urlPathText:function(e){var t=e.space_id,a=e.template_id;return"/dashboard/space/".concat(t,"/status_template_form/").concat(a)},plainPathText:"/dashboard/space/:space_id/status_template_form/:template_id"},StatusTemplatesView:{component:p,urlPathText:function(e){var t=e.space_id;return"/dashboard/space/".concat(t,"/StatusTemplatesView")},plainPathText:"/dashboard/space/:space_id/StatusTemplatesView"}}}}},[[75,4,5]]]);
//# sourceMappingURL=main.7197ce1d.chunk.js.map