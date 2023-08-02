const counterElement = document.getElementById('loader-counter');
const loader_progress = document.getElementById('loader')
const splash_content = document.getElementById("splash-screen")
const main_content = document.getElementById("main-content")
const hamberg = document.getElementById('hamberg')
const nav_list = document.querySelectorAll('.nav-list')
//menu
let menu_status = false;
function menu_clicked() {
    let ndisplay;
    if (menu_status) {
        ndisplay = "none";
        menu_status = false;
    } else {
        ndisplay = "block";
        menu_status = true;
    }
    nav_list.forEach(element => {
        element.style.display = ndisplay;
    });
}

const li_options = document.querySelectorAll("nav ul li a");
for (let i = 0; i < li_options.length; i++) {
    const element = li_options[i];
    element.addEventListener("click", menu_clicked);
}

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
