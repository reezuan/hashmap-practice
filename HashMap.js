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
}