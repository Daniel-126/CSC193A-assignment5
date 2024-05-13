// Function to show alert and change font size
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

// Function to apply or remove styles based on the radio button selection
function styleText() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform the text in the text area
function mooFunction() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textArea.value = sentences.join(". ").toUpperCase();
}

// Add event listeners when the window loads
window.onload = function() {
    document.getElementById("biggerBtn").onclick = makeTextBigger;
    document.getElementById("fancy").onchange = styleText;
    document.getElementById("boring").onchange = styleText;
    document.getElementById("mooBtn").onclick = mooFunction;
}
