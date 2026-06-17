const TOMBSTONE = Symbol('TOMBSTONE'); 

class HashMapLinearProbing {
  constructor(initialCapacity = 8) {
    this.capacity = initialCapacity;
    this.size = 0;
    this.keys = new Array(this.capacity).fill(null);
    this.values = new Array(this.capacity).fill(null);
  }

  _hash(key) {
    let hash = 0;
    const str = String(key);
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }

  _loadFactor() {
    return this.size / this.capacity;
  }

  _resize() {
    const oldKeys = this.keys;
    const oldValues = this.values;

    this.capacity *= 2;
    this.size = 0;
    this.keys = new Array(this.capacity).fill(null);
    this.values = new Array(this.capacity).fill(null);

    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null && oldKeys[i] !== TOMBSTONE) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }

    console.log(`[Resize] Kapasitas baru: ${this.capacity}`);
  }

  set(key, value) {
    if (this._loadFactor() > 0.7) {
      this._resize();
    }

    let index = this._hash(key);
    let firstTombstone = -1;

    for (let i = 0; i < this.capacity; i++) {
      const probe = (index + i) % this.capacity;

      if (this.keys[probe] === TOMBSTONE) {
        if (firstTombstone === -1) firstTombstone = probe;
      } else if (this.keys[probe] === null) {
        const insertAt = firstTombstone !== -1 ? firstTombstone : probe;
        this.keys[insertAt] = key;
        this.values[insertAt] = value;
        this.size++;
        return;
      } else if (this.keys[probe] === key) {
        this.values[probe] = value;
        return;
      }
    }

    if (firstTombstone !== -1) {
      this.keys[firstTombstone] = key;
      this.values[firstTombstone] = value;
      this.size++;
    }
  }

  get(key) {
    let index = this._hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const probe = (index + i) % this.capacity;

      if (this.keys[probe] === null) return undefined; 
      if (this.keys[probe] === TOMBSTONE) continue;    
      if (this.keys[probe] === key) return this.values[probe];
    }

    return undefined;
  }

  delete(key) {
    let index = this._hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const probe = (index + i) % this.capacity;

      if (this.keys[probe] === null) return false; 
      if (this.keys[probe] === TOMBSTONE) continue;
      if (this.keys[probe] === key) {
        this.keys[probe] = TOMBSTONE; 
        this.values[probe] = null;
        this.size--;
        return true;
      }
    }

    return false;
  }

  
  has(key) {
    return this.get(key) !== undefined;
  }

  getDistribution() {
    let used = 0, tombstones = 0, empty = 0;
    let maxCluster = 0, currentCluster = 0;

    for (let i = 0; i < this.capacity; i++) {
      if (this.keys[i] === null) {
        empty++;
        maxCluster = Math.max(maxCluster, currentCluster);
        currentCluster = 0;
      } else if (this.keys[i] === TOMBSTONE) {
        tombstones++;
        currentCluster++;
      } else {
        used++;
        currentCluster++;
      }
    }

    return {
      capacity: this.capacity,
      size: this.size,
      loadFactor: (this.size / this.capacity).toFixed(2),
      usedSlots: used,
      tombstones,
      emptySlots: empty,
      maxClusterLength: maxCluster,
    };
  }

  print() {
    console.log('\n=== Hash Table (Linear Probing) ===');
    for (let i = 0; i < this.capacity; i++) {
      const k = this.keys[i];
      const v = this.values[i];
      if (k === null) console.log(`  [${i}] <empty>`);
      else if (k === TOMBSTONE) console.log(`  [${i}] <tombstone>`);
      else console.log(`  [${i}] ${k} => ${v}`);
    }
    console.log('===================================\n');
  }
}

console.log('Tugas 1 — Hash Table Linear Probing');


const map = new HashMapLinearProbing(8);

['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'].forEach((fruit, i) => {
  map.set(fruit, i + 1);
});

map.print();
console.log('Distribusi:', map.getDistribution());

console.log('\nGet "cherry":', map.get('cherry')); 
console.log('Get "mango":', map.get('mango'));     

console.log('\nDelete "banana":', map.delete('banana'));
console.log('Get "banana" setelah delete:', map.get('banana')); 
map.print();

console.log('\n--- Menambah elemen untuk trigger resize ---');
map.set('honeydew', 8);
map.set('kiwi', 9);
console.log('Distribusi setelah resize:', map.getDistribution());

class HashMapChaining {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.size = 0;
    this.buckets = Array.from({ length: capacity }, () => []);
  }
  _hash(key) {
    let h = 0;
    for (const c of String(key)) h = (h * 31 + c.charCodeAt(0)) % this.capacity;
    return h;
  }
  set(key, value) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];
    const found = bucket.find(([k]) => k === key);
    if (found) found[1] = value;
    else { bucket.push([key, value]); this.size++; }
  }
  get(key) {
    const bucket = this.buckets[this._hash(key)];
    return bucket.find(([k]) => k === key)?.[1];
  }
  getDistribution() {
    const lengths = this.buckets.map(b => b.length);
    return {
      capacity: this.capacity,
      size: this.size,
      loadFactor: (this.size / this.capacity).toFixed(2),
      maxBucketLength: Math.max(...lengths),
      emptyBuckets: lengths.filter(l => l === 0).length,
    };
  }
}

console.log('\n─── Perbandingan: Chaining vs Linear Probing ───');
const chaining = new HashMapChaining(8);
['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'].forEach((f, i) => {
  chaining.set(f, i + 1);
});

console.log('Chaining   :', chaining.getDistribution());
console.log('Lin.Probing:', new HashMapLinearProbing(8).getDistribution());

