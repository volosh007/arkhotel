$(Document).ready(function(){
    $('.slider').slick({
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        fade: true,
        arrows: false,
        dots: false
    });
    
});

$(document).ready(function(){
    var burger = $('.burger')
    var menu = $('.menu')
    
    burger.click(function(){
        burger.toggleClass('burger_active')
        menu.toggleClass('menu_active')
    })
})