###
import os
print(os.getcwd())
print(os.listdir("E:\\"))
print(os.mkdir("python_extra"))
#### read file
f=open("E:\Python\Information1.txt")
print(f)

#print(f.readlines())

for i in f.readlines():
    print(i)
f.close()
### write mode
with open("E:\Python\Info.txt","a",encoding  =  'utf-8') as f:
    print(f)
    f.write("Append the new information\n")
    f.write("This is the new file information. ")
    f.write("The content is great\n")
    f.writeline(["Happy Learning","NEW Enthu\n"])
    f.close()


