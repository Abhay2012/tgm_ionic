(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{HRT2:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=(t("OO+k"),t("HNzf")),i=t("J/mm"),o=t("e8Qb"),a=t("f+iR"),r=function(n,l,t,u){return new(t||(t=Promise))(function(e,i){function o(n){try{r(u.next(n))}catch(l){i(l)}}function a(n){try{r(u.throw(n))}catch(l){i(l)}}function r(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(o,a)}r((u=u.apply(n,l||[])).next())})},c=function(n,l){var t,u,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(e=2&i[0]?u.return:i[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,i[1])).done)return e;switch(u=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,u=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=l.call(n,o)}catch(a){i=[6,a],u=0}finally{t=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=function(){function n(n,l,t,u,e){var o=this;this.nativeStorage=n,this.appService=l,this.router=t,this.httpClient=u,this.toastController=e,this.cities=[],this.httpClient.get(i.a.citiesindex).subscribe(function(n){n&&(o.cities=n)},function(n){return r(o,void 0,void 0,function(){return c(this,function(l){switch(l.label){case 0:return console.log("+++ citiesindex 1:",n),[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})})}return n.prototype.navigateToCity=function(n){Object(a.b)(n,"c"),this.router.navigate([i.b.cityPath(n)])},n.prototype.ngOnInit=function(){},n}(),p=t("AytR"),b=t("t/Na"),g=function(){function n(n){this._http=n}return n.prototype.getAllCities=function(){return this._http.get(p.a.api_domain+"/api/cities.json")},n.ngInjectableDef=u.S({factory:function(){return new n(u.W(b.c))},token:n,providedIn:"root"}),n}(),d=function(){function n(n,l,t,u,e,o){this.nativeStorage=n,this.appService=l,this.route=t,this.router=u,this.httpClient=e,this._cityService=o,this.city={},this.appRouter=i.b,this.slug=this.route.snapshot.paramMap.get("cityname"),this.ngOnInit()}return n.prototype.ngOnInit=function(){return n=this,void 0,t=function(){var n;return function(n,l){var t,u,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(e=2&i[0]?u.return:i[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,i[1])).done)return e;switch(u=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,u=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=l.call(n,o)}catch(a){i=[6,a],u=0}finally{t=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(l){switch(l.label){case 0:return[4,this.httpClient.get(i.a.city(this.slug)).toPromise()];case 1:return n=l.sent(),this.city=n.city,[2]}})},new((l=void 0)||(l=Promise))(function(u,e){function i(n){try{a(t.next(n))}catch(l){e(l)}}function o(n){try{a(t.throw(n))}catch(l){e(l)}}function a(n){n.done?u(n.value):new l(function(l){l(n.value)}).then(i,o)}a((t=t.apply(n,[])).next())});var n,l,t},n.prototype.navigate=function(n){},n}(),f=function(){return function(){}}(),h=t("pMnS"),m=t("ra/t"),x=t("ntG5"),y=t("M9A9"),w=t("ZYCi"),v=t("tXrQ"),C=t("khmd"),k=t("Ko49"),q=t("SPri"),O=t("12Tz"),P=t("P87I"),M=t("Ip0R"),_=u.ob({encapsulation:2,styles:[],data:{}});function E(n){return u.Fb(0,[(n()(),u.qb(0,0,null,null,6,"ion-item",[["class","item-borderless"]],null,[[null,"click"]],function(n,l,t){var e=!0,i=n.component;return"click"===l&&(e=!1!==u.Ab(n,2).onClick(t)&&e),"click"===l&&(e=!1!==i.navigateToCity(n.context.$implicit)&&e),e},m.E,m.l)),u.pb(1,49152,null,0,x.C,[u.h,u.k],null,null),u.pb(2,16384,null,0,y.a,[[2,w.m],v.a,u.k],null,null),(n()(),u.qb(3,0,null,0,3,"div",[["style","position: releative;"]],null,null,null,null,null)),(n()(),u.qb(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u.qb(5,0,null,null,1,"span",[["style","position: absolute;bottom: 0;left: 50%;transform: translate(-50%,0);background: white;padding: 5px;"]],null,null,null,null,null)),(n()(),u.Eb(6,null,["",""]))],null,function(n,l){n(l,4,0,l.context.$implicit.photo),n(l,6,0,l.context.$implicit.name)})}function j(n){return u.Fb(0,[(n()(),u.qb(0,0,null,null,10,"layout-sidemenu",[],null,null,null,C.b,C.a)),u.pb(1,114688,null,0,k.a,[o.a,q.a,O.a,e.a,w.m,b.c,P.a],null,null),(n()(),u.qb(2,0,null,0,8,"ion-content",[["fullscreen",""]],null,null,null,m.y,m.f)),u.pb(3,49152,null,0,x.p,[u.h,u.k],{fullscreen:[0,"fullscreen"]},null),(n()(),u.qb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),u.Eb(-1,null,["Cities index"])),(n()(),u.qb(6,0,null,0,4,"ion-list",[],null,null,null,m.G,m.n)),u.pb(7,49152,null,0,x.J,[u.h,u.k],null,null),(n()(),u.qb(8,0,null,0,2,"div",[["style","display: flex;flex-wrap: wrap;"]],null,null,null,null,null)),(n()(),u.hb(16777216,null,null,1,null,E)),u.pb(10,278528,null,0,M.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0),n(l,3,0,""),n(l,10,0,t.cities)},null)}function I(n){return u.Fb(0,[(n()(),u.qb(0,0,null,null,1,"app-cities-index",[],null,null,null,j,_)),u.pb(1,114688,null,0,s,[e.a,o.a,w.m,b.c,P.a],null,null)],function(n,l){n(l,1,0)},null)}var z=u.mb("app-cities-index",s,I,{},{},[]),S=u.ob({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{box-sizing:border-box}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{padding:0;margin:0}body[_ngcontent-%COMP%]{padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;font-size:18px}.container[_ngcontent-%COMP%]{max-width:1000px;margin:auto;background-color:#f4f4f4}header[_ngcontent-%COMP%]{padding:25px 15px;width:100%;height:220px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.25)),to(rgba(255,255,255,.4))),url(hero.eb01329a60a529343c12.jpeg);background-image:linear-gradient(rgba(255,255,255,.25),rgba(255,255,255,.4)),url(hero.eb01329a60a529343c12.jpeg);background-position:center bottom;background-size:cover;background-repeat:no-repeat;z-index:1}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{background-color:#23a158;padding:16px 0 0 10px;border-radius:50%;height:55px;width:55px;text-align:center;display:inline-block}.section-one[_ngcontent-%COMP%]{padding:5px;margin:-50px auto 40px;display:grid;grid-template-columns:25px 90px 115px;height:85px;width:250px;justify-items:center;grid-column-gap:5px;background-color:#fff;justify-items:center;-webkit-box-align:center;align-items:center;box-shadow:1px 4px 5px #1313137c;border-radius:5px;z-index:5}.location[_ngcontent-%COMP%]{color:#11b0c5;font-size:24px;--ionicon-stroke-width:40px}.section-one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px;font-weight:700;text-align:center}.status[_ngcontent-%COMP%]{display:grid;grid-template-columns:50px 50px;grid-template-rows:25px 25px;justify-items:center;-webkit-box-align:center;align-items:center;grid-gap:5px}.status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:20px}.status-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:5px;justify-items:center;-webkit-box-align:center;align-items:center}.numbers[_ngcontent-%COMP%]{font-size:12px;color:#272727}.mid[_ngcontent-%COMP%]{grid-column:span 2}.tags-container[_ngcontent-%COMP%]{margin:20px 0;padding:5px;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:left;align-items:left;-webkit-box-pack:left;justify-content:left}.btn[_ngcontent-%COMP%]{background-color:#fff;border-radius:50px;color:#272727;margin:5px;padding:.5em 1em;border:2px solid #11b0c5}.delete-btn[_ngcontent-%COMP%]{position:relative;background-color:#f22;color:#fff;border:0}.random[_ngcontent-%COMP%]{background-color:#11b0c5;color:#fff}.section-three[_ngcontent-%COMP%]{padding:25px 10px;display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));grid-auto-flow:column;justify-items:center;-webkit-box-align:center;align-items:center}.section-three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.section-three[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6a6666;font-weight:600;font-size:14px;padding:5px 1px}@media (max-width:360px){.section-one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.status-grid[_ngcontent-%COMP%]{grid-gap:1px}.section-two[_ngcontent-%COMP%]{padding:0;grid-gap:5px;grid-row-gap:10px;grid-template-columns:repeat(auto-fit,minmax(100px,250px))}.btn[_ngcontent-%COMP%]{width:95px;height:35px}}@media (min-width:500px){.section-two[_ngcontent-%COMP%]{grid-gap:10px;grid-row-gap:20px;grid-template-columns:repeat(auto-fit,minmax(110px,250px))}}"]],data:{}});function F(n){return u.Fb(0,[(n()(),u.qb(0,0,null,null,49,"layout-sidemenu",[],null,null,null,C.b,C.a)),u.pb(1,114688,null,0,k.a,[o.a,q.a,O.a,e.a,w.m,b.c,P.a],null,null),(n()(),u.qb(2,0,null,0,47,"ion-content",[],null,null,null,m.y,m.f)),u.pb(3,49152,null,0,x.p,[u.h,u.k],null,null),(n()(),u.qb(4,0,null,0,45,"div",[["class","container"]],null,null,null,null,null)),(n()(),u.qb(5,0,null,null,0,"header",[],null,null,null,null,null)),(n()(),u.qb(6,0,null,null,17,"section",[["class","section-one"]],null,null,null,null,null)),(n()(),u.qb(7,0,null,null,1,"ion-icon",[["class","location"],["name","location-outline"]],null,null,null,m.B,m.i)),u.pb(8,49152,null,0,x.x,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.qb(9,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Eb(10,null,["",""])),(n()(),u.qb(11,0,null,null,12,"div",[["class","status"]],null,null,null,null,null)),(n()(),u.qb(12,0,null,null,3,"div",[["class","status-grid"]],null,null,null,null,null)),(n()(),u.qb(13,0,null,null,0,"img",[["alt","Reports"],["src","../../assets/Reports Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(14,0,null,null,1,"span",[["class","numbers"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["138"])),(n()(),u.qb(16,0,null,null,3,"div",[["class","status-grid"]],null,null,null,null,null)),(n()(),u.qb(17,0,null,null,0,"img",[["alt","Photos"],["src","../../assets/Photos Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(18,0,null,null,1,"span",[["class","numbers"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["26"])),(n()(),u.qb(20,0,null,null,3,"div",[["class","status-grid mid"]],null,null,null,null,null)),(n()(),u.qb(21,0,null,null,0,"img",[["alt","Videos"],["src","../../assets/Videos Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(22,0,null,null,1,"span",[["class","numbers "]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["92"])),(n()(),u.qb(24,0,null,null,12,"section",[["class","tags-container"]],null,null,null,null,null)),(n()(),u.qb(25,0,null,null,1,"span",[["class","btn delete-btn"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["X deselect all"])),(n()(),u.qb(27,0,null,null,1,"span",[["class","btn random"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["late bars"])),(n()(),u.qb(29,0,null,null,1,"span",[["class","btn random"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["tourist attractions"])),(n()(),u.qb(31,0,null,null,1,"span",[["class","btn"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["language cafe"])),(n()(),u.qb(33,0,null,null,1,"span",[["class","btn"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["art gallery"])),(n()(),u.qb(35,0,null,null,1,"span",[["class","btn random"]],null,null,null,null,null)),(n()(),u.Eb(-1,null,["best food"])),(n()(),u.qb(37,0,null,null,12,"section",[["class","section-three"]],null,null,null,null,null)),(n()(),u.qb(38,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.qb(39,0,null,null,0,"img",[["alt","Newsfeed"],["src","../../assets/Newsfeed Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(40,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Eb(-1,null,["Newsfeed"])),(n()(),u.qb(42,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.qb(43,0,null,null,0,"img",[["alt","Events"],["src","../../assets/Events Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(44,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Eb(-1,null,["Events"])),(n()(),u.qb(46,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.qb(47,0,null,null,0,"img",[["alt","Venues"],["src","../../assets/Venue Icon.svg"]],null,null,null,null,null)),(n()(),u.qb(48,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Eb(-1,null,["Venues"]))],function(n,l){n(l,1,0),n(l,8,0,"location-outline")},function(n,l){n(l,10,0,l.component.city.name)})}function R(n){return u.Fb(0,[(n()(),u.qb(0,0,null,null,1,"app-cities-show",[],null,null,null,F,S)),u.pb(1,114688,null,0,d,[e.a,o.a,w.a,w.m,b.c,g],null,null)],function(n,l){n(l,1,0)},null)}var N=u.mb("app-cities-show",d,R,{},{},[]),T=t("gIcY"),V=t("95zI"),A=t("9opb"),G=t("apKv"),J=t("B4/3"),H=t("dVQv");t.d(l,"CitiesModuleNgFactory",function(){return Q});var Q=u.nb(f,[],function(n){return u.xb([u.yb(512,u.j,u.bb,[[8,[h.a,z,N]],[3,u.j],u.x]),u.yb(4608,M.l,M.k,[u.u,[2,M.u]]),u.yb(4608,T.h,T.h,[]),u.yb(4608,V.a,V.a,[u.z,u.g]),u.yb(4608,A.a,A.a,[V.a,u.j,u.q]),u.yb(4608,G.a,G.a,[V.a,u.j,u.q]),u.yb(1073742336,M.b,M.b,[]),u.yb(1073742336,T.g,T.g,[]),u.yb(1073742336,T.a,T.a,[]),u.yb(1073742336,J.a,J.a,[]),u.yb(1073742336,H.a,H.a,[]),u.yb(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),u.yb(1073742336,f,f,[]),u.yb(1024,w.k,function(){return[[{path:"",component:s},{path:"travel-to/:cityname",component:d}]]},[])])})}}]);