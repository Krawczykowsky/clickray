$(document).ready(function (){
    $("#about").click(function (){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("#portf").click(function (){
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("#contact").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 2000);
    });
});