let title = document.querySelector('.aboutInfo h1');
let description = document.querySelector('.aboutInfo p');
let contactBtn = document.querySelector('.aboutInfo a');
let aboutImg = document.querySelector('.aboutImage');

let observerInfo = new IntersectionObserver((entries) => {

    entries.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('flyInFromLeftClass000');
        }else{
            element.target.classList.remove('flyInFromLeftClass000');
        }
    });

});

observerInfo.observe(title);
observerInfo.observe(description);
observerInfo.observe(contactBtn);

let observerImage = new IntersectionObserver((entries) => {

    entries.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('showOpacityFull');
        }else{
            element.target.classList.remove('showOpacityFull');
        }
    });

});

observerImage.observe(aboutImg);
