// Написати функцію, яка приймає 1 параметр. з тим, 
// що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

var getAdder = function () { var res = 0; return function(x) { res += x; return res; } };
var sum = getAdder();
sum(1); // 1
sum(3); // 4
var sum2 = getAdder(); // два независимых сумматора
sum2(1); //1
sum2(3); // 4