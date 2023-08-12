let allImages = document.querySelectorAll('.albumImg');
let fullSizeImageDiv = document.getElementById('fullSizeImgDiv');
let prevImage = document.getElementById('prevImg');
let currentImage = document.getElementById('currentImg');

let header = document.getElementById('header');


for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', () => {
        handleFullSize(i);
    });
}

let currentIndex;
let prevIndex;

function handleFullSize(i) {
    currentImage.setAttribute('src', allImages[i].src);
    currentIndex = i;
    fullSizeImageDiv.style.display = 'flex';
    header.style.display = 'none';
    document.body.style.position = 'fixed';
}

let prevBtn = document.getElementById('prevButton');
let nextBtn = document.getElementById('nextButton');
let closeBtn = document.getElementById('closeFullSize');

let left = false;
prevBtn.addEventListener('click', () => {
    left = true;
    swapImages();
});

nextBtn.addEventListener('click', () => {
    left = false;
    swapImages();
});

function calculateIndexes() {
    prevIndex = currentIndex;

    if (left) {
        currentIndex--;
    } else {
        currentIndex++;
    }

    if (currentIndex < 0) {
        currentIndex = allImages.length - 1;
    } else if (currentIndex > allImages.length - 1) {
        currentIndex = 0;
    }

}

function swapImages() {

    calculateIndexes();

    prevImage.setAttribute('src', allImages[prevIndex].src);
    currentImage.setAttribute('src', allImages[currentIndex].src);
}


closeBtn.addEventListener('click', () => {
    exitFullSize();
});

function exitFullSize() {
    fullSizeImageDiv.style.display = 'none';
    header.style.display = 'flex';
    document.body.style.position = 'relative';
}


window.addEventListener('click', (event) => {
    if (event.target.id === 'fullSizeImgDiv') {
        exitFullSize();
    }
});


// swiping on mobile
let startX;
window.addEventListener('touchstart', (event) => {

    startX = event.touches[0].clientX;

});

window.addEventListener('touchend', (event) => {

    //set threshhold
    let viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
    let deltaXThresHold = viewPortWidth * 0.20;

    let endX = event.changedTouches[0].clientX;

    if (startX - endX > deltaXThresHold) {
        // swipe left => move right
        left = false;
        swapImages();
    }else if(endX - startX > deltaXThresHold){
        // swipe right => move left
        left = true;
        swapImages();
    }

});

window.addEventListener('touchcancel', (event) => {

    //set threshhold
    let viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
    let deltaXThresHold = viewPortWidth * 0.20;

    let endX = event.changedTouches[0].clientX;

    if (startX - endX > deltaXThresHold) {
        // swipe left => move right
        left = false;
        swapImages();
    }else if(endX - starX > deltaXThresHold){
        // swipe right => move left
        left = true;
        swapImages();
    }

});