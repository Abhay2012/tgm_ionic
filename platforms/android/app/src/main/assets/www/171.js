(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e34b3d2d.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-e34b3d2d.js ***!
  \***********************************************************************/
/*! exports provided: shadow, iosTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
var DURATION=500,EASING="cubic-bezier(0.36,0.66,0.04,1)",OPACITY="opacity",TRANSFORM="transform",TRANSLATEX="translateX",CENTER="0%",OFF_OPACITY=.8;function shadow(e){return e.shadowRoot||e}function iosTransitionAnimation(e,o,r){var a="rtl"===document.dir,t=a?"-99.5%":"99.5%",n=a?"33%":"-33%",d=r.enteringEl,T=r.leavingEl,l=new e;if(l.addElement(d).duration(r.duration||DURATION).easing(r.easing||EASING).beforeRemoveClass("ion-page-invisible"),T&&o){var i=new e;i.addElement(o),l.add(i)}var A="back"===r.direction,E=d.querySelector(":scope > ion-content"),m=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),s=d.querySelector(":scope > ion-header > ion-toolbar"),f=new e;if(E||s||0!==m.length?(f.addElement(E),f.addElement(m)):f.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),l.add(f),A?f.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,n,CENTER,!0).fromTo(OPACITY,OFF_OPACITY,1,!0):f.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,t,CENTER,!0),s){var C=new e;C.addElement(s),l.add(C);var c=new e;c.addElement(s.querySelector("ion-title"));var S=new e;S.addElement(s.querySelectorAll("ion-buttons,[menuToggle]"));var u=new e;u.addElement(shadow(s).querySelector(".toolbar-background"));var O=new e,R=s.querySelector("ion-back-button");if(O.addElement(R),C.add(c).add(S).add(u).add(O),c.fromTo(OPACITY,.01,1,!0),S.fromTo(OPACITY,.01,1,!0),A)c.fromTo(TRANSLATEX,n,CENTER,!0),O.fromTo(OPACITY,.01,1,!0);else if(c.fromTo(TRANSLATEX,t,CENTER,!0),u.beforeClearStyles([OPACITY]).fromTo(OPACITY,.01,1,!0),O.fromTo(OPACITY,.01,1,!0),R){var b=new e;b.addElement(shadow(R).querySelector(".button-text")).fromTo(TRANSLATEX,a?"-100px":"100px","0px"),C.add(b)}}if(T){var y=new e;y.addElement(T.querySelector(":scope > ion-content")),y.addElement(T.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),l.add(y),A?y.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX,CENTER,a?"-100%":"100%"):y.fromTo(TRANSLATEX,CENTER,n,!0).fromTo(OPACITY,1,OFF_OPACITY,!0);var I=T.querySelector(":scope > ion-header > ion-toolbar");if(I){var N=new e;N.addElement(I);var P=new e;P.addElement(I.querySelector("ion-title"));var v=new e;v.addElement(I.querySelectorAll("ion-buttons,[menuToggle]"));var w=new e;w.addElement(shadow(I).querySelector(".toolbar-background"));var Y=new e;if(R=I.querySelector("ion-back-button"),Y.addElement(R),N.add(P).add(v).add(Y).add(w),l.add(N),Y.fromTo(OPACITY,.99,0,!0),P.fromTo(OPACITY,.99,0,!0),v.fromTo(OPACITY,.99,0,!0),A){if(P.fromTo(TRANSLATEX,CENTER,a?"-100%":"100%"),w.beforeClearStyles([OPACITY]).fromTo(OPACITY,1,.01,!0),R){var p=new e;p.addElement(shadow(R).querySelector(".button-text")),p.fromTo(TRANSLATEX,CENTER,(a?-124:124)+"px"),N.add(p)}}else P.fromTo(TRANSLATEX,CENTER,n).afterClearStyles([TRANSFORM]),Y.afterClearStyles([OPACITY]),P.afterClearStyles([OPACITY]),v.afterClearStyles([OPACITY])}}return Promise.resolve(l)}

/***/ })

}]);
//# sourceMappingURL=171.js.map