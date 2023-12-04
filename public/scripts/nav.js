const headerEl    = document.querySelector('header');
const footer      = document.querySelector('footer');
const contactBtn  = document.querySelector('nav button');
const barsMenu    = document.querySelector('.bars-menu');
const barsBtn     = document.querySelector('.bars button');
const contactBars = document.querySelector('.bars-menu button');

let footerNum;
let clickBars = false;

contactBtn.addEventListener('click', () => toBottom());
contactBars.addEventListener('click', () => {
    exBars();
    toBottom();
})

barsBtn.addEventListener('click', () => {
    if(clickBars) {
        exBars();
    } else {
        clickBars = true;
        document.body.style.overflowY = 'hidden';
        barsBtn.innerHTML = '<i class="fas fa-times"></i>';
        barsMenu.style.transform = 'translateX(0)';
    }
})

document.addEventListener('scroll', () => {
    let footerTop = footer.getBoundingClientRect().top;
    if(footerTop < footerNum) {
        headerEl.style.transform = 'translateY(-105%)';
    } else {
        headerEl.style.transform = 'translateY(0)';
    };

    footerNum = footerTop;
})

function exBars() {
    clickBars = false;
    document.body.style.overflowY = 'scroll';
    barsBtn.innerHTML = '<i class="fas fa-bars"></i>';
    barsMenu.style.transform = 'translateX(-105%)';
}

function toBottom() {window.scrollTo(0, document.body.scrollHeight)}
