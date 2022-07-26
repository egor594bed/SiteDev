//SLIDER

const subSlideTitle = ["Отдел конструкции", "Распиловочный цех", "Кромочный цех", "Присадочный цех", "Фасадный цех", "Фрезировочный цех", "Цех с прессом", "Покрасочный цех", "ОТК", "Упаковочный цех"];
const subSlideText = ["На этом этапе конструкторы по документам от дизайнера подготавливають все необходимое для создания кухни следующими отделами.", "На станках обрабатываем листовые материалы. Здесь мы создаем аккуратные детали точных размеров.", "В этом цеху детали обрабатываются кромками. Автоматические станки с точно настроенной электронной системой обрезают свесы кромки и полируют стыки материала с кромкой.", "Здесь оператор делает разные отверстия для фурнитуры и крепежей на станке высокой точности с числовым программным управлением (ЧПУ).", "Цех с пятью подразделениями, которые собирает из заготовок заказанную конструкцию.", "Станок с числовым программным упрвалением (ЧПУ) наносит на детали простые, экскизные, сложные и 3Д фрезеровки.", "Мембранно-вакуумным прессом облицовываем плоские и неплоские поверхности шпоном и плёнками ПВХ.", "Окрашиваем детали итальянской эмаалью разными способами покраски, тонируем изделия, патинируем поверхности и покрываем лаками.", "Проверяем каждую деталь с каждого цеха на соответствие установленным в ТЗ требованиям. Все несоответствия отправляют на доработку.", "Упаковочные мебельные станки качественно упаковывают готовые изделия, чтобы все детали доехали до вашего дома в целости и сохранности."];

const sliderButtons = document.querySelectorAll(".quality-slider__slider-button");
const buttonLeft = document.querySelector(".quality-slider__slider-button--left");
const buttonRight = document.querySelector(".quality-slider__slider-button--right");
const subSlider = document.querySelector(".quality-slider__sub-slider");
const subSlideList = document.querySelectorAll(".quality-slider__sub-slide");
const subSliderWorm = document.querySelector(".quality-slider__sub-slider-worm");
const sliderCounterClass = document.querySelector(".quality-slider__slider-counter-dynamic");

let subSliderWormPosition = 0;

sliderButtons.forEach( btn => {
    btn.addEventListener("click", function (e) {
        if (this.classList.contains("quality-slider__slider-button--left")) {
            let activeClass = document.querySelector(".quality-slider__sub-slide--active");
            let activeID = activeClass.id;
            let newActiveClass = document.getElementById(`sub-slide-${Number(activeID.slice(10)) - 1}`);

            if (activeID.slice(10) == 10) {
                removeDisabled(buttonRight);
                swipe(activeClass, newActiveClass)
            }

            else {
                
                if (newActiveClass.id.slice(10) == 1) {
                    disabled(buttonLeft);
                    swipe(activeClass, newActiveClass)
                }

                else {
                    swipe(activeClass, newActiveClass)
                }
                
            }
        }

        else if (this.classList.contains("quality-slider__slider-button--right")){
            let activeClass = document.querySelector(".quality-slider__sub-slide--active");
            let activeID = activeClass.id;
            let newActiveClass = document.getElementById(`sub-slide-${Number(activeID.slice(10)) + 1}`);

            if (activeID.slice(10) == 1) {
                removeDisabled(buttonLeft);
                swipe(activeClass, newActiveClass)
            }

            else {

                if (newActiveClass.id.slice(10) == 10) {
                    disabled(buttonRight);
                    swipe(activeClass, newActiveClass)
                }
                
                else {

                    swipe(activeClass, newActiveClass)
                }
            }
            
        }
    })
})


