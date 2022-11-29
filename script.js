// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая – должен вернутся функцией.
// Пример:
// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16
// if(summA < summB) => return b

a = [1, 2, 3, 'hello', 48, 12, 4, 5];
b = [1, 2, 3, true, 4, undefined, 6];


function getSumOfArray(arr) {
   let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arrSum += arr[i];
        }
    }
    return arrSum;
   }
//    console.log(getSumOfArray(a));

function getBiggerArraySum(arr1, arr2) {
    let sum1 = getSumOfArray(arr1);
    let sum2 = getSumOfArray(arr2);
    return sum1 > sum2 ? arr1 : arr2;
}

console.log(getBiggerArraySum(a, b));

    

