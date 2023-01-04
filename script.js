// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

const OPERATIONS = {
	"+": function(x, y) { return x + y },
	"-": function(x, y) { return x - y },
	"*": function(x, y) { return x * y },
	"/": function(x, y) { return x / y },
};

class SuperMath {
	constructor() {
		this.input();
	}

    getOperands() {
		let operands = [];
		for(let key in OPERATIONS) {
			operands.push(key);
		}
		return operands.join(", ")
	}

   input() {
		do {
			this.x = +prompt(`Enter x`)
		} while(isNaN(this.x));

		do {
			this.y = +prompt(`Enter y`)
		} while(isNaN(this.y));

		do {
			this.znak = prompt(`Enter operands: ${this.getOperands()}`)
		} while(!OPERATIONS[this.znak]);
	} 

	check() {
		let userApproved = confirm(`Do you want to make this operation ${this.x} ${this.znak} ${this.y}?`);

		return userApproved ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
	}	
}

const obj = new SuperMath();

alert(`Result is: ${obj.check()}`);



// const calculations = [
//     {
//         znak: "+";
//         operation: "x + y"
//     },
//     {
//         znak: "-";
//         operation: "x - y"
//     },
//     {
//         znak: "*";
//         operation: "x * y"
//     },
//     {
//         znak: "/";
//         operation: "x / y"
//     }
// ];

// const obj = {
// "x + y": 
// }

// calculations.forEach(function(calculation)) {
//     calculations.operation = obj[calculations.operation];
// }