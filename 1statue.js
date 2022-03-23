/*

Justin got statues of different sizes as a present from CodeMaster for his birthday, each statue
having a non-negative integer size. Since he likes to make things perfect, he wants to arrange
them from smallest to largest so that each statue will be bigger than the previous one exactly
by 1 . He may need some additional statues to be able to accomplish that. Help him figure out
the minimum number of additional statues needed.
Example
For statues = [6, 2, 3, 8] , the output should be
solution(statues) = 3 .
Justin needs statues of sizes 4 , 5 and 7 .


*/
let statues = [6, 2, 3, 8];

let returnMissing = (statues) =>{
    if(statues.length==1){
        return statues[0]- 1 ;
    }
    else if(statues.length==2){
        return Math.abs(statues[0] -statues[1]) -1 ;
    }
    else {
        let i = 0 , min = statues[0] ,max =statues[0];
         for(i=1;i<statues.length ;i++){
             if (statues[i] < min){
                 min = statues[i] ;
             }
             else if (statues[i] > max){
                 max = statues[i];
             }
             else {
                 ;
             }
         }
         return max-min-statues.length +1;
    }
}

// returnMissing(statues);