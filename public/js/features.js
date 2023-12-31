let cards = document.querySelectorAll('.col');

let observerSmall = new IntersectionObserver((entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('sliderImageAnimationPopIn');
        } else {
            element.target.classList.remove('sliderImageAnimationPopIn');
        }
    });
});

cards.forEach((card) => {
    observerSmall.observe(card);
});