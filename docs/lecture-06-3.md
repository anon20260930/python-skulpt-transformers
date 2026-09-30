# Drawing compound shapes

---

<div class='python-embed'>

House function version 1

```python
import turtle 

def draw_house(t):
    # Draw walls (square)
    for i in range(4):
        t.forward(50)
        t.right(90)
    
    # Draw roof (triangle)
    for i in range(3):
        t.forward(50)
        t.left(120)
        
        
alex = turtle.Turtle()
draw_house(alex)
```

House function version 2

```python

import turtle

def draw_square(t):
    for i in range(4):
        t.forward(50)
        t.right(90)

def draw_triangle(t):
    for i in range(3):
        t.forward(50)
        t.left(120)

def draw_house(t):
    draw_square(t)
    draw_triangle(t)

alex = turtle.Turtle()
draw_house(alex)

```

<iframe style='width:500px; height:300px'></iframe>

</div>

<quiz>

You have a function draw_house(). Inside it, you call draw_square() and draw_triangle(). This is an example of:

- [ ] A syntax error.
- [ ] Infinite recursion.
- [X] Breaking a big problem into smaller, manageable steps.
- [ ] Only using functions for very complex math calculations.

</quiz>

---

## Final Note

- The most important part of this chapter is to be able to articulate from
looking at a big task what are the sub-tasks

- Need to use the correct terminologies:  functions, parameters

