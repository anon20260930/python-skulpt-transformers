Wireframes are line drawings used by visual designers to test placement of components on a screen when they design what an app looks like.  

Use turtle to draw the following design:

<div class='python-embed'>
<script type='text/plain'>
import turtle

def draw_burger(t):
    for i in range(3):
        t.pendown()
        t.forward(20)
        t.penup()
        t.backward(20)
        t.left(90)
        t.backward(10)
        t.right(90)

def draw_rect(t, w, h):
    for i in range(2):
        t.forward(w)
        t.right(90)
        t.forward(h)
        t.right(90)

# Main Composition
t = turtle.Turtle()

# 1. Draw Burger in top right
t.penup()
t.goto(25, 45)
draw_burger(t)

# 2. Draw Main Content Area
t.goto(-50, 50)
t.pendown()
draw_rect(t, 100, 150)

# 3. Draw 2 smaller rectangles inside
t.penup()
t.goto(-40, 0)
t.pendown()
draw_rect(t, 80, 40)

t.penup()
t.goto(-40, -50)
t.pendown()
draw_rect(t, 80, 40)
</script>

<iframe style='width: 500px; height: 300px'></iframe>

</div>

---

Share the answers to the following questions:

1. How many functions would your program have?
2. What are the names of the functions?
3. What order would you call these functions?
4. Go ahead and write the code based on your answers to questions 1 to 3.
