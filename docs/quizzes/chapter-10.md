# Chapter 10 Questions

<quiz>
What is printed by
```python
my_list = ["hello", 10.2, 5*5, [10, 20]]
print(my_list[2])
```
- [ ] 10.2
- [ ] 5 * 5
- [x] 25
- [ ] my_list[2]
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
my_list = ["hello", 10.2, 5*5, [10, 20]]
print(len(my_list))
```

- [x] 4
- [ ] 5
- [ ] 6
- [ ] len(my_list)
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
my_list = ["hello", "sun", 5*5, [10, 20]]
print(my_list[1][2])
```

- [ ] e
- [ ] l
- [ ] u
- [x] n
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
a = 3
my_list = [1,2,3,4,5]
print(my_list[-4],my_list[a//2])
```

- [ ] 1 1
- [ ] 1 2
- [ ] 2 1
- [x] 2 2
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
my_list = ["hello", "sun", 15, [10, 20]]
print("sun" in my_list)
print(10 in my_list)
print([10,20] in my_list)
```
- [ ] True<br>True<br>True
- [x] True<br>False<br>True
- [ ] True<br>False<br>False
- [ ] False<br>True<br>False
- [ ] Nothing, the code contains an error.
</quiz>

<quiz>
What is printed by
```python
list1 = [1, 2, 3]
list2 = [3, 4, 5]
print(list1 + list2)
```
- [x] [1, 2, 3, 3, 4, 5]
- [ ] [1, 2, 3, 4, 5]
- [ ] [4, 6, 8]
- [ ] 6
- [ ] Nothing. The code contains a syntax error.

</quiz>

<quiz>
What is printed by
```python
m = [3, "cat", [56, 57, "dog"], [ ], 3.14, False]
print(m[2:4])
```
- [x] [[56, 57, 'dog'], []]
- [ ] [[56, 57, 'dog'], [], 3.14]
- [ ] ['cat', [56, 57, 'dog']]
- [ ] ['cat', [56, 57, 'dog'], []]
- [ ] Nothing. There is a syntax error in the code.
</quiz>

<quiz>
What is printed by
```python
my_list = [4, 2, 8, 6, 5]
my_list[-2] = True
print(my_list)
```
- [ ] True
- [ ] [4, 2, True, 6, 5]
- [x] [4, 2, 8, True, 5]
- [ ] [True, True, True, True, 5]
- [ ] Nothing. There is an error in the code.
</quiz>

<quiz>
What is printed by
```python
a = [1, 2, 3]
b = [1, 2, 3]
x = "kiwi"
y = "kiwi"
print(a is b)
print(a == b)
print(x is y)
print(x == y)
```
- [ ] True<br>True<br>True<br>True
- [x] False<br>True<br>True<br>True
- [ ] False<br>True<br>False<br>True
- [ ] True<br>True<br>False<br>True
- [ ] Nothing. The code contains an error. 
</quiz>

<quiz>
What is printed by
```python
a = [1, 2, 3]
b = a
b[1] = 10
print(a[1])
```
- [ ] 1
- [ ] 2
- [x] 10
- [ ] a[1]
- [ ] Nothing. The code contains a syntax error.
</quiz>

<quiz>
What is printed by
```python
a = [1, 2, 3]
b = a[:]
b[1] = 10
print(a[1])
```
- [ ] 1
- [x] 2
- [ ] 10
- [ ] a[1]
- [ ] Nothing. The code contains a syntax error.
</quiz>

<quiz>
What is printed by
```python
def foo(a):
  for position in range(len(a)):
    a[position] = 1
my_list = [2, 5, 9]
foo(my_list)
print(my_list)
```
- [x] [1, 1, 1]
- [ ] [2, 5, 9]
- [ ] [1, 5, 8]
- [ ] my_list
- [ ] Nothing,the code contains an error 
</quiz>

<quiz>
What is printed by
```python
def foo(a):
  n = []
  for value in a:
    n.append(1)
  return n
my_list = [2, 5, 9]
n_list = foo(my_list)
print(n_list)
print(my_list)
```
- [ ] [1, 1, 1]<br>[1, 1, 1]
- [x] [1, 1, 1]<br>[2, 5, 9]
- [ ] [2, 5, 9]<br>[2, 5, 9]
- [ ] [2, 5, 9, 1, 1, 1]
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
my_list = [['x','y'],  [['a','b'],2,['c','d']],  [10,[20,30]]]
print(my_list[1][2][1])
```

- [ ] a
- [ ] b
- [ ] c
- [x] d
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by
```python
def foo(a):
    x = a[0]
    i = 1
    while i < len(a):
        if a[i] < x:
            x = a[i]
        i = i + 1
    return x
list = [5,3,1,1,3]
print(foo(list))
```
- [x] 1
- [ ] 3
- [ ] 5
- [ ] [5,3,1,1,3]
- [ ] Nothing. The code contains an error. 
</quiz>

