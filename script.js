// Рисуем колоду карт, которая состоит из:
// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей
// В макете используется:
// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4-x мастей и jack, queen, king в архиве images.zip
// Все теги рендерим с помощью js.
// Внешний вид задания НЕ важен, важен только JS-код))



//Упрощенный вариант

suit =['clubs','spades','diamonds','hearts'];
picture = ['jack','queen','king','t'];
cards = [];

for(i=2; i<=10; i++){
    for(j=0; j<suit.length; j++){
        cardInfo=`<div class="card__info">${i}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>`;

    cards.push(`<div class="card">
        ${cardInfo}
        ${cardInfo}
    </div>`);
    }
}

for(i=0; i<picture.length; i++){
    for(j=0; j<suit.length; j++){
        cardInfo=`<div class="card__info">
            ${picture[i][0].toUpperCase()}
            <img src="img/${suit[j]}.svg" alt="${suit[j]}">
        </div>`;

        centerImg = picture[i] !== 't' ? picture[i] : suit[j];

        cards.push(`<div class="card card--person">
            ${cardInfo}
            <img class="person" src="img/${centerImg}.svg" alt="${centerImg}">
            ${cardInfo}
        </div>`);
    }
}

document.write(`<div class=wrapper>${cards.join(``)}</div>`);

//Мой вариант

// cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// cardsPersons = ['J', 'Q', 'K'];
// personsImg = ['jack', 'queen', 'king'];
// cardsSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
// cardsDeck = [];

// for (i = 0; i < cardsNumbers.length; i++) {
//     for (j = 0; j < cardsSuit.length; j++) {
//         cardsDeck.push(`
//         <div class="card">
//         <div class="card__info">
//             ${cardsNumbers[i]}
//             <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
//         </div>
//         <div class="card__info">
//             ${cardsNumbers[i]}
//             <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
//         </div>
//         </div>
//         `);
//     }
// }

// for (i = 0; i < cardsPersons.length; i++) {
//     for (j = 0; j < cardsSuit.length; j++) {
//         cardsDeck.push(`
//         <div class="card card--person">
//         <div class="card__info">
//             ${cardsPersons[i]}
//             <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
//         </div>
//         <img class="person" src="img/${personsImg[i]}.svg" alt="${cardsSuit[j]}">
//         <div class="card__info">
//             ${cardsPersons[i]}
//             <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
//         </div>
//         </div>
//         `);
//     }
// }

// for (i = 0; i < cardsSuit.length; i++) {
//     cardsDeck.push(`
//     <div class="card card--person">
//     <div class="card__info">
//         T 
//         <img src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
//     </div>
//     <img class="person" src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
//     <div class="card__info">
//         T 
//         <img src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
//     </div>
//     </div>
//     `);
// }

// document.write(`
//     <div class="wrapper">
//         ${cardsDeck.join('')}
//     </div>
// `);
