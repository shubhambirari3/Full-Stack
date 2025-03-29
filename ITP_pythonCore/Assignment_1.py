## Assignment 1 ITPM python 

# 1. Finding the Largest Element in an Array using Recursion

def find_largest(arr, n):
    if n == 1:
        return arr[0]
    return max(arr[n - 1], find_largest(arr, n - 1))

A = [1, 4, 3, -5, -4, 8, 6]
print(find_largest(A, len(A)))

# 2. Sort first half in ascending order and second half in descending order

def sort_half(arr):
    n = len(arr)
    first_half = sorted(arr[:n // 2])
    second_half = sorted(arr[n // 2:], reverse=True)
    return first_half + second_half

B = [7, 3, 5, 2, 9, 6, 4, 8]
print(sort_half(B))

# 3. Find the "Kth" max and min element of an array

def kth_min_max(arr, k):
    arr_sorted = sorted(arr)
    return arr_sorted[k - 1], arr_sorted[-k]

C = [7, 10, 4, 3, 20, 15]
k = 3
print(kth_min_max(C, k))

# 4. Check if the substring "hello" is present in "hello world"

D = "hello world"
print("hello" in D)

# 5. Find the Union & Intersection of Two Sets Difference Between Two Sets

def union_intersection_difference(set1, set2):
    return set1 | set2, set1 & set2, set1 - set2, set2 - set1

E = {1, 2, 3, 4}
F = {3, 4, 5, 6}
print(union_intersection_difference(E, F))

# 6. Count how many times the element 4 appears in the tuple

G = (1, 4, 2, 4, 3, 4, 5)
print(G.count(4))

# 7. Move all zeros in a list to the end while maintaining the order of other elements

def move_zeros(arr):
    return [x for x in arr if x != 0] + [0] * arr.count(0)

H = [0, 1, 0, 3, 12]
print(move_zeros(H))

# 8. Unpack all elements in nested tuples into a flat list

def flatten(tpl):
    result = []
    for item in tpl:
        if isinstance(item, tuple):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

I = (1, (2, 3), (4, (5, 6)))
print(flatten(I))

# 9. Character frequency in a string

def char_frequency(string):
    return {char: string.count(char) for char in set(string)}

J = "hello"
print(char_frequency(J))

# 10. Unique Elements in Two Lists

def unique_elements(list1, list2):
    return list(set(list1) ^ set(list2))

K1 = [1, 2, 3]
K2 = [3, 4, 5]
print(unique_elements(K1, K2))

# 11. Remove Common Elements from Two Sets

def remove_common_elements(set1, set2):
    return set1 - set2, set2 - set1

L1 = {1, 2, 3}
L2 = {3, 4, 5}
print(remove_common_elements(L1, L2))

# 12. Union and Intersection of a List of Sets

def union_intersection(sets):
    union_result = set.union(*sets)
    intersection_result = set.intersection(*sets)
    return {'union': union_result, 'intersection': intersection_result}

M = [{1, 2}, {2, 3}, {3, 4}]
print(union_intersection(M))
