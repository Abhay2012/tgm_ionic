(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B5Ai:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return u});var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function i(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,r){return new(e||(e=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(n){o(n)}}function a(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(u,a)}c((r=r.apply(t,n||[])).next())})}function u(t,n){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(a){o=[6,a],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}},GFJC:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r={ipad:function(t){return c(t,/iPad/i)},iphone:function(t){return c(t,/iPhone/i)},ios:function(t){return c(t,/iPad|iPhone|iPod/i)},android:function(t){return c(t,/android|sink/i)},phablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return r>460&&r<820&&i>780&&i<1400},cordova:u,capacitor:a,electron:function(t){return c(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:o,desktop:function(t){return!o(t)},hybrid:function(t){return u(t)||a(t)}};function i(t,n){return function(t){return function(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(null==n){n=t.Ionic.platforms=function(t){return Object.keys(r).filter(function(n){return r[n](t)})}(t);var e=t.document.documentElement.classList;n.forEach(function(t){return e.add("plt-"+t)})}return n}(t)}(t).includes(n)}function o(t){return function(t,n){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function u(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function a(t){var n=t.Capacitor;return!(!n||!n.isNative)}function c(t,n){return n.test(t.navigator.userAgent)}},JvIM:function(t,n,e){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function u(t,n,e,r,o){if(t||i(n)){var u=n.querySelector("input.aux-input");u||((u=n.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),n.appendChild(u)),u.disabled=o,u.name=e,u.value=r||""}}function a(t,n,e){return Math.max(t,Math.min(n,e))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,n){var e=t._original||t;return{_original:t,emit:f(e.emit.bind(e),n)}}function f(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return u}),e.d(n,"f",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"h",function(){return a}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return s})},Ko49:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e("ZZ/e"),e("HNzf"),e("SPri");var r=e("J/mm"),i=(e("e8Qb"),e("f+iR")),o=function(t,n,e,r){return new(e||(e=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(n){o(n)}}function a(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(u,a)}c((r=r.apply(t,n||[])).next())})},u=function(t,n){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(a){o=[6,a],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=function(){function t(t,n,e,o,u,a,c){var s=this;this.appService=t,this.fb=n,this.menu=e,this.nativeStorage=o,this.router=u,this.httpClient=a,this.toastController=c,this.currentUser=!1,this.currentUserStr="<none>",this.env="<none>",this.isApp=!0,this.mainFooterVisible="",this.mainTitle="",this.platformList="",this.appRouter=r.b,Object(i.b)("LayoutSidemenu constructor()"),this.ngOnInit(),this.appService.currentMessage.subscribe(function(t){t!=i.a.defaultMessage&&(Object(i.b)(t,"LayoutSidemenu got currentMessage"),s.ngOnInit())})}return t.prototype.customOpen=function(){this.menu.toggle()},t.prototype.doFacebookLogin=function(){return o(this,void 0,void 0,function(){var t,n,e,a=this;return u(this,function(c){switch(c.label){case 0:return[4,this.fb.login(["public_profile","email"]).then(function(t){return o(a,void 0,void 0,function(){var n;return u(this,function(e){return this.currentUser=n=t.authResponse,this.currentUserStr=JSON.stringify(Object.keys(n).map(function(t){return t+"::"+n[t].toString().substring(0,10)})),[2,n]})})})];case 1:return t=c.sent(),[4,this.httpClient.get(r.a.longTermToken({shortTermToken:t.accessToken})).toPromise()];case 2:return n=c.sent(),e={accessToken:t.accessToken,longTermToken:n.long_term_token,userID:t.userID,type:"facebook"},this.nativeStorage.setItem("current_user",JSON.stringify(e)).then(function(){return o(a,void 0,void 0,function(){return u(this,function(t){return this.appService.changeMessage(i.a.didLogin),this.appService.setCurrentUser(e),this.router.navigate([r.b.rootPath]),[2]})})},function(t){console.log("+++ error:",t)}),[2]}})})},t.prototype.ngOnInit=function(){var t=this;Object(i.b)("LayoutSidemenu ngOnInit()"),this.nativeStorage.getItem("current_user").then(function(t){return JSON.parse(t)}).then(function(n){return o(t,void 0,void 0,function(){return u(this,function(t){return this.currentUser=n,[2]})})},function(n){return o(t,void 0,void 0,function(){return u(this,function(t){return this.currentUser=!1,[2]})})})},t.prototype.navigate=function(t){if("string"==typeof t)this.mainTitle=t,this.router.navigate([t]);else if("object"==typeof t){this.mainTitle=t.kind;var n="";switch(t.kind){case"report":n="/reports"}this.router.navigate([n])}},t}()},M4MB:function(t,n,e){"use strict";e.d(n,"a",function(){return p}),e.d(n,"b",function(){return h}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return f}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return u}),e.d(n,"h",function(){return a});var r=e("B5Ai"),i=0;function o(t,n){var e=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(n){var e=a(t);if(e&&e.backdropDismiss&&!function(t,n){for(;n;){if(n===t)return!0;n=n.parentElement}return!1}(e,n.target)){var r=e.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(n){var e=a(t);e&&e.backdropDismiss&&n.detail.register(100,function(){return e.dismiss(void 0,p)})}),t.addEventListener("keyup",function(n){if("Escape"===n.key){var e=a(t);e&&e.backdropDismiss&&e.dismiss(void 0,p)}}))})(e),Object.assign(t,n),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(e).appendChild(t),t.componentOnReady()}function u(t,n,e,r,i){var o=a(t,r,i);return o?o.dismiss(n,e):Promise.reject("overlay does not exist")}function a(t,n,e){var r=function(t,n){var e=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===n?e:(n=n.toUpperCase(),e.filter(function(t){return t.tagName===n}))}(t,n);return void 0===e?r[r.length-1]:r.find(function(t){return t.id===e})}function c(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),u=t.enterAnimation?t.enterAnimation:t.config.get(n,"ios"===t.mode?e:i),[4,d(t,u,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function s(t,n,e,i,o,u,a){return r.a(this,void 0,void 0,function(){var c,s;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:n,role:e}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:u),[4,d(t,c,t.el,a)];case 2:return r.sent(),t.didDismiss.emit({data:n,role:e}),[3,4];case 3:return s=r.sent(),console.error(s),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,n,i,o){return r.a(this,void 0,void 0,function(){var u,a,c,s;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),u=i.shadowRoot||t.el,c=t,[4,e.e(1).then(e.bind(null,"f3nl")).then(function(t){return t.create(n,u,o)})]);case 1:return a=c.animation=r.sent(),t.animation=a,t.animated&&t.config.getBoolean("animated",!0)||a.duration(0),t.keyboardClose&&a.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,a.playAsync()];case 2:return r.sent(),s=a.hasCompleted,a.destroy(),t.animation=void 0,[2,s]}})})}function f(t,n){var e,r=new Promise(function(t){return e=t});return function(t,n,e){var r=function(i){t.removeEventListener(n,r),e(i)};t.addEventListener(n,r)}(t,n,function(t){e(t.detail)}),r}function h(t){return"cancel"===t||t===p}var p="backdrop"},V66x:function(t,n,e){"use strict";e.d(n,"a",function(){return g}),e.d(n,"b",function(){return m}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return w});var r=e("B5Ai"),i=e("awvO"),o=function(){return e.e(180).then(e.bind(null,"4dph"))},u=function(){return e.e(181).then(e.bind(null,"NJz6"))};function a(t){return new Promise(function(n,e){t.queue.write(function(){(function(t){var n=t.enteringEl,e=t.leavingEl;(function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),e&&w(e,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,(n=e.sent())?l(n,t):d(t)]}})})}(t).then(function(e){e.animation&&e.animation.destroy(),c(t),n(e)},function(n){c(t),e(n)})})})}function c(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}function l(t,n){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(n,!0)];case 1:return r.sent(),[4,e.e(1).then(e.bind(null,"f3nl")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return i=r.sent(),v(n.enteringEl,n.leavingEl),[4,p(i,n)];case 3:return r.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&b(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var n,e;return r.c(this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(n,e),b(n,e),[2,{hasCompleted:!0}]}})})}function f(t,n){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[g(t.enteringEl),g(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,n){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function p(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r}function v(t,n){m(n,i.a),m(t,i.b)}function b(t,n){m(t,i.c),m(n,i.d)}function m(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}}function y(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(g))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},awvO:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return a});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",u="ionViewDidLeave",a="ionViewWillUnload"},jT1R:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("B5Ai");function i(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,i&&i.forEach(function(t){return u.classList.add(t)}),o&&Object.assign(u,o),n.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function o(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},k6lV:function(t,n,e){"use strict";e.r(n),e.d(n,"createGesture",function(){return f}),e.d(n,"GESTURE_CONTROLLER",function(){return c});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===e){this.capturedId=n,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,n,e,r,i){this.id=n,this.name=e,this.disableScroll=i,this.priority=1e6*r+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,n,e,r){this.id=n,this.disable=e,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new i(document);function s(t,n,e,i){var o,u,a=function(t){if(void 0===r)try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},n)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(o="addEventListener",u="removeEventListener"),t[o](n,e,a),function(){t[u](n,e,a)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),e=n.canStart,r=n.onWillStart,i=n.onStart,o=n.onEnd,u=n.notCaptured,a=n.onMove,f=n.threshold,b=n.queue,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(t,n,e,r,i){var o,u,a,c,f,h,p,v=0;function b(r){v=Date.now()+l,n(r)&&(!u&&e&&(u=s(t,"touchmove",e,i)),a||(a=s(t,"touchend",y,i)),c||(c=s(t,"touchcancel",y,i)))}function m(r){v>Date.now()||n(r)&&(!h&&e&&(h=s(d(t),"mousemove",e,i)),p||(p=s(d(t),"mouseup",g,i)))}function y(t){w(),r&&r(t)}function g(t){S(),r&&r(t)}function w(){u&&u(),a&&a(),c&&c(),u=a=c=void 0}function S(){h&&h(),p&&p(),h=p=void 0}function k(){w(),S()}function E(n){n?(o&&o(),f&&f(),o=f=void 0,k()):(o||(o=s(t,"touchstart",b,i)),f||(f=s(t,"mousedown",m,i)))}return{setDisabled:E,stop:k,destroy:function(){E(!0),r=e=n=void 0}}}(n.el,function(t){var n=v(t);return!(k||!E)&&(p(t,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=n,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=t,(!e||!1!==e(m))&&(w.release(),!!w.start()&&(k=!0,0===f?T():(g.start(m.startX,m.startY),!0))))},function(t){S?!I&&E&&(I=!0,h(m,t),b.write(L)):(h(m,t),g.detect(m.currentX,m.currentY)&&(g.isGesture()&&T()||(O(),y.stop(),u&&u(m))))},x,{capture:!1}),g=function(t,n,e){var r=e*(Math.PI/180),i="x"===t,o=Math.cos(r),u=n*n,a=0,c=0,s=!1,l=0;return{start:function(t,n){a=t,c=n,l=0,s=!0},detect:function(t,n){if(!s)return!1;var e=t-a,r=n-c,d=e*e+r*r;if(d<u)return!1;var f=Math.sqrt(d),h=(i?e:r)/f;return l=h>o?1:h<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(n.direction,n.threshold,n.maxAngle),w=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,k=!1,E=!0,I=!1;function L(){S&&(I=!1,a&&a(m))}function T(){return!(w&&!w.capture()||(S=!0,E=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,r?r(m).then(D):D(),0))}function D(){i&&i(m),E=!0}function O(){S=!1,k=!1,I=!1,E=!0,w.release()}function x(t){var n=S,e=E;O(),e&&(h(m,t),n?o&&o(m):u&&u(m))}return{setDisabled:function(t){t&&S&&x(void 0),y.setDisabled(t)},destroy:function(){w.destroy(),y.destroy()}}}function h(t,n){if(n){var e=t.currentX,r=t.currentY,i=t.timeStamp;p(n,t);var o=t.currentX,u=t.currentY,a=(t.timeStamp=v(n))-i;if(a>0&&a<100){var c=(u-r)/a;t.velocityX=(o-e)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=n}}function p(t,n){var e=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];e=o.clientX,r=o.clientY}else void 0!==t.pageX&&(e=t.pageX,r=t.pageY)}n.currentX=e,n.currentY=r}function v(t){return t.timeStamp||Date.now()}},khmd:function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a});var r=e("CcnG"),i=e("oBZk"),o=e("ZZ/e"),u=(e("Ko49"),e("e8Qb"),e("SPri"),e("HNzf"),e("ZYCi"),e("t/Na"),r.nb({encapsulation:2,styles:[],data:{}}));function a(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,19,"ion-content",[["class","ion-page"],["main",""]],null,null,null,i.x,i.f)),r.ob(1,49152,null,0,o.r,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,14,"ion-header",[],null,null,null,i.z,i.h)),r.ob(3,49152,null,0,o.y,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,12,"ion-toolbar",[],null,null,null,i.J,i.r)),r.ob(5,49152,null,0,o.yb,[r.h,r.k],null,null),(t()(),r.pb(6,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,i.u,i.c)),r.ob(7,49152,null,0,o.i,[r.h,r.k],null,null),(t()(),r.pb(8,0,null,0,5,"ion-menu-toggle",[],null,null,null,i.F,i.o)),r.ob(9,49152,null,0,o.P,[r.h,r.k],null,null),(t()(),r.pb(10,0,null,0,3,"ion-button",[],null,null,null,i.t,i.b)),r.ob(11,49152,null,0,o.h,[r.h,r.k],null,null),(t()(),r.pb(12,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,i.A,i.i)),r.ob(13,49152,null,0,o.z,[r.h,r.k],{name:[0,"name"]},null),(t()(),r.pb(14,0,null,0,2,"ion-title",[],null,null,null,i.I,i.q)),r.ob(15,49152,null,0,o.wb,[r.h,r.k],null,null),(t()(),r.Gb(16,0,["",""])),(t()(),r.pb(17,0,null,0,2,"ion-content",[],null,null,null,i.x,i.f)),r.ob(18,49152,null,0,o.r,[r.h,r.k],null,null),r.yb(0,0)],function(t,n){t(n,13,0,"menu")},function(t,n){t(n,16,0,n.component.mainTitle)})}},yIUm:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return i}),e.d(n,"e",function(){return u});var r=e("B5Ai");function i(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function u(t,n){var e;return(e={})[n]=!0,e[n+"-"+t]=void 0!==t,e}function a(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var c=/^[a-z][a-z0-9+\-.]*:/;function s(t,n,e,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||c.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(n,i)];case 2:return[2,!1]}})})}},ySCp:function(t,n,e){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return r})}}]);