(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cAcB:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),i=function(){return function(){}}(),e=t("pMnS"),o=t("fNgX"),r=t("iutN"),s=t("4BU0"),a=function(){return function(){}}(),d=u.pb({encapsulation:0,styles:[['.lds-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;-webkit-transform-origin:32px 32px;transform-origin:32px 32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#18adf8;margin:-3px 0 0 -3px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after{top:50px;left:50px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:54px;left:45px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-108ms;animation-delay:-108ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:57px;left:39px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-144ms;animation-delay:-144ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:58px;left:32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:57px;left:25px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-216ms;animation-delay:-216ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:54px;left:19px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-252ms;animation-delay:-252ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:50px;left:14px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-288ms;animation-delay:-288ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-roller{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}']],data:{}});function c(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,8,"div",[["class","lds-roller"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(2,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(3,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(4,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(5,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(6,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(7,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u.rb(8,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var b=t("gIcY"),g=function(){return function(n){this.viewContainerRef=n}}(),p=t("Ip0R"),m=t("VYMa"),h=t("/WaZ"),f=function(){function n(n,l){this.componentFactoryResolver=n,this.store=l,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return n.prototype.onSwitchMode=function(){this.isLoginMode=!this.isLoginMode},n.prototype.ngOnInit=function(){var n=this;this.storeSubscription=this.store.select("auth").subscribe(function(l){n.isLoading=l.loading,n.error=l.authError,n.error&&n.showErrorAlert(n.error)})},n.prototype.onSubmit=function(n){if(n.valid){var l=n.value.email,t=n.value.password;this.store.dispatch(this.isLoginMode?new h.k({email:l,password:t}):new h.n({email:l,password:t})),n.reset()}},n.prototype.onHandleError=function(){this.store.dispatch(new h.h)},n.prototype.ngOnDestroy=function(){this.closeSubscription&&this.closeSubscription.unsubscribe(),this.storeSubscription&&this.storeSubscription.unsubscribe()},n.prototype.showErrorAlert=function(n){var l=this,t=this.componentFactoryResolver.resolveComponentFactory(m.a),u=this.alertHost.viewContainerRef;u.clear();var i=u.createComponent(t);i.instance.message=n,this.closeSubscription=i.instance.close.subscribe(function(){l.closeSubscription.unsubscribe(),u.clear()})},n}(),v=t("yGQT"),C=u.pb({encapsulation:0,styles:[[".spinner[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function M(n){return u.Lb(0,[(n()(),u.gb(0,null,null,0))],null,null)}function y(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,2,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"app-loading-spinner",[],null,null,null,c,d)),u.qb(2,49152,null,0,a,[],null,null)],null,null)}function P(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var i=!0,e=n.component;return"submit"===l&&(i=!1!==u.Db(n,2).onSubmit(t)&&i),"reset"===l&&(i=!1!==u.Db(n,2).onReset()&&i),"ngSubmit"===l&&(i=!1!==e.onSubmit(u.Db(n,2))&&i),i},null,null)),u.qb(1,16384,null,0,b.D,[],null,null),u.qb(2,4210688,[["authForm",4]],0,b.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u.Gb(2048,null,b.b,null,[b.t]),u.qb(4,16384,null,0,b.s,[[4,b.b]],null,null),(n()(),u.rb(5,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.rb(6,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["E-Mail"])),(n()(),u.rb(8,0,null,null,8,"input",[["class","form-control"],["email",""],["id","email"],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0;return"input"===l&&(i=!1!==u.Db(n,9)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==u.Db(n,9).onTouched()&&i),"compositionstart"===l&&(i=!1!==u.Db(n,9)._compositionStart()&&i),"compositionend"===l&&(i=!1!==u.Db(n,9)._compositionEnd(t.target.value)&&i),i},null,null)),u.qb(9,16384,null,0,b.c,[u.D,u.k,[2,b.a]],null,null),u.qb(10,16384,null,0,b.y,[],{required:[0,"required"]},null),u.qb(11,16384,null,0,b.d,[],{email:[0,"email"]},null),u.Gb(1024,null,b.o,function(n,l){return[n,l]},[b.y,b.d]),u.Gb(1024,null,b.p,function(n){return[n]},[b.c]),u.qb(14,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),u.Gb(2048,null,b.q,null,[b.u]),u.qb(16,16384,null,0,b.r,[[4,b.q]],null,null),(n()(),u.rb(17,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.rb(18,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["Password"])),(n()(),u.rb(20,0,null,null,8,"input",[["class","form-control"],["id","password"],["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var i=!0;return"input"===l&&(i=!1!==u.Db(n,21)._handleInput(t.target.value)&&i),"blur"===l&&(i=!1!==u.Db(n,21).onTouched()&&i),"compositionstart"===l&&(i=!1!==u.Db(n,21)._compositionStart()&&i),"compositionend"===l&&(i=!1!==u.Db(n,21)._compositionEnd(t.target.value)&&i),i},null,null)),u.qb(21,16384,null,0,b.c,[u.D,u.k,[2,b.a]],null,null),u.qb(22,16384,null,0,b.y,[],{required:[0,"required"]},null),u.qb(23,540672,null,0,b.n,[],{minlength:[0,"minlength"]},null),u.Gb(1024,null,b.o,function(n,l){return[n,l]},[b.y,b.n]),u.Gb(1024,null,b.p,function(n){return[n]},[b.c]),u.qb(26,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),u.Gb(2048,null,b.q,null,[b.u]),u.qb(28,16384,null,0,b.r,[[4,b.q]],null,null),(n()(),u.rb(29,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),u.rb(30,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.Jb(31,null,[" ",""])),(n()(),u.Jb(-1,null,[" | "])),(n()(),u.rb(33,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onSwitchMode()&&u),u},null,null)),(n()(),u.Jb(34,null,["Switch to ",""]))],function(n,l){n(l,10,0,""),n(l,11,0,""),n(l,14,0,"email",""),n(l,22,0,""),n(l,23,0,"6"),n(l,26,0,"password","")},function(n,l){var t=l.component;n(l,0,0,u.Db(l,4).ngClassUntouched,u.Db(l,4).ngClassTouched,u.Db(l,4).ngClassPristine,u.Db(l,4).ngClassDirty,u.Db(l,4).ngClassValid,u.Db(l,4).ngClassInvalid,u.Db(l,4).ngClassPending),n(l,8,0,u.Db(l,10).required?"":null,u.Db(l,16).ngClassUntouched,u.Db(l,16).ngClassTouched,u.Db(l,16).ngClassPristine,u.Db(l,16).ngClassDirty,u.Db(l,16).ngClassValid,u.Db(l,16).ngClassInvalid,u.Db(l,16).ngClassPending),n(l,20,0,u.Db(l,22).required?"":null,u.Db(l,23).minlength?u.Db(l,23).minlength:null,u.Db(l,28).ngClassUntouched,u.Db(l,28).ngClassTouched,u.Db(l,28).ngClassPristine,u.Db(l,28).ngClassDirty,u.Db(l,28).ngClassValid,u.Db(l,28).ngClassInvalid,u.Db(l,28).ngClassPending),n(l,30,0,!u.Db(l,2).valid),n(l,31,0,t.isLoginMode?"Login":"Sign Up"),n(l,34,0,t.isLoginMode?"Sign Up":"Login")})}function D(n){return u.Lb(0,[u.Hb(671088640,1,{alertHost:0}),(n()(),u.rb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.rb(2,0,null,null,6,"div",[["class","col-sm-12 col-md-6 offset-md-3 mt-3"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,M)),u.qb(4,16384,[[1,4]],0,g,[u.O],null,null),(n()(),u.gb(16777216,null,null,1,null,y)),u.qb(6,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,P)),u.qb(8,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,6,0,t.isLoading),n(l,8,0,!t.isLoading)},null)}function _(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,1,"app-auth",[],null,null,null,D,C)),u.qb(1,245760,null,0,f,[u.j,v.l],null,null)],function(n,l){n(l,1,0)},null)}var w=u.nb("app-auth",f,_,{},{},[]),O=t("NJnL"),q=t("lqqz"),k=t("xtZt"),x=t("ZYCi"),S=t("Hf/j"),B=t("PCNd");t.d(l,"AuthModuleNgFactory",function(){return L});var L=u.ob(i,[],function(n){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[e.a,o.b,o.a,r.a,s.a,w]],[3,u.j],u.x]),u.Bb(4608,p.l,p.k,[u.u,[2,p.s]]),u.Bb(4608,b.B,b.B,[]),u.Bb(4608,O.a,O.a,[u.E,u.B]),u.Bb(4608,q.a,q.a,[u.j,u.z,u.q,O.a,u.g]),u.Bb(4608,k.f,k.f,[]),u.Bb(1073742336,p.c,p.c,[]),u.Bb(1073742336,b.A,b.A,[]),u.Bb(1073742336,b.m,b.m,[]),u.Bb(1073742336,x.o,x.o,[[2,x.t],[2,x.k]]),u.Bb(1073742336,S.j,S.j,[]),u.Bb(1073742336,k.e,k.e,[]),u.Bb(1073742336,B.a,B.a,[]),u.Bb(1073742336,i,i,[]),u.Bb(256,k.a,{autoClose:!0,insideClick:!1},[]),u.Bb(1024,x.i,function(){return[[{path:"",component:f}]]},[])])})}}]);