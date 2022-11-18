// Дано:
// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];
// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():
// 1. Объединить массивы destination, native, hero в общий массив rainbow.\

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native, destination);
// document.write(`${rainbow}`);

// 2. Сделать реверс элементов полученного массива rainbow.

rainbowReversed = rainbow.reverse(); //In, Poltava, Of, York, Ivan
    
// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];

rainbowReversed.splice(0, 2); //delate 'In', 'Poltava'

rainbowReversed.unshift('Richard'); // add 'Richard' on the begining

rainbowReversed.pop();  // cut last 'Ivan'

rainbowReversed.push('Gave','Battle','In','Vain');  //add at the end 'Gave','Battle','In','Vain'

// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.
// Шрифт надписей на картинке Quicksand. Вы можете взять любой))


rainbowCircles = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'violet'];

for(i = 0; i < rainbowCircles.length; i++) {
   
     document.write(`
        <div class="wrap">
             <div class="circle" style="background-color: ${rainbowCircles[i]}"></div>
             <div class="text">${rainbowReversed[i]}</div>
         </div>        
    `)
 };


 