// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })



const list = [1, 3, 8, [1,2,3,4], 45, 'a'];

function copy(list, func){
    const newList = [];
    for(let i = 0; i < list.length; i++) {
        if(typeof(func) === 'function'){
            func(list[i]);
        }
        newList.push(list[i]);
        }
        return newList;
    }

    function copyArrayFunction(value) {
        console.log(value);
    }
    let a = 8
    
  
 newList = copy(list, function (value) { return value * 10; }); 
 a = copy(list, copyArrayFunction);
 b = copy(newList);
 c = copy([2, 3, 4]);