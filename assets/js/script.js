"use strict";
function textEffect() {
  const heading = "Main Heading";
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure libero quae numquam, illum animi assumenda voluptas tempora. Numquam impedit voluptatum ipsam ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure libero quae numquam, illum animi assumenda voluptas tempora. Numquam impedit voluptatum ipsam ducimus. ";
  const headingArray = heading.split("");
  const paragraphArray = paragraph.split("");
  const contentHeading = document.querySelector(".content-heading");
  const textContent = document.querySelector(".text-content");
  const resetButton = document.getElementById("reset");
  let headingString = "";
  let paragraphString = "";
  const typeSpeed = 35;
  const timeouts = [];
  for (let i = 0; i < headingArray.length; i++) {
    const timeout = setTimeout(() => {
      headingString += headingArray[i];
      contentHeading.innerText = headingString;
    }, i * typeSpeed);
    timeouts.push(timeout);
  }

  for (let j = 0; j < paragraphArray.length; j++) {
    const timeout = setTimeout(() => {
      paragraphString += paragraphArray[j];
      textContent.innerText = paragraphString;
    }, j * typeSpeed);
    timeouts.push(timeout);
  }
  resetButton.addEventListener("click", () => {
    reset(timeouts);
  });
}

function setTheme(theme) {
  document.documentElement.style.setProperty("--primary_color", theme);
}

function reset(timeouts) {
  const contentHeading = document.querySelector(".content-heading");
  const textContent = document.querySelector(".text-content");
  contentHeading.innerText = "";
  textContent.innerText = "";
  timeouts.forEach((timeout) => clearTimeout(timeout));
  textEffect();
}

document.addEventListener("DOMContentLoaded", function () {
  textEffect();
});
