const basket = ["apples", "grapes", "pears"];

const obj1 = {a: true}; 
const obj2 = obj1;

// let myLinkedList = {
//     head: {
//         value: 10  ,
//         next: {
//             value: 5, 
//             next: {
//                 value:16,
//                 next:null
//             }
//         }
//     }
// }
class Node { 
    constructor(value){
        this.value = value;
        this.next= null;
        this.prev = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev : null
        };
        this.tail = this.head;
        this.length= 1 ;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this ; 
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head ; 
        this.head.prev = newNode ;
        this.head = newNode ;
        
        this.length++;
        return this;
    }
    insert(index, value){
        if(index >= this.length-1){
            this.append(value);
        }
        else if(index === 0) {
            this.prepend(value);
        }
        else{
            let currentNode = this.head;
            for(let i = 0; i < index-1 ;i++)
                currentNode= currentNode.next ;
            let nodeToInsert = new Node(value);
            nodeToInsert.next = currentNode.next ;
            currentNode.next = nodeToInsert;
            this.length++;
        }
    }
    printLinkedList(){
        const array = []; 
        console.log(this.length);
        let currentNode = this.head ; 
        while (currentNode !== null) {
            array.push(currentNode); 
            currentNode = currentNode.next;
        }
        return array;
    }
    remove(index){
       if(index===0){
        this.head = this.head.next ; 
       }
       else{
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next ;
            
        }
        let nodeToDelete = currentNode.next ;
        currentNode.next = nodeToDelete.next ;
        this.length--; 
       }

        
        
    }
}
let myLinkedList = new LinkedList(190);
myLinkedList.append(10);
myLinkedList.append(11);
myLinkedList.prepend(9);
console.log(myLinkedList.printLinkedList());