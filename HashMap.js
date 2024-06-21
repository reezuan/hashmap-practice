import { LinkedList } from "./LinkedList.js";

class HashMap {

    constructor(capacity) {
        this._buckets = Array.from({length: capacity}, () => new LinkedList());
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

    
}