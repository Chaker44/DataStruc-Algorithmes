// Google Question 
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2 



// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1 

// Given an arry = [2,3,4,5]
// It should return undefined 
 function _hash(key){
    let hash = 0 ; 
    for (let i=0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i)% this.data.length ; 
    }
    return hash;
}


function returnFirstRecurElem(array){

   let map = {}; 
   for (let i=0; i < array.length; i++){
    if(map[array[i]] !== undefined){
        return array[i];
    }
    else{
        map[array[i]] = i
    }
   }
   return undefined;
}