def printRev(strr):
    strr = strr.split(" ")
    st = []

    for i in strr:

        st.append(i)

    while len(st) > 0:
        print(st[-1], end = " ")
        del st[-1]

# Driver Code
if __name__ == '__main__':
    strr = "geeks quiz practice code"
    printRev(strr)
