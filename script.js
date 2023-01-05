class Planet {
  constructor(size, distance, img) {
    this.size = Math.floor(
      size >= 1000000 ? size / 3000 : size >= 49000 ? size / 400 : size / 40
    );
    this.distance = Math.floor(distance / 100000);
    this.img = img;
  }
}
let solar = new Planet(21520, 0, "./images/solar.png");
let sun = new Planet(1392700, 10000000, "./images/sun.png");
let mercury = new Planet(4875, 57900000, "./images/mercury.png");
let venus = new Planet(12104, 108200000, "./images/venus.png");
let earth = new Planet(12756, 149600000, "./images/earth.png");
let mars = new Planet(6780, 227850000, "./images/mars.png");
let jupiter = new Planet(142984, 778300000, "./images/jupiter.png");
let saturn = new Planet(120536, 1429800000, "./images/saturn.png");
let uranus = new Planet(51108, 2870000000, "./images/uranus.png");
let neptune = new Planet(49532, 4495060000, "./images/neptune.png");
let solarPlanets = [
  solar,
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();

let mainPl = document.getElementById("main");
// mainPl.src = sun.img;
// mainPl.style.height = sun.size + "px";
for (let i = 0; i < solarPlanets.length; i++) {
  console.log(solarPlanets[i]);
}
window.onscroll = function () {
  // for (let i = 0; i < solarPlanets.length-1; i++) {

  // }
  if (document.documentElement.scrollTop < sun.distance - 50) {
    mainPl.src = solar.img;
    mainPl.style.height = solar.size + "px";
    mainPl.classList.remove("fade");
  }
  if (
    document.documentElement.scrollTop >= sun.distance - 50 &&
    document.documentElement.scrollTop <= sun.distance
  ) {
    mainPl.classList.add("fade");
  }
  if (document.documentElement.scrollTop > sun.distance) {
    mainPl.src = sun.img;
    mainPl.style.height = sun.size + "px";
    mainPl.classList.remove("fade");
  }
};
