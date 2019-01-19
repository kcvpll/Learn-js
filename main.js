//Числа 
var result = 40 + 10; // все действия выполняются справа на лево, сперва складываются числа и присваиваются переменной resut
var myNumber = 100; 

console.log(result + myNumber); 
console.log(result - myNumber); 
console.log(result * myNumber); 
console.log(result / myNumber); 

myNumber = myNumber + 1; // увеличиваем значение переменной на 1
//аналогичная запись: myNumber += 1 или же myNumber ++ 
console.log(myNumber);

console.log(Math.round(5.45)); //переменная Math.round округляет до целого числа
console.log(Math.ceil(5.45)); // округляет в большую сторону
console.log(Math.floor(5.45)); // округляет в меньшую сторону


var newNumber = 2.985; 
console.log(newNumber.toFixed(1));