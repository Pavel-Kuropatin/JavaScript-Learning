const resultText = "Result = ";

function clearResult() {
    document.getElementById("result").innerHTML = resultText;
}

function sum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = resultText + result.toString();
}

function difference() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = resultText + result.toString();
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = resultText + result.toString();
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById("result").innerHTML = resultText + result.toString();
    } else {
        document.getElementById("result").innerHTML = resultText + "Error!";
    }
}

function getSome() {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            someFunction(this.responseText);
        }
    }

    xmlHttp.open("GET", "https://example.com", true)
}

function someFunction(data) {
    console.log(data);
}