let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#reset-btn");
let NewGame = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turn0 = true;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetBtn = () => {
  count = 0;
  turn0 = true;
  enablebtns();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");

    if (turn0) {
      box.innerText = "O";
      box.style.color = "red";

      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";

      turn0 = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const disablebtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enablebtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congralutaions , Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebtns();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

Resetbtn.addEventListener("click", resetBtn);
NewGame.addEventListener("click", resetBtn);
