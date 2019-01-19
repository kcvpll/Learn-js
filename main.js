//var newNumber = 2.985; 
//console.log(newNumber.toFixed(1)); // после точки выводит 1 знак + округление



// Работа со строками

//var myNumber = 40 + 10;
// var myString = "Привет, ";
// console.log( "40" + myNumber); //вывод 4050, т.к. "" - это строка 
// console.log (myString + "как дела?"); 
// console.log (myString.toLowerCase()); // переводим всё в нижний регистр (ПРИВЕТ - привет);
// console.log (myString.toUpperCase()); // переводим всё в верхний регистр (привет - ПРИВЕТ);



// Работа с массивами 

// var names = ["Pavel", "Aleks", "Salmon", "Dmitriy"]; 
//var numbers = [1,2,3,4];
//console.log(names[3].toUpperCase()); // получаем первый идекс из массива - Алекс
// names[1] = "Masha"; // меняем то, что находится под индексом 1
// names.push("Sveta"); // добавляем в конец массива имя Света
// console.log(names);



// Работа с условиями 
// && - и, || - или 

// var myNumber = 10;
// if ("Вася" !== "Петя" || myNumber < 5) {  // оба условия должны быть выполнены 
	// console.log("Правильно"); 
// } else {
//	console.log ("Неправильно")
// }



// Работа с циклами

// for (var i = 0; i < 10; i++) {
//	if(i == 5){ 
		// break; досрочный выход из цикла если i = 5
//		continue; //выходим из текущей итерации и продолжаем дальше, 5 не выводится в консоль 
//	}
//	console.log(i);
// } 


// var names = ["Pavel", "Aleks", "Salmon", "Dmitriy"]; 
// for( var j = 0; j < names.length; j++ ){ //перебор массива
// 	console.log(names[j]);
// }

// Синтаксис цикла while
// var i = 0
// while (i < 10){
// 	console.log(i);
// 	i++;
// }


// Работа с функциями

//function sum( x, y){
//	return x + y; 
// }
// console.log(sum(10, 50)); 

// Работа с объектами 

var myObject = {
	name: "Pavel",
	surname: "Korsun", 
	age: 19, 
	getFullName: function () {
		return this.name = "" =  this.surname; 
	} 
}; 
myObject.name = "Pavel";
console.log(myObject.name);
console.log(myObject.getFullName());