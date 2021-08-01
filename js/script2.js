/*
LOGIKA GAME 
1. deklarasi var player ngambil dari dom queryselectorAll
2. deklarasi var komputer ngambil dari Math.floor(Math.random() * 3)
3. menentukan pilihan komputer gunting/batu/kertas (diambil dari mathRandom)
4. menentukan pilihan player gunting/batu/kertas (diambil dari dom queryselectorAll)
5. membandingkan pilhan komputer dan player dengan diberi kondisi if else
6. menampilkan hasil dari pilihan player vs komputer
7. reset
  7.1. mathrandom di panggil kembali (pilihan komputer) 
  7.2. menghapus background (pilihan komputer) 
  7.3. menghapus background (pilihan player)
  7.4. mengembalikan tampilan hasil ke VS (tampilan awal)
  7.5. gambar image rotate
*/

//tampungan hasil, index untuk player ketika di click, index textResult
let hasil;
let indexPlayer;
let indexTextResult;

//step 1
let players = document.querySelectorAll("#players div");

//step 2
let computer = document.querySelectorAll("#computer div");

// step 3
let randomNumber = Math.floor(Math.random() * 3);

// step 4
players.forEach((player, i) => {
  player.addEventListener("click", () => {
    // console.log(player.getAttribute("class"));
    indexPlayer = i;
    player.classList.add("bg-abu-abu");
    computer[randomNumber].classList.add("bg-abu-abu");

    let pilihan = "";
    //batu
    if (i === 0) {
      pilihan = "batu";
      checkHasil(i, randomNumber);
    } else if (i === 1) {
      pilihan = "kertas";
      checkHasil(i, randomNumber);
    } else {
      pilihan = "gunting";
      checkHasil(i, randomNumber);
    }

    tampilPesan(hasil);

    console.log("player", pilihan);
    console.log("computer", randomNumber);
  });
});

//step 5
function checkHasil(player, comp) {
  let result = "";

  //imbang
  if (player === comp) {
    result = "imbang";
  }

  //jika tidak imbang
  else {
    //jika pilihan batu
    if (player === 0) {
      result = comp === 1 ? "kalah" : "menang";
    }

    //jika pilihan kertas
    else if (player === 1) {
      result = comp === 2 ? "kalah" : "menang";
    }

    //jika pilihan gunting
    else if (player === 2) {
      result = comp === 0 ? "kalah" : "menang";
    }
  }

  //   alert(hasil);
  hasil = result;
  console.log("hasil", hasil);
}

//step 6
let textResult = document.querySelectorAll("#text-result div");
function tampilPesan(hasil) {
  textResult.forEach((result, i) => {
    if (result.classList.contains(hasil)) {
      indexTextResult = i;
      textResult[0].classList.add("hidden");
      result.classList.remove("hidden");
    }
  });
}

//step 7
const btnReset = document.querySelector(".refresh");
const imgReset = btnReset.querySelector("img");

btnReset.addEventListener("click", () => {
  // 7.1
  randomNumber = Math.floor(Math.random() * 3);

  // 7.2
  computer.forEach((comp) => {
    comp.classList.remove("bg-abu-abu");
  });

  // 7.3
  players[indexPlayer].classList.remove("bg-abu-abu");

  // 7.4
  textResult[0].classList.remove("hidden");
  textResult[indexTextResult].classList.add("hidden");

  // 7.5
  imgReset.classList.add("transform");
  imgReset.classList.add("transition");
  imgReset.classList.add("duration-100");

  if (imgReset.classList.contains("rotate-180")) {
    imgReset.classList.remove("rotate-180");
  } else {
    imgReset.classList.add("rotate-180");
  }
});
