import{r as c,a as S,o as F,c as q,b as o,s as t,w as i,F as B,ab as a,u as d,i as _,d as m,a3 as C,a4 as I}from"./index-4aaa8925.js";import{C as L}from"./user-f59733cb.js";import{I as N}from"./index-371a1e32.js";import{N as R}from"./index-493d2ab5.js";import{u as T}from"./user-3e3db9dc.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{c as f,s as j}from"./function-call-c8e6cc7f.js";import{F as D}from"./index-82b0d191.js";import{F as E}from"./index-2366480c.js";import{B as G}from"./index-81d9fd27.js";import"./index-1d524986.js";import"./serviceAxios-fb88dc5b.js";import"./use-placeholder-db37aa89.js";import"./on-popup-reopen-bc1917c0.js";import"./use-expose-4d3535a4.js";import"./index-098f33cf.js";import"./interceptor-e50a7bfa.js";import"./index-0401c95d.js";import"./index-9335d5c9.js";import"./use-route-650222ba.js";const z=r=>(C("data-v-165e1007"),r=r(),I(),r),A=z(()=>t("div",{id:"building",class:".aaa"},null,-1)),H={class:"upLoad-btn"},J={class:"center"},K={style:{margin:"16px"}},M={class:"element"},O={__name:"Login",setup(r){const g=()=>history.back();var n=c(""),l=c("");const v=T(),h=p=>{console.log("login 这是登入"),v.login(p).then(e=>{e.code!=0?(f({message:e.message,position:"top"}),console.log("用户登录失败")):(j({message:"用户登录成功",position:"top"}),a.currentRoute.value.query.redirect?(console.log(a.currentRoute.value.query.redirect),a.push(a.currentRoute.value.query.redirect)):(a.push({name:"home",query:{date:new Date().getTime()}}),console.log("登录成功")))}).catch(e=>{f({message:e,position:"top"})})};return(p,e)=>{const b=R,y=N,u=E,w=L,x=G,V=S("router-link"),k=D;return F(),q(B,null,[o(b,{title:"老来俏登入","left-text":"返回","left-arrow":"",onClickLeft:g}),A,t("div",H,[t("div",J,[o(y,{round:"",width:"90px",height:"90px",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]),o(k,{onSubmit:h},{default:i(()=>[o(w,{inset:""},{default:i(()=>[o(u,{modelValue:d(n),"onUpdate:modelValue":e[0]||(e[0]=s=>_(n)?n.value=s:n=s),name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),o(u,{modelValue:d(l),"onUpdate:modelValue":e[1]||(e[1]=s=>_(l)?l.value=s:l=s),type:"password",name:"password",label:"输入密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])]),_:1}),t("div",K,[o(x,{round:"",block:"",type:"primary","native-type":"submit"},{default:i(()=>[m(" 登入 ")]),_:1})]),t("div",M,[t("p",null,[m(" 没有账号，去"),o(V,{to:"/regist"},{default:i(()=>[m("注册")]),_:1})])])]),_:1})])],64)}}},de=U(O,[["__scopeId","data-v-165e1007"]]);export{de as default};