<quiz>

**Expression** What is the data type of the following python expression?

```python
123
```
- [x] int
- [ ] float
- [ ] str
- [ ] bool
- [ ] Not a valid python expression

</quiz>

<quiz>

**Expression** What is the data type of the following python expression?

```python
'asdf' + '123'
```
- [ ] int
- [ ] float
- [x] str
- [ ] bool
- [ ] Not a valid python expression

</quiz>

<quiz>

**Expression** What is the data type of the following python expression?

```python
'asdf' = 'asdf'
```

- [ ] int
- [ ] float
- [ ] str
- [ ] bool
- [x] Not a valid python expression

</quiz>

<quiz>

**Expression** What is the data type of the following python expression?

```python
'A' > 'B'
```
- [ ] int
- [ ] float
- [ ] str
- [x] bool
- [ ] Not a valid python expression

</quiz>

<quiz>

**Expression** What is the data type of the following python expression?

```python
'a' > 'A' and 2 == 2
```
- [ ] int
- [ ] float
- [ ] str
- [x] bool
- [ ] Not a valid python expression

</quiz>

<quiz>

**Expression** What is the data type of the following python expression?

```python
'a' == 'A' or 'a' + 2
```
- [ ] int
- [ ] float
- [ ] str
- [ ] bool
- [x] Not a valid python expression

</quiz>

<quiz>
**Output Prediction** What is the output of the following code?

```python
candies = 38 # The number of candies
students_like_candies = 30 # The number of students who like candies
candies = candies - students_like_candies

print("There will be" + str(candies) + "candies left.")
```

- [x] There will be8candies left.
- [ ] There will be 8 candies left.
- [ ] There will be 30 candies left.
- [ ] There will be 38 candies left.
- [ ] There's an error in the code.

</quiz>

<quiz>
**Output Prediction** What is the output of the following code?

```python
a = 3
b = 4
c = 8

d = a < b and b < c
e = a < b or b > c
print(d, e)
```

- [x] True True
- [ ] True False
- [ ] False True
- [ ] False False

</quiz>

<quiz>
**Output Interpretation** What does the following code do?

```python
import turtle
alex = turtle.Turtle()
for aColor in ["yellow", "red", "green", "blue"]:
   alex.forward(50)
   alex.left(90)
```

- [x] Draw a square using the same color for each side.
- [ ] Draw a square using a different color for each side.
- [ ] Draw one side of a square.
- [ ] Draw four different colored squares.

</quiz>

<quiz>
**Output Prediction** What is the output of the following code?

```python
def my_func(x):
    for i in range(4):
        x = x - i
        return(x)
 

print(my_func(100))
```

- [ ] 90
- [ ] 94
- [ ] 96
- [x] 100

</quiz>

<quiz>

**Output Prediction** What is the output of the following code?

```python
def my_loop():
    i = 0
    while True:
        if i == 5:
            break
        i = i + 1
    return i

print(my_loop() * my_loop())
```

- [ ] 0
- [ ] 5
- [x] 25
- [ ] None of the above

</quiz>

<quiz>

**Output Prediction** What is the output of the following code?

```python
def my_loop():
    i = 0
    while i > 5:
        if i == 5:
            break
        i = i + 1
    return i

print(my_loop() * my_loop())
```

- [x] 0
- [ ] 5
- [ ] 25
- [ ] None of the above

</quiz>

<quiz>
**Code Equivalence** Which of the following is logically equivalent for loop to the below while loop?  Select all that apply.

```python
def my_loop():
    i = 0
    while True:
        i = i + 1
        if i == 5:
            break
    return i        
```

- [ ] <pre>for i in range(1, 5):<br>    i = i + 1<br>return i</pre>
- [ ] <pre>for i in range(5):<br>    i = i + 1<br>return i</pre>
- [x] <pre>i = 0<br>for a in range(5):<br>    i = i + 1<br>return i</pre>
- [x] <pre>for i in range(1, 6):<br>    if i == 5:<br>        break<br>return i</pre>
- [ ] <pre>for i in range(1, 5):<br>    if i == 5:<br>        break<br>return i</pre>
</quiz>

<quiz>

**Code Tracing** Which of the following best reflects the order in which these lines of code are processed in Python?  (Note: the line numbers are on the left)

```python
import math

def area_of_circle(radius):
    area = math.pi * radius ** 2
    return area

def volume_of_cylinder(radius, height):
    area = area_of_circle(radius)
    return area * height

print(volume_of_cylinder(1, 2))
```

- [x] 1, 3, 7, 11, 7, 8, 3, 4, 5, 8, 9, 11
- [ ] 1, 3, 4, 5, 7, 8, 9, 11
- [ ] 1, 3, 7, 11, 3, 4, 5, 7, 8, 9
- [ ] 1, 7, 8, 9, 3, 4, 5, 11

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def foo(word):
    result = ""
    for c in word:
        result = c + result
    return result

