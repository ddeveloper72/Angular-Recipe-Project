(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("fNgX"),s=t("iutN"),r=t("4BU0");class a{}var d=u.nb({encapsulation:0,styles:[['.lds-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;transform-origin:32px 32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#18adf8;margin:-3px 0 0 -3px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after{top:50px;left:50px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:54px;left:45px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-108ms;animation-delay:-108ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:57px;left:39px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-144ms;animation-delay:-144ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:58px;left:32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:57px;left:25px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-216ms;animation-delay:-216ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:54px;left:19px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-252ms;animation-delay:-252ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:50px;left:14px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-288ms;animation-delay:-288ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}']],data:{}});function c(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,8,"div",[["class","lds-roller"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(7,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var b=t("s7LF");class p{constructor(l){this.viewContainerRef=l}}var g=t("SVse"),m=t("VYMa"),h=t("/WaZ");class v{constructor(l,n){this.componentFactoryResolver=l,this.store=n,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}ngOnInit(){this.storeSubscription=this.store.select("auth").subscribe(l=>{this.isLoading=l.loading,this.error=l.authError,this.error&&this.showErrorAlert(this.error)})}onSubmit(l){if(!l.valid)return;const n=l.value.email,t=l.value.password;this.store.dispatch(this.isLoginMode?new h.k({email:n,password:t}):new h.n({email:n,password:t})),l.reset()}onHandleError(){this.store.dispatch(new h.h)}ngOnDestroy(){this.closeSubscription&&this.closeSubscription.unsubscribe(),this.storeSubscription&&this.storeSubscription.unsubscribe()}showErrorAlert(l){const n=this.componentFactoryResolver.resolveComponentFactory(m.a),t=this.alertHost.viewContainerRef;t.clear();const u=t.createComponent(n);u.instance.message=l,this.closeSubscription=u.instance.close.subscribe(()=>{this.closeSubscription.unsubscribe(),t.clear()})}}var f=t("DQLy"),C=u.nb({encapsulation:0,styles:[[".spinner[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function M(l){return u.Jb(0,[(l()(),u.eb(0,null,null,0))],null,null)}function y(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,2,"div",[["class","spinner"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"app-loading-spinner",[],null,null,null,c,d)),u.ob(2,49152,null,0,a,[],null,null)],null,null)}function P(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var i=!0,o=l.component;return"submit"===n&&(i=!1!==u.Bb(l,2).onSubmit(t)&&i),"reset"===n&&(i=!1!==u.Bb(l,2).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmit(u.Bb(l,2))&&i),i}),null,null)),u.ob(1,16384,null,0,b.D,[],null,null),u.ob(2,4210688,[["authForm",4]],0,b.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u.Eb(2048,null,b.b,null,[b.t]),u.ob(4,16384,null,0,b.s,[[4,b.b]],null,null),(l()(),u.pb(5,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),u.Hb(-1,null,["E-Mail"])),(l()(),u.pb(8,0,null,null,8,"input",[["class","form-control"],["email",""],["id","email"],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var i=!0;return"input"===n&&(i=!1!==u.Bb(l,9)._handleInput(t.target.value)&&i),"blur"===n&&(i=!1!==u.Bb(l,9).onTouched()&&i),"compositionstart"===n&&(i=!1!==u.Bb(l,9)._compositionStart()&&i),"compositionend"===n&&(i=!1!==u.Bb(l,9)._compositionEnd(t.target.value)&&i),i}),null,null)),u.ob(9,16384,null,0,b.c,[u.B,u.k,[2,b.a]],null,null),u.ob(10,16384,null,0,b.y,[],{required:[0,"required"]},null),u.ob(11,16384,null,0,b.d,[],{email:[0,"email"]},null),u.Eb(1024,null,b.o,(function(l,n){return[l,n]}),[b.y,b.d]),u.Eb(1024,null,b.p,(function(l){return[l]}),[b.c]),u.ob(14,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),u.Eb(2048,null,b.q,null,[b.u]),u.ob(16,16384,null,0,b.r,[[4,b.q]],null,null),(l()(),u.pb(17,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(18,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),u.Hb(-1,null,["Password"])),(l()(),u.pb(20,0,null,null,8,"input",[["class","form-control"],["id","password"],["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var i=!0;return"input"===n&&(i=!1!==u.Bb(l,21)._handleInput(t.target.value)&&i),"blur"===n&&(i=!1!==u.Bb(l,21).onTouched()&&i),"compositionstart"===n&&(i=!1!==u.Bb(l,21)._compositionStart()&&i),"compositionend"===n&&(i=!1!==u.Bb(l,21)._compositionEnd(t.target.value)&&i),i}),null,null)),u.ob(21,16384,null,0,b.c,[u.B,u.k,[2,b.a]],null,null),u.ob(22,16384,null,0,b.y,[],{required:[0,"required"]},null),u.ob(23,540672,null,0,b.n,[],{minlength:[0,"minlength"]},null),u.Eb(1024,null,b.o,(function(l,n){return[l,n]}),[b.y,b.n]),u.Eb(1024,null,b.p,(function(l){return[l]}),[b.c]),u.ob(26,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),u.Eb(2048,null,b.q,null,[b.u]),u.ob(28,16384,null,0,b.r,[[4,b.q]],null,null),(l()(),u.pb(29,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.pb(30,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u.Hb(31,null,[" ",""])),(l()(),u.Hb(-1,null,[" | "])),(l()(),u.pb(33,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onSwitchMode()&&u),u}),null,null)),(l()(),u.Hb(34,null,["Switch to ",""]))],(function(l,n){l(n,10,0,""),l(n,11,0,""),l(n,14,0,"email",""),l(n,22,0,""),l(n,23,0,"6"),l(n,26,0,"password","")}),(function(l,n){var t=n.component;l(n,0,0,u.Bb(n,4).ngClassUntouched,u.Bb(n,4).ngClassTouched,u.Bb(n,4).ngClassPristine,u.Bb(n,4).ngClassDirty,u.Bb(n,4).ngClassValid,u.Bb(n,4).ngClassInvalid,u.Bb(n,4).ngClassPending),l(n,8,0,u.Bb(n,10).required?"":null,u.Bb(n,16).ngClassUntouched,u.Bb(n,16).ngClassTouched,u.Bb(n,16).ngClassPristine,u.Bb(n,16).ngClassDirty,u.Bb(n,16).ngClassValid,u.Bb(n,16).ngClassInvalid,u.Bb(n,16).ngClassPending),l(n,20,0,u.Bb(n,22).required?"":null,u.Bb(n,23).minlength?u.Bb(n,23).minlength:null,u.Bb(n,28).ngClassUntouched,u.Bb(n,28).ngClassTouched,u.Bb(n,28).ngClassPristine,u.Bb(n,28).ngClassDirty,u.Bb(n,28).ngClassValid,u.Bb(n,28).ngClassInvalid,u.Bb(n,28).ngClassPending),l(n,30,0,!u.Bb(n,2).valid),l(n,31,0,t.isLoginMode?"Login":"Sign Up"),l(n,34,0,t.isLoginMode?"Sign Up":"Login")}))}function _(l){return u.Jb(0,[u.Fb(671088640,1,{alertHost:0}),(l()(),u.pb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,6,"div",[["class","col-sm-12 col-md-6 offset-md-3 mt-3"]],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,M)),u.ob(4,16384,[[1,4]],0,p,[u.M],null,null),(l()(),u.eb(16777216,null,null,1,null,y)),u.ob(6,16384,null,0,g.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.eb(16777216,null,null,1,null,P)),u.ob(8,16384,null,0,g.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,6,0,t.isLoading),l(n,8,0,!t.isLoading)}),null)}function B(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,1,"app-auth",[],null,null,null,_,C)),u.ob(1,245760,null,0,v,[u.j,f.m],null,null)],(function(l,n){l(n,1,0)}),null)}var O=u.lb("app-auth",v,B,{},{},[]),w=t("2uy1"),x=t("z/SZ"),k=t("FE24"),S=t("iInd"),z=t("Nv++"),E=t("PCNd");t.d(n,"AuthModuleNgFactory",(function(){return q}));var q=u.mb(i,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,e.b,e.a,s.a,r.a,O]],[3,u.j],u.v]),u.zb(4608,g.l,g.k,[u.s,[2,g.s]]),u.zb(4608,b.B,b.B,[]),u.zb(4608,w.a,w.a,[u.C,u.z]),u.zb(4608,x.a,x.a,[u.j,u.x,u.p,w.a,u.g]),u.zb(4608,k.f,k.f,[]),u.zb(1073742336,g.c,g.c,[]),u.zb(1073742336,b.A,b.A,[]),u.zb(1073742336,b.m,b.m,[]),u.zb(1073742336,S.o,S.o,[[2,S.t],[2,S.k]]),u.zb(1073742336,z.j,z.j,[]),u.zb(1073742336,k.e,k.e,[]),u.zb(1073742336,E.a,E.a,[]),u.zb(1073742336,i,i,[]),u.zb(256,k.a,{autoClose:!0,insideClick:!1},[]),u.zb(1024,S.i,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);