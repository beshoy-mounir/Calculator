let num1, num2, result, operation;
const screen = document.getElementById("disply");

alert("To Erase one Number Click on Disply");

function addnum(number) {
    screen.value += number;
}
function dot() {
    if (screen.value.includes(".")) {
        return;
    } else screen.value += ".";
}
function del() {
    let arr = screen.value.split("");
    arr.pop();
    screen.value = arr.join("");
}

function opSign() {
    screen.value = screen.value * -1;
}

function percentage() {
    screen.value = screen.value / 100;
}

function clearAll() {
    disply.value = "";
    num1 = num2 = 0;
}

function plus() {
    num1 = document.getElementById("disply").value;
    console.log(`Number 1 = ${num1}`);
    disply.value = "";
    operation = 1;
}

function sub() {
    num1 = document.getElementById("disply").value;
    console.log(`Number 1 = ${num1}`);
    disply.value = "";
    operation = 2;
}

function dev() {
    num1 = document.getElementById("disply").value;
    console.log(`Number 1 = ${num1}`);
    disply.value = "";
    operation = 3;
}

function mult() {
    num1 = document.getElementById("disply").value;
    console.log(`Number 1 = ${num1}`);
    disply.value = "";
    operation = 4;
}

function equal() {
    num2 = document.getElementById("disply").value;
    console.log(`Number 2 = ${num2}`);
    if (operation == "1") {
        result = Number(num1) + Number(num2);
        disply.value = result;
    } else if (operation == "2") {
        result = Number(num1) - Number(num2);
        disply.value = result;
    } else if (operation == "3") {
        result = Number(num1) / Number(num2);
        disply.value = result;
    } else if (operation == "4") {
        result = Number(num1) * Number(num2);
        disply.value = result;
    }
}
