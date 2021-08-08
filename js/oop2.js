let pilihanPlayer = document.querySelectorAll("#players div");
let pilihanComp = document.querySelectorAll("#computers div");
let vs = document.getElementById("textVS");
let divHasil = document.getElementById("divHasil");
let textHasil = document.getElementById("textHasil");
let btnReset = document.getElementById("refresh");

class Game {
  constructor(isStart, valueUser, valueComp) {
    this.isStart = isStart;
    this.valueUser = valueUser;
    this.valueComp = valueComp;
    this.result = "";
  }

  gameStart() {
    this.isStart = true;
    this.pilihanUser();
  }

  randomValue() {
    return Math.floor(Math.random() * 3);
  }

  pilihanUser() {
    pilihanPlayer.forEach((player, index) => {
      player.addEventListener("click", () => {
        this.valueUser = index;
        this.valueComp = this.randomValue();

        this.stylingUserComp();

        this.checkHasil(this.valueUser, this.valueComp);

        this.stylingResult();
        this.reset();
      });
    });
  }

  stylingUserComp() {
    pilihanPlayer[this.valueUser].classList.add("bg-abu-abu");
    pilihanComp[this.valueComp].classList.add("bg-abu-abu");
  }

  checkHasil(valueUser, valueComp) {
    let result = "";
    if (valueUser === valueComp) {
      result = "imbang";
    } else {
      if (valueUser === 0) {
        result = valueComp === 1 ? "kalah" : "menang";
      } else if (valueUser === 1) {
        result = valueComp === 2 ? "kalah" : "menang";
      } else if (valueUser === 2) {
        result = valueComp === 0 ? "kalah" : "menang";
      }
    }

    this.result = result;
  }

  stylingResult() {
    if (this.result === "imbang") {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-hijau-tua");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "Draw";
    } else if (this.result === "menang") {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-hijau-muda");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "User Wins";
    } else {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-hijau-muda");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "User Lose";
    }
  }

  reset() {
    btnReset.addEventListener("click", () => {
      vs.classList.remove("hidden");
      divHasil.classList.add("hidden");
      pilihanPlayer[this.valueUser].classList.remove("bg-abu-abu");
      pilihanComp[this.valueComp].classList.remove("bg-abu-abu");
      this.valueComp = this.randomValue();
    });
  }
}

let game = new Game(false, 0, 0);
game.gameStart();
