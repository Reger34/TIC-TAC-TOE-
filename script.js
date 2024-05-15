let newbox=document.querySelectorAll(".box");
let newreset=document.querySelector(".reset");
let winmsage=document.querySelector(".winmsg");
let newgamebutt=document.querySelector(".newgamebu");
let trunx=true;

const winner_pro=[ //this are the 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function checkwinner(){
  for( let postion of winner_pro) {
    let [a,b,c]=postion
    
     let val1= newbox[a].innerText;
     let val2= newbox[b].innerText;
     let val3= newbox[c].innerText;
     

     if(val1 != "" && val2 != "" && val3 !=""){
      if(val1 ===val2 && val2 === val3 ){
        showwinner(val1);
        return;
        
      }
     }

  }
}
      let  resetgame = () => {
           trunx=true;
           enablebox();
        winmsage.classList.add("hide")  
      }
     function disablebox () {
      for(let box of newbox ){
        box.disabled=true;
      }
     }

     function enablebox() {
      for (let box of newbox) {
          box.innerText = "";
          box.disabled = false;
      }
      winmsage.classList.add("hide");
  }

function showwinner (winner) {
  msg.innerText="Congratulations! Player "+winner+" you are the winner!";
  winmsage.classList.remove("hide");
  disablebox();

}
 

newbox.forEach((box) => { //acessing each box 
   box.addEventListener("click", () => {  //adding event lisner to all box
   

    if(trunx){         //use for whoes turn will be played
      box.innerText="X";
      trunx= false;
    }
    else{
      box.innerText="O";
      trunx= true;
    }
    box.disabled=true; //after adding element on any box the button should be  disabled

    checkwinner();
   
    
  })
});

newreset.addEventListener("click",resetgame);
newgamebutt.addEventListener("click",resetgame);


    
          