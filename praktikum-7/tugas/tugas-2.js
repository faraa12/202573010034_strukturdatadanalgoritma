class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (!this.top) return null;
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
  }

  peek() {
    return this.top ? this.top.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class MinStack {
  constructor() {
    this.stackUtama = new Stack(); 
    this.stackMin = new Stack();   
  }

  /**
   * push(val) — O(1)
   * Jika val <= minimum saat ini, push juga ke stackMin
   */
  push(val) {
    this.stackUtama.push(val);

    if (this.stackMin.isEmpty() || val <= this.stackMin.peek()) {
      this.stackMin.push(val);
    }

    console.log(`push(${val})  → stack: [${this._stackToArray(this.stackUtama).join(', ')}]  | min: ${this.getMin()}`);
  }

  /**
   * pop() — O(1)
   * Jika nilai yang di-pop == minimum saat ini, pop juga dari stackMin
   */
  pop() {
    if (this.stackUtama.isEmpty()) {
      console.log('pop() → Stack kosong!');
      return null;
    }

    const val = this.stackUtama.pop();

    if (val === this.stackMin.peek()) {
      this.stackMin.pop();
    }

    const minNow = this.stackMin.isEmpty() ? 'N/A' : this.getMin();
    console.log(`pop()   → keluar: ${val}  | stack: [${this._stackToArray(this.stackUtama).join(', ')}]  | min: ${minNow}`);
    return val;
  }

  /**
   * getMin() — O(1)
   * Kembalikan elemen terkecil saat ini
   */
  getMin() {
    if (this.stackMin.isEmpty()) return null;
    return this.stackMin.peek();
  }

  // Helper: ubah stack ke array (top = kanan) untuk tampilan
  _stackToArray(stack) {
    const arr = [];
    let curr = stack.top;
    while (curr) {
      arr.unshift(curr.data);
      curr = curr.next;
    }
    return arr;
  }
}


console.log('==============================');
console.log('     UJI COBA MIN STACK');
console.log('==============================\n');

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log(`\ngetMin() = ${ms.getMin()}`); 
ms.pop();
console.log(`\ngetMin() = ${ms.getMin()}`); 
ms.pop();
console.log(`\ngetMin() = ${ms.getMin()}`); 

console.log('\n--- Verifikasi urutan dari soal ---');
console.log('push(5), push(3), push(7), push(2) → getMin()=2 ✔');
console.log('pop()                               → getMin()=3 ✔');
console.log('pop()                               → getMin()=3 ✔');

console.log('\n==============================');
console.log('  ANALISIS BIG O');
console.log('==============================');
console.log('push()   : O(1) — satu push ke stackUtama, paling banyak satu push ke stackMin');
console.log('pop()    : O(1) — satu pop dari stackUtama, paling banyak satu pop dari stackMin');
console.log('getMin() : O(1) — cukup lihat top dari stackMin, tanpa iterasi apapun');
