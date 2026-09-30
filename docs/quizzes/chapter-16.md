# Chapter 16 Questions

<quiz>
Refers to the 3 laws of recursion from chapter 16.3

```python
def foo(n):
  return n + foo(n)
```

Which of the law of recursion is being violated by the above code?

- [ ] A recursive algorithm must have a base case
- [ ] A recursive algorithm must change its state and move toward the base case
- [ ] A recursive algorithm must call itself, recursively
- [x] Both A and B
- [ ] Both A and C
</quiz>

<quiz>
Refers to the 3 laws of recursion from chapter 16.3
```python
def foo(n):
  if n <= 0:
    return 0
  return n + foo(n)
```

Which of the law of recursion is being violated by the above code?

- [ ] A recursive algorithm must have a base case
- [x] A recursive algorithm must change its state and move toward the base case
- [ ] A recursive algorithm must call itself, recursively
- [ ] All A, B, and C
- [ ] None of the above
</quiz>

<quiz>
Refers to the 3 laws of recursion from chapter 16.3

```python
def foo(n):
  if n <= 0:
    return 0
  return n + foo(n + 1)
```

Which of the law of recursion is being violated by the above code?

- [ ] A recursive algorithm must have a base case
- [x] A recursive algorithm must change its state and move toward the base case
- [ ] A recursive algorithm must call itself, recursively
- [ ] Both A and B
- [ ] None of the above
</quiz>

<quiz>
Refers to the 3 laws of recursion from chapter 16.3

```python
def foo(n):
  if n <= 0:
    return 0
  return n + bar(n - 1)
```

Which of the law of recursion is being violated by the above code?

- [ ] A recursive algorithm must have a base case
- [ ] A recursive algorithm must change its state and move toward the base case
- [x] A recursive algorithm must call itself, recursively
- [ ] Both A and B
- [ ] None of the above
</quiz>

<quiz>
Refers to the 3 laws of recursion from chapter 16.3

```python
def foo(n):
  if n > 5:
    return 0
  return n + foo(n + 1)
```

Which of the law of recursion is being violated by the above code?

- [ ] A recursive algorithm must have a base case
- [ ] A recursive algorithm must change its state and move toward the base case
- [ ] A recursive algorithm must call itself, recursively
- [ ] Both A and B
- [x] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(n):
  if n > 5:
    return 0
  return n + foo(n + 1)
```

What is the output of foo(6)

- [x] 0
- [ ] 6
- [ ] 16
- [ ] 21
- [ ] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(n):
  if n == 0:
    return 0
  return (n / 2) + foo(n - 1)
```

What is the output of foo(2)

- [ ] 0.0
- [ ] 1.0
- [x] 1.5
- [ ] 3.0
- [ ] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(n, p):
  if n == 0:
    return p
  return foo(n - 1, p + 1)
```

What is the output of foo(2,2)

- [ ] 0
- [ ] 1
- [ ] 2
- [ ] 3
- [x] 4
</quiz>

<quiz>
Given the following code:

```python
def foo(n):
  if n == 0:
    return []
  return [n] + foo(n - 1)
```

What is the output of foo(2)

- [ ] []
- [ ] [ 1, 2 ]
- [x] [ 2, 1 ]
- [ ] [ 2, 1, 0 ]
- [ ] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(lst):
  if lst == []:
    return []
  return [ lst[0] ] + foo( lst[0:] )
```

What is the output of foo( [1, 2, 3] )

- [ ] [ ]
- [ ] [ 1, 2, 3 ]
- [ ] [ 1, 3 ]
- [ ] [ 1 ]
- [x] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(lst):
  if lst == []:
    return []
  return [ lst[0] ] + foo( lst[1:] )
```

What is the output of foo( [1, 2, 3] )

- [ ] [ ]
- [x] [ 1, 2, 3 ]
- [ ] [ 1, 3 ]
- [ ] [ 1 ]
- [ ] None of the above
</quiz>

<quiz>
Given the following code:

```python
def foo(lst):
  if lst == []:
    return []
  return [ lst[0] ] + foo( lst[2:] )
```

What is the output of foo( [1, 2, 3] )

- [ ] [ ]
- [ ] [ 1, 2, 3 ]
- [x] [ 1, 3 ]
- [ ] [ 1 ]
- [ ] None of the above
</quiz>

