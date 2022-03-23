/*
Given an array of integers, find the pair of adjacent elements that has the largest product and
return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3] , the output should be
solution(inputArray) = 21 .
7 and 3 produce the largest product
*/

let array = [3, 6, -2, -5, 7, 3];

let largest = function (array){
    if(array.length==0){
        alert('invalid size');
        return 0;
    }
    else if (array.length ==1 || array.length ==2 ){
        console.log('array size should be atleast 3')
    }
    else{
        let product = array[0]*array[1];
        let i = 0 ;
        for(i=1;i<array.length -1;i++){
            if(array[i]*array[i+1] > product){
                product = array[i]*array[i+1];
            }
        }

        return product ;
    }
} ;

largest(array);