webpackJsonp([3],{

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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(406);


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CollapsibleEvents; });
/* unused harmony export Collapsible */
/* harmony export (immutable) */ __webpack_exports__["a"] = collapsibleFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_object_extend__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_object_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_object_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_list__ = __webpack_require__(403);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var PLUGIN_KEY='collapsible';var CollapsibleEvents={open:'open.collapsible',close:'close.collapsible',toggle:'toggle.collapsible',click:'click.collapsible'};var CollapsibleState={closed:'closed',open:'open'};function prependHash(id){if(id&&id.indexOf('#')===0){return id}return'#'+id}function optionsFromData($element){return{disabledBreakpoint:$element.data(PLUGIN_KEY+'-disabled-breakpoint'),disabledState:$element.data(PLUGIN_KEY+'-disabled-state'),enabledState:$element.data(PLUGIN_KEY+'-enabled-state'),openClassName:$element.data(PLUGIN_KEY+'-open-class-name')}}/**
 * Collapse/Expand toggle
 */var Collapsible=function(){/**
     * @param {jQuery} $toggle - Trigger button
     * @param {jQuery} $target - Content to collapse / expand
     * @param {Object} [options] - Configurable options
     * @param {Object} [options.$context]
     * @param {Object} [options.disabledBreakpoint]
     * @param {Object} [options.disabledState]
     * @param {Object} [options.enabledState]
     * @param {Object} [options.openClassName]
     * @example
     *
     * <button id="#more">Collapse</button>
     * <div id="content">...</div>
     *
     * new Collapsible($('#more'), $('#content'));
     */function Collapsible($toggle,$target){var _ref=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},disabledBreakpoint=_ref.disabledBreakpoint,disabledState=_ref.disabledState,enabledState=_ref.enabledState,_ref$openClassName=_ref.openClassName,openClassName=_ref$openClassName===undefined?'is-open':_ref$openClassName;_classCallCheck(this,Collapsible);this.$toggle=$toggle;this.$target=$target;this.targetId=$target.attr('id');this.openClassName=openClassName;this.disabledState=disabledState;this.enabledState=enabledState;if(disabledBreakpoint){this.disabledMediaQueryList=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__media_query_list__["a" /* default */])(disabledBreakpoint)}if(this.disabledMediaQueryList){this.disabled=this.disabledMediaQueryList.matches}else{this.disabled=false}// Auto-bind
this.onClicked=this.onClicked.bind(this);this.onDisabledMediaQueryListMatch=this.onDisabledMediaQueryListMatch.bind(this);// Assign DOM attributes
this.$target.attr('aria-hidden',this.isCollapsed);this.$toggle.attr('aria-controls',$target.attr('id')).attr('aria-expanded',this.isOpen);// Listen
this.bindEvents()}Collapsible.prototype.open=function open(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$notify=_ref2.notify,notify=_ref2$notify===undefined?true:_ref2$notify;this.$toggle.addClass(this.openClassName).attr('aria-expanded',true);this.$target.addClass(this.openClassName).attr('aria-hidden',false);if(notify){this.$toggle.trigger(CollapsibleEvents.open,[this]);this.$toggle.trigger(CollapsibleEvents.toggle,[this])}};Collapsible.prototype.close=function close(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$notify=_ref3.notify,notify=_ref3$notify===undefined?true:_ref3$notify;this.$toggle.removeClass(this.openClassName).attr('aria-expanded',false);this.$target.removeClass(this.openClassName).attr('aria-hidden',true);if(notify){this.$toggle.trigger(CollapsibleEvents.close,[this]);this.$toggle.trigger(CollapsibleEvents.toggle,[this])}};Collapsible.prototype.toggle=function toggle(){if(this.isCollapsed){this.open()}else{this.close()}};Collapsible.prototype.toggleByState=function toggleByState(state){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key]}switch(state){case CollapsibleState.open:return this.open.apply(this,args);case CollapsibleState.closed:return this.close.apply(this,args);default:return undefined;}};Collapsible.prototype.hasCollapsible=function hasCollapsible(collapsibleInstance){return __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.contains(this.$target.get(0),collapsibleInstance.$target.get(0))};Collapsible.prototype.bindEvents=function bindEvents(){this.$toggle.on(CollapsibleEvents.click,this.onClicked);if(this.disabledMediaQueryList&&this.disabledMediaQueryList.addListener){this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch)}};Collapsible.prototype.unbindEvents=function unbindEvents(){this.$toggle.off(CollapsibleEvents.click,this.onClicked);if(this.disabledMediaQueryList&&this.disabledMediaQueryList.removeListener){this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch)}};Collapsible.prototype.onClicked=function onClicked(event){if(this.disabled){return}event.preventDefault();this.toggle()};Collapsible.prototype.onDisabledMediaQueryListMatch=function onDisabledMediaQueryListMatch(media){this.disabled=media.matches};_createClass(Collapsible,[{key:'isCollapsed',get:function get(){return!this.$target.hasClass(this.openClassName)||this.$target.is(':hidden')}},{key:'isOpen',get:function get(){return!this.isCollapsed}},{key:'disabled',set:function set(disabled){this._disabled=disabled;if(disabled){this.toggleByState(this.disabledState)}else{this.toggleByState(this.enabledState)}},get:function get(){return this._disabled}}]);return Collapsible}();/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */function collapsibleFactory(){var selector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'[data-'+PLUGIN_KEY+']';var overrideOptions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var $collapsibles=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(selector,overrideOptions.$context);return $collapsibles.map(function(index,element){var $toggle=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(element);var instanceKey=PLUGIN_KEY+'-instance';var cachedCollapsible=$toggle.data(instanceKey);if(cachedCollapsible instanceof Collapsible){return cachedCollapsible}var targetId=prependHash($toggle.data(PLUGIN_KEY)||$toggle.data(PLUGIN_KEY+'-target')||$toggle.attr('href'));var options=__WEBPACK_IMPORTED_MODULE_0_lodash_object_extend___default()(optionsFromData($toggle),overrideOptions);var collapsible=new Collapsible($toggle,__WEBPACK_IMPORTED_MODULE_1_jquery___default()(targetId),options);$toggle.data(instanceKey,collapsible);return collapsible}).toArray()}

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaQueryListFactory;
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */var breakpointSizes={large:1261,medium:801,small:551};/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */function mediaQueryListFactory(breakpointName){if(!breakpointName||!window.matchMedia){return null}var breakpoint=breakpointSizes[breakpointName];var mediaQuery="(min-width: "+breakpoint+"px)";var mediaQueryList=window.matchMedia(mediaQuery);return mediaQueryList}

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(33);

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

