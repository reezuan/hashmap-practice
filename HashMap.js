import { LinkedList } from "./LinkedList.js";

class HashMap {

    constructor(capacity, loadFactor) {
        this._buckets = Array.from({length: capacity}, () => new LinkedList());
        this._loadFactor = loadFactor;
        this._maxBuckets = Math.floor(capacity * loadFactor);
        this.size = 0;
    }

    #growBuckets() {
        let previousBuckets = this._buckets;
        let previousCapacity = this._buckets.length;
        
        this._buckets = Array.from({length: previousCapacity * 2}, () => new LinkedList());

        for (let i = 0; i < previousBuckets.length; i++) {
            this._buckets[i] = previousBuckets[i];
        }
    }
    
    // Takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this._buckets.length;
        }
        
        return hashCode;
    }

    // Takes a key and a value that is assigned to this key. If a key
    // already exists, then the old value is overwritten.
    set(key, value) {
        const hashCode = this.hash(key);

        if (this._buckets[hashCode].size() === 0 || !this._buckets[hashCode].contains(key)) {
            this._buckets[hashCode].prepend(key, value, hashCode);
        } else if (this._buckets[hashCode].contains(key)) {
            this._buckets[hashCode].update(key, value);
        }
    }

    // Takes a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    get(key) {
        const hashCode = this.hash(key);

        if (this._buckets[hashCode].contains(key)) {
            return this._buckets[hashCode].valueOf(key);
        } else {
            return null;
        }
    }

    // Takes a key as an argument and returns true or false based on
    // whether or not the key is in the hash map.
    has(key) {
        const hashCode = this.hash(key);

        return this._buckets[hashCode].contains(key);
    }

    // Takes a key as an argument. If the given key is in the hash map,
    // it should remove the entry with that key and return true. If the
    // key isn’t in the hash map, it should return false.
    remove(key) {
        const hashCode = this.hash(key);

        if (!this._buckets[hashCode].contains(key)) {
            return false;
        } else {
            this._buckets[hashCode].remove(key);
            return true;
        }
    }

    // Returns the number of stored keys in the hash map.
    length() {
        let totalKeys = 0;

        this._buckets.forEach(bucket => {
            totalKeys += bucket.size();
        });

        return totalKeys;
    }

    // Removes all entries in the hash map.
    clear() {
        this._buckets.forEach(bucket => {
            bucket.clear();
        });
    }

    // Returns an array containing all the keys inside the hash map.
    keys() {
        let keys = [];

        this._buckets.forEach(bucket => {
            let nodes = bucket.getNodes();
            nodes.forEach(node => {
                keys.push(node.key);
            });
        });

        return keys;
    }

    // Returns an array containing all the values.
    values() {
        let values = [];

        this._buckets.forEach(bucket => {
            let nodes = bucket.getNodes();
            nodes.forEach(node => {
                values.push(node.value);
            });
        });

        return values;
    }

    // Returns an array that contains each key-value pair.
    // Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        let pairs = [];

        this._buckets.forEach(bucket => {
            let nodes = bucket.getNodes();
            nodes.forEach(node => {
                pairs.push([node.key, node.value]);
            });
        });

        return pairs;
    }
}

export { HashMap }