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

// reverse array END
// Lists 


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

// Filter

// var arr = [1, 3, 56, 342, 647, 236, 0, 2];

// var arrEvens = arr.filter(function (num) {
//    if (num % 2 == 0){
//        return num;
//    } 
// });

// console.log(arrEvens);

// MAP
// var bench = [1, 2, 3, 4, 6];
// console.log(benchReverse = bench.map(function(item, i){
//     return bench[bench.length - i -1];
// }));

// Reduse

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

// Concat and reduce

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

// classes and prototypes

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
// Classes trying
// let Human = function (name, age, height, weight) {
//     this.age = age;
//     this.name = name;
//     this.height = height;
//     this.weight = weight;
// }

// Human.prototype.inf = function () {
//     console.log("My name is - " + this.name + "\nI am " + this.age + " old\nMy height - "+ this.height + " sm\nMy weight - " + this.weight + " kg.");
// }
// let arr = [];
// arr.push(new Human("Vlid", 23, 190, 80));
// arr[0].inf(); 
// Task Vector
// function Vector(x, y){
//     this.x = x;
//     this.y = y;
// }

// Vector.prototype.plus = function (vector) {
//     let X = this.x + vector.x;
//     let Y = this.y + vector.y;
//     return "Vector: x = " + X + "\nVector: y = " + Y;
// }

// Vector.prototype.minus = function (vector) {
//     let X = this.x - vector.x;
//     let Y = this.y - vector.y;
//     return "Vector: x = " + X + "\nVector: y = " + Y;
// }

// console.log(new Vector(1, 2).plus(new Vector(2 , 3)));
// console.log(new Vector(1, 2).minus(new Vector(2 , 3)));


// stretch cell

// function StrethCell(text, width, heigth) {
//     this.text = text;
//     this.width = width;
//     this.heigth = heigth;
// }

// StrethCell.prototype.minHeight = function () {
//     return this.heigth;
// }

// StrethCell.prototype.minWidth = function () {
//     return this.text.length;
// }

// StrethCell.prototype.draw = function(w, h){
//     let line = " ";
//     let line2 = "";
//     let arr = [];

//     for (let i = 0; i < h; i++) {
//         for (let j = 0; j < w; j++) {
//             if (i == 0) {
//                 arr.push(this.text);
//                 break;
//             }else {
//                 line2 += line;
//                 arr[i] = line2;
//             }
//         }
//         line2 = "";
//     }
//     return arr;
// }

// a = new StrethCell("Vlidich", 1, 3);
// console.log(a.draw(a.minWidth(), a.minHeight()));
// Программа высчитывает сколько нужно создать ячеек массива. Учитывает текст каоторый задан в начале и все ячейки будут такого же размера как и размер текста.


// function ArraySeq(arr){
//     this.arr = arr;
// }

// function RangeSeq(from, to) {
//     this.from = from;
//     this.to = to;
// }

// function logFive(Array) {
//     let j = 0;
//     if (Array.from != undefined && Array.to <= 5) {
//         for (let i = Array.from; i <= Array.to; i++) {
//             console.log(i);
//         }
//     } else if (Array.from != 0 && Array.to > 5){
//         for (let i = Array.from; i <= Array.to; i++) {
//             console.log(i);
//             j++;
//             if (j == 5) {
//                 break;
//             }
//         }
//     } else if (Array.arr[0] != undefined && Array.arr.length <=5) { 
//         for (let i = 0; i < Array.arr.length; i++){
//             console.log(Array.arr[i]);
//         }
//     } else if (Array.arr.length > 5){
//         for (let i = 0; i < 5; i++){
//             console.log(Array.arr[i]);
//         }
//     }
//      else{
//         return "So bad for you";
//     }
// }

// console.log(logFive(new RangeSeq (100 , 1000)));

// my own language

// function parseExpression(program) {
//     program = skipSpace(program);
//     var match, expr;
//     if (match = /^"([^"]*)"/.exec(program))
//         expr = {type: "value", value: match[1]};
//     else if (match = /^\d+\b/.exec(program))
//         expr = {type: "value", value: Number(match[0])};
//     else if (match = /^[^\s(),"]+/.exec(program))
//         expr = {type: "word", name: match[0]};
//     else
//         throw new SyntaxError("Неожиданный синтаксис: " + program);
//     return parseApply(expr, program.slice(match[0].length));    
// }

// function skipSpace(string) {
//     var first = string.search(/\S/);
//     if (first == -1) {
//         return "";
//     }
//     return string.slice(first);
// }

// function parseApply(expr, program) {
//     program = skipSpace(program);
//     if (program[0] != "("){
//         return {expr: expr, rest: program};
//     }
//     program = skipSpace(program.slice(1));
//     expr = {type: "apply", operator: expr, args: []};
//     while (program[0] != ")") {
//         var arg = parseExpression(program);
//         expr.args.push(arg.rest);
//         if (program[0] == ",") {
//             program = skipSpace(program.slice(1));
//         } else if (program[0] != ")") {
//             throw new SyntaxError("Ожидается ',' or ')'");        
//         }
//     }
//     return parseApply(expr, program.slice(1));
// }

// function parse(program) {
//     var result = parseExpression(program);
//     if (skipSpace(result.rest).length > 0){
//         throw new SyntaxError("Неожиданно текст после программы");
//     }
//     return result.expr;
// }

// console.log(parse("("+a, 10+")";
// DOM
// function buildTable(data) {
//     let tablet = document.createElement("table");
//     let str = "";
//     let h = 0;
//     let foo = data.length/3;
//     for (let j = 0; j < 3; j++){
//         str += "<tr>";
//         for (let i = 0; i < foo; i++){
//             str += "<td>"+ data[h] +"</td>";
//             h++;
//         }
//         str += "</tr>";
//     }
//     tablet.innerHTML = str;
//     return tablet;
// }
// let arr = ["Привет","Как дела","Беб","Лол", "Мама", "Папа", "Влад", "Валя", "Валaaas"];
// let parrentElem = document.body;

// parrentElem.appendChild(buildTable(arr));

// var arr = [1, 100];
// function getAvg(arr){
//     var sum = 0;
//     for (let i = arr[0]; i <= arr[1]; i++)
//     sum += i;
//     sum = sum / arr[1];
//     return sum;
// }
// console.log(getAvg(arr));

//task

alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function higths(stroke) {
    var arr = stroke.split(' ');
    var arr2 = [];
    var current= 0;
    var car = [];
    for (var i = 0; i < arr.length; i++){
        car = arr[i].split('');
        for (var j = 0; j < car.length; j++){
            for (var h = 0; h < alph.length; h++){
                if (car[j] === alph[h]) {
                    car[j] = h+1;
                }
            }
        }
        for (var k = 0; k < car.length; k++){
            current += car[k];
        }
            arr2.push(current);
            current = 0;
        
    }
    var temp = 0;
    for (var t = 0; t < arr2.length; t++){
        car[t] = arr2[t];
    }
    for (var g = 0; g < arr2.length; g++) {
        for (var m = arr2.length; m > 0; m--) {
            if (arr2[m] > arr2[m-1]) {
                temp = arr2[m-1];
                arr2[m-1] = arr2[m];
                arr2[m] = temp;
            }
        }
        
    }
    return arr[car.indexOf(arr2[0])];
    
    
}
console.log(higths("vala valb"));