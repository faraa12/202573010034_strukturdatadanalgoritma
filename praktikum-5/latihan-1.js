function fnA(n){
    return n*2;
}
// Big O: O(1) - Alasan: Hanya satu operasi aritmatika tunggal.

function fnB(n) {
     for (let i=0; i<n; i++){ 
         for (let j=0; j<n; j++){ 
            //console.log(i,j);
         }
     }
}
// Big O: O(n^2) - Alasan: Loop bersarang dua tingkat (n * n).

function fnC(n){
     for (let i=1; i<n; i*=2) {
        //console.log(i);
    }
}
// Big O: O(log n) 

function fnD(n){
    let arr = Array.from({ length: n }, (_, i) => i);

    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                //console.log(x, y, z);
            }); 
        });
    });
}
// Big O: O(n^3) - Alasan: Loop bersarang tiga tingkat (n * n * n).


function hitungKompleksitas(n, fn){
    const start = Date.now();
    fn(n);

    const end = Date.now();
    const waktu = end - start;

    console.log(`Waktu eksekusi untuk n=${n}: ${waktu} ms`);
}

const N = 1000;

hitungKompleksitas(N, fnA, "Fungsi A (O(1))");
hitungKompleksitas(N, fnB, "Fungsi B (O(n^2))");
hitungKompleksitas(N, fnC, "Fungsi C (O(log n))");
hitungKompleksitas(N, fnD, "Fungsi D (O(n^3))");