# Chapter 06 Part 2 Questions

<quiz>
Which of the following is a valid function header (first line of a function definition)?
- [ ] `def calculateArea(side)`
- [ ] `def calculateArea:`
- [ ] `calculateArea(20)`
- [x] `def calculateArea(side):`
- [ ] `area = calculateArea(25)`
</quiz>

<quiz>
Given the function definition:

```python
def calculateArea(side):
  return side ** 2
```

Which of the following would not result in an error?

- [x] area = calculateArea(25)
- [ ] area = calculateArea()
- [ ] area = calculateArea(20,2)
- [ ] def calculateArea(20):
- [ ] def area = calculateArea(25)

</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  a = 3
  return a
b = foo(4)
print(a)
```
- [ ] 3
- [ ] 4
- [ ] a
- [ ] foo
- [x] Nothing, the code crashes
</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  a = 3
  return a
  b = 5
  a = 6
b = foo(4)
print(b)
```
- [x] 3
- [ ] 4
- [ ] 5
- [ ] 6
- [ ] Nothing, the code crashes.
</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  a = 3
  return a
  print(a)
b = foo(5)
print(b)
```
- [x] 3
- [ ] 3<br>3
- [ ] 3<br>5
- [ ] 5
- [ ] Nothing, the code crashes
</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  a = 3
  return a
  a = 6
a = 5
b = foo(a)
print(a)
```
- [ ] 3
- [x] 5
- [ ] 6
- [ ] a
- [ ] Nothing, the code crashes
</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  a = a + 1
  return a
a = 1
a = foo(a)
print(a)
```
- [ ] 1
- [x] 2
- [ ] False
- [ ] a
- [ ] Nothing, the code crashes
</quiz>

<quiz>
What is printed by this code?
```python
def foo(a):
  b = a + 3
  return b
a = 5
b = 1
c = foo(b)
print(b)
```
- [x] 1
- [ ] 4
- [ ] 6
- [ ] 8
- [ ] Nothing, the code crashes
</quiz>

<quiz>

What is printed by this code?
```python
def foo(a):
  a = 7
  b = a + 3
  return b
a = 5
b = 1
b = foo(a)
print(a,b)
```

- [x] 5 10
- [ ] 7 1
- [ ] 5 1
- [ ] 7 10
- [ ] Nothing, the code crashes

</quiz>

<quiz>
Which of the following best reflects the order in which these lines of code are processed in Python?
```python
def pow(b, p):
  y = b ** p
  return y

def square(x):
  a = pow(x, 2)
  return a

n = 5
result = square(n)
print(result) 

```

- [ ] 1, 2, 3, 4, 5, 6, 7, 8, 9
- [ ] 7, 8, 9, 4, 5, 6, 1, 2, 3
- [ ] 7, 8, 4, 5, 1, 2, 3, 6, 9
- [ ] 1, 4, 7, 8, 4, 5, 1, 2, 3, 6, 9
- [x] 1, 4, 7, 8, 4, 5, 1, 2, 3, 5, 6, 8, 9
</quiz>

<quiz>
What is printed on the screen by the following code

```python
sum = 0
for i in range(0,4):
  sum = sum + i ** 2
print(sum)
```

- [ ] 0
- [ ] 6
- [ ] 10
- [X] 14
- [ ] 30
</quiz>

<quiz>
What is printed on the screen by the following code

```python
for i in range(0,4):
  sum = 0
  sum = sum + i ** 2
print(sum)
```

- [ ] 0
- [ ] 6
- [X] 9
- [ ] 14
- [ ] 30
</quiz>

