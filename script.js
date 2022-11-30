// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })

// let a = 8
// function value (a) { 
//     return a * 10;
// } 

arr = [[1,2,3,4], 45];

function cloneArrayFunction(list, func){
    const copyArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(typeof function () {} === "function"){
        copyArr.push(i);
        cloneArrayFunction(i);
    } if(Array.isArray(arr[i])) {
        copyArr.push(arr[i].slice());
    } else {
        copyArr.push(arr[i]);
        return copyArr;   
        cloneArrayFunction =  copyArr;
    } 
  }
  console.log(copyArr);
}
