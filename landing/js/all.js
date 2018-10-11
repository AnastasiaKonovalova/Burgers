// Change class by ID
function removeClass(id, nameOfClass){
    return function(){
        let elem = document.getElementById(id);
        elem.classList.remove(nameOfClass);
    };
};
function toggleClass(id, nameOfClass){
    return function(){
        let elem = document.getElementById(id);
        elem.classList.toggle(nameOfClass);
    };
};

// Full screen navigation drop-down
const navShowEl = document.querySelector('#navShow');
const navCloseEl = document.querySelector('#navClose');

navShowEl.addEventListener('click', toggleClass('navigation', 'tablet-hide'));
navShowEl.addEventListener('click', toggleClass('navClose', 'display-none'));
navCloseEl.addEventListener('click', toggleClass('navigation', 'tablet-hide'));
navCloseEl.addEventListener('click', toggleClass('navClose', 'display-none'));

// Composition drop-down
const compositions = document.querySelectorAll('.slider__composition');

for(i=0; i<compositions.length; i++){
    compositions[i].addEventListener('click', function(e){
        var ingredients = e.currentTarget.querySelector('.composition__ingredients')

        if(e.target.classList.contains('composition__btn') ||
         e.target.parentElement.classList.contains('composition__btn')){
            ingredients.classList.toggle('show');
        };
        if(e.target.classList.contains('ingredients__close-btn') ||
        e.target.classList.contains('close-cross') || 
        e.target.parentElement.classList.contains('close-cross')){
            ingredients.classList.remove('show');
        }
    });
};


// Team accordeon
const teamListEl = document.getElementById('teamList');
const teamItemArr = document.querySelectorAll('.team__item');

teamListEl.addEventListener('click', function(event){
    const currentItem = event.target.parentElement;
    if(event.target.classList.contains('team__name') && !currentItem.classList.contains('active-acco')){
        for(i=0; i<teamItemArr.length; i++){
            teamItemArr[i].classList.remove('active-acco');
        };
        currentItem.classList.add('active-acco');
    } 
    else if(currentItem.classList.contains('active-acco')){
        currentItem.classList.remove('active-acco');
    };
});

// Menu accordeon
const menuAccoEl = document.getElementById('menuAcco');
const menuItemArr = document.querySelectorAll('.menu__item');

menuAccoEl.addEventListener('click', function(event){
    const currentItem = event.target.parentElement;
    if(event.target.classList.contains('menu__slider') && !event.target.classList.contains('menu__content') && !currentItem.classList.contains('menu__item--active')){
        for(i=0; i<menuItemArr.length; i++){
            menuItemArr[i].classList.remove('menu__item--active');
        };
        currentItem.classList.add('menu__item--active');
        menuAccoEl.classList.add('menu__acco--active');
    }
    else if(currentItem.classList.contains('menu__item--active') && !event.target.classList.contains('menu__content')){
        currentItem.classList.remove('menu__item--active');
    };
});

// Menu-accordeon mobile close
const menuCloseMas = document.querySelectorAll('.menu__close-btn');

for(i=0; i<menuCloseMas.length; i++){
    menuCloseMas[i].addEventListener('click', function(event){    

        event.currentTarget.parentElement.parentElement.classList.remove('menu__item--active');
    });
};


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
    });
};

commentModalWindow.addEventListener('click', function(event){
    if(event.target.classList.contains('comment-modal__bg')) {
        event.target.classList.remove('modal--visible');
    };
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
    };

    activeSlide.classList.add('slider__hide--left');
    activeSlide.classList.remove('slider--active');

    setTimeout(function(){
        activeSlide.classList.remove('slider__hide--left');
    }, 700);

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
    };

    if(previousActiveSlide !== null){
        previousActiveSlide.classList.add('slider--active')
    } else{
        previousActiveSlide = slidesArr[slidesArr.length - 1];
        previousActiveSlide.classList.add('slider--active')
    };

    setTimeout(function(){
        previousActiveSlide.classList.remove('slider__appear-from--left')
    }, 200);

    activeSlide.classList.remove('slider__appear-from--left');
    activeSlide.classList.remove('slider--active');
});



// One page scroll!!! + Nav jump

var mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile()
const isTablet = mobileDetect.tablet()
const isDesktop = isMobile === null || isTablet === null;
console.log('isDesktop', isDesktop);

const sections = document.getElementsByTagName('section');
const sectionsArray = [].slice.call(sections);

const wrap = document.querySelector('.wrapper');
const content = document.querySelector('.maincontent');

// var visibleSection = document.querySelector('.visible-section');
// var visibleSectionIndex = sectionsArray.indexOf(visibleSection);

// var windowHeight = window.getComputedStyle(wrap).getPropertyValue('height');
// var stepH = parseFloat(windowHeight);

