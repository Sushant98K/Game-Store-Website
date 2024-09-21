let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  bell.classList.remove("active");
};

// Notification
let bell = document.querySelector(".notification");

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}
