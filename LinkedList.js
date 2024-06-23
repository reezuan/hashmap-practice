import { Node } from "./Node.js";

class LinkedList {
    
    constructor() {
        this.listHead = null;
        this.listTail = null;
    }

    // Adds a new node to the head of the list.
    prepend(key, value, hashCode) {
        if (this.listHead === null) {
            this.listHead = new Node(key, value, hashCode, null);
            this.listTail = this.listHead;
            return;
        } 
        
        // Set the new list head & make it point to the previous head.
        let previousHead = this.listHead;
        this.listHead = new Node(key, value, hashCode, previousHead);

        // Set the new list tail.
        let currentNode = this.listHead;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        this.listTail = currentNode;
    }

    // Returns the total number of nodes in the list.
    size() {
        let counter = 0;
        let currentNode = this.listHead;

        while (currentNode !== null) {
            counter += 1;
            currentNode = currentNode.next;
        }

        return counter;
    }

    // Returns true if the key is in the list, otherwise returns false.
    contains(key) {
        let currentNode = this.listHead;

        while (currentNode !== null) {
            if (currentNode.key === key) {
                return true;
            }
            
            currentNode = currentNode.next;
        }

        return false;
    }

    // Returns the index of the node containing the key, or null if
    // not found.
    find(key) {
        let currentNode = this.listHead;
        let currentIndex = 0;

        // Return true if a match is found.
        while (currentNode !== null) {
            if (currentNode.key === key) {
                return currentIndex;
            }
            
            currentIndex += 1;
            currentNode = currentNode.next;
        }

        // Return null if the value isn't found.
        return null;
    }

    // Updates the value of a node containing the key.
    update(key, value) {
        let currentNode = this.listHead;

        while (currentNode.key !== key && currentNode !== null) {
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            return;
        } else {
            currentNode.value = value;
        }
    }

    // Returns the value of the node containing the key, or null if the
    // key isn't found.
    valueOf(key) {
        let currentNode = this.listHead;

        while (currentNode.key !== key && currentNode !== null) {
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            return null;
        } else {
            return currentNode.value;
        }
    }

    // Remove the node that contains the key from the list.
    remove(key) {
        let currentNode = this.listHead;
        let previousNode = null;

        while (currentNode.key !== key && currentNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // If the key isn't found, exit the function.
        if (currentNode === null) {
            return;
        }

        // If the key is found, check if it's the first value in the
        // list. If true, set the head & tail of the list to null. If
        // false, set the previous node to point to the next node.
        if (previousNode === null) {
            this.listHead = null;
            this.listTail = null;
        } else {
            previousNode.next = currentNode.next;
        }
    }

    // Clear all nodes from the list.
    clear() {
        this.listHead = null;
        this.listTail = null;
    }

    // Returns an array of all the nodes in the list.
    getNodes() {
        let currentNode = this.listHead;
        let nodes = [];

        while (currentNode !== null) {
            nodes.push(currentNode);
        }

        return nodes;
    }
}

export { LinkedList };