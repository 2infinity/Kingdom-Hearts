const menuBtn = document.getElementById("menuBtn");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const menuIcon2 = document.getElementById("menu-icon2");


menuBtn.addEventListener("mouseenter", () =>{
  cursorMove.play();
})


menuBtn.addEventListener("click", ()=>{
  bar1.classList.toggle('open');
  bar2.classList.toggle("open");
  menuIcon2.classList.toggle("open");
  selectItems.play();
  
});


//audio
const getItem = document.getElementById("getItem");
const selectItems = document.getElementById("selectItems");
const cursorMove = document.getElementById("cursorMove");