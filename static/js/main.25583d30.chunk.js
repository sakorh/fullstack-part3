(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),r=t(3),u=t(1),o=t(0),i=function(e){var n=e.newFilter,t=e.filterNames;return Object(o.jsxs)("div",{children:["filter shown with",Object(o.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.addPerson,t=e.newName,c=e.newNumber,a=e.handleNameChange,r=e.handleNumberChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name:",Object(o.jsx)("input",{value:t,onChange:a})]}),Object(o.jsxs)("div",{children:["number:",Object(o.jsx)("input",{value:c,onChange:r})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},s=function(e){var n=e.person,t=e.deleteName;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:[n.name," ",n.number,Object(o.jsx)("button",{onClick:t,children:"delete"})]})})},d=function(e){var n=e.namesToShow,t=e.deleteName;return Object(o.jsx)("div",{children:n.map((function(e){return Object(o.jsx)(s,{person:e,deleteName:function(){return t(e.id)}},e.id)}))})},j=t(4),b=t.n(j),m="/api/people",f={getAll:function(){return b.a.get(m).then((function(e){return e.data}))},create:function(e){return b.a.post(m,e).then((function(e){return e.data}))},deleteName:function(e){return b.a.delete("".concat(m,"/").concat(e))},update:function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))}},h=function(e){var n=e.success,t=e.error;return null===n&&null===t?null:null===t?Object(o.jsx)("div",{className:"success",children:n}):Object(o.jsx)("div",{className:"error",children:t})},O=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),s=Object(r.a)(a,2),j=s[0],b=s[1],m=Object(u.useState)(""),O=Object(r.a)(m,2),v=O[0],p=O[1],w=Object(u.useState)(""),x=Object(r.a)(w,2),N=x[0],g=x[1],C=Object(u.useState)(null),S=Object(r.a)(C,2),k=S[0],L=S[1],T=Object(u.useState)(null),y=Object(r.a)(T,2),A=y[0],D=y[1];Object(u.useEffect)((function(){f.getAll().then((function(e){c(e)}))}),[]);var F=N?t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})):t;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(h,{success:k,error:A}),Object(o.jsx)(i,{newFilter:N,filterNames:function(e){g(e.target.value)}}),Object(o.jsx)("h2",{children:"add a new"}),Object(o.jsx)(l,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name.toLowerCase()})).includes(j.toLowerCase())){var n=t.find((function(e){return e.name.toLowerCase()===j.toLowerCase()}));if(n.number===v)window.alert("".concat(j," is already added to phonebook"));else if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a={name:n.name,number:v};f.update(n.id,a).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),b(""),p(""),L("Updated ".concat(e.name,"'s number'")),setTimeout((function(){L(null)}),5e3)})).catch((function(e){D("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){D(null)}),5e3),c(t.filter((function(e){return e.id!==n.id})))}))}}else{var r={name:j,number:v};f.create(r).then((function(e){c(t.concat(e)),b(""),p(""),L("Added ".concat(e.name)),setTimeout((function(){L(null)}),5e3)}))}},newName:j,newNumber:v,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){p(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(d,{namesToShow:F,deleteName:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&f.deleteName(e).then((function(){c(t.filter((function(n){return n.id!==e}))),L("Deleted ".concat(n.name)),setTimeout((function(){L(null)}),5e3)}))}})]})};t(40);a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.25583d30.chunk.js.map