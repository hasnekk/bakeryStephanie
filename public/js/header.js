let navigationClose = document.querySelector('.navigationClose');
let navigationOn = document.querySelector('.navigationOn');

let openNavBtn = document.getElementById('openNavBtn');
let closeNavBtn = document.getElementById('closeNavBtn');

// for antimations
let navigationItems = document.querySelectorAll('.navigationItem');
//

openNavBtn.addEventListener('click', (event) => {

    event.preventDefault();

    navigationClose.style.display = 'none';

    navigationOn.classList.add('flyFromRightClass');
    navigationOn.style.display = 'flex';

    setTimeout(() => {

        navigationOn.classList.remove('flyFromRightClass');


        let animationName;
        for (let i = 0; i < navigationItems.length; i++) {
            animationName = `flyInFromLeftClass`;
            animationName += i + '00';
            navigationItems[i].classList.add(animationName);


            setTimeout(() => {
                navigationItems[i].style.opacity = 1;
            }, i * 110);
        }


    }, 700);

});

closeNavBtn.addEventListener('click', (event) => {

    closeMobileNavigation();

});

function closeMobileNavigation() {

    navigationOn.classList.add('flyToRightClass');


    setTimeout(() => {
        navigationOn.classList.remove('flyToRightClass');
        navigationOn.style.display = 'none';
        navigationClose.style.display = 'flex';

        let animationName;
        for (let i = 0; i < navigationItems.length; i++) {
            animationName = `flyInFromLeftClass`;
            animationName += i + '00';
            navigationItems[i].classList.remove(animationName);
            navigationItems[i].style.opacity = 0;
        }

    }, 700);

}

window.addEventListener('resize', () => {
    closeNavBtn.click();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeNavBtn.click();
        event.preventDefault();
    }
});


