function setZeroMatrix(mat,R,C)
    {
        let row=new Array(R);
        let col = new Array(C);
        
        for (i = 0; i < R; i++){ 
            row[i] = 0; }
         
        for (i = 0; i < C; i++){
            col[i] = 0;    
        }
        
        for (i = 0; i < R; i++){
            for (j = 0; j < C; j++){
                if (mat[i][j] == 0){
                    row[i] = 1;
                    col[j] = 1;
                }
            }
        }
         
        for (i = 0; i < R; i++){
            for (j = 0; j < C; j++){
                if ( row[i] == 1 || col[j] == 1 ){
                    mat[i][j] = 0;
                }
            }
        }
    }
     
    function printMatrix(mat,R,C)
    {
        let i, j;
        for (i = 0; i < R; i++){
            for (j = 0; j < C; j++){
                document.write(mat[i][j]+ " ");
            }
            document.write("<br>");
        }
    }
      
     
    let mat = [[1, 0, 0, 1],[0, 0, 1, 0],[0, 0, 0, 0]];
    document.write("Matrix Initially <br>")
    printMatrix(mat, 3, 4);
    modifyMatrix(mat, 3, 4);
    document.write("Matrix after modification n <br>");
    printMatrix(mat, 3, 4);
      
