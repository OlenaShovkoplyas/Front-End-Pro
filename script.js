// Данo масив

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Знайти суму позитивних елементів.[16,54,72,47,4,25,46,4,27,4,76,12,4,47] += 438
let sum = 0;
const positiveNumbers = arr.filter(function (number){
    return number > 0;
})
positiveNumbers.forEach(function (number) { 
    sum += number;
})
console.log(`Sum of positive numbers is ${sum}`);

//та кількість позитивних елементів. [16,54,72,47,4,25,46,4,27,4,76,12,4,47]   //14
console.log(`Amount of positive Numbers are ${positiveNumbers.length}`);


// 2. Знайти мінімальний елемент масиву та його порядковий номер.  //-63
let minNumber = [];
arr.forEach(function(number) {
    minNumber = number < minNumber ? number : minNumber
})
console.log(`The minimum number in array is ${minNumber}. It has index ${arr.indexOf(minNumber)}`);


// 3. Знайти максимальний елемент масиву та його порядковий номер.  //76
let maxNumber = [];
arr.forEach(function(number) {
    maxNumber = number > maxNumber ? number : maxNumber
})
console.log(`The maximum number in array is ${maxNumber}. It has index ${arr.indexOf(maxNumber)}`);


// 4. Визначити кількість негативних елементів. [-37,-4,-56,-16,-37,-51,-63,-54,-4,-35]    // 10
const negativeNumbers = arr.filter(function (number){
    return number < 0;
})
console.log(`Amount of negative numbers are ${negativeNumbers.length}`);


// 5. Знайти кількість непарних позитивних елементів.  [47,25,27,47]     // 4
const positiveOddNumbers = arr.filter(function (number){
    return number % 2 !== 0 && number > 0;
})
console.log(`Amount of positive odd numbers are ${positiveOddNumbers.length}`);


// 6. Знайти кількість парних позитивних елементів. [16,54,72,4,46,4,4,76,12,4]   // 10
const positiveEvenNumbers = arr.filter(function (number){
    return number % 2 === 0 && number > 0;
})
console.log(`Amount of positive even numbers are ${positiveEvenNumbers.length}`);


// 7. Знайти суму парних позитивних елементів.  [16,54,72,4,46,4,4,76,12,4]  += 292
sum = 0;
positiveEvenNumbers.forEach(function (number) { 
    sum += number;
})
console.log(`Sum of positive even numbers is ${sum}`);


// 8. Знайти суму непарних позитивних елементів.   [47,25,27,47]  += 146
sum = 0;
positiveOddNumbers.forEach(function (number) { 
    sum += number;
})
console.log(`Sum of positive even numbers is ${sum}`);


// 9. Знайти добуток позитивних елементів. [16,54,72,47,4,25,46,4,27,4,76,12,4,47]  *=  996181249E+17
let multiply = 1;
positiveNumbers.forEach(function (number) { 
    multiply *= number;
})
console.log(`Sum of positive numbers is ${multiply}`);


// 10. Знайти найбільший серед елементів масиву, решта обнулити.
arr.map(function(number, i) {
  arr[i] = number === maxNumber ? number : 0;  
  return arr;  
})
console.log(`An array with just a maximum number ${arr}`);