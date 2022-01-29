# brute force technique
# Time complexity O(n*n)
 
def uniqueString(str):
     
    for i in range(len(str)):
        for j in range(i + 1,len(str)):
            if(str[i] == str[j]):
                return False;
 
    return True;
    
        
# Sorted String

def stringSort(str):
  
    st = sorted(st)
    
    for i in range(len(st)-1):
 
        # if at any time, 2 adjacent
        # elements become equal,
        # return false
        if (st[i] == st[i + 1]) :
            return False
             
    return True

  

if __name__=='__main__':
 
    st = "Guardiansofthegalaxy"
 
    if (uniqueString(st) || stringSort(st)) :
        print("The String",st,"has all unique characters\n")
     
    else :
        print("The String",st,"has duplicate characters\n")
    
