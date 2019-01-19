//var newNumber = 2.985; 
//console.log(newNumber.toFixed(1)); // после точки выводит 1 знак + округление

// Работа со строками

var myNumber = 40 + 10;
var myString = "Привет, ";
// console.log( "40" + myNumber); //вывод 4050, т.к. "" - это строка 
// console.log (myString + "как дела?"); 
// console.log (myString.toLowerCase()); // переводим всё в нижний регистр (ПРИВЕТ - привет);
// console.log (myString.toUpperCase()); // переводим всё в верхний регистр (привет - ПРИВЕТ);

// Работа с массивами 

var names = ["Pavel", "Aleks", "Salmon", "Dmitriy"]; 
//var numbers = [1,2,3,4];
//console.log(names[3].toUpperCase()); // получаем первый идекс из массива - Алекс
names[1] = "Masha"; // меняем то, что находится под индексом 1
names.push("Sveta"); // добавляем в конец массива имя Света
console.log(names);