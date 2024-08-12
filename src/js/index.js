const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

let nav = document.querySelector(".header-list");
let content = document.querySelector(".header-content");
let burger = document.querySelector(".fa-bars");
burger.addEventListener("click", function () {
    nav.classList.toggle("active");
    content.classList.toggle("hidden");
}
)