let inputView = document.getElementById("input1").value;
let inputResult = document.getElementById("input2").value;

let result = document.getElementById("result");

let previewText = document.getElementById("text");
let overlayLeft = document.getElementById("OverlayLeft");
let overlayRight = document.getElementById("OverlayRight");

// window.onload = function() {
//     previewText.classList.toggle("previewTextActive");
// }

window.addEventListener("load", ShowText);

previewText.addEventListener("click", CloseText)
    


function ShowText() {
    previewText.classList.toggle("previewTextActive");  
}
function CloseText() {
    previewText.classList.remove("previewTextActive");
    setTimeout(CloseOverlay, 800);
}
function CloseOverlay() {
    overlayLeft.classList.add("blockOverlayLeftActive");
    overlayRight.classList.add("blockOverlayRightActive");
}




// Calculator
function GetButton(num) {
    document.getElementById("input1").value  =  
    document.getElementById("input1").value + num;
}

function ClearText() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

function GetResult() {
    let result = document.getElementById("input1").value;
    if(result)
    {
        document.getElementById("input2").value = eval(result);
        
    }
}