function swipe (oldClass, newClass) {
    console.log(oldClass)
    let sliderCounter = sliderCounterClass.textContent;
    let counter;

    oldClass.classList.remove("quality-slider__sub-slide--active");
    newClass.classList.add("quality-slider__sub-slide--active");

    const slide = new Slide({
        stage: `Этап ${newClass.id.slice(10)}`,
        title: subSlideTitle[Number(newClass.id.slice(10)) - 1],
        text: subSlideText[Number(newClass.id.slice(10)) - 1],
    })

    if (Number(oldClass.id.slice(10)) < Number(newClass.id.slice(10))) {
        subSliderWormPosition = subSliderWormPosition + 142;
        subSliderWorm.style = `left: ${subSliderWormPosition}px`

        sliderCounterClass.textContent = `0${Number(sliderCounter) + 1}`;
        counter = `0${Number(sliderCounter) + 1}`;
        

        if (sliderCounterClass.textContent == "010") {
            sliderCounterClass.textContent = "10";
            counter = `10`;
            newSlide (counter, slide.stageValue, slide.titleValue, slide.textValue)
        }

        else {

            newSlide (counter, slide.stageValue, slide.titleValue, slide.textValue)

            subSliderPosition();
        }
    }

    else {
        subSliderWormPosition = subSliderWormPosition - 142;
        subSliderWorm.style = `left: ${subSliderWormPosition}px`;

        sliderCounterClass.textContent = `0${Number(sliderCounter) - 1}`;
        counter = `0${Number(sliderCounter) - 1}`;
        newSlide (counter, slide.stageValue, slide.titleValue, slide.textValue)

        subSliderPosition();
    }

}

function subSliderPosition () {
    let endWormPosition = subSliderWormPosition + 142;
    let subSliderWrapperWidth =  document.querySelector(".quality-slider__sub-slider-wrapper").offsetWidth;

    if (endWormPosition > subSliderWrapperWidth) {
        subSlider.style = `left: ${subSliderWrapperWidth - endWormPosition}px`;
    }
}

function newSlide (counter, stage, title, text) {
    let activeSlide = document.querySelector(".quality-slider__slider-img--active");

    activeSlide.classList.remove("quality-slider__slider-img--active");
    document.getElementById(`slide-${counter}`).classList.add("quality-slider__slider-img--toggle");
    document.querySelector(".quality-slider__slider-right-stage").style = "opacity: 0"
    document.querySelector(".quality-slider__slider-right-title").style = "opacity: 0"
    document.querySelector(".quality-slider__slider-right-text").style = "opacity: 0"
    console.log(counter)

    setTimeout (function () {
        document.querySelector(".quality-slider__slider-img--toggle").classList.remove("quality-slider__slider-img--toggle");
        activeSlide.classList.remove("quality-slider__slider-img--active")
        document.getElementById(`slide-${counter}`).classList.add("quality-slider__slider-img--active");
        console.log(document.getElementById(`slide-${counter}`))
        document.querySelector(".quality-slider__slider-right-stage").textContent = stage;
        document.querySelector(".quality-slider__slider-right-title").textContent = title;
        document.querySelector(".quality-slider__slider-right-text").textContent = text;
        document.querySelector(".quality-slider__slider-right-stage").style = "";
        document.querySelector(".quality-slider__slider-right-title").style = "";
        document.querySelector(".quality-slider__slider-right-text").style = "";

    }, 300)

}

function disabled (button) {
    button.classList.add("quality-slider__slider-button--disabled")
}

function removeDisabled (button) {
    button.classList.remove("quality-slider__slider-button--disabled")
}

class Slide {

    constructor(props) {
        this.stage = props.stage;
        this.title = props.title;
        this.text = props.text;
    }

    stageValue = "";
    titleValue = "";
    textValue = "";

    set stage(stageValue) {
        this.stageValue = stageValue;
    }

    set title(titleValue) {
        this.titleValue = titleValue;
    }

    set text(textValue) {
        this.textValue = textValue;
    }

}

// RANGE

const rangeClass = document.querySelector(".variants__slider-input");

const progressBar = document.querySelector(".variants__slider-range-progress");

function progress () {
    let rangeValue = document.querySelector(".variants__slider-input").value;
    progressBar.style = `width: ${(Number(rangeValue) + "%")}`;
}



