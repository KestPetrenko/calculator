let container = document.querySelector(".container")

let pageColor = localStorage.getItem("color");

    let element;
    let result;
if (pageColor) {
    container.style.backgroundColor = pageColor;
    document.querySelector(`input[value='${pageColor}']`).checked = true;
}

    function Clean() {
        element = document.getElementById("imputWindow");
        element.value = "";
    }
document.querySelector("#saveButton").addEventListener("click", function () {
    const form = document.forms[0];
    let selectedColor = form.color.value;

    function Take(symbol) {
        element = document.getElementById("imputWindow");
        element.value += symbol;
    }

    function Result() {
        element = document.getElementById("imputWindow");
        result = eval(element.value);
        Clean();
        element = document.getElementById("imputWindow");
        element.value = result;
    }

    function Delete() {
        element = document.getElementById("imputWindow");
        let exp = element.value;
        let end = exp.length - 1;
        exp = element.value.slice(0, end);
        element.value = exp;
    }

document.addEventListener("keydown", (e) => {
    if (e.key === 'Backspace');
    Delete()
});

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter');
    Result();
    localStorage.setItem("color", selectedColor);
    container.style.backgroundColor = selectedColor;
});

let pageColor = localStorage.getItem("color");

if (pageColor) {
    container.style.backgroundColor = pageColor;
    document.querySelector(`input[value='${pageColor}']`).checked = true;
}

document.querySelector("#saveButton").addEventListener("click", function () {
    const form = document.forms[0];
    let selectedColor = form.color.value;

    localStorage.setItem("color", selectedColor);
    container.style.backgroundColor = selectedColor;
});
