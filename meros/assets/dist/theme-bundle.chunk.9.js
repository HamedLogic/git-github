webpackJsonp([9],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_manager__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_state_country__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_nod__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_form_validation__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_models_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_form_utils__ = __webpack_require__(240);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Auth=function(_PageManager){_inherits(Auth,_PageManager);function Auth(){_classCallCheck(this,Auth);var _this=_possibleConstructorReturn(this,_PageManager.call(this));_this.formCreateSelector='form[data-create-account-form]';return _this}Auth.prototype.registerLoginValidation=function registerLoginValidation($loginForm){var _this2=this;var loginModel=__WEBPACK_IMPORTED_MODULE_5__common_models_forms__["a" /* default */];this.loginValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_nod__["a" /* default */])({submit:'.login-form input[type="submit"]'});this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function validate(cb,val){var result=loginModel.email(val);cb(result)},errorMessage:'Please use a valid email address, such as user@example.com.'},{selector:'.login-form input[name="login_pass"]',validate:function validate(cb,val){var result=loginModel.password(val);cb(result)},errorMessage:'You must enter a password.'}]);$loginForm.submit(function(event){_this2.loginValidator.performCheck();if(_this2.loginValidator.areAll('valid')){return}event.preventDefault()})};Auth.prototype.registerForgotPasswordValidation=function registerForgotPasswordValidation($forgotPasswordForm){var _this3=this;this.forgotPasswordValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_nod__["a" /* default */])({submit:'.forgot-password-form input[type="submit"]'});this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_5__common_models_forms__["a" /* default */].email(val);cb(result)},errorMessage:'Please use a valid email address, such as user@example.com.'}]);$forgotPasswordForm.submit(function(event){_this3.forgotPasswordValidator.performCheck();if(_this3.forgotPasswordValidator.areAll('valid')){return}event.preventDefault()})};Auth.prototype.registerNewPasswordValidation=function registerNewPasswordValidation(){var newPasswordForm='.new-password-form';var newPasswordValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_nod__["a" /* default */])({submit:__WEBPACK_IMPORTED_MODULE_2_jquery___default()(newPasswordForm+' input[type="submit"]')});var passwordSelector=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(newPasswordForm+' input[name="password"]');var password2Selector=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(newPasswordForm+' input[name="password_confirm"]');__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setPasswordValidation(newPasswordValidator,passwordSelector,password2Selector,this.passwordRequirements)};Auth.prototype.registerCreateAccountValidator=function registerCreateAccountValidator($createAccountForm){var validationModel=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_form_validation__["a" /* default */])($createAccountForm);var createAccountValidator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_nod__["a" /* default */])({submit:this.formCreateSelector+' input[type=\'submit\']'});var $stateElement=__WEBPACK_IMPORTED_MODULE_2_jquery___default()('[data-field-type="State"]');var emailSelector=this.formCreateSelector+' [data-field-type=\'EmailAddress\']';var $emailElement=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(emailSelector);var passwordSelector=this.formCreateSelector+' [data-field-type=\'Password\']';var $passwordElement=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(passwordSelector);var password2Selector=this.formCreateSelector+' [data-field-type=\'ConfirmPassword\']';var $password2Element=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(password2Selector);createAccountValidator.add(validationModel);if($stateElement){var $last=void 0;// Requests the states for a country with AJAX
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_state_country__["a" /* default */])($stateElement,this.context,function(err,field){if(err){throw new Error(err)}var $field=__WEBPACK_IMPORTED_MODULE_2_jquery___default()(field);if(createAccountValidator.getStatus($stateElement)!=='undefined'){createAccountValidator.remove($stateElement)}if($last){createAccountValidator.remove($last)}if($field.is('select')){$last=field;__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setStateCountryValidation(createAccountValidator,field)}else{__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].cleanUpStateValidation(field)}})}if($emailElement){createAccountValidator.remove(emailSelector);__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setEmailValidation(createAccountValidator,emailSelector)}if($passwordElement&&$password2Element){createAccountValidator.remove(passwordSelector);createAccountValidator.remove(password2Selector);__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setPasswordValidation(createAccountValidator,passwordSelector,password2Selector,this.passwordRequirements)}$createAccountForm.submit(function(event){createAccountValidator.performCheck();if(createAccountValidator.areAll('valid')){return}event.preventDefault()})};/**
     * Request is made in this function to the remote endpoint and pulls back the states for country.
     * @param next
     */Auth.prototype.loaded=function loaded(next){var $createAccountForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])(this.formCreateSelector);var $loginForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.login-form');var $forgotPasswordForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.forgot-password-form');var $newPasswordForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.new-password-form');// reset password
