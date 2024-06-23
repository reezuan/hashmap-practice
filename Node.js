class Node {
    constructor(key, value, hashCode) {
        this.key = key;
        this.value = value;
        this.hashCode = hashCode;
        this.next = null;
    }
}

export { Node }