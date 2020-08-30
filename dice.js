var img = document.getElementsByTagName("img")[0];




let random = Math.floor(Math.random() * 6);

random++;
console.log(random);
if(random==1){
    img.setAttribute("src","images/dice1.png");
}else if(random==2){
    img.setAttribute("src","images/dice2.png");
}else if(random==3){
    img.setAttribute("src","images/dice3.png");
}else if(random==4){
    img.setAttribute("src","images/dice4.png");
}else if(random==5){
    img.setAttribute("src","images/dice5.png");
}else if(random==6){
    img.setAttribute("src","images/dice6.png");
}

var img1= document.getElementsByTagName("img")[1];
let random1 = Math.floor(Math.random() * 6);

random1++;
console.log(random1);
if(random1==1){
    img1.setAttribute("src","images/dice1.png");
}else if(random1==2){
    img1.setAttribute("src","images/dice2.png");
}else if(random1==3){
    img1.setAttribute("src","images/dice3.png");
}else if(random1==4){
    img1.setAttribute("src","images/dice4.png");
}else if(random1==5){
    img1.setAttribute("src","images/dice5.png");
}else if(random1==6){
    img1.setAttribute("src","images/dice6.png");
}

var player=document.querySelector(".p");

if(random>random1){
    
player.innerHTML="player-1 WINS!";
}else if(random==random1){
    player.innerHTML="PLAY AGAIN BRO";
}else{
    player.innerHTML="player-2 WINS!";
}