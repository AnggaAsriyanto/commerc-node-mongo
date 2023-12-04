const btnLeft  = document.getElementById('left');
const btnRight = document.getElementById('right');
const menuFav  = document.querySelectorAll('.menu-fav .menu');
const menuCont = document.querySelector('.menu-fav .menu-container');

let idxEl = 0;

btnLeft.addEventListener('click', () => {
    if(0 >= idxEl) {
        idxEl = 0;
    } else {
        idxEl--;
    }
    menuCont.style.transform = `translateX(-${(80 / menuFav.length) * idxEl}%)`;
})

btnRight.addEventListener('click', () => {
    if(idxEl >= menuFav.length - 1) {
        idxEl = menuFav.length - 1;
    } else {
        idxEl++;
    }
    menuCont.style.transform = `translateX(-${(80 / menuFav.length) * idxEl}%)`;
})


