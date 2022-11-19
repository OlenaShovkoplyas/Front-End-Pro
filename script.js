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

winter_sports = sports.slice(0, 5);
winter_sports.splice(2, 1);    // skier,⛷,snowboarder,🏂,hockey,🏒,ice skate,⛸
winter = winter_sports.flat();
winterName = [];
winterImg = [];

for (i = 0; i < winter.length; i++) {
	if (i % 2 == 0) {
		winterName.push(winter[i]);
	}  else {
		winterImg.push(winter[i]);	
	}
}

console.log(`*** WINTER SPORTS ***`);
for(i = 0; i < winterName.length; i++) {
    console.log(`${winterName[i]} : ${winterImg[i]}`);
}

summer_sports = sports.slice(5, 11);
summer_sports.splice(2, 2);     // swimmer,🏊,surfer,🏄‍,rowboat,🚣,bicyclist,🚴‍
summer = summer_sports.flat();
summerName = [];
summerImg = [];

for (i = 0; i < summer.length; i++) {
	if (i % 2 == 0) {
		summerName.push(summer[i]);
	}  else {
		summerImg.push(summer[i]);	
	}
}
console.log(`*** SUMMER SPORTS ***`);
for(i = 0; i < summerName.length; i++) {
    console.log(`${summerName[i]} : ${summerImg[i]}`);
}


fruits = sports.slice(2, 9);
fruits.splice(1, 4);      //apple,🍎,watermelon,🍉,lemon,🍋
fruitsLine = fruits.flat();
fruitsName = [];
fruitsImg = [];

for (i = 0; i < fruitsLine.length; i++) {
	if (i % 2 == 0) {
		fruitsName.push(fruitsLine[i]);
	}  else {
		fruitsImg.push(fruitsLine[i]);	
	}
}
console.log(`*** FRUITS ***`);
for(i = 0; i < fruitsName.length; i++) {
    console.log(`${fruitsName[i]} : ${fruitsImg[i]}`);
}
