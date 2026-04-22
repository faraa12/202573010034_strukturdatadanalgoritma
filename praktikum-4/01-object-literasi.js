const mahasiswa={
    nama    :'Budi Santoso',
    umur    : '20',
    jurusan :'Teknik Informatika',
    ipk     :3.75, 
    aktif   :true,
};

console.log('=== Akses Property ===');
console.log('Nama     :', mahasiswa.nama);
console.log('Jurusan  :', mahasiswa['jurusan']);

const keyYangDicari ='ipk';
console.log('IPK   :', mahasiswa[keyYangDicari]);

mahasiswa.email ='budi@email.com';
mahasiswa.umur = 21;

console.log('\nSetelah diubah :', mahasiswa);

const dosen ={
    nama :'Dr. Ahmad Fauzi',
    mataKuliah :'Struktur Data',
    pengalaman : 6,

    perkenalan(){
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    
    },
    statusSenior(){
        if (this.pengalaman >= 10){
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama}, adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi  Object ===');
for(const key in dosen){
    if (typeof dosen[key] !== 'function'){
        console.log(` ${key}: ${dosen[key]}`);
    }
}

console.log('Key  :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));

//Latihan
const buku = {
    judul: "Belajar JavaScript",
    pengarang: "Andi",
    tahunTerbit: 2022,
    harga: 100000,
    tersedia: true,

    info() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },

    diskon(persen) {
        return this.harga * (1 - persen / 100);
    }
};

console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

console.log("-------------------");

const koleksiBuku = [
    {
        judul: "JavaScript Dasar",
        pengarang: "Budi",
        tahunTerbit: 2021,
        harga: 90000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    },
    {
        judul: "Belajar HTML CSS",
        pengarang: "Siti",
        tahunTerbit: 2020,
        harga: 80000,
        tersedia: false,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    },
    {
        judul: "NodeJS Pemula",
        pengarang: "Ahmad",
        tahunTerbit: 2023,
        harga: 120000,
        tersedia: true,

        info() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    }
];

console.log("=== Semua Buku ===");

koleksiBuku.forEach(buku => {
    console.log(buku.info());
});

console.log("-------------------");

const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);

console.log("=== Buku Yang Tersedia ===");

bukuTersedia.forEach(buku => {
    console.log(buku.info());
});
