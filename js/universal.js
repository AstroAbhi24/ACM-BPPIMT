const counterElement = document.getElementById('loader-counter');
const loader_progress = document.getElementById('loader')
const splash_content = document.getElementById("splash-screen")
const main_content = document.getElementById("main-content")
const hamberg = document.getElementById('hamberg')
const nav_list = document.querySelectorAll('.nav-list')


// splash screen
let currentNumber = 1;
const targetNumber = 100;
const duration = 3000; // 4 seconds
const increment = Math.ceil(targetNumber / (duration / 100));
function updateCounter() {
    if (currentNumber <= targetNumber) {
        counterElement.textContent = "'" + currentNumber;
        loader_progress.style.width = currentNumber + "%";
        currentNumber += increment;
    } else {
        clearInterval(counterInterval);
        splash_content.style.display = "none";
        main_content.style.display = "block";
    }
}
const counterInterval = setInterval(updateCounter, 80); // Update every 100 milliseconds



//url redirect
function redirectToURL() {
    window.location.href = "https://acm.org";
}


//carousel
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Counter for the current image being displayed
let imageIndex = 0;

// Function to display the next image in the carousel
function showNextImage() {
    // Hide the current image
    carouselImages[imageIndex].style.display = "none";

    // Increment the image index to show the next image
    imageIndex = (imageIndex + 1) % carouselImages.length;

    // Display the next image
    carouselImages[imageIndex].style.display = "block";
}

// Call the showNextImage function every 3 seconds (adjust the interval as needed)
setInterval(showNextImage, 3000);


const wrapper = document.getElementById("wrapper");
const carousel = document.getElementById("carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//paralex
const parallax = document.getElementById("section3");
const headerEl = document.querySelector('.header');
let lastScrollTop = 0;


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*(0.15)-700 + "px";
})

// reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
      
    for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
      
    window.addEventListener("scroll", reveal);


//dark mode
function updateCSSVariable() {
    const root = document.documentElement;
    const checkbox = document.getElementById("myCheckbox");
    const welcome = document.querySelectorAll(".welcome")

    // Check if the checkbox is checked or not
    if (checkbox.checked) {
        root.style.setProperty('--primary-bg', '#212121'); // Change to the desired background color when the checkbox is checked
        root.style.setProperty('--primary-text', '#fff'); // Change to the desired background color when the checkbox is checked
        welcome[0].style.background = "url(/asset/dark-doodle.png)";

    } else {
        root.style.setProperty('--primary-bg', '#fff'); // Change to the default background color when the checkbox is not checked
        root.style.setProperty('--primary-text', '#212121'); // Change to the default background color when the checkbox is not checked
        welcome[0].style.background = "url(/asset/light-doodle.png)"
    }
    welcome[0].style.backgroundSize = "cover";
    welcome[0].style.backgroundPosition = "center";
}

// Add an event listener to the checkbox to call the function when its state changes
const myCheckbox = document.getElementById("myCheckbox");
myCheckbox.addEventListener("change", updateCSSVariable);


//progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / totalScrollHeight) * 100;
    progressBar.style.width = `${scrolledPercentage}%`;
}

// Add an event listener to the "scroll" event to call the function when the user scrolls
window.addEventListener("scroll", updateProgressBar);
