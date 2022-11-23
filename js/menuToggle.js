function hamburgerActive() {
    document.querySelector("body").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
}

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", hamburgerActive);
