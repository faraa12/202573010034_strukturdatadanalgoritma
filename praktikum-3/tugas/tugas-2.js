function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1; // base case
  return basis * pangkat(basis, eksponen - 1);
}


function balikString(str) {
  if (str.length <= 1) return str; // base case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}


function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}


console.log("=== Uji Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`);
console.log(`5^2 = ${pangkat(5, 2)}`);
console.log(`10^0 = ${pangkat(10, 0)}`);

console.log("\n=== Uji Balik String ===");
console.log(`"halo" -> "${balikString("halo")}"`);
console.log(`"javascript" -> "${balikString("javascript")}"`);

console.log("\n=== Uji Palindrom ===");
const kata = ["katak", "civic", "level", "halo", "dunia", "kasur rusak"];

kata.forEach(k => {
  console.log(`${k} -> ${cekPalindrom(k) ? "Palindrom" : "Bukan Palindrom"}`);
});