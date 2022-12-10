// Создать объект с такой структурой: 
// Написать функцию convert(obj), которая получает аргументом obj. 
//Функция должна вернуть новый объект вида:
// newObj = {
    //     x: 20,
    //     y: 20,
    //     z: 30,
    //     k: 23,
    //     p: 13
    // }

const obj = {
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30
    }, 
    foo2: {
        k: 23, 
        p: 13
    }
};

function convert(obj) {   
    getProp(obj);
        function getProp(obj) {
        for(let key in obj) {
            if(typeof(obj[key]) === 'object') {
               return getProp(obj[key]);                                                      
            }  else {
                return obj[key]; 
            }                      
        }                   
    }         
}

const newObj = convert(obj);   
console.log(newObj);




// function convert(object) {
//     for (let key in obj){
//         if (typeof obj[key] === 'object'){
//             copied = obj[key];            
//             return copied;
//         }
//         // } else {
//         //     return obj[key];
//         // }
//     }   
//     return Object.assign(obj, copied); 
// } 

// const newObj = convert(obj);   
// console.log(newObj);
