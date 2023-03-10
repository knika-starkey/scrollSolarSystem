class Planet {
  constructor(name, size, distance, img, characteristics, info) {
    this.name = name;
    this.size = Math.floor(
      size >= 1000000 ? size / 3000 : size >= 49000 ? size / 400 : size / 40
    );
    this.distance = Math.floor(distance / 100000);
    this.img = img;
    this.characteristics = characteristics.replaceAll(";", "</br>");
    this.info = info;
  }
}
let solar = new Planet(
  "solarSystem",
  21520,
  0,
  "./images/solar.png",
  "Сонячна система — планетна система, що включає в себе центральну зорю — Сонце, і всі природні космічні об'єкти (планети, астероїди, комети, потоки сонячного вітру тощо), які об'єднуються гравітаційною взаємодією. Сонячна система є частиною значно більшого комплексу, який складається із зірок і міжзоряної речовини — галактики Чумацький Шлях.",
  "Внутрішні чотири планети, найближчі до Сонця – Меркурій, Венера, Земля та Марс – часто називають “земними планетами “, оскільки їх поверхні кам’янисті. Плутон також має кам’янисту, хоч і замерзлу поверхню, але ніколи не був згрупований з чотирма земними. Чотири великі зовнішні світи – Юпітер, Сатурн, Уран і Нептун – іноді називають “подібними до Юпітера” через їх величезні розміри щодо планети Земля. Вони також здебільшого складаються з таких газів, як водень, гелій та аміак, а не з кам’янистих поверхонь, хоча астрономи вважають, що деякі або всі з них можуть мати тверді ядра.  Юпітер і Сатурн іноді називають газовими гігантами, тоді як більш віддалені Уран і Нептун отримали прізвисько крижаних велетнів. Нижче наведено короткий огляд восьми справжніх планет нашої Сонячної системи по порядку, від найближчої до Сонця до найдальшої: "
);
let sun = new Planet(
  "sun",
  1392700,
  10000000,
  "./images/sun.png",
  "Сонце — зоря, що є центром Сонячної системи; Діаметр Сонця: близько 1,3 мільйона кілометрів; Температура поверхні Сонця: близько 5700 °C; Орбітальна швидкість Сонця: 217 км/с.",
  "Радіус Сонця становить близько 695 000 кілометрів, або в 109 разів більше земного. Його маса приблизно в 330 000 разів перевищує Земну, це 1.989*10^30 кг, що становить приблизно 99,86% від загальної маси Сонячної системи. Приблизно три чверті маси Сонця складається з водню (~73%); решта — в основному гелій (~25%), з набагато меншою кількістю більш важких елементів, включаючи кисень, вуглець, неон і залізо. Сонце — зірка головної послідовності G-типу (G2V). Таким чином, його неофіційно, і не зовсім точно, називають жовтим карликом (його світло насправді біле). Він утворився приблизно 4,6 мільярда років тому в результаті гравітаційного колапсу речовини в області великої молекулярної хмари."
);
let mercury = new Planet(
  "mercury",
  4875,
  57900000,
  "./images/mercury.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий на честь вісника римських богів; Діаметр: 3078 миль (4878 км); Орбіта: 88 земних днів; День: 58,6 земних днів",
  "Здійснюючи повний оберт навколо Сонця лише за 88 днів, Меркурій є найближчою до Сонця планетою, а також найменшою, лише трохи більшою за земний місяць. На Меркурії відбуваються різкі зміни денних і нічних температур. В день 450 C, що досить гаряче, щоб розплавити свинець. Тим часом на нічній стороні температури опускаються до мінус мінус 180 C. "
);
let venus = new Planet(
  "venus",
  12104,
  108200000,
  "./images/venus.png",
  "Відкриття: Відомо стародавнім грекам і видно неозброєним оком; Названа на честь римської богині любові та краси; Діаметр: 12 104 км; Орбіта: 225 земних днів; День: 241 земний день",
  "Друга планета від Сонця – Венера – за розміром як Земля. Радіолокаційні зображення під її атмосферою показують, що на її поверхні є гори та вулкани. Через свою густу токсичну атмосферу, яка складається із сірчанокислих хмар, Венера є надзвичайним прикладом парникового ефекту. На ній навіть спекотніше ніж на Меркурії. Середня температура на поверхні Венери становить 900 F (465 C).  Венера повільно обертається зі сходу на захід, у протилежному напрямку від більшості інших планет."
);
let earth = new Planet(
  "earth",
  12756,
  149600000,
  "./images/earth.png",
  "Англійська назва The Earth – походить від “Die Erde”, німецького слова “земля”.; Діаметр: 12760 км; Орбіта: 365,24 дня; День: 23 години 56 хвилин",
  "Третя планета від Сонця, Земля – ​​це водний світ, де дві третини планети вкрито океаном. Це єдиний світ, у якому відоме існування життя. Земна атмосфера багата на азот і кисень. Земля обертається навколо своєї осі на 1532 фути в секунду (467 метрів на секунду) – трохи більше 1000 миль на годину (1600 км / год) – на екваторі. "
);
let mars = new Planet(
  "mars",
  6780,
  227850000,
  "./images/mars.png",
  "Відкриття: Відомий стародавнім грекам і йоговидно неозброєним оком; Названий на честь римського бога війни; Діаметр: 6717 км; Орбіта: 687 земних днів; День: Трохи більше одного земного дня (24 години, 37 хвилин)",
  "Четверта планета від Сонця – Марс, і це холодне, схоже на пустелю місце, вкрите пилом. Цей пил виник із оксидів заліза, надаючи планеті знаковий червоний відтінок. Марс поділяє подібний на Землю: він скелястий, має гори, долини та каньйони, а також на ньому мають місце шторми та пилові бурі. Наукові дані свідчать про те, що колись мільярди років тому Марс був набагато теплішим, вологішим світом. Вчені також вважають, що на древньому Марсі були умови для підтримки життя, такого як бактерії та інші мікроби. "
);
let jupiter = new Planet(
  "jupiter",
  142984,
  778300000,
  "./images/jupiter.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий на честь володаря римських богів; Діаметр: 138822 км; Орбіта: 11,9 земних років; День: 9,8 земних годин",
  "П’ята планета від Сонця, Юпітер – це гігантський газовий світ, який є наймасивнішою планетою в нашій Сонячній системі – більш ніж удвічі масивнішою, ніж усі інші планети разом узятих. Його закручені хмари барвисті завдяки різним типам газів. І головною особливістю його хмар є Велика Червона пляма, гігантська буря шириною понад 10 000 миль. Протягом останніх 150 років вона лютує з швідкистю понад 400 миль/год. Юпітер має сильне магнітне поле, і, маючи 75 місяців, він трохи схожий на мініатюрну Сонячну систему."
);
let saturn = new Planet(
  "saturn",
  120536,
  1429800000,
  "./images/saturn.png",
  "Відкриття: Відомий стародавнім грекам і його видно неозброєним оком; Названий римським богом землеробства; Діаметр: 120 900 км; Орбіта: 29,5 земних років; День: Близько 10,5 земних годин",
  "Шоста планета від Сонця, Сатурн, відомий найбільше своїми кільцями. Кільця склдаються з льоду та гірських порід, і вчені ще не впевнені, як вони утворилися. Сам Юпітер – це газоподібна планета та складається переважно з воденю і гелію. "
);
let uranus = new Planet(
  "uranus",
  51108,
  2870000000,
  "./images/uranus.png",
  "Відкриття: 1781 року Вільямом Гершелем (спочатку ця планета вважалася зіркою); Названий для уособлення неба в античній міфології; Діаметр: 51 120 км; Орбіта: 84 земних роки День: 18 земних годин",
  "Сьома планета від Сонця, Уран – дивна куля. У ньому є хмари з сірководню, тієї самої хімічної речовини, яка змушує гнилі яйця так пахнути. Він обертається зі сходу на захід, як Венера. Але на відміну від Венери або будь-якої іншої планети, його екватор знаходиться майже під прямим кутом до своєї орбіти – в основному він обертається на боці. Астрономи вважають, що об’єкт удвічі більший за Землю зіткнувся з Ураном приблизно 4 мільярди років тому, внаслідок чого Уран нахилився."
);
let neptune = new Planet(
  "neptune",
  49532,
  4495060000,
  "./images/neptune.png",
  "Відкриття: 1846 року; Названий на честь римського бога води; Діаметр: 49530 км; Орбіта: 165 земних років; День: 19 земних годин",
  "Восьма планета від Сонця, Нептун розміром приблизно з Уран і відомий сильним вітром. Нептун далекий і холодний. Нептун був першою планетою, яку вичислили за допомогою математики, до того, як її візуально побачили.  Нептун приблизно в 17 разів масивніший за Землю і має кам’янисте ядро."
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
let locationDiv = document.getElementById("location");
let homeBuutton = document.getElementById("home");
let backButton = document.getElementById("getBack");
let moreInfo = document.getElementById("infoShow");
moreInfo.addEventListener("click", getMore);
function getMore() {
  rightText.classList.toggle("fade");
  if (rightText.classList.contains("fade")) {
    moreInfo.innerText = "Більше";
  } else {
    moreInfo.innerText = "Менше";
  }
}
let fastM = document.forms.fastMenu;
for (let i = 0; i < fastM.length; i++) {
  fastM[i].addEventListener("change", goTo);
}
mainPl.addEventListener("click", showSurface);
backButton.addEventListener("click", backToNormal);
function backToNormal() {
  backButton.classList.add("fade");
  document.body.style.backgroundImage = `url(./images/space.jpg)`;
  homeBuutton.disanled = "true";
  moreInfo.classList.remove("fade");
  rightText.classList.remove("goRight");
  leftText.classList.remove("goLeft");
  mainPl.classList.remove("fade");
  homeBuutton.classList.remove("fade");
  locationDiv.classList.remove("fade");
  fastM.classList.remove("fade");
  document.body.classList.remove("stop-scrolling");
}
function showSurface() {
  let planetImg = mainPl.src.replace(/^.*[\\\/]/, "").replace(".png", "");
  // console.log(planetImg);
  document.body.style.backgroundImage = `url(./images/${planetImg}-surface.jpg)`;
  homeBuutton.disanled = "false";
  moreInfo.classList.add("fade");
  rightText.classList.add("goRight");
  leftText.classList.add("goLeft");
  mainPl.classList.add("fade");
  homeBuutton.classList.add("fade");
  locationDiv.classList.add("fade");
  backButton.classList.remove("fade");
  fastM.classList.add("fade");
  document.body.classList.add("stop-scrolling");
}
function goTo(event) {
  for (let i = 0; i < solarPlanets.length; i++) {
    if (solarPlanets[i].name == event.target.value) {
      window.scrollTo(0, solarPlanets[i].distance + 2);
    }
  }
}
homeBuutton.addEventListener("click", () => {
  window.scrollTo(0, earth.distance + 2);
});
// for (let i = 0; i < solarPlanets.length; i++) {
//   console.log(solarPlanets[i]);
// }
window.onscroll = function () {
  locationDiv.innerHTML = `Ми вже пролетіли ${
    window.pageYOffset * 100000
  } кілометрів!`;
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
    document.documentElement.scrollTop < bPlanet.distance - 70 &&
    document.documentElement.scrollTop >= aPlanet.distance
  ) {
    changeImg(aPlanet);
  }
  if (
    document.documentElement.scrollTop >= bPlanet.distance - 70 &&
    document.documentElement.scrollTop <= bPlanet.distance
  ) {
    locationDiv.innerHTML = "Підлітаємо до наступної!!";
    rightText.classList.add("goRight");
    leftText.classList.add("goLeft");
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
  leftText.classList.remove("goLeft");
  rightText.innerHTML = planet.info;
  rightText.classList.remove("goRight");
  mainPl.classList.remove("fade");
}
