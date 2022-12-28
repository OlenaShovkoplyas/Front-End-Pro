// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує


class SuperMath {
    constructor(mark, model, kuzov)
}



// class Car {
// 	constructor(mark, model, kuzov) {
// 		this.mark = mark;
// 		this.model = model;
// 		this.kuzov = kuzov;
// 	}

// 	render() {
// 		let list = [];
	
// 		for(let key in this) {
// 			list.push(`<li>${key}: ${this[key]}</li>`);
// 		}
	
// 		return list.join("");
// 	}
// }

// const BMW = new Car("BMW", "X5", "universal");
// const Audi = new Car("Audi", "S5", "sedan", 350);


// console.log(BMW);
// console.log(Audi);