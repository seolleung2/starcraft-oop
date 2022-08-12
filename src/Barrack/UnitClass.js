if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  // eslint-disable-next-line no-unused-vars
  var { document } = new JSDOM("").window;
}

class UnitClass {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = this.createUnit();
    this.step();
    this.setPosition(top, left);
  }

  createUnit() {
    let unitEl = document.createElement("span");
    unitEl.className = "terranUnits";
    let unitImg = document.createElement("img");
    unitImg.src = "";
    unitImg.width = 40;
    // unitImg.className = "imposter";
    unitEl.appendChild(unitImg);
    return unitEl;
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  render(target) {
    target.appendChild(this.$node);
  }

  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }
}

if (typeof window === "undefined") {
  module.exports = UnitClass;
}
