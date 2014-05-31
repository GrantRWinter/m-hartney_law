$(document).ready(function() {


  
  $gavel = $("#gavel");
  $service = $('.service');
  $(window).scroll(function(){
    scrtop = $(window).scrollTop();
    serviceBox = $(".service-box")
    $service.each (function(){
      if (($(window).height() + scrtop) > $(this).offset().top)
        $(this).find($('.service-box')).velocity({opacity: 1}, {duration:1900}).end().find($('.font-icon')).addClass("animated fadeInLeft");
      //$(this).find($('.service-box')).addClass("animated fadeInUp").end().find($('.font-icon')).addClass("animated fadeInLeft");
    });
  });

  $('#team-link').click(function(){
    $('#team').velocity("scroll", {duration: 1500, easing: "easeOutQuint", offset: -100})
  });

  $('#services-link').click(function(){
    $('#services').velocity("scroll", {duration: 1500, easing: "easeOutQuint", offset: -100})
  });

  $('#location-link').click(function(){
    $('#map-canvas').velocity("scroll", {duration: 1500, easing: "easeOutQuint", offset: -100})
  });

  $('#contact-link').click(function(){
    $('#contact').velocity("scroll", {duration: 1500, easing: "easeOutQuint", offset: -100})
  });

  $('.navbar-brand').click(function(){
    $('#hero').velocity('scroll', {duration: 1500, easing: "easeOutQuint", offset: -100})
  })
  
});
