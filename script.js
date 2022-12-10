// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }


// let obj1 = {
//     x: 10,
//     y: 20
// },  obj2 = {
//     z: 30
// }

let obj1 = {
    x: 10,
    
},  obj2 = {
    x: 20, 
    z: 30
}

function assignObjects() {
    let args = arguments,
        resobj = {},
        obj1 = args[0],
        obj2 = args[1],
        last = args[args.length - 1];
        
    for (let key in obj1) {
        resobj[key] = obj1[key];
    }
    for (let key in obj2) {
        resobj[key] = obj2[key];
        }
        return resobj;        
    }

   const newObj = assignObjects(obj1, obj2)
    console.log(newObj);
   

