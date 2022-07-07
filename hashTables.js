// let user = { 
//     age : '54',
//     name : 'Kylie' ,
//     magic : true , 
//     scream: function(){
//         console.log('ahhhhhhhhh!')
//     }
// }
// user.age //o(1)
// user.spell = 'abra kadabra'; //O(1)
class HashTable { 
    constructor (size){
        
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0 ; 
        for (let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i)% this.data.length ; 
        }
        return hash;
    }
    set(key, value){
        let address = this._hash(key); 
        if(!this.data[address]){
            this.data[address] = [] 
            
        }
        this.data[address].push([key,value]);
        console.log(this.data);
       
    }
    get(key){
        let address = this._hash(key);
        const currentBacket = this.data[address]
        if(currentBacket){
            for(let i = 0; i < currentBacket.length; i++){
                if(currentBacket[i][0] === key){
                    return currentBacket[i][1];
                }
            }
        }
        return undefined ;
    }
    keys(){
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray ;
    }

   
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.set('apples',54);
myHashTable.set('oranges',22);
myHashTable.set('tomatos',33);
console.log(myHashTable.get('grapes')); 
console.log(myHashTable.keys());