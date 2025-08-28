import "./styles/reset.css";
import "./styles/styles.css";

import image1 from "./assets/images/01.jpg";
import image2 from "./assets/images/02.jpg";
import image3 from "./assets/images/03.jpg";

console.log("test");

const allImages = [image1, image2, image3];

const wideCont = document.querySelector(".wide-container");
const navDots = document.querySelector(".nav-dots");

for (const img of allImages) {
  const elemnt = document.createElement("img");
  elemnt.src = img;
  elemnt.height = 300;
  wideCont.append(elemnt);

  const dot = document.createElement("div");
  dot.id = "dot";
  navDots.append(dot);
}

const xlist = [-400, 0, 400];
let index = 1;

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener('click', () => {
    index = (index + 1) % xlist.length;
    wideCont.style.translate = xlist[index] + "px";
});

nextBtn.addEventListener('click', () => {
    index = index - 1;
    if (index < 0) index = xlist.length + index;
    wideCont.style.translate = xlist[index] + "px";
});
