import{x as r,a5 as a}from"./index-1d524986.js";function e(l,{args:t=[],done:i,canceled:s}){if(l){const f=l.apply(null,t);r(f)?f.then(o=>{o?i():s&&s()}).catch(a):f?i():s&&s()}else i()}export{e as c};
