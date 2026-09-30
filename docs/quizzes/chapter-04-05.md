# Chapter 04 and 05 Questions

<quiz>

Is the following valid or invalid python code?

```python
for i in range(20):
    print('bye')
```

- [x] Valid
- [ ] Invalid

</quiz>

<quiz>

Is the following valid or invalid python code?

```python
for i in range(20):
print('bye')
```

- [ ] Valid
- [x] Invalid

</quiz>

<quiz>
How many modules are being imported into this python program?

```python
import random
import turtle
elsie = turtle.Turtle()
elsie.forward(random.randint(50,100))
```

- [ ] 0
- [ ] 1
- [x] 2
- [ ] 3
 </quiz>

<quiz>

Is the following valid or invalid python code?

```python
for i in range(20):
    print('hi')
print('bye')
```

- [x] Valid
- [ ] Invalid

</quiz>

<quiz>

Is the following valid or invalid python code?

```python
for i in range(20):
    print('hi')
print('bye')
    print('hi')
```

- [ ] Valid
- [x] Invalid

</quiz>


<quiz>

For the turtle questions, assume that the following is code is executed before the given code

```python
elsie = turtle.Turtle()
elsie.pendown()

elmer = turtle.Turtle()
elmer.pendown()

my_turtle = turtle.Turtle()
my_turtle.pendown()
```

Which of the following code could produce the following image?

<iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQp0dXJ0bGUuZm9yd2FyZCgxMDApCnR1cnRsZS5sZWZ0KDYwKQp0dXJ0bGUuZm9yd2FyZCgxMDApCg=='></iframe>

- [ ] elsie.forward(100)<br>elsie.left(60)<br>elsie.forward(200)
- [x] elsie.forward(100)<br>elsie.left(60)<br>elsie.forward(100)
- [ ] elsie.forward(100)<br>elsie.left(120)<br>elsie.forward(100)
- [ ] elsie.left(100)<br>elsie.forward(60)<br>elsie.left(100)
- [ ] None of the above
</quiz>

<quiz>
Which of the following code could produce the following image?

<iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQplbHNpZSA9IHR1cnRsZS5UdXJ0bGUoKQpsZW5ndGggPSAxMjAKZWxzaWUuZm9yd2FyZChsZW5ndGgpCmVsc2llLmxlZnQobGVuZ3RoIC8vIDIpCmVsc2llLmZvcndhcmQobGVuZ3RoIC8vIDMp'></iframe>

- [ ] length = 120<br>elsie.forward(length)<br>elsie.left(length // 3)<br>elsie.forward(length // 2)
- [ ] elsie.forward(120)<br>elsie.left(120)<br>elsie.forward(60)
- [x] length = 120<br>elsie.forward(length)<br>elsie.left(length // 2)<br>elsie.forward(length // 3)
- [ ] elsie.forward(100)<br>elsie.left(60)<br>elsie.forward(50)
- [ ] None of the above
</quiz>

<quiz>
Which of the following functions when called draws a hexagon?
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(90)</pre>
- [x] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(120)</pre>
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(i)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
- [ ] <pre>for i in range(1,6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
</quiz>

<quiz>
Which of the following functions when called draws a hexagon?
- [ ] <pre>for i in range(12):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(90)</pre>
- [ ] <pre>for i in range(10):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.right(72)</pre>
- [ ] <pre>for i in range(5):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.right(120)</pre>
- [ ] <pre>for i in range(3):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
- [x] <pre>for i in range(12):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
</quiz>

<quiz>
Which of the following functions does NOT draw a closed shape?
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(90)</pre>
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
- [ ] <pre>for i in range(6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(120)</pre>
- [ ] <pre>for i in range(4):<br>&nbsp;&nbsp;if i % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;my_turtle.forward(50)<br>&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;my_turtle.forward(100)<br>&nbsp;&nbsp;my_turtle.left(90)</pre>
- [x] <pre>for i in range(1,6):<br>&nbsp;&nbsp;my_turtle.forward(30)<br>&nbsp;&nbsp;my_turtle.left(60)</pre>
</quiz>

<quiz>
The following code
```python
elsie = turtle.Turtle()
elsie.pendown()
elmer = turtle.Turtle()
elmer.pendown()
turtle.color("blue")
```
- [ ] will set the drawing color of both turtles to blue.
- [ ] will set the drawing color of only elmer to blue.
- [ ] will set the drawing color of only elsie to blue.
- [x] will not change the drawing color of either turtle.
- [ ] Will do nothing because color is misspelled.
</quiz>

<quiz>
What is the shape of thr output of the following code?
```python
for i in range(4):
  elsie.forward(20 * i)
  elsie.left(60)
```
- [x] <iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQpmb3IgaSBpbiByYW5nZSg0KToKICB0dXJ0bGUuZm9yd2FyZCgyMCAqIGkpCiAgdHVydGxlLmxlZnQoNjAp'></iframe>
- [ ] <iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQpmb3IgaSBpbiByYW5nZSgxLDUpOgogIHR1cnRsZS5mb3J3YXJkKDIwICogaSkKICB0dXJ0bGUubGVmdCg2MCk='></iframe>
- [ ] <iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQpmb3IgaSBpbiByYW5nZSg0KToKICB0dXJ0bGUuZm9yd2FyZCgyMCkKICB0dXJ0bGUubGVmdCg2MCk'></iframe>
- [ ] <iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQpmb3IgaSBpbiByYW5nZSg0KToKICB0dXJ0bGUuZm9yd2FyZCgyMCAqIGkpCiAgdHVydGxlLmxlZnQoMTIwKQ=='></iframe>
- [ ] no output – syntax error
</quiz>

<quiz>
How many lines is printed by the following code?

```python
for name in [1,4,-1]:
  print("Hi", name, "Please come!")
```

- [ ] -1
- [ ] 1
- [x] 3
- [ ] 4
- [ ] None, the code contains a syntax error.
</quiz>

<quiz>
How many lines is printed by the following code?
```python
for name in range(25,4,-4):
    print("Hi", name, "Please come!")
```
- [ ] 25
- [ ] 24
- [x] 6
- [ ] 4
- [ ] None, the code contains a syntax error.
</quiz>

<quiz>
What does the following instruction print on the screen?
```python
print(list(range(1, 5)))
```
- [ ] [1,5]
- [ ] range(1,5)
- [ ] 4
- [x] [1, 2, 3, 4]
- [ ] Nothing, the code contains a syntax error.
</quiz>

<quiz>
In Python a module is:
- [ ] One line of code in a program.
- [ ] A separate block of code within a program.
- [ ] A whole program you write.
- [ ] A file that contains documentation about functions in Python.
- [x] A file containing Python definitions and statements intended for use in other Python programs.
</quiz>

<quiz>
The correct code to generate a random number between 1 and 10 (inclusive) is:
- [ ] `prob = random.randrange(10)`
- [ ] `prob = random.randrange(0, 11)`
- [ ] `prob = random.randrange(0, 10)`
- [ ] `prob = random.randrange(1, 10)`
- [x] `prob = random.randrange(1, 11)`
</quiz>

