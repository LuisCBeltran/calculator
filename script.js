let toDisplay = []
let operand1
let operand2
let operator = 0
let result 

// Operators: no operator = 0, + = 1, - = 2, * = 3, / = 4, 

// Write numbers on display
const pushNumber = function (number) {

    if (operator === 0 && result === undefined) {

        toDisplay.push(number)
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        document.getElementById('displayNums').innerHTML = stringToDisplay

        // Assign value to operand 1
        operand1 = parseFloat(stringToDisplay)

        operand2 = 0

        console.log(operand1, operand2)
        console.log(toDisplay)

    } else if (operator > 0 && operator < 5) {

        toDisplay.push(number)
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        document.getElementById('displayNums').innerHTML = stringToDisplay

        // Assign value to operand 1
        operand2 = parseFloat(stringToDisplay)

        result = undefined

        console.log(operand1, operand2)
    }
}


const operation = function (num) {

    // Reset display
    toDisplay = []
    console.log(operator)

    if (operand1 === undefined && operand2 === undefined) {

        operator = 0

    } else if (operator !== 0 && result === undefined) {

        savedOperation(operator)
        operator = num

    } else if (operator !== 0 && result !== undefined) {
        
        operator = num
 
    } else if (operator === 0) {

        operator = num

    }

    console.log(operator)
    console.log(result)

}

// Operations
let savedOperation = function (operator) {
    
    // Addition
    if (operator === 1) {

        result = operand1 + operand2
        let resultFixed = result.toFixed(5)
        let stringResult = resultFixed.toString()

        document.getElementById('displayNums').innerHTML = parseFloat(stringResult)

        operand1 = result

    // Substraction
    } else if (operator === 2) {

        result = operand1 - operand2
        let resultFixed = result.toFixed(5)
        let stringResult = resultFixed.toString()

        document.getElementById('displayNums').innerHTML = parseFloat(stringResult)

        operand1 = result
    
    // Multiplication
    } else if (operator === 3) {

        result = operand1 * operand2
        let resultFixed = result.toFixed(5)
        let stringResult = resultFixed.toString()

        document.getElementById('displayNums').innerHTML = parseFloat(stringResult)

        operand1 = result
    
    // Division
    } else if (operator === 4) {

        result = operand1 / operand2
        let resultFixed = result.toFixed(5)
        let stringResult = resultFixed.toString()

        document.getElementById('displayNums').innerHTML = parseFloat(stringResult)

        operand1 = result
    }
}

// Equals

const equals = function () {
    if (operator > 0 && operator < 5 && result === undefined) {
        savedOperation(operator)
        operator = 0
    }
}

// Change to postive or negative
const changeSign = function () {

    if (operator === 0 && result === undefined) {
        operand1 = operand1 * -1
        document.getElementById('displayNums').innerHTML = parseFloat(operand1)

    } else if (operator > 0 && operator < 5 && result === undefined) {
        operand2 = operand2 * -1
        document.getElementById('displayNums').innerHTML = parseFloat(operand2)
    }
}

// Delete
const deleteNum = function () {

    if (operator === 0 && result === undefined && toDisplay.length > 0) {
        toDisplay.pop()
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        if (toDisplay.length > 0) {
            document.getElementById('displayNums').innerHTML = stringToDisplay

            // Assign value to operand 1
            operand1 = parseFloat(stringToDisplay)

            operand2 = 0

        } else {

            document.getElementById('displayNums').innerHTML = 0
            operand1 = 0
            operand2 = 0
        }

        console.log(operand1, operand2)
        console.log(toDisplay)

    } else if (operator > 0 && operator < 5 && result === undefined && toDisplay.length > 0) {
        
        toDisplay.pop()
        let stringToDisplay = toDisplay.join('')

        // Render strings into display
        if (toDisplay.length > 0) {
            document.getElementById('displayNums').innerHTML = stringToDisplay

            // Assign value to operand 1
            operand2 = parseFloat(stringToDisplay)
    
            result = undefined

        } else {

            document.getElementById('displayNums').innerHTML = 0

            // Assign value to operand 1
            operand2 = 0
    
            result = undefined
        }

        console.log(operand1, operand2)
    }
}

// Reset AC
const reset = function () {
    toDisplay = []
    operand1 = undefined
    operand2 = undefined
    operator = 0
    result = undefined
    document.getElementById('displayNums').innerHTML = 0
}

//  Power
const power = function (exp) {
    if (operator === 0 && result === undefined && toDisplay.length > 0) {
        operand1 = Math.pow(operand1, exp)
        document.getElementById('displayNums').innerHTML = operand1.toFixed(5)

    } else if (operator !== 0 && result !== undefined) {
        result = Math.pow(result, exp)
        document.getElementById('displayNums').innerHTML = result.toFixed(5)
    }
}

// Square root

const square = function () {
    if (operator === 0 && result === undefined && toDisplay.length > 0) {
        operand1 = Math.sqrt(operand1)
        document.getElementById('displayNums').innerHTML = operand1.toFixed(5)

    } else if (operator !== 0 && result !== undefined) {
        result = Math.sqrt(result)
        document.getElementById('displayNums').innerHTML = result.toFixed(5)
    }
}