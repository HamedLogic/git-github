webpackJsonp([5],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_function_bind__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_function_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_function_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_manager__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_gift_certificate_validator__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_shipping_estimator__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_modal__ = __webpack_require__(66);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Cart=function(_PageManager){_inherits(Cart,_PageManager);function Cart(){_classCallCheck(this,Cart);return _possibleConstructorReturn(this,_PageManager.apply(this,arguments))}Cart.prototype.loaded=function loaded(next){this.$cartContent=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-content]');this.$cartMessages=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-status]');this.$cartTotals=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-totals]');this.$overlay=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart] .loadingOverlay').hide();// TODO: temporary until roper pulls in his cart components
this.bindEvents();next()};Cart.prototype.cartUpdateInput=function cartUpdateInput($target){var _this2=this;var itemId=$target.data('cart-itemid');var $el=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('#qty-'+itemId);var newQty=parseInt($el.val(),10);var maxQty=parseInt($el.data('quantity-max'),10);var minQty=parseInt($el.data('quantity-min'),10);var minError=$el.data('quantity-min-error');var maxError=$el.data('quantity-max-error');// Does not quality for min/max quantity
if(newQty<minQty){return alert(minError)}else if(maxQty>0&&newQty>maxQty){return alert(maxError)}this.$overlay.show();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.itemUpdate(itemId,newQty,function(err,response){_this2.$overlay.hide();if(response.data.status==='succeed'){// if the quantity is changed "1" from "0", we have to remove the row.
var remove=newQty===0;_this2.refreshContent(remove)}else{$el.val(newQty);alert(response.data.errors.join('\n'))}})};Cart.prototype.cartUpdate=function cartUpdate($target){var _this3=this;var itemId=$target.data('cart-itemid');var $el=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('#qty-'+itemId);var oldQty=parseInt($el.val(),10);var maxQty=parseInt($el.data('quantity-max'),10);var minQty=parseInt($el.data('quantity-min'),10);var minError=$el.data('quantity-min-error');var maxError=$el.data('quantity-max-error');var newQty=$target.data('action')==='inc'?oldQty+1:oldQty-1;// Does not quality for min/max quantity
if(newQty<minQty){return alert(minError)}else if(maxQty>0&&newQty>maxQty){return alert(maxError)}this.$overlay.show();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.itemUpdate(itemId,newQty,function(err,response){_this3.$overlay.hide();if(response.data.status==='succeed'){// if the quantity is changed "1" from "0", we have to remove the row.
var remove=newQty===0;_this3.refreshContent(remove)}else{$el.val(oldQty);alert(response.data.errors.join('\n'))}})};Cart.prototype.cartRemoveItem=function cartRemoveItem(itemId){var _this4=this;this.$overlay.show();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.itemRemove(itemId,function(err,response){if(response.data.status==='succeed'){_this4.refreshContent(true)}else{alert(response.data.errors.join('\n'))}})};Cart.prototype.cartEditOptions=function cartEditOptions(itemId){var _this5=this;var modal=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__global_modal__["a" /* defaultModal */])();var options={template:'cart/modals/configure-product'};modal.open();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.productAttributes.configureInCart(itemId,options,function(err,response){modal.updateContent(response.content);_this5.bindGiftWrappingForm()});__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].hooks.on('product-option-change',function(event,option){var $changedOption=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(option);var $form=$changedOption.parents('form');var $submit=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('input.button',$form);var $messageBox=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.alertMessageBox');var item=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[name="item_id"]',$form).attr('value');__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.productAttributes.optionChange(item,$form.serialize(),function(err,result){var data=result.data||{};if(err){alert(err);return false}if(data.purchasing_message){__WEBPACK_IMPORTED_MODULE_3_jquery___default()('p.alertBox-message',$messageBox).text(data.purchasing_message);$submit.prop('disabled',true);$messageBox.show()}else{$submit.prop('disabled',false);$messageBox.hide()}if(!data.purchasable||!data.instock){$submit.prop('disabled',true)}else{$submit.prop('disabled',false)}})})};Cart.prototype.refreshContent=function refreshContent(remove){var _this6=this;var $cartItemsRows=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-item-row]',this.$cartContent);var $cartPageTitle=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-page-title]');var options={template:{content:'cart/content',totals:'cart/totals',pageTitle:'cart/page-title',statusMessages:'cart/status-messages'}};this.$overlay.show();// Remove last item from cart? Reload
if(remove&&$cartItemsRows.length===1){return window.location.reload()}__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.getContent(options,function(err,response){_this6.$cartContent.html(response.content);_this6.$cartTotals.html(response.totals);_this6.$cartMessages.html(response.statusMessages);$cartPageTitle.replaceWith(response.pageTitle);_this6.bindEvents();_this6.$overlay.hide();var quantity=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-quantity]',_this6.$cartContent).data('cart-quantity')||0;__WEBPACK_IMPORTED_MODULE_3_jquery___default()('body').trigger('cart-quantity-update',quantity)})};Cart.prototype.bindCartEvents=function bindCartEvents(){var _this7=this;var debounceTimeout=400;var cartUpdate=__WEBPACK_IMPORTED_MODULE_1_lodash_function_bind___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce___default()(this.cartUpdate,debounceTimeout),this);var cartUpdateInput=__WEBPACK_IMPORTED_MODULE_1_lodash_function_bind___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce___default()(this.cartUpdateInput,debounceTimeout),this);var cartRemoveItem=__WEBPACK_IMPORTED_MODULE_1_lodash_function_bind___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_function_debounce___default()(this.cartRemoveItem,debounceTimeout),this);// cart update
__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-cart-update]',this.$cartContent).on('click',function(event){var $target=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget);event.preventDefault();// update cart quantity
cartUpdate($target)});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('input.form-input.form-input--incrementTotal',this.$cartContent).on('change',function(event){var $target=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget);event.preventDefault();// update cart quantity
cartUpdateInput($target)});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.cart-remove',this.$cartContent).on('click',function(event){var itemId=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).data('cart-itemid');var openTime=new Date;var result=confirm(__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).data('confirm-delete'));var delta=new Date-openTime;event.preventDefault();// Delta workaround for Chrome's "prevent popup"
if(!result&&delta>10){return}// remove item from cart
cartRemoveItem(itemId)});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-item-edit]',this.$cartContent).on('click',function(event){var itemId=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).data('item-edit');event.preventDefault();// edit item in cart
_this7.cartEditOptions(itemId)})};Cart.prototype.bindPromoCodeEvents=function bindPromoCodeEvents(){var _this8=this;var $couponContainer=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code');var $couponForm=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-form');var $codeInput=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[name="couponcode"]',$couponForm);__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code-add').on('click',function(event){event.preventDefault();__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).hide();$couponContainer.show();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code-cancel').show();$codeInput.focus()});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code-cancel').on('click',function(event){event.preventDefault();$couponContainer.hide();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code-cancel').hide();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.coupon-code-add').show()});$couponForm.on('submit',function(event){var code=$codeInput.val();event.preventDefault();// Empty code
if(!code){return alert($codeInput.data('error'))}__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.applyCode(code,function(err,response){if(response.data.status==='success'){_this8.refreshContent()}else{alert(response.data.errors.join('\n'))}})})};Cart.prototype.bindGiftCertificateEvents=function bindGiftCertificateEvents(){var _this9=this;var $certContainer=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-code');var $certForm=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.cart-gift-certificate-form');var $certInput=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[name="certcode"]',$certForm);__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-add').on('click',function(event){event.preventDefault();__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).toggle();$certContainer.toggle();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-cancel').toggle()});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-cancel').on('click',function(event){event.preventDefault();$certContainer.toggle();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-add').toggle();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.gift-certificate-cancel').toggle()});$certForm.on('submit',function(event){var code=$certInput.val();event.preventDefault();if(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_gift_certificate_validator__["a" /* default */])(code)){return alert($certInput.data('error'))}__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.applyGiftCertificate(code,function(err,resp){if(resp.data.status==='success'){_this9.refreshContent()}else{alert(resp.data.errors.join('\n'))}})})};Cart.prototype.bindGiftWrappingEvents=function bindGiftWrappingEvents(){var _this10=this;var modal=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__global_modal__["a" /* defaultModal */])();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-item-giftwrap]').on('click',function(event){var itemId=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).data('item-giftwrap');var options={template:'cart/modals/gift-wrapping-form'};event.preventDefault();modal.open();__WEBPACK_IMPORTED_MODULE_5__bigcommerce_stencil_utils__["c" /* default */].api.cart.getItemGiftWrappingOptions(itemId,options,function(err,response){modal.updateContent(response.content);_this10.bindGiftWrappingForm()})})};Cart.prototype.bindGiftWrappingForm=function bindGiftWrappingForm(){__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.giftWrapping-select').change(function(event){var $select=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget);var id=$select.val();var index=$select.data('index');if(!id){return}var allowMessage=$select.find('option[value='+id+']').data('allow-message');__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.giftWrapping-image-'+index).hide();__WEBPACK_IMPORTED_MODULE_3_jquery___default()('#giftWrapping-image-'+index+'-'+id).show();if(allowMessage){__WEBPACK_IMPORTED_MODULE_3_jquery___default()('#giftWrapping-message-'+index).show()}else{__WEBPACK_IMPORTED_MODULE_3_jquery___default()('#giftWrapping-message-'+index).hide()}});__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.giftWrapping-select').trigger('change');function toggleViews(){var value=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('input:radio[name ="giftwraptype"]:checked').val();var $singleForm=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.giftWrapping-single');var $multiForm=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('.giftWrapping-multiple');if(value==='same'){$singleForm.show();$multiForm.hide()}else{$singleForm.hide();$multiForm.show()}}__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[name="giftwraptype"]').click(toggleViews);toggleViews()};Cart.prototype.bindEvents=function bindEvents(){this.bindCartEvents();this.bindPromoCodeEvents();this.bindGiftWrappingEvents();this.bindGiftCertificateEvents();// initiate shipping estimator module
this.shippingEstimator=new __WEBPACK_IMPORTED_MODULE_6__cart_shipping_estimator__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-shipping-estimator]'))};return Cart}(__WEBPACK_IMPORTED_MODULE_2__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(prototype) {
    if (isObject(prototype)) {
      object.prototype = prototype;
      var result = new object;
      object.prototype = undefined;
    }
    return result || {};
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_collection_each__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_collection_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_collection_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_lang_isEmpty__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_lang_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_lang_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_object_transform__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_object_transform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_object_transform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bigcommerce_stencil_utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_utils__ = __webpack_require__(240);
/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */function makeStateRequired(stateElement,context){var attrs=__WEBPACK_IMPORTED_MODULE_2_lodash_object_transform___default()(stateElement.prop('attributes'),function(result,item){var ret=result;ret[item.name]=item.value;return ret});var replacementAttributes={id:attrs.id,'data-label':attrs['data-label'],class:'form-select',name:attrs.name,'data-field-type':attrs['data-field-type']};stateElement.replaceWith(__WEBPACK_IMPORTED_MODULE_3_jquery___default()('<select></select>',replacementAttributes));var $newElement=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-field-type="State"]');var $hiddenInput=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[name*="FormFieldIsText"]');if($hiddenInput.length!==0){$hiddenInput.remove()}if($newElement.prev().find('small').length===0){// String is injected from localizer
$newElement.prev().append('<small>'+context.required+'</small>')}else{$newElement.prev().find('small').show()}return $newElement}/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */function makeStateOptional(stateElement){var attrs=__WEBPACK_IMPORTED_MODULE_2_lodash_object_transform___default()(stateElement.prop('attributes'),function(result,item){var ret=result;ret[item.name]=item.value;return ret});var replacementAttributes={type:'text',id:attrs.id,'data-label':attrs['data-label'],class:'form-input',name:attrs.name,'data-field-type':attrs['data-field-type']};stateElement.replaceWith(__WEBPACK_IMPORTED_MODULE_3_jquery___default()('<input />',replacementAttributes));var $newElement=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-field-type="State"]');if($newElement.length!==0){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__form_utils__["c" /* insertStateHiddenField */])($newElement);$newElement.prev().find('small').hide()}return $newElement}/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */function addOptions(statesArray,$selectElement,options){var container=[];container.push('<option value="">'+statesArray.prefix+'</option>');if(!__WEBPACK_IMPORTED_MODULE_1_lodash_lang_isEmpty___default()($selectElement)){__WEBPACK_IMPORTED_MODULE_0_lodash_collection_each___default()(statesArray.states,function(stateObj){if(options.useIdForStates){container.push('<option value="'+stateObj.id+'">'+stateObj.name+'</option>')}else{container.push('<option value="'+stateObj.name+'">'+stateObj.name+'</option>')}});$selectElement.html(container.join(' '))}}/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 *//* harmony default export */ __webpack_exports__["a"] = (function(stateElement){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var options=arguments[2];var callback=arguments[3];/**
     * Backwards compatible for three parameters instead of four
     *
     * Available options:
     *
     * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
     */if(typeof options==='function'){/* eslint-disable no-param-reassign */callback=options;options={};/* eslint-enable no-param-reassign */}__WEBPACK_IMPORTED_MODULE_3_jquery___default()('select[data-field-type="Country"]').on('change',function(event){var countryName=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(event.currentTarget).val();if(countryName===''){return}__WEBPACK_IMPORTED_MODULE_4__bigcommerce_stencil_utils__["c" /* default */].api.country.getByName(countryName,function(err,response){if(err){alert(context.state_error);return callback(err)}var $currentInput=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-field-type="State"]');if(!__WEBPACK_IMPORTED_MODULE_1_lodash_lang_isEmpty___default()(response.data.states)){// The element may have been replaced with a select, reselect it
var $selectElement=makeStateRequired($currentInput,context);addOptions(response.data,$selectElement,options);callback(null,$selectElement)}else{var newElement=makeStateOptional($currentInput,context);callback(null,newElement)}})})});

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(241),
    baseEach = __webpack_require__(247),
    createForEach = __webpack_require__(421);

