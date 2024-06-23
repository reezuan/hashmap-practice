import { LinkedList } from "./LinkedList.js";

class HashMap {

    constructor(capacity) {
        this._buckets = Array.from({length: capacity}, () => new LinkedList());
        this._loadFactor = 0.75;
        this._maxBuckets = capacity * this._loadFactor;
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
        const hashCode = hash(key);

        if (this._buckets[hashCode].size() === 0 || !this._buckets[hashCode].contains(key)) {
            this._buckets[hashCode].prepend(key, value, hashCode);
        } else if (this._buckets[hashCode].contains(key)) {
            this._buckets[hashCode].update(key, value);
        }
    }

    // Takes a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    get(key) {
        const hashCode = hash(key);

        if (this._buckets[hashCode].contains(key)) {
            return this._buckets[hashCode].valueOf(key);
        } else {
            return null;
        }
    }

    // Takes a key as an argument and returns true or false based on
    // whether or not the key is in the hash map.
    has(key) {
        const hashCode = hash(key);

        return this._buckets[hashCode].contains(key);
    }

    // Takes a key as an argument. If the given key is in the hash map,
    // it should remove the entry with that key and return true. If the
    // key isn’t in the hash map, it should return false.
    remove(key) {
        const hashCode = hash(key);

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
}