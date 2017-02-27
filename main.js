//<![CDATA[
$(".sandh").click(function(){
    $(".cdtmenu").slideToggle();
});
$(".navicon").click(function(){
    $(".sidebary").toggleClass( "highlight" );
    $(".Mainy").toggleClass( "highlighty" );
});
$('.post-body strike').replaceWith(function(){
  return $("<div class='tag'>"+ $(this).html()+"</div>");
});

//]]>
