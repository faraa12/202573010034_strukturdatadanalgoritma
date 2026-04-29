// O(1)
function fn_O1(n) {
    return n + 1;
}

// O(n)
function fn_On(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

// O(n log n)
function fn_OnLogn(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }

    return count;
}

// O(n²)
function fn_On2(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }

    return count;
}

function benchmarkSemua(ukuranData) {
    for (let n of ukuranData) {
        console.log(`\n=== n = ${n} ===`);
        let start, end;

        // O(1)
        start = Date.now();
        fn_O1(n);
        end = Date.now();
        console.log(`O(1): ${end - start} ms`);

        // O(n)
        start = Date.now();
        fn_On(n);
        end = Date.now();
        console.log(`O(n): ${end - start} ms`);

        // O(n log n)
        start = Date.now();
        fn_OnLogn(n);
        end = Date.now();
        console.log(`O(n log n): ${end - start} ms`);

        // O(n²)
        start = Date.now();
        fn_On2(n);
        end = Date.now();
        console.log(`O(n²): ${end - start} ms`);
    }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);

/*
Hasil:
- O(1): waktu konstan (tidak berubah signifikan saat n bertambah)
- O(n): bertambah linear
- O(n log n): lebih cepat dari O(n²) tapi lebih lambat dari O(n)
- O(n²): meningkat sangat drastis saat n besar

Kesimpulan:
Pola pertumbuhan waktu eksekusi sesuai dengan teori Big-O.
Semakin tinggi kompleksitas, semakin cepat waktu eksekusi meningkat.
*/