/**
 * Iterates over elements of `collection` invoking `iteratee` for each element.
 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
 * (value, index|key, collection). Iteratee functions may exit iteration early
 * by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length" property
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
 * may be used for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2]).forEach(function(n) {
 *   console.log(n);
 * }).value();
 * // => logs each value from left to right and returns the array
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
 *   console.log(n, key);
 * });
 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
 */
var forEach = createForEach(arrayEach, baseEach);

module.exports = forEach;


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var bindCallback = __webpack_require__(97),
    isArray = __webpack_require__(13);

/**
 * Creates a function for `_.forEach` or `_.forEachRight`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over an array.
 * @param {Function} eachFunc The function to iterate over a collection.
 * @returns {Function} Returns the new each function.
 */
function createForEach(arrayFunc, eachFunc) {
  return function(collection, iteratee, thisArg) {
    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
      ? arrayFunc(collection, iteratee)
      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
  };
}

module.exports = createForEach;


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(241),
    baseCallback = __webpack_require__(246),
    baseCreate = __webpack_require__(400),
    baseForOwn = __webpack_require__(99),
    isArray = __webpack_require__(13),
    isFunction = __webpack_require__(249),
    isObject = __webpack_require__(12),
    isTypedArray = __webpack_require__(250);

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own enumerable
 * properties through `iteratee`, with each invocation potentially mutating
 * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
 * with four arguments: (accumulator, value, key, object). Iteratee functions
 * may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Array|Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * });
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
 *   result[key] = n * 3;
 * });
 * // => { 'a': 3, 'b': 6 }
 */
