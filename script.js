document.getElementById("recupererButton").addEventListener("click", function() {
    var texte = document.getElementById("textInput").value;
    document.getElementById("textRecupere").innerText = texte;
    document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
