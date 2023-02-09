const transition = document.querySelector("#hero-main");
const mainTitle = document.querySelector(".marquee");

const heroTopLeft = document.querySelector("#hero-top-left");
const heroTopRight = document.querySelector("#hero-top-right");
const heroBottom = document.querySelector("#hero-bottom");

transition.addEventListener("mouseover", function () {
  mainTitle.setAttribute("id", "ok");
});

transition.addEventListener("mouseout", function () {
  mainTitle.setAttribute("id", "ok1");
});

function changeHeroHover() {
  this.setAttribute("id", "ok");
  console.log(this);
}

heroBottom.addEventListener("mouseover", changeHeroHover);
