(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/uyartgdr.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/uyartgdr.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonPopover, IonPopoverController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopoverController", function() { return PopoverController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-4f24dff4.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-4f24dff4.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-7c632336.js");
/* harmony import */ var _chunk_99929188_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-99929188.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-99929188.js");
/* harmony import */ var _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunk-90d954cd.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js");
/* harmony import */ var _chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chunk-da1efb5f.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-da1efb5f.js");
function iosEnterAnimation(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,l=s.height,p=window.innerWidth,d=window.innerHeight,c=o&&o.target&&o.target.getBoundingClientRect(),m=null!=c&&"top"in c?c.top:d/2-l/2,u=null!=c&&"left"in c?c.left:p/2,f=c&&c.width||0,v=c&&c.height||0,h=t.querySelector(".popover-arrow"),y=h.getBoundingClientRect(),b=y.width,P=y.height;null==c&&(h.style.display="none");var D={top:m+v,left:u+f/2-b/2},g={top:m+v+(P-1),left:u+f/2-a/2},O=!1,_=!1;g.left<POPOVER_IOS_BODY_PADDING+25?(O=!0,g.left=POPOVER_IOS_BODY_PADDING):a+POPOVER_IOS_BODY_PADDING+g.left+25>p&&(_=!0,g.left=p-a-POPOVER_IOS_BODY_PADDING,r="right"),m+v+l>d&&m-l>0?(D.top=m-(P+1),g.top=m-l-(P-1),t.className=t.className+" popover-bottom",n="bottom"):m+v+l>d&&(i.style.bottom=POPOVER_IOS_BODY_PADDING+"%"),h.style.top=D.top+"px",h.style.left=D.left+"px",i.style.top=g.top+"px",i.style.left=g.left+"px",O&&(i.style.left="calc("+g.left+"px + var(--ion-safe-area-left, 0px))"),_&&(i.style.left="calc("+g.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var w=new e,E=new e;E.addElement(t.querySelector("ion-backdrop")),E.fromTo("opacity",.01,.08);var A=new e;return A.addElement(t.querySelector(".popover-wrapper")),A.fromTo("opacity",.01,1),Promise.resolve(w.addElement(t).easing("ease").duration(100).add(E).add(A))}var POPOVER_IOS_BODY_PADDING=5;function iosLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function mdEnterAnimation(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,l=s.height,p=window.innerWidth,d=window.innerHeight,c=o&&o.target&&o.target.getBoundingClientRect(),m=null!=c&&"top"in c?c.top:d/2-l/2,u="rtl"===document.dir,f=c&&c.height||0,v={top:m,left:null!=c&&"left"in c?u?c.left-a+c.width:c.left:p/2-a/2};v.left<POPOVER_MD_BODY_PADDING?v.left=POPOVER_MD_BODY_PADDING:a+POPOVER_MD_BODY_PADDING+v.left>p&&(v.left=p-a-POPOVER_MD_BODY_PADDING,r="right"),m+f+l>d&&m-l>0?(v.top=m-l,t.className=t.className+" popover-bottom",n="bottom"):m+f+l>d&&(i.style.bottom=POPOVER_MD_BODY_PADDING+"px"),i.style.top=v.top+"px",i.style.left=v.left+"px",i.style.transformOrigin=n+" "+r;var h=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.32);var b=new e;b.addElement(t.querySelector(".popover-wrapper")),b.fromTo("opacity",.01,1);var P=new e;P.addElement(t.querySelector(".popover-content")),P.fromTo("scale",.001,1);var D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(h.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(b).add(P).add(D))}var POPOVER_MD_BODY_PADDING=12;function mdLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var Popover=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["a"])},e.prototype.lifecycle=function(e){var t=this.usersElement,o=LIFECYCLE_MAP[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e,t,o;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(_chunk_99929188_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.usersElement)];case 2:return n.sent(),[2,Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)]}})})},e.prototype.dismiss=function(e,t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var o;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){switch(n.label){case 0:return[4,Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this,e,t,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event)];case 1:return(o=n.sent())?[4,Object(_chunk_99929188_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.cssClass),{"popover-translucent":this.translucent})}},e.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"popover-wrapper"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"popover-arrow"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, [dir=rtl]   .sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{right:3px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},PopoverController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,o){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc,e,t,"ion-popover",o)},e.prototype.getTop=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return[2,Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=142.js.map