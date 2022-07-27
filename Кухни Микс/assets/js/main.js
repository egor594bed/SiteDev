const sliderButtons = document.querySelectorAll(".quality-slider__slider-button");
const subSlider = document.querySelector(".quality-slider__sub-slider");
const subSlideList = document.querySelectorAll(".quality-slider__sub-slide");
let subSliderPseudo = window.getComputedStyle(subSlider, ":before")["left"];


sliderButtons.forEach( btn => {
    btn.addEventListener("click", function (e) {
        if (this.classList.contains("quality-slider__slider-button--left")) {
            let activeClass = document.querySelector(".quality-slider__sub-slide--active");
            let activeID = activeClass.id;

            if (activeID.slice(10) == 1) {
                let newActiveClass = document.getElementById(`sub-slide-10`);
                swipe(activeClass, newActiveClass)
            }

            else {
                let newActiveClass = document.getElementById(`sub-slide-${Number(activeID.slice(10)) - 1}`);
                swipe(activeClass, newActiveClass)
            }
            
            
            
        }

        else if (this.classList.contains("quality-slider__slider-button--right")){
            let activeClass = document.querySelector(".quality-slider__sub-slide--active");
            let activeID = activeClass.id;

            if (activeID.slice(10) == 10) {
                let newActiveClass = document.getElementById(`sub-slide-1`);
                swipe(activeClass, newActiveClass)
            }

            else {
                let newActiveClass = document.getElementById(`sub-slide-${Number(activeID.slice(10)) + 1}`);
                swipe(activeClass, newActiveClass)
            }
            
        }
    })
})

function pseudoPosition () {
    console.log(Number(subSliderPseudo.replace("px", "")) + 1 + "px")
}



function swipe (oldClass, newClass) {
    oldClass.classList.remove("quality-slider__sub-slide--active");
    newClass.classList.add("quality-slider__sub-slide--active");
}


