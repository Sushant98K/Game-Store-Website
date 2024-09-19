let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
};
