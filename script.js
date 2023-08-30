/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.
*/

function fizzBuzz(value) {
    if(value % 3 == 0 && value % 5 == 0){
        console.log("fizzbuzz")
    }
    else if(value % 3 == 0){
        console.log("fizz");
    }
    else if(value % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log("pop")
    }
};

/* Use the following test scenarios:
    fizzBuzz(49); //Pop
    fizzBuzz(55); //Buzz
    fizzBuzz(120); //FizzBuzz
    fizzBuzz(9999); //Fizz
*/

fizzBuzz(1);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(49);
fizzBuzz(55);
fizzBuzz(120);
fizzBuzz(9999);


/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

function averager(myArray) {
    let sum = 0;
    for (let i = 0; i <myArray.length; i++) {
        sum += myArray[i];
    }
    return Math.round(sum / myArray.length)
}

let result = averager(prices);
console.log(result);

//Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

function celToFah(x) {
    let valNum = parseFloat(x);
    valNum *= 1.8;
    valNum += 32;
    console.log(valNum);
};

function celToKel(x) {
    let valNum = parseFloat(x);
    valNum += 273.15;
    console.log(valNum);
};

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(num1, num2) {
    console.log(num1 ** num2)
}

pow(2, 3);
pow(3,2);
pow(5,2);
pow(6,6);
pow(2,5);
pow(4,3);