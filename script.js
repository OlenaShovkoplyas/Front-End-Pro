// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })

function copy(list, func){
    let result = [];
    for(let i = 0; i < list.length; i++)
        result[i] = func(list[i]);
    return result;
}

let list = [1,2,3];
let newList = copy(list, function(value){return value * 10;});

console.log(list);
console.log(newList);

// function copy(list, func){
//     return list.map(func);
// }