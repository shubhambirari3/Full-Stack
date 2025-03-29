# NumPy Interview Questions and Solutions

This document contains **40+ NumPy interview questions** commonly asked in **data analytics, data science, and coding interviews.**

---

## **1. Create a 5x5 identity matrix**
```python
import numpy as np
identity_matrix = np.eye(5)
print(identity_matrix)
```

## **2. Compute the dot product of two matrices**
```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

dot_product = np.dot(A, B)
print(dot_product)
```

## **3. Generate an array of 20 random integers between 1 and 100**
```python
rand_ints = np.random.randint(1, 101, 20)
print(rand_ints)
```

## **4. Find the index of the maximum value in an array**
```python
arr = np.array([10, 20, 5, 25, 15])
print(np.argmax(arr))  # Output: 3
```

## **5. Find the index of the minimum value in an array**
```python
print(np.argmin(arr))  # Output: 2
```

## **6. Compute the Euclidean distance between two points**
```python
p1 = np.array([3, 4])
p2 = np.array([7, 1])

distance = np.linalg.norm(p1 - p2)
print(distance)  # Output: 5.0
```

## **7. Find the determinant of a 3x3 matrix**
```python
matrix = np.array([[2, 3, 1], [4, 5, 6], [7, 8, 9]])
determinant = np.linalg.det(matrix)
print(determinant)
```

## **8. Find the inverse of a square matrix**
```python
matrix = np.array([[1, 2], [3, 4]])
inverse_matrix = np.linalg.inv(matrix)
print(inverse_matrix)
```

## **9. Compute the covariance matrix of a dataset**
```python
data = np.array([[2, 3, 4], [5, 6, 7], [8, 9, 10]])
cov_matrix = np.cov(data)
print(cov_matrix)
```

## **10. Compute the correlation coefficient matrix**
```python
data = np.array([1, 2, 3, 4, 5])
corr_matrix = np.corrcoef(data)
print(corr_matrix)
```

## **11. Compute the 50th percentile (median) of an array**
```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
percentile_50 = np.percentile(arr, 50)
print(percentile_50)  # Output: 5.5
```

## **12. Compute the moving average of an array**
```python
arr = np.array([10, 20, 30, 40, 50])
window_size = 3
moving_avg = np.convolve(arr, np.ones(window_size)/window_size, mode='valid')
print(moving_avg)
```

## **13. Find the mode of an array**
```python
from scipy import stats
arr = np.array([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])
mode = stats.mode(arr)
print(mode.mode)  # Output: 4
```

## **14. Create a 1D array of 100 values between 0 and 1**
```python
arr = np.linspace(0, 1, 100)
print(arr)
```

## **15. Generate a 3x3 matrix of normally distributed random numbers**
```python
normal_matrix = np.random.randn(3, 3)
print(normal_matrix)
```

## **16. Compute the outer product of two vectors**
```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

outer_product = np.outer(a, b)
print(outer_product)
```

## **17. Replace NaN values with zero in an array**
```python
arr = np.array([1, 2, np.nan, 4, 5])
arr[np.isnan(arr)] = 0
print(arr)
```

## **18. Create a structured array with named columns**
```python
dtype = [('name', 'S10'), ('age', int), ('score', float)]
data = np.array([('Alice', 25, 85.5), ('Bob', 30, 90.3)], dtype=dtype)
print(data)
```

## **19. Compute the rolling sum of an array**
```python
arr = np.array([1, 2, 3, 4, 5])
window_size = 3
rolling_sum = np.convolve(arr, np.ones(window_size), mode='valid')
print(rolling_sum)
```

## **20. Sort a NumPy structured array by a specific column**
```python
arr = np.array([(1, 'apple', 30), (3, 'banana', 10), (2, 'cherry', 20)],
               dtype=[('id', int), ('name', 'U10'), ('quantity', int)])

sorted_arr = np.sort(arr, order='quantity')
print(sorted_arr)
```

---

## **More NumPy Practice Questions**

21. Create a 3D array with random values.
22. Find the unique elements of an array.
23. Reshape a 1D array to a 3x3 matrix.
24. Flatten a 3D array to 1D.
25. Find the cumulative sum of an array.
26. Generate a NumPy array with only even numbers between 1 and 50.
27. Find the standard deviation of an array.
28. Stack two 1D arrays vertically.
29. Stack two 1D arrays horizontally.
30. Split an array into equal-sized chunks.
31. Find the boolean mask of elements greater than a value.
32. Convert a list of lists into a NumPy array.
33. Normalize an array between 0 and 1.
34. Compute the histogram of an array.
35. Find the second-largest element in an array.
36. Compute the exponential of each element in an array.
37. Replace all odd numbers in an array with -1.
38. Swap two rows of a NumPy array.
39. Swap two columns of a NumPy array.
40. Convert a NumPy array to a Pandas DataFrame.

---

These are some of the **most commonly asked NumPy questions** in **data analytics, ML, and FAANG interviews**. Hope this helps! 🚀