print(foo("Apple"))
```

- [ ] Apple
- [ ] elppA
- [x] elppA
- [ ] Aelpp

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def foo(word):
    result = ""
    for i in range(len(word)):
        result = result + str(i)
    return result

print(foo("ABBA"))
```

- [x] 0123
- [ ] 3210
- [ ] ABBA
- [ ] None of the above
</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def foo_odd(nums):
    count = 0
    for num in nums:
        if num % 2 == 1:
            count += 1
    return count

print(foo_odd([2, 0, 3, 5, 1]))
```

- [ ] 0
- [ ] 1
- [x] 3
- [ ] 5

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def foo_odd(nums):
    count = 0
    for num in nums:
        if len(nums) % 2 == 1:
            count += 1
    return count

print(foo_odd([2, 0, 3, 5, 1, 4]))
```

- [x] 0
- [ ] 1
- [ ] 3
- [ ] 5

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def foo_odd(nums):
    count = 0
    for num in nums:
        if num % 2 == 1:
            count += 1
        else:
            count = 0
    return count       

print(foo_odd([2, 0, 3, 9, 7, 6, 1]))
```

- [x] 1
- [ ] 2
- [ ] 3
- [ ] 4

</quiz>


<quiz>
**Code Interpretation** Which of the following observation is correct about the following code?

```python
def execllent_scores(scores):
    res = []
    for score in scores:
        if score >= 80:
            res.append(score)
    return res

# Unit Tests
assert execllent_scores([]) == []
assert execllent_scores([60, 70]) == []
assert execllent_scores([60, 80, 70, 80]) == [80, 80]
assert execllent_scores([60, 80, 70, 92, 100]) == [80, 92, 100]
```

- [ ] Line 9 will generate AssertionError.
- [ ] Line 10 will generate AssertionError.
- [ ] Line 11 will generate AssertionError.
- [ ] Line 12 will generate AssertionError.
- [x] All the unit tests will pass successfully.

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

def month_complete(start, how_many):
    start_index = months.index(start)
    end_index = (start_index + how_many) % 12
    return months[end_index]

print(month_complete('Jan', 14))
```

- [ ] Jan
- [ ] Feb
- [x] Mar
- [ ] Apr

</quiz>

<quiz>
**Code Tracing** Determine the output of the following program:

```python
def modify_data(lst, idx):
    idx = 2
    lst[idx] = 999

nums = [5, 10, 15]
ref = nums
ref[0] = 100
print(nums)

idx = 1
modify_data(nums, idx)
print(nums, idx)
```

- [ ] <pre>[5, 10, 15]<br>[100, 10, 999] 2</pre>
- [x] <pre>[100, 10, 15]<br>[100, 10, 999] 1</pre>
- [ ] <pre>[100, 10, 15]<br>[100, 999, 15] 1</pre>
- [ ] <pre>[100, 10, 999]<br>[100, 10, 999] 1</pre>
</quiz>

<quiz>
**Code Tracing** Determine the output of the following lines sequentially:

```python
idx = 3
nested_1 = [10, [20, 30], 40, [50, 60, 70], 80]
nested_2 = [10, [20, 30], 40, 50, 60, 70, 80]

print(nested_1 is nested_2)
print(len(nested_1))
print(nested_1[-2])
print(nested_1[idx // 2][1])
```

What is the full output?
- [ ] <pre>True<br>5<br>[50, 60, 70]<br>30</pre>
- [x] <pre>False<br>5<br>[50, 60, 70]<br>30</pre>
- [ ] <pre>False<br>7<br>40<br>20</pre>
- [ ] <pre>False<br>5<br>40<br>[20, 30]</pre>

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
def students_id(ids):
    id_set = {}
    for id in ids:
        id_set[id] = True
    return id_set

print(students_id(['10002', '10003', '10001', '10002', '10001']))
```

- [ ] {'10002': True, '10001': True}
- [x] {'10002': True, '10003': True, '10001': True}
- [ ] {'10002': True, '10003': True, '10001': True, '10002': True, '10001': True}
- [ ] {}
</quiz>


<quiz>
**Code Tracing** Determine the output of the following program:

```python
treasure_value = {"gold": 1000, "silver": 100, "copper": 10, "iron": 1}
def treasure_calculation(treasures):
    count = 0
    for treasure in treasures:
        if treasure in treasure_value:
            count += treasure_value[treasure]
    return count

print(treasure_calculation(["silver", "gold", "gold", "iron"]))
```

- [x] 2101
- [ ] 1201
- [ ] 1101
- [ ] 1000

</quiz>

