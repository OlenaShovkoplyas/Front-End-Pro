// Дано:
// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];

vegetablesPrice = [8, 30, 10];
fruitsPrice = [20, 25, 50];

finalSum = 1;

// Задача: в зависимости от выбранного пользователем периода (winter или summer), категории (vegetables или fruits), товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.
// Порядок действий:
// Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

do {
    yerPeriod = prompt(`Please choose a period: Winter or Summer.`).toLowerCase().replaceAll(" ", "");
    } while (yerPeriod !== "winter" && yerPeriod !== "summer");

if (yerPeriod === "winter") {
    index = 2;
    } else {
        index = 0.8;
    }

// Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

do {
    category = prompt(`Choose category in which you want to bye products: Vegetables or Fruits.`).toLowerCase().replaceAll(" ", "");
}  while (category !== "vegetables" && category !== "fruits");


// Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.

if (category === "vegetables") {
    do {
        product = prompt("Choose product from category Vegetables: Cabbage, Avocado or Tomato.").toLowerCase().replaceAll(" ", "");
        typeOfVegetable = vegetables.indexOf(product);
        productPrice = vegetablesPrice[typeOfVegetable];
     } while (product !== "cabbage" &&  product !== "avocado" &&  product !== "tomato"); 
    } else {
        do {
            product = prompt("Choose product from category Fruits: Grapes, Raspberry or Coconut.").toLowerCase().replaceAll(" ", "");
            typeOfFruit = fruits.indexOf(product);
            productPrice = fruitsPrice[typeOfFruit];
         } while (product !== "grapes" &&  product !== "raspberry" &&  product !== "coconut");
    }

   
    productImg = `<img src="img/${product}.svg" alt="${product} width="100px" height="100px"></img>`;
  
    
// Запрашиваем у пользователя количество единиц ранее выбранного товара.
// Введенное значение должно быть числом и не меньше 1.

do {
    amountOfProduct = parseInt(prompt(`Enter amount of ${product}`).replaceAll(" ", ""));
} while (isNaN(amountOfProduct) && amountOfProduct >= 1);

finalSum = amountOfProduct * productPrice * index;


// Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:
// <div class="product" align="center">
//   <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
//   <p>Selected product: <b>cabbage</b></p>
//   <p>Count of cabbages: <b>3</b></p>
//   <p>Selected period: <b>winter</b></p>
//   <p>Selected category: <b>vegetables</b></p>
//   <p>Final sum: <b>48 UAH</b></p>
// </div>

document.write(
    `<div class="product" align="center">
        ${productImg}
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${amountOfProduct}</b></p>
        <p>Selected period: <b>${yerPeriod}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalSum} UAH</b></p>
    </div>`
)




    


