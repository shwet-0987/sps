let UserScore = 0;
let CompScore = 0;

const choices=document.querySelectorAll(".choice");
// console.log(choices);
const gen_comp_choice=()=>{
    const options=["rock","paper","scissor"];
    const ind=Math.floor(Math.random()*3);
    return options[ind];
};
const msg=document.getElementById("msg");
const showWinner=(user_win,user_choice,comp_choice)=>{
    if(user_win){
        UserScore++;
        document.getElementById("user_score").innerText=UserScore;
        msg.innerText=`you won ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }else{
        CompScore++;
        document.getElementById("comp_score").innerText=CompScore;
        msg.innerText=`you lose ${comp_choice} beats ${user_choice}`;
        msg.style.backgroundColor="red";
    }
}
const draw=(msg)=>{
    msg.innerText="play again , both were same";
    msg.style.backgroundColor="black";
};

const playgame=(user_choice)=>{
    console.log("user's choice "+user_choice);
    const comp_choice=gen_comp_choice();
    console.log("comp's choice "+comp_choice);
    
    if(user_choice===comp_choice){
        draw(msg);
    }
    else{
        let use_win = true;
        if(user_choice==="rock"){
            //scissor,paper
            user_win=comp_choice==="paper" ? false : true;
        }else if(user_choice==="paper"){
            //rock,scissor
            user_win=comp_choice==="scissor" ? false : true;
        }else{
            user_win=comp_choice==="rock"? false :true;
        }
        showWinner(user_win,user_choice,comp_choice);

    }
    
   
};
choices.forEach((choice)=>{
    console.log(choice); 
    choice.addEventListener("click",()=>{
        user_choice=choice.getAttribute("id");
        // console.log("it is clicked "+user_choice)
        playgame(user_choice);
    });
   
}
)
