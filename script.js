document.getElementById("recupererButton").addEventListener("click", function() {
    displayNextLine();
});

document.getElementById("textInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // key code 13 = entrée
        event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
        displayNextLine();
    }
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

function displayNextLine() {
    var texte = document.getElementById("textInput").value;
    var textLines = texte.split('\n');
    var lastLineIndex = parseInt(document.getElementById("textInput").getAttribute("data-last-line")) || 0;
    if (lastLineIndex < textLines.length) {
        var nextLine = textLines[lastLineIndex++];
        document.getElementById("textInput").setAttribute("data-last-line", lastLineIndex);
        document.getElementById("textRecupere").innerText += nextLine + "\n";
    } else {
        document.getElementById("myModal").style.display = "none";
    }
    document.getElementById("myModal").style.display = "block";
}