const navLinks = document.querySelectorAll('.navigation__link');
const navLinksArray = [].slice.call(navLinks);

const sidebarLinks = document.querySelectorAll('.sidebar__link');
const sidebarLinksArray = [].slice.call(sidebarLinks);

const sidebarItems = document.querySelectorAll('.sidebar__item');
const sidebarItemsArray = [].slice.call(sidebarItems);

const redBtnLinks = document.querySelectorAll('.link-btn--red');
const redBtnLinksArray = [].slice.call(redBtnLinks);

const allNavArray = [].concat(navLinksArray, sidebarLinksArray, redBtnLinksArray);



if(isDesktop){
        for(i=0; i<allNavArray.length; i++){
        allNavArray[i].addEventListener('click', function(e){
            e.preventDefault();
            var visibleSection = document.querySelector('.visible-section');
            var currentSidebarItem = document.querySelector('.sidebar__item--active');
        
            visibleSection.classList.remove('visible-section');
            currentSidebarItem.classList.remove('sidebar__item--active');

            var ind = parseInt(e.currentTarget.dataset.sectionIndex);
        
            var nextSidebarLink = sidebarLinksArray.find(function(elem){
                var newInd = ind+'';
                return elem.dataset.sectionIndex === newInd;            
            });
            var nextSidebarItem = nextSidebarLink.parentElement;

            var nextVisibleSection = sectionsArray[ind];

            nextVisibleSection.classList.add('visible-section');
            nextSidebarItem.classList.add('sidebar__item--active');

            transform(ind);
        });
    };
};

function transform(i){
    const newPosition = i * -100 +'%';
    content.style.transform = 'translateY('+newPosition+')';

};


function changeClass(d){
    var visibleSection = document.querySelector('.visible-section');
    var currentSidebarItem = document.querySelector('.sidebar__item--active');
    if(d === 'up'){
        if(visibleSection.previousElementSibling === null || currentSidebarItem.previousElementSibling === null){
            return;
        };

        visibleSection.classList.remove('visible-section');
        currentSidebarItem.classList.remove('sidebar__item--active');
        
        visibleSection.previousElementSibling.classList.add('visible-section');
        currentSidebarItem.previousElementSibling.classList.add('sidebar__item--active');

        var previousVisibleSection = document.querySelector('.visible-section');
        var newVisibleSectionIndex = sectionsArray.indexOf(previousVisibleSection);

        transform(newVisibleSectionIndex);

    } else if(d === 'down' ){
        if(visibleSection.nextElementSibling === null || currentSidebarItem.nextElementSibling === null){
            return;
        };

        visibleSection.classList.remove('visible-section');
        currentSidebarItem.classList.remove('sidebar__item--active');
        
        visibleSection.nextElementSibling.classList.add('visible-section');
        currentSidebarItem.nextElementSibling.classList.add('sidebar__item--active');

        var nextVisibleSection = document.querySelector('.visible-section');
        var newVisibleSectionIndex = sectionsArray.indexOf(nextVisibleSection);

        transform(newVisibleSectionIndex);
    };
};


console.log(isMobile)
console.log(isTablet)

var onwheelFunction = function(e){

    if(isDesktop){
        const deltaY = e.deltaY;

        if(deltaY < 0){
            const direction = 'up';
            changeClass(direction);
        }else {
            const direction = 'down';
            changeClass(direction);
        };
    }
};

function debounce(f, ms) {

    if(isDesktop){
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
    };
};

if(isDesktop){
  
    document.onwheel = debounce(onwheelFunction, 70);

    document.addEventListener('keydown', function(k){
        if(k.key === "ArrowDown"){
            const dir = 'down';
            changeClass(dir);
        } else if(k.key === "ArrowUp"){
            const dir = 'up';
            changeClass(dir);
        };
    });

}


// // One page scroll by touch


// var touchY;

// document.addEventListener('touchstart', function(t){
//     touchY = t.touches[0].clientY;
// });

// function touchend(t){
//     var touchDeltaY = t.changedTouches[0].clientY - touchY;

//     if(isMobile || isTablet){
//         if(touchDeltaY < 0){
//             const direction = 'down';
//             changeClass(direction);
//         }else {
//             const direction = 'up';
//             changeClass(direction);
//         };
//     };
// };

// function touchmove(t){
//     var touchDeltaY = t.changedTouches[0].clientY - touchY;

//     if(isMobile || isTablet){
//         if(touchDeltaY < 0){
//             const direction = 'down';
//             changeClass(direction);
//         }else {
//             const direction = 'up';
//             changeClass(direction);
//         };
//     };
// };

// document.addEventListener('touchmove', debounce(touchmove, 70))
