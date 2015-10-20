var currentPart;
var currentPartIndex = 0;
var faceParts = [];

function selectPart(partDiv) {
    clearPartLines();
    currentPart = partDiv;
    currentPart.style.border = "1px solid red";
    
    for (var i = 0; i < faceParts.length; i++) {
        if (faceParts[i].id == partDiv.id) {
            currentPartIndex = i;
            return;
        }
    }
}

function draw(letterDiv) {
    currentPart.innerHTML = letterDiv.innerHTML;
    clearPartLines();
    if (currentPartIndex < faceParts.length) {
        selectPart(faceParts[++currentPartIndex]);
    }
    return false;
}

window.onload = function() {
    //var faceParts = document.getElementById("face").childNodes;
    faceParts.push(document.getElementById("left-brow"));
    faceParts.push(document.getElementById("right-brow"));
    faceParts.push(document.getElementById("left-eye"));
    faceParts.push(document.getElementById("right-eye"));
    faceParts.push(document.getElementById("nose"));
    faceParts.push(document.getElementById("mouth"));
    selectPart(faceParts[currentPartIndex]);
}

function clearPartLines() {
    for (var i = 0; i < faceParts.length; i++) {
        faceParts[i].style.border = "1px solid transparent";
    }
}
var face = document.getElementById("face");
face.onclick = clearPartLines;
