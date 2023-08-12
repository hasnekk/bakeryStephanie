let reviewStarsDiv = document.querySelector('.formReviewStars');
let stars = document.querySelectorAll('.star');
let rating = document.getElementById('starReviewRating');

function handleOnHover(event) {
    let starid = event.target.id.slice(-1);

    for (let i = 0; i < starid; i++) {
        stars[i].setAttribute('color', 'gold');
    }

    for (let j = starid; j < 5; j++) {
        stars[j].setAttribute('color', 'white');
    }
}

function handleOutOfHover(event) {
    for (let star of stars) {
        star.setAttribute('color', 'white');
    }
}

function handleClickStars(event) {
    let starid = event.target.id.slice(-1);

    for (let i = 0; i < starid; i++) {
        stars[i].setAttribute('color', 'gold');
    }

    for (let j = starid; j < 5; j++) {
        stars[j].setAttribute('color', 'white');
    }

    rating.value = starid;

    // Remove event listeners after a star is clicked
    stars.forEach((star) => {
        star.removeEventListener('mouseover', handleOnHover);
        star.removeEventListener('mouseout', handleOutOfHover);
    });
}

stars.forEach((star) => {
    star.addEventListener('mouseover', handleOnHover);
    star.addEventListener('mouseout', handleOutOfHover);
    star.addEventListener('click', handleClickStars);
});


// on send review
function checkReviewForm() {
    if (rating.value === '-1') {
        alert("Must rate with stars!");
        return false;
    } else {
        alert("Thank you for your review :)");
        return true;
    }
}

function checkContactForm(){
    alert("Email send successfully :)");
    return true;
}