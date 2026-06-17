function subArrayJumlahK(arr, k) {
  const prefixCount = new Map();
  prefixCount.set(0, 1); 

  let currentSum = 0;
  let count = 0;

  for (const num of arr) {
    currentSum += num;

    if (prefixCount.has(currentSum - k)) {
      count += prefixCount.get(currentSum - k);
    }

    prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) + 1);
  }

  return count;
}

function subArrayJumlahK_Naive(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) count++;
    }
  }
  return count;
}


function karakterPertamaUnik(s) {
  const freq = new Map();

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }

  return -1;
}

function karakterPertamaUnik_Naive(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}


function topKFrequent(arr, k) {
  const freq = new Map();
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const buckets = new Array(arr.length + 1).fill(null).map(() => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

function topKFrequent_Naive(arr, k) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => {
    const countA = arr.filter(x => x === a).length; // O(n) per elemen
    const countB = arr.filter(x => x === b).length;
    return countB - countA;
  });
  return unique.slice(0, k);
}

console.log('Tugas 2 — Soal Klasik Hash Table');

console.log('━━━ 1. subArrayJumlahK ━━━');
const cases1 = [
  { arr: [1, 1, 1], k: 2, expected: 2 },
  { arr: [1, 2, 3], k: 3, expected: 2 },
  { arr: [1, -1, 0], k: 0, expected: 3 },
  { arr: [3, 4, 7, 2, -3, 1, 4, 2], k: 7, expected: 4 },
];

for (const { arr, k, expected } of cases1) {
  const result = subArrayJumlahK(arr, k);
  const naive  = subArrayJumlahK_Naive(arr, k);
  const status = result === expected ? '✓' : '✗';
  console.log(`${status} arr=${JSON.stringify(arr)}, k=${k}`);
  console.log(`  HashMap O(n):  ${result}  |  Naif O(n²): ${naive}  |  Expected: ${expected}`);
}

console.log('\n━━━ 2. karakterPertamaUnik ━━━');
const cases2 = [
  { s: 'leetcode',   expected: 0 },
  { s: 'loveleetcode', expected: 2 },
  { s: 'aabb',       expected: -1 },
  { s: 'dddccdbba',  expected: 8 },
  { s: 'z',          expected: 0 },
];

for (const { s, expected } of cases2) {
  const result = karakterPertamaUnik(s);
  const naive  = karakterPertamaUnik_Naive(s);
  const status = result === expected ? '✓' : '✗';
  console.log(`${status} "${s}"`);
  console.log(`  HashMap O(n): idx=${result}  |  Naif O(n²): idx=${naive}  |  Expected: ${expected}`);
}

console.log('\n━━━ 3. topKFrequent ━━━');
const cases3 = [
  { arr: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
  { arr: [1], k: 1, expected: [1] },
  { arr: [4, 1, -1, 2, -1, 2, 3], k: 2, expected: [-1, 2] },
];

for (const { arr, k, expected } of cases3) {
  const result = topKFrequent(arr, k).sort((a, b) => a - b);
  const naive  = topKFrequent_Naive(arr, k).sort((a, b) => a - b);
  const ok = JSON.stringify(result) === JSON.stringify(expected.sort((a,b)=>a-b));
  console.log(`${ok ? '✓' : '✗'} arr=${JSON.stringify(arr)}, k=${k}`);
  console.log(`  Bucket O(n):  ${JSON.stringify(result)}  |  Naif O(n²): ${JSON.stringify(naive)}  |  Expected: ${JSON.stringify(expected)}`);
}

