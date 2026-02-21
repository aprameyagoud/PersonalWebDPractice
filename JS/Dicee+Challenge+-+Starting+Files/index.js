var randomVariable1=Math.floor((Math.random()*6)+1);
var randomVariable2=Math.floor((Math.random()*6)+1);

var randomImageSource1= "images/dice"+ randomVariable1+".png";
var randomImageSource2= "images/dice"+ randomVariable2+".png";

document.querySelector(".img1").setAttribute("src",randomImageSource1);
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(randomVariable2>randomVariable1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}

