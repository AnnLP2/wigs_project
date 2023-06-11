"use strict";

(function () {
    const burger = document.querySelector(".menu__burger");
    if (!burger) return;
    const menu = document.querySelector(".menu__list");
    const overlay = document.querySelector(".menu__overlay");
    const body = document.querySelector("body");

    burger.addEventListener("click", function () {
        menu.classList.toggle("show");
        burger.classList.toggle("show");
        overlay.classList.toggle("show");
        body.classList.toggle("stop-scroll");
    });

    overlay.addEventListener("click", function () {
        menu.classList.remove("show");
        burger.classList.remove("show");
        overlay.classList.remove("show");
        body.classList.remove("stop-scroll");
    });
})();