"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[682],{4354:(e,t,s)=>{s.d(t,{A:()=>c});const a=s.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",r=s.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var i=s(579);const c=()=>(0,i.jsxs)("div",{className:"app__banner",children:[(0,i.jsx)("img",{src:a,alt:"Avengers"}),(0,i.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,i.jsx)("br",{}),"Stay tuned!"]}),(0,i.jsx)("img",{src:r,alt:"Avengers logo"})]})},1425:(e,t,s)=>{s.d(t,{A:()=>i});const a=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var r=s(579);const i=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},8637:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(1591),r=s(5043),i=s(5475),c=s(8502),n=s(1425),o=s(897),l=s(579);const d=(e,t,s)=>{switch(e){case"waiting":return(0,l.jsx)(c.A,{});case"loading":return s?(0,l.jsx)(t,{}):(0,l.jsx)(c.A,{});case"confirmed":return(0,l.jsx)(t,{});case"error":return(0,l.jsx)(n.A,{});default:throw new Error("Unexpected process state")}},m=e=>{const[t,s]=(0,r.useState)([]),[a,c]=(0,r.useState)(!1),[n,m]=(0,r.useState)(340),[u,h]=(0,r.useState)(!1),{loading:p,error:g,getAllComics:b,process:x,setProcess:j}=(0,o.A)();(0,r.useEffect)((()=>{v(n,!0)}),[]);const v=(e,t)=>{c(!t),b(e).then(f).then((()=>j("confirmed")))},f=e=>{let t=!1;e.length<8&&(t=!0),s((t=>[...t,...e])),c((e=>!1)),m((e=>e+8)),h((e=>t))};return(0,l.jsxs)("div",{className:"comics__list",children:[d(x,(()=>function(e){const t=e.map(((e,t)=>(0,l.jsx)("li",{className:"comics__item",children:(0,l.jsxs)(i.N_,{to:`/comics/${e.id}`,children:[(0,l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,l.jsx)("div",{className:"comics__item-name",children:e.title}),(0,l.jsx)("div",{className:"comics__item-price",children:e.price})]})},e.id)));return(0,l.jsx)("ul",{className:"comics__grid",children:t})}(t)),a),(0,l.jsx)("button",{className:"button button__main button__long",disabled:a,style:{display:u?"none":"block"},onClick:()=>v(n),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})};var u=s(4354);const h=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.m,{children:[(0,l.jsx)("meta",{name:"description",content:"Page with last of our comics"}),(0,l.jsx)("title",{children:"Comics page"})]}),(0,l.jsx)(u.A,{}),(0,l.jsx)(m,{})]})},897:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(5043);const r=()=>{const{request:e,clearError:t,process:s,setProcess:r}=(()=>{const[e,t]=(0,a.useState)("waiting");return{request:(0,a.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:s,body:a,headers:r});if(!t.ok)throw new Error(`Could not featch ${e}, status: ${t.status}`);return await t.json()}catch(i){throw t("error"),i}}),[]),clearError:(0,a.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),i="https://gateway.marvel.com:443/v1/public/",c="apikey=129b3670ad033d82bbeb6ea2a1095d5c",n=e=>({id:e.id,name:e.name,description:e.description?`${e.description.slice(0,210)}...`:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?`${e.pageCount} p.`:"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?`${e.prices[0].price}$`:"not available",homepage:e.urls[0].url}};return{clearError:t,process:s,setProcess:r,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650;return(await e(`${i}characters?limit=9&offset=${t}&${c}`)).data.results.map(n)},getCharacterByName:async t=>(await e(`${i}characters?name=${t}&${c}`)).data.results.map(n),getCharacter:async t=>{const s=await e(`${i}characters/${t}?${c}`);return n(s.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:340;return(await e(`${i}comics?limit=8&offset=${t}&${c}`)).data.results.map(o)},getComic:async t=>{const s=await e(`${i}comics/${t}?${c}`);return o(s.data.results[0])}}}}}]);
//# sourceMappingURL=682.9a601222.chunk.js.map