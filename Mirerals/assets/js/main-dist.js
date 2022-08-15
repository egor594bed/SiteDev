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

const intro = document.querySelector(".intro");
const introAbout = document.querySelector(".intro-about");
const introAboutDecor = document.querySelector(".intro-about__decor");

document.addEventListener("scroll", function (e) {
    if ((introAbout.offsetTop * 0.2) < window.pageYOffset) {
        introAboutDecor.classList.remove("intro-about__decor--start");
    }
});


