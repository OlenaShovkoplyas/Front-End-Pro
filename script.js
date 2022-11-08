// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). 
// Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. 
// Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. 
// Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).



do { 
    getAction = prompt("Enter mathematical action you need (+ - / *):");
    correctAction = getAction === "+" || getAction === "-" || getAction === "*" || getAction === "/";
    if (!correctAction) {
         alert("Entered action has wrong format");
    }
} while (!correctAction);

do { 
    getOperands = parseInt(prompt("Enter number of operands you need (from 1 to 7):"));
    operandsNumber = getOperands >= 1 && getOperands <= 7;
    if (!operandsNumber) {
         alert("Entered wrong amount of operands");
    }
} while (!operandsNumber);

result = 0;

switch (getAction) {
    case "+":
        for (i = 1; i <= getOperands; i++) {
            do {
                number = parseInt(prompt(`Emtern ${i} numer for operation`));
            } while (isNaN(number));

            result += number;
        }
    break;  

    case "-":
        for (i = 1; i <= getOperands; i++) {
            do {
                number = parseInt(prompt(`Emtern ${i} numer for operation`));
            } while (isNaN(number));
            if (i === 1) {
                result = number;
            } else {
                result -= number;
            }
        }
    break;  
    
    case "*":
        result = 1;

        for (i = 1; i <= getOperands; i++) {
            do {
                number = parseInt(prompt(`Emtern ${i} numer for operation`))
            }
            while (isNaN(number));

            result *= number;
        }
        break;

    case "/":
        for (i = 1; i <= getOperands; i++) {
            do {
                number = parseInt(prompt(`Emtern ${i} numer for operation`))

                if (number === 0) {
                    alert("Error! You can't divide by 0!!!")
                }
            }
            while (number === 0 || isNaN(number));

            if (i === 1) {
                result = number;
            }
            else {
                result /= number;
            }
        }

        break;

}

alert(`Result of calculation is: ${result}`);






    

   