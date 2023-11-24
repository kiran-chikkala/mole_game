let currMoleTile;
let planttile;
let score = 0;
let gameover = false;
window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", setScore);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(getMow, 1000);
  setInterval(getPlant, 2000);
}
function getrandomNumber() {
  const num = Math.floor(Math.random() * 9);
  return num.toString();
}
function getMow() {
  if (currMoleTile) {
    currMoleTile.innerHTML = " ";
  }

  const mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  const num = getrandomNumber();
  if (planttile && planttile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);

  currMoleTile.appendChild(mole);
}
function getPlant() {
  if (planttile) {
    planttile.innerHTML = "";
  }

  const plant = document.createElement("img");
  plant.src = "./piranha-plant.png";
  const num = getrandomNumber();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  planttile = document.getElementById(num);
  planttile.appendChild(plant);
}
function setScore() {
  if (gameover) {
    return;
  }
  if (this === currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this === planttile) {
    document.getElementById("score").innerHTML =
      "GAME OVER " + score.toString();
    gameover = true;
  }
}
