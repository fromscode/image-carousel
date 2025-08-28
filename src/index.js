import "./styles/styles.css";
import "./styles/reset.css";

import image1 from "./assets/images/01.jpg";
import image2 from "./assets/images/02.jpg";
import image3 from "./assets/images/03.jpg";

console.log("test");

const allImages = [image1, image2, image3];

const wideCont = document.querySelector(".wide-container");

for (const img of allImages) {
  const elemnt = document.createElement("img");
  elemnt.src = img;
  elemnt.height = 300;
  wideCont.append(elemnt);
}
