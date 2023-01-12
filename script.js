// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)

// Можно добавить добавки:

// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).

// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

// Подсказка: нужен класс Гамбургер, глобальный объект 
// HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.

class Hamburger {
    constructor(size, filling) {
      this.size = size;
      this.filling = filling;
      this.toppings = [];
    }

    // Добавить topping к гамбургеру. Можно добавить несколько
    addTopping(topping) {
      !this.toppings.includes(topping) ? this.toppings.push(topping) : this.toppings;
      return this.toppings[this.toppings.length-1];
    }
    
    // * Получить список toppings
    getTopping() {
      return this.toppings;
    }

    // * Узнать начинку гамбургера
    getFilling() {
        return this.filling;
    }

    // * Узнать размер гамбургера
    getSize() {
      return this.size;
    }

    // calculating price of hamburger
    calculatePrice() {
    const price = Hamburger.SIZES[this.size].price +
      Hamburger.FILLINGS[this.filling].price +
      this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].price, 0);
      return price;
    } 

    // get calories of hamburder
  calculateCalories() {
    const caloriesAmount = Hamburger.SIZES[this.size].calories +
      Hamburger.FILLINGS[this.filling].calories +
      this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].calories, 0);
      return caloriesAmount;
  }
   
}
 
Hamburger.SIZE_SMALL = 'SMALL';
Hamburger.SIZE_LARGE = 'LARGE';
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 5,
      calories: 20,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 10,
      calories: 40,
    }
};
  
Hamburger.FILLING_CHEESE = 'CHEESE';
Hamburger.FILLING_SALAD = 'SALAD';
Hamburger.FILLING_POTATO = 'POTATO';
Hamburger.FILLINGS = {
    [Hamburger.FILLING_CHEESE]: {
      price: 1,
      calories: 20,
    },
    [Hamburger.FILLING_SALAD]: {
      price: 2,
      calories: 5,
    },
    [Hamburger.FILLING_POTATO]: {
      price: 1.5,
      calories: 10,
    },
};
  
Hamburger.TOPPING_SPICE = 'SPICE';
Hamburger.TOPPING_MAYONNAISE = 'MAYONNAISE';
Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 1.5,
      calories: 0,
    },
    [Hamburger.TOPPING_MAYONNAISE]: {
      price: 2,
      calories: 5,
    },
};
  
const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.FILLING_POTATO);
  
console.log('Add topping to a humburger.', hamburger.addTopping(Hamburger.TOPPING_SPICE));
console.log('Add more topping to a humburger. ', hamburger.addTopping(Hamburger.TOPPING_MAYONNAISE));
console.log('List of added toppings: ', hamburger.getTopping()); 
console.log('Size of humburger: ', hamburger.getSize());
console.log('Filling of humburger: ', hamburger.getFilling());
console.log('Humburger price, $', hamburger.calculatePrice());
console.log('Сalorie content of the dish: ', hamburger.calculateCalories());
console.log('Amount of toppings: ', hamburger.getTopping().length);
    
  
console.log('-----------------------------');
console.log('*** NEW ORDER ***');
console.log('-----------------------------');

// Маленький гамбургер с начинкой из сыра
const hamburgerOrder = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.FILLING_CHEESE);

console.log('Size of humburger: ', hamburgerOrder.getSize());
console.log('Added topping:', hamburgerOrder.addTopping(Hamburger.TOPPING_SPICE));
console.log('Add more topping:', hamburgerOrder.addTopping(Hamburger.TOPPING_MAYONNAISE));
console.log('Filling of your humburger: ', hamburgerOrder.getFilling());
console.log('Prise of humburger ', hamburgerOrder.calculatePrice());
console.log('Сalorie content of the humburger: ', hamburgerOrder.calculateCalories());