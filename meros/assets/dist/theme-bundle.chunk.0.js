webpackJsonp([0],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(cert){if(typeof cert!=='string'){return false}return /^[A-Z0-9]{3}\-[A-Z0-9]{3}\-[A-Z0-9]{3}\-[A-Z0-9]{3}$/.exec(cert)});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_manager__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_nod__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_gift_certificate_validator__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_models_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_modal__ = __webpack_require__(66);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var GiftCertificate=function(_PageManager){_inherits(GiftCertificate,_PageManager);function GiftCertificate(){_classCallCheck(this,GiftCertificate);var _this=_possibleConstructorReturn(this,_PageManager.call(this));var $certBalanceForm=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#gift-certificate-balance');var purchaseModel={recipientName:function recipientName(val){return val.length},recipientEmail:function recipientEmail(){return __WEBPACK_IMPORTED_MODULE_4__common_models_forms__["a" /* default */].email.apply(__WEBPACK_IMPORTED_MODULE_4__common_models_forms__["a" /* default */],arguments)},senderName:function senderName(val){return val.length},senderEmail:function senderEmail(){return __WEBPACK_IMPORTED_MODULE_4__common_models_forms__["a" /* default */].email.apply(__WEBPACK_IMPORTED_MODULE_4__common_models_forms__["a" /* default */],arguments)},customAmount:function customAmount(value,min,max){return value&&value>=min&&value<=max},setAmount:function setAmount(value,options){var found=false;options.forEach(function(option){if(option===value){found=true;return false}});return found}};var $purchaseForm=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#gift-certificate-form');var $customAmounts=$purchaseForm.find('input[name="certificate_amount"]');var purchaseValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:'#gift-certificate-form input[type="submit"]',delay:300});if($customAmounts.length){var $element=$purchaseForm.find('input[name="certificate_amount"]');var min=$element.data('min');var minFormatted=$element.data('min-formatted');var max=$element.data('max');var maxFormatted=$element.data('max-formatted');purchaseValidator.add({selector:'#gift-certificate-form input[name="certificate_amount"]',validate:function validate(cb,val){var numberVal=Number(val);if(!numberVal){cb(false)}cb(numberVal>=min&&numberVal<=max)},errorMessage:'You must enter a certificate amount between '+minFormatted+' and '+maxFormatted+'.'})}purchaseValidator.add([{selector:'#gift-certificate-form input[name="to_name"]',validate:function validate(cb,val){var result=purchaseModel.recipientName(val);cb(result)},errorMessage:'You must enter a valid recipient name.'},{selector:'#gift-certificate-form input[name="to_email"]',validate:function validate(cb,val){var result=purchaseModel.recipientEmail(val);cb(result)},errorMessage:'You must enter a valid recipient email.'},{selector:'#gift-certificate-form input[name="from_name"]',validate:function validate(cb,val){var result=purchaseModel.senderName(val);cb(result)},errorMessage:'You must enter your name.'},{selector:'#gift-certificate-form input[name="from_email"]',validate:function validate(cb,val){var result=purchaseModel.senderEmail(val);cb(result)},errorMessage:'You must enter a valid email.'},{selector:'#gift-certificate-form input[name="certificate_theme"]:first-of-type',triggeredBy:'#gift-certificate-form input[name="certificate_theme"]',validate:function validate(cb){var val=$purchaseForm.find('input[name="certificate_theme"]:checked').val();cb(typeof val==='string')},errorMessage:'You must select a gift certificate theme.'},{selector:'#gift-certificate-form input[name="agree"]',validate:function validate(cb){var val=$purchaseForm.find('input[name="agree"]').get(0).checked;cb(val)},errorMessage:'You must agree to these terms.'},{selector:'#gift-certificate-form input[name="agree2"]',validate:function validate(cb){var val=$purchaseForm.find('input[name="agree2"]').get(0).checked;cb(val)},errorMessage:'You must agree to these terms.'}]);if($certBalanceForm.length){var balanceVal=_this.checkCertBalanceValidator($certBalanceForm);$certBalanceForm.submit(function(){balanceVal.performCheck();if(!balanceVal.areAll('valid')){return false}})}$purchaseForm.submit(function(event){purchaseValidator.performCheck();if(!purchaseValidator.areAll('valid')){return event.preventDefault()}});__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#gift-certificate-preview').click(function(event){event.preventDefault();purchaseValidator.performCheck();if(!purchaseValidator.areAll('valid')){return}var modal=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__global_modal__["a" /* defaultModal */])();var previewUrl=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data('preview-url')+'&'+$purchaseForm.serialize();modal.open();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["a" /* api */].getPage(previewUrl,{},function(err,content){if(err){return modal.updateContent(_this.context.previewError)}modal.updateContent(content,{wrap:true})})});return _this}GiftCertificate.prototype.checkCertBalanceValidator=function checkCertBalanceValidator($balanceForm){var balanceValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:$balanceForm.find('input[type="submit"]')});balanceValidator.add({selector:$balanceForm.find('input[name="giftcertificatecode"]'),validate:function validate(cb,val){cb(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_gift_certificate_validator__["a" /* default */])(val))},errorMessage:'You must enter a certificate code.'});return balanceValidator};return GiftCertificate}(__WEBPACK_IMPORTED_MODULE_0__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (GiftCertificate);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.0.js.map