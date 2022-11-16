// Створити масив, довжину та елементи якого задає користувач.

arr = [];

do {
    arrLenth = parseInt(prompt(`Enter the lenth of your array`));
} while (!(arrLenth > 0));

for (i = 0; i < arrLenth; i++) {
    do {
        arrValue = parseInt(prompt(`Enter ${arrLenth} values for array`));
    } while (isNaN(arrValue));

    arr[i] = arrValue;
} 
alert(`Your array is ${arr}`);

// Відсортувати масив за зростанням.

for (i = 0; i < arrLenth; i++) {
    swap = false;

    for (j = i + 1; j < arrLenth; j++) {
        if (arr[i] > arr[j]) {
            swap = arr[j];
            arr[j] = arr[i];
            arr[i] = swap;
        }
    }
}
alert(`Sorted array is ${arr}`);

// Видалити елементи з масиву з 2 по 4 (включно!). У міру змін виводити вміст масиву на сторінку.

if (arrLenth >= 5) {
    arr.splice(1, 3);
    alert(`Array without elements from second to forth is ${arr}`)
}

    


