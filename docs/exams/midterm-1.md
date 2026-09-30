## Midterm Part 2 Written Questions

# Turtle Coordinate System

Here's s reminder of the turtle coordinate system if you choose to use goto():

<img src='https://runestone.academy/ns/books/published/welcomecs/_images/spaceCoord1.png'/>

# Q1

The code below is directly from question 5 of your
chapter 4 lab. It Create a turtle named starry, and 
draw a 5-point star with 100 units per side using a 
for loop and range function.

```python
import turtle

t = turtle.Turtle()
for i in range(5):
    t.forward(100)
    t.right(144)
```

Draw the following picture.  The first star is 20 units per side,
the second star is 40 units per side, and the third star 
is 60 units per side.

<div class='python-embed'>
<script type='text/plain'>

import turtle

t = turtle.Turtle()

side = 20

for j in range(1, 4):

    for i in range(5):
        t.forward(j * side)
        t.right(144)

    t.forward(j * side)

t.hideturtle()

</script>

<iframe style='width: 500px; height: 300px'></iframe>

</div>

**Grading**

- 6 points for getting the output correct
- 2 point for making the loop efficient (minimum lines of code)
- 1 additional point for using functions in a *meaningful* way

---

# Q2

When software engineers and UX (User Experience) designers build apps, they don't start by programming the final colors and graphics. Instead, they design a wireframe—a simple line drawing used to plan the layout and placement of components on a screen.

Below is a wireframe for a single user Card component (like a single post in a social media feed).

This single Card is made up of:

- An outer border containing the entire card.
- A placeholder square on the left representing an image.
- Three horizontal lines stacked on the right representing text.

Your Task:

- 2.1: Deconstruct the Design: List out all the function names that you 
will use, and the purpose of each function.

- 2.2: Write the Code: Using Python's turtle module, write a well-structured program to draw this single card.

Hint: Think about how you can use functions to avoid writing the same drawing steps over and over again.

Use turtle to draw the following design:

<div class='python-embed'>
<script type='text/plain'>
import turtle

def rect(x, y, width, height):
    t = turtle.Turtle()
    t.penup()
    t.goto(x,y)
    t.pendown()
    for _ in range(2):
        t.forward(width)
        t.right(90)
        t.forward(height)
        t.right(90)
    t.hideturtle()


def draw_card(x,y):
    rect(x,y,100,50)
    rect(x+5,y-5,40,40)
    for i in range(3):
        rect(x + 50, y - 5 - (i*15),45,10)

draw_card(-150,80)

</script>

<iframe style='width: 500px; height: 300px'></iframe>

</div>

**Grading**
- 3 points for providing function name breakdown
- 4 points for implementing your functions 
- 2 points for *efficient* implementation

---