// Injected via auth.html
this.passwordRequirements=this.context.passwordRequirements;if($loginForm.length){this.registerLoginValidation($loginForm)}if($newPasswordForm.length){this.registerNewPasswordValidation()}if($forgotPasswordForm.length){this.registerForgotPasswordValidation($forgotPasswordForm)}if($createAccountForm.length){this.registerCreateAccountValidator($createAccountForm)}next()};return Auth}(__WEBPACK_IMPORTED_MODULE_0__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Auth);

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

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */function buildDateValidation($formField,validation){// No date range restriction, skip
if(validation.min_date&&validation.max_date){var invalidMessage='Your chosen date must fall between '+validation.min_date+' and '+validation.max_date+'.';var formElementId=$formField.attr('id');var minSplit=validation.min_date.split('-');var maxSplit=validation.max_date.split('-');var minDate=new Date(minSplit[0],minSplit[1]-1,minSplit[2]);var maxDate=new Date(maxSplit[0],maxSplit[1]-1,maxSplit[2]);return{selector:'#'+formElementId+' select[data-label="year"]',triggeredBy:'#'+formElementId+' select:not([data-label="year"])',validate:function validate(cb,val){var day=Number($formField.find('select[data-label="day"]').val());var month=Number($formField.find('select[data-label="month"]').val())-1;var year=Number(val);var chosenDate=new Date(year,month,day);cb(chosenDate>=minDate&&chosenDate<=maxDate)},errorMessage:invalidMessage}}}/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */function buildRequiredCheckboxValidation($formField,validation){var formFieldId=$formField.attr('id');var primarySelector='#'+formFieldId+' input:first-of-type';var secondarySelector='#'+formFieldId+' input';return{selector:primarySelector,triggeredBy:secondarySelector,validate:function validate(cb){var result=false;__WEBPACK_IMPORTED_MODULE_0_jquery___default()(secondarySelector).each(function(index,checkbox){if(checkbox.checked){result=true;return false}});cb(result)},errorMessage:'The \''+validation.label+'\' field cannot be blank.'}}function buildRequiredValidation(validation,selector){return{selector:selector,validate:function validate(cb,val){cb(val.length>0)},errorMessage:'The \''+validation.label+'\' field cannot be blank.'}}function buildNumberRangeValidation(validation,formFieldSelector){var invalidMessage='The value for '+validation.label+' must be between '+validation.min+' and '+validation.max+'.';var min=Number(validation.min);var max=Number(validation.max);return{selector:formFieldSelector+' input[name="'+validation.name+'"]',validate:function validate(cb,val){var numberVal=Number(val);cb(numberVal>=min&&numberVal<=max)},errorMessage:invalidMessage}}function buildValidation($validateableElement){var validation=$validateableElement.data('validation');var fieldValidations=[];var formFieldSelector='#'+$validateableElement.attr('id');if(validation.type==='datechooser'){var dateValidation=buildDateValidation($validateableElement,validation);if(dateValidation){fieldValidations.push(dateValidation)}}else if(validation.required&&(validation.type==='checkboxselect'||validation.type==='radioselect')){fieldValidations.push(buildRequiredCheckboxValidation($validateableElement,validation))}else{$validateableElement.find('input, select, textarea').each(function(index,element){var $inputElement=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);var tagName=$inputElement.get(0).tagName;var inputName=$inputElement.attr('name');var elementSelector=formFieldSelector+' '+tagName+'[name="'+inputName+'"]';if(validation.type==='numberonly'){fieldValidations.push(buildNumberRangeValidation(validation,formFieldSelector))}if(validation.required){fieldValidations.push(buildRequiredValidation(validation,elementSelector))}})}return fieldValidations}/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 *//* harmony default export */ __webpack_exports__["a"] = (function($form){var validationsToPerform=[];$form.find('[data-validation]').each(function(index,input){validationsToPerform=validationsToPerform.concat(buildValidation(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(input)))});return validationsToPerform});

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.9.js.map