document.getElementById("yes-btn").onclick = function() {

    document.getElementById("first-page").style.display = "none";

    document.getElementById("success").style.display = "block";
};

let noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function() {

    let x = Math.random() * 250;
    let y = Math.random() * 250;

    noBtn.style.position = "relative";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});