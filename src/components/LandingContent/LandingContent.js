let backgroundFish = 5;
let random (min, max) => Math.random() * (max - min) + min;
let box = document.querySelector("body-gradient");

function fish(e){
    let fish = document.createElement("div");

    fish.className = "fish"
    fish.style.setProperty("--size", random(5,7));
    fish.style.setProperty("--color", random(-55,25));
    fish.style.setProperty("--duration", random(5,7));
    fish.style.setProperty("--top",
    e.clientY ? e.clientY : random(100, window.innerHeight);
    fish.innerHTML = [
        '<span class="body"</span>',
        '<span class="eye"</span>',
        '<span class="fin"</span>',
        '<span class="tail"</span>',

    ].join("");

box.appendChild(fish);
}

function createRipple(e){

    let ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.setProperty("--left", e.clientX);
    ripple.style.setProperty("--top", e.clientY);
    box.appendChild(ripple);
}

function init(){
    window.addEventListener("click", fish);
    window.addEventListener("click", createRipple);
    Array(backgroundFish).fill("").forEach("fish");
}

window.onload = init;