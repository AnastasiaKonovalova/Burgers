// Change class by ID
function removeClass(id, nameOfClass){
    return function(){
        let elem = document.getElementById(id);
        elem.classList.remove(nameOfClass);
    }
};
function toggleClass(id, nameOfClass){
    return function(){
        let elem = document.getElementById(id);
        elem.classList.toggle(nameOfClass);
    }
};

// Full screen navigation pop-up
const navShowEl = document.querySelector('#navShow');
const navCloseEl = document.querySelector('#navClose');

navShowEl.addEventListener('click', toggleClass('navigation', 'tablet-hide'));
navShowEl.addEventListener('click', toggleClass('navClose', 'display-none'));
navCloseEl.addEventListener('click', toggleClass('navigation', 'tablet-hide'));
navCloseEl.addEventListener('click', toggleClass('navClose', 'display-none'));

// Composition pop-up
const ingredientsShowEl = document.querySelector('#ingredientsShow');
const ingredientsCloseEl = document.querySelector('#ingredientsClose');

ingredientsShowEl.addEventListener('click', toggleClass('ingredients', 'show'));
ingredientsCloseEl.addEventListener('click', removeClass('ingredients', 'show'));


// Team accordeon
const teamListEl = document.getElementById('teamList');
const teamItemArr = document.querySelectorAll('.team__item');

teamListEl.addEventListener('click', function(event){
    const currentItem = event.target.parentElement;
    if(event.target.classList.contains('team__name') && !currentItem.classList.contains('active-acco')){
        for(i=0; i<teamItemArr.length; i++){
            teamItemArr[i].classList.remove('active-acco');
        }
        currentItem.classList.add('active-acco');
    } 
    else if(currentItem.classList.contains('active-acco')){
        currentItem.classList.remove('active-acco');
    }
})

// Menu accordeon
const menuAccoEl = document.getElementById('menuAcco');
const menuItemArr = document.querySelectorAll('.menu__item');

menuAccoEl.addEventListener('click', function(event){
    // menuAccoEl.classList.toggle('menu__acco--active');
    const currentItem = event.target.parentElement;
    if(event.target.classList.contains('menu__slider') && !event.target.classList.contains('menu__content') && !currentItem.classList.contains('menu__item--active')){
        for(i=0; i<menuItemArr.length; i++){
            menuItemArr[i].classList.remove('menu__item--active');
        }
        currentItem.classList.add('menu__item--active');
        menuAccoEl.classList.add('menu__acco--active');
    }
    else if(currentItem.classList.contains('menu__item--active') && !event.target.classList.contains('menu__content')){
        currentItem.classList.remove('menu__item--active');
    }
})

// Menu-accordeon mobile close
const menuCloseMas = document.querySelectorAll('.menu__close-btn');

for(i=0; i<menuCloseMas.length; i++){
    menuCloseMas[i].addEventListener('click', function(event){    

        event.currentTarget.parentElement.parentElement.classList.remove('menu__item--active');
})
}


// Comments with modal window
const commentBtnArr = document.querySelectorAll('.comments__btn');
const commentModalWindow = document.getElementById('commentModal');
const commentName = document.getElementById('commentModalName');
const commentText = document.getElementById('commentModalText');

for(i=0; i<commentBtnArr.length; i++){
    commentBtnArr[i].addEventListener('click', function(event){
        let spanFrom = event.currentTarget.parentElement.querySelector('.comments__name');
        let pFrom = event.currentTarget.parentElement.querySelector('.comments__text');
        
        commentName.textContent = spanFrom.textContent;
        commentText.textContent = pFrom.textContent;
        commentModalWindow.classList.add('modal--visible');
    })
};

commentModalWindow.addEventListener('click', function(event){
    if(event.target.classList.contains('comment-modal__bg')) {
        event.target.classList.remove('modal--visible');
    }
});

const commentModalCloseEl = document.getElementById('commentModalClose');
commentModalCloseEl.addEventListener('click', removeClass('commentModal','modal--visible'));


// Slider!!!

