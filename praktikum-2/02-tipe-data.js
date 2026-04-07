let namaMahasiswa ='Azhari Fauzi';
let prodi ="Teknik Informatika";

let perkenalan = 'Halo! Nama saya ${namaMahasiswa} dari ${prodi}.';
console.log(perkenalan);
console.log('Panjang nama:', namaMahasiswa.length);

let nilaiUjian = 87;
let ipk = 3.75;
let suhuKulkas = -5;

console.log('Nilai Ujian :', nilaiUjian);
console.log('IPK :', ipk);
console.log('Suhu Kulkas :', suhuKulkas);

let sudahLogin = true;
let sudahLulus = false;
console.log('Sudah login :', sudahLogin);
console.log('Sudah lulus :', sudahLulus);

// --- 4. NULL (nilai kosong yang disengaja) ---
let fotoProfil = null; 
console.log('Foto profil:', fotoProfil);

// --- 5. UNDEFINED (belum diberi nilai) ---
let nomorTelepon;
console.log('No. Telepon:', nomorTelepon);

// --- Mengecek tipe data dengan typeof ---
console.log('--- Tipe Data ---');
console.log('namaMahasiswa :', typeof namaMahasiswa); // string
console.log('nilaiUjian :', typeof nilaiUjian); // number
console.log('sudahLogin :', typeof sudahLogin); // boolean
console.log('fotoProfil :', typeof fotoProfil); // object <- keanehan JS!
console.log('nomorTelepon :', typeof nomorTelepon); // undefined
