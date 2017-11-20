$('.custom-menu-primary-1 .hs-menu-wrapper > ul > li, .custom-menu-primary-1 .hs-menu-wrapper > ul > li > ul > li, .custom-menu-primary-1 .hs-menu-wrapper > ul > li > ul > li > ul > li').each(function(){
   var alink = $(this).children('a').attr('href');
   var atext = $(this).children('a').text();
      $(this).children('ul').prepend('<li class="custom-parent-link"><a href="'+ alink +'">' + atext + '</a></li>');
   
   $(this).children('ul').prepend('<li class="dl-back"> <a href="javascript:void(0)">Back</a>');
   });