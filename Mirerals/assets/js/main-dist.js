const loadTime = 2500;
const preloaderImg = document.querySelectorAll(".preloader__dimond-img");
const preloaderLogo = document.querySelector(".preloader__logo");

setTimeout(function () {

    preloaderImg.forEach(img => {
        img.classList.add("preloader__dimond-img--active");
    })

    setTimeout (function () {
        preloaderLogo.classList.add("preloader__logo--active");

        setTimeout (function () {
            window.onload = document.querySelector(".preloader").classList.add("none");
            window.onload = document.querySelector("body").classList.remove("lock");
        }, loadTime)

    }, 2000)
    
}, 500)

const intro = document.querySelector(".intro"),
      introAbout = document.querySelector(".intro-about"),
      introAboutDecor = document.querySelector(".intro-about__decor"),
      allLinks = document.querySelectorAll("a[href^='#'"),
      viewWrapper = document.querySelector(".view-wrapper");
      

// const none = document.querySelectorAll(".none");

// MAIN DECOR

document.addEventListener("scroll", function (e) {

    if ((introAbout.offsetTop * 0.2) < window.pageYOffset) {
        introAboutDecor.classList.remove("intro-about__decor--start");
    }

    // else if (e.originalEvent.deltaY > 0) {
    //     console.log(window.pageYOffset)
    //     // e.preventDefault();
    //     let scrollPosition = intro.getBoundingClientRect().top + intro.offsetHeight;
    //     // console.log(scrollPosition)
    //     console.log(intro.getBoundingClientRect().top)
    //     console.log(intro.offsetHeight)
    //     window.scrollBy({
    //         top: scrollPosition,
    //         behavior: 'smooth'
    //     });
    // }
 
});


// SKROLL
allLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        let scrollTarget = document.getElementById(href);

        elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelector(".intro-about__button-scroll").addEventListener("click", function (e) {
    introAbout.classList.add("intro-about--collapse");
    setTimeout(function() {
        window.scrollBy({
            top: 0
        });
        setTimeout(function() {
            viewWrapper.style = "height: 100%; margin-top: -100vh"
        }, 1000)
        
    }, 1001);
    
});

$(document).ready(function(){

    const mainNewsArrowPrev = '<div class="nav__arrow nav__arrow--prev"><svg    width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 6L8 11L3 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mainNewsArrowNext = '<div class="nav__arrow nav__arrow--next"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 6L8 11L3 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    // MAIN SLIDERS

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
    const sliderItem = document.querySelectorAll(".service-slider__item");
    const sliderWidth = document.querySelector(".slick-track").offsetWidth;
    let sliderOffset =  window.innerWidth - sliderWidth;

    // console.log(document.querySelector(".slick-track").getBoundingClientRect().left)

    if (e.originalEvent.deltaY > 0) {

        if (document.querySelector(".slick-track").getBoundingClientRect().left == sliderOffset) {

        }

        else {
            e.preventDefault();
            $(this).slick('slickNext');
        }
        
    } else {

        if (document.querySelector(".slick-track").getBoundingClientRect().left == 0) {
            // ВОЗВРАЩЕНИЕ ЭБАУТ БЛОКА
            e.preventDefault();
            introAbout.classList.toggle("intro-about--collapse");
        }
        else {
            e.preventDefault();
            $(this).slick('slickPrev');
        }

    }}));

    $(".main-news__slider").slick ({
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
