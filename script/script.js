
//start transfer between sections

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-button").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
//end transfer between sections

//start preload animation

var delayInMilliseconds = 1500;
var delayInMilliseconds2 = 1800;

//start loading-icon

setTimeout(function() {
    document.querySelector(".loading-overlay img").style.opacity = "0";
        document.querySelector(".loading-overlay img").style.transform = "scale(0)"; 
}, delayInMilliseconds);

//end loading-icon
//start loading-background

setTimeout(function() {
    document.querySelector(".loading-overlay").style.opacity = "0"; transform = "translateX(-100%)"; 
    document.querySelector(".loading-overlay").style.transform = "scale(0)"; 
}, delayInMilliseconds2);

//end loading-background
//end preload animation

