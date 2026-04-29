//Fungsi A
// // Versi O(n²)
// Alasan: nested loop (setiap elemen arr1 dibandingkan ke arr2)
function intersectionOn2(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!result.includes(arr1[i])) {
                    result.push(arr1[i]);
                }
            }
        }
    }

    return result;
}
// Time: O(n²), Space: O(n)


// Versi O(n) menggunakan Set
// Alasan: akses Set O(1), hanya 1 loop utama
function intersectionOn(arr1, arr2) {
    let set2 = new Set(arr2);
    let result = new Set();

    for (let item of arr1) {
        if (set2.has(item)) {
            result.add(item);
        }
    }

    return [...result];
}
// Time: O(n), Space: O(n)


//Fungsi B
function groupAnagram(arr) {
    let map = {};

    for (let word of arr) {
        let sorted = word.split('').sort().join('');

        if (!map[sorted]) {
            map[sorted] = [];
        }

        map[sorted].push(word);
    }

    return Object.values(map);
}
// Time: O(n * k log k)
// n = jumlah kata, k = panjang kata
// Space: O(n)

//Fungsi C
// Versi O(n³)
// Alasan: triple nested loop
function threeSumOn3(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    return true;
                }
            }
        }
    }

    return false;
}
// Time: O(n³), Space: O(1)


// Versi O(n²)
// Alasan: gunakan Set untuk cek pasangan
function threeSumOn2(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let set = new Set();

        for (let j = i + 1; j < n; j++) {
            let needed = target - arr[i] - arr[j];

            if (set.has(needed)) {
                return true;
            }

            set.add(arr[j]);
        }
    }

    return false;
}
// Time: O(n²), Space: O(n)

function hitungKompleksitas(n, fn, ...args) {
    const start = Date.now();

    const result = fn(...args);

    const end = Date.now();

    console.log("Hasil:", result);
    console.log(`Waktu eksekusi: ${end - start} ms\n`);
}


console.log("=== Fungsi A ===");
hitungKompleksitas(0, intersectionOn2, [1,2,3,4], [3,4,5]);
hitungKompleksitas(0, intersectionOn, [1,2,3,4], [3,4,5]);

console.log("=== Fungsi B ===");
hitungKompleksitas(0, groupAnagram, ['eat','tea','tan','ate','nat','bat']);

console.log("=== Fungsi C ===");
hitungKompleksitas(0, threeSumOn3, [1,2,3,4,5], 9);
hitungKompleksitas(0, threeSumOn2, [1,2,3,4,5], 9);