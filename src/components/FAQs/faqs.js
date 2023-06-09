let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
console.log("Component Footer");
const viewBtn = document.querySelector(".view-modal");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close");
const field = popup.querySelector(".field");
const input = field.querySelector("input");
const copy = field.querySelector("button #Share");
viewBtn.onclick = () => {
  popup.classList.toggle("show");
};
close.onclick = () => {
  viewBtn.click();
};