module.exports = assignWith;


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var bindCallback = __webpack_require__(97),
    isIterateeCall = __webpack_require__(68),
    restParam = __webpack_require__(395);

/**
 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var assignWith = __webpack_require__(404),
    baseAssign = __webpack_require__(244),
    createAssigner = __webpack_require__(405);

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 * If `customizer` is provided it's invoked to produce the assigned values.
 * The `customizer` is bound to `thisArg` and invoked with five arguments:
 * (objectValue, sourceValue, key, object, source).
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using a customizer callback
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var assign = createAssigner(function(object, source, customizer) {
  return customizer
    ? assignWith(object, source, customizer)
    : baseAssign(object, source);
});

module.exports = assign;


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony default export */ __webpack_exports__["a"] = (function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.all-categories-list li').each(function(){var breadLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==window.location||__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==window.location.pathname){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass('current-cat');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-angle-down').addClass('is-clicked');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-angle-down').addClass('is-clicked')}if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==breadLink){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass('current-cat');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-angle-down').addClass('is-clicked')}});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.all-categories-list i.fa.fa-angle-down').click(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).toggleClass('is-clicked');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).siblings('ul.dropdown-category-list').toggleClass('cat-expanded')})});

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable space-before-function-paren *//* eslint-disable indent *//* eslint-disable comma-dangle *//* eslint-disable no-undef *//* harmony default export */ __webpack_exports__["a"] = (function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-image').magnificPopup({type:'image',closeOnContentClick:true,image:{verticalFit:true},mainClass:'mfp-with-zoom',zoom:{enabled:true,// By default it's false, so don't forget to enable it
duration:300,// duration of the effect, in milliseconds
easing:'ease-in-out'}})});

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_nod__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_collapsible__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_models_forms__ = __webpack_require__(98);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var _class=function(){function _class($reviewForm){_classCallCheck(this,_class);this.validator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_nod__["a" /* default */])({submit:$reviewForm.find('input[type="submit"]')});this.$reviewsContent=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description');this.$collapsible=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-collapsible]',this.$reviewsContent);this.initLinkBind();this.injectPaginationLink();this.collapseReviews()}/**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */_class.prototype.initLinkBind=function initLinkBind(){var _this=this;__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reviewLinkCount').click(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({scrollTop:_this.$reviewsContent.offset().top-5},600);if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.tabs li.product_reviews').hasClass('is-active')){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.tabs li.product_reviews a').trigger('click')}})};_class.prototype.collapseReviews=function collapseReviews(){// We're in paginating state, do not collapse
if(window.location.hash&&window.location.hash.indexOf('#product-reviews')===0){return}// force collapse on page load
this.$collapsible.trigger(__WEBPACK_IMPORTED_MODULE_2__common_collapsible__["b" /* CollapsibleEvents */].click)};/**
     * Inject ID into the pagination link
     */_class.prototype.injectPaginationLink=function injectPaginationLink(){var $nextLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--next .pagination-link',this.$reviewsContent);var $prevLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--previous .pagination-link',this.$reviewsContent);if($nextLink.length){$nextLink.attr('href',$nextLink.attr('href')+' #product-reviews')}if($prevLink.length){$prevLink.attr('href',$prevLink.attr('href')+' #product-reviews')}};_class.prototype.registerValidation=function registerValidation(){this.validator.add([{selector:'[name="revrating"]',validate:'presence',errorMessage:'The \'Rating\' field cannot be blank.'},{selector:'[name="revtitle"]',validate:'min-length:2',errorMessage:'The \'Review Subject\' field cannot be blank.'},{selector:'[name="revtext"]',validate:'min-length:2',errorMessage:'The \'Comments\' field cannot be blank.'},{selector:'[name="email"]',validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_3__common_models_forms__["a" /* default */].email(val);cb(result)},errorMessage:'Please use a valid email address, such as user@example.com.'}]);return this.validator};_class.prototype.validate=function validate(){return this.validator.performCheck()};return _class}();/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoGallery */
