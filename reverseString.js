str = "chaker"
function flip(item1, item2) {
    aux =item1 ; 
    item1 = item2 ; 
    item2 = aux ; 

}
function reverseString(str){
   newArray = str.split("");
   firstIndex = 0 ;
   lastIndex = str.length - 1 ;
   while(lastIndex - firstIndex != 0){
    aux = newArray[firstIndex]; 
    newArray[firstIndex] = newArray[lastIndex];
    newArray[lastIndex] = aux ; 
    firstIndex++ ; 
    lastIndex-- ;

   }
    return newArray.join("") ;
    
}
function reverse2 (str){
    return str.split('').reverse().join('')
}

console.log(reverse2(str));