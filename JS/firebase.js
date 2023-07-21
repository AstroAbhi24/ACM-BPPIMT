// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDd4xCbzWk5mSBf0_S2SY1nS2hTp1A7xMk",
    authDomain: "acm-bppimt.firebaseapp.com",
    databaseURL: "https://acm-bppimt-default-rtdb.firebaseio.com",
    projectId: "acm-bppimt",
    storageBucket: "acm-bppimt.appspot.com",
    messagingSenderId: "1060828025762",
    appId: "1:1060828025762:web:c978745c065beac02918fb",


};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

messagesRef.on('value', getDAta, errData);
var messageList = document.getElementById("messageList");

function getDAta(data){
    var messages = data.val();
    var keys = Object.keys(messages);
    for(var i = 0; i<keys.length; i++){
        var k = keys[i];
        var company = messages[k].company;
        var email = messages[k].email;
        var message = messages[k].message;
        var name = messages[k].name;
        var phone = messages[k].phone;

        let li = document.createElement("li");
        li.innerHTML = email+": "+message
        messageList.appendChild(li);
        

    }
}

function errData(err){
    console.log("error!");
    console.log(err);
}


const headerEl = document.getElementById('header');
let lastScrollTop = 0;
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
window.addEventListener('scroll', activeMenu);