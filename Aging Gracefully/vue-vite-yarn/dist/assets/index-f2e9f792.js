import{c as h,m as b,g as y,t as I,I as P,w as T}from"./index-1d524986.js";import{B as A}from"./index-81d9fd27.js";import{u as C}from"./use-placeholder-db37aa89.js";import{e as k,r as L,b as t}from"./index-4aaa8925.js";const[N,e,_]=h("submit-bar"),w={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:b("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:b("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:y(2),safeAreaInsetBottom:I};var F=k({name:N,props:w,emits:["submit"],setup(n,{emit:m,slots:a}){const l=L(),p=C(l,e),f=()=>{const{price:r,label:i,currency:o,textAlign:v,suffixLabel:s,decimalLength:u}=n;if(typeof r=="number"){const d=(r/100).toFixed(+u).split("."),S=u?`.${d[1]}`:"";return t("div",{class:e("text"),style:{textAlign:v}},[t("span",null,[i||_("label")]),t("span",{class:e("price")},[o,t("span",{class:e("price-integer")},[d[0]]),S]),s&&t("span",{class:e("suffix-label")},[s])])}},g=()=>{var r;const{tip:i,tipIcon:o}=n;if(a.tip||i)return t("div",{class:e("tip")},[o&&t(P,{class:e("tip-icon"),name:o},null),i&&t("span",{class:e("tip-text")},[i]),(r=a.tip)==null?void 0:r.call(a)])},x=()=>m("submit"),B=()=>a.button?a.button():t(A,{round:!0,type:n.buttonType,text:n.buttonText,class:e("button",n.buttonType),color:n.buttonColor,loading:n.loading,disabled:n.disabled,onClick:x},null),c=()=>{var r,i;return t("div",{ref:l,class:[e(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(r=a.top)==null?void 0:r.call(a),g(),t("div",{class:e("bar")},[(i=a.default)==null?void 0:i.call(a),f(),B()])])};return()=>n.placeholder?p(c):c()}});const z=T(F);export{z as S};
