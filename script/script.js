let container = document.querySelector(".container")

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
