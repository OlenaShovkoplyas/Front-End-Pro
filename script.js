// function main (a, b, c) {   
// }

// function sum (a, b) {     return a + b; 
// }
// Перепишите функцию main следующим образом:

// 1.Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// 2.Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, 
// и в качестве входящего значение принимает результат работы функции sum.
// 3.Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.


function main (a = 2, b = 3, c) {
  if(typeof(c) === 'function')
    return c(sum(a, b));
  else 
    return sum(a, b);
}

function sum (a, b) { 
    return a + b; 
}

console.log(main(12, 18, function(a){
  return a*10;
}))
