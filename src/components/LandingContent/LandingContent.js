
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
  let overlay = document.querySelector(".overlay")
  console.log("1")
  console.log(overlay)
  if (typeof(overlay) !== "undefined" && overlay !== null) {
    description.innerHTML = "mi nuevo texto"
    return
  }
  overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  descriptionContainer.appendChild(description.cloneNode(true));
  description.innerHTML ="mi enemigo";
  overlay.appendChild(descriptionContainer);
  document.body.appendChild(overlay);
}
});
// $(document).ready(function () {
//   $(".slick-carousel").slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: true,
//     autoplay: false,
//     centerMode: "ture",
//     cssEase: "linear",
//     variableWidth: true,
//     variableHeight: true,
//     responsive: [
//       (breakpoint: 1024),
//       (settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         centerMode: false,
//       }),
//     ],
//   });
// });
