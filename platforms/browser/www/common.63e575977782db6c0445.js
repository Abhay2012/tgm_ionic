(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5TGA":function(n,t,e){"use strict";e.d(t,"a",function(){return g}),e.d(t,"b",function(){return b}),e.d(t,"c",function(){return y}),e.d(t,"d",function(){return u});var r=e("B5Ai"),i=function(){return e.e(176).then(e.bind(null,"y1oY"))},o=function(){return e.e(177).then(e.bind(null,"YGkI"))};function u(n){return new Promise(function(t,e){n.queue.write(function(){(function(n){var t=n.enteringEl,e=n.leavingEl;(function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),e&&y(e,!1)})(n),function(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return[4,a(n)];case 1:return[2,(t=e.sent())?c(t,n):s(n)]}})})}(n).then(function(e){e.animation&&e.animation.destroy(),l(n),t(e)},function(t){l(n),e(t)})})})}function l(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function a(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,i()]:[2,void 0];case 1:return t=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,o()];case 3:t=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,t]}})})}function c(n,t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return[4,f(t,!0)];case 1:return r.sent(),[4,t.animationCtrl.create(n,t.baseEl,t)];case 2:return e=r.sent(),p(t.enteringEl,t.leavingEl),[4,d(e,t)];case 3:return r.sent(),t.progressCallback&&t.progressCallback(void 0),e.hasCompleted&&v(t.enteringEl,t.leavingEl),[2,{hasCompleted:e.hasCompleted,animation:e}]}})})}function s(n){return r.a(this,void 0,void 0,function(){var t,e;return r.c(this,function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,f(n,!1)];case 1:return r.sent(),p(t,e),v(t,e),[2,{hasCompleted:!0}]}})})}function f(n,t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[g(n.enteringEl),g(n.leavingEl)]:[m(n.enteringEl),m(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}})})}function h(n,t){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function d(n,t){var e=t.progressCallback,r=new Promise(function(t){return n.onFinish(t)});return e?(n.progressStart(),e(n)):n.play(),r}function p(n,t){b(t,"ionViewWillLeave"),b(n,"ionViewWillEnter")}function v(n,t){b(n,"ionViewDidEnter"),b(t,"ionViewDidLeave")}function b(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}}function m(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function g(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(g))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function y(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},"6Fnk":function(n,t,e){"use strict";e.d(t,"a",function(){return p}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return h}),e.d(t,"d",function(){return d}),e.d(t,"e",function(){return a}),e.d(t,"f",function(){return o}),e.d(t,"g",function(){return u}),e.d(t,"h",function(){return l});var r=e("B5Ai"),i=0;function o(n,t){var e=n.ownerDocument;(function(n){0===i&&(i=1,n.addEventListener("ionBackButton",function(t){var e=l(n);e&&e.backdropDismiss&&t.detail.register(100,function(){return e.dismiss(void 0,p)})}),n.addEventListener("keyup",function(t){if("Escape"===t.key){var e=l(n);e&&e.backdropDismiss&&e.dismiss(void 0,p)}}))})(e),Object.assign(n,t),n.classList.add("ion-page-invisible");var r=i++;return n.overlayIndex=r,n.hasAttribute("id")||(n.id="ion-overlay-"+r),s(e).appendChild(n),n.componentOnReady()}function u(n,t,e,r,i){var o=l(n,r,i);return o?o.dismiss(t,e):Promise.reject("overlay does not exist")}function l(n,t,e){var r=function(n,t){var e=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===t?e:(t=t.toUpperCase(),e.filter(function(n){return n.tagName===t}))}(n,t);return void 0===e?r[r.length-1]:r.find(function(n){return n.id===e})}function a(n,t,e,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),u=n.enterAnimation?n.enterAnimation:n.config.get(t,"ios"===n.mode?e:i),[4,f(n,u,n.el,o)]);case 1:return r.sent()&&n.didPresent.emit(),[2]}})})}function c(n,t,e,i,o,u,l){return r.a(this,void 0,void 0,function(){var a,c;return r.c(this,function(r){switch(r.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),n.willDismiss.emit({data:t,role:e}),a=n.leaveAnimation?n.leaveAnimation:n.config.get(i,"ios"===n.mode?o:u),[4,f(n,a,n.el,l)];case 2:return r.sent(),n.didDismiss.emit({data:t,role:e}),[3,4];case 3:return c=r.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function f(n,t,e,i){return r.a(this,void 0,void 0,function(){var o,u,l;return r.c(this,function(r){switch(r.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):[3,1];case 1:return e.classList.remove("ion-page-invisible"),u=n,[4,n.animationCtrl.create(t,e.shadowRoot||n.el,i)];case 2:return o=u.animation=r.sent(),n.animation=o,n.animated||o.duration(0),n.keyboardClose&&o.beforeAddWrite(function(){var n=e.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,o.playAsync()];case 3:return r.sent(),l=o.hasCompleted,o.destroy(),n.animation=void 0,[2,l]}})})}function h(n,t){var e,r=new Promise(function(n){return e=n});return function(n,t,e){var r=function(i){n.removeEventListener(t,r),e(i)};n.addEventListener(t,r)}(n,t,function(n){e(n.detail)}),r}function d(n){return"cancel"===n||n===p}var p="backdrop"},ATF1:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"e",function(){return l}),e.d(t,"f",function(){return u}),e.d(t,"g",function(){return d}),e.d(t,"h",function(){return f}),e.d(t,"i",function(){return v}),e.d(t,"j",function(){return s}),e.d(t,"k",function(){return h});var r=e("B5Ai");function i(n,t,e,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach(function(n){return u.classList.add(n)}),o&&Object.assign(u,o),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function o(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}function u(){var n=window.TapticEngine;n&&n.selection()}function l(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function s(n,t){return null!==t.closest(n)}function f(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function h(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=void 0!==n,e}function d(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var p=/^[a-z][a-z0-9+\-.]*:/;function v(n,t,e,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||p.test(t)?[3,2]:(o=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(t,i)];case 2:return[2,!1]}})})}},B5Ai:function(n,t,e){"use strict";e.d(t,"b",function(){return i}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return u});var r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function i(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function o(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(t){o(t)}}function l(n){try{a(r.throw(n))}catch(t){o(t)}}function a(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,l)}a((r=r.apply(n,t||[])).next())})}function u(n,t){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(l){o=[6,l],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}},EycR:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e("OO+k"),e("HNzf"),e("SPri");var r=e("J/mm"),i=(e("e8Qb"),e("f+iR")),o=function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(t){o(t)}}function l(n){try{a(r.throw(n))}catch(t){o(t)}}function a(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,l)}a((r=r.apply(n,t||[])).next())})},u=function(n,t){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(l){o=[6,l],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},l=function(){function n(n,t,e,o,u,l,a){var c=this;this.appService=n,this.fb=t,this.menu=e,this.nativeStorage=o,this.router=u,this.httpClient=l,this.toastController=a,this.currentUser=!1,this.currentUserStr="<none>",this.env="<none>",this.isApp=!0,this.mainFooterVisible="",this.mainTitle="",this.platformList="",this.appRouter=r.b,this.ngOnInit(),this.appService.currentMessage.subscribe(function(n){n!=i.a.defaultMessage&&c.ngOnInit()})}return n.prototype.customOpen=function(){this.menu.toggle()},n.prototype.doFacebookLogin=function(){return o(this,void 0,void 0,function(){var n,t,e,l=this;return u(this,function(a){switch(a.label){case 0:return[4,this.fb.login(["public_profile","email"]).then(function(n){return o(l,void 0,void 0,function(){var t;return u(this,function(e){return this.currentUser=t=n.authResponse,this.currentUserStr=JSON.stringify(Object.keys(t).map(function(n){return n+"::"+t[n].toString().substring(0,10)})),[2,t]})})})];case 1:return n=a.sent(),[4,this.httpClient.get(r.a.longTermToken({shortTermToken:n.accessToken})).toPromise()];case 2:return t=a.sent(),e={accessToken:n.accessToken,longTermToken:t.long_term_token,userID:n.userID,type:"facebook"},this.nativeStorage.setItem("current_user",JSON.stringify(e)).then(function(){return o(l,void 0,void 0,function(){return u(this,function(n){return this.appService.changeMessage(i.a.didLogin),this.appService.setCurrentUser(e),this.router.navigate([r.b.rootPath]),[2]})})},function(n){console.log("+++ error:",n)}),[2]}})})},n.prototype.ngOnInit=function(){var n=this;this.nativeStorage.getItem("current_user").then(function(n){return JSON.parse(n)}).then(function(t){return o(n,void 0,void 0,function(){return u(this,function(n){return this.currentUser=t,[2]})})},function(t){return o(n,void 0,void 0,function(){return u(this,function(n){return this.currentUser=!1,[2]})})})},n.prototype.navigate=function(n){if("string"==typeof n)this.mainTitle=n,this.router.navigate([n]);else if("object"==typeof n){this.mainTitle=n.kind;var t="";switch(n.kind){case"report":t="/reports"}this.router.navigate([t])}},n}()},Ko49:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e("OO+k"),e("HNzf"),e("SPri");var r=e("J/mm"),i=(e("e8Qb"),e("f+iR")),o=function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(t){o(t)}}function l(n){try{a(r.throw(n))}catch(t){o(t)}}function a(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,l)}a((r=r.apply(n,t||[])).next())})},u=function(n,t){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(l){o=[6,l],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},l=function(){function n(n,t,e,o,u,l,a){var c=this;this.appService=n,this.fb=t,this.menu=e,this.nativeStorage=o,this.router=u,this.httpClient=l,this.toastController=a,this.currentUser=!1,this.currentUserStr="<none>",this.env="<none>",this.isApp=!0,this.mainFooterVisible="",this.mainTitle="",this.platformList="",this.appRouter=r.b,Object(i.b)("LayoutSidemenu constructor()"),this.ngOnInit(),this.appService.currentMessage.subscribe(function(n){n!=i.a.defaultMessage&&(Object(i.b)(n,"LayoutSidemenu got currentMessage"),c.ngOnInit())})}return n.prototype.customOpen=function(){this.menu.toggle()},n.prototype.doFacebookLogin=function(){return o(this,void 0,void 0,function(){var n,t,e,l=this;return u(this,function(a){switch(a.label){case 0:return[4,this.fb.login(["public_profile","email"]).then(function(n){return o(l,void 0,void 0,function(){var t;return u(this,function(e){return this.currentUser=t=n.authResponse,this.currentUserStr=JSON.stringify(Object.keys(t).map(function(n){return n+"::"+t[n].toString().substring(0,10)})),[2,t]})})})];case 1:return n=a.sent(),[4,this.httpClient.get(r.a.longTermToken({shortTermToken:n.accessToken})).toPromise()];case 2:return t=a.sent(),e={accessToken:n.accessToken,longTermToken:t.long_term_token,userID:n.userID,type:"facebook"},this.nativeStorage.setItem("current_user",JSON.stringify(e)).then(function(){return o(l,void 0,void 0,function(){return u(this,function(n){return this.appService.changeMessage(i.a.didLogin),this.appService.setCurrentUser(e),this.router.navigate([r.b.rootPath]),[2]})})},function(n){console.log("+++ error:",n)}),[2]}})})},n.prototype.ngOnInit=function(){var n=this;Object(i.b)("LayoutSidemenu ngOnInit()"),this.nativeStorage.getItem("current_user").then(function(n){return JSON.parse(n)}).then(function(t){return o(n,void 0,void 0,function(){return u(this,function(n){return this.currentUser=t,[2]})})},function(t){return o(n,void 0,void 0,function(){return u(this,function(n){return this.currentUser=!1,[2]})})})},n.prototype.navigate=function(n){if("string"==typeof n)this.mainTitle=n,this.router.navigate([n]);else if("object"==typeof n){this.mainTitle=n.kind;var t="";switch(n.kind){case"report":t="/reports"}this.router.navigate([t])}},n}()},khmd:function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return s});var r=e("CcnG"),i=e("ra/t"),o=e("ntG5"),u=e("M9A9"),l=e("ZYCi"),a=e("tXrQ"),c=(e("Ko49"),e("e8Qb"),e("SPri"),e("12Tz"),e("HNzf"),e("t/Na"),e("P87I"),r.pb({encapsulation:2,styles:[],data:{}}));function s(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,20,"ion-content",[["class","ion-page"],["main",""]],null,null,null,i.z,i.f)),r.qb(1,49152,null,0,o.p,[r.h,r.k],null,null),(n()(),r.rb(2,0,null,0,15,"ion-header",[],null,null,null,i.C,i.i)),r.qb(3,49152,null,0,o.w,[r.h,r.k],null,null),(n()(),r.rb(4,0,null,0,13,"ion-toolbar",[],null,null,null,i.N,i.s)),r.qb(5,49152,null,0,o.vb,[r.h,r.k],null,null),(n()(),r.rb(6,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,i.w,i.c)),r.qb(7,49152,null,0,o.g,[],null,null),(n()(),r.rb(8,0,null,0,6,"ion-menu-toggle",[],null,null,null,i.J,i.q)),r.qb(9,49152,null,0,o.N,[r.h,r.k],null,null),(n()(),r.rb(10,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==r.Bb(n,12).onClick(e)&&i),i},i.v,i.b)),r.qb(11,49152,null,0,o.f,[r.h,r.k],null,null),r.qb(12,16384,null,0,u.a,[[2,l.m],a.a,r.k],null,null),(n()(),r.rb(13,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,i.D,i.j)),r.qb(14,49152,null,0,o.x,[r.h,r.k],{name:[0,"name"]},null),(n()(),r.rb(15,0,null,0,2,"ion-title",[],null,null,null,i.M,i.t)),r.qb(16,49152,null,0,o.wb,[r.h,r.k],null,null),(n()(),r.Hb(17,0,["",""])),(n()(),r.rb(18,0,null,0,2,"ion-content",[],null,null,null,i.z,i.f)),r.qb(19,49152,null,0,o.p,[r.h,r.k],null,null),r.Ab(0,0)],function(n,t){n(t,14,0,"menu")},function(n,t){n(t,17,0,t.component.mainTitle)})}},"m1F/":function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return s});var r=e("CcnG"),i=e("ra/t"),o=e("ntG5"),u=e("M9A9"),l=e("ZYCi"),a=e("tXrQ"),c=(e("EycR"),e("e8Qb"),e("SPri"),e("12Tz"),e("HNzf"),e("t/Na"),e("P87I"),r.pb({encapsulation:2,styles:[],data:{}}));function s(n){return r.Jb(0,[(n()(),r.rb(0,0,null,null,13,"ion-content",[["class","ion-page"],["main",""]],null,null,null,i.z,i.f)),r.qb(1,49152,null,0,o.p,[r.h,r.k],null,null),(n()(),r.rb(2,0,null,0,8,"ion-fab",[],null,null,null,i.A,i.g)),r.qb(3,49152,null,0,o.r,[r.h,r.k],null,null),(n()(),r.rb(4,0,null,0,6,"ion-menu-toggle",[],null,null,null,i.J,i.q)),r.qb(5,49152,null,0,o.N,[r.h,r.k],null,null),(n()(),r.rb(6,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==r.Bb(n,8).onClick(e)&&i),i},i.v,i.b)),r.qb(7,49152,null,0,o.f,[r.h,r.k],null,null),r.qb(8,16384,null,0,u.a,[[2,l.m],a.a,r.k],null,null),(n()(),r.rb(9,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,i.D,i.j)),r.qb(10,49152,null,0,o.x,[r.h,r.k],{name:[0,"name"]},null),(n()(),r.rb(11,0,null,0,2,"ion-content",[],null,null,null,i.z,i.f)),r.qb(12,49152,null,0,o.p,[r.h,r.k],null,null),r.Ab(0,0)],function(n,t){n(t,10,0,"menu")},null)}}}]);