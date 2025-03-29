#### read file
import os
try:
    print(os.listdir())
    f=open("E:\Python\Information.txt")
    print(f)

    for i in f.redlines():
        print(i)
        f.close()

except NameError:
    print("Erro is handled : NAme Error")
except FileNotFoundError:
    print("No Such file")
except:
    print("NEW Unknow error")
