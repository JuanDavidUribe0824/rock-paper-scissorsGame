const sectionBattle = document.getElementById('battle-field');
const msjBattle = document.getElementById('msj-battle');
const imgAttackPlayer  = document.getElementById('img-attack-player');
const imgAttackPc = document.getElementById('img-attack-pc');
const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissor = document.getElementById('btn-scissor');

let optionPlayer;
let opcionPc;
let imgPlayer;
let imgPc;


const images = [
    {
        name: "Rock",
        url: "assets/rock.png" 
    },
    {
        name: "Paper",
        url: "assets/paper.png" 
    },
    {
        name: "Scissor",
        url: "assets/scissor.png" 
    }
];



function start(){
    sectionBattle.style.display = 'none';
};

btnRock.addEventListener('click', function(){
    optionPlayer = "Rock";
    opPc();
});

btnPaper.addEventListener('click', function(){
    optionPlayer = "Paper";
    opPc();
});

btnScissor.addEventListener('click', function(){
    optionPlayer = "Scissor";
    opPc();
})


function opPc(){
    let randomized = nAleatory();

    if(randomized == 0){
        opcionPc = "Rock";
    }else if(randomized == 1){
        opcionPc = "Paper";
    }else if(randomized == 2){
        opcionPc = "Scissor"
    };

    battle();

};

function battle(){
    if(optionPlayer == opcionPc){
        msjBattle.innerHTML = "Tie";
    }else if(optionPlayer == "Rock" && opcionPc == "Scissor"){
        msjBattle.innerHTML = "!You Won!";
    }else if(optionPlayer == "Paper" && opcionPc == "Rock"){
        msjBattle.innerHTML = "!You Won!";
    }else if(optionPlayer == "Scissor" && opcionPc == "Paper"){
        msjBattle.innerHTML = "!You Won!";
    }else{
        msjBattle.innerHTML = "): You lost :(";
    };

    addimages();

}


function nAleatory(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addimages(){
    for(let i=0;i<images.length;i++){
        if(optionPlayer == images[i].name){
            imgPlayer = images[i].url;
            let insert = `<img class="img-battle" src=${imgPlayer} alt="">`;
            imgAttackPlayer .innerHTML = insert;
        };
        
        if(opcionPc == images[i].name){
            imgPc = images[i].url;
            let insert = `<img class="img-battle" src=${imgPc} alt="">`;
            imgAttackPc.innerHTML = insert;
        };
        
    };


    sectionBattle.style.display = 'flex';
    
};


window.addEventListener('load', start);