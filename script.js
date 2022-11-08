// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.

sum = 0;
do {
    firstNumber = parseInt(prompt("Enter your first number"));
    secondNumber = parseInt(prompt("Enter your second number"));
    correctNumbers = firstNumber >= 0 && secondNumber > firstNumber
   
    if (!correctNumbers) {
        alert (`Enter correct number! First number must be >=0, and the second must be more, then the first one`);
    }
   } while (!correctNumbers);

   do {
    step = parseInt(prompt("Enter the step for numbers"));
    correctStep = step >0 && step < (secondNumber - firstNumber)

    if (!correctStep) {
        alert (`Note, that step must bo more, than 0, but less than difference between numbers`);
    }
   } while (!correctStep);


   for(i = firstNumber; i <= secondNumber; i += step) {
        factorial = 1;
        
        for(j = 1; j <= i; j++) {
            factorial *= j;
        }
        sum  += factorial;
    }

alert (`Sum of factorials is ${sum}`);

