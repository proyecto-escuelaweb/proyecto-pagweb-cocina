$(document).ready(function(){

    $window = $(window);
    var h = $window.height();
    $(".contenido-tienda").css("margin-top", h);
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:4
        }
    }
})