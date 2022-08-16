// const preloaderImg = document.querySelectorAll(".preloader__dimond-img");
// const preloaderLogo = document.querySelector(".preloader__logo");

// setTimeout(function () {

//     preloaderImg.forEach(img => {
//         img.classList.add("preloader__dimond-img--active");
//     })

//     setTimeout (function () {
//         preloaderLogo.classList.add("preloader__logo--active");

//         setTimeout (function () {
//             window.onload = document.querySelector(".preloader").classList.add("none");
//             window.onload = document.querySelector("body").classList.remove("lock");
//         }, 2500)

//     }, 2000)
    
// }, 500)

const intro = document.querySelector(".intro"),
      introAbout = document.querySelector(".intro-about"),
      introAboutDecor = document.querySelector(".intro-about__decor"),
      mainNewsArrowPrev = '<div class="nav__arrow nav__arrow--prev"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 6L8 11L3 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      mainNewsArrowNext = '<div class="nav__arrow nav__arrow--next"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 6L8 11L3 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';


document.addEventListener("scroll", function (e) {
    if ((introAbout.offsetTop * 0.2) < window.pageYOffset) {
        introAboutDecor.classList.remove("intro-about__decor--start");
    }
});

$(document).ready(function(){
    $('.service-slider__wrapper').slick({
        horizontal: true,
        horizontalSwiping: true,
        touchThreshold: true,
        dots: false,
        arrows: false,
        infinite: false, 
        slidesToShow: 4,

    });

    $('.service-slider__wrapper').on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }}));



    $(".main-news-slider").slick ({
        dots: false,
        appendArrows: $(".main-news__top-nav"),
        prevArrow: mainNewsArrowPrev,
        nextArrow: mainNewsArrowNext,
        horizontal: true,
        horizontalSwiping: true,
        infinite: false,
        slidesToShow: 5, 

    })
});
