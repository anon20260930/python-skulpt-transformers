# Chapter 02 and 03 Questions

<quiz>
What is printed by the following instruction:
```python
number = 3.45
print(type(number))
```
- [ ] &lt;class 'int'&gt;
- [x] &lt;class 'float'&gt;
- [ ] &lt;class 'point'&gt;
- [ ] &lt;class 'decimal'&gt;
- [ ] &lt;class 'str'&gt;
</quiz>

<quiz>
What is printed by the following instruction:
```python
print( int(5.8)) 
```
- [ ] 0
- [x] 5
- [ ] 5.8
- [ ] 6
- [ ] Nothing, int is only used with the input statements
</quiz>

<quiz>
What is printed by the following instruction:
```python
print(type(int("123")))
```
- [ ] &lt;class 'float'&gt;
- [ ] &lt;class 'str'&gt;
- [x] &lt;class 'int'&gt;
- [ ] 123
- [ ] type(int("123"))
</quiz>

<quiz>
What is printed by the following code assuming that the user input is as in the given comments?
```python
shoe_size = input("Please enter your shoe size: ") 
#user types in 9.5 
print (type(shoe_size)) 
```
- [ ] &lt;class 'int'&gt;
- [ ] &lt;class 'float'&gt;
- [ ] &lt;class ‘point'&gt;
- [ ] &lt;class 'decimal'&gt;
- [x] &lt;class 'str'&gt;
</quiz>

<quiz>
What is the output of the following code:
```python
price = "high"
print(price)
price = 1000
print(price)
```
- [ ] high after which the program crashes
- [ ] 1000
- [ ] nothing, this program crashes 
- [x] `high`<br>`1000`
- [ ] `1000`<br>`high`
</quiz>

<quiz>
What is printed by the following code
```python
a = 4
b = 20
print(b/a)
```
- [ ] 0
- [ ] 0.0
- [ ] 5 
- [x] 5.0
- [ ] b/a
</quiz>

<quiz>
What is printed by the following code
```python
a = 4
b = 21
print(b // a)
```
- [ ] 0
- [ ] 0.0
- [x] 5 
- [ ] 5.25
- [ ] Nothing, the print statement contains a syntax error
</quiz>

<quiz>
What is printed by the following code
```python
a = 4
b = 21
print(b % a)
```
- [ ] 0
- [ ] 0.0
- [x] 1 
- [ ] 1.0
- [ ] Nothing, the print statement contains a syntax error
</quiz>

<quiz>
What is printed by the following code
```python
a = 6
b = 4
c = 2
print(a + b / c - 2)
```
- [ ] 0
- [ ] 3.0
- [x] 6.0
- [ ] a + b / c – 2
- [ ] Nothing, the code causes a run time error because it attempt to divide by 0
</quiz>

<quiz>
What is printed by the following code
```python
a = 3
b = 2
c = b ** (a + 1) - 3
print(c)
```
- [ ] 0
- [ ] -1
- [ ] 2
- [x] 13
- [ ] Nothing, the print statement contains a syntax error
</quiz>

<quiz>
What is printed by the following code?
```python
print ("3 + 5/3 * 3") 
```
- [ ] 3.0
- [ ] 6.0
- [ ] 8.0
- [ ] 9.0
- [x] 3 + 5/3 * 3
</quiz>

<quiz>
What is printed by the following code?
```python
x = 3
y = 1
y = x + 2
print (y) 
```
- [ ] False
- [ ] 1
- [x] 5
- [ ] y
- [ ] Nothing, the code contains a bug
</quiz>

<quiz>
What is printed by the following code?
```python
x = 3
y = x
x = 7
print(y) 
```
- [ ] False
- [x] 3
- [ ] y
- [ ] 7
- [ ] Nothing, the code contains a bug
</quiz>

<quiz>
What is printed by the following code?
```python
x = 3
x = x - 1
print(x) 
```
- [ ] False
- [ ] -1
- [x] 2
- [ ] 3
- [ ] Nothing, the code contains a bug
</quiz>

<quiz>
What happens when the following code is ran assuming the user input is in comments?
```python
age = input("Input your age: ")          #user types in 19
moms_age = input("Input your mom's age") #user types in 45
difference = moms_age - age
print(difference)
```
- [ ] The program executes fully and displays 26
- [ ] The program executes fully and displays 45-19
- [ ] The program executes fully and displays moms_age – age
- [x] The program gathers the user input but then crashes and displays : TypeError: unsupported operand type(s) for -: 'str' and 'str'
- [ ] The program gathers the user input but then crashes and displays : NameError: difference is a bad name
</quiz>

<quiz>
What happens when the following code is ran?
```python
a = 1
print(b)
b  = a + 1
```
- [ ] The program executes fully and displays 2
- [ ] The program executes fully and displays a + 1
- [ ] The program executes fully and displays 0
- [ ] The program crashes and displays : TypeError: got'str' expected 'int' 
- [x] The program crashes and displays : NameError: name 'b' is not defined 
</quiz>
