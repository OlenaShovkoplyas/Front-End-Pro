// 1. Створити клас Людина.
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

// Function-constructor

function Human(firstName, lastName, age) {
	this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;	

    this.getInfoAboutHuman = function() {
	 	return `My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`        
	}
    this.getInfoAboutForCar = function() {
        return `${this.firstName} ${this.lastName}.`        
   }
}

const humanElen = new Human('Elen', 'Shovkoplyas', 37);
const HumanOleg = new Human('Oleg', 'Gladkov', 12);

console.log(humanElen.getInfoAboutHuman());
console.log(HumanOleg.getInfoAboutHuman());

// 2. Створити клас Автомобіль.
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
// інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

function Car(brand, model, releaseYear, licensePlate) {
	this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
    this.licensePlate = licensePlate;	

    this.getOwner = function(owner) {
        if (owner.age >= 18) {
            this.owner = owner; 
            console.log(`Owner is ${this.owner.firstName}`);           
        } else {
            console.log(`Owner ${owner.firstName} have no Driver License. He/She is under 18 years old.`);
        }

    this.getCarInfo = function() {
        let standartInfoCar = `Car brand: ${this.brand}; Model: ${this.model}; Year of release: ${this.releaseYear}; Car license plate: ${this.licensePlate}.`;
            if(this.owner !== undefined){
               console.log(`${standartInfoCar}  Owner: ${this.owner.getInfoAboutForCar()}`);
        } else {
                console.log(`${standartInfoCar} Owner: No owner`);
        }        
       }
    }    
}

const carFord = new Car('Ford', 'Mondeo', 2010, 'АА2515ВЕ');
carFord.getOwner(HumanOleg);
console.log(carFord.getCarInfo());

const carSsangYoung = new Car('SsangYoung', 'Corando', 2019, 'AA8520AE');
carSsangYoung.getOwner(humanElen);
console.log(carSsangYoung.getCarInfo());