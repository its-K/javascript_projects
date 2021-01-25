curplayer=0;

function changeplayer(){
    document.querySelector(`.player--${curplayer}`).classList.remove('player--active');
    document.querySelector(`#current--${curplayer}`).innerHTML=0;
    curplayercurscore=0;
    curplayer=curplayer==0?1:0;
    document.querySelector(`.player--${curplayer}`).classList.add('player--active');
}

function newgame(){
    document.querySelector(`#current--${curplayer}`).textContent=0;
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    scores=[0,0];
    document.querySelector('.dice').classList.add("hidden");
    document.querySelector(`.player--${curplayer}`).classList.remove("player--winner");
    curplayercurscore=0;
    gameover=0;
    curplayer=0;
}
newgame();
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gameover!=1){
    dicenum=Math.floor(Math.random() * 6)+1;
    img=document.querySelector('img');
    img.src=`dice-${dicenum}.png`;
    document.querySelector('.dice').classList.remove("hidden");
    if(dicenum==1){
        changeplayer();
    }
    else{
    curplayercurscore+=dicenum;
    document.querySelector(`#current--${curplayer}`).innerHTML=curplayercurscore;
    }
}
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gameover!=1){
    scores[curplayer]+=curplayercurscore;
    document.querySelector(`#score--${curplayer}`).innerHTML=scores[curplayer];
    if(scores[curplayer]>=100){
        document.querySelector(`.player--${curplayer}`).classList.add("player--winner");
        gameover=1;
    }
    else{
    changeplayer();
    }
}
});

document.querySelector('.btn--new').addEventListener('click',function(){
    newgame();
});
