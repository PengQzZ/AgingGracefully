import{r as c,f as m,e as f,b as o,T as v,q as y,y as h}from"./index-4aaa8925.js";import{c as w,u as z,n as r,h as S,t as l,e as x,N,s as D,a as I,w as O}from"./index-1d524986.js";function P(e){const t=c(!1);return m(e,a=>{a&&(t.value=a)},{immediate:!0}),a=>()=>t.value?a():null}const[R,b]=w("overlay"),k={show:Boolean,zIndex:r,duration:r,className:S,lockScroll:l,lazyRender:l,customStyle:Object};var T=f({name:R,props:k,setup(e,{slots:t}){const a=c(),u=P(()=>e.show||!e.lazyRender),i=n=>{e.lockScroll&&I(n,!0)},d=u(()=>{var n;const s=x(N(e.zIndex),e.customStyle);return D(e.duration)&&(s.animationDuration=`${e.duration}s`),y(o("div",{ref:a,style:s,class:[b(),e.className]},[(n=t.default)==null?void 0:n.call(t)]),[[h,e.show]])});return z("touchmove",i,{target:a}),()=>o(v,{name:"van-fade",appear:!0},{default:d})}});const _=O(T);export{_ as O,P as u};