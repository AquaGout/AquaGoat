const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".content-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sharkSquare = document.querySelector(".enemy1 img");
  const octopusSquare = document.querySelector(".enemy3 img");
  const jellyfishSquare = document.querySelector(".enemy2 img");

  const enemyText1 = document.querySelector(".enemy-text1");
  const enemyText2 = document.querySelector(".enemy-text2");
  const enemyText3 = document.querySelector(".enemy-text3");

  sharkSquare.addEventListener("click", () => {
    showDescription(enemyText1);
  });

  octopusSquare.addEventListener("click", () => {
    showDescription(enemyText2);
  });

  jellyfishSquare.addEventListener("click", () => {
    showDescription(enemyText3);
  });


  function showDescription(description) {
    if (window.innerWidth > 820) return

    let overlay = document.querySelector(".overlay")
    let enemies = [enemyText1, enemyText2, enemyText3]
    for (let enemy of enemies) {
      enemy.innerHTML = ""
    }


    overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    descriptionContainer.appendChild(description.cloneNode(true));
    let descriptions = {
      "enemy-text1": "Keep safe from the fierce sharks lurking in the depths! You must dodge their sharp fins and teeth as you glide towards your destination",
      "enemy-text2": "Majestic manta rays will also cross your path. Stay calm and avoid their graceful movements to keep progressing towards the ocean floor",
      "enemy-text3": "Beware of the floating jellyfish with their long tentacles. Steer clear of their stinging tendrils to ensure a safe journey through the underwater realm"
    }
    description.innerHTML = descriptions[description.classList[0]]
    description.style.display = "block";
    overlay.appendChild(descriptionContainer);
    document.body.appendChild(overlay);
  }
});

