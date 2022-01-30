# Check whether 2 strings are permutations of one another 

def checkPermutations(string1 , string2):
    
    n1 = len(string1)
    n2 = len(string2)
    
    if (n1 != n2):
        return False 
    
    # else sort the strings
    
    a = sorted(string1)
    string1 = " ".join(a)
    b = sorted(string2)
    string2 = " ".join(b)
 
    for i in range(0, n1, 1):
        if (str1[i] != str2[i]):
            return False
 
    return True



if __name__ == '__main__':
    str1 = "AmIOut/?"
    str2 = "OutAmI/?"
    if (arePermutation(str1, str2)):
        print("Given strings are permutations of each other")
    else:
        print("input String are not permutations of each other")
