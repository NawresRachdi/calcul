// calcul.js
//npm test -- --config package.json
function display(output, num) {
    output.value += num;
}

function Clear(output) {
    output.value = "";
}

function calc(output) {
    try {
        output.value = eval(output.value);
    } catch (err) {
        output.value = "error";
    }
}

module.exports = { display, Clear, calc };