function transform(object, iteratee, accumulator, thisArg) {
  var isArr = isArray(object) || isTypedArray(object);
  iteratee = baseCallback(iteratee, thisArg, 4);

  if (accumulator == null) {
    if (isArr || isObject(object)) {
      var Ctor = object.constructor;
      if (isArr) {
        accumulator = isArray(object) ? new Ctor : [];
      } else {
        accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
      }
    } else {
      accumulator = {};
    }
  }
  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(cert){if(typeof cert!=='string'){return false}return /^[A-Z0-9]{3}\-[A-Z0-9]{3}\-[A-Z0-9]{3}\-[A-Z0-9]{3}$/.exec(cert)});

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(400),
    baseLodash = __webpack_require__(432);

/** Used as references for `-Infinity` and `Infinity`. */
var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = POSITIVE_INFINITY;
  this.__views__ = [];
}

LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ 432:
/***/ (function(module, exports) {

/**
 * The function whose prototype all chaining wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(400),
    isObject = __webpack_require__(12);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtorWrapper(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors.
    // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtorWrapper;


/***/ }),

/***/ 434:
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    if (array[index] === placeholder) {
      array[index] = PLACEHOLDER;
      result[++resIndex] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(400),
    baseLodash = __webpack_require__(432);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
 * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
 */
function LodashWrapper(value, chainAll, actions) {
  this.__wrapped__ = value;
  this.__actions__ = actions || [];
  this.__chain__ = !!chainAll;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(102),
    metaMap = __webpack_require__(440);

/**
 * The base implementation of `setData` without support for hot loop detection.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),

/***/ 437:
/***/ (function(module, exports) {

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array|Object} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders) {
  var holdersLength = holders.length,
      argsIndex = -1,
      argsLength = nativeMax(args.length - holdersLength, 0),
      leftIndex = -1,
      leftLength = partials.length,
      result = Array(leftLength + argsLength);

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    result[holders[argsIndex]] = args[argsIndex];
  }
  while (argsLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),

/***/ 438:
/***/ (function(module, exports) {

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array|Object} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders) {
  var holdersIndex = -1,
      holdersLength = holders.length,
      argsIndex = -1,
      argsLength = nativeMax(args.length - holdersLength, 0),
      rightIndex = -1,
      rightLength = partials.length,
      result = Array(argsLength + rightLength);

  while (++argsIndex < argsLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    result[offset + holders[holdersIndex]] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(440),
    noop = __webpack_require__(459);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var getNative = __webpack_require__(67);

/** Native method references. */
var WeakMap = getNative(global, 'WeakMap');

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(436),
    now = __webpack_require__(254);

/** Used to detect when a function becomes hot. */
var HOT_COUNT = 150,
    HOT_SPAN = 16;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity function
 * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = (function() {
  var count = 0,
      lastCalled = 0;

  return function(key, value) {
    var stamp = now(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return key;
      }
    } else {
      count = 0;
    }
    return baseSetData(key, value);
  };
}());

module.exports = setData;


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_state_country__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_nod__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bigcommerce_stencil_utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_form_utils__ = __webpack_require__(240);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var ShippingEstimator=function(){function ShippingEstimator($element){_classCallCheck(this,ShippingEstimator);this.$element=$element;this.$state=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-field-type="State"]',this.$element);this.initFormValidation();this.bindStateCountryChange();this.bindEstimatorEvents()}ShippingEstimator.prototype.initFormValidation=function initFormValidation(){var _this=this;this.shippingEstimator='form[data-shipping-estimator]';this.shippingValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:this.shippingEstimator+' .shipping-estimate-submit'});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-submit',this.$element).click(function(event){// When switching between countries, the state/region is dynamic
// Only perform a check for all fields when country has a value
// Otherwise areAll('valid') will check country for validity
if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this.shippingEstimator+' select[name="shipping-country"]').val()){_this.shippingValidator.performCheck()}if(_this.shippingValidator.areAll('valid')){return}event.preventDefault()});this.bindValidation();this.bindStateValidation();this.bindUPSRates()};ShippingEstimator.prototype.bindValidation=function bindValidation(){this.shippingValidator.add([{selector:this.shippingEstimator+' select[name="shipping-country"]',validate:function validate(cb,val){var countryId=Number(val);var result=countryId!==0&&!isNaN(countryId);cb(result)},errorMessage:'The \'Country\' field cannot be blank.'}])};ShippingEstimator.prototype.bindStateValidation=function bindStateValidation(){var _this2=this;this.shippingValidator.add([{selector:__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.shippingEstimator+' select[name="shipping-state"]'),validate:function validate(cb){var result=void 0;var $ele=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this2.shippingEstimator+' select[name="shipping-state"]');if($ele.length){var eleVal=$ele.val();result=eleVal&&eleVal.length&&eleVal!=='State/province'}cb(result)},errorMessage:'The \'State/Province\' field cannot be blank.'}])};/**
     * Toggle between default shipping and ups shipping rates
     */ShippingEstimator.prototype.bindUPSRates=function bindUPSRates(){var UPSRateToggle='.estimator-form-toggleUPSRate';__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click',UPSRateToggle,function(event){var $estimatorFormUps=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.estimator-form--ups');var $estimatorFormDefault=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.estimator-form--default');event.preventDefault();$estimatorFormUps.toggleClass('u-hiddenVisually');$estimatorFormDefault.toggleClass('u-hiddenVisually')})};ShippingEstimator.prototype.bindStateCountryChange=function bindStateCountryChange(){var _this3=this;var $last=void 0;// Requests the states for a country with AJAX
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_state_country__["a" /* default */])(this.$state,this.context,{useIdForStates:true},function(err,field){if(err){alert(err);throw new Error(err)}var $field=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(field);if(_this3.shippingValidator.getStatus(_this3.$state)!=='undefined'){_this3.shippingValidator.remove(_this3.$state)}if($last){_this3.shippingValidator.remove($last)}if($field.is('select')){$last=field;_this3.bindStateValidation()}else{$field.attr('placeholder','State/province');__WEBPACK_IMPORTED_MODULE_4__common_form_utils__["a" /* Validators */].cleanUpStateValidation(field)}// When you change a country, you swap the state/province between an input and a select dropdown
// Not all countries require the province to be filled
// We have to remove this class when we swap since nod validation doesn't cleanup for us
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success')})};ShippingEstimator.prototype.bindEstimatorEvents=function bindEstimatorEvents(){var $estimatorContainer=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimator');var $estimatorForm=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.estimator-form');$estimatorForm.on('submit',function(event){var params={country_id:__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name="shipping-country"]',$estimatorForm).val(),state_id:__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name="shipping-state"]',$estimatorForm).val(),city:__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name="shipping-city"]',$estimatorForm).val(),zip_code:__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name="shipping-zip"]',$estimatorForm).val()};event.preventDefault();__WEBPACK_IMPORTED_MODULE_3__bigcommerce_stencil_utils__["c" /* default */].api.cart.getShippingQuotes(params,'cart/shipping-quotes',function(err,response){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-quotes').html(response.content);// bind the select button
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.select-shipping-quote').on('click',function(clickEvent){var quoteId=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-quote:checked').val();clickEvent.preventDefault();__WEBPACK_IMPORTED_MODULE_3__bigcommerce_stencil_utils__["c" /* default */].api.cart.submitShippingQuote(quoteId,function(){location.reload()})})})});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-show').on('click',function(event){event.preventDefault();__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).hide();$estimatorContainer.removeClass('u-hiddenVisually');__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-hide').show()});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-hide').on('click',function(event){event.preventDefault();$estimatorContainer.addClass('u-hiddenVisually');__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-show').show();__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shipping-estimate-hide').hide()})};return ShippingEstimator}();/* harmony default export */ __webpack_exports__["a"] = (ShippingEstimator);

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(431),
    LodashWrapper = __webpack_require__(435),
    baseLodash = __webpack_require__(432),
    isArray = __webpack_require__(13),
    isObjectLike = __webpack_require__(32),
    wrapperClone = __webpack_require__(458);

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit chaining.
 * Methods that operate on and return arrays, collections, and functions can
 * be chained together. Methods that retrieve a single value or may return a
 * primitive value will automatically end the chain returning the unwrapped
 * value. Explicit chaining may be enabled using `_.chain`. The execution of
 * chained methods is lazy, that is, execution is deferred until `_#value`
 * is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
 * fusion is an optimization strategy which merge iteratee calls; this can help
 * to avoid the creation of intermediate data structures and greatly reduce the
 * number of iteratee executions.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
 * `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
 * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
 * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
 * and `where`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
 * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
 * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
 * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
 * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
 * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
 * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
 * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
 * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
 * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
 * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
 * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
 * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
 * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
 * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
 * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
 * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
 * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
 * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
 * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
 * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
 * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
 * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
 * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
 * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
 * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
 * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
 * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
 * `unescape`, `uniqueId`, `value`, and `words`
 *
 * The wrapper method `sample` will return a wrapped value when `n` is provided,
 * otherwise an unwrapped value is returned.
 *
 * @name _
 * @constructor
 * @category Chain
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(function(total, n) {
 *   return total + n;
 * });
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(function(n) {
 *   return n * n;
 * });
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;

module.exports = lodash;


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var createWrapper = __webpack_require__(452),
    replaceHolders = __webpack_require__(434),
    restParam = __webpack_require__(395);

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and prepends any additional `_.bind` arguments to those provided to the
 * bound function.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind` this method does not set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var greet = function(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * };
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // using placeholders
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = restParam(function(func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, bind.placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var createCtorWrapper = __webpack_require__(433);

/**
 * Creates a function that wraps `func` and invokes it with the `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new bound function.
 */
function createBindWrapper(func, thisArg) {
  var Ctor = createCtorWrapper(func);

  function wrapper() {
    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
    return fn.apply(thisArg, arguments);
  }
  return wrapper;
}

module.exports = createBindWrapper;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var arrayCopy = __webpack_require__(243),
    composeArgs = __webpack_require__(437),
    composeArgsRight = __webpack_require__(438),
    createCtorWrapper = __webpack_require__(433),
    isLaziable = __webpack_require__(454),
    reorder = __webpack_require__(457),
    replaceHolders = __webpack_require__(434),
    setData = __webpack_require__(441);

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that wraps `func` and invokes it with optional `this`
 * binding of, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurry = bitmask & CURRY_FLAG,
      isCurryBound = bitmask & CURRY_BOUND_FLAG,
      isCurryRight = bitmask & CURRY_RIGHT_FLAG,
      Ctor = isBindKey ? undefined : createCtorWrapper(func);

  function wrapper() {
    // Avoid `arguments` object use disqualifying optimizations by
    // converting it to an array before providing it to other functions.
    var length = arguments.length,
        index = length,
        args = Array(length);

    while (index--) {
      args[index] = arguments[index];
    }
    if (partials) {
      args = composeArgs(args, partials, holders);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight);
    }
    if (isCurry || isCurryRight) {
      var placeholder = wrapper.placeholder,
          argsHolders = replaceHolders(args, placeholder);

      length -= argsHolders.length;
      if (length < arity) {
        var newArgPos = argPos ? arrayCopy(argPos) : undefined,
            newArity = nativeMax(arity - length, 0),
            newsHolders = isCurry ? argsHolders : undefined,
            newHoldersRight = isCurry ? undefined : argsHolders,
            newPartials = isCurry ? args : undefined,
            newPartialsRight = isCurry ? undefined : args;

        bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

        if (!isCurryBound) {
          bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
        }
        var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
            result = createHybridWrapper.apply(undefined, newData);

        if (isLaziable(func)) {
          setData(result, newData);
        }
        result.placeholder = placeholder;
        return result;
      }
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    if (argPos) {
      args = reorder(args, argPos);
    }
    if (isAry && ary < args.length) {
      args.length = ary;
    }
    if (this && this !== global && this instanceof wrapper) {
      fn = Ctor || createCtorWrapper(func);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybridWrapper;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var createCtorWrapper = __webpack_require__(433);

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` and invokes it with the optional `this`
 * binding of `thisArg` and the `partials` prepended to those provided to
 * the wrapper.
 *
 * @private
 * @param {Function} func The function to partially apply arguments to.
 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to the new function.
 * @returns {Function} Returns the new bound function.
 */
function createPartialWrapper(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtorWrapper(func);

  function wrapper() {
    // Avoid `arguments` object use disqualifying optimizations by
    // converting it to an array before providing it `func`.
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength);

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartialWrapper;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(436),
    createBindWrapper = __webpack_require__(449),
    createHybridWrapper = __webpack_require__(450),
    createPartialWrapper = __webpack_require__(451),
    getData = __webpack_require__(439),
    mergeData = __webpack_require__(455),
    setData = __webpack_require__(441);

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  length -= (holders ? holders.length : 0);
  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func),
      newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    mergeData(newData, data);
    bitmask = newData[1];
    arity = newData[9];
  }
  newData[9] = arity == null
    ? (isBindKey ? 0 : func.length)
    : (nativeMax(arity - length, 0) || 0);

  if (bitmask == BIND_FLAG) {
    var result = createBindWrapper(newData[0], newData[2]);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
    result = createPartialWrapper.apply(undefined, newData);
  } else {
    result = createHybridWrapper.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setter(result, newData);
}

module.exports = createWrapper;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(456);

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = array ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(431),
    getData = __webpack_require__(439),
    getFuncName = __webpack_require__(453),
    lodash = __webpack_require__(447);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var arrayCopy = __webpack_require__(243),
    composeArgs = __webpack_require__(437),
    composeArgsRight = __webpack_require__(438),
    replaceHolders = __webpack_require__(434);

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers required to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
 * augment function arguments, making the order in which they are executed important,
 * preventing the merging of metadata. However, we make an exception for a safe
 * common case where curried functions have `_.ary` and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < ARY_FLAG;

  var isCombo =
    (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
    (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
    (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = arrayCopy(value);
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),

/***/ 456:
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var arrayCopy = __webpack_require__(243),
    isIndex = __webpack_require__(69);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = arrayCopy(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(431),
    LodashWrapper = __webpack_require__(435),
    arrayCopy = __webpack_require__(243);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  return wrapper instanceof LazyWrapper
    ? wrapper.clone()
    : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
}

module.exports = wrapperClone;


/***/ }),

/***/ 459:
/***/ (function(module, exports) {

/**
 * A no-operation function that returns `undefined` regardless of the
 * arguments it receives.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.5.js.map