// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i



// ряд случайных чисел
// var abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var random = abc[Math.floor(Math.random() * abc.length)];
// var newAbc = "";
//       while (newAbc.length < 6) {
//       alert(newAbc += random);
//     random = abc[Math.floor(Math.random() * abc.length)];
//     }



    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    function getRandomLetters() {
       return Math.floor(Math.random() * characters.length);
    } 

    function generateKey(length, characters) {
        let key = '';
        for (let i = 0; i < length; i++) {
            key += characters[getRandomLetters()];            
        }
        return key;
    }
    const key = generateKey(12, characters);
    console.log(key);