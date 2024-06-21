import { Node } from "./Node.js";

class LinkedList {
    
    constructor() {
        this.listHead = null;
        this.listTail = null;
    }

    // Add a new node to the head of the list.
    prepend(value) {
        if (this.listHead === null) {
            this.listHead = new Node(value);
            this.listTail = this.listHead;
            return;
        } 
        
        // Set the new list head & make it point to the previous head.
        let previousHead = this.listHead;
        this.listHead = new Node(value);
        this.listHead.next = previousHead;

        // Set the new list tail.
        let currentNode = this.listHead;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        this.listTail = currentNode;
    }

    // Return the total number of nodes in the list.
    size() {
        let counter = 0;
        let currentNode = this.listHead;

        while (currentNode !== null) {
            counter += 1;
            currentNode = currentNode.next;
        }

        return counter;
    }

    // Returns true if the value is in the list, otherwise returns false.
    contains(value) {
        let currentNode = this.listHead;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            
            currentNode = currentNode.next;
        }

        return false;
    }

    // Returns the index of the node containing the value, or null if
    // not found.
    find(value) {
        let currentNode = this.listHead;
        let currentIndex = 0;

        // Return true if a match is found.
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            
            currentIndex += 1;
            currentNode = currentNode.next;
        }

        // Return null if the value isn't found.
        return null;
    }
}

export { LinkedList };