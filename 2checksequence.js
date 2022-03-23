/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
increasing sequence by removing no more than one element from the array.

*/
function sequenceCheck(sequence){
    let count = 0 , i= 0;
    for(i=0;i<sequence.length-1;i++){
        if(sequence[i]>sequence[i+1]){
            count++;
        }
        if(count==2){
            break;
        }
    }
return count>1 ? false : true;
}