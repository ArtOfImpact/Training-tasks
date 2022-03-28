// #### Task 1 💻

// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 

// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

// function sumOfNumbers(a){
//     let sum = 0;
//     for (let i = 0; i <= a; i += 1){
//         sum += i;
//     }
//     return sum;
// }

// alert(sumOfNumbers(23))

// #### Task 2 💻

// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.


// function calcOverpayment (a) {
//     let annualRate = 0.17;
//     let numberOfYears = 5;
//     let col = a * annualRate * numberOfYears;
//     return col;
// }

// alert(calcOverpayment(2000))

// #### Task 3 💻

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

// Решение 

// function showText(text = 'Машина', a = 2, b = 4){
//     let str = text.substring(a,b)
//     return str;
// }
// console.log(showText())

// #### Task 4 💻

// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// function calc (a){
//     let figures =  "" + a;
//     let sum = 0;
//     for (i = 0; i < figures.length; i += 1) {
//         sum += +figures[i];
//     }
//     return sum;
// }

// alert(calc(2332))

// #### Task 5 💻

// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

// ```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

//      Решение

// function calcGap (a,b){
//     let sum = 0;
//     while(a <= b){       
//         sum += a;  
//         a++;
//     }
//     return sum;
// }
// alert(calcGap())

// #### Task 6 💻

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

// let a = prompt('Введите число ')

// function fooboo (a){
//     if (a > 0){
//         foo();
//     } else {
//         boo()
//     }
//     function foo(){
//         console.log('foo')
//     }
//     function boo(){
//         console.log('boo')
//     }
// }
// console.log(fooboo(-2))

