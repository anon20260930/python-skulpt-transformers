# Chapter 07 Questions

Concepts

 - Boolean as a data type
 - Compelx boolean expressions
 - Functions that return boolean values

<quiz>
What is printed on the screen by the following statement:
```python
print(type(True))
```
- [ ] True
- [ ] type(True)
- [x] &lt;class 'bool'&gt;
- [ ] &lt;class 'str'&gt;
- [ ] &lt;class 'int'&gt;
</quiz>

<quiz>
What is printed on the screen by the following statement:
```python
print(1 != 2)
```
- [x] True
- [ ] "True"
- [ ] &lt;class 'bool'&gt;
- [ ] 1 != 2
- [ ] Nothing, the program crashes.
</quiz>

<quiz>
Which of the following is NOT a Boolean expression?:
- [ ] True
- [ ] True or False
- [ ] 1 <= 2
- [x] 1 + 2
- [ ] 1 != 2
</quiz>

<quiz>
The value of the Boolean expression 
	1 < 2  or  2 < 3 
is
- [x] True
- [ ] False
- [ ] 1 < 3
- [ ] 1 < 2 < 3
- [ ] None of the above
</quiz>

<quiz>
Which Python expression checks that a number stored in a variable x is between 1 and 6 inclusive?
- [ ] 1 < x < 6
- [ ] x > 1 or x < 6
- [ ] x >= 1 or x <= 6
- [x] x >= 1 and x <= 6
- [ ] x => 1 and x =< 6
</quiz>

<quiz>
Which expression checks that an integer stored in a variable x is NOT between 1 and 6 inclusive (i.e. not 1,2,3,4,5, or 6)?
- [ ] 1 > x > 6
- [ ] x <= 1 or x >= 6
- [x] x < 1 or x > 6
- [ ] x < 1 and x > 6
- [ ] x <= 1 and x >= 6
</quiz>

<quiz>
Which expression checks that a number stored in a variable x is even and the number stored in variable y odd?
- [ ] (x + y) % 2 == 1
- [ ] x % 2 = 0 or y % 2 = 1
- [ ] x % 2 = 0 and y % 2 = 1
- [ ] x % 2 == 0 or y % 2 == 1
- [x] x % 2 == 0 and y % 2 == 1
</quiz>

<quiz>
Which of the following can be used to check that at least one of the values stored in variables x and y is odd
- [ ] (x + y) % 2 == 1
- [ ] x % 2 != 0 and y % 2 != 0
- [ ] not ( x % 2 == 0 or y % 2 == 0 )
- [x] not ( x % 2 == 0 and y % 2 == 0)
- [ ] x % 2 = 0 or y % 2 = 1
</quiz>

<quiz>
Which of the following properly expresses the precedence of operators (using parentheses) in the following expression:
```python
5 * 3 > 10 or 4 + 5 == 9
```
- [x] ((5*3) > 10) or ((4+5) == 9)
- [ ] (5*(3 > 10)) or (4 + (5 == 9))
- [ ] ((((5*3) > 10) or 4)+5) == 9
- [ ] ((5*3) > (10 or (4+5))) == 9
- [ ] None of the above
</quiz>

<quiz>
What is printed by the following code
```python
a = 5
if a == 5:
  a = 3
  print(a)
else:
  print("Hello!")
```
- [x] 3
- [ ] 5
- [ ] a
- [ ] <pre>3<br>Hello!</pre>
- [ ] <pre>5<br>Hello!</pre>
</quiz>

<quiz>
What is printed by the following code
```python
a = 1
if a == 5:
  print(a)
else:
  print("Hello!")
print("Goodbye! ")
```
- [ ] `1`
- [ ] `5`
- [ ] `Hello!`
- [x] <pre>Hello!<br>Goodbye!</pre>
- [ ] <pre>1<br>Hello!<br>Goodbye!</pre>
</quiz>

<quiz>
What is printed by the following code
```python
a = 5
if a == 5:
  a = 3
  print(a)
print("Hello!")
```
- [ ] 3
- [ ] 5
- [ ] `Hello!`
- [x] <pre>3<br>Hello!</pre>
- [ ] Nothing the if statement is missing `else`
</quiz>

<quiz>
What is printed by the following code
```python
a = 6
if a == 3:
  a = 3
  print(a)
print("Hello!")
```
- [ ] 3
- [ ] 6
- [x] `Hello!`
- [ ] <pre>3<br>Hello!</pre>
- [ ] Nothing the if statement is missing `else`
</quiz>

<quiz>
```python
x = 5
y = 6

if x * y > 10:
  print("A")
else:
  if x < y:
    print("B")
  else:
    print("C")
```
- [x] A
- [ ] B
- [ ] C
- [ ] <pre>A<br>B</pre>
- [ ] None of the above
</quiz>

<quiz>
What is printed by the following code
```python
x = 1
y = 6

if x * y > 10:
  print("A")
else:
  if x < y:
    print("B")
  else:
    print("C")
```
- [ ] A
- [x] B
- [ ] C
- [ ] <pre>B<br>C</pre>
- [ ] None of the above
</quiz>

<quiz>
What is printed by the following code

```python
x = 2
y = 5
z = 7
if x < y or x < z:
  print("A")
elif y < x or y < z:
  print("B")
else:
  print("C")
```
- [x] A
- [ ] B
- [ ] C
- [ ] <pre>A<br>B</pre>
- [ ] None of the above
</quiz>

<quiz>
What is a Boolean function?
- [x] A function that returns True or False
- [ ] A function that takes True or False as input
- [ ] The same as a Boolean expression
- [ ] True or False
- [ ] There is no such thing in Python
</quiz>

<quiz>
What does the following function do?
```python
def foo(x,y,z):
    return x < y and y < z
```
- [ ] Checks that y is the smallest value of three numbers x, y and z
- [ ] Checks that y is the largest value of three numbers x,y and z
- [x] Checks that y is the middle value of three numbers x,y and z that are in increasing order
- [ ] Checks that x is less than z
- [ ] Nothing, the function is not syntactically correct.
</quiz>

