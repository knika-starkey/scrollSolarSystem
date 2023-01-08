class Planet {
  constructor(name, size, distance, img, characteristics) {
    this.name = name;
    this.size = Math.floor(
      size >= 1000000 ? size / 3000 : size >= 49000 ? size / 400 : size / 40
    );
    this.distance = Math.floor(distance / 100000);
    this.img = img;
    this.characteristics = characteristics.replaceAll(";", "</br>");
  }
}
let solar = new Planet(
  "Сонячна система",
  21520,
  0,
  "./images/solar.png",
  "Сонячна система — планетна система, що включає в себе центральну зорю — Сонце, і всі природні космічні об'єкти (планети, астероїди, комети, потоки сонячного вітру тощо), які об'єднуються гравітаційною взаємодією. Сонячна система є частиною значно більшого комплексу, який складається із зірок і міжзоряної речовини — галактики Чумацький Шлях."
);
let sun = new Planet(
  "Сонце",
  1392700,
  10000000,
  "./images/sun.png",
  "Сонце — зоря, що є центром Сонячної системи; Діаметр Сонця: близько 1,3 мільйона кілометрів; Температура поверхні Сонця: близько 5700 °C; Орбітальна швидкість Сонця: 217 км/с."
);
let mercury = new Planet(
  "Меркурій",
  4875,
  57900000,
  "./images/mercury.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий на честь вісника римських богів; Діаметр: 3078 миль (4878 км); Орбіта: 88 земних днів; День: 58,6 земних днів"
);
let venus = new Planet(
  "Венера",
  12104,
  108200000,
  "./images/venus.png",
  "Відкриття: Відомо стародавнім грекам і видно неозброєним оком; Названа на честь римської богині любові та краси; Діаметр: 12 104 км; Орбіта: 225 земних днів; День: 241 земний день"
);
let earth = new Planet(
  "Земля",
  12756,
  149600000,
  "./images/earth.png",
  "Англійська назва The Earth – походить від “Die Erde”, німецького слова “земля”.; Діаметр: 12760 км; Орбіта: 365,24 дня; День: 23 години 56 хвилин"
);
let mars = new Planet(
  "Марс",
  6780,
  227850000,
  "./images/mars.png",
  "Відкриття: Відомий стародавнім грекам і йоговидно неозброєним оком; Названий на честь римського бога війни; Діаметр: 6717 км; Орбіта: 687 земних днів; День: Трохи більше одного земного дня (24 години, 37 хвилин)"
);
let jupiter = new Planet(
  "Юпітер",
  142984,
  778300000,
  "./images/jupiter.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий на честь володаря римських богів; Діаметр: 138822 км; Орбіта: 11,9 земних років; День: 9,8 земних годин"
);
let saturn = new Planet(
  "Сатурн",
  120536,
  1429800000,
  "./images/saturn.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий римським богом землеробства; Діаметр: 120 900 км; Орбіта: 29,5 земних років; День: Близько 10,5 земних годин"
);
let uranus = new Planet(
  "Уран",
  51108,
  2870000000,
  "./images/uranus.png",
  "Відкриття: 1781 року Вільямом Гершелем (спочатку ця планета вважалася зіркою); Названий для уособлення неба в античній міфології; Діаметр: 51 120 км; Орбіта: 84 земних роки День: 18 земних годин"
);
let neptune = new Planet(
  "Нептун",
  49532,
  4495060000,
  "./images/neptune.png",
  "Відкриття: 1846 року; Названий на честь римського бога води; Діаметр: 49530 км; Орбіта: 165 земних років; День: 19 земних годин"
);
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

let mainPl = document.getElementById("main");
let leftText = document.getElementById("charText");
let rightText = document.getElementById("infoText");
// mainPl.src = sun.img;
// mainPl.style.height = sun.size + "px";
for (let i = 0; i < solarPlanets.length; i++) {
  console.log(solarPlanets[i]);
}
window.onscroll = function () {
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
    changeImg(aPlanet);
  }
  if (
    document.documentElement.scrollTop >= bPlanet.distance - 50 &&
    document.documentElement.scrollTop <= bPlanet.distance
  ) {
    leftText.classList.add("fade");
    mainPl.classList.add("fade");
  }
  if (isLast && document.documentElement.scrollTop > bPlanet.distance) {
    changeImg(bPlanet);
  }
}

function changeImg(planet) {
  mainPl.src = planet.img;
  mainPl.style.height = planet.size + "px";
  leftText.innerHTML = planet.characteristics;
  leftText.classList.remove("fade");
  mainPl.classList.remove("fade");
}
