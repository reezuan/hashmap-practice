class Node {
    constructor(key, value, hashCode, next) {
        this.key = key;
        this.value = value;
        this.hashCode = hashCode;
        this.next = next;
    }
}

export { Node }