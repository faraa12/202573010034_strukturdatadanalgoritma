class Node{
    constructor(data){
        this.data = data; 
        this.next = null;
    }
}

class Linkedll{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    prepend(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    removeHead(){
        if (!this.head) return null;
        const removed = this.head.next;
        this.length--;
        return removed;
    }

    peekHead(){
        return this.head? this.head.data : null;
    }

    getSize(){
        return this.length;
    }

    isEmpty(){
        return this.length === 0;
    }

    toArray(){
        const result = [];
        let current = this.head;
        while(current){
            result.push(current.data);
            current = current.next;
        }
        return this;
    }
}

class Stack{
    constructor(){
        this.list = new Linkedll();

    }

    push(data){
        this.list.prepend(data);
        console.log(`  push(${JSON.stringify(data)}) → stack: [${this.list.toArray()}]`);
    }
    
    pop() {
        if (this.isEmpty()) {
            console.log("  pop() → Stack kosong! Tidak ada yang bisa di-pop.");
            return null;
        }
        const removed = this._list.removeHead();
        console.log(`  pop() → ${JSON.stringify(removed)} | stack: [${this.list.toArray()}]`);
        return removed;
    }
    
    peek() {
        const top = this.list.peekHead();
        console.log(`  peek() → ${top !== null ? JSON.stringify(top) : "null (kosong)"}`);
        return top;
    }
    
    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.getSize();
    }
    
    print() {
        const arr = this.list.toArray();
        if (arr.length === 0) {
            console.log("  Stack: (kosong)");
        } else {
            console.log(`  Stack (top → bottom): [${arr.join(", ")}]`);
        }
    }
}

console.log("=".repeat(60));
console.log("   SIMULASI UNDO/REDO DENGAN STACK (LinkedList)");
console.log("=".repeat(60));

const aksi = [
  "Fara ",
  "belajar ",
  "Linked List "
];

const undoStack = new Stack();
const redoStack = new Stack();

console.log("\nMelakukan aksi:");
for (const a of aksi) {
  undoStack.push(a);
}

console.log("\nStatus setelah semua aksi:");
undoStack.print();
console.log(`  Ukuran stack: ${undoStack.size()}`);

// --- Undo beberapa kali ---
console.log("\nUndo 3 kali:");
for (let i = 0; i < 3; i++) {
  const undone = undoStack.pop();
  if (undone) {
    redoStack.push(undone); // simpan ke redo
  }
}

console.log("\nUndo Stack setelah 3x undo:");
undoStack.print();

console.log("\nRedo Stack (aksi yang di-undo):");
redoStack.print();

// --- Redo sekali ---
console.log("\nRedo 1 kali:");
const redone = redoStack.pop();
if (redone) {
  undoStack.push(redone);
}

console.log("\nUndo Stack setelah 1x redo:");
undoStack.print();

console.log("\nRingkasan:");
console.log(`  isEmpty (undoStack): ${undoStack.isEmpty()}`);
console.log(`  size    (undoStack): ${undoStack.size()}`);
console.log(`  peek    (undoStack):`);
undoStack.peek();