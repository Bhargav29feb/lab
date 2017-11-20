$(document).ready(function(){
    $('.header-mobile-links ul > li').click(function() {
    $(this).siblings().removeClass('clicked');
    $(this).toggleClass('clicked');
  });
  
  $(".mobile-phone-number").click(function(event){
        event.stopPropagation();
    });
  
 });
 
 =============================

$('.mobile-phone-number').hide();   
$('.header-mobile-links ul > li > a').click(function(){
  $('.mobile-phone-number').slideUp();   
  $('.header-mobile-links ul > li').removeClass('active');
  if(!$(this).next().is(':visible')) {
      $(this).next().slideDown()
      $(this).parent().toggleClass('active'); 
  };
});