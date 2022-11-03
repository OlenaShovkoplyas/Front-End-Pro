// You need to make simple quiz.

// Ask the users a few questions (>4), using prompt.
// If the answer is right add 10 points (for every right answers).
// If the answer is wrong or user clicked cancel - you don't add any points.
// When the user will answer all questions, show the result using alert (like: You have 30 points. You answered correctly for 3/10.).


// Some question for example:

// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)

alert(`To start testing push OK`);
point = 0;

firsAnswer = prompt("How much will be 2+2?").toLowerCase().trim();
    if (firsAnswer === `4`, firsAnswer === `four`) {
        point = point + 10 
        
        alert(`Good job! You have ${point} points`);
    } else {
        alert( `Oh no no! Your answer is wrong`);
        }




