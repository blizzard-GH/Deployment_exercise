import{_ as m,r as d,n as p,o as u,b,d as s,e as r,v as i,w as f,q as _,p as B,g as k}from"./index-BQ7PyT97.js";import{e as v,c as N,d as h}from"./init-B6bwGzn1.js";import x from"./BookList-UJGu_lH9.js";import"./index.esm2017-CJ2sl82q.js";const y={setup(){const t=d(""),e=d("");return{isbn:t,name:e,addBook:async()=>{try{const o=Number(t.value);if(isNaN(o)){alert("ISBN must be a number");return}await v(N(h,"books"),{isbn:o,name:e.value}),t.value="",e.value="",alert("Book added successfully")}catch(o){console.error("Error adding book: ",o)}}}},components:{BookList:x}},a=t=>(B("data-v-3fde7272"),t=t(),k(),t),I={class:"container"},S=a(()=>s("h1",null,"Add Book",-1)),w={class:"form-group"},g=a(()=>s("label",{for:"isbn"},"ISBN:",-1)),V={class:"form-group"},q=a(()=>s("label",{for:"name"},"Name:",-1)),A=a(()=>s("button",{type:"submit",class:"submit-btn"},"Add Book",-1));function L(t,e,c,o,D,E){const l=p("BookList");return u(),b("div",I,[S,s("form",{onSubmit:e[2]||(e[2]=f((...n)=>o.addBook&&o.addBook(...n),["prevent"])),class:"col-12 form"},[s("div",w,[g,r(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>o.isbn=n),id:"isbn",required:"",class:"input-field"},null,512),[[i,o.isbn]])]),s("div",V,[q,r(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>o.name=n),id:"name",required:"",class:"input-field"},null,512),[[i,o.name]])]),A],32),_(l)])}const j=m(y,[["render",L],["__scopeId","data-v-3fde7272"]]);export{j as default};
