import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    
  }

  addBananas() {
    let monkeyBanana = this.emojis.map((monkey) => monkey + this.banana);
    // console.log(monkeyBanana);
    monkeyBanana.forEach((emoji) => {
      let div = document.getElementById("emojis");
      let para = document.createElement("p");
      para.textContent = monkeyBanana;
      div.appendChild(para);
      // return monkeyBanana;
    });
  }
}
