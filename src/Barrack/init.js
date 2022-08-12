/* eslint-disable */
const units = [];

function init() {
  const marine = document.querySelectorAll(".terranMarine");
  const firebat = document.querySelectorAll(".terranFirebat");
  const medic = document.querySelectorAll(".terranMedic");

  for (let i = 0; i < marine.length; i++) {
    marine[i].addEventListener("click", clickMarineHandler);
  }

  for (let i = 0; i < firebat.length; i++) {
    firebat[i].addEventListener("click", clickFirebatHandler);
  }

  for (let i = 0; i < medic.length; i++) {
    medic[i].addEventListener("click", clickMedicHandler);
  }
}

function makeUnitHandler(unitName) {
  const playground = document.querySelector(".playground");

  let unit;

  switch (unitName) {
    case "marine":
      unit = new MarineClass(
        playground.clientHeight * Math.random(),
        playground.clientWidth * Math.random(),
        Math.random() * 1000
      );
      break;

    case "firebat":
      unit = new FirebatClass(
        playground.clientHeight * Math.random(),
        playground.clientWidth * Math.random(),
        Math.random() * 1000
      );
      break;

    case "medic":
      unit = new MedicClass(
        playground.clientHeight * Math.random(),
        playground.clientWidth * Math.random(),
        Math.random() * 1000
      );
      break;

    default:
      break;
  }

  units.push(unit);
  unit.render(playground);

  init();
}

function upgradeUnits(type) {
  const attackInfo = Number(window.localStorage.getItem("attack"));
  const defenceInfo = Number(window.localStorage.getItem("defence"));

  switch (type) {
    case "attack":
      window.localStorage.setItem("attack", attackInfo + 3);
      break;
    case "defence":
      window.localStorage.setItem("defence", defenceInfo + 2);
      break;
    case "hasStimpack":
      window.localStorage.setItem("hasStimpack", true);

    default:
      break;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const makeMarineEl = document.querySelector(".marine");
  const makeFirebatEl = document.querySelector(".firebat");
  const makeMedicEl = document.querySelector(".medic");

  const upgradeAttackEl = document.querySelector(".attack");
  const upgradeDefenceEl = document.querySelector(".defence");
  const upgradeStimpackEl = document.querySelector(".stimPack");

  makeMarineEl.addEventListener("click", () => makeUnitHandler("marine"));
  makeFirebatEl.addEventListener("click", () => makeUnitHandler("firebat"));
  makeMedicEl.addEventListener("click", () => makeUnitHandler("medic"));

  upgradeAttackEl.addEventListener("click", () => upgradeUnits("attack"));
  upgradeDefenceEl.addEventListener("click", () => upgradeUnits("defence"));
  upgradeStimpackEl.addEventListener("click", () =>
    upgradeUnits("hasStimpack")
  );
});

function clickMarineHandler(event) {
  const stimpackMarineSound = document.querySelector("#stimpackMarineSound");

  stimpackMarineSound.play();
}

function clickFirebatHandler(event) {
  const firebatNewSound = document.querySelector("#firebatNewSound");

  firebatNewSound.play();
}

function clickMedicHandler(event) {
  const medicNewSound = document.querySelector("#medicNewSound");
  medicNewSound.play();
}
