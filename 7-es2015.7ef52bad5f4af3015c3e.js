(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ZPmh:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("fNgX"),o=u("iutN"),s=u("4BU0"),r=u("pMnS"),a=u("s7LF"),b=u("SVse"),c=u("9rNa"),d=u("sPvp");class p{constructor(l){this.store=l,this.editMode=!1}ngOnInit(){this.subscription=this.store.select("shoppingList").subscribe(l=>{l.editedIngredientIndex>-1?(this.editMode=!0,this.editedItem=l.editedIngredient,this.shoppingListForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})):this.editMode=!1})}onAddItem(l){const n=l.value,u=new c.a(n.name,n.amount);this.store.dispatch(this.editMode?new d.l(u):new d.c(u)),this.editMode=!1,l.reset()}onClear(){this.shoppingListForm.reset(),this.editMode=!1,this.store.dispatch(new d.j)}onDelete(){this.store.dispatch(new d.f),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe(),this.store.dispatch(new d.j)}}var g=u("DQLy"),m=t.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Delete"]))],null,null)}function v(l){return t.Jb(0,[t.Fb(671088640,1,{shoppingListForm:0}),(l()(),t.pb(1,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,38,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,37,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.Bb(l,5).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Bb(l,5).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.onAddItem(t.Bb(l,5))&&e),e},null,null)),t.ob(4,16384,null,0,a.D,[],null,null),t.ob(5,4210688,[[1,4],["f",4]],0,a.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Eb(2048,null,a.b,null,[a.t]),t.ob(7,16384,null,0,a.s,[[4,a.b]],null,null),(l()(),t.pb(8,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,10,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Name"])),(l()(),t.pb(12,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Bb(l,13)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,13).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,13)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,13)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(13,16384,null,0,a.c,[t.B,t.k,[2,a.a]],null,null),t.ob(14,16384,null,0,a.y,[],{required:[0,"required"]},null),t.Eb(1024,null,a.o,function(l){return[l]},[a.y]),t.Eb(1024,null,a.p,function(l){return[l]},[a.c]),t.ob(17,671744,null,0,a.u,[[2,a.b],[6,a.o],[8,null],[6,a.p]],{name:[0,"name"],model:[1,"model"]},null),t.Eb(2048,null,a.q,null,[a.u]),t.ob(19,16384,null,0,a.r,[[4,a.q]],null,null),(l()(),t.pb(20,0,null,null,12,"div",[["class","col-sm-2 form-group"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"label",[["for","amount"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Amount"])),(l()(),t.pb(23,0,null,null,9,"input",[["class","form-control"],["id","amount"],["name","amount"],["ngModel",""],["pattern","^[1-9]+[0-9]*$"],["required",""],["type","number"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Bb(l,24)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,24).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,24)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,24)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Bb(l,25).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Bb(l,25).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,25).onTouched()&&e),e},null,null)),t.ob(24,16384,null,0,a.c,[t.B,t.k,[2,a.a]],null,null),t.ob(25,16384,null,0,a.v,[t.B,t.k],null,null),t.ob(26,16384,null,0,a.y,[],{required:[0,"required"]},null),t.ob(27,540672,null,0,a.w,[],{pattern:[0,"pattern"]},null),t.Eb(1024,null,a.o,function(l,n){return[l,n]},[a.y,a.w]),t.Eb(1024,null,a.p,function(l,n){return[l,n]},[a.c,a.v]),t.ob(30,671744,null,0,a.u,[[2,a.b],[6,a.o],[8,null],[6,a.p]],{name:[0,"name"],model:[1,"model"]},null),t.Eb(2048,null,a.q,null,[a.u]),t.ob(32,16384,null,0,a.r,[[4,a.q]],null,null),(l()(),t.pb(33,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,6,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,1,"button",[["class","btn btn-success mr-2"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Hb(36,null,["",""])),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(38,16384,null,0,b.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(39,0,null,null,1,"button",[["class","btn btn-primary ml-2"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClear()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Clear"]))],function(l,n){var u=n.component;l(n,14,0,""),l(n,17,0,"name",""),l(n,26,0,""),l(n,27,0,"^[1-9]+[0-9]*$"),l(n,30,0,"amount",""),l(n,38,0,u.editMode)},function(l,n){var u=n.component;l(n,3,0,t.Bb(n,7).ngClassUntouched,t.Bb(n,7).ngClassTouched,t.Bb(n,7).ngClassPristine,t.Bb(n,7).ngClassDirty,t.Bb(n,7).ngClassValid,t.Bb(n,7).ngClassInvalid,t.Bb(n,7).ngClassPending),l(n,12,0,t.Bb(n,14).required?"":null,t.Bb(n,19).ngClassUntouched,t.Bb(n,19).ngClassTouched,t.Bb(n,19).ngClassPristine,t.Bb(n,19).ngClassDirty,t.Bb(n,19).ngClassValid,t.Bb(n,19).ngClassInvalid,t.Bb(n,19).ngClassPending),l(n,23,0,t.Bb(n,26).required?"":null,t.Bb(n,27).pattern?t.Bb(n,27).pattern:null,t.Bb(n,32).ngClassUntouched,t.Bb(n,32).ngClassTouched,t.Bb(n,32).ngClassPristine,t.Bb(n,32).ngClassDirty,t.Bb(n,32).ngClassValid,t.Bb(n,32).ngClassInvalid,t.Bb(n,32).ngClassPending),l(n,35,0,!t.Bb(n,5).valid),l(n,36,0,u.editMode?"Update":"Add")})}class B{constructor(l){this.store=l}ngOnInit(){this.ingredients=this.store.select("shoppingList")}onEditItem(l){this.store.dispatch(new d.i(l))}ngOnDestroy(){}}var f=t.nb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"a",[["class","list-group-item"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onEditItem(l.context.index)&&t),t},null,null)),(l()(),t.Hb(1,null,[""," (",")"]))],null,function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.amount)})}function y(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"app-shopping-edit",[],null,null,null,v,m)),t.ob(3,245760,null,0,p,[g.l],null,null),(l()(),t.pb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,3,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,2,null,C)),t.ob(7,278528,null,0,b.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,b.b,[t.h])],function(l,n){var u=n.component;l(n,3,0),l(n,7,0,t.Ib(n,7,0,t.Bb(n,8).transform(u.ingredients)).ingredients)},null)}function I(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-shopping-list",[],null,null,null,y,f)),t.ob(1,245760,null,0,B,[g.l],null,null)],function(l,n){l(n,1,0)},null)}var w=t.lb("app-shopping-list",B,I,{},{},[]),z=u("2uy1"),q=u("z/SZ"),k=u("FE24"),M=u("Nv++"),E=u("PCNd"),D=u("iInd");u.d(n,"ShoppingListModuleNgFactory",function(){return S});var S=t.mb(e,[],function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[i.b,i.a,o.a,s.a,r.a,w]],[3,t.j],t.v]),t.zb(4608,b.l,b.k,[t.s,[2,b.s]]),t.zb(4608,z.a,z.a,[t.C,t.z]),t.zb(4608,q.a,q.a,[t.j,t.x,t.p,z.a,t.g]),t.zb(4608,k.f,k.f,[]),t.zb(4608,a.B,a.B,[]),t.zb(1073742336,b.c,b.c,[]),t.zb(1073742336,M.j,M.j,[]),t.zb(1073742336,k.e,k.e,[]),t.zb(1073742336,E.a,E.a,[]),t.zb(1073742336,a.A,a.A,[]),t.zb(1073742336,a.m,a.m,[]),t.zb(1073742336,D.o,D.o,[[2,D.t],[2,D.k]]),t.zb(1073742336,e,e,[]),t.zb(256,k.a,{autoClose:!0,insideClick:!1},[]),t.zb(1024,D.i,function(){return[[{path:"",component:B}]]},[])])})}}]);