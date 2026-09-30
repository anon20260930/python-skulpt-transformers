## Loops

Instead of writing the same command multiple times, we use a **for loop**.

For python, the word **for** is NOT a *function*, NOT a variable name, NOR does it evaluate to anything.
It is known as a *keyword* that has special meaning when constructing various statements.

Here's a list of all the python keywords: [https://www.w3schools.com/python/python_ref_keywords.asp](https://www.w3schools.com/python/python_ref_keywords.asp).

### Practice

<quiz>

What is the output of the following code:

```
for = 1
print(for + 1)
```

- [ ] 1
- [ ] 2
- [ ] for + 1
- [x] Error 

The error here is that we cannot use the `for` keyword

</quiz>

---

## Repeating with range() function and Indentation

```python
for i in range(100):
    print('hi')
```

The above code will `print('hi')` one hundred times.  Pay attention to special keywords and characters 
such as `in` and `:`.

Also look at how indentation works.  Only indented lines directly after the `for` line will repeat.

When coding in the textbook, we indent by using 4 spaces.


### Practice 

<quiz>
Which of the following is equivalent to the following code:

```python
print('abc')
print('abc')
print('abc')
print('abc')
```

- [ ] <pre>for i in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("abc")</pre>
- [x] <pre>for i in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("abc")</pre>
- [x] <pre>for i in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("abc")<br>&nbsp;&nbsp;&nbsp;&nbsp;print("abc")</pre>
- [ ] <pre>for i in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("abc")<br>print("abc")</pre>

</quiz>

<quiz>
Which of the following is equivalent to the following code:

```python
print("hello")
print("hello")
print("hello")
print()
```

- [ ] <pre>for i in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("hello")<br>print()</pre>
- [x] <pre>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("hello")<br>print()</pre>
- [ ] <pre>for i in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("hello")<br>print()</pre>
- [x] <pre>print("hello\n" * 3)</pre>

</quiz>

---

## 2 ways to repeat

Instead of using `range()`, we can simply provide the `for` loop with a list of items, like this:

```python
for i in [1,2,3,4,5]:
    print("hi")
```

The above would print "hi" 5 times.

## The looping `variable`

So here's when things start to become complex.  Look at the code above, there's an `i` following the 
`for` keyword.  The `i` is a *variable*, but notice that we don't create it using the `=` line, we
are creating it with the `for` keyword.  This varible will have a different value each time the
loop repeats.  Try running the following code:

```python
for i in ['John', 'Paul', 'George', 'Ringo']:
    print("hi " + i)
```

Since `i` is a variable we create, we can name it anything we want.

### Practice

<quiz>

Which of the following is equivalent to:

```python
for i in ['Rick', 'Morty']:
    print("Bye " + i)
```

- [x] <pre>for name in ['Rick', 'Morty']:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Bye " + name)</pre> 
- [x] <pre>for n in ['Rick', 'Morty']:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Bye " + n)</pre> 
- [ ] <pre>for n in ['Rick', 'Morty']:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Bye " + name)</pre> 
- [x] <pre>for beth in ['Rick', 'Morty']:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Bye " + beth)</pre> 

</quiz>


## Introduction to Turtle Graphics

A **module** allows your Python program to have additional capabilities beyond the built-in functions.

Python has a module called **turtle** that allows us to create a graphical window and draw shapes using a "turtle" that moves around the screen.

To use it, we first need to import the module and create a turtle object:

```python
import turtle

# Create a turtle named 'elsie'
elsie = turtle.Turtle()
elsie.pendown()
```

---

## Basic Turtle Commands

The turtle follows simple instructions to move and turn:

*   **`forward(distance)`**: Moves the turtle forward by the specified distance.
*   **`backward(distance)`**: Moves the turtle backward.
*   **`left(angle)`**: Turns the turtle counter-clockwise by the specified angle (in degrees).
*   **`right(angle)`**: Turns the turtle clockwise.

---

### Practice

<quiz>

Which of the following code could produce the following image?

<iframe width='500px' height='300px' src='../extras/python_code.html#aW1wb3J0IHR1cnRsZQp0dXJ0bGUuZm9yd2FyZCg1MCkKdHVydGxlLnJpZ2h0KDkwKQp0dXJ0bGUuZm9yd2FyZCgxMDAp'></iframe>

- [ ] elsie.forward(100)<br>elsie.right(90)<br>elsie.forward(50)
- [ ] elsie.forward(50)<br>elsie.left(90)<br>elsie.forward(100)
- [x] elsie.forward(50)<br>elsie.right(90)<br>elsie.forward(100)
- [ ] elsie.backward(50)<br>elsie.right(90)<br>elsie.forward(100)

</quiz>

---

## Multiple Turtles

You can create more than one turtle. Each turtle can have its own name and properties.

```python
elsie = turtle.Turtle()
elmer = turtle.Turtle()

elsie.color("red")
elmer.color("blue")
```

Note: Calling `turtle.color("blue")` directly (without a turtle name) might not work as expected if you are using multiple turtle objects.

---

### Practice

<quiz>

What is the final color of the turtle `elmer`?
```python
elsie = turtle.Turtle()
elmer = turtle.Turtle()
elsie.color("red")
elmer.color("green")
elsie.color("blue")
```

- [ ] red
- [x] green
- [ ] blue
- [ ] black

</quiz>

---

## Repetition with `for` Loops

Instead of writing the same command multiple times, we use a **for loop**.

```python
for i in range(4):
    elsie.forward(100)
    elsie.left(90)
```

The code above will draw a square. 

*   **`for i in range(4):`** tells Python to repeat the indented block 4 times.
*   **Indentation** is crucial! Everything indented under the `for` statement is part of the loop.

---

### Practice

<quiz>

How many times will the turtle move forward in this code?

```python
for i in range(3):
    elsie.forward(100)
    elsie.left(120)
elsie.forward(50)
```

- [ ] 3
- [x] 4
- [ ] 5
- [ ] 1

</quiz>

---

## The `range()` function

The `range()` function generates a sequence of numbers.

*   **`range(n)`**: Generates numbers from `0` to `n-1`.
*   **`range(start, stop)`**: Generates numbers from `start` to `stop-1`.
*   **`range(start, stop, step)`**: Generates numbers from `start`, incrementing by `step`, up to (but not including) `stop`.

Example: `list(range(1, 5))` produces `[1, 2, 3, 4]`.

---

### Practice

<quiz>

What does `list(range(2, 11, 3))` produce?

- [ ] [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
- [ ] [2, 5, 8, 11]
- [x] [2, 5, 8]
- [ ] [3, 6, 9]

</quiz>

---

## Modules and Randomness



The **random** module provides functions for generating random numbers.

```python
import random

# Generate a random number between 1 and 10 (inclusive)
number = random.randrange(1, 11)
```

---

### Practice

<quiz>

Which instruction would simulate rolling a standard 6-sided die (returning a number from 1 to 6)?

- [ ] `random.randrange(6)`
- [ ] `random.randrange(1, 6)`
- [x] `random.randrange(1, 7)`
- [ ] `random.randrange(0, 6)`

</quiz>

---

## Final Notes

*   **Loops** help us avoid repetitive code (**DRY** - Don't Repeat Yourself).
*   **Indentation** defines the "scope" of the loop.
*   **Modules** like `turtle` and `random` extend Python's capabilities.
*   Always remember that `range(stop)` does **not** include the `stop` value itself.
