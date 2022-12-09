// Создать объект с такой структурой: 

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
// Написать функцию convert(obj), которая получает аргументом obj. 
//Функция должна вернуть новый объект вида:
// newObj = {
    //     x: 20,
    //     y: 20,
    //     z: 30,
    //     k: 23,
    //     p: 13
    // }
    

// function convert(obj) {   
//     getProp(obj);
//         function getProp(obj) {
//         for(let key in obj) {
//             if(typeof(obj[key]) === 'object') {
//                 getProp(obj[key]);
//             } else {
//                 console.log(obj[key]);                              
//             }            
//         }        
//     }     
//     // return  Object.assign(obj);    
// }
convert(obj);   
console.log(obj);

function convert(obj) {
     
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            convert(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }

}
convert(obj);   
console.log(obj);



// function convert(object) {
//     for (let key in obj){
//         // console.log(obj[key])
//         if (typeof obj[key] === 'object'){
//             copied = obj[key];
//             // console.log(copied)
//             delete obj[key];
//         }   
//     }   
//     return Object.assign(obj, copied); 
// } 

// const newObj = convert(obj);   
// console.log(newObj);
