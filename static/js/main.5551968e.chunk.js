(this["webpackJsonpdemo-ii"]=this["webpackJsonpdemo-ii"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=(n(11),n(1)),i=(n(12),{name:"",phone:"",email:""}),m=(n(13),function(e){var t=e.name,n=void 0===t?"N/A":t,a=e.email,r=void 0===a?"N/A":a,c=e.phone,o=void 0===c?"N/A":c,i=e.onEdit,m=e.onDelete;return l.a.createElement("tr",null,l.a.createElement("td",null,n),l.a.createElement("td",null,o),l.a.createElement("td",null,r),l.a.createElement("td",null,l.a.createElement("span",{"aria-label":"edit",role:"img",onClick:function(e){i({name:n,phone:o,email:r})}},"\ud83d\udd8b\ufe0f")),l.a.createElement("td",null,l.a.createElement("span",{"aria-label":"delete",role:"img",onClick:function(e){m(r)}},"\u274c")))}),u=function(e){var t=e.className,n=e.listOfContacts,a=e.onEdit,r=e.onDelete;return l.a.createElement("table",{className:"contact-list-base".concat(t?" ".concat(t," "):"")},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,n.length?n.map((function(e){return l.a.createElement(m,{name:e.name,phone:e.phone,email:e.email,onDelete:r,onEdit:a})})):l.a.createElement("div",null,"No contacts present here yet")))},s=(n(14),function(e){var t=e.onClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact-manager-add",onClick:t},"+"))}),d=(n(15),function(e){var t=e.children,n=e.isActive,a=e.onClick;return l.a.createElement("div",{className:"modal".concat(n?" active":" "),onClick:a},t)}),f=n(2),E=n(5),p=(n(16),function(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/.test(e)}),h=function(e){return/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(e)},v=function(e){return e.length>=3},b=[{id:"name",default:"",name:"Name",errorMessage:"Insert a valid name",type:"text"},{id:"phone",default:"",name:"Phone",errorMessage:"Insert a valid phone number",type:"tel"},{id:"email",default:"",name:"Email",errorMessage:"Insert a valid email",type:"text"}],g=function(e){var t=e.data,n=e.onSubmit,r=Object(a.useState)(t),c=Object(o.a)(r,2),i=c[0],m=c[1],u=Object(a.useState)({name:!1,phone:!1,email:!1}),s=Object(o.a)(u,2),d=s[0],g=s[1];Object(a.useEffect)((function(){m(t)}),[t]);var k=function(e){return m(Object(E.a)({},i,Object(f.a)({},e.target.id,e.target.value)))};return l.a.createElement("form",{onClick:function(e){return e.stopPropagation()},className:"form",onSubmit:function(e){e.preventDefault(),g({name:!v(i.name),phone:!h(i.phone),email:!p(i.email)}),v(i.name)&&h(i.phone)&&p(i.email)&&n(i)}},b.map((function(e){return l.a.createElement(O,{key:e.id,id:e.id,name:e.name,onChange:k,value:i[e.id],errorMessage:e.errorMessage,errorShow:d[e.id],type:e.type})})),l.a.createElement(O,{type:"submit",value:"Submit"}))},O=(n(17),function(e){var t=e.id,n=e.onChange,a=e.value,r=e.errorMessage,c=e.type,o=e.errorShow,i=e.name;return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("label",{className:"input-label",htmlFor:t},"".concat(i,": ")),l.a.createElement("input",{id:t,className:"input-input",onChange:n,value:a,type:c}),o&&l.a.createElement("p",null,r))}),k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),m=Object(o.a)(c,2),f=m[0],E=m[1],p=Object(a.useState)(i),h=Object(o.a)(p,2),v=h[0],b=h[1],O=function(){E(!f),b(i)};return l.a.createElement("div",{className:"app"},l.a.createElement(s,{onClick:O}),l.a.createElement(u,{listOfContacts:n,onDelete:function(e){r(n.filter((function(t){return t.email!==e})))},onEdit:function(e){b(e),E(!0)}}),l.a.createElement(d,{onClick:O,isActive:f},l.a.createElement(g,{onSubmit:function(e){b(e),r(n.filter((function(t){return t.email!==e.email})).concat(e)),E(!1)},data:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.5551968e.chunk.js.map