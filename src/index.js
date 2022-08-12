window.localStorage.setItem("attack", 7);
window.localStorage.setItem("defence", 4);
window.localStorage.setItem("hasStimpack", false);

const barrackEl = document.querySelector(".barrack");
const engineeringEl = document.querySelector(".engineeringBay");

const roundedBarrack = document.querySelector(".brk");
const roundedEnBay = document.querySelector(".enb");

const barrackSound = document.querySelector("#barrackSound");
const enBaySound = document.querySelector("#enbSound");

const panelBarrackEl = document.querySelector(".panelBarrack");
const panelEnBayEl = document.querySelector(".panelEnBay");

const panelMarineEl = document.querySelector(".panelBarrack .marine");
const birthMarineSound = document.querySelector("#birthMarineSound");

const panelMedicEl = document.querySelector(".panelBarrack .medic");
const birthMedicSound = document.querySelector("#birthMedicSound");
const panelFirebatEl = document.querySelector(".panelBarrack .firebat");
const birthFirebatSound = document.querySelector("#birthFirebatSound");
const panelUpgradestimPackEl = document.querySelector(".panelEnBay .stimPack");
const panelUpgradeAttackEl = document.querySelector(".panelEnBay .attack");
const panelUpgradeDefenceEl = document.querySelector(".panelEnBay .defence");

const upgradeSound = document.querySelector("#upgradeSound");

barrackEl.addEventListener("click", () => {
  roundedBarrack.classList.add("clicked");
  panelBarrackEl.classList.add("open");
  barrackSound.play();
});

engineeringEl.addEventListener("click", () => {
  roundedEnBay.classList.add("clicked");
  panelEnBayEl.classList.add("open");
  enBaySound.play();
});

document.addEventListener("click", (event) => {
  const selectedUnitEl = document.querySelectorAll(
    "span.terranUnits.selectedUnit"
  );

  const targetEl = event.target;
  const isBarrackNearby = targetEl.closest(".barrack");
  const isPanelBrkNearby = targetEl.closest(".panelBarrack");
  const isEngineeringBayNearBy = targetEl.closest(".engineeringBay");
  const isPanelEnBayNearBy = targetEl.closest(".panelEnBay");

  const isUnitNearby = targetEl.closest("span.terranUnits.selectedUnit");

  if (!isBarrackNearby && !isPanelBrkNearby) {
    roundedBarrack.classList.remove("clicked");
    panelBarrackEl.classList.remove("open");
  }

  if (!isEngineeringBayNearBy && !isPanelEnBayNearBy) {
    roundedEnBay.classList.remove("clicked");
    panelEnBayEl.classList.remove("open");
  }

  if (!isUnitNearby) {
    selectedUnitEl.forEach((unit) => unit.classList.remove("selectedUnit"));
  }
});

panelMarineEl.addEventListener("click", () => {
  birthMarineSound.play();
});

panelMedicEl.addEventListener("click", () => {
  birthMedicSound.play();
});

panelFirebatEl.addEventListener("click", () => {
  birthFirebatSound.play();
});

panelUpgradeAttackEl.addEventListener("click", () => {
  upgradeSound.play();
});

panelUpgradeDefenceEl.addEventListener("click", () => {
  upgradeSound.play();
});

panelUpgradestimPackEl.addEventListener("click", () => {
  upgradeSound.play();
});

const attackEl = document.querySelector(".attackInfo .info");

const attackInfo = window.localStorage.getItem("attack");

attackEl.textContent = attackInfo;

const defenceEl = document.querySelector(".defenceInfo .info");

const defenceInfo = window.localStorage.getItem("defence");

defenceEl.textContent = defenceInfo;
