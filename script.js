let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turntext = document.querySelector(".turntext");

let turn0 = true;

const winPatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "o";
      turn0 = false;
      turntext.innerText = "turn of x";
    } else {
      box.innerText = "x";
      turn0 = true;
      turntext.innerText = "turn of o";
    }
    box.disabled = true;

    checkWinner();
  });
});

const shoWinner = (winner) => {
  msg.innerText = `Congratulations ,  Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const resetGame = () => {
  turn0 = true;
  anableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const anableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let patten of winPatten) {
    // console.log(patten[0],patten[1],patten[2]);
    // console.log(boxes[patten[0]].innerText,boxes[patten[1]].innerText,boxes[patten[2]].innerText);

    let pos1val = boxes[patten[0]].innerText;
    let pos2val = boxes[patten[1]].innerText;
    let pos3val = boxes[patten[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        shoWinner(pos1val);
        disableBoxes();
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
