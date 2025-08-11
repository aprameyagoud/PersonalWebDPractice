
var pl1=Math.floor(Math.random()*6)+1;
var pl2=Math.floor(Math.random()*6)+1;
var dimg1="images/dice"+pl1+".png";
var dimg2="images/dice"+pl2+".png";
document.querySelectorAll("img")[0].setAttribute("src", dimg1);
document.querySelectorAll("img")[1].setAttribute("src", dimg2);

if (pl1 > pl2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (pl2 > pl1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}