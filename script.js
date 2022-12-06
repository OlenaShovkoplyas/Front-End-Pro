// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.

// Используем только методы concat/forEach/map/filter/join (по надобности, все не нужно).

let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.

// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>