(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{81:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(3),l=a(6),i=a(1),r=a(84),o=a(85),d=a(13),j=a(7),u=a(26),m=a(8),b=a(0),p=function(e){var t=e.space,a=Object(j.f)(),c=Object(i.useContext)(u.a),p=Object(l.a)(c,2),O=(p[0],p[1]),x=Object(i.useState)(t),f=Object(l.a)(x,2),h=f[0],v=f[1],S=Object(i.useState)({}),N=Object(l.a)(S,2),y=N[0],_=N[1],E=Object(i.useState)(""),g=Object(l.a)(E,2),k=g[0],w=g[1],I=Object(i.useState)({}),D=Object(l.a)(I,2),L=D[0],T=D[1],C=Object(i.useState)({"Leave Space":"type lev","Delete Space":"type del"}),F=Object(l.a)(C,2),P=F[0],J=(F[1],Object(i.useState)("")),A=Object(l.a)(J,2),M=A[0],V=A[1],q=function(e){return function(e){var t=!1;return e.hasOwnProperty("Leave Space")&&"lev"===e["Leave Space"]?T({}):e.hasOwnProperty("Leave Space")&&"lev"!==e["Leave Space"]&&(T({"Leave Space":"Invalid! Enter Lowercase lev"}),t=!0),e.hasOwnProperty("Delete Space")&&"del"===e["Delete Space"]?T({}):e.hasOwnProperty("Delete Space")&&"del"!==e["Delete Space"]&&(T({"Delete Space":"Invalid! Enter Lowercase del"}),t=!0),t}(e)},z=function(){var e=Object(s.a)(n.a.mark((function e(a){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Object.keys(L).length){e.next=17;break}e.t0=M,e.next=e.t0===u.c.DELETE?4:e.t0===u.c.LEAVE?6:e.t0===u.c.EDIT?11:16;break;case 4:O({type:u.c.DELETE,payload:t}),v({});case 6:(c={}).user_id=JSON.parse(localStorage.getItem("user"))._id,c.space_id=t._id,O({type:u.c.LEAVE,payload:c}),v({});case 11:return s=Object(d.a)(Object(d.a)({},t),a),e.next=14,O({type:u.c.EDIT,payload:s});case 14:s=e.sent,v(s);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:h?Object(b.jsxs)("div",{className:" my-2 d-flex flex-row",children:[Object(b.jsx)("button",{className:" mx-2",onClick:function(){a.push(Object(m.a)().ProjectMenu.urlPathText({space_id:h._id}))},children:h.name}),Object(b.jsx)("button",{className:" mx-2",onClick:function(){a.push(Object(m.a)().StatusTemplateForm.urlPathText({space_id:h._id}))},children:"+ Template"}),Object(b.jsxs)("div",{className:"dropdown mx-2 ",children:[Object(b.jsx)("button",{className:"dropbtn ",children:Object(b.jsx)("i",{className:"fas fa-ellipsis-h dropbtn"})}),Object(b.jsxs)("ul",{className:"dropdown-content",children:[Object(b.jsx)("li",{children:h.canEdit?Object(b.jsx)(o.a,{modalFormId:"spaceitem"+h._id,text:"edit",onClick:function(){var e={name:h.name};_(e),w("Edit  ".concat(h.name)),V(u.c.EDIT)}}):""}),Object(b.jsx)("li",{children:Object(b.jsx)(o.a,{modalFormId:"spaceitem"+h._id,text:"invite",onClick:function(){_({email:""}),w("Invite ".concat(t.name))}})}),t.canLeave?Object(b.jsx)("li",{children:Object(b.jsx)(o.a,{modalFormId:"spaceitem"+h._id,text:"leave",onClick:function(){_({"Leave Space":""}),w("Leave  ".concat(h.name)),V(u.c.LEAVE)}})}):"",Object(b.jsx)("li",{children:t.canDelete?Object(b.jsx)(o.a,{modalFormId:"spaceitem"+h._id,text:"delete",color:"red",onClick:function(){_({"Delete Space":""}),w("Delete  ".concat(h.name)),V(u.c.DELETE)}}):""}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){a.push(Object(m.a)().StatusTemplatesView.urlPathText({space_id:h._id}))},children:"Custom Templates"})}),Object(b.jsx)("li",{children:Object(b.jsx)("span",{className:"badge",title:"Join Code",children:t.join_code})})]})]}),Object(b.jsx)(r.a,{modalFormId:"spaceitem"+h._id,onSubmit:function(e){z(e)},modalTitle:k,inputData:y,placeholders:P,errors:L,isError:function(e){return q(e)}})]}):null})},O=function(e){var t=e.spaces;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(p,{space:e},e._id)}))})};t.default=function(){var e=Object(i.useContext)(u.a),t=Object(l.a)(e,2),a=t[0],c=t[1],d=Object(i.useState)({}),j=Object(l.a)(d,2),m=j[0],p=j[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),h=f[0],v=f[1],S=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.join_code){e.next=6;break}return t.user_id=JSON.parse(localStorage.getItem("user"))._id,e.next=4,c({type:u.c.JOIN,payload:t});case 4:e.next=7;break;case 6:c({type:u.c.EDIT,payload:t});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"border-top border-bottom p-2  d-flex flex-column flex-wrap  align-items-start ",children:[Object(b.jsxs)("div",{className:"my-2 d-flex flex-row align-items-center",children:[Object(b.jsx)("h6",{className:"",children:"Spaces"}),Object(b.jsx)(o.a,{className:"m-2",modalFormId:"spacemenu",text:"+ New",onClick:function(){p({name:""}),v("New Space")}}),Object(b.jsx)(o.a,{className:"m-2",modalFormId:"spacemenu",text:'<i class="fas fa-handshake"></i> Join ',onClick:function(){p({join_code:""}),v("Join A Space")}})]}),Object(b.jsx)(r.a,{modalFormId:"spacemenu",onSubmit:function(e){S(e)},modalTitle:h,inputData:m}),Object(b.jsx)(O,{spaces:a})]})}},84:function(e,t,a){"use strict";var c=a(13),n=a(6),s=a(1),l=(a(86),a(0));t.a=function(e){var t=e.modalTitle,a=e.onSubmit,i=e.inputData,r=e.modalFormId,o=e.placeholders,d=void 0===o?{}:o,j=e.errors,u=void 0===j?{}:j,m=e.isError,b=void 0!==m&&m,p=Object(s.useState)(i),O=Object(n.a)(p,2),x=O[0],f=O[1],h=function(e){var t=e.target.id,a={};"active_status_template"!==t&&(a[t]=e.target.value,f(Object(c.a)(Object(c.a)({},x),a))),"active_status_template"==t&&(a[t]=e.target.selectedOptions[0].value,f(Object(c.a)(Object(c.a)({},x),a)))};Object(s.useEffect)((function(){f(i)}),[i]);var v=function(){window.$("#".concat(r)).modal("hide")};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"modal fade ",id:r,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:t}),Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"function"===typeof b&&b(x)||(a(x),v())},className:"needs-validation",children:[Object.entries(i).map((function(e,t){var a=Object(n.a)(e,2),c=a[0],s=a[1],i=null;return i="active_status_template"==c?Object(l.jsxs)("select",{className:"form-select",id:c,name:"active_status_template",onChange:h,required:!0,children:[Object(l.jsx)("option",{value:"",className:"fw-light",children:"please select"}),s.map((function(e,t){var a=e._id,c=e.name;return 0==t?Object(l.jsxs)("option",{value:a,children:[" ",c+t]}):Object(l.jsx)("option",{value:a,children:c+t})}))]}):Object(l.jsx)("input",{type:"text",className:"form-control ",id:c,placeholder:d[c]?d[c]:"",value:x[c],onChange:h,required:!0}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"text",className:"col-form-label",style:{textTransform:"capitalize"},children:c}),i,Object(l.jsx)("div",{className:"text-danger form-text",children:u[c]?u[c]:""}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]},t)})),Object(l.jsx)("div",{className:"mb-2 d-flex justify-content-end",children:Object(l.jsx)("button",{type:"submit",className:" ml-auto",children:"Save"})})]})})]})})})})}},85:function(e,t,a){"use strict";var c=a(0);t.a=function(e){var t=e.text,a=e.onClick,n=e.color,s=e.modalFormId,l=e.className;return Object(c.jsx)("button",{dangerouslySetInnerHTML:{__html:t},onClick:a,type:"button",className:"p-1 "+l,"data-bs-toggle":"modal","data-bs-target":"#"+s,style:{color:n}})}}}]);
//# sourceMappingURL=7.f0bb42c7.chunk.js.map