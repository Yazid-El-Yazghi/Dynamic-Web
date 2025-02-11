'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const knop = document.getElementById("themaKnop");
    const body = document.body;
    
    knop.addEventListener("click", function () {
        if (body.classList.contains("donker")) {
            body.classList.remove("donker");
            knop.textContent = "Donker thema";
        } else {
            body.classList.add("donker");
            knop.textContent = "Licht thema";
        }
    });
});
