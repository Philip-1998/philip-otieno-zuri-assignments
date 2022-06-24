firstNumber = parseInt(prompt("input a  number"));
operation = prompt(`Enter an operation \n ${firstNumber}`);
secondNumber = parseInt(prompt(`Enter a second number \n ${firstNumber} ${operation}`));

let answer;

switch(operation){
    case "+":
        answer = firstNumber + secondNumber;
        break;
    case "-":
        answer = firstNumber - secondNumber;
        break;

    case "/":
        answer = firstNumber / secondNumber;
        break;

    case "*":
        answer = firstNumber * secondNumber;
        break;

    default:
        alert("that is not an operation i will do")

}
if (operation == "+" || operation == "-" || operation == "*" || operation == "/") {
    solution = alert(
      `${firstNumber} ${operation} ${secondNumber}  = ${answer}`
    );
}
