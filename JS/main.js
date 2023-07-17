const parallax1 = document.getElementById("parallax1");
const headerEl = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax1.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        headerEl.classList.add('header-scrolled');
    } else {
        headerEl.classList.remove('header-scrolled');
    }

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        headerEl.style.top="-80px";
    } else{
        headerEl.style.top="0";
    }
    lastScrollTop = scrollTop;
});

const li = document.querySelectorAll('.link-items');
const sec = document.querySelectorAll('.section');
function activeMenu() {
    let len = sec.length;
    while(--len && window.scrollY + 68 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);