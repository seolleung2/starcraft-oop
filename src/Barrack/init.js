/* eslint-disable */
const units = [];
const crews = [];

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
}

window.addEventListener("DOMContentLoaded", () => {
  const makeMarineEl = document.querySelector(".marine");
  const makeFirebatEl = document.querySelector(".firebat");
  const makeMedicEl = document.querySelector(".medic");

  makeMarineEl.addEventListener("click", () => makeUnitHandler("marine"));
  makeFirebatEl.addEventListener("click", () => makeUnitHandler("firebat"));
  makeMedicEl.addEventListener("click", () => makeUnitHandler("medic"));
});
