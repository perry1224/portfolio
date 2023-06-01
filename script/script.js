// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

const messageInput = document.getElementById("message");

messageInput.addEventListener("input", function(event) {
  const inputValue = event.target.value.trim();
  if (inputValue.length < 2 || /^\s/.test(inputValue)) {
    messageInput.setCustomValidity("At least say hi.");
  } else {
    messageInput.setCustomValidity("");
  }
});

function enableBtn(){
  document.getElementById("submit0").disabled = false;
}

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});