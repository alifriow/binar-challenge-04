let players = document.querySelectorAll("#players div");
let computer = document.querySelectorAll("#computer div");
let textResult = document.querySelectorAll("#text-result div");
let btnReset = document.querySelector(".refresh");
let imgReset = btnReset.querySelector("img");
let randomNumber = Math.floor(Math.random() * 3);

class Game {
  constructor(user, com) {
    this.user = user;
    this.com = com;
  }

  checkHasil() {
    let result = "";
    if (this.user === this.com) {
      result = "imbang";
    } else {
      if (this.user === 0) {
        result = this.com === 1 ? "kalah" : "menang";
      } else if (this.user === 1) {
        result = this.com === 2 ? "kalah" : "menang";
      } else if (this.user === 2) {
        result = this.com === 0 ? "kalah" : "menang";
      }
    }

    return result;
  }

  tampilPesan() {
    let pesan = this.checkHasil();
    textResult.forEach((result, i) => {
      if (result.classList.contains(pesan)) {
        textResult[0].classList.add("hidden");
        result.classList.remove("hidden");
      }
    });
  }

  reset() {
    randomNumber = Math.floor(Math.random() * 3);

    computer.forEach((comp) => {
      comp.classList.remove("bg-abu-abu");
    });

    players[this.user].classList.remove("bg-abu-abu");

    textResult.forEach((result) => {
      result.classList.add("hidden");
    });
    textResult[0].classList.remove("hidden");

    imgReset.classList.add("transform");
    imgReset.classList.add("transition");
    imgReset.classList.add("duration-100");

    if (imgReset.classList.contains("rotate-180")) {
      imgReset.classList.remove("rotate-180");
    } else {
      imgReset.classList.add("rotate-180");
    }
  }
}

let game;
let action = true;

players.forEach((player, i) => {
  player.addEventListener("click", () => {
    if (action) {
      game = new Game(i, randomNumber);
      game.tampilPesan();
      player.classList.add("bg-abu-abu");
      computer[game.com].classList.add("bg-abu-abu");
      action = false;
    } else {
      alert("jancok");
    }
  });
});

btnReset.addEventListener("click", () => {
  game.reset();
  action = true;
});
