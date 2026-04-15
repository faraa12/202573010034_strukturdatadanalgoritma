//1. Function tanpa parameter dan return value
function sapa(){
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();
sapa();

//2. Function tanpa parameter dan return value
function sapaNama(nama){
    console.log(`Halo, ${nama}! Selamat belajar`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(a, b){
    const hasil = a + b;
    return hasil;
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7,13));

function hitung(nilai, pengali = 2){
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5,3));

const pesanGlobal = 'Saya ada di mana saja';

function cekScope(){
    const pesanLokal = 'Saya hanya ada dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}
 cekScope();
 console.log(pesanGlobal);

 //latihan
function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}


function bagi(a, b) {
    if (b === 0) {
        console.log('Error: tidak bisa membagi dengan nol');
        return null;
    }
    return a / b;
}

function kalkulator(a, operator, b) {
    switch (operator) {
        case '+':
            return tambah(a, b); 
        case '-':
            return kurang(a, b);
        case '*':
            return kali(a, b);
        case '/':
            return bagi(a, b);
        default:
            return "Operator tidak valid";
    }
}


function tambah(a, b) {
    return a + b;
}
console.log("=== LATIHAN ===");
console.log("Hasil 10 + 5  :", kalkulator(10, '+', 5));
console.log("Hasil 10 - 5  :", kalkulator(10, '-', 5));
console.log("Hasil 10 * 5  :", kalkulator(10, '*', 5));
console.log("Hasil 10 / 5  :", kalkulator(10, '/', 5));
console.log("Hasil 10 / 0  :", kalkulator(10, '/', 0)); 