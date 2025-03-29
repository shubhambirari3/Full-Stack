class Error(Exception):
    """  Base class for exception """
    pass

class val_error(Error):
    """  This is customized error """
    pass

num=10
while True:
    try:
        in_number = input("enter the number")
        in_number = int(in_number)
        print(num, in_number)
        if in_number > num:
            print(num, in_number)
            raise val_error
        else:
            break
    except:
        print("Try again")

    
