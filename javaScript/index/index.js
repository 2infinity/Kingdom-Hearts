const menuBtn = document.getElementById("menuBtn");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const menu = document.getElementById("menu")
const menuIcon2 = document.getElementById("menu-icon2");
const khx = document.getElementById("khx");
const keyS = document.getElementById("kingdomKey");
const jungle = document.getElementById("jungleKey");
const wishes = document.getElementById("threeWishes");
const crab = document.getElementById("crabClaw");
const pumpkin = document.getElementById("pumpkinHead");
const fairy = document.getElementById("fairy");
const spellbinder = document.getElementById("spellbinder");
const wishing = document.getElementById('wishing');
const chocobo = document.getElementById("chocobo");
const olympia = document.getElementById("olympia");
const lion = document.getElementById("lionheart");
const oath = document.getElementById("oath");
const oblivion = document.getElementById("oblivion");
const lady = document.getElementById("lady");
const divine = document.getElementById("divine");
const diamond = document.getElementById("diamond");
const angel = document.getElementById("angel");
const ultima = document.getElementById("ultima");
const kingD = document.getElementById("keyD");
const heart = document.getElementById("heart");





menuBtn.addEventListener("click", ()=>{
  bar1.classList.toggle("open");
  bar2.classList.toggle("open");
  menu.classList.toggle("open");
  menuIcon2.classList.toggle("open");
  selectItems.play();
  randomKeyblade();

  if(menu.className ==="open"){
    getItem.play();
  }
 
  
 
});



  const keyblades = [
    keyS,
    jungle,
    wishes,
    crab,
    pumpkin,
    fairy,
    spellbinder,
    wishing,
    chocobo,
    olympia,
    lion,
    oath,
    oblivion,
    lady,
    divine,
    diamond,
    angel,
    ultima,
    kingD,
    heart
  ]
  
  const max = keyblades.length;
  const min = 1;
  
  function randomKeyblade() {
    const rando = Math.floor(Math.random() * max);
    
    keyblades.forEach(d => {
      d.style.display = "none";
  });
  keyblades[rando].style.display = "inline-block";
  keyblades[rando].style.animation = "fadeIn 2s ease forwards";
  }
  
  
  
const icons = document.querySelectorAll(".icons");

//audio
const cursorMove = document.getElementById("cursorMove");
const selectItems = document.getElementById("selectItems");
const getItem = document.getElementById("getItem")

icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    cursorMove.currentTime = 0;
    cursorMove.play();
  });
});

icons.forEach(icon =>{
  icon.addEventListener("click", ()=>{
    selectItems.currentTime = 0.15;
    selectItems.play();
  });
});
