import $ from 'jquery';
import classie from 'classie';
import utils from '@bigcommerce/stencil-utils';
/* eslint-disable space-before-function-paren */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable wrap-iife */

export default function() {

  var is_mobile = false;
  if ($(window).width() < 1023) {
    is_mobile = true;
  }
  else{
    is_mobile = false;
  }

   jQuery(document).ready(function($) {

      // OwlCarousel init
      const $carousel = $('[data-owl]');
      if ($carousel.length) {
         $carousel.each(function(index, el) {
            $(this).owlCarousel($(this).data('owl'));
         });
      }

      // SideBar Toggle Mobile View
      if ($('#sidebar-toggle').length) {          
        $('.sidebarBlock .side-module-heading').click(function(){
          if(!is_mobile) return false;
          if($(this).hasClass('is-hide')){
            $(this).removeClass('is-hide');
            $(this).addClass('is-show');
          }
          else{
            $(this).addClass('is-hide');
            $(this).removeClass('is-show');
          }
          if($(this).next().css('display') == 'none'){
            $(this).next().slideDown();
          }
          else{       
            $(this).next().slideUp();
          }
        });     
        $('#sidebar-toggle').click(function() {
          $('.sidebarBlock .side-module-heading').next().hide();
          $('.sidebarBlock .side-module-heading').addClass('is-hide');
          if(!is_mobile) return false;
          if ($(this).find('i').hasClass('fa-chevron-down')) {
             $('.page-sidebar > nav').slideDown();                
             $(this).find('i').attr('class', 'fa fa-chevron-up');        
          } 
          else if ($(this).find('i').hasClass('fa-chevron-up')) {               
             $('.page-sidebar > nav').slideUp();              
             $(this).find('i').attr('class', 'fa fa-chevron-down');
          }
        });
      }

      // Mobile Menu Links
      $('#mobile-customer ul').css('max-height', screen.height);
      $(window).resize(function(event) {
         /* Act on the event */
         $('#mobile-categories ul').css('max-height', screen.height);
         $('#mobile-customer ul').css('max-height', screen.height);
      });

      $('#mobile-customer ul li > span').click(function() {
         if ($(this).hasClass('toggle-expand')) {
            $(this).siblings('div').addClass('sub-expand');
            $(this).parent().addClass('expanded');
            $(this).attr('class', 'toggle-close');
         } else if ($(this).hasClass('toggle-close')) {
            $(this).siblings('div').removeClass('sub-expand');
            $(this).parent().removeClass('expanded');
            $(this).attr('class', 'toggle-expand');
         }
      });


      // check pagination
      $('.pagination').each(function(index, el) {
         if ((!$(this).children('ul.pagination-list').length > 0) && ($(this).children('.compare-link').length > 0)) {
            $(this).addClass('only-compare');
         }
      });

      function initSearchBoxFixed() {
         const eventtype = $.browser.mobile ? 'touchstart' : 'click';
         $('.search-toggle').on(eventtype, function(ev) {
            ev.preventDefault();
            $(this).parent().toggleClass('is-open');
         });
         $(document).on(eventtype, function(ev) {
            if ($(ev.target).closest('#quickSearch').length === 0) {
               $('.search-toggle').parent().removeClass('is-open');
            }
         });
      }

      initSearchBoxFixed();


      // Mobile Search Toggle Button
      $('#mobile-search-toggle').click(function(event) {
         /* Act on the event */
         $(this).toggleClass('is-open');
      });
	  
       	function halo_FeaturedCategory_owlCarousel(){    
       		$(".featured-category-owl").owlCarousel({
                loop:true,
                responsiveClass:true,
                   responsive:{
                     0:{
                         items:1,
                         nav:true
                     },
                     620:{
                         items:2,
                         nav:true
                     },
                     992:{
                         items:3,
                         nav:true,
                         loop:false
                     }
                }   		
       		});
       	}
   	    halo_FeaturedCategory_owlCarousel();

      
      if ($(window).width() < 768) {
        $('#st-trigger-effects').appendTo('#trigger-mobile');
        $('.hl-top-cart').appendTo('#topcart-mobile');
      }
      else{
        $('#st-trigger-effects').appendTo('#trigger-desktop');
        $('.hl-top-cart').appendTo('#top-cart');
      }

      $(".prod-name > a").each(function() {
        var product = jQuery(this);
        var proId = product.attr('data-product-id');
        var url = '/products.php?productId=' + proId;
            var link = product.attr("href");
        if(proId){
          utils.api.product.getById(proId, { template: 'halothemes/free-shipping' }, (err, response) => {       
            if($(response).find('.productView-info-value').hasClass('hl_shipping_free')){
              var free_shipping = jQuery(response).find(".hl_shipping_free").text();          
              product.parent().parent().append("<p class='free_shipping'><i class='fa fa-truck' aria-hidden='true'></i>"+free_shipping+"</p>");
            }
          });         
        }    
      });


      $(document).on('change', '#search_category', function(){
        var p = $(this).parent().width();
        var text_option = $(this).find("option:selected").text();
        var $test_option = $("<span>").html(text_option);
        $test_option.appendTo('body');
        var width_option = $test_option.width() + 42;
        $test_option.remove();
        $(this).width(width_option);
        var q = width_option + 42 ;
        $('#search_query').css({ 'width': 'calc(100% - ' + q + 'px)' });

      })
	});

$(window).resize(function() {
      if ($(window).width() >= 992) {
         $('body').removeClass('st-off-canvas');
         $('#st-container').removeClass('st-effect-1 st-menu-open');
      }
      if ($(window).width() < 768) {
        $('#st-trigger-effects').appendTo('#trigger-mobile');
        $('.hl-top-cart').appendTo('#topcart-mobile');
      }
      else{
        $('#st-trigger-effects').appendTo('#trigger-desktop');
        $('.hl-top-cart').appendTo('#top-cart');
      }

      if ($(window).width() < 1023) {
        is_mobile = true; 
        $('.sidebarBlock .side-module-heading').next().hide();            
        $('.page-sidebar > nav').hide();
        if ($('#sidebar-toggle').find('i').hasClass('fa-chevron-up')) {
           $('#sidebar-toggle').find('i').attr('class', 'fa fa-chevron-down');         
        }   
          }
          else{
        is_mobile = false;  
        $('.sidebarBlock .side-module-heading').next().show();  
        if ($('#sidebar-toggle').find('i').hasClass('fa-chevron-down')) {
           $('#sidebar-toggle').find('i').attr('class', 'fa fa-chevron-up');         
        }
      }

});

   /**
    * sidebarEffects.js v1.0.0
    * http://www.codrops.com
    *
    * Licensed under the MIT license.
    * http://www.opensource.org/licenses/mit-license.php
    *
    * Copyright 2013, Codrops
    * http://www.codrops.com
    */

   const SidebarMenuEffects = (function() {
      function hasParentClass(e, classname) {
         if (e === document) return false;
         if (classie.has(e, classname)) {
            return true;
         }
         return e.parentNode && hasParentClass(e.parentNode, classname);
      }

      function init() {
         const container = document.getElementById('st-container');
         const buttons = Array.prototype.slice.call(document.querySelectorAll('#st-trigger-effects > a'));
         const buttonsAlt = Array.prototype.slice.call(document.querySelectorAll('li#mobileAccountSidebar > a'));
         // event type (if mobile use touch events)
         const eventtype = $.browser.mobile ? 'touchstart' : 'click';
         const resetMenu = function() {
            classie.remove(container, 'st-menu-open');
            $('body').removeClass('st-off-canvas');
         };
         const bodyClickFn = function(evt) {
            // if( hasParentClass( evt.target, 'close-canvas' ) ) {
            if (!hasParentClass(evt.target, 'st-menu')) {
               resetMenu();
               document.removeEventListener(eventtype, bodyClickFn);
            }
         };

         // toggle categories
         buttons.forEach(function(el, i) {
            const effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
               ev.stopPropagation();
               ev.preventDefault();
               container.className = 'st-container'; // clear
               classie.add(container, effect);
               $(window).scrollTop(0);
               setTimeout(function() {
                  classie.add(container, 'st-menu-open');
                  $('body').addClass('st-off-canvas');
               }, 25);
               document.addEventListener(eventtype, bodyClickFn);
            });
         });

         // toggle account
         buttonsAlt.forEach(function(el, i) {
            const effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
               ev.stopPropagation();
               ev.preventDefault();
               container.className = 'st-container'; // clear
               classie.add(container, effect);
               $(window).scrollTop(0);
               setTimeout(function() {
                  classie.add(container, 'st-menu-open');
                  $('body').addClass('st-off-canvas');
               }, 25);
               document.addEventListener(eventtype, bodyClickFn);
            });
         });
      }

      init();
   })();

}
