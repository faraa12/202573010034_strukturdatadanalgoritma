const dataMahasiswa = [
  { nama: "Anisa", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Clara", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fara", nilai: 95 }
];
function hitungStatistik(arrMahasiswa) {
  const total = arrMahasiswa.length;

  const hasil = arrMahasiswa.reduce(
    (acc, curr) => {
      acc.totalNilai += curr.nilai;
      if (curr.nilai > acc.tertinggi) acc.tertinggi = curr.nilai;
      if (curr.nilai < acc.terendah) acc.terendah = curr.nilai;
      return acc;
    },
    {
      totalNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity
    }
  );
  return {
    total,
    rataRata: hasil.totalNilai / total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah
  };
}
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade = "";

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return {
      ...mhs,
      grade
    };
  });
}

const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 75);
const denganGrade = tambahGrade(dataMahasiswa);

console.log("=== Statistik ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus ===");
lulus.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});

console.log("\n=== Data dengan Grade ===");
denganGrade.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});