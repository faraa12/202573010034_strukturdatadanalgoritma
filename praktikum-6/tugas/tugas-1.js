class Node {
  constructor(data) {
    this.data = data;
    this.next = null; 
    this.prev = null; 
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.length = 0;
  }
  // -------------------------------------------------------
  // append(data) — tambah di akhir
  // Big O: O(1) karena ada pointer tail
  // Bukti: kita langsung akses this.tail tanpa traversal
  // -------------------------------------------------------
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;  
      this.tail.next = node;  
      this.tail = node;        
    }
    this.length++;
    return this; 
  }
  // -------------------------------------------------------
  // prepend(data) — tambah di awal
  // Big O: O(1)
  // -------------------------------------------------------
  prepend(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;   
      this.head.prev = node;   
      this.head = node;        
    }
    this.length++;
    return this;
  }

  // -------------------------------------------------------
  // insertAt(index, data) — sisip pada posisi tertentu
  // Big O: O(n) — perlu traversal ke index
  // -------------------------------------------------------
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log(`  insertAt: index ${index} di luar batas (0–${this.length})`);
      return this;
    }
    if (index === 0) return this.prepend(data);
    if (index === this.length) return this.append(data);

    const node = new Node(data);
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    
    const prev = current.prev;
    node.next = current;
    node.prev = prev;
    prev.next = node;
    current.prev = node;
    this.length++;
    return this;
  }
  // -------------------------------------------------------
  // delete(data) — hapus node pertama yang nilainya = data
  // Big O: O(n) — perlu traversal untuk mencari
  // -------------------------------------------------------
  delete(data) {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = current.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.length--;
        return current.data;
      }
      current = current.next;
    }
    return null; 
  }

  // -------------------------------------------------------
  // reverse() — balik urutan linked list in-place
  // Big O: O(n)
  // -------------------------------------------------------
  reverse() {
    if (!this.head || this.length === 1) return this;

    let current = this.head;
    while (current) {
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp; 
    }
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  // -------------------------------------------------------
  // print() — cetak dari depan
  // Big O: O(n)
  // -------------------------------------------------------
  print() {
    const items = [];
    let current = this.head;
    while (current) {
      items.push(current.data);
      current = current.next;
    }
    console.log("  ", items.join(" ↔ ") || "(kosong)");
    return this;
  }

  // -------------------------------------------------------
  // printReverse() — cetak dari belakang (pakai pointer tail)
  // Big O: O(n)
  // -------------------------------------------------------
  printReverse() {
    const items = [];
    let current = this.tail;
    while (current) {
      items.push(current.data);
      current = current.prev;
    }
    console.log("  ", items.join(" ↔ ") || "(kosong)");
    return this;
  }

  size() {
    return this.length;
  }
}

const dll = new DoublyLinkedList();

console.log("\n=== Append ===");
dll.append(10).append(20).append(30);
dll.print();      

console.log("\n=== Prepend ===");
dll.prepend(5);
dll.print();

console.log("\n===  Insert 15 di index 2:");
dll.insertAt(2, 15);
dll.print();

console.log("\n=== Delete(15) ===");
dll.delete(15);
dll.print();

console.log("\n=== Delete (5) — hapus head ===");
dll.delete(5);
dll.print();

console.log("\n=== Delete (30) — hapus tail ===");
dll.delete(30);
dll.print();

console.log("\n=== append(40), append(50), lalu reverse() ====");
dll.append(40).append(50);
console.log("  Sebelum reverse:");
dll.print();
console.log("  Setelah reverse:");
dll.printReverse();

console.log(`\nUkuran akhir: ${dll.size()}`);

console.log("\n=== Bukti append O(1) ===");
console.log("  Tanpa pointer tail, append harus traversal O(n).");
console.log("  Dengan this.tail, kita langsung: this.tail.next = node; this.tail = node;");
console.log("  Tidak ada loop → O(1) terbukti.");