const leftArrowEl = document.getElementById('sliderArrowLeft');
const rightArrowEl = document.getElementById('sliderArrowRight');
const slidesArr = document.querySelectorAll('.slider__block');

rightArrowEl.addEventListener('click', function(e){
    e.preventDefault();
    var activeSlide = document.querySelector('.slider--active');

    for(i=0; i<slidesArr.length; i++){
        slidesArr[i].classList.remove('slider__appear-from--left');
    }

    activeSlide.classList.add('slider__hide--left');
    activeSlide.classList.remove('slider--active');

    setTimeout(function(){
        activeSlide.classList.remove('slider__hide--left');
    }, 700)

    var nextActiveSlide = activeSlide.nextElementSibling;

    if(nextActiveSlide !== null){
        nextActiveSlide.classList.add('slider--active');
    } else{
        nextActiveSlide = slidesArr[0];
        nextActiveSlide.classList.add('slider--active');
    };
});

leftArrowEl.addEventListener('click', function(e){
    e.preventDefault();
    var activeSlide = document.querySelector('.slider--active');
    var previousActiveSlide = activeSlide.previousElementSibling;

    for(i=0; i<slidesArr.length; i++){
        slidesArr[i].classList.add('slider__appear-from--left');
    }

    if(previousActiveSlide !== null){
        previousActiveSlide.classList.add('slider--active')
    } else{
        previousActiveSlide = slidesArr[slidesArr.length - 1];
        previousActiveSlide.classList.add('slider--active')
    };

    setTimeout(function(){
        previousActiveSlide.classList.remove('slider__appear-from--left')
    }, 200)

    activeSlide.classList.remove('slider__appear-from--left');
    activeSlide.classList.remove('slider--active');
});



// One page scroll!!!

const sections = document.getElementsByTagName('section');
const sectionsArray = [].slice.call(sections);

const wrap = document.querySelector('.wrapper');
const content = document.querySelector('.maincontent');

// var visibleSection = document.querySelector('.visible-section');
// var visibleSectionIndex = sectionsArray.indexOf(visibleSection);

// var windowHeight = window.getComputedStyle(wrap).getPropertyValue('height');
// var stepH = parseFloat(windowHeight);

function transform(i){
    const newPosition = i * -100 +'%';
    content.style.transform = 'translateY('+newPosition+')';
};

function changeClass(d){
    var visibleSection = document.querySelector('.visible-section');
    if(d === 'up'){
        if(visibleSection.previousElementSibling === null){
            return;
        };

        visibleSection.classList.remove('visible-section');
        visibleSection.previousElementSibling.classList.add('visible-section');
        var previousVisibleSection = document.querySelector('.visible-section');
        var visibleSectionIndex = sectionsArray.indexOf(previousVisibleSection);
        console.log(visibleSectionIndex);

        transform(visibleSectionIndex);

    } else if(d === 'down' ){
        if(visibleSection.nextElementSibling === null){
            return;
        };

        visibleSection.classList.remove('visible-section');
        visibleSection.nextElementSibling.classList.add('visible-section');
        var nextVisibleSection = document.querySelector('.visible-section');
        var visibleSectionIndex = sectionsArray.indexOf(nextVisibleSection);
        console.log(visibleSectionIndex);

        transform(visibleSectionIndex);
    }
}

var onwheelFunction = function(e){
    const deltaY = e.deltaY;

    if(deltaY < 0){
        const direction = 'up';
        changeClass(direction);
    }else {
        const direction = 'down';
        changeClass(direction);
    };
};

function debounce(f, ms) {

    let timer = null;

    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    };
}
  
document.onwheel = debounce(onwheelFunction, 70)

// One page scroll by touch

var touchY;

document.addEventListener('touchstart', function(t){
    touchY = t.touches[0].clientY;
});

document.addEventListener('touchend', function(t){
    var touchDeltaY = t.changedTouches[0].clientY - touchY;

    if(touchDeltaY < 0){
        const direction = 'up';
        changeClass(direction);
    }else {
        const direction = 'down';
        changeClass(direction);
    };
});
