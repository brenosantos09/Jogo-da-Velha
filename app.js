"use strict";

const cells = document.querySelectorAll(".game-cell");
const gameResult = document.querySelector("#result");
const gameButtonReset = document.querySelector("#btn-reset");
const gameMessage = document.querySelector("#game-message");

const winPossibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = "x";

cells.forEach((cell) => cell.addEventListener("click", updateCell));

function updateCell() {
  const cellClicked = event.target;
  if (cellClicked.textContent === "") {
    cellClicked.textContent = currentPlayer;

    if (currentPlayer === "x") {
      currentPlayer = "o";
    } else {
      currentPlayer = "x";
    }
    checkWinner();
  }
}

function checkWinner() {
  for (let i = 0; i < winPossibilities.length; i++) {
    const possibilities = winPossibilities[i];
    const a = possibilities[0];
    const b = possibilities[1];
    const c = possibilities[2];

    const cellA = cells[a].textContent;
    const cellB = cells[b].textContent;
    const cellC = cells[c].textContent;

    if (cellA !== "" && cellA === cellB && cellA === cellC) {
      gameMessage.textContent = `${cellA} é o vencedor`;
    }
  }
}
