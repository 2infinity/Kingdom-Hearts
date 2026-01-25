const menuBtn = document.getElementById("menuBtn");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const menu = document.getElementById("menu")
const menuIcon2 = document.getElementById("menu-icon2");

menuBtn.addEventListener("click", ()=>{
  bar1.classList.toggle("open");
  bar2.classList.toggle("open");
  menu.classList.toggle("open");
  menuIcon2.classList.toggle("open");
});

