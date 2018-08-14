// // Arrays
// function range(min, max, tick) { // Данная функция принимает 3 параметра: Минимальное число, максимальное и шаг (сколько будет добавляться или отниматься за шаг). 
//     var arr = [];                // Затем создает массив в который помещает числа от минимального до максимального, учитывая шаг.
//     if (tick == 0){
//         return "Empty";
//     }
//     if (tick < 0){
//         for(max; max > min -1 ; max = max + tick){  //Если шаг указан меньше нуля, то отсчет идет от максимального до минимального
//             arr.push(max);
//         }
//     } 
//     else {
//         for (min; min < max + 1;min = min + tick){
//             arr.push(min);
//         }
//     }
//     return arr;
// }

// function sum(arr){                          // функция принимает массив. Считает сумму между всеми элементами, и возвращет
//     var j = 0;
//     for (var i = 0; i < arr.length; i++){
//         j = j + arr[i];
//     }
//     return j;
// }
// console.log(range(1, 10, 1));
// console.log(sum(range(1, 10, 1)));

// // //END Range and sum

// // reverse array
// function reverseArr() {  //Первая функция принимате параметры, создает из них массив и разворачивает его.
//     var arr = [];
//     for (var i = arguments.length - 1 , j = 0; i >= j; i--){ //От количества аргуметов до 0 
//         arr.push(arguments[i]);
//     }
//     return arr;
// }
// console.log(reverseArr('1','2','5'));

// function reverseArr2(arr) {     // Функция принимает массив, и затем реверсирует его без использования метода reverse(), а при помощи второго массива.
//     var arr2 = [];
//     for (var i = arr.length - 1 , j = 0; i >= j; i--){
//         arr2.push(arr[i]);      // В новый массив забиваются значения из первого, в обратном порядке
//     }
//     return arr2;
// }
// var array = ['1', '2', '3', '4'];
// console.log(reverseArr2(array));

//reverse array END
//Lists 


// function arrayToList() {            //Превращает значения из параметров в список
//     if (arguments.length == 0) {
//         return "This is so bad";
//     } else {
//         var list = {rest: null};
//         for (var i = arguments.length; i >= 0; i--){    //Способом перебора по аргументам, присваивает значения аргументов в список и спускается ниже по списку. 
//                 list.value = arguments[i];
//                 list = {rest: list};     
//         }
//         list = list.rest;
//         return list;
//     }
// }

// function listToArray(list) {        // Трансформирует список в массив и возвращает его 
//     if (list.rest == null){
//         return "Is clear";
//     }
//     var arr = [];
//     while(list.rest != null){
//         arr.push(list.value);
//         list = list.rest;
//     }
//     return arr;
// }

// function prepend(elem, list) { // Добавляет элемент из параметра в начало принятого списка. 
//     list.value =  elem;         // Сдвигает "голову" списка и добавляет новый элемент
//     list = {rest :list};
//     list = list.rest;
//     return list;
// }
// var temp = 1;
// function nth(element, list) {       //Принимает параметр и список. Выводит, на какой позиции в списке находится заданный параметр.
//     if (list.rest == null){
//         return undefined;           //Если не удалось найти элемент из параметра - возвращает undefined 
//     } else if (element == list.value){
//         return temp;
//     } else {
//         temp++;
//         return nth(element, list.rest);
//     }
// }
// console.log(nth(11, arrayToList(10, 1000, "Hello")));

// Lists END 

// Functions
// function greaterThan(n) {
//     return function(m) { return m > n; };
// }
// var greaterThan10 = greaterThan(12);
// console.log(greaterThan10(11)); //False 

// function noisy(f) {
//     return function (arg) {
//         console.log("calling with", arg);
//         var val = f(arg);
//         console.log("called with", arg, "-got", val);
//         return val;
//     };
// }

// noisy(Boolean)(""); // false

// forEach

// var even = 0;
// var odd = 0;
// var arr = [1, 12, 24, 532, 223, 3332, 2, 5532, 400031];

// arr.forEach(element => {
//     if (element % 2 == 0){
//         even++;
//     } else{
//         odd++;
//     }
// });

// console.log("Even numbers = " + even + "    " + "Odd numbers = " + odd);

//Filter

// var arr = [1, 3, 56, 342, 647, 236, 0, 2];

// var arrEvens = arr.filter(function (num) {
//    if (num % 2 == 0){
//        return num;
//    } 
// });

// console.log(arrEvens);

//MAP
// var bench = [1, 2, 3, 4, 6];
// console.log(benchReverse = bench.map(function(item, i){
//     return bench[bench.length - i -1];
// }));

//Reduse

// var arr = [1, 2, 3, 4, 5]
// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 15

// //Closures/ Замыкания
// var c = 5
// const addX = x => n => n + x 
// const addThree = addX(3)
// var d = addThree(c)
// console.log('example partial application', d) // 8 

//Concat and reduce

// var arrays = [[1, 2, 3], [4, 5], [6]];
// const reducer = (prev, cur) => prev.concat(cur);
// console.log(arrays.reduce(reducer));

// EVERY/SOME

// let arr = [2, 3, NaN];
// function istNaN(elem) {
//     return isNaN(elem); //Эта программа показывает работу every and some проверкой на NaN
// }

// console.log(arr.every(istNaN));
// console.log(arr.some(istNaN));

//classes and prototypes

// function Human(name, age) {
//     this.age = age;
//     this.name = name;
// }

// Human.prototype.speak = function (line, line2) { //Create prototype
//     console.log(line + this.name + line2 + this.age);
// }

// let people = [new Human("Andrew", 24), new Human("Lara", 12), new Human("Dave", 25)];
// people[2].speak("My name is ", " and i`m ");

// function man(type) {
//     this.type = type;
// }
// man.prototype.teeth = "Clear";
// let Stas =  new man("black");
// Stas.teeth = "Not Clear";
// alert(Stas.teeth);
// alert(man.prototype.teeth);
// let Artem = new man ("asian");
// alert(Artem.teeth);
// Перегрузка свойств

let Human = function (name, age, height, weight) {
    this.age = age;
    this.name = name;
    this.height = height;
    this.weight = weight;
}

Human.prototype.inf = function () {
    console.log("My name is - " + this.name + "\nI am " + this.age + " old\nMy height - "+ this.height + " sm\nMy weight - " + this.weight + " kg.");
}
let arr = [];
arr.push(new Human("Vlid", 23, 190, 80));
arr[0].inf(); // Classes trying
// Functions END