let numberOne;
let numberTwo;
let option;
let math;
let checks;
let result;

alert(`Let's try the application`)

optionF()

function optionF(){

while(option != "x"){


option = prompt(`
    Choose an option:
    0.  Math Menu
    x.  Exit aplication
  `)

switch(option) {
case "0":
    numberOne = Number(prompt(`Type the first number`))
    numberTwo = Number(prompt(`type the second number`))
    mathF()
    break
case "x":
    futuresF(futures="x")
    checksF(checks="x")
    mathF(math="x")
    alert(`Thanks for testing`)
    break
default:
    alert(`Try a valid option`)
}
}
}

function checksF(){

result;

while(checks != "x"){


checks = prompt(`
    ${expression}

    Let's check if:
    0.  Result is even or odd
    1.  First number is even or odd
    2.  Second number is even or odd
    3.  Numbers are equal
    r.  Return math
    m.  Return main menu
    x.  Exit aplication
  `)

switch(checks) {
case "0":
    if (result % 2 == 0){alert(`${result} is even`)} else {alert(`${result} is odd`)}
    break
case "1":
    if (numberOne % 2 == 0){alert(`${numberOne} is even`)} else {alert(`${numberOne} is odd`)}
    break 
case "2":
    if (numberTwo % 2 == 0){alert(`${numberTwo} is even`)} else {alert(`${numberTwo} is odd`)}
    break 
case "3":
    if (numberOne == numberTwo){alert(`They are equal`)} else {alert(`They are not equal`)}
    break 
case "r":
    mathF()
    break 
case "m":
    optionF()
    break
case "x":
    futuresF(futures="x")
    optionF(option="x")
    mathF(math="x")
    alert(`Thanks for testing`)
    break
default:
    alert(`Try a valid option`)
}
}
}

function mathF(){

while(math != "x") {

math = prompt(`
    Choose an option:
    0.  Change numbers
    1.  Sum of the two numbers
    2.  Subtraction of the two numbers
    3.  Multiplication of the two numbers
    4.  Division of the two numbers
    5.  Rest of the two numbers
    m.  Return main menu
    x.  Exit aplication
  `)

switch(math) {
case "0":
    numberOne = Number(prompt(`Type the first number`))
    numberTwo = Number(prompt(`type the second number`))
    break
case "1":
    let sum = (numberOne + numberTwo)
    expression = `${numberOne}+${numberTwo} = ${sum}`
    result = sum
    checksF()
    break
case "2":
    let subtraction = (numberOne - numberTwo)
    expression = `${numberOne}-${numberTwo} = ${subtraction}`
    result = subtraction
    checksF()
    break
case "3":
    let multiplication = (numberOne * numberTwo)
    expression = `${numberOne}x${numberTwo} = ${multiplication}`
    result = multiplication
    checksF()
    break
case "4":
    let division = (numberOne / numberTwo)
    expression = `${numberOne}/${numberTwo} = ${division}`
    result = division
    checksF()
    break
case "5":
    let rest = (numberOne % numberTwo)
    expression = `Rest of ${numberOne}/${numberTwo} = ${rest}`
    result = rest
    checksF()
    break
case "m":
    optionF()
    break
case "x":
    futuresF(futures="x")
    checksF(checks="x")
    optionF(option="x")
    alert(`Thanks for testing`)
    break
default:
    alert(`Try a valid option`)
}
}
}


