/*************************
	Fixed Header
*************************/

<script>
$(window).scroll(function(){
var distanceY = window.pageYOffset || document.documentElement.scrollTop,
shrinkOn = 300,
body = document.querySelector(".header-container");
if ($(this).scrollTop() > 10){
$('.header-container').addClass("sticky-header");
}
else{
$('.header-container').removeClass("sticky-header");
}
});
</script>

/*************************
	Placeholder
*************************/

$(".custom_search .input .hs-input").attr("placeholder", "Search Our Site...");


$(".custom-footer-search .input .hs-input").attr("placeholder", "Search..");
$(".custom-footer-search .input .hs-input").focus(function() {
    $(this).attr('placeholder', ' ')
}).blur(function() {
    $(this).attr('placeholder', 'Search..')
})

/*************************
	Search Bar
*************************/

<form onsubmit="return doSearch()">
	<input class="text" type="text" name="s" size="17" value="" id="q"/>
	<a href="#" class="submit" onclick="doSearch()">Search</a>
</form>
<script>
function doSearch() {
	var q = document.getElementById("q").value;
	var search_url = "http://essencehealthcare.com/member/search-results.aspx?usterms=";
	window.open(search_url+q);
	return true;
}
</script>

/*************************
	Convert Image to Background
*************************/

// Custom Banner
var bannerImage = $('.banner-image img').attr('src');
$('.custom-banner').css('background-image', 'url(' + bannerImage + ')');
$('.banner-image').closest('.row-fluid-wrapper').remove();

/*************************
	Back To Top
*************************/

$('.footer-container-wrapper').after('<a id="back-to-top" href="#top"><span></span>Back To Top</a>');
$("#back-to-top").hide();

$(window).scroll(function(){
if ($(window).scrollTop()>100){
    $("#back-to-top").fadeIn(500);
}
else
{
    $("#back-to-top").fadeOut(500);
}
});
//back to top
$("#back-to-top").click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});

/*************************
	Toggle and Slide
*************************/

<script>
$(document).ready(function(){
	//click the following to toggle
	$(".search_click").click(function() {
	   //need the following to toggle
	   $(".custom_search form").toggle();  
	});
});
</script>

==========================
Language selecter code




<div id="google_translate_element"></div>
<script> 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en'
  }, 'google_translate_element');
}
</script>
<script src="http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>



