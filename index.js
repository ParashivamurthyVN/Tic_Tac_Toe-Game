let PlayerO =true;
let boxes=document.querySelectorAll(".box");
let message=document.querySelector(".winnerMessage");
let restartbtn=document.querySelector(".restartbtn");
let title=document.querySelector(".title");

const winningpattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
];

const disableBoxes=()=>{
for (let box of boxes){
box.disabled=true;
}};

const winner =(winner)=>{
    message.innerText= `Winner is Player ${winner}`;
    title.classList.add("hide")
    message.classList.remove("hide");

    disableBoxes();
};


const checkdraw=()=>{
  let Ecount = 0;
for (let box of boxes){
let text =box.innerText
if(text==""){
  Ecount++;
}}
console.log(Ecount);
if(Ecount==0){
  message.innerText= `It's A Draw!`;
  title.classList.add("hide")
  message.classList.remove("hide");
}
};

const checkWinner=()=>{
for(let pattern of winningpattern){
    console.log(boxes[pattern[0]].innerText);
let pos1 =boxes[pattern[0]].innerText;
let pos2 =boxes[pattern[1]].innerText;
let pos3 =boxes[pattern[2]].innerText;
if(pos1!="" && pos2!="" && pos3!=""){
if(pos1==pos2 && pos2==pos3){
  winner(pos1)
}}}
};

boxes.forEach((box) => {
box.addEventListener("click", ()=>{
  if(PlayerO){
 box.innerText="O"
 PlayerO=false;
 box.classList.add("colorO");
  }
  else {
    box.innerText="X"
    PlayerO =true;
    box.classList.add("colorX");
  }
  box.disabled = true;
  checkWinner();
  checkdraw();
});
});

restartbtn.addEventListener("click", ()=>{
location.reload();
});