//1 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран

let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.lenght; i++) {
    console.log(a[i]);
}

//Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3

let b = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < b.length; i++) {
    if (b[i] > -10 && b[i] < -3) {
        console.log(b[i]);
    }
}

//Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

let c = [];
let result = 0;
for(let i = 23; i <= 57; i++) {
    c.push(i);
    console.log(i);
    result = result +i;
}
console.log(result);

let d = [];
let i = 23;
while (i <= 57) {
    d.push(i);
    console.log(i);
    i++;
}

//Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = ['10', '20', '30', '50', '235', '3000'];

for ( let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
        console.log(num);
    }
}

//Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let arr2 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

for(let i = 0; i < arr2.lenght; i++) {
if (arr2[i] == 'СБ' || arr2[i] == 'ВС') {
    console.log('%c' + arr2[i], 'font: bold 1/3em/1 Arial;');
} else {
    console.log(arr2[i]);
}

}

//Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length

let arr3 = [2, 10, 20, 50];

arr3.push(5);
console.log(arr3[arr3.length -1]);

//Запросите у пользователя по очереди числовые значения при помощи prompt и cохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.


let r = prompt('Введите число');
let arr4 = [];

while (r !== '') {
  arr4.push(r);
  r =prompt('Введите число');
}

console.log(arr4);
arr4.sort(function (a, b){
    return a - b;
});
console.log(arr4);


//Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse


let arr5 = [12, false, 'Текст', 4, 2, -5, 0];
let y = arr5.length -1;
while(y >= 0) {
    console.log(arr5[y]);
    y--;
}

let arr6 = [];
let j = arr6.length -1;
while (k >= 0) {
    arr6.push(arr6[j]);
    j--;
}
console.log(arr6);

arr6.reverse();
console.log(arr6);


//Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

let v = [5, 9, 21, , , 9, 78, , , , 6];
for (let i = 0; i < v.lenght; i++) {
    v.length = v[0];
    console.log(v[0]);
}



