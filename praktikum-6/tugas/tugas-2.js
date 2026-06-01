class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function buatList(...nilai) {
  if (nilai.length === 0) return null;
  const head = new Node(nilai[0]);
  let current = head;
  for (let i = 1; i < nilai.length; i++) {
    current.next = new Node(nilai[i]);
    current = current.next;
  }
  return head;
}

function cetakList(head) {
  const items = [];
  let cur = head;
  while (cur) {
    items.push(cur.data);
    cur = cur.next;
  }
  return items.length ? "[" + items.join("→") + "]" : "(kosong)";
}

function palindromLL(head) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.data);
    cur = cur.next;
  }
  let kiri = 0;
  let kanan = arr.length - 1;
  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) return false;
    kiri++;
    kanan--;
  }
  return true;
}

function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    if (!fast) return head; 
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

function tengahLinkedList(head) {
  if (!head) return null;

  let slow = head; 
  let fast = head; 

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

console.log("\npalindromLL(head)");
console.log("-".repeat(40));

const kasusP = [
  { list: buatList(1, 2, 3, 2, 1), label: "[1→2→3→2→1]"},
  { list: buatList(1, 2, 2, 1),    label: "[1→2→2→1]"},
  { list: buatList(1, 2, 3, 4, 5), label: "[1→2→3→4→5]"},
  { list: buatList(7),             label: "[7]"},
  { list: buatList(1, 2),          label: "[1→2]"},
];

kasusP.forEach(({ list, label, expect }) => {
  const hasil = palindromLL(list);
  console.log(`palindromLL(${label}) → ${hasil} `);
});

console.log("\nhapusNDariAkhir(head, n)");
console.log("-".repeat(40));

const kasusH = [
  { list: buatList(1, 2, 3, 4, 5), n: 2, label: "[1→2→3→4→5]"},
  { list: buatList(1, 2, 3, 4, 5), n: 1, label: "[1→2→3→4→5]"},
  { list: buatList(1, 2, 3, 4, 5), n: 5, label: "[1→2→3→4→5]"},
  { list: buatList(1),             n: 1, label: "[1]"},
  { list: buatList(1, 2),          n: 2, label: "[1→2]"},
];

kasusH.forEach(({ list, n, label, expect }) => {
  const hasil = hapusNDariAkhir(list, n);
  const strHasil = cetakList(hasil);
  console.log(`hapusNDariAkhir(${label}, ${n}) → ${strHasil}`);
});

console.log("\n🎯 tengahLinkedList(head)");
console.log("-".repeat(40));

const kasusT = [
  { list: buatList(1, 2, 3, 4, 5), label: "[1→2→3→4→5]", expect: 3, note: "ganjil → tengah" },
  { list: buatList(1, 2, 3, 4),    label: "[1→2→3→4]",   expect: 3, note: "genap → tengah ke-2" },
  { list: buatList(1, 2, 3),       label: "[1→2→3]",     expect: 2, note: "ganjil" },
  { list: buatList(1, 2),          label: "[1→2]",       expect: 2, note: "genap → tengah ke-2" },
  { list: buatList(42),            label: "[42]",         expect: 42, note: "satu node" },
];

kasusT.forEach(({ list, label, expect, note }) => {
  const hasil = tengahLinkedList(list);
  const nilai = hasil ? hasil.data : null;
  console.log(`tengahLinkedList(${label}) → node(${nilai}) (expect: ${expect}) — ${note}`);
});
