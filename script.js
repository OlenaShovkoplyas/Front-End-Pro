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
// What is the correct answer to the ultimate question of life, the universe and all that.


point = 0;
answer = 0;

question1 = prompt("How much will be 2+2?").toLowerCase().trim();
    if (question1 === `4` || question1 === `four` || question1 === `чотири` || question1 === `четыре`) {
        point = point + 10 
        answer = answer + 1
        alert(`Good job!`);
    } else {
        alert( `Oh no no! Your answer is wrong`);
        }

    
question2 = prompt("The sun rises in the east?").toLowerCase().trim();
    if (question2 === `yes` || question2 === `true` || question2 === `да` || question2 === `так` || question2 === `east`) {
        point += 10 
        answer += 1
        alert(`You simply the best!`);
    } else {
        alert( `Your answer is wrong! It is realy rise on East`);
        }


question3 = prompt("How much will be 5 / 10 ?").toLowerCase().trim();
    if (question3 === `1/2` || question3 === `0.5`) {
        point += 10 
        answer += 1
        alert(`Oh yeh!`);
    } else {
        alert(`Your answer is wrong!`);
        }

question4 = prompt("What came first: egg or chicken?").toLowerCase().trim();
    if (question4 === `egg` || question4 === `chicken`) {
        point += 10 
        answer += 1
        alert(`Yeh, yeh, there is no wrong answer! Good for you, ha!?`);
    } else {
        alert( `That was hard not to guess! But you are the lucky one!`);
        }

alert(`That was good chelenge! 
You have ${point} points.
You answered correctly for ${answer} question from 5`)

    




