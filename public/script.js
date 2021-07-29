//aturan
let pilihanCom = document.querySelectorAll("#com-result div");
let textResult = document.querySelectorAll("#text-result div");

// function checkHasil(item) {
//   textResult.forEach((kelas) => {
//     // console.log("kelas", kelas.getAttribute("class"));
//     let kelass = kelas.getAttribute("class");
//     for (let i = 0; i < kelass.length; i++) {
//       console.log(kelass[i].split(""));
//     }
//   });
// }

//player
let fungsiAmbilValue = (player) => player.getAttribute("value");

const playersInput = document.querySelectorAll("#players-input div");

for (let i = 0; i < playersInput.length; i++) {
  playersInput[i].addEventListener("click", () => {
    pilihanCom[randomNumber].classList.add("bg-abu-abu");
    playersInput[i].classList.add("bg-abu-abu");

    let result = "";
    //jika imbang
    if (i == randomNumber) {
      result = "imbang";
      console.log("imbang");
      checkHasil(result);

      //   jika tidak imbang
    } else {
      // jika player batu
      if (i === 0) {
        result = randomNumber == 1 ? "kalah" : "menang";
        console.log(result);
        checkHasil(result);

        // jika player kertas
      } else if (i === 1) {
        result = randomNumber == 2 ? "kalah" : "menang";
        console.log(result);
        checkHasil(result);

        // jika player gunting
      } else if (i === 2) {
        result = randomNumber == 0 ? "kalah" : "menang";
        console.log(result);
        checkHasil(result);
      }
    }
  });
}

//com
let randomNumber = Math.floor(Math.random() * 3);

let cetak;
if (randomNumber == 0) {
  cetak = "batu";
} else if (randomNumber == 1) {
  cetak = "kertas";
} else {
  cetak = "gunting";
}
console.log(cetak);

//refresh
const refresh = document.querySelector(".refresh");
const refreshImg = document.querySelector(".refresh img");

refresh.addEventListener("click", () => {
  refreshImg.classList.add("transform");
  refreshImg.classList.add("transition");
  refreshImg.classList.add("duration-100");
  randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  let cetak;
  if (randomNumber == 0) {
    cetak = "batu";
  } else if (randomNumber == 1) {
    cetak = "kertas";
  } else {
    cetak = "gunting";
  }
  console.log(cetak);

  if (refreshImg.classList.contains("rotate-180")) {
    refreshImg.classList.remove("rotate-180");
  } else {
    refreshImg.classList.add("rotate-180");
  }
});
