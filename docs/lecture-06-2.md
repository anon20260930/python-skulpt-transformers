A burger icon is three lines usually located at the top right hand corner of an app screen.  Here's how we can draw a burger menu using turtle:

```python
import turtle 

alex = turtle.Turtle()

for i in range(3):
  alex.pendown()
  alex.forward(20)
  alex.penup()
  alex.backward(20)
  alex.left(90)
  alex.backward(10)
  alex.right(90)
```

---

<quiz>

Without using functions, how many more lines would it take to draw 3 burgers?

- [ ] 0
- [ ] 8
- [X] 16
- [ ] 32

</quiz>

---

A function is how we group lines together into a single unit:

<div class='python-embed'>

```python
import turtle 

def burger():
  alex = turtle.Turtle()
  for i in range(3):
    alex.pendown()
    alex.forward(20)
    alex.penup()
    alex.backward(20)
    alex.left(90)
    alex.backward(10)
    alex.right(90)

burger()
```

<iframe style='height: 300px; width: 500px'></iframe>

</div>

<quiz>

How many burgers are drawn on-screen if I run the following:

```python
import turtle 

# Here we "define" the burger function
def burger():  
  alex = turtle.Turtle()

  for i in range(3):
    alex.pendown()
    alex.forward(20)
    alex.penup()
    alex.backward(20)
    alex.left(90)
    alex.backward(10)
    alex.right(90)

burger()
burger()
burger()
```

- [ ] 1
- [x] 3

</quiz>

---

The problem with the above code is that the turtle kept being drawn in the same
place.  We can use *parameter* to control the starting location, like so:

<div class='python-embed'>

```python
import turtle 

# Here we "define" the burger function
def burger(startX, startY):  
  alex = turtle.Turtle()
  alex.penup()
  alex.goto(startX, startY)
  alex.pendown()

  for i in range(3):
    alex.pendown()
    alex.forward(20)
    alex.penup()
    alex.backward(20)
    alex.left(90)
    alex.backward(10)
    alex.right(90)

burger(-50,0)
burger(0,0)
burger(50,0)
```

<iframe style='width: 500px; height: 300px'></iframe>

</div>

<quiz>

How many turtles are we creating with the above code?

- [ ] 1
- [x] 3

</quiz>

---

Instead of creating 3 turtles, we can actually create just one and reuse
the turtle between function calls, like this:

<div class='python-embed'>

```python
import turtle 

# The t is a variable that gets assigned when
# the function is called

def burger(t):

  for i in range(3):
    t.pendown()
    t.forward(20)
    t.penup()
    t.backward(20)
    t.left(90)
    t.backward(10)
    t.right(90)

alex = turtle.Turtle()
alex.penup()
alex.goto(-50,0)
burger(alex)

alex.penup()
alex.goto(0,0)
burger(alex)

alex.penup()
alex.goto(50,0)
burger(alex)
```

<iframe style='width: 500px; height: 300px'></iframe>

</div>

<quiz>

We change our function definition to def burger(t):, what does t represent?

- [ ] A secret code required to start the drawing.
- [X] A variable that acts as a placeholder for whichever turtle object we want to use.
- [ ] The number of times the burger loop should run.
- [ ] The color of the lines being drawn.

</quiz>

<quiz>

How many turtles are being created with the above code?

- [x] 1
- [ ] 3

</quiz>

---
