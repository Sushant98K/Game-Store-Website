let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  bell.classList.remove("active");
};

// Notification
let bell = document.querySelector(".notification");
// Custom Scroll Bar
window.onscroll = function () {
  mufunction();
};

function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}