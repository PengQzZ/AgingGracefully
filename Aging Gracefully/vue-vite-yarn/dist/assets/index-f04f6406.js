import{c as m,y as $,t as _,w as f,e as x,z as v,n as y,h as k,P as w,I as N}from"./index-1d524986.js";import{u as z}from"./use-expose-4d3535a4.js";import{a as h,u as A}from"./use-route-650222ba.js";import{B as E}from"./index-81d9fd27.js";import{e as b,r as O,b as i,g as B,m as R}from"./index-4aaa8925.js";import{u as j}from"./use-placeholder-db37aa89.js";const[I,P]=m("action-bar"),g=Symbol(I),F={placeholder:Boolean,safeAreaInsetBottom:_};var K=b({name:I,props:F,setup(e,{slots:t}){const s=O(),n=j(s,P),{linkChildren:a}=$(g);a();const r=()=>{var c;return i("div",{ref:s,class:[P(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(c=t.default)==null?void 0:c.call(t)])};return()=>e.placeholder?n(r):r()}});const X=f(K),[L,T]=m("action-bar-button"),V=x({},h,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Y=b({name:L,props:V,setup(e,{slots:t}){const s=A(),{parent:n,index:a}=v(g),r=B(()=>{if(n){const o=n.children[a.value-1];return!(o&&"isButton"in o)}}),c=B(()=>{if(n){const o=n.children[a.value+1];return!(o&&"isButton"in o)}});return z({isButton:!0}),()=>{const{type:o,icon:d,text:l,color:u,loading:S,disabled:C}=e;return i(E,{class:T([o,{last:c.value,first:r.value}]),size:"large",type:o,icon:d,color:u,loading:S,disabled:C,onClick:s},{default:()=>[t.default?t.default():l]})}}});const Z=f(Y),[q,p]=m("action-bar-icon"),D=x({},h,{dot:Boolean,text:String,icon:String,color:String,badge:y,iconClass:k,badgeProps:Object,iconPrefix:String});var G=b({name:q,props:D,setup(e,{slots:t}){const s=A();v(g);const n=()=>{const{dot:a,badge:r,icon:c,color:o,iconClass:d,badgeProps:l,iconPrefix:u}=e;return t.icon?i(w,R({dot:a,class:p("icon"),content:r},l),{default:t.icon}):i(N,{tag:"div",dot:a,name:c,badge:r,color:o,class:[p("icon"),d],badgeProps:l,classPrefix:u},null)};return()=>i("div",{role:"button",class:p(),tabindex:0,onClick:s},[n(),t.default?t.default():e.text])}});const tt=f(G);export{tt as A,Z as a,X as b};
