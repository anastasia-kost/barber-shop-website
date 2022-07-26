const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");
const menu = document.getElementById("menu");

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
};
