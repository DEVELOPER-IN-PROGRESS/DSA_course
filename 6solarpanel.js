/*
Write a function solution(area) that takes as its input a single unit of measure representing the total
area of solar panels you have (between 1 and 1000000 inclusive) and returns a list of the areas of
the largest squares you could make out of those panels, starting with the largest squares first. So,
following the example above, solution (12) would return [9, 1, 1, 1].
*/
function solarPanelArray(area){
    let panels = [];
    var i = area ;
    let currentArea = area;
    for(  ;i>0;i--){
        if(i==3){
            panels.push(1);
            panels.push(1);
            panels.push(1);
            break;
        }

      if(Number.isInteger(Math.sqrt(i))){
          panels.push(i);
          i = currentArea -i ;
          currentArea = i ;
          i++ ;
      }


   }
   return panels;
}

solarPanelArray(15324);
solarPanelArray(12);