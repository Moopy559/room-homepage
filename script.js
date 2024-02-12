const screenWidth = window.innerWidth;
let screen = screenWidth < 400 ? "mobile" : "desktop";
const leftArrow = document.querySelectorAll(".left-arrow");
const rightArrow = document.querySelectorAll(".right-arrow");
const heroImage = document.getElementById("hero-image");
const header = document.getElementById("header");
const blurb = document.getElementById("blurb");
let count = 1;
updateContent();

leftArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    decrementCount();
    updateContent();
  });
});

rightArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    incrementCount();
    updateContent();
  });
});

function decrementCount() {
  count > 1 ? count-- : (count = 3);
}

function incrementCount() {
  count < 3 ? count++ : (count = 1);
}

function updateContent() {
  switch (count) {
    case 1:
      heroImage.setAttribute("src", `./images/${screen}-image-hero-1.jpg`);
      header.textContent = "Discover innovative ways to decorate";
      blurb.textContent =
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
      break;
    case 2:
      heroImage.setAttribute("src", `./images/${screen}-image-hero-2.jpg`);
      header.textContent = "We are available all across the globe";
      blurb.textContent =
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      break;
    case 3:
      heroImage.setAttribute("src", `./images/${screen}-image-hero-3.jpg`);
      header.textContent = "Manufactured with the best materials";
      blurb.textContent =
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
      break;
  }
}
