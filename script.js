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

const newArr = monday.concat(tuesday)

// console.log(newArr);

.map(function(task) {     // Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
  task[1] = task[1]/60;    
  return task; 
})

.filter(function(task) {       // Оставить только те задачи, на выполнение которых нужно более 2-х часов.
  task[1] > 2;
  return task;
  })
  
.map(function(task) {            // Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
  task.push(task[1] * amount);
  return task;
  })
  
.map(function(task){
  return
    `<tr>
      <td>Task name: ${task[0]}</td>
      <td>Taks duration: ${task[1]} hours</td>
      <td>Task amount: ${task[2]}$</td>
    </tr>`
  })
  .join(" ");
    


document.write(`
<table>
<tbody>${newArr}</tbody>
</table>`)



