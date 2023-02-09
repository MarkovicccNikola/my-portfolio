const transition = document.querySelector("#hero-main");
const mainTitle = document.querySelector(".marquee");

transition.addEventListener("mouseover", function () {
  mainTitle.setAttribute("id", "ok");
});

transition.addEventListener("mouseout", function () {
  mainTitle.setAttribute("id", "ok1");
});
