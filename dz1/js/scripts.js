//2

let a1= 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = + "123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;


console.log('');
console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

// 3
console.log ('');

let width = 10,
    height = 23,
    SPryam = width * height;
console.log('S прямоугольника = ', SPryam, 'см' );

// 4
    console.log ('');

let VCilindra = Math.PI * (a7 / 2) * (a7 / 2)  * 10;
    
console.log('V цилиндра', VCilindra, 'м.куб.');

    //задание 5
console.log('');

let r = 5;
    SKruga = r * r * Math.PI; 
    
console.log('S круга ', SKruga, 'см.кв.');

// 6
console.log('');

let aTrap = 5,
    bTrap = 7,
    hTrap = 10,
    STrap =0.5 * hTrap * (aTrap + bTrap);
   
console.log('S трапеции ', STrap, 'см.кв.');

// 7
console.log('');

let p = 10,
    S = 2000000,
    Years = 5,
    Pereplata =S * p /100 * 5;
    
console.log('Переплата', Pereplata, 'руб');

// 8
console.log('');

let a = 8,
    b = 3,
    x;
    
    x = (16 - a) / 2 + b;
console.log('x= ', x);
    x = (15 * b - a) / (6 - b);
console.log('x= ', x);
    x = 23780 / (2 + a + b);
console.log('x= ', x);