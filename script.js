const themeBtn = document.querySelector(".theme-btn");

themeBtn.onclick = function () {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    }else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

}

// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});



// Scroll Animation

const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


hiddenElements.forEach((el)=> observer.observe(el));

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event){

    event.preventDefault();

    result.textContent = "Message sent successfully!";

    form.reset();

});