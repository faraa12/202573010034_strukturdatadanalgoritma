class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return null;
    const data = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return data;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.data);
      curr = curr.next;
    }
    return result;
  }
}

class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // 'darurat' atau 'biasa'
    this.waktuDaftar = new Date().toLocaleTimeString('id-ID');
  }

  toString() {
    return `[${this.prioritas.toUpperCase()}] ID:${this.id} - ${this.nama}`;
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  // Daftarkan pasien ke antrian sesuai prioritas
  daftar(pasien) {
    if (pasien.prioritas === 'darurat') {
      this.antrianDarurat.enqueue(pasien);
      console.log(`✅ Pasien DARURAT didaftarkan: ${pasien.nama}`);
    } else {
      this.antrianBiasa.enqueue(pasien);
      console.log(`✅ Pasien BIASA didaftarkan: ${pasien.nama}`);
    }
  }

  layani() {
    let pasien = null;

    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
      console.log(`🚨 Melayani pasien DARURAT: ${pasien.nama}`);
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
      console.log(`🟢 Melayani pasien BIASA: ${pasien.nama}`);
    } else {
      console.log('⚠️  Tidak ada pasien dalam antrian.');
    }

    return pasien;
  }

  tampilkanAntrian() {
    console.log('\n========== STATUS ANTRIAN RS ==========');

    const darurat = this.antrianDarurat.toArray();
    console.log(`🚨 Antrian Darurat (${darurat.length} pasien):`);
    if (darurat.length === 0) {
      console.log('   (kosong)');
    } else {
      darurat.forEach((p, i) => console.log(`   ${i + 1}. ${p.toString()}`));
    }

    const biasa = this.antrianBiasa.toArray();
    console.log(`🟢 Antrian Biasa (${biasa.length} pasien):`);
    if (biasa.length === 0) {
      console.log('   (kosong)');
    } else {
      biasa.forEach((p, i) => console.log(`   ${i + 1}. ${p.toString()}`));
    }

    console.log('========================================\n');
  }
}

// =====================
// SIMULASI
// =====================
console.log('======================================');
console.log('  SIMULASI SISTEM ANTRIAN RUMAH SAKIT');
console.log('======================================\n');

const rs = new AntrianRS();

// Data 10 pasien acak (mix darurat dan biasa)
const dataPasien = [
  new Pasien(1,  'Ahmad Fauzi',     'biasa'),
  new Pasien(2,  'Siti Rahayu',     'darurat'),
  new Pasien(3,  'Budi Santoso',    'biasa'),
  new Pasien(4,  'Dewi Lestari',    'darurat'),
  new Pasien(5,  'Eko Prasetyo',    'biasa'),
  new Pasien(6,  'Fatimah Zahra',   'darurat'),
  new Pasien(7,  'Gunawan Hadi',    'biasa'),
  new Pasien(8,  'Hana Pertiwi',    'biasa'),
  new Pasien(9,  'Irfan Maulana',   'darurat'),
  new Pasien(10, 'Joko Widodo',     'biasa'),
];


console.log('--- PENDAFTARAN PASIEN ---');
dataPasien.forEach(p => rs.daftar(p));


rs.tampilkanAntrian();

console.log('--- PELAYANAN PASIEN ---');
for (let i = 0; i < dataPasien.length; i++) {
  rs.layani();
}

rs.tampilkanAntrian();
