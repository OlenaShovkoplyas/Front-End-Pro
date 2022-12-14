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


Array.prototype.heroesRender = function(folder) {
	const Trs = this
	.map(function(heroes) {
		return `
			<tr>
				<td>${heroes.name}</td>
				<td><img src="img/${folder}/${heroes.name.toLowerCase().replace(' ', '')}.svg" alt="${heroes.name}" width="50px"></img></td>
			</tr>
		`
		}).join("");
	
	document.write(`
		<table>
			<thead>
					<tr>
						<th>Name</th>
						<th>Icon</th>
					</tr>
				</thead>
				<tbody>${Trs}</tbody>
			</table>
		`)
	}
	
marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");	