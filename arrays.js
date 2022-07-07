const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage  
// push 
strings.push('e'); //o(1)

// pop 
// strings.pop();
// strings.pop();
// unshift 
// strings.unshift("x"); // o(n)

// console.log(strings);

// C++ 

class MyArray {
        constructor(){
            this.length = 0 ; 
            this.data = {} ;
        }
        get(index){
            return this.data[index];
        }
        push(item) {
            this.data[this.length] = item ; 
            this.length++;
            return this.length ;
        }
        pop(){
            const lastItem = this.data[this.length-1];
            delete this.data[this.length-1];
            this.length--; 
            return lastItem ; 
        }
        delete(index){
            const item = this.data[index]; 
            this.shiftItems(index);
        }
        shiftItems(index){
            for (let i = index; i < this.length -1; i++)
                this.data[i] = this.data[i+1] ; 
            delete this.data[this.length-1];   
            this.length--;                
        }
    }



const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(1);
console.log(newArray);