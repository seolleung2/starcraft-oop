const barrackEl = document.querySelector(".barrack");
const engineeringEl = document.querySelector(".engineeringBay");
const roundedBarrack = document.querySelector(".brk");
const roundedEnBay = document.querySelector(".enb");

const barrackSound = document.querySelector("#barrackSound");
const enBaySound = document.querySelector("#enbSound");

barrackEl.addEventListener("click", () => {
  roundedBarrack.classList.add("clicked");
  barrackSound.play();
});

engineeringEl.addEventListener("click", () => {
  roundedEnBay.classList.add("clicked");
  enBaySound.play();
});

document.addEventListener("click", (event) => {
  const targetEl = event.target;
  const isBarrackNearby = targetEl.closest(".barrack");
  const isEngineeringBayNearBy = targetEl.closest(".engineeringBay");

  if (!isBarrackNearby) {
    roundedBarrack.classList.remove("clicked");
  }

  if (!isEngineeringBayNearBy) {
    roundedEnBay.classList.remove("clicked");
  }
});
