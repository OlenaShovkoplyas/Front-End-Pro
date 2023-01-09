const img = [
	{img: 'box'}
]

const wishes = [ 
	{wish: 'Best wishes for a merry Christmas and a happy New Year!'},
 	{wish: 'Best wishes for peace and joy this holiday season and a new year of health, happiness and prosperity!'},
 	{wish: 'Happy 2023! Wish you a new year filled with prosperity, joy, and contentment!'},
 	{wish: 'Sincerest wishes for hope, happiness and peace during this Holiday Season and throughout the coming year!'},
	{wish: 'Wishing you a Joyous Holiday Season and a New Year filled with Peace and Happiness!'},
]

class Congrad { 
	constructor(img, wish) { 
		this.img = img; 
		this.wish = wish; 
	} 
	render (){ 
		return `<div>
	<div><img src="box.png" width="60" height="50"></div>
	<div>${this.wish}
		${this.img}
	</div>	
	</div>`
	}
} 

let randomWish = Math.floor(Math.random() * (wishes.length-1)) ;

const wishesArray = wishes
	.map( (wish, i) => {
    if (randomWish === i) {
        return new Congrad (wish.wish)
    }
    return new Congrad (img.img,``)
})

let render = wishesArray
    .map (wish =>{
        return  wish.render ()

    })
    .join(``)

console.log (render)
console.log (wishesArray)
document.write (`
	<div class="main">
    	${render}
    </div>`)