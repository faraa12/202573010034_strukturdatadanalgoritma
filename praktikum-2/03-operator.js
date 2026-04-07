let a = 17;
let b = 5;
console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); 
console.log(`${a} - ${b} = ${a - b}`); 
console.log(`${a} * ${b} = ${a * b}`); 
console.log(`${a} / ${b} = ${a / b}`); 
console.log(`${a} % ${b} = ${a % b}`); 
console.log(`${a} ** ${b} = ${a ** b}`); 

console.log('=== Perbandingan ===');
console.log('10 > 5 :', 10 > 5); 
console.log('10 < 5 :', 10 < 5); 
console.log('10 >= 10 :', 10 >= 10); 
console.log('10 <= 9 :', 10 <= 9); 

console.log('--- Perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); 
console.log('5 === "5" :', 5 === '5'); 
console.log('5 !== 3 :', 5 !== 3); 

console.log('\n=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

console.log('Makan && Uang :', sudahMakan && punyaUang); 

console.log('Makan || Uang :', sudahMakan || punyaUang); 

console.log('!sudahMakan :', !sudahMakan); 
console.log('!punyaUang :', !punyaUang);

//latihan 
const panjang = 12;
const lebar = 8;

const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

console.log(`\nLuas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang: ${keliling}`);

const apakahLebihBesarDari100 = luas > 100;
console.log(`Apakah luas lebih besar dari 100? ${apakahLebihBesarDari100}`);