/* global UnitClass */

if (typeof window === "undefined") {
  global.UnitClass = require("./UnitClass");
}

class BarrackClass extends UnitClass {
  step() {
    super.step();
  }
}

class MarineClass extends BarrackClass {
  createUnit() {
    const unitElement = super.createUnit();
    unitElement.children[0].className = "terranMarine";

    unitElement.children[0].src =
      "https://w.namu.la/s/b51ad78e618e24624593dfeeb1c8df49f1e2b4a95e81d114a3fb8fbc53ee6a35dfc74f1e547606fc7903824989485acc6d1c2fc849aac04b630e8877bb437b296ef556d449809202e41f223942a4a5b1ac945958c824d6ea4416a33e9fb8b3fa";

    return unitElement;
  }
}

class FirebatClass extends UnitClass {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }

  createUnit() {
    const unitElement = super.createUnit();
    unitElement.children[0].className = "terranFirebat";

    unitElement.children[0].src =
      "https://w.namu.la/s/cb706d6febdc41154ead978a6cc29a245f6663f85eeaf984f5c939ea3f45737b6192d8392c45849814476a10ac1f9db77dd517e515710d76222a198bb102bec1b89d5098f5f9d92ca8fa274895c3a77228bc3c38b0c99dd0474d8d5ff891a09a";

    return unitElement;
  }
}

class MedicClass extends UnitClass {
  createUnit() {
    const unitElement = super.createUnit();
    unitElement.children[0].className = "terranMedic";

    unitElement.children[0].src =
      "https://w.namu.la/s/93669a2a45866f4a0c538b8e38433a757ff989834c59722c80b61eeed11badddfe8ebb6b153c9fa640b958dcdb276dfdab3aa5af24ea6146d7cc2a987f6f336495ddfac6452901755e8e4654c0330f6f3ef1974172ebe27904f52515c046adfa";

    return unitElement;
  }
}

if (typeof window === "undefined") {
  module.exports = { BarrackClass, MarineClass, FirebatClass, MedicClass };
}
