def isCircular(string1, string2):
    l1 = len(string1)
    l2 = len(string2)
    temp = ''
 
    # Check if sizes of two strings are same
    if l1 != l2:
        return 0
 
    temp = string1 + string1
 
    if (temp.count(string2)> 0):
        return 1
    else:
        return 0
 
string1 = "harwardInstitute"
string2 = "wardInstitutehar"
 
if isCircular(string1, string2):
    print ("Given Strings are rotations of each other")
else:
    print ("Not substring rotations of each other")
