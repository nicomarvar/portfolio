const mainConatiner = document.querySelector(".mainContainer");
const aboutContainer = document.querySelector(".aboutContainer");
const cvContainer = document.querySelector(".cvContainer");
const portfolioContainer = document.querySelector(".portfolioContainer");
const contactContainer = document.querySelector(".contactContainer");
const navButtons = document.querySelectorAll(".navButton");

function fixScroll(button){
    const section = button.innerText
    switch(section){
        case About:
            window.scrollTo({
                top: aboutContainer.offsetTop-100,
                left: 0,
                behavior: 'smooth'
              });
    }

}