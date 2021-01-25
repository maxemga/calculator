let inputView = document.getElementById("input1").value;
let inputResult = document.getElementById("input2").value;

let result = document.getElementById("result");

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


