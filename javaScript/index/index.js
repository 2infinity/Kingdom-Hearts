const menuBtn = document.getElementById("menuBtn");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const menu = document.getElementById("menu")
const menuIcon2 = document.getElementById("menu-icon2");
const khx = document.getElementById("khx");
const icons = document.querySelectorAll(".icons");
const ceremony = document.getElementById("ceremony");
const keyBtn = document.getElementById("keyBtn");
const menuBtns = document.querySelectorAll(".menuBtns");
const aboutContainer = document.getElementById("aboutContainer");
const heartBtn = document.getElementById("heartBtn");
const guardians = document.querySelectorAll(".guardians");
const guardianPic = document.querySelectorAll(".guardianPic");
const newsContainer = document.getElementById("newsContainer");
const newsIcon = document.getElementById("newsIcon");
const khNewsContainer = document.getElementById("khNewsContainer");
const mickeyPoint = document.getElementById("mickeyPoint");
//Keyblades
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
//Keyblades
//audio
const cursorMove = document.getElementById("cursorMove");
const selectItems = document.getElementById("selectItems");
const getItem = document.getElementById("getItem")


menuBtn.addEventListener("mouseenter", ()=>{
  cursorMove.currentTime = 0.15;
  cursorMove.play();  
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
]

menuBtn.addEventListener("click", ()=>{
  bar1.classList.toggle("open");
  bar2.classList.toggle("open");
  menu.classList.toggle("open");
  menuIcon2.classList.toggle("open");
  selectItems.currentTime = 0;
  selectItems.play();
  aboutContainer.style.display = "none";
  ceremony.style.display = "none";
  keyblades.forEach(d=>{
    d.style.display = "none";
  });
  newsContainer.style.display = "flex";

});

document.body.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuIcon2.contains(e.target)) {
    menu.classList.remove("open");
    menuIcon2.classList.remove("open");
    bar1.classList.remove("open");
    bar2.classList.remove("open");
  }
});



const max = keyblades.length;
const min = 1;
// Keyblade Functions  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
function randomKeyblade() {
  getItem.play()
  ceremony.style.display = "inline";
  aboutContainer.style.display = "none";
  newsContainer.style.display = "none";

  const rando = Math.floor(Math.random() * max);
  
  keyblades.forEach(d => {
    d.style.display = "none";
  });
  keyblades[rando].style.display = "inline-block";
  keyblades[rando].style.animation = "fadeIn 2s ease forwards";
}
  
function saveKeyblade(){

}

function renderKeyblade(){

}
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//About Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function about(){
  ceremony.style.display = "none";
  newsContainer.style.display = "none";
  keyblades.forEach(d => {
    d.style.display = "none";
  });
  aboutContainer.style.display = "inline";
  aboutContainer.style.animation = "fadeIn 2s ease forwards";
  selectItems.currentTime = 0.15;
  selectItems.play();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
keyBtn.addEventListener("click", randomKeyblade);
  
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

menuBtns.forEach(c =>{
  c.addEventListener("click", ()=>{
    selectItems.currentTime = 0.15;
    selectItems.play();
  });
});

menuBtns.forEach(e =>{
  e.addEventListener("mouseenter", ()=>{
    cursorMove.currentTime = 0.15;
    cursorMove.play();
  });
});

heartBtn.addEventListener("click", about);

//Guardians //
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



guardians.forEach(t=>{
  t.addEventListener("mouseenter", ()=>{
    cursorMove.currentTime = 0.15;
    cursorMove.play();
    if(t.id=="cynical"){
      t.style.backgroundImage = `url("images/banners/cynical_Banner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px green";
      t.style.backgroundPosition = "355px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="sarah"){
      t.style.backgroundImage = `url("images/banners/sarahBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px pink";
      t.style.backgroundPosition = "557px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="hmk"){
      t.style.backgroundImage = `url("images/banners/hmkBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px red";
      t.style.backgroundPosition = "700px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="ever"){
      t.style.backgroundImage = `url("images/banners/everglowBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px purple";
      t.style.backgroundPosition = "375px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="sora"){
      t.style.backgroundImage = `url("images/banners/soraalarmBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px blue";
      t.style.backgroundPosition = "610px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="biz"){
      t.style.backgroundImage = `url("images/banners/bizBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px darkblue";
      t.style.backgroundPosition = "950px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="ninten"){
      t.style.backgroundImage = `url("images/youtubers/ninten.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px red";
      t.style.backgroundPosition = "0px";
      t.style.backgroundSize = "50px";
      t.style.backgroundRepeat = "repeat";
    }
    else if(t.id=="lowkeymatt"){
      t.style.backgroundImage = `url("images/banners/lowkeybanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px skyblue";
      t.style.backgroundPosition = "747px 0px";
      t.style.backgroundSize = "fill";
    }
    else if(t.id=="bloody"){
      t.style.backgroundImage = `url("images/banners/bloodybizkitzbanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px yellow";
      t.style.backgroundPosition = "1200px";
      t.style.backgroundSize = "fill";
    }
    else if(t.id=="regular"){
      t.style.backgroundImage = `url("images/banners/regularpatbanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px purple";
      t.style.backgroundPosition = "1175px";
      t.style.backgroundSize = "fill";
    }
    else if(t.id=="sky"){
      t.style.backgroundImage = `url("images/banners/skyBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px lightPink";
      t.style.backgroundPosition = "585px";
      t.style.backgroundSize = "fill";
    }
    else if(t.id=="damo"){
      t.style.backgroundImage = `url("images/banners/damoBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px lightblue";
      t.style.backgroundPosition = "695px";
      t.style.backgroundSize = "cover";
    }
    else if(t.id=="stickman"){
      t.style.backgroundImage = `url("images/banners/stickmanbanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px green";
      t.style.backgroundPosition = "-50px";
      t.style.backgroundSize = "700px";
    }
    else if(t.id=="prodigy"){
      t.style.backgroundImage = `url("images/banners/prodigyBanner.jpg")`;
      t.style.boxShadow = "2px 2px 40px 5px white";
      t.style.backgroundPosition = "600px";
      t.style.backgroundSize = "cover";
    }
    t.style.borderRadius = "25px";
    t.style.color = "white";
  });
});

guardians.forEach(t=>{
  t.addEventListener("mouseleave", ()=>{
    if(t.id=="cynical"){
      t.style.color = "white";
    }
    t.style.boxShadow = "0px 0px 0px 0px white";
    t.style.backgroundImage = "none";
  });
});

guardians.forEach(t=>{
  t.addEventListener("click", ()=>{
    selectItems.play();
  });
});



// News Container Scroll >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
newsIcon.addEventListener("click", () => {
  khNewsContainer.scrollIntoView({ behavior: "smooth" });
  bar1.classList.toggle("open");
  bar2.classList.toggle("open");
  menu.classList.toggle("open");
  menuIcon2.classList.toggle("open");
});

// Mickey Scroll >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener("scroll", ()=>{
  if(window.scrollY>50){
    mickeyPoint.style.display= "block";
  }
  else{
    mickeyPoint.style.display = "none";
  }
});

function scrollUp(){
  h1.scrollIntoView({behavior: "smooth"});
}

mickeyPoint.addEventListener("click", scrollUp);