(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{hf3x:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=e("t/Na"),i=e("ZYCi"),r=(e("OO+k"),e("HNzf")),o=e("J/mm"),c=e("e8Qb"),a=e("f+iR"),s=function(n,l,e,t){return new(e||(e=Promise))(function(u,i){function r(n){try{c(t.next(n))}catch(l){i(l)}}function o(n){try{c(t.throw(n))}catch(l){i(l)}}function c(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(r,o)}c((t=t.apply(n,l||[])).next())})},b=function(n,l){var e,t,u,i,r={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,t&&(u=2&i[0]?t.return:i[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,i[1])).done)return u;switch(t=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(u=(u=r.trys).length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){r.label=i[1];break}if(6===i[0]&&r.label<u[1]){r.label=u[1],u=i;break}if(u&&r.label<u[2]){r.label=u[2],r.ops.push(i);break}u[2]&&r.ops.pop(),r.trys.pop();continue}i=l.call(n,r)}catch(o){i=[6,o],t=0}finally{e=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},p=function(){function n(n,l,e,t,r){var c=this;this.appService=n,this.nativeStorage=l,this.router=e,this.httpClient=t,this.toastController=r,this.currentUser=null,this.newsitems=[],this.mainTitle="",Object(a.b)("NewsfeedPage#constructor"),n.setTitle("Newsfeed"),this.mainTitle="Newsfeed",this.nativeStorage.getItem("current_user").then(function(n){return JSON.parse(n)}).then(function(n){return s(c,void 0,void 0,function(){var l,e;return b(this,function(t){switch(t.label){case 0:if(Object(a.b)(n,"data 6"),this.currentUser=n,"facebook"!=n.type)return[3,2];if(l=new u.g,n.longTermToken)l=(new u.g).set("accessToken",n.longTermToken);else{if(!n.accessToken)throw"neither longTermToken nor accessToken";l=(new u.g).set("accessToken",n.accessToken)}return[4,this.httpClient.get(o.a.newsitems,{params:l}).toPromise()];case 1:return e=t.sent(),this.newsitems=e.newsitems,[3,3];case 2:throw"Only fb login is supported (missing)";case 3:return[2]}})})},function(n){return s(c,void 0,void 0,function(){return b(this,function(l){switch(l.label){case 0:return console.log("+++ newsfeed doesnt have current_user:",n),[4,this.toastController.create({message:"You are not logged in - please login.",duration:2e3})];case 1:return l.sent().present(),[2]}})})}),e.events.subscribe(function(n){n instanceof i.d&&c.ngOnInit()})}return n.prototype.ngOnInit=function(){var n=this;this.appService.currentMessage.subscribe(function(l){console.log("+++ new message:",l),l==a.a.didLogin&&n.render()})},n.prototype.render=function(){var n=this;Object(a.b)("newsfeed.page#render"),this.nativeStorage.getItem("current_user").then(function(n){return JSON.parse(n)}).then(function(l){if(Object(a.b)(l,"current_user 5"),n.currentUser=l,"facebook"==l.type){var e=(new u.g).set("accessToken",l.accessToken);n.httpClient.get(o.a.newsitems,{params:e}).subscribe(function(l){l.newsitems&&(n.newsitems=l.newsitems)},function(l){return s(n,void 0,void 0,function(){return b(this,function(n){switch(n.label){case 0:return console.log("+++ error from m3 1-:",JSON.stringify(l)),[4,this.toastController.create({message:"The token has expired? Please login.",duration:2e3})];case 1:return n.sent().present(),[2]}})})})}},function(l){return s(n,void 0,void 0,function(){return b(this,function(n){switch(n.label){case 0:return console.log("+++ newsfeed doesnt have current_user:",l),[4,this.toastController.create({message:"You are not logged in - please login.",duration:2e3})];case 1:return n.sent().present(),[2]}})})})},n.prototype.ionViewDidLoad=function(){console.log("+++ newsfeed ionViewDidLoad")},n}(),d=function(){return function(){}}(),g=e("pMnS"),f=e("Ip0R"),h=e("ra/t"),m=e("ntG5"),w=e("M9A9"),v=e("tXrQ"),x=e("P87I"),k=t.nb({encapsulation:0,styles:[[".a-1[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid red}.row[_ngcontent-%COMP%]{height:calc(100% - 100px);overflow-x:scroll;overflow-y:hidden;margin:20px;display:-webkit-box;display:flex;width:auto}.title-card-inner[_ngcontent-%COMP%]{width:35vw;background:#eee;height:calc(100% - 80px);margin:20px;padding:20px}.card-inner[_ngcontent-%COMP%]{padding:10px;height:100%}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:calc(100% - 20px);max-width:calc(100vw - 40px)}.img[_ngcontent-%COMP%]{width:calc(100vw - 80px);height:calc(100% - 20px)}.medium-video[_ngcontent-%COMP%]{background:#cecece;min-height:100%;height:100%;min-width:30em;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;margin:0 0 0 2em}.medium-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-height:70vh}"]],data:{}});function y(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["\xa0 \xa0 \xa0 Loading..."])),(n()(),t.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function O(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,4,"div",[["class","card-inner"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),t.ob(3,278528,null,0,f.l,[t.t,t.k,t.D],{ngStyle:[0,"ngStyle"]},null),t.Bb(4,{background:0,"background-repeat":1,"background-position":2,"background-size":3}),(n()(),t.Db(-1,null,["\xa0"]))],function(n,l){var e=n(l,4,0,"#cccccc url("+l.context.$implicit.original_url+")","no-repeat","center","contain");n(l,3,0,e)},null)}function _(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,6,"div",[["class","title-card"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,5,"div",[["class","title-card-inner"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"ion-icon",[["name","camera"],["slot","start"]],null,null,null,h.u,h.g)),t.ob(4,49152,null,0,m.x,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.Db(5,null,[" \xa0 "," (",") "])),(n()(),t.pb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Db(7,null,[""," by ",""])),(n()(),t.gb(16777216,null,null,1,null,O)),t.ob(9,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,"camera"),n(l,9,0,l.parent.context.$implicit.photos)},function(n,l){n(l,5,0,l.parent.context.$implicit.name,l.parent.context.$implicit.photos.length);var e=l.parent.context.$implicit.created_at.substring(0,10);n(l,7,0,e,l.parent.context.$implicit.username)})}function C(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,13,"div",[["class","row"],["padding",""]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,12,"ion-list",[["class","flex-scroll"],["lines","none"]],null,null,null,h.x,h.j)),t.ob(2,49152,null,0,m.J,[t.h,t.k],{lines:[0,"lines"]},null),(n()(),t.pb(3,0,null,0,7,"ion-card",[["class","medium-cover"],["padding",""]],null,null,null,h.r,h.d)),t.ob(4,49152,null,0,m.h,[t.h,t.k],null,null),(n()(),t.pb(5,0,null,0,3,"p",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"ion-icon",[["name","videocam"],["slot","start"]],null,null,null,h.u,h.g)),t.ob(7,49152,null,0,m.x,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.Db(8,null,[" \xa0 ",""])),(n()(),t.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Db(10,null,["",""])),(n()(),t.pb(11,0,null,0,2,"ion-card",[["class","medium-video"],["padding",""]],null,null,null,h.r,h.d)),t.ob(12,49152,null,0,m.h,[t.h,t.k],null,null),(n()(),t.pb(13,0,null,0,0,"video",[["controls",""],["width","100%"]],[[8,"src",4]],null,null,null,null))],function(n,l){n(l,2,0,"none"),n(l,7,0,"videocam")},function(n,l){n(l,8,0,l.parent.context.$implicit.name),n(l,10,0,l.parent.context.$implicit.created_at),n(l,13,0,t.rb(1,"",l.parent.context.$implicit.url,""))})}function T(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,14,"div",[["class","row"],["padding",""]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,13,"ion-list",[["class","flex-scroll"],["lines","none"]],null,null,null,h.x,h.j)),t.ob(2,49152,null,0,m.J,[t.h,t.k],{lines:[0,"lines"]},null),(n()(),t.pb(3,0,null,0,11,"ion-card",[["class","medium-cover"],["padding",""]],null,null,null,h.r,h.d)),t.ob(4,49152,null,0,m.h,[t.h,t.k],null,null),(n()(),t.pb(5,0,null,0,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,6).onClick(e)&&u),"click"===l&&(u=!1!==t.zb(n,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.ob(6,16384,null,0,w.a,[[2,i.n],v.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(7,1),t.ob(8,671744,null,0,i.p,[i.n,i.a,f.g],{routerLink:[0,"routerLink"]},null),t.Ab(9,1),(n()(),t.pb(10,0,null,null,1,"ion-icon",[["name","today"],["slot","start"]],null,null,null,h.u,h.g)),t.ob(11,49152,null,0,m.x,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.Db(12,null,[" \xa0 ",""])),(n()(),t.pb(13,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Db(14,null,["",""]))],function(n,l){n(l,2,0,"none");var e=n(l,7,0,"/en/reports/show/"+l.parent.context.$implicit.reportname);n(l,6,0,e);var t=n(l,9,0,"/en/reports/show/"+l.parent.context.$implicit.reportname);n(l,8,0,t),n(l,11,0,"today")},function(n,l){n(l,5,0,t.zb(l,8).target,t.zb(l,8).href),n(l,12,0,l.parent.context.$implicit.name);var e=l.parent.context.$implicit.created_at.substring(0,10);n(l,14,0,e)})}function I(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,6,"div",[["class","a-1"]],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,_)),t.ob(2,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,C)),t.ob(4,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,T)),t.ob(6,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"gallery"==l.context.$implicit.item_type),n(l,4,0,"video"==l.context.$implicit.item_type),n(l,6,0,"report"==l.context.$implicit.item_type)},null)}function P(n){return t.Eb(0,[(n()(),t.gb(16777216,null,null,1,null,y)),t.ob(1,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,I)),t.ob(3,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,1,0,0==e.newsitems.length),n(l,3,0,e.newsitems)},null)}function $(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-newsfeed",[],null,null,null,P,k)),t.ob(1,114688,null,0,p,[c.a,r.a,i.n,u.c,x.a],null,null)],function(n,l){n(l,1,0)},null)}var L=t.lb("app-newsfeed",p,$,{},{},[]),M=e("gIcY"),S=e("95zI"),j=e("9opb"),D=e("apKv"),N=e("B4/3");e.d(l,"NewsfeedPageModuleNgFactory",function(){return E});var E=t.mb(d,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[g.a,L]],[3,t.j],t.x]),t.xb(4608,f.k,f.j,[t.u,[2,f.r]]),t.xb(4608,M.c,M.c,[]),t.xb(4608,S.a,S.a,[t.z,t.g]),t.xb(4608,j.a,j.a,[S.a,t.j,t.q]),t.xb(4608,D.a,D.a,[S.a,t.j,t.q]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,M.b,M.b,[]),t.xb(1073742336,M.a,M.a,[]),t.xb(1073742336,N.a,N.a,[]),t.xb(1073742336,i.q,i.q,[[2,i.w],[2,i.n]]),t.xb(1073742336,d,d,[]),t.xb(1024,i.l,function(){return[[{path:"",component:p}]]},[])])})}}]);