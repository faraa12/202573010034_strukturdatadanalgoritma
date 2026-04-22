class Mahasiswa{
    constructor(nama, nim, jurusan){
        this.nama  =nama;
        this.nim   =nim;
        this.jurusan =jurusan;
        this.nilai =[];
    }
    tambahNilai(nilai){
        this.nilai.push(nilai);
    }
    hitungRataRata(){
        if (this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return(total / this.nilai.length).toFixed(2);
    }
    getInfo(){
        return `[${this.nim}] ${this.jurusan} - ${this.jurusan} | IPK : ${this.hitungRataRata()}`;
    }
}

const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);

console.log('=== Data Mahasiswa===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

class Lingkaran{
    constructor(jariJari){
        this._jariJari = jariJari;
    }
    get jariJari(){return this._jariJari; }
    get luas(){return(Math.PI * this._jariJari).toFixed(2); }
    get keliling(){return(2 * Math.PI *this._jariJari).toFixed(2); }

    set jariJari(nilai){
        if (nilai <= 0) throw new Error('Jari-jari harus positif!');
        this._jariJari = nilai;
    }
}

console.log('\n=== Getter & Settar');
const l = new Lingkaran(7);
console.log('Jari-jari:', l.jariJari);
console.log('Luas  :', l.luas);
console.log('Keliling  :', l.keliling);
l.jariJari = 10; 
console.log('Setelah diubah - Luas:', l.luas);