import{ag as s}from"./index-4aaa8925.js";import{l as r,a as n}from"./user-f59733cb.js";const g=s("users",{state:()=>({name:"",age:0,avator:"",token:"token"}),getters:{getAge:function(){return this.age+100},getAge2:e=>e.age+100,getName:function(){return this.name}},actions:{saveName(e){this.name=e},saveToken(e){this.token=e},clearUserData(){this.name="",this.token="",this.avator=""},login(e){return new Promise(t=>{r(e).then(a=>{this.saveName(a.data.username),this.saveToken(a.data.token),t(a)})})},logout(){return new Promise(e=>{n({token:this.token}).then(t=>{this.clearUserData(),e(t)})})}},persist:{enabled:!0,strategies:[{key:"my_user",storage:localStorage}]}});export{g as u};
