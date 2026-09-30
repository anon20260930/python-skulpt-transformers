# Chapter 06 Part 3 Questions

<quiz>
What happens when this program runs?
```python
import turtle

def burger(t):
  for i in range(3):
    t.forward(20)
    t.backward(20)
    t.left(90)
    t.backward(10)
    t.right(90)

alex = turtle.Turtle()
```
- [ ] One burger is drawn
- [x] A turtle appears, but no burger is drawn
- [ ] The program crashes because burger was never defined
- [ ] Three burgers are drawn
</quiz>

<quiz>
What happens when this program runs?
```python
import turtle

def burger(t):
  for i in range(3):
    t.forward(20)
    t.backward(20)
    t.left(90)
    t.backward(10)
    t.right(90)

alex = turtle.Turtle()
burger()
```
- [ ] One burger is drawn
- [ ] Three burgers are drawn
- [x] The turtle is created and then the program crashes
- [ ] Nothing happens
</quiz>

<quiz>
How many turtles are created here?
```python
import turtle

def burger(x, y):
  t = turtle.Turtle()
  t.penup()
  t.goto(x, y)
  for i in range(3):
    t.pendown()
    t.forward(20)
    t.penup()
    t.backward(20)
    t.left(90)
    t.backward(10)
    t.right(90)

burger(-40, 0)
burger(0, 0)
burger(40, 0)
```
- [ ] 0
- [ ] 1
- [ ] 2
- [x] 3
</quiz>

<quiz>
How many turtles are created here?
```python
import turtle

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
burger(alex)
burger(alex)
burger(alex)
```
- [ ] 0
- [x] 1
- [ ] 2
- [ ] 3
</quiz>

<quiz>
In this function, what does t represent?
```python
def draw_rect(t, w, h):
  for i in range(2):
    t.forward(w)
    t.right(90)
    t.forward(h)
    t.right(90)
```
- [ ] The number of times the loop should run
- [ ] The width of the rectangle
- [x] A turtle object passed into the function
- [ ] A global variable that Python creates automatically
</quiz>

<quiz>
What is the main design benefit of this code?
```python
import turtle
def draw_header_bar(t):
  for i in range(2):
    t.forward(180)
    t.right(90)
    t.forward(30)
    t.right(90)

def draw_button(t):
  for i in range(2):
    t.forward(60)
    t.right(90)
    t.forward(25)
    t.right(90)

def draw_screen_layout(t):
  draw_header_bar(t)
  t.penup()
  t.right(90)
  t.forward(35)
  t.left(90)
  t.pendown()
  draw_button(t)
  t.penup()
  t.forward(120)
  t.pendown()
  draw_button(t)

alex = turtle.Turtle()
draw_screen_layout(alex)
```
- [ ] It avoids using loops
- [ ] It draws faster than any other approach
- [x] It breaks a big task into smaller reusable steps
- [ ] It only works with one specific turtle name
</quiz>

<quiz>
What happens when this program runs?
```python
import turtle

def draw(t):
  t.forward(50)

alex = turtle.Turtle()
draw(alex)
draw(alex)
```
- [ ] Two turtles are created
- [x] One turtle moves forward twice
- [ ] The program crashes because draw cannot be called twice
- [ ] Nothing is drawn
</quiz>

<quiz>
What happens when this program runs?
```python
import turtle

def draw(t):
  t.forward(50)

alex = turtle.Turtle()
draw(alex)
draw()
```
- [ ] One line is drawn and then another line is drawn
- [ ] Nothing is drawn
- [x] One line is drawn, then the program crashes
- [ ] The turtle is deleted after the first draw
</quiz>

<quiz>
Given the wireframe exercise, which is the best decomposition?
- [ ] One long block of drawing code with no functions
- [x] Separate functions for burger and rectangle, then a main composition
- [ ] A function for every single line segment
- [ ] A single function called main with 100 lines inside
</quiz>

<quiz>
For the wireframe app screen, a good minimum set is:
- [ ] draw_line only
- [ ] draw_burger only
- [x] draw_burger, draw_rect, and main composition code
- [ ] draw_triangle, draw_house, and draw_circle
</quiz>

<quiz>
What is the likely result if penup is removed before moving to a new location?
```python
t.goto(-40, 0)
```
- [ ] The turtle cannot move at all
- [ ] The program crashes immediately
- [x] Extra connecting lines may appear between shapes
- [ ] The rectangle becomes a triangle
</quiz>

<quiz>
What is true about function parameters in turtle drawing?
- [ ] Parameter names must match variable names outside the function
- [x] Parameter names are placeholders; any valid name can be used
- [ ] Parameters only work with numbers, not turtles
- [ ] Using parameters always creates a new turtle
</quiz>

<quiz>
What happens when this program runs?
```python
import turtle

def draw():
  for i in range(4):
    t.forward(30)
    t.right(90)

alex = turtle.Turtle()
draw()
```
- [ ] A square is drawn by alex
- [x] The turtle is created and then the program crashes
- [ ] Nothing happens at all
- [ ] A triangle is drawn
</quiz>

<quiz>
Why is calling a function multiple times useful in these lessons?
- [ ] It makes Python automatically optimize graphics
- [ ] It removes the need for loops
- [x] It avoids repeating the same code and makes patterns easier to draw
- [ ] It forces every shape to be identical size
</quiz>
