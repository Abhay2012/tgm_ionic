(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{"fo+l":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),r=u("HNzf"),e=u("e8Qb"),o=u("f+iR"),i=function(){function n(n,l,u,t,r){this.nativeStorage=n,this.appService=l,this.route=u,this.router=t,this.httpClient=r,this.reports=[],Object(o.b)("reportsIndex#constructor")}return n.prototype.ngOnInit=function(){},n}(),a=u("t/Na"),p=u("J/mm"),b=function(n,l,u,t){return new(u||(u=Promise))(function(r,e){function o(n){try{a(t.next(n))}catch(l){e(l)}}function i(n){try{a(t.throw(n))}catch(l){e(l)}}function a(n){n.done?r(n.value):new u(function(l){l(n.value)}).then(o,i)}a((t=t.apply(n,l||[])).next())})},s=function(n,l){var u,t,r,e,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return e={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function i(e){return function(i){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(r=2&e[0]?t.return:e[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,e[1])).done)return r;switch(t=0,r&&(e=[2&e[0],r.value]),e[0]){case 0:case 1:r=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,t=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3])){o.label=e[1];break}if(6===e[0]&&o.label<r[1]){o.label=r[1],r=e;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(e);break}r[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(i){e=[6,i],t=0}finally{u=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,i])}}},c=function(){function n(n,l,u,t,r){var e=this;this.nativeStorage=n,this.appService=l,this.route=u,this.router=t,this.httpClient=r,this.report={},Object(o.b)("reportsShow#constructor"),Object(o.b)(this.route.snapshot,"route.snapshot");var i=this.route.snapshot.params.reportname;this.nativeStorage.getItem("current_user").then(function(n){return b(e,void 0,void 0,function(){var l,u;return s(this,function(t){switch(t.label){case 0:return l=(new a.g).set("accessToken",n.longTermToken),[4,this.httpClient.get(p.a.report({reportname:i}),{params:l}).toPromise()];case 1:return u=t.sent(),this.report=u.report,[2]}})})}).catch(function(n){return b(e,void 0,void 0,function(){var n;return s(this,function(l){switch(l.label){case 0:return[4,this.httpClient.get(p.a.report({reportname:i})).toPromise()];case 1:return n=l.sent(),this.report=n.report,[2]}})})})}return n.prototype.ngOnInit=function(){},n}(),h=function(){return function(){}}(),f=u("pMnS"),d=u("ZYCi"),v=t.nb({encapsulation:2,styles:[],data:{}});function m(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["There is no reports-index"]))],null,null)}function w(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-reports-index",[],null,null,null,m,v)),t.ob(1,114688,null,0,i,[r.a,e.a,d.a,d.m,a.c],null,null)],function(n,l){n(l,1,0)},null)}var x=t.lb("app-reports-index",i,w,{},{},[]),g=u("khmd"),y=u("Ko49"),k=u("SPri"),I=u("ZZ/e"),S=u("oBZk"),j=t.nb({encapsulation:0,styles:[[".red[_ngcontent-%COMP%]{border:1px solid red}"]],data:{}});function C(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,24,"layout-sidemenu",[],null,null,null,g.b,g.a)),t.ob(1,114688,null,0,y.a,[e.a,k.a,I.Db,r.a,d.m,a.c,I.Kb],null,null),(n()(),t.pb(2,0,null,0,22,"ion-content",[],null,null,null,S.x,S.f)),t.ob(3,49152,null,0,I.r,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,14,"div",[["class","reports-show"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,13,"ion-grid",[],null,null,null,S.y,S.g)),t.ob(6,49152,null,0,I.x,[t.h,t.k],null,null),(n()(),t.pb(7,0,null,0,11,"ion-row",[],null,null,null,S.H,S.p)),t.ob(8,49152,null,0,I.fb,[t.h,t.k],null,null),(n()(),t.pb(9,0,null,0,9,"ion-col",[["push-md","3"],["size-md","6"],["size-sm","12"]],null,null,null,S.w,S.e)),t.ob(10,49152,null,0,I.q,[t.h,t.k],null,null),(n()(),t.pb(11,0,null,0,7,"ion-card",[["padding",""]],null,null,null,S.v,S.d)),t.ob(12,49152,null,0,I.j,[t.h,t.k],null,null),(n()(),t.pb(13,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),t.Gb(14,null,["",""])),(n()(),t.pb(15,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),t.pb(16,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),t.Gb(17,null,["",""])),(n()(),t.pb(18,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t.pb(19,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(20,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(21,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(22,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(23,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(24,0,null,0,0,"br",[],null,null,null,null,null))],function(n,l){n(l,1,0)},function(n,l){var u=l.component;n(l,14,0,u.report.name),n(l,17,0,u.report.subtitle),n(l,18,0,u.report.description)})}function O(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-reports-show",[],null,null,null,C,j)),t.ob(1,114688,null,0,c,[r.a,e.a,d.a,d.m,a.c],null,null)],function(n,l){n(l,1,0)},null)}var T=t.lb("app-reports-show",c,O,{},{},[]),G=u("Ip0R"),H=u("gIcY"),P=u("dVQv");u.d(l,"ReportsModuleNgFactory",function(){return z});var z=t.mb(h,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[f.a,x,T]],[3,t.j],t.x]),t.xb(4608,G.k,G.j,[t.u,[2,G.s]]),t.xb(4608,H.g,H.g,[]),t.xb(4608,I.a,I.a,[t.z,t.g]),t.xb(4608,I.Eb,I.Eb,[I.a,t.j,t.q]),t.xb(4608,I.Hb,I.Hb,[I.a,t.j,t.q]),t.xb(1073742336,G.b,G.b,[]),t.xb(1073742336,H.f,H.f,[]),t.xb(1073742336,H.a,H.a,[]),t.xb(1073742336,I.Ab,I.Ab,[]),t.xb(1073742336,P.a,P.a,[]),t.xb(1073742336,d.p,d.p,[[2,d.v],[2,d.m]]),t.xb(1073742336,h,h,[]),t.xb(1024,d.k,function(){return[[{path:"",component:i},{path:"show/:reportname",component:c}]]},[])])})}}]);