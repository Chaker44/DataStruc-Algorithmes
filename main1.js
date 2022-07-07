// function funChallenge(input){
//     let a = 10; //O(1)
//     a = 50 + 3; //O(1) 

//     for(let i = 0; i < input.length; i++){ //O(n)
//         anotherFunction(); //O(n)
//         let stranger = true; //O(n)
//         a++;//O(n)
//     }
//     return a; //O(1)
// }
// const array = [1,2,3,4,5,6,7,8]
// funChallenge() // O(3+4n)

const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++){
//             console.log(array[i], array[j]);
//         }
        
//     }
// }
// logAllPairsOfArray(boxes);
// function boooo(n){
//     for (let i = 0; i < n.length; i++) {
//         console.log('boooo');
        
//     }
    
// }
// boooo([1, 2, 3, 4, 5]);
// function arrayOfHinTimes(n){
//     let hiArray = []; 
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi' ;
//         console.log(hiArray[i]);         
//     }
//     return hiArray ; 
// }
// arrayOfHinTimes(6);
const array = [{
    tweet : 'hi', 
    date: 2014},{
    tweet:'my',
    day: 2014}, {
    tweet:'teddy', 
    date: 2018}] // o(n^2)
array[0] ; //o(1)
array[array.length-1]; //o(1)
// Given 2 arrays, create a function that let's a user know 
// (true/false) whether these two arrays contain any common items 
// For Example : 
// const array1 =['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
//----------------------------------------------------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true.




// 2 parameters - arrays - no size limits 
// return (true/false)

function containCommonItem (array1, array2){
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]){
                return true ; 
            }
        }
    }
    return false ;
}

function containCommonItem2(arr1, arr2){
    // loop through first array and create object where
    // properties === items in the array 
    let map = {};
    for (let i = 0; i < arr1.length; i++){
        if (!map[i]) {
            const item = arr1[i];
            map[item] = true ;
        }
    }
    console.log(map)
    //loop through second array and check ifitem in second array
    // exists on created object 
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]){
           return true ; 
        }
        
    }
    return false ; 
    
}
containCommonItem2(array1, array2);