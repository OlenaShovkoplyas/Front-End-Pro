// Файл script.js содержит данные:
// users – массив юзеров системы.
// roles – объект ролей юзера.
// gradation – объект с диапазоном оценок.
// Что нужно сделать: отрендерить для каждого юзера с массива users соответствующего вида блок.
// Для каждого юзера в блоке выводим:
// Картинку юзера – свойство img
// Имя юзера – свойство name
// Возраст юзера – свойство age
// Роль юзера – свойство role.

// Если у юзера свойство courses есть, то выводим перечень пройденных курсов.
// Делаем основной класс User, в котором будет созданы метод render и renderCourses.
// Для каждой роли делаем свой класс Student, Lector, Admin, который наследует класс User.
// В классах Lector, Admin переопределяем метод renderCourses для того, что бы в нужном виде отобразить список курсов.
// Заданную html-разметку и css-классы для каждого блока можете править как хотите) Главное – визуально отобразить так, как на картинке.

const roles = {
	admin: "img/admin",
	student: "img/student",
	lector: "img/lector"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};


const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "img/student",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "img/student",
		role: "student",

	},
	{
		name: "Noah Smith",
		age: 43,
		img: "img/student",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "img/student",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "img/admin",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "img/lector",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 100,
				"studentsScore": 85
			}
		]
	},
	{
		name: "Maks Fray",
		age: 53,
		img: "img/lector",
		role: "lector"

	},
	{
		name: "Anna German",
		age: 34,
		img: "img/admin",
		role: "admin"

	}
];

class  User {
	constructor(args) {
		this.name = args.name;
		this.age = args.age;
		this.img = args.img;
		this.role = args.role;
		this.courses = args.courses;
	}	
	
	renderInfoUser () {		
		return `
		<div class="user">
	        <div class="user__info">
	            <div class="user__info--data">                 
	                <img src="${this.img}" alt="${this.name}" height="50">
	                <div class="user__naming">
	                    <p>Name: <b>${this.name}</b></p>
	                    <p>Age: <b>${this.age}</b></p>
	                </div>
	            </div>	
	    	<div class="user__info--role student">
	            <img src="${roles[this.role]}" alt="${this.role}" height="25">
	            <p>${this.role}</p>
	        </div>
	    </div>`;
		}	
	
	renderCourses(){		
		let coursesTitle = this.courses		
		.map(el => {
			return `<div class="user__courses">
			<p class="user__courses--course student">
				${el.title} <span class="${markGradation(gradation, el.score)}">${markGradation(gradation, el.score)}</span>
			</p>			
		</div>`;
		})
		.join('')		
		return `<div class="user__courses admin--info">${coursesTitle}</div>`;
		}		
	}
	
class  Student extends User {
	constructor(args) {
		super(args);
	}
}

class  Lector extends User {
	constructor(args) {
		super(args);
	}
	renderCourses(){
		let coursesTitle = this.courses
		.map(el => {
			return `<div class="user__courses--course ${this.role}">
                <p>Title: <b>${el.title}</b></p>
                <p>Lector's score: <span class="${markGradation(gradation, el.score)}">${markGradation(gradation, el.score)}</span></p>
                <p>Average student's score: <span class="${markGradation(gradation, el.score)}">${markGradation(gradation, el.score)}</span></p>
            </div>`;
		})
		.join('')

		return `<div class="user__courses admin--info">${coursesTitle}</div>`;
		}
}

class Admin extends User {
	constructor(args) {
		super(args);
	}
	renderCourses(){
		let coursesTitle = this.courses
		.map(el => {
			return `<div class="user__courses--course ${this.role}">
					<p>Title: <b>${el.title}</b></p>
					<p>Admin's score: <span class="${markGradation(gradation, el.score)}">${markGradation(gradation, el.score)}</span></p>
					<p>Lector: <b>${el.lector}</b></p>
			</div>`;
		})
		.join('')
	
		return `<div class="user__courses admin--info">${coursesTitle}</div>`;
	}
}

function markGradation (mark) {
	let grade;	
	for (let key in gradation){
		if (mark <= key){
			grade = gradation[key]			
			break;						
		}
	}
	return grade;
};

users.filter(user => user.courses)
.forEach(user => {
	let userCourses = user.courses;
	userCourses
	.map(course => {
		if(course.mark)
			course.markGradation = markGradation(course.mark);
		if(course.score)
			course.scoreGradation = markGradation(course.score);
		if(course.studentScore)
			course.scoreStudentScore = markGradation(course.studentScore);			
	})		
	console.log(userCourses);	
})


const ROLES = {
	"student": user => new Student(user),
	"lector": user => new Lector(user),
	"admin": user => new Admin(user)
}

function renderNewUsers(array){
	let users = array
	.map(user => ROLES[user.role] ? ROLES[user.role](user) : new User(user))
	.map(user => {			
		return user;		
	})
	.map(user => user.renderInfoUser())	
	.join(``);	
	renderNewUsers(users);
}

const allUsers = renderNewUsers(users);


document.write(`<div class="users">${allUsers}</div>`);