// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.

sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

// //Первый вариант
// winter_sports = sports.slice(0, 5);
// winter_sports.splice(2, 1);
// console.log(`*** WINTER SPORTS *** 
// ${winter_sports}`);  // skier,⛷,snowboarder,🏂,hockey,🏒,ice skate,⛸


// summer_sports = sports.slice(5, 11);
// summer_sports.splice(2, 2);
// console.log(`***SUMMER SPORTS ***
// ${summer_sports}`); //swimmer,🏊,surfer,🏄‍,rowboat,🚣,bicyclist,🚴‍

// fruits = sports.slice(2, 9);
// fruits.splice(1, 4);
// console.log(`*** FRUITS *** 
// ${fruits}`);  //apple,🍎,watermelon,🍉,lemon,🍋


//Способ 2 под шаблон (подозреваю, что есть вариант более простого разделения подмассивов, но не догнала)
winter_sports = sports.slice(0, 5);
winter_sports.splice(2, 1);

winterName = ['skier', 'snowboarder', 'hockey', 'ice skate'];
winterImg = ['⛷', '🏂', '🏒', '⛸'];
console.log(`*** WINTER SPORTS ***`);
for(i = 0; i < winterName.length; i++) {
    console.log(`${winterName[i]} : ${winterImg[i]}`);
}

summer_sports = sports.slice(5, 11);
summer_sports.splice(2, 2);

summerName = ['swimmer', 'surfer', 'rowboat', 'bicyclist'];
summerImg = ['🏊', '🏄', '🚣', '🚴'];
console.log(`*** SUMMER SPORTS ***`);
for(i = 0; i < summerName.length; i++) {
    console.log(`${summerName[i]} : ${summerImg[i]}`);
}

fruits = sports.slice(2, 9);
fruits.splice(1, 4);

fruitsrName = ['apple', 'watermelon', 'lemon'];
fruitsImg = ['🍎', '🍉', '🍋'];
console.log(`*** FRUITS ***`);
for(i = 0; i < fruitsrName.length; i++) {
    console.log(`${fruitsrName[i]} : ${fruitsImg[i]}`);
}








