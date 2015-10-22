 'use strict';

 jQuery(document).ready(function($) {

     /* projects.html */
     // sort projects

     $('.projectsHtml a').click(function() {
         var attrValue = $(this).attr('data');
         $('.projectsHtml .nav li').removeClass('active');
         $(this).parent().toggleClass('active');
         $('.images').show('slow');
         if (attrValue === 'all') {
             $('.images').show('slow');
         } else {

             $('.images:not([data="' + attrValue + '"])').hide('slow');
             $('.images [data="' + attrValue + '"]').show('slow');
         }
     });

     /* shop.html */
     // table or grid view

     $('table').hide();

     $('.list').click(function() {
         $('.panel').hide('fast');
         $('table').show('fast');
         $('form .active').removeClass('active');
         $(this).addClass('active');
     });

     $('.grid').click(function() {
         $('table').hide('fast');
         $('.panel').show('fast');
         $('form .active').removeClass('active');
         $(this).addClass('active');
     });

     // show 24, 12, 6 products 

     $('select').click(function() {

         var selected = $('select option:selected').val();

         if (selected === '12') {
             $('.col-md-3').fadeIn(); //show panels
             $('tr').fadeIn(); // shiw table row
         } else if (selected === '6') {
             $('.col-md-3:nth-child(n+7)').fadeOut();
             $('tr:nth-child(n+7)').fadeOut();
         }
     });




     /* services.html */
     // projects carousel



     $('.services-carousel').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         speed: 1000,
         responsive: [{
             breakpoint: 1200,
             settings: {
                 slidesToShow: 6,
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 4,
             }
         }, {
             breakpoint: 768,
             settings: {
                 slidesToShow: 3,
             }
         }, {
             breakpoint: 544,
             settings: {
                 slidesToShow: 2,
             }
         }]
     });


 });



 /* google map scripts */

 function initialize() {
     var mapCanvas = document.getElementById('map');
     var styles = [{
         'featureType': 'landscape',
         'stylers': [{
             'saturation': -100
         }, {
             'lightness': 65
         }, {
             'visibility': 'on'
         }]
     }, {
         'featureType': 'poi',
         'stylers': [{
             'saturation': -100
         }, {
             'lightness': 51
         }, {
             'visibility': 'simplified'
         }]
     }, {
         'featureType': 'road.highway',
         'stylers': [{
             'saturation': -100
         }, {
             'visibility': 'simplified'
         }]
     }, {
         'featureType': 'road.arterial',
         'stylers': [{
             'saturation': -100
         }, {
             'lightness': 30
         }, {
             'visibility': 'on'
         }]
     }, {
         'featureType': 'road.local',
         'stylers': [{
             'saturation': -100
         }, {
             'lightness': 40
         }, {
             'visibility': 'on'
         }]
     }, {
         'featureType': 'transit',
         'stylers': [{
             'saturation': -100
         }, {
             'visibility': 'simplified'
         }]
     }, {
         'featureType': 'administrative.province',
         'stylers': [{
             'visibility': 'off'
         }]
     }, {
         'featureType': 'water',
         'elementType': 'labels',
         'stylers': [{
             'visibility': 'on'
         }, {
             'lightness': -25
         }, {
             'saturation': -100
         }]
     }, {
         'featureType': 'water',
         'elementType': 'geometry',
         'stylers': [{
             'hue': '#ffff00'
         }, {
             'lightness': -25
         }, {
             'saturation': -97
         }]
     }];
     var mapOptions = {
         center: new google.maps.LatLng(31.040901, 31.368281),
         zoom: 14,
         scrollwheel: false,
         scaleControl: false,

         disableDefaultUI: true,

         mapTypeId: google.maps.MapTypeId.ROADMAP,
         styles: styles
     };
     var map = new google.maps.Map(mapCanvas, mapOptions);
 }
 google.maps.event.addDomListener(window, 'load', initialize);

 //wow.js initialisation
 //should be at the bottom to prevent conflict with pages where WoW.js is not used
 new WOW().init();
