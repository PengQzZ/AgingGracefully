import{r as u,a as h,o as x,c as k,b as o,s,w as r,F as y,ab as F,d as i}from"./index-4aaa8925.js";import{c as B,C}from"./user-f59733cb.js";import{N}from"./index-493d2ab5.js";import{s as U,c}from"./function-call-c8e6cc7f.js";import{F as q}from"./index-82b0d191.js";import{F as R}from"./index-2366480c.js";import{B as S}from"./index-81d9fd27.js";import"./index-1d524986.js";import"./serviceAxios-fb88dc5b.js";import"./use-placeholder-db37aa89.js";import"./on-popup-reopen-bc1917c0.js";import"./use-expose-4d3535a4.js";import"./index-098f33cf.js";import"./interceptor-e50a7bfa.js";import"./index-0401c95d.js";import"./index-9335d5c9.js";import"./use-route-650222ba.js";const T={class:"form-box"},L={style:{margin:"16px"}},z={class:"right side-margin"},ee={__name:"Regist",setup(E){const d=()=>history.back(),p=u(""),l=u(""),n=u(""),_=a=>(console.log(l),l.value==n.value?!0:"两次密码不一致"),g=a=>{console.log("submit",a),B(a).then(e=>{console.log(e.code),e.code==0?(console.log("成功跳转到xxx页面"),U({message:"zhu注册成功"}),F.push({name:"login"})):(console.log("失败 ",e.message),c("注册失败"))}).catch(e=>{console.log(res.code),console.log("出错了0001",e),c({message:e,position:top})})};return(a,e)=>{const f=N,m=R,v=C,b=S,w=h("router-link"),V=q;return x(),k(y,null,[o(f,{title:"老来俏注册","left-text":"返回","left-arrow":"",onClickLeft:d}),s("section",null,[s("div",T,[o(V,{onSubmit:g},{default:r(()=>[o(v,{inset:""},{default:r(()=>[o(m,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=t=>p.value=t),name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),o(m,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),type:"password",name:"password",label:"输入密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]),o(m,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),type:"password",name:"re_password",label:"再次输入",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{validator:_,message:"两次密码输入不一致"}]},null,8,["modelValue","rules"])]),_:1}),s("div",L,[o(b,{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[i(" 提交 ")]),_:1})]),s("div",z,[s("p",null,[i(" 已有账号，去"),o(w,{to:"/login"},{default:r(()=>[i("登入")]),_:1})])])]),_:1})])])],64)}}};export{ee as default};