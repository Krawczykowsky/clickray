$('.menu-toggle').click(function(){
    $('.site-nav').toggleClass('site-nav--open');
    $(this).toggleClass('open');
});

$("#about").on("click", function(){
    $("body,html").animate({
        scrollTop: $(".about-me").offset().top
    }, 1000)

});
$("#ofert-menu").on("click", function(){
    $("body,html").animate({
        scrollTop: $(".ofert").offset().top
    }, 1000)

});
$("#portfolio-menu").on("click", function(){
    $("body,html").animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000)

});
$("#contact-menu").on("click", function(){
    $("body,html").animate({
        scrollTop: $(".contact").offset().top
    }, 1000)

});