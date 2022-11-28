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

cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
cardsPersons = ['J', 'Q', 'K'];
personsImg = ['jack', 'queen', 'king'];
cardsSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
cardsDeck = [];

for (i = 0; i < cardsNumbers.length; i++) {
    for (j = 0; j < cardsSuit.length; j++) {
        cardsDeck.push(`
        <div class="card">
        <div class="card__info">
            ${cardsNumbers[i]}
            <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
        </div>
        <div class="card__info">
            ${cardsNumbers[i]}
            <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
        </div>
        </div>
        `);
    }
}

for (i = 0; i < cardsPersons.length; i++) {
    for (j = 0; j < cardsSuit.length; j++) {
        cardsDeck.push(`
        <div class="card card--person">
        <div class="card__info">
            ${cardsPersons[i]}
            <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
        </div>
        <img class="person" src="img/${personsImg[i]}.svg" alt="${cardsSuit[j]}">
        <div class="card__info">
            ${cardsPersons[i]}
            <img src="img/${cardsSuit[j]}.svg" alt="${cardsSuit[j]}">
        </div>
        </div>
        `);
    }
}

for (i = 0; i < cardsSuit.length; i++) {
    cardsDeck.push(`
    <div class="card card--person">
    <div class="card__info">
        T 
        <img src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
    </div>
    <img class="person" src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
    <div class="card__info">
        T 
        <img src="img/${cardsSuit[i]}.svg" alt="${cardsSuit[i]}">
    </div>
    </div>
    `);
}

document.write(`
    <div class="wrapper">
        ${cardsDeck.join('')}
    </div>
`);
