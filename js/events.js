function backToHome(){
    window.location.href = "/index.html"
}

const upcoming_section = document.getElementById("section2");
const past_section = document.getElementById("section3");
const tabs = document.querySelectorAll("#section1 ul li")
function changeTab(position){
    if(position == 0){
        tabs[0].classList.add("active");
        tabs[1].classList.remove("active");
        upcoming_section.style.display = "flex";
        past_section.style.display = "none";
    } else{
        tabs[1].classList.add("active");
        tabs[0].classList.remove("active");
        upcoming_section.style.display = "none";
        past_section.style.display = "flex";
    }
}


const short_display = document.querySelectorAll("#section3 .event .short-display");
const large_display = document.querySelectorAll("#section3 .event .large-display")
const expand_icons = document.querySelectorAll("#section3 .event .short-display .expand-icon")
for(var i = 0; i<short_display.length; i++){
    const element = short_display[i];
    const ele = large_display[i];
    const icon = expand_icons[i];
    element.addEventListener("click", (i)=>{
        const isElementVisible = window.getComputedStyle(ele).display == "block";
        if(isElementVisible){
            ele.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else{
            ele.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });

}