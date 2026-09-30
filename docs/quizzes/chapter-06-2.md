# Chapter 06 Part 1 Questions

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw(t):
  for i in range(6):
    t.forward(100)
    t.left(90)
justin = turtle.Turtle()
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] A turtle symbol representing the variable t is in the middle of the canvas
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw(justin):
  for i in range(6):
    justin.forward(100)
    justin.left(90)
justin = turtle.Turtle()
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] A turtle symbol representing the parameter justin is in the middle of the canvas
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
justin = turtle.Turtle()
def draw(justin):
  for i in range(6):
    justin.forward(100)
    justin.left(90)
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] An empty canvas 
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
justin = turtle.Turtle()
def draw():
  for i in range(6):
    justin.forward(100)
    justin.left(90)
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] An empty canvas 
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
justin = turtle.Turtle()
def draw():
  for i in range(6):
    justin.forward(100)
    justin.left(90)
draw()
```
- [x] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [ ] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] An empty canvas 
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw():
  for i in range(6):
    justin.forward(100)
    justin.left(90)
justin = turtle.Turtle()
draw()
```
- [x] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [ ] A turtle symbol representing the variable justin is in the middle of the canvas
- [ ] An empty canvas 
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw():
  for i in range(6):
    t.forward(100)
    t.left(90)
justin = turtle.Turtle()
draw()
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] justin turtle is created and the program crashes
- [ ] An empty canvas
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw(t):
  for i in range(6):
    t.forward(100)
    t.left(90)
justin = turtle.Turtle()
draw()
```
- [ ] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [x] justin turtle is created and the program crashes
- [ ] An empty canvas
- [ ] Nothing, the code crashes right away
</quiz>

<quiz>
What happens when the following program is executed?
```python
import turtle
def draw(t):
  for i in range(6):
    t.forward(100)
    t.left(90)
justin = turtle.Turtle()
draw(justin)
```
- [x] A square is drawn on the screen
- [ ] A hexagon is drawn on the screen.
- [ ] justin turtle is created and the program crashes
- [ ] An empty canvas
- [ ] Nothing, the code crashes right away
</quiz>
