# Chapter 08 While Loop Questions

<quiz>
What is printed by

```python
def foo(n):
  value = 0
  for i in range(n):
    value = value  +  1
  return value

print(foo(3))
```

- [ ] foo(3)
- [ ] 0
- [x] 3
- [ ] 9
- [ ] No output because of an infinite loop

</quiz>

<quiz>
What is printed by

```python
def foo(n):
  value = 0
  for i in range(n):
    value = value + i
  return value

print(foo(4))
```

- [ ] 0
- [ ] 3
- [x] 6
- [ ] 9
- [ ] No output because of an infinite loop

</quiz>

<quiz>
What is printed by

```python
def foo(n):
  value = 0
  for i in range(1, n + 1):
    value = value  +  i * i
  return value

print(foo(3))
```

- [ ] foo(3)
- [ ] 0
- [ ] 9
- [x] 14
- [ ] No output because of an infinite loop
</quiz>

<quiz>
What is printed by

```python
def foo(n):
  value = 0
  for i in range(n):
    value = value  +  i * (i + 1) 
  return value

print(foo(3))
```

- [ ] foo(3)
- [ ] 0
- [x] 8
- [ ] 9
- [ ] No output because of an infinite loop 
</quiz>

<quiz>
Which of the following code snippets has the same output as

```python
for i in range(5):
    print(i)
```

- [ ] <pre>i = 0<br>while i < 5:<br>&nbsp;print(i)</pre>
- [ ] <pre>while i < 5:<br>&nbsp;print(i)<br>&nbsp;i = i + 1</pre>
- [ ] <pre>i = 0<br>while i < 5:<br>&nbsp;i = i + 1<br>&nbsp;print(i)</pre>
- [x] <pre>i = 0<br>while i < 5:<br>&nbsp;print(i)<br>&nbsp;i = i + 1</pre>
- [ ] none of the above
</quiz>

<quiz>
What is printed by

```python
i = 0
while i < 4:
  i += 1
print(i)
```

- [ ] i
- [ ] 0
- [ ] 3
- [x] 4
- [ ] No output because of an infinite loop
</quiz>

<quiz>
What is printed by

```python
i = 0
while i > 4:
    i = i + 1
print(i)
```

- [ ] i
- [x] 0
- [ ] 3
- [ ] 4
- [ ] No output because of an infinite loop
</quiz>

<quiz>
What is printed by

```python
i = 0
n = 0

while i < 4:
    n = n + i 

print(n)
```

- [ ] i
- [ ] 0
- [ ] 3
- [ ] 4
- [x] No output because of an infinite loop
- [ ] No output because of a syntax error
</quiz>

<quiz>
What is printed by the following code?

```python
i = 0
while i < 4:
  i = i + 1
print(i < 4)
```

- [ ] True
- [x] False
- [ ] 4
- [ ] i < 4
- [ ] No output because of an infinite loop
</quiz>

<quiz>
What is printed by

```python
def foo(n):
  i = 1
  sum = 0
  while i < n:
    sum = sum + 2 * i
    return sum

print(foo(3))
```

- [ ] 0
- [ ] 1
- [x] 2
- [ ] 6
- [ ] No output because of an infinite loop
</quiz>

<quiz>
What is printed by

```python
count = 5
value = 2
while count > -2:
    value = value * count
    print("***")
    count = count - 3

print(value)
```

- [ ] <pre>2</pre>
- [ ] <pre><br>***<br>***<br>-20</pre>
- [ ] <pre><br>***<br>***<br>20</pre>
- [x] <pre><br>***<br>***<br>***<br>-20</pre>
- [ ] <pre><br>***<br>***<br>***<br>20</pre>
</quiz>

<quiz>

What is printed by

```python
n = 1
while n < 5:
  if n == 3:
    print("A")
    n = n + 1
  else:
    print("B")
    n = n + 2
```

- [ ] B
- [ ] B<br>A
- [ ] A<br>B<br>A
- [x] B<br>A<br>B
- [ ] B<br>A<br>B<br>A

</quiz>

<quiz>
What is printed by

```python
end = False
n = 2
while not end:
    print(n)
    if n > 5:
        end = True
    n = n + 2
```

- [ ] 2
- [ ] 4
- [ ] 2<br>4
- [ ] 4<br>6<br>8
- [x] 2<br>4<br>6

</quiz>

<quiz>

What is printed by the following code if the user input is `4 5 -1`

```python
n = int(input("Type: "))
value = 0
count = 0
while n != -1:
    value = value + n
    count = count + 1
    n = int(input())
print(value/count)
```

- [ ] 0.0 
- [ ] 4.0 
- [x] 4.5 
- [ ] 9.0
- [ ] None of the above 

</quiz>
