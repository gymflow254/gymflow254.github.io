import{_ as h}from"./BEgGxKQA.js";import{o as m,q as v,z as e,V,Y as I,I as M,Z as N,d as T,_ as L,c as $,X as P,Q,w,$ as z,f as W,j as _,x as n,y as r,H as K}from"./DklLZOGC.js";import{_ as G}from"./Cdiy_h4w.js";import{_ as U}from"./TgDKsmv_.js";import{u as O}from"./D7zouZIz.js";const R={props:{title:{type:String,required:!0}},data(){return{isActive:!1}},methods:{toggleAccordion(){this.isActive=!this.isActive}}},X={class:"s-22 w-700"},Y={key:0,class:"accordion-panel"};function Z(i,t,u,c,g,f){return m(),v("li",{class:N(["accordion-item",{"is-active":g.isActive}])},[e("div",{class:"accordion-thumb",onClick:t[0]||(t[0]=(...q)=>f.toggleAccordion&&f.toggleAccordion(...q))},[e("h5",X,V(u.title),1)]),g.isActive?(m(),v("div",Y,[I(i.$slots,"default")])):M("",!0)],2)}const F=h(R,[["render",Z]]),J=T({name:"Tab",props:["title","titleSlot","disabled"]}),ee={class:"tab-panel",role:"tabPanel"},te={class:"tab-content"};function se(i,t,u,c,g,f){return m(),v("div",ee,[e("div",te,[I(i.$slots,"default")])])}const ae=h(J,[["render",se]]),ie=T({name:"Tabs",props:{defaultIndex:{default:0,type:Number},resetTabs:{type:Boolean,default:!1},direction:{type:String,default:"horizontal",validator(i){return["horizontal","vertical"].includes(i)}},position:{type:String,default:"left",validator(i){return["left","start","end","center"].includes(i)}},reverse:{type:Boolean,required:!1,default:!1}},emits:{tabChanged(i){return i!==void 0||i!==null}},setup(i,{emit:t,slots:u,attrs:c}){const{defaultIndex:g,resetTabs:f,position:q,direction:C,reverse:j}=L(i),p=$(0),y=$([]),d=$([]),x=s=>{(s.ctrlKey||s.metaKey)&&parseInt(s.key)-1 in y.value&&(s.preventDefault(),A(s,parseInt(s.key)-1,y.value[parseInt(s.key)-1]))},E=()=>{p.value=0},A=(s,a,l)=>{l||(p.value=a,t("tabChanged",a))};P(()=>{k(),document.addEventListener("keydown",x)}),Q(()=>{document.removeEventListener("keydown",x)}),w(g,(s,a)=>{s!==p.value&&(p.value=s)}),w(f,(s,a)=>{s===!0&&E()}),z(()=>{k()});const k=()=>{d.value.splice(0,d.value.length),u.default().forEach(s=>{s.type.name&&s.type.name==="Tab"?d.value.push(s):s.children.forEach(a=>{a.type.name&&a.type.name==="Tab"&&d.value.push(a)})})},H=s=>{let a=null,l=!1;return u.default().forEach(o=>{l||(o.type==="template"&&o.props.name===s?(a=o.children,l=!0):o.children.length&&o.children.forEach(b=>{l||b.props.name===s&&(a=b.children,l=!0)}))}),a===null?[]:a},B=W(()=>d.value.map((s,a)=>_("div",{class:"tab",style:`display: ${p.value==a?"block":"none"}`},s)));return()=>{const s=[];return d.value.forEach((a,l)=>{const o=a.props,b=o["title-slot"]?H(o["title-slot"]):o.title,S=o.disabled===!0||o.disabled==="";y.value[l]=S,s.push(_("div",{class:p.value===l?"tab-link tab-list__item current":"tab-link tab-list__item",tabIndex:"0",role:"tabItem","aria-selected":p.value===l?"true":"false","aria-disabled":S?"true":"false",onClick:D=>{A(D,l,S)}},b))}),_("div",{class:`tabs ${C.value} ${j.value?"reverse":""}`,role:"tabs"},[_("div",{class:`tab-list ${q.value}`,role:"tabList"},s),...B.value])}}}),ue={},ne={id:"faqs-4",class:"gr--whitesmoke inner-page-hero pb-100 faqs-section division"},le={class:"container"},oe={class:"row justify-content-center"},re={class:"col-lg-11 col-xl-10"};function ce(i,t){const u=F,c=ae,g=ie;return m(),v("section",ne,[e("div",le,[e("div",oe,[e("div",re,[t[8]||(t[8]=e("div",{class:"inner-page-title"},[e("h2",{class:"s-52 w-700"},"How Can We Help?")],-1)),n(g,{class:"Tab-exp1"},{default:r(()=>[n(c,{title:"Getting Started",class:"tab1-test"},{default:r(()=>[n(u,{title:"What is Martex and how does it work?"},{default:r(()=>t[0]||(t[0]=[e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue efficitur and ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1)])),_:1}),n(u,{title:"What's inside the package?"},{default:r(()=>t[1]||(t[1]=[e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas tempor magna undo ipsum vitae purus and efficitur ipsum primis in cubilia laoreet tempor gravida luctus neque purus ipsum neque",-1),e("p",null,"Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet and gestas neque vitae auctor dolor luctus placerat a magna cursus congue magna mpedit ligula undo congue. Maecenas agravida augue porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue, a augue tempor, dictum tempor diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra",-1)])),_:1}),n(u,{title:"General settings"},{default:r(()=>t[2]||(t[2]=[e("p",null,"An augue cubilia laoreet magna suscipit egestas magna ipsum purus ipsum a primis an augue ultrice ligula egestas suscipit lectus gestas integer congue a lectus porta phasellus neque blandit tristique",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna and vehicula",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit lipsum egestas magna ipsum vitae a purus ipsum congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur",-1)])),_:1}),n(u,{title:"Which languages does Martex support?"},{default:r(()=>t[3]||(t[3]=[e("p",null,"An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum primis undo augue ultrice ligula egestas suscipit lectus gestas integer congue a lectus porta tristique phasellus neque a blandit and tristique justo aliquam justo suscipit congue augue egestas volutpat egestas magna sem congue",-1),e("p",null,"An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum primis and augue efficitur ligula egestas suscipit lectus gestas integer congue a lectus porta phasellus neque",-1)])),_:1}),n(u,{title:"Automate testing with API"},{default:r(()=>t[4]||(t[4]=[e("ul",{class:"simple-list"},[e("li",{class:"list-item"},[e("p",null,"Curabitur ac dapibus libero quisque eu congue tristique egestas phasellus blandit tristique justo aliquam. Aliquam vitae molestie quisque sapien justo, aliquet aliquam molestie sed purus undo venenatis tempor gravida eget lacinia. Augue aliquam a suscipit tincidunt tincidunt massa")]),e("li",{class:"list-item"},[e("p",null,"Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis")]),e("li",{class:"list-item"},[e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae an efficitur purus undo ipsum primis in cubilia laoreet augue egestas luctus donec curabitur dapibus libero")])],-1)])),_:1})]),_:1}),n(c,{title:"My Account"},{default:r(()=>t[5]||(t[5]=[e("ul",{class:"simple-list"},[e("li",{class:"list-item"},[e("p",null,"Curabitur ac dapibus libero quisque eu congue tristique egestas phasellus blandit tristique justo aliquam. Aliquam vitae molestie quisque sapien justo, aliquet aliquam molestie sed purus undo venenatis tempor gravida eget lacinia. Augue aliquam a suscipit tincidunt tincidunt massa")]),e("li",{class:"list-item"},[e("p",null,"Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis")]),e("li",{class:"list-item"},[e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae an efficitur purus undo ipsum primis in cubilia laoreet augue egestas luctus donec curabitur dapibus libero")])],-1)])),_:1}),n(c,{title:"Pricing Plans"},{default:r(()=>t[6]||(t[6]=[e("h5",null,"How much does Martex cost?",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae Sagittis congue augue egestas volutpat egestas and magna suscipit an egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae Sagittis congue augue egestas volutpat egestas and magna suscipit an egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae Sagittis congue augue egestas volutpat egestas and magna suscipit an egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1),e("h5",null,"I didn't receive the license key after purchased",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1),e("h5",null,"Do you offer discounts for annual plans?",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1)])),_:1}),n(c,{title:"Other Questions"},{default:r(()=>t[7]||(t[7]=[e("h5",null,"How do I get the error log?",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae Sagittis congue augue egestas volutpat egestas and magna suscipit an egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1),e("h5",null,"I forgot my folder password, what should I do?",-1),e("p",null,"Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus",-1)])),_:1})]),_:1})])])])])}const ge=h(ue,[["render",ce]]),pe={},de={id:"banner-9",class:"bg--02 py-70 x-border banner-section"},me={class:"container"},ve={class:"banner-7-wrapper"},fe={class:"row justify-content-center d-flex align-items-center"},be={class:"col-md-7 col-xl-5"},_e={class:"banner-9-txt"};function he(i,t){const u=G;return m(),v("section",de,[e("div",me,[e("div",ve,[e("div",fe,[e("div",be,[e("div",_e,[t[1]||(t[1]=e("h3",{class:"s-40 w-700"},"Still need help?",-1)),t[2]||(t[2]=e("p",{class:"p-lg"},"Don't hesitate to contact us about any question you might be interested in",-1)),n(u,{to:"/contacts",class:"btn r-04 btn--theme hover--theme"},{default:r(()=>t[0]||(t[0]=[K("Ask your question here")])),_:1})])]),t[3]||(t[3]=e("div",{class:"col-md-5 col-xl-5"},[e("div",{class:"banner-9-img text-end"},[e("img",{class:"img-fluid",src:U,alt:"banner-image"})])],-1))])])])])}const qe=h(pe,[["render",he]]),ke={__name:"index",setup(i){return O({bodyAttrs:{class:"navbar-dark navbar-dark-2"}}),(t,u)=>{const c=ge,g=qe;return m(),v("div",null,[n(c),n(g)])}}};export{ke as default};