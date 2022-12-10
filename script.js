let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

//Задача:
// В Array.prototype добавить свойство с названием heroesRender в значении которого находится функция.
// Даная функция может вызываться в контексте любого массива и в качестве входящего аргумента принимает название папки ('dc', 'marvel'), 
// с которой будут подтягиваться иконки супер-героев этого массива. Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');
// Функция возвращает таблицу, в которой выводится информация по каждому из вложенных объектов. Строка каждого объекта имеет вид:
{/* <table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Icon</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Thor</td>
				<td>
					<img src="images/marvel/thor.svg">
				</td>
			</tr><tr>
				<td>Spider Man</td>
				<td>
					<img src="images/marvel/spiderman.svg">
				</td>
			</tr>
		</tbody>
	</table> */}