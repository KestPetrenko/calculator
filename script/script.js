

    let element;
    let result;

    function Clean() {
        element = document.getElementById("imputWindow");
        element.value = "";
    }

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
});
    
