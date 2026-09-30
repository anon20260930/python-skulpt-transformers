
While this chapter is titled "Functions", there's a lot more to it.

This is the start **abstract thinking** in computer science.

It's less about mechanics, and more about **design**.

The core concept: **breaking down a big problem into smaller steps**.

The challenge is that we are mixing mechanism with design.

---

# 2 ways to do the same thing

Say you need to draw the following shape.  Without writing any code, how would you describe the task?

<div class='python-embed'>

<iframe style='height: 300px; width: 500px'></iframe>

<div>Below are 2 versions of the code that can draw the above shape.</div>

```python

# Version 1

import turtle

alex = turtle.Turtle()

alex.pendown()
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.penup()
alex.forward(30)

alex.pendown()
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.penup()
alex.forward(30)

alex.pendown()
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.penup()
alex.forward(30)

alex.pendown()
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.penup()
alex.forward(30)

alex.pendown()
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.forward(20)
alex.right(90)
alex.penup()
alex.forward(30)
```

```python

# Version 2

import turtle

def draw_rectangle(t):
    t.pendown()
    for i in range(4):
        t.forward(20)
        t.right(90)
    t.penup()

alex = turtle.Turtle()

for i in range(5):
    draw_rectangle(alex)
    alex.forward(30)

```

</div>

<quiz>

Which version do you prefer?

- [ ] Version 1
- [x] Version 2

</quiz>

---

# Goal of this section

By the end of this chapter, you will understand 
how version 2 works.
