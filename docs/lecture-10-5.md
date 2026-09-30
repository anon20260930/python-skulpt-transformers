## Loop Patterns

Loops can be thought of as patterns. Below are a few basic loop patterns we have covered in class. Each example is presented as an executable block you can run and experiment with.

### 1) Simple repeat with `range()`
<div class='python-embed' editable=true>

```python
def for_loop_with_range(num):
    count = 0
    for i in range(num):
        count = count + 1
    return count

# Example call
print(for_loop_with_range(5))  # expected output: 5

```
</div>

### 2) For loop with selection (if inside loop)
<div class='python-embed' editable=true>

```python
def for_loop_with_selection(num):
    count = 0
    for i in range(num):
        if i % 2 == 0:
            count = count + 1
    return count

# Example call
print(for_loop_with_selection(7))  # counts even numbers: expected 4

```
</div>

### 3) Processing a list (or characters in a string)
<div class='python-embed' editable=true>

```python
def for_loop_with_list(lst):
    count = 0
    for item in lst:
        if len(item) > 5:
            count = count + 1
    return count

# Example call
words = ["short", "longerword", "tiny", "elevenchars"]
print(for_loop_with_list(words))  # expected output: 2

```
</div>

### 4) Searching a list (no short-circuit)
<div class='python-embed' editable=true>

```python
def for_loop_search(lst, target):
    found = False
    for item in lst:
        if item == target:
            found = True
    return found

# Example call
print(for_loop_search([1, 2, 3, 4], 3))  # expected True
print(for_loop_search(["a", "b"], "z"))  # expected False

```
</div>

### 5) Searching a list with `break` (short-circuit)
<div class='python-embed' editable=true>

```python
def for_loop_search_with_break(lst, target):
    found = False
    for i in lst:
        if i == target:
            found = True
            break
    return found

# Example call
print(for_loop_search_with_break(["x", "y", "z"], "y"))  # expected True

```
</div>

### 6) Searching a list with early `return` (short-circuit)
<div class='python-embed' editable=true>

```python
def for_loop_search_with_return(lst, target):    
    for i in lst:
        if i == target:
            return True            
    return False

# Example call
print(for_loop_search_with_return([10, 20, 30], 20))  # expected True

```
</div>

### 7) Producing a new list from an existing one
<div class='python-embed' editable=true>

```python
def for_loop_produce_new_list(lst):
    new_lst = []
    for i in lst:
        new_lst.append(i**2)
    return new_lst

# Example call
print(for_loop_produce_new_list([1, 2, 3, 4]))  # expected [1, 4, 9, 16]

```
</div>

### 8) Same idea with a `while` loop
<div class='python-embed' editable=true>

```python
def while_loop_produce_new_list(lst):
    new_lst = []
    i = 0
    while i < len(lst):
        new_lst.append(i**2)
        i = i + 1
    return new_lst

# Example call
print(while_loop_produce_new_list([1, 2, 3]))  # expected [0, 1, 4]

```
</div>

---

Each example above is self-contained: the function is defined and then called so you can run the block to see the result. Feel free to modify the inputs to explore the patterns.