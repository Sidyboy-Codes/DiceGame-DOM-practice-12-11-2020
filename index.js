var p1 = Math.floor((Math.random() * 6)) + 1;
var p2 = Math.floor((Math.random() * 6)) + 1;

if (p1 === p2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (p1 > p2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎉";
}

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+p1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+p2+".png");