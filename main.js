console.log('welcome');

let h=document.getElementById('hidee');
let hi=document.getElementById('hidding');

hi.addEventListener('click',()=>{
    if(h.style.left=="0px")
    {
       h.style.left="-100px";
    }
    else{
        h.style.left="0px";
    }
})
let r=document.getElementById('right');
let l=document.getElementById('left');
let change=document.getElementById('c');
let array=[{name:'sahil'},{name:'simone'},{name:'sanjay'},{name:'renu'}];
let index=0;

r.addEventListener('click',()=>{
    if(index>=3)
    {
        index=0;
    }
    else{
        index+=1;
    }
    change.innerText=array[index].name;
})

l.addEventListener('click',()=>{
    if(index<=0)
    {
        index=0;
    }
    else{
        index-=1;
    }
    change.innerText=array[index].name;
})

/*let day=prompt("choose the day from 0");
switch(day)
{
    case 0:
        Text='weekend';
        break;
        case 5:
            Text='weekend';
            break;
            case 6:
                Text='weekend';
                break;
                default:
                    Text='weekday';
                    break;    
}
console.log(Text);*/

//challange for printing the umber of days in the main html page with the help of javascript

function final(){
    let ageyear=prompt('What is birth year');
    let ageindays=(2021-ageyear)*365;
    let h1=document.createElement('h1');
    h1.setAttribute('id','years');
    let text=document.createTextNode('You are'+ '' +ageindays + '' +'days old');
    h1.appendChild(text);
    document.getElementById('ans').appendChild(h1);
}

function reset(){
  document.getElementById('years').remove();
}

//challange-2 generating cars without letting them cross the borders by using flex box and mainly flex-wrap:wrap; amd justify-content:space-around;

function generate(){
    let image=document.createElement('img');
    image.src='car.jpg';
    document.getElementById('generated').appendChild(image);
    image.setAttribute('id','cars');
}

function remove(){
    document.getElementById('cars').remove();
}
//challange 3 rock paper scissors game with computer

function rpsgame(yourchoice)
{
    //console.log(yourchoice.id);

    let humanchoice,computerchoice;
    humanchoice=yourchoice.id;
    computerchoice=randomarray(randomnumber());
    console.log("computerchoice",computerchoice);

    let result=gamewinner(humanchoice,computerchoice);
    console.log(result);

    let message=finalmessage(result);
    console.log('message',message);

    let final=rpsgamefinalresult(humanchoice,computerchoice,message);
    
}
 
function randomnumber(){
      return Math.floor(Math.random()*3); //here math.floor is used to round off the number from 0 to 2
}

function randomarray(number){
    return ["rock","paper","scissors"][number];
}

function gamewinner(yourchoice,compchoice){
        let rpsdatabase={
            "rock":{"scissors":1,"rock":0.5,"paper":0},
            "paper":{"rock":1,"paper":0.5,"scissors":0},
            "scissors":{"paper":1,"scissors":0.5,"rock":0}
        };
         
        var mychoice=rpsdatabase[yourchoice][compchoice];
        var botchoice=rpsdatabase[compchoice][yourchoice];
        return [mychoice,botchoice];
        
}

function finalmessage([mychoice]){
    if(mychoice==0){
        return {'message':'You Lost','color':'red'};
    }
    else if(mychoice==0.5){
        return {'message':'You tied','color':'yellow'};
    }
    else {
        return {'message':'You win','color':'green'};
    }
}

function rpsgamefinalresult(yourimagechoice,botimagechoice,message){
    let imagedatabase={     //creating the database holding the source of the images by their respective id's
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    };
    //removing all the images as soon as the function is called and appending the required images from human and botchoices
    document.getElementById("rock").remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    //creating elements that are to be appended inside game div
    let humandiv=document.createElement('div');
    let botdiv=document.createElement('div');
    let messagediv=document.createElement('div');
    let image=document.createElement('img');//creating element image containing image choice by human
    let imagebot=document.createElement('img');//creating element image containing image choice by bot
    
    //appending inside the humandiv
    image.src=imagedatabase[yourimagechoice];
    humandiv.appendChild(image);
    document.getElementById('game').appendChild(humandiv);
    document.getElementById('game').appendChild(messagediv); 
    //appending inside botdiv
    imagebot.src=imagedatabase[botimagechoice];
    botdiv.appendChild(imagebot);
    document.getElementById('game').appendChild(botdiv);
    
    //using style for humanimagechoice
    image.style.width="250px";
    image.style.height="200px";
    image.style.margin="10px";
    image.style.boxShadow="0px 10px 50px blue";
   
    //using style for botimagechoice
    imagebot.style.width="250px";
    imagebot.style.height="200px";
    imagebot.style.margin="10px";
    imagebot.style.boxShadow="0px 10px 50px green";

    let h2=document.createElement('h2');
     h2.innerText=message['message']
    h2.style.color=message['color'];
    h2.style.fontSize="70px";
    h2.style.padding="10px";
     messagediv.appendChild(h2);
}


