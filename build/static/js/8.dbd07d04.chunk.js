(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{79:function(e,c,t){"use strict";t.r(c);var s=t(2),r=t.n(s),a=t(3),n=t(6),o=t(1),i=t(7),d=t(29),j=t(8),l=t(0);c.default=function(){var e=Object(i.g)().search,c=Object(o.useState)(),t=Object(n.a)(c,2),s=t[0],u=t[1],b=Object(o.useState)([]),h=Object(n.a)(b,2),p=h[0],O=h[1],m=Object(i.f)();Object(o.useEffect)(Object(a.a)(r.a.mark((function c(){var t,s;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=new URLSearchParams(e),console.log(t.get("term")),u(t.get("term")),c.next=5,Object(d.f)({search_term:t.get("term")});case 5:s=c.sent,O(s),console.log(s);case 8:case"end":return c.stop()}}),c)}))),[e]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{children:["Task Search Results for ",s," "]}),Object(l.jsxs)("div",{className:"row border-bottom mx-auto",children:[Object(l.jsx)("div",{className:"col-3",children:"Task Name"}),Object(l.jsx)("div",{className:"col-3",children:" Status"}),Object(l.jsx)("div",{className:"col-3",children:" Project"}),Object(l.jsx)("div",{className:"col-3",children:"Space"})]}),p.map((function(e){return Object(l.jsxs)("div",{className:"row py-3 border-bottom mx-auto",children:[Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)("button",{onClick:function(){return function(e){m.push(Object(j.a)().TaskForm.urlPathText({space_id:e.workspace._id,project_id:e.project._id,task_id:e._id}))}(e)},children:e.name})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsxs)("span",{className:"p-2 border rounded",style:{backgroundColor:e.status.color,color:"white"},children:[" ",e.status.status]})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)("button",{onClick:function(){return function(e){m.push(Object(j.a)().TaskView.urlPathText({space_id:e.workspace._id,project_id:e.project._id}))}(e)},children:e.project.name})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)("button",{onClick:function(){return function(e){m.push(Object(j.a)().ProjectMenu.urlPathText({space_id:e.workspace._id,project_id:e.project._id,task_id:e._id}))}(e)},children:e.workspace.name})})]})}))]})}}}]);
//# sourceMappingURL=8.dbd07d04.chunk.js.map