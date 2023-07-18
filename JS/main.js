const parallax = document.getElementById("section3");
const headerEl = document.querySelector('.header');
document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu-icon");
    var links = document.getElementById("links");

    // Show links and hide menu icon when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
        links.style.display = "block";
        menuIcon.style.display = "none";
    });

    // Hide links and show menu icon when a link is clicked
    links.addEventListener("click", function (event) {
        // Check if the clicked element is a link
        if (event.target.tagName === "A") {
            links.style.display = "none";
            menuIcon.style.display = "block";
        }
    });
});
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*(0.15)-700 + "px";
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

// splash screen 

function hideSplashScreen() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');
  
    splashScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }
  
  // Add a timer for the splash screen (set to 3 seconds in this example)
  const splashScreenDuration = 3500; // milliseconds (3 seconds)
  
  setTimeout(hideSplashScreen, splashScreenDuration);