/* harmony export (immutable) */ __webpack_exports__["a"] = videoGallery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var VideoGallery=function(){function VideoGallery($element){_classCallCheck(this,VideoGallery);this.$player=$element.find('[data-video-player]');this.$videos=$element.find('[data-video-item]');this.currentVideo={};this.bindEvents()}VideoGallery.prototype.selectNewVideo=function selectNewVideo(e){e.preventDefault();var $target=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);this.currentVideo={id:$target.data('video-id'),$selectedThumb:$target};this.setMainVideo();this.setActiveThumb()};VideoGallery.prototype.setMainVideo=function setMainVideo(){this.$player.attr('src','//www.youtube.com/embed/'+this.currentVideo.id)};VideoGallery.prototype.setActiveThumb=function setActiveThumb(){this.$videos.removeClass('is-active');this.currentVideo.$selectedThumb.addClass('is-active')};VideoGallery.prototype.bindEvents=function bindEvents(){this.$videos.on('click',this.selectNewVideo.bind(this))};return VideoGallery}();function videoGallery(){var pluginKey='video-gallery';var $videoGallery=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+pluginKey+']');$videoGallery.each(function(index,element){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);var isInitialized=$el.data(pluginKey)instanceof VideoGallery;if(isInitialized){return}$el.data(pluginKey,new VideoGallery($el))})}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_manager__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reviews__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_collapsible__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_product_details__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_video_gallery__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_form_utils__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__halothemes_productViewMagnificPopup__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__halothemes_setActiveCategory__ = __webpack_require__(430);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}/*
 Import all product specific js
 */var Product=function(_PageManager){_inherits(Product,_PageManager);function Product(){_classCallCheck(this,Product);var _this=_possibleConstructorReturn(this,_PageManager.call(this));_this.url=location.href;_this.$reviewLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-reveal-id="modal-review-form"]');return _this}Product.prototype.before=function before(next){var _this2=this;// Listen for foundation modal close events to sanitize URL after review.
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('close.fndtn.reveal',function(){if(_this2.url.indexOf('#writeReview')!==-1&&typeof window.history.replaceState==='function'){window.history.replaceState(null,document.title,window.location.pathname)}});next()};Product.prototype.loaded=function loaded(next){var validator=void 0;// Init collapsible
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_collapsible__["a" /* default */])();this.productDetails=new __WEBPACK_IMPORTED_MODULE_4__common_product_details__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView'),this.context,window.BCData.product_attributes);// HaloThemes functions
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__halothemes_productViewMagnificPopup__["a" /* default */])();__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__halothemes_setActiveCategory__["a" /* default */])();__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__product_video_gallery__["a" /* default */])();var $reviewForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.writeReview-form');var review=new __WEBPACK_IMPORTED_MODULE_2__product_reviews__["a" /* default */]($reviewForm);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click','[data-reveal-id="modal-review-form"]',function(){validator=review.registerValidation()});$reviewForm.on('submit',function(){if(validator){validator.performCheck();return validator.areAll('valid')}return false});next()};Product.prototype.after=function after(next){this.productReviewHandler();next()};Product.prototype.productReviewHandler=function productReviewHandler(){if(this.url.indexOf('#writeReview')!==-1){this.$reviewLink.click()}};return Product}(__WEBPACK_IMPORTED_MODULE_1__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.3.js.map