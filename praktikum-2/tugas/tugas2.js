const bb = 50;
const tb = 1.72;

console.log('Berat :', bb);
console.log('Tinggi :', tb);
ibm = bb / (tb *  tb);
console.log('IBM :', ibm.toFixed(2));

if (ibm < 18.5){
    console.log('Kategori : Kurus(Underweight)')
}else if(ibm >= 18.5 && ibm <= 24.9){
    console.log('Kategori : Normal(ideal)');
}else if(ibm >= 25.0 && ibm <= 29.9){
    console.log('Kategori : Kelebihan Berat Badan(Overweight)');
}else
    console.log('Kategori : Obesitas(Obese)');