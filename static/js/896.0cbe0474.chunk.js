"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[896],{425:(e,a,s)=>{s.d(a,{A:()=>c});const r=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var t=s(579);const c=()=>(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})},770:(e,a,s)=>{s.r(a),s.d(a,{default:()=>C});var r=s(43),t=s(591),c=s(502),n=s(425),i=s(897);const l=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var o=s(579);const h=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:t,homepage:c,wiki:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:s}),(0,o.jsx)("p",{className:"randomchar__descr",children:r}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,a]=(0,r.useState)({}),{loading:s,error:t,getCharacter:d,clearError:m}=(0,i.A)();(0,r.useEffect)((()=>{j();const e=setInterval(j,6e9);return()=>{clearInterval(e)}}),[]);const u=e=>{a(e)},j=()=>{m();const e=Math.floor(400*Math.random()+1011e3);d(e).then(u)},_=t?(0,o.jsx)(n.A,{}):null,x=s?(0,o.jsx)(c.A,{}):null,p=s||t?null:(0,o.jsx)(h,{char:e});return(0,o.jsxs)("div",{className:"randomchar",children:[_,x,p,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",onClick:j,children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var m=s(772),u=s(523);const j=e=>{const[a,s]=(0,r.useState)([]),[t,l]=(0,r.useState)(!1),[h,d]=(0,r.useState)(198),[j,_]=(0,r.useState)(!1),{loading:x,error:p,getAllCharacters:b}=(0,i.A)();(0,r.useEffect)((()=>{v(h,!0)}),[]);const v=(e,a)=>{l(!a),b(e).then(g)},g=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),l((e=>!1)),d((e=>e+9)),_((e=>a))},N=(0,r.useRef)([]),f=e=>{N.current.forEach((e=>e.classList.remove("char__item_selected"))),N.current[e].classList.add("char__item_selected"),N.current[e].focus()};const k=function(a){const s=a.map(((a,s)=>{let r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(r={objectFit:"unset"}),(0,o.jsx)(m.A,{timeout:500,classNames:"char__item",children:(0,o.jsxs)("li",{className:"char__item",ref:e=>N.current[s]=e,tabIndex:0,onClick:()=>{e.onCharSelected(a.id),f(s)},onKeyUp:r=>{" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(a.id),f(s))},children:[(0,o.jsx)("img",{src:a.thumbnail,alt:a.name,style:r}),(0,o.jsx)("div",{className:"char__name",children:a.name})]})},a.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:(0,o.jsx)(u.A,{component:null,children:s})})}(a),y=p?(0,o.jsx)(n.A,{}):null,C=x&&!t?(0,o.jsx)(c.A,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[y,C,k,(0,o.jsx)("button",{className:"button button__main button__long",disabled:t,style:{display:j?"none":"block"},onClick:()=>v(h),children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},_=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]}),x=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:t,homepage:c,wiki:n,comics:i}=a;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(l={objectFit:"contain"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:t,alt:s,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:s}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:r}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,a)=>{if(!(a>9))return(0,o.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},p=e=>{const[a,s]=(0,r.useState)(null),{loading:t,error:l,getCharacter:h,clearError:d}=(0,i.A)();(0,r.useEffect)((()=>{m()}),[e.charId]);const m=()=>{const{charId:a}=e;a&&(d(),h(a).then(u))},u=e=>{s(e)},j=a||t||l?null:(0,o.jsx)(_,{}),p=l?(0,o.jsx)(n.A,{}):null,b=t?(0,o.jsx)(c.A,{}):null,v=t||l||!a?null:(0,o.jsx)(x,{char:a});return(0,o.jsxs)("div",{className:"char__info",children:[j,p,b,v]})};var b=s(892),v=s(899),g=s(475);const N=()=>{const[e,a]=(0,r.useState)(null),{loading:s,error:t,getCharacterByName:c,clearError:l}=(0,i.A)(),h=e=>{a(e)},d=t?(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(n.A,{})}):null,m=e?e.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,o.jsx)(g.N_,{to:`/characters/${e[0].id}`,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(b.l1,{initialValues:{charName:""},validationSchema:v.Ik({charName:v.Yj().required("This field is required!")}),onSubmit:e=>{let{charName:a}=e;var s;s=a,l(),c(s).then(h)},children:(0,o.jsxs)(b.lV,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(b.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:s,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(b.Kw,{component:"div",className:"char__search-error",name:"charName"})]})}),m,d]})};class f extends r.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,o.jsx)(n.A,{}):this.props.children}}const k=f,y=s.p+"static/media/vision.067d4ae1936d64a577ce.png",C=()=>{const[e,a]=(0,r.useState)(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.m,{children:[(0,o.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,o.jsx)("title",{children:"Marvel information portal"})]}),(0,o.jsx)(k,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(k,{children:(0,o.jsx)(j,{onCharSelected:e=>{a(e)}})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(k,{children:(0,o.jsx)(p,{charId:e})}),(0,o.jsx)(k,{children:(0,o.jsx)(N,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(43);const t=()=>{const{loading:e,request:a,error:s,clearError:t}=(()=>{const[e,a]=(0,r.useState)(!1),[s,t]=(0,r.useState)(null);return{loading:e,request:(0,r.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const t=await fetch(e,{method:s,body:r,headers:c});if(!t.ok)throw new Error(`Could not featch ${e}, status: ${t.status}`);const n=await t.json();return a(!1),n}catch(n){throw a(!1),t(n.message),n}}),[]),error:s,clearError:(0,r.useCallback)((()=>t(null)),[])}})(),c="https://gateway.marvel.com:443/v1/public/",n="apikey=129b3670ad033d82bbeb6ea2a1095d5c",i=e=>({id:e.id,name:e.name,description:e.description?`${e.description.slice(0,210)}...`:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?`${e.pageCount} p.`:"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?`${e.prices[0].price}$`:"not available",homepage:e.urls[0].url}};return{loading:e,error:s,clearError:t,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650;return(await a(`${c}characters?limit=9&offset=${e}&${n}`)).data.results.map(i)},getCharacterByName:async e=>(await a(`${c}characters?name=${e}&${n}`)).data.results.map(i),getCharacter:async e=>{const s=await a(`${c}characters/${e}?${n}`);return i(s.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:340;return(await a(`${c}comics?limit=8&offset=${e}&${n}`)).data.results.map(l)},getComic:async e=>{const s=await a(`${c}comics/${e}?${n}`);return l(s.data.results[0])}}}}}]);
//# sourceMappingURL=896.0cbe0474.chunk.js.map