// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })



const list = [1, 'string', 8, 12, true, 45, function f() {}, 'lion'];

function copy(list, func){

    const copyList = list.slice();

    if(typeof(func) === 'function'){
        for(let i = 0; i < list.length; i++){
            if(typeof copyList[i] === 'number') 
            copyList[i] = func(copyList[i]);
          }
      }
       return copyList;
  }

function value (a) { 
    return a * 25; 
  }

console.log(copy(list, value));