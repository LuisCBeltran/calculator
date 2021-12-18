let toDisplay = []
let operand1
let operand2
let isOperatorOn = false
let operator


let pushNumber = function (number) {

    if (!isOperatorOn) {

        toDisplay.push(number)
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        document.getElementById('displayNums').innerHTML = stringToDisplay

        // Assign value to operand 1
        operand1 = parseInt(stringToDisplay)

        console.log(operand1, operand2)

    } else {

        toDisplay.push(number)
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        document.getElementById('displayNums').innerHTML = stringToDisplay

        // Assign value to operand 1
        operand2 = parseInt(stringToDisplay)

        console.log(operand1, operand2)
    }
}

let operation = function (num) {

    isOperatorOn = true

    toDisplay = []

    console.log(operand2, operand1)

    if (operand1 === undefined || operand2 === undefined) {


    } else if (num === 1) {

        // Addition
        let result = operand1 + operand2
        operand1 = result
        let stringResult = result.toString()
        document.getElementById('displayNums').innerHTML = stringResult

    } else if (num === 2) {

        //Substraction
        let result = operand1 - operand2
        operand1 = result
        console.log(operand1, operand2, result)
        let stringResult = result.toString()
        document.getElementById('displayNums').innerHTML = stringResult
    }

}