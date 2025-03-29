square = [x*x for x in range(11)]
print(square)

#2. Even Numbers
#Create a list of even numbers between 1 and 20.
even_numbers = [x for x in range(1, 21) if x % 2 == 0]
even_numbers

#upper case strings
name = ['shubham' , "dharmraj" , "birari"]
newlist = [words.upper() for words in name]
print(newlist)

# positive number
num = [2,-3,5,-6,-3,92,-34]
pos_num = [x for  x in num if x>=0]
print(pos_num)

#5. Pairs of Numbers
#Generate all pairs (i, j) where i is from 1 to 3 and j is from 4 to 6
pairs = [(i, j) for i in range(1, 4) for j in range(4, 7)]
print(pairs)

#flattern matrix
matrix = [[2,3],[23,2],[2,6]]
flatter_mat = [num for sublist in matrix for num in sublist]
print(flatter_mat)

#len of string
len_str = [len(strings) for strings in  ['shubham' , "dharmraj" , "birari"]]
print(len_str)

#Multiples of 3 or 5
mul35 = [x for x in range(1, 51) if x % 3 == 0 or x % 5 == 0 ]
print(mul35)

#reverse string
name = ['shubham' , "dharmraj" , "birari"]
rever_str = [items[::-1] for items in name]
print(rever_str)

#6. Fibonacci Numbers
# Create a list of the first 10 Fibonacci numbers using list comprehension.


def fibonacci(n):
	a, b = 0, 1
	sequence = []
	for _ in range(n):
		sequence.append(a)
		a, b = b, a + b
	return sequence


fibonacci_numbers = [fibonacci(i) for i in range(1, 11)]
print(fibonacci_numbers)

print(fibonacci(4))

print(fibonacci(4)[-1])

fibonacci_numbers = [fibonacci(i)[-1] for i in range(1, 11)]
print(fibonacci_numbers)

#another method

listt = [0, 1]  

[listt.append(listt[-1] + listt[-2]) for _ in range(11)]  

print(listt)  

