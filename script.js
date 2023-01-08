class Planet {
  constructor(name, size, distance, img) {
    this.name = name;
    this.size = Math.floor(
      size >= 1000000 ? size / 3000 : size >= 49000 ? size / 400 : size / 40
    );
    this.distance = Math.floor(distance / 100000);
    this.img = img;
  }
}
let solar = new Planet("Solar System", 21520, 0, "./images/solar.png");
let sun = new Planet("Sun", 1392700, 10000000, "./images/sun.png");
let mercury = new Planet("Mercury", 4875, 57900000, "./images/mercury.png");
let venus = new Planet("Venus", 12104, 108200000, "./images/venus.png");
let earth = new Planet("Earth", 12756, 149600000, "./images/earth.png");
let mars = new Planet("Mars", 6780, 227850000, "./images/mars.png");
let jupiter = new Planet("Jupiter", 142984, 778300000, "./images/jupiter.png");
let saturn = new Planet("Saturn", 120536, 1429800000, "./images/saturn.png");
let uranus = new Planet("Uranus", 51108, 2870000000, "./images/uranus.png");
let neptune = new Planet("Neptune", 49532, 4495060000, "./images/neptune.png");
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
  // check(solar, sun);
  // check(sun, mercury);
  // check(mercury, venus);
  // check(venus, earth);
  for (let i = 0; i < solarPlanets.length - 1; i++) {
    check(solarPlanets[i], solarPlanets[i + 1], false);
  }
  check(
    solarPlanets[solarPlanets.length - 2],
    solarPlanets[solarPlanets.length - 1],
    true
  );
};

function check(aPlanet, bPlanet, isLast) {
  if (
    document.documentElement.scrollTop < bPlanet.distance - 50 &&
    document.documentElement.scrollTop >= aPlanet.distance
  ) {
    mainPl.src = aPlanet.img;
    mainPl.style.height = aPlanet.size + "px";
    mainPl.classList.remove("fade");
  }
  if (
    document.documentElement.scrollTop >= bPlanet.distance - 50 &&
    document.documentElement.scrollTop <= bPlanet.distance
  ) {
    mainPl.classList.add("fade");
  }
  if (isLast && document.documentElement.scrollTop > bPlanet.distance) {
    mainPl.src = bPlanet.img;
    mainPl.style.height = bPlanet.size + "px";
    mainPl.classList.remove("fade");
  }
}
