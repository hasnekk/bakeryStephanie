// elements
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let sliderItems = document.querySelectorAll('.sliderItem');
//


// variables
let activeItemIndex = 0;
let previousActiveSliderItem = 0;
//

// on load
function sliderOnLoad() {

    // set the active picture
    sliderItems[activeItemIndex].classList.add('activeSliderItem');

    // get the active info
    let title = document.querySelector('.activeSliderItem  h1');
    let content = document.querySelector('.activeSliderItem  p');
    // remove the active info 
    title.style.display = 'none';
    content.style.display = 'none';

    // add animations
    // main image animation
    sliderItems[activeItemIndex].classList.add('sliderImageAnimationOnLoad');

    setTimeout(() => {
        // main image animation removed
        sliderItems[activeItemIndex].classList.remove('sliderImageAnimationOnLoad');

        // title animation
        title.style.display = 'inline';
        content.style.display = 'inline';
        content.style.opacity = 0; // otherwise the title will be pushed up when animation for the content finishes
        title.classList.add('flyInFromBottom');
    }, 1000);

    setTimeout(() => {

        // remove title animation
        title.classList.remove('flyInFromBottom');

        // add content animation
        content.classList.add('showOpacity');

    }, 1500);

    setTimeout(() => {

        // remove content animation
        content.classList.remove('showOpacity');
        content.style.opacity = 0.7;

    }, 2500);


}

sliderOnLoad();
//

// on changing

function setActiveItemIndex(event) {
    if (event.target.id == 'prev' || event.key === 'ArrowLeft') {
        activeItemIndex--;
    } else if (event.target.id == 'next' || event.key === 'ArrowRight') {
        activeItemIndex++;
    }


    if (activeItemIndex < 0) {
        activeItemIndex = sliderItems.length - 1;
    } else if (activeItemIndex > sliderItems.length - 1) {
        activeItemIndex = 0;
    }
}

let setTimeOutIds = [];
function handleClick(event) {

    setTimeOutIds.forEach((timeOut) => {
        clearTimeout(timeOut);
    });
    setTimeOutIds.splice(0, setTimeOutIds.length)

    sliderItems[previousActiveSliderItem].classList.remove('previousSliderItem');
    previousActiveSliderItem = activeItemIndex;

    setActiveItemIndex(event);

    // remove the active class from the prevoius active slider item
    sliderItems[previousActiveSliderItem].classList.add('previousSliderItem');
    sliderItems[previousActiveSliderItem].classList.remove('activeSliderItem');

    // set the active picture
    sliderItems[activeItemIndex].classList.add('activeSliderItem');

    // get the active info
    let title = document.querySelector('.activeSliderItem  h1');
    let content = document.querySelector('.activeSliderItem  p');
    // remove the active info 
    title.style.display = 'none';
    content.style.display = 'none';

    // add animations
    // main image animation
    sliderItems[activeItemIndex].classList.add('sliderImageAnimationPopIn');

    let timeOutId = setTimeout(() => {
        // main image animation removed
        sliderItems[activeItemIndex].classList.remove('sliderImageAnimationPopIn');

        // title animation
        title.style.display = 'inline';
        content.style.display = 'inline';
        content.style.opacity = 0; // otherwise the title will be pushed up when animation for the content finishes
        title.classList.add('flyInFromBottom');
    }, 800);
    setTimeOutIds.push(timeOutId);

    timeOutId = setTimeout(() => {

        // remove title animation
        title.classList.remove('flyInFromBottom');

        // add content animation
        content.classList.add('showOpacity');

    }, 1300);
    setTimeOutIds.push(timeOutId);

    timeOutId = setTimeout(() => {

        // remove content animation
        content.classList.remove('showOpacity');
        content.style.opacity = 0.7;

    }, 2300);
    setTimeOutIds.push(timeOutId);

}

//

prevBtn.addEventListener('click', (event) => {
    handleClick(event);
});

