import{_ as x,r as d,u as L,a as F,o as u,b as f,d as s,w as S,e as _,v as p,t as k,f as D,F as I,p as U,g as P}from"./index-BQ7PyT97.js";import{c as q,d as b,q as C,w as v,g as N,a as T,b as V}from"./init-B6bwGzn1.js";import{_ as B}from"./library_1-DKaR0qbU.js";import"./index.esm2017-CJ2sl82q.js";const E={setup(){const a=d(""),e=d(""),n=d(null),o=d(!1),m=L(),g=F(),t=()=>{a.value="",e.value=""},h=()=>{m.push({name:"FireLogin"})},w=async()=>{try{const l=q(b,"libraryusers"),c=C(l,v("username","==",a.value),v("password","==",e.value)),i=await N(c);i.empty?(n.value="Invalid username or password!",setTimeout(()=>{n.value=null,t()},700)):(await y(i.docs[0].id),o.value=!0,setTimeout(()=>{o.value=!1,t(),m.push({name:"UserProfilePage"})},700))}catch(l){n.value="Error during login: "+l.message,setTimeout(()=>{n.value=null},700)}},y=async l=>{try{const c=T(b,"libraryusers",l),i=await V(c);i.exists()?g.dispatch("login",{user:a.value,userData:i.data()}):console.log("No user data found.")}catch(c){console.error("Error fetching user data: ",c.message)}};return{username:a,password:e,loginerror:n,loginsuccess:o,clearForm:t,gotoFirebaseLogin:h,handleLogin:w}}},r=a=>(U("data-v-dd0fb3dd"),a=a(),P(),a),R=r(()=>s("div",{class:"header-row"},null,-1)),G={class:"container mt-5"},M={class:"row"},j=r(()=>s("div",{class:"col-md-6 d-flex justify-content-center align-items-center"},[s("img",{src:B,alt:"Library 1",class:"img-fluid"})],-1)),A={class:"col-md-6"},O=r(()=>s("h1",{class:"text-center"},"LOGIN",-1)),z=r(()=>s("p",{class:"text-center"},"Please enter your username and password.",-1)),H={class:"row mb-3"},J={class:"col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"},K=r(()=>s("label",{for:"username",class:"form-label"},"Username",-1)),Q={class:"row mb-3"},W={class:"col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"},X=r(()=>s("label",{for:"password",class:"form-label"},"Password",-1)),Y={class:"text-center"},Z=r(()=>s("button",{type:"submit",class:"btn btn-primary me-2"},"Login",-1)),$={key:0,class:"text-danger"},ss={key:1,class:"text-success"};function os(a,e,n,o,m,g){return u(),f(I,null,[R,s("div",G,[s("div",M,[j,s("div",A,[O,z,s("form",{onSubmit:e[4]||(e[4]=S((...t)=>o.handleLogin&&o.handleLogin(...t),["prevent"]))},[s("div",H,[s("div",J,[K,_(s("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=t=>o.username=t)},null,512),[[p,o.username]])])]),s("div",Q,[s("div",W,[X,_(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t)},null,512),[[p,o.password]])])]),s("div",Y,[Z,s("button",{type:"button",class:"btn btn-secondary",onClick:e[2]||(e[2]=(...t)=>o.clearForm&&o.clearForm(...t))},"Clear Form"),s("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=(...t)=>o.gotoFirebaseLogin&&o.gotoFirebaseLogin(...t))}," Login with Gmail "),o.loginerror?(u(),f("div",$,k(o.loginerror),1)):o.loginsuccess?(u(),f("div",ss,"Username and password correct.")):D("",!0)])],32)])])])],64)}const ns=x(E,[["render",os],["__scopeId","data-v-dd0fb3dd"]]);export{ns as default};
