// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

// Користувач ввів 2 і 2:
// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

firstNumber = +prompt(`Enter first number`);
secondNumber = +prompt(`Enter second number`);

sumN = firstNumber + secondNumber;
minusN = firstNumber - secondNumber;
splitN = firstNumber / secondNumber;
multiplyN = firstNumber * secondNumber;


alert(`User entered numbers: ${firstNumber} and ${secondNumber}
${firstNumber}+${secondNumber}=${sumN}
${firstNumber}-${secondNumber}=${minusN}
${firstNumber}/${secondNumber}=${splitN}
${firstNumber}*${secondNumber}=${multiplyN}`);



