## The accumulator pattern and the `while` loop

Here's a pattern you will see again and again in programming: the accumulator pattern.  This is a pattern where we have a variable that starts with some initial value and then gets updated in a loop.  The variable is called an accumulator because it accumulates values over time.

<div class='python-embed' editable=true>

```python
def foo(n):

    value = 0

    for i in range(n):
      value = value  +  1

    return value

print(foo(2))
```

</div>

<quiz>
What is printed by the following code?

```python
def foo(n):

    value = 0

    for i in range(n):
      value = value  +  1

    return value

print(foo(5))
```

- [ ] foo(5)
- [ ] 0
- [x] 5
- [ ] 25
- [ ] No output because of an infinite loop

</quiz>

<quiz>
What is printed by the following code?

```python
def foo(n):

    value = 0

    for i in range(n):
      value = value  +  2

    return value

print(foo(5))
```

- [ ] 5
- [x] 10
- [ ] 15
- [ ] 20

</quiz>

## The `while` loop

The `for` loop is not the only loop available.  Another really popular loop is called the `while` loop.  Here's how you can convert between the two types of loops.

### Using `for`
<div class='python-embed' editable=true>

```python
for i in range(10):
    print(str(i) +'-ith item printed')
```

</div>

### Using `while`

<div class='python-embed' editable=true>

```python
i = 0
while i < 10:
    print(str(i) +'-ith item printed')
    i = i + 1
```

</div>

In the above example, the core loop body (line 2 in example 1 and line 3 in example 2) remains the same.  The difference is in the setup of the loop.

Specifically, the looping variable is created before the `while` loop.  With the `for` loop, the looping variable is created on the same line as the `for` keyword.  This makes the while loop more flexible but also more complex.

*Rule of thumb*: Anything that can be expressed with a `for` loop can be expressed with `while`, but not the other way around.

Be familiar with the following terminologies:

  - Looping variable (same as `for` loop)
  - Initialization
  - Increment step (this is espeically important for `while` loops, because if you forget to increment, you will have an *infinite loop*)
  - Stopping condition

<quiz>

Which of the following is equivalent to the following `for` loop?

```python
x = 0
for y in range(2):
    print(x)
```

- [ ] <pre>while y < 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(0)</pre>
- [ ] <pre>y = 0<br>while y < 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(0)<br></pre>
- [x] <pre>y = 0<br>while y < 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(0)<br>&nbsp;&nbsp;&nbsp;&nbsp;y = y + 1<br></pre>
- [x] <pre>x = 0<br>y = 0<br>while y < 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)<br>&nbsp;&nbsp;&nbsp;&nbsp;y = y + 1<br></pre>
- [x] <pre>x = 0<br>y = 0<br>while y < 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)<br>&nbsp;&nbsp;&nbsp;&nbsp;y = y + 2<br></pre>

</quiz>

## The non-predetermined loop

In reality, virtually all programmers prefer to use `for` loops if we can help it.  But there are cases where we must use `while` loop.  Here's one example:

<div class='python-embed' editable=true>

```python
user_name = ""

while user_name != "quit":
    user_name = input("What is your name? ")
    print("Nice to meet you "+user_name+"!")

print("Goodbye")
```

</div>

Running the above code shows how the loop does not end until the user enter "quit" as their name.  This is an example of a **user interface** pattern.  Our program keep asking users for input until some end condition is met.  This is the primary reason why we use `while` loops.

<quiz>

What is printed by the following code?  Assuming the user enters "quit" at the first prompt.

```python
user_name = ""

while user_name == "quit":
    user_name = input("What is your name? ")
    print("Nice to meet you "+user_name+"!")

print("Goodbye")
```

- [x] <pre>Goodbye</pre>
- [ ] <pre>Nice to meet you quit!<br>Goodbye</pre>
- [ ] No output because of an infinite loop
- [ ] No output because of a syntax error

</quiz>

## The `break`

The above code works, but you'll noticed there's an extra "Nice to meet you" printed before quitting, which is really bad for user experience.  We want our program to finish the moment quit is entered, not after another useless print.

Here's the common pattern for a real user interface loop:

<div class='python-embed' editable=true>

```python
user_name = ""

while True:

    user_name = input("What is your name? ")
    if user_name == "quit":
      break
    print("Nice to meet you "+user_name+"!")

print("Goodbye")
```

</div>

<quiz>

What is the behavior of the following code?  Assuming the user enters "exit" at the first prompt.


```python

user_name = ""

while True:
    user_name = input("What is your name? ")

    if user_name == "quit" and user_name == "exit":
        break

    print("Nice to meet you "+user_name+"!")

print("Goodbye")
```

- [ ] <pre style='color: white; background-color: black'>Goodbye</pre>
- [ ] <pre style='color: white; background-color: black'>Nice to meet you exit!<br>Goodbye</pre>
- [ ] <pre style='color: white; background-color: black'>Nice to meet you exit!</pre>
- [x] Never mind what is printed out, there's an infinite loop!
- [ ] There's a syntax error

</quiz>
