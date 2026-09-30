## Your first line of Python

The term *Hello World* is often used to describe the first program people write.
In python it looks like the following:

```python
print("Hello World")
```

Although it seems simple, the above actually illustrates the following concepts:

* **function** - The word *print* is an example of a function, without print, a program would not output anything.
* **statement** - A line of valid code.  It executes when we click the "Run" button.
* **calling function** - When we run the above code, we activate the **print** function to perform the print task.
* **data** - These are not functions, these are data we provide to our program.
* **string** - "Hello World" is a string, basically a series of characters.  In python, we must use either single 
quote or double quote to indicate a piece of data is a string.

NOTE: Even if a program is valid, without calling the print() function, it won't display anything to the user.

### Practice

<quiz>

Which of the following is a valid python program:

- [ ] `print Goodbye World`
- [ ] `print(Goodbye World)`
- [ ] `print(Goodbye)`
- [x] `"Goodbye"`
- [x] `print('Goodbye')`

</quiz>

## What is an Expression?

An **expression** is any piece of code that Python "evaluates" to produce a single value. Think of it like a math problem that needs solving before Python can do anything else with it.

* **Simple Expressions:** `5`, `"Hello"`, or `x` (these evaluate to themselves or their stored value).
* **Complex Expressions:** `3 + (5 / 2)` or `x * 10`.

### Order of Operations (PEMDAS)

Python evaluates expressions following a specific order:

1. **P**arentheses `()`
2. **E**xponents `**`
3. **M**ultiplication, **D**ivision, **M**odulo, **F**loor Division `*`, `/`, `%`, `//`
4. **A**ddition and **S**ubtraction `+`, `-`

---

### Practice
<quiz>

Which of these is an expression that evaluates to 10?

- [ ] x = 10
- [ ] "10"
- [x] 2 * 3 + 4
- [ ] 2 * (3 + 4)

</quiz>

---

## What is a Function Call?

Python has many built-in **functions** to perform some kind of processing.  Programmers spent hours 
studying these built-in functions to understand what are the capabilities of a system.  Here are
all the built-in functions available in python.  You'll notice they are usually written with 
their name followed by parentheses to emphasize that these are functions.

<a href='https://docs.python.org/3/library/functions.html' target=_blank>
https://docs.python.org/3/library/functions.html</a>

When we want to activate a function, we say that we are *calling* a function.

Some functions require additional information.  We put the information inside the parentheses.

---

### Practice

<quiz>

How many functions are being called in the program below:

```python
print(chr(60))
```

- [ ] 1
- [x] 2
- [ ] 3
- [ ] 4

</quiz>

---

## Data Types and `type()` function
Once an expression is evaluated, the resulting value has a **Data Type**. The `type()` function reveals this classification.

* **`int`**: Whole numbers (`7`, `-2`).
* **`float`**: Numbers with decimals (`7.0`, `3.14`).
* **`str` (String)**: Text inside quotes (`"7"`, `"High"`).

### Practice

<quiz>

What is printed by:

```python
print(type("123"))
```

- [x] `<class 'str'>`
- [ ] `<class 'int'>`
- [ ] `123`
- [ ] `<class 'float'>`

</quiz>

---

## Division and Remainder Operators
Python has three ways to divide, and they behave very differently:

| Operator | Name | Behavior | Result Example |
| :--- | :--- | :--- | :--- |
| **`/`** | Division | Always results in a **float** | `10 / 2` → `5.0` |
| **`//`** | Floor Division | Chops off the decimal (integer result) | `11 // 3` → `3` |
| **`%`** | Modulo | Finds the **remainder** | `11 % 3` → `2` |

### Practice

<quiz>

What is the result of `15 // 4`?

- [ ] 3.75
- [ ] 4
- [x] 3
- [ ] 0

</quiz>

---

## What is a Variable?

A **variable** is a named location in the computer's memory used to store data. Think of it as a **labeled box**.

* **The Label:** This is the variable name (e.g., `price`, `user_name`).
* **The Content:** This is the value stored inside (e.g., `19.99`, `"Alice"`).

### Key Characteristics of Variables:

1.  **They are dynamic:** You can put an `int` in a box, then later replace it with a `str`.
2.  **They hold one value at a time:** When you assign a new value to an existing variable, the old value is overwritten.
3.  **Assignment is one-way:** `x = y` means "Copy the value of y into x." If y changes later, x does not change automatically.

<iframe width="500" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=a%20%3D%2011%0Ab%20%3D%20%22This%20vibe%20is%20good%22%0Aa%20%3D%2012&codeDivHeight=400&codeDivWidth=350&curInstr=3&origin=opt-frontend.js&py=311"> </iframe>

### Practice

<quiz>

What is printed by the following code?

```python
y = 7
x = 3
print(y)
```

- [ ] 3
- [x] 7
- [ ] x
- [ ] y

</quiz>

---

## Assignment and Sequential Execution
A **statement** like `x = 5 + 2` uses the assignment operator (`=`). It tells Python: "Evaluate the expression on the right, and store the result in the name on the left."

* **Sequential Execution:** Python reads code from top to bottom. If you try to `print(y)` before you have assigned a value to `y`, you will get a `NameError`.
* **The `input()` trap:** The `input()` function always saves data as a **string**. To do math, you must convert it: `age = int(input("Age? "))`.

### Practice 

<quiz>

What happens if you run:

```python
age = input("Age?") # User types 20
print(age + 1)
```

- [ ] 21
- [ ] "201"
- [x] It crashes (TypeError)
- [ ] 20

</quiz>

---

## Common Errors 

* **TypeError:** Trying to do math with incompatible types (e.g., a string minus a string).
* **NameError:** Using a variable name that hasn't been defined yet (often caused by using a variable before it is assigned).
* **Literal vs. Variable:** `print("x")` prints the letter **x** (a string literal); `print(x)` prints the **value** stored inside the variable x.

### Practice 

<quiz>

What is the output of the following code?

```python
price = 1000
print(price)
price = high
print(price)
```

- [x] 1000
- [ ] high
- [ ] price
- [x] NameError
- [ ] TypeError

</quiz>

---

## Final Notes

The # symbol indicates a *comment* anything written after the # symbol is not code, it's meant for communication with the person reading the code.

The *result of an evaluation* is different than the *output* of a program.  *Output* refers specifically to something that the user consumes.  The *result* from evaluating an expression can be consumed by another part of the program, like being assigned to a variable.