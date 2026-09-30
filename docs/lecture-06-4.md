## Functions That Return Values

Sometimes a function does not print or draw anything.
Instead, it computes a result and sends that result back to the rest of the program.

We do this with the `return` keyword.

```python
def add_two(n):
    return n + 2

result = add_two(5)
print(result)
```

In this example:

- `add_two(5)` gives back `7`
- that value is stored in `result`
- then we print `result`

---

## `print()` vs `return`

`print()` shows text on the screen.

`return` sends a value back to whatever called the function.

```python
def say_hello(name):
    print("Hello " + name)

def make_hello(name):
    return "Hello " + name

say_hello("Sam")
text = make_hello("Lee")
print(text)
```

Both examples can show output, but they work differently:

- `say_hello` prints directly
- `make_hello` returns a string that can be reused

---

### Practice

<quiz>

What does this code print?

```python
def double(n):
    return n * 2

print(double(4))
```

- [ ] 4
- [x] 8
- [ ] n * 2
- [ ] Error

</quiz>

<quiz>

What value is stored in `x`?

```python
def add(a, b):
    return a + b

x = add(3, 5)
```

- [ ] 3
- [ ] 5
- [x] 8
- [ ] add(3, 5)

</quiz>

---

## Using a Returned Value in Another Expression

Returned values can be used right away in more math.

```python
def square(n):
    return n * n

answer = square(3) + 1
print(answer)
```

`square(3)` returns `9`, so `answer` becomes `10`.

---

### Practice

<quiz>

What does this code print?

```python
def times_ten(n):
    return n * 10

print(times_ten(2) + times_ten(1))
```

- [ ] 3
- [ ] 12
- [x] 30
- [ ] 210

</quiz>

<quiz>

Choose all true statements:

- [x] A function can return a value without printing anything.
- [x] You can store a returned value in a variable.
- [ ] `return` always prints to the screen.
- [x] Returned values can be used in expressions.

</quiz>

---

## assert()

`assert` is a quick way to check if something is true.

If the condition is true, the program continues.
If the condition is false, Python raises an error.

```python
assert 2 + 2 == 4
assert 10 > 3
```

Functions and `assert` work very well together.
Since functions return values, we can assert that the returned value is what we expect.

```python
def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(10, 1) == 11
```

This is useful for quickly checking if your function is working correctly.

In fact, I use `assert()` function to auto-grade all your assignments.

### Practice

<quiz>

Which `assert` checks the `double` function correctly?

```python
def double(n):
    return n * 2
```

- [ ] `assert double(4) == 4`
- [x] `assert double(4) == 8`
- [ ] `assert double == 8`
- [ ] `assert n * 2 == 8`

</quiz>

---

## The main() function

Instead of writing un-indented lines in a python file, we generally like to have only one un-indented line that calls a function named `main()` to kick off a program.  As per the following pattern.

```python
def greeting(name):
    return "Hello " + name

def main():
    user_name = input("Please tell me your name: ")
    print(greeting(user_name))

# Kicks off the program
main()
```

Sometimes you will also see this pattern.  It's the same idea as above:

```python
def greeting(name):
    return "Hello " + name

def main():
    user_name = input("Please tell me your name: ")
    print(greeting(user_name))

# Kicks off the program
if __name__ == "__main__":
    main()
```

You can read more about the above at [https://runestone.academy/ns/books/published/capilanouniversity_thinkcspy_202620/Functions/mainfunction.html](https://runestone.academy/ns/books/published/capilanouniversity_thinkcspy_202620/Functions/mainfunction.html)

---

## Final Notes

- Use `print()` when you want to display something for the user.
- Use `return` when you want to send data to other parts of your program.
- Once a function ends when it sees `return`.  All lines that comes after `return` are ignored.
- Beginner rule: if you need the result later, return it.
