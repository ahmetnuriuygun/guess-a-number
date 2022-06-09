function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let numberPc = getRandomIntInclusive(1,20)   


const guess=document.querySelector(".guess");
const buton=document.querySelector(".check");
const tip = document.querySelector(".msg");
const result = document.querySelector(".number");
const scorePrint = document.querySelector(".score");
let ses=document.querySelector(".ses");
let counter = 0;
let score = 10;

buton.onclick=()=>{
    while(counter<10){
        if(numberPc > guess.value){
            tip.innerHTML= `Nice try!Increase the number`;
            counter++;
            score--;
            scorePrint.innerHTML = score;
            break
        }else if(numberPc<guess.value){
            tip.innerHTML= `Nice try!Decrease the number`;
            counter++;
            score--;
            scorePrint.innerHTML = score;
            break
        }else if(numberPc == guess.value){
            tip.innerHTML= `Congrulations!You did it🥳`
            document.querySelector("body").style.backgroundColor= "green";
            result.innerHTML = `${numberPc}`;
            scorePrint.innerHTML = score;
            ses.play();
            ses.volume=0.2;
            startConfetti();
            break
        }
    }
} 


const again = document.querySelector(".again")

again.onclick=()=>{
    numberPc = getRandomIntInclusive(1,20) 
    document.querySelector("body").style.backgroundColor= "#2d3436";
    tip.innerHTML= `Starting...`;
    result.innerHTML = `?`;
    score = 10;
    scorePrint.innerHTML = score;
    guess.value="";
    
        
    
}

guess.onkeydown=(e)=>{

    if(e.keyCode===13)
    
    buton.onclick();
    
}

window.onload=()=>{
    guess.focus();
}

