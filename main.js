const navlist = document.querySelector(".navlist");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
    
    navlist.classList.toggle("open");
});