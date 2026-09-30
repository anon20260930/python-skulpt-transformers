# COMP 115 Midterm 2 - Sample Questions Part 1

## True/False Questions

<quiz>
**TF 1.** The function foo is a Boolean function.
```python
def foo (x,y):
    return x < y and x > 0
```
- [x] True
- [ ] False
</quiz>

<quiz>
**TF 2.** The following code prints 1 on the screen.
```python
a = [2, 2, 2]
b = a
b[1] = 1
print(a[1])
```
- [x] True
- [ ] False
</quiz>

<quiz>
**TF 3.** In Python `"wolves" <= "worms"`.
- [x] True
- [ ] False
</quiz>

<quiz>
**TF 4.** In Python we can use negative numbers as indices to access list elements.
- [x] True
- [ ] False
</quiz>

<quiz>
**TF 5.** The following code prints `son` on the screen.
```python
a = "sun"
a[1] = "o"
print(a)
```
- [ ] True
- [x] False
</quiz>

<quiz>
**TF 6.** The expression `2 < 3 or 4 < 5` evaluates to True.
- [x] True
- [ ] False
</quiz>

<quiz>
**TF 7.** The expression `not True and False` evaluates to True.
- [ ] True
- [x] False
</quiz>

## Code Tracing Questions

<quiz>
**Code Tracing 1.** Determine the output of the following program:
```python
x = 1
y = 6
if x > 5:
    print("One.")
else:
    if x < y:
        print("Two")
    else:
        print("Three")
print("Four")
```
- [ ] One.\nFour
- [x] Two\nFour
- [ ] Three\nFour
- [ ] Two
</quiz>

<quiz>
**Code Tracing 2 & 3.** Determine the output of the following program:
```python
x = 2
y = 1
z = 3

if x < y and x < z:
    print("red")
elif x < y or x < z:
    print("blue")
else:
    print("green")
```
- [ ] red
- [x] blue
- [ ] green
- [ ] blue\ngreen
</quiz>

<quiz>
**Code Tracing 4a.** Determine the output of the following program:
```python
i = 1
while i < 6:
    i = i + 2
print(i)
```
- [ ] 5
- [x] 7
- [ ] 6
- [ ] 1\n3\n5
</quiz>

<quiz>
**Code Tracing 4b.** Determine the output of the following program:
```python
count = -8
value = 2
while count < -2:
    value = value  # note: value remains unchanged
    print("***")
    count = count + 3
print(value)
```
- [x] <pre>***<br>***<br>2</pre>
- [ ] <pre>***<br>***<br>***<br>2</pre>
- [ ] <pre>2</pre>
- [ ] <pre>***<br>-2</pre>
</quiz>

<quiz>
**Code Tracing 5.** Determine the output of the following program:
```python
s = 'Gingerbread'
s[1] = 'a'
print(s)
```
- [ ] Gangerbread
- [ ] Gingerbread
- [x] TypeError (Strings are immutable)
- [ ] None
</quiz>

<quiz>
**Code Tracing 6.** Determine the output of the following program:
```python
def foo(s):
    vowels = "aeiouAEIOU"
    n = ""
    for ch in s:
        if ch in vowels:
            return n
        n = n + ch

print(foo("Gingerbread"))
```
- [x] G
- [ ] Gingerbread
- [ ] Gngrbrd
- [ ] Empty string
</quiz>

<quiz>
**Code Tracing 7.** Determine the output of the following program:
```python
def foo(a, z):
    z = 1
    a[z] = 50

x = [2, 5, 9]
y = x
y[2] = 100
print(x)

z = 0
foo(x, z)
print(x, z)
```
- [ ] [2, 5, 100]\n[2, 50, 100] 1
- [x] [2, 5, 100]\n[2, 50, 100] 0
- [ ] [2, 5, 9]\n[2, 50, 100] 0
- [ ] [2, 50, 100]\n[2, 50, 100] 0
</quiz>

<quiz>
**Code Tracing 8.** Determine the output of the following lines sequentially:
```python
a = 2
my_list_1 = [1, [2, 3, 4], 5, 6, [7, 8]]
my_list_2 = [1, [2, 3, 4, 5, 6, 7, 8]]

print(my_list_1 is my_list_2)
print(len(my_list_1))
print(my_list_1[-4])
print(my_list_2[a // 2][1])
```
What is the full output?
- [ ] True\n5\n[2, 3, 4]\n3
- [x] False\n5\n[2, 3, 4]\n3
- [ ] False\n5\n5\n2
- [ ] False\n6\n6\n[2, 3, 4, 5, 6, 7, 8]
</quiz>
