for row in range(0,8):
    for col in range(0,row ):
        print("*" , end = " ")
    print()


print("Pattern 2")
for row in range(0,8):
    for col in range(0,8-row):
        print("*" , end = " ")
    print()