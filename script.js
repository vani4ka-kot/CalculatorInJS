let result;
function Result() {
    let num1 = +document.getElementById("operand1").value;
    let num2 = +document.getElementById("operand2").value;
    let op = document.querySelector('#operations').value;

    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            (num2 == 0) ? result = `Error: division on zero! <br> ${num1}/${num2} = infinity` : result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML = result;
}