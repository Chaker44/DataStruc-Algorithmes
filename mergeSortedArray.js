function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let j = 0 ;
    let i= 0 ;
    // check input arrays
    if (array1.length == 0)
        return array2 ; 
    if (array2.length == 0 )
        return array1 ; 
    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++ ;
        }
        else if (!array1Item || array1Item > array2Item) {
            mergedArray.push(array2Item);
            array2Item = array2[j] ;
            j++;
        }
        else {
            mergedArray.push(array1Item);
            mergedArray.push(array2Item); 
            i++; 
            j++; 
        }
    }
    return mergedArray ; 
}
console.log(mergeSortedArrays([4,6,30],[0,3,4]))