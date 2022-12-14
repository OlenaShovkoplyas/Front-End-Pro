// let marvelHeroes = [
// 	{name: "Thor"},
// 	{name: "Spider Man"}
// ];

// let dcHeroes = [
// 	{name: "Superman"},
// 	{name: "Batman"},
// 	{name: "Deadpool"}
// ];

//Задача:
// В Array.prototype добавить свойство с названием heroesRender в значении которого находится функция.
// Даная функция может вызываться в контексте любого массива и в качестве входящего аргумента принимает название папки ('dc', 'marvel'), 
// с которой будут подтягиваться иконки супер-героев этого массива. Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');
// Функция возвращает таблицу, в которой выводится информация по каждому из вложенных объектов. Строка каждого объекта имеет вид:
//<table>
	// 	<thead>
	// 		<tr>
	// 			<th>Name</th>
	// 			<th>Icon</th>
	// 		</tr>
	// 	</thead>
	// 	<tbody>
	// 		<tr>
	// 			<td>Thor</td>
	// 			<td>
	// 				<img src="images/marvel/thor.svg">
	// 			</td>
	// 		</tr><tr>
	// 			<td>Spider Man</td>
	// 			<td>
	// 				<img src="images/marvel/spiderman.svg">
	// 			</td>
	// 		</tr>
	// 	</tbody>
	// </table>}

	let marvelHeroes = [
		{name: "Thor"},
		{name: "Spider Man"}
	];
	
	let dcHeroes = [
		{name: "Superman"},
		{name: "Batman"},
		{name: "Deadpool"}
	];

	Array.prototype.heroesRender = function(persones) {
		let newArray = [];
		for(let i = 0; i < this.length; i++) {
		    this[this.length] = arguments[i];
		}
	}

	//Вариант преп.

// suit =['clubs','spades','diamonds','hearts'];
// picture = ['jack','queen','king','t'];
// cards = [];

// for(i=2; i<=10; i++){
//     for(j=0; j<suit.length; j++){
//         cardInfo=`<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

//     cards.push(`<div class="card">
//         ${cardInfo}
//         ${cardInfo}
//     </div>`);
//     }
// }

// for(i=0; i<picture.length; i++){
//     for(j=0; j<suit.length; j++){
//         cardInfo=`<div class="card__info">
//             ${picture[i][0].toUpperCase()}
//             <img src="images/${suit[j]}.svg" alt="${suit[j]}">
//         </div>`;

//         centerImg = picture[i] !== 't' ? picture[i] : suit[j];

//         cards.push(`<div class="card card--person">
//             ${cardInfo}
//             <img class="person" src="images/${centerImg}.svg" alt="${centerImg}">
//             ${cardInfo}
//         </div>`);
//     }
// }

// document.write(`<div class=wrapper>${cards.join(``)}</div>`);