nextBtn.addEventListener('click', (event) => {
    handleClick(event);
});

window.addEventListener('keydown', (event) => {
    handleClick(event);
});









// swiping on mobile phones
let sliderImages = document.querySelectorAll('.sliderItem img');

sliderImages.forEach((sliderImage) => {

    let startX;
    sliderImage.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        // event.preventDefault(); //// this breaks normal swiping
    });

    sliderImage.addEventListener('touchend', (event) => {

        // mora povuc 20% ekrana u ljevo da slider ode na next
        const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
        const deltaXThresHold = viewPortWidth * 0.20;

        let currentX = event.changedTouches[0].clientX;

        let swipedRIght = false;
        let swipedLeft = false;
        if (startX - currentX >= deltaXThresHold) {
            swipedRIght = true;
        } else if (currentX - startX >= deltaXThresHold) {
            swipedLeft = true;
        }

        swipeOnSlider(swipedRIght, swipedLeft);

        // event.preventDefault(); //// this breaks normal swiping
    });

    sliderImage.addEventListener('touchcancel', (event) => {

        // mora povuc 20% ekrana u ljevo da slider ode na next
        const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
        const deltaXThresHold = viewPortWidth * 0.20;

        let currentX = event.changedTouches[0].clientX;

        let swipedRIght = false;
        let swipedLeft = false;
        if (startX - currentX >= deltaXThresHold) {
            swipedRIght = true;
        } else if (currentX - startX >= deltaXThresHold) {
            swipedLeft = true;
        }

        swipeOnSlider(swipedRIght, swipedLeft);

        // event.preventDefault(); //// this breaks normal swiping
    });

});


function swipeOnSlider(swipedRIght, swipedLeft) {
    if (swipedRIght || swipedLeft) {

        setTimeOutIds.forEach((timeOut) => {
            clearTimeout(timeOut);
        });
        setTimeOutIds.splice(0, setTimeOutIds.length)

        sliderItems[previousActiveSliderItem].classList.remove('previousSliderItem');
        previousActiveSliderItem = activeItemIndex;

        if (swipedRIght) {
            activeItemIndex++;
        } else {
            activeItemIndex--;
        }

        if (activeItemIndex < 0) {
            activeItemIndex = sliderItems.length - 1;
        } else if (activeItemIndex > sliderItems.length - 1) {
            activeItemIndex = 0;
        }

        // remove the active class from the prevoius active slider item
        sliderItems[previousActiveSliderItem].classList.add('previousSliderItem');
        sliderItems[previousActiveSliderItem].classList.remove('activeSliderItem');

        // set the active picture
        sliderItems[activeItemIndex].classList.add('activeSliderItem');

        // get the active info
        let title = document.querySelector('.activeSliderItem  h1');
        let content = document.querySelector('.activeSliderItem  p');
        // remove the active info 
        title.style.display = 'none';
        content.style.display = 'none';

        // add animations
        // main image animation
        sliderItems[activeItemIndex].classList.add('sliderImageAnimationPopIn');

        let timeOutId = setTimeout(() => {
            // main image animation removed
            sliderItems[activeItemIndex].classList.remove('sliderImageAnimationPopIn');

            // title animation
            title.style.display = 'inline';
            content.style.display = 'inline';
            content.style.opacity = 0; // otherwise the title will be pushed up when animation for the content finishes
            title.classList.add('flyInFromBottom');
        }, 800);
        setTimeOutIds.push(timeOutId);

        timeOutId = setTimeout(() => {

            // remove title animation
            title.classList.remove('flyInFromBottom');

            // add content animation
            content.classList.add('showOpacity');

        }, 1300);
        setTimeOutIds.push(timeOutId);

        timeOutId = setTimeout(() => {

            // remove content animation
            content.classList.remove('showOpacity');
            content.style.opacity = 0.7;

        }, 2300);
        setTimeOutIds.push(timeOutId);

    }
}