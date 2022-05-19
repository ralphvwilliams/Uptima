const nav = document.getElementById("navbar1");
const navbar = document.getElementById("navigation");
const menuIcon = document.querySelector(".fa fa-bars");
const icon = document.querySelector(".icon");
const logo2 = document.querySelector(".logo-2");
const logo1 = document.querySelector(".logo-1");
const closeIcon = document.getElementById("close");

function myFunction() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    navbar.style.backgroundColor = "white";
  } else {
    logo1.style.display = "none";
    logo2.style.display = "block";
    nav.style.display = "block";
    navbar.style.backgroundColor = "#5051db";
    icon.style.color = "#fff";
    closeIcon.setAttribute("class", "fa fa-close");
    menuIcon.style.display = "block";
  }

  logo1.style.display = "block";
  icon.style.color = "#5051db";
  closeIcon.style.display = "block";
  closeIcon.setAttribute("class", "fa fa-bars");
}