//challange of playing cards game
let blackjack={
    'you':{'scorespan':'#playerscore','div':'#blackjack-player','score':0},
    'bot':{'scorespan':'#botscore','div':'#blackjack-bot','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','A','K','J','Q'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},//this object works woth key and that is card
     'wins':0,
     'losses':0,
     'ties':0,
}
let YOU=blackjack['you'];
let BOT=blackjack['bot'];

let hitsound=new Audio('blackjack_assets/sounds/swish.m4a');
let winsound=new Audio('blackjack_assets/sounds/cash.mp3');
let losssound=new Audio('blackjack_assets/sounds/aww.mp3');
document.querySelector('#blackjack-hit').addEventListener('click', Start);
document.querySelector('#blackjack-deal').addEventListener('click', deal);
document.querySelector('#blackjack-stand').addEventListener('click', stand);
function Start(){
        let card=randomcard();
        console.log(card);
        showcard(YOU,card);
        updatescore(YOU,card);
        showscore(YOU);
        document.querySelector('#blackjack-result').innerText='Play';
        document.querySelector('#blackjack-result').style.color='black';
       
}

function showcard(activeplayer,card){
    if(activeplayer['score']<=21){
       let image=document.createElement('img');
       image.src=`blackjack_assets/images/${card}.png`;
       image.style.height='150px';
       image.style.padding='15px';
       document.querySelector(activeplayer['div']).appendChild(image);
       hitsound.play();
    }
}

function randomcard(){
    let randomno=Math.floor(Math.random()*13);
    return blackjack['cards'][randomno];
}

function deal(){
  
     let yourimg=document.querySelector('#blackjack-player').querySelectorAll('img');
     console.log(yourimg);
     for(i=0;i<yourimg.length;i++){
         yourimg[i].remove();
     }

     let botimg=document.querySelector('#blackjack-bot').querySelectorAll('img');
     for(i=0;i<botimg.length;i++){
         botimg[i].remove();
     }
    YOU['score']=0;
    BOT['score']=0;
     document.querySelector('#playerscore').textContent= 0;
     document.querySelector('#playerscore').style.color="white";
     document.querySelector('#botscore').style.color="white";
     document.querySelector('#botscore').textContent=0;
   
      document.querySelector('#blackjack-result').innerText='Play';
      document.querySelector('#blackjack-result').style.color='black';
}

function updatescore(activeplayer,card){
    if(card=='A'){
        if(activeplayer['score']+=blackjack['cardMap'][card]<=21){
            activeplayer['score']+=blackjack['cardMap'][card][0];
        }
        else{
             activeplayer['score']+=blackjack['cardMap'][card][1];
        }
   
    }
     else{
         activeplayer['score']+=blackjack['cardMap'][card]
     } 
       
}
function showscore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent= 'BUSTED!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
    }
    else{
    document.querySelector(activeplayer['scorespan']).innerText= activeplayer['score'];
    }
}

function stand(){
    
    let bcard=randomcard();
        showcard(BOT,bcard);
        updatescore(BOT,bcard);
        showscore(BOT);
       if(BOT['score']>18){
           showwinner(computewinner());
       }
}
function computewinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>BOT['score']||BOT['score']>21){
            winner=YOU;
            blackjack['wins']++;
        }
        else if(YOU['score']<BOT['score']){
            winner=BOT;
            blackjack['losses']++;
        }
        else if(YOU['score']===BOT['score']){
            blackjack['ties']++;
        }
        else if(BOT['score']>YOU['score'] || YOU['score']>21){
            winner=BOT;
            blackjack['losses']++;
        }
        else if(BOT['score']>21 && YOU['score']>21){
            blackjack['ties']++;
        }
        console.log(winner);
        console.log(blackjack['wins']);
        console.log(blackjack['losses']);
        console.log(blackjack['ties']);
        return winner;
    }
    
}

function showwinner(winner){
    let message,messagecolor;
    if(winner==YOU){
        document.querySelector('#blackjack-win').innerText=blackjack['wins'];
        message='YOU WON!';
        messagecolor='green';
        winsound.play();
    }
    else if(winner==BOT){
        document.querySelector('#blackjack-loss').innerText=blackjack['losses'];
        message='YOU LOST!';
        messagecolor='red';
        losssound.play();
    }
    else{
        document.querySelector('#blackjack-tied').innerText=blackjack['ties'];
        message="YOU DREW!";
        messagecolor='black';
    }
    document.querySelector('#blackjack-result').innerText=message;
    document.querySelector('#blackjack-result').style.color=messagecolor;
}