<quiz>

The function `check_bounds` is a Boolean function.

```python
def check_bounds(val, low):
    return val >= low or val == 0
```

- [x] True
- [ ] False

</quiz>

<quiz>

The following code prints 99 on the screen.

```python
original = [10, 20, 30]
alias = original
alias[2] = 99
print(original[2])
```

- [x] True
- [ ] False

</quiz>

<quiz>

In Python `"beetle"` <= `"bear"`.

- [ ] True
- [x] False

</quiz>

<quiz>

This code will result in an error:

```python
lst = [1, 2, 3]
print(lst[-4])
```

- [x] True
- [ ] False

</quiz>

<quiz>

The following code prints `cats` on the screen.

```python
word = "bats"
word[0] = "c"
print(word)
```

- [ ] True
- [x] False
</quiz>

<quiz>

The expression `10 > 20 or 5 == 5` evaluates to True.

- [x] True
- [ ] False

</quiz>

<quiz>

The expression ` True and False` evaluates to True.

- [ ] True
- [x] False

</quiz>


<quiz>

Which of the following Python range expression will result in this list:

```python
[25, 20, 15, 10, 5, 0]
```

- [x] `range(25, -1, -5)`
- [ ] `range(25, 0, -5)`
- [x] `range(25, -5, -5)`
- [ ] `range(25, -6, -5)`

</quiz>

<quiz>

Given the following Python assignments:

```python
question = ['life','universe','everything']
answer = 42
```

What is the data type of `question`?

- [ ] `int`
- [ ] `float`
- [ ] `str`
- [ ] `bool`
- [x] `list`
- [ ] None of the above

</quiz>

<quiz>

Given the following Python assignments:

```python
question = ['life','universe','everything']
answer = 42
```

What is the data type of `[question, answer]`?

- [ ] `int`
- [ ] `float`
- [ ] `str`
- [ ] `bool`
- [x] `list`
- [ ] None of the above

</quiz>

<quiz>

Given the following Python assignments:

```python
question = ['life','universe','everything']
answer = 42
```

What is the data type of `question[1]`?

- [ ] `int`
- [ ] `float`
- [x] `str`
- [ ] `bool`
- [ ] `list`
- [ ] None of the above

</quiz>

<quiz>

Given the following Python assignments:

```python
question = ['life','universe','everything']
answer = 42
```

What is the data type of `question == answer`?

- [ ] `int`
- [ ] `float`
- [ ] `str`
- [x] `bool`
- [ ] `list`
- [ ] None of the above

</quiz>

<quiz>

Given the following Python assignments:

```python
question = ['life','universe','everything']
answer = 42
```

What is the data type of `question[2] = answer`?

- [ ] `int`
- [ ] `float`
- [ ] `str`
- [ ] `bool`
- [ ] `list`
- [x] None of the above

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
m = 12
n = 4
if m < 10:
    print("Alpha")
else:
    if m > n:
        print("Beta")
    else:
        print("Gamma")
print("Delta")
```

- [ ] <pre>Alpha<br>Delta</pre>
- [ ] <pre>Beta<br>Gamma</pre>
- [ ] <pre>Gamma<br>Delta</pre>
- [x] <pre>Beta<br>Delta</pre>

</quiz>

<quiz>

**Code Tracing** Determine the output of the following program:

```python
a = 5
b = 8
c = 5

if a > b or a > c:
    print("square")
elif a == c and b > a:
    print("circle")
else:
    print("triangle")
```

- [ ] square
- [x] circle
- [ ] triangle
- [ ] <pre>circle<br>triangle</pre>

</quiz>

<quiz>
**Code Tracing** Determine the output of the following program:
```python
k = 0
while k < 8:
    k = k + 3
print(k)
```
- [ ] 6
- [ ] 8
- [x] 9
- [ ] <pre>0<br>3<br>6<br>9</pre>
</quiz>

<quiz>
**Code Tracing** Determine the output of the following program:
```python
countdown = -5
factor = 4
while countdown < -1:
    print("##")
    countdown = countdown + 2
print(factor)
```
- [x] <pre>##<br>##<br>4</pre>
- [ ] <pre>##<br>##<br>##<br>4</pre>
- [ ] 4
- [ ] <pre>##<br>-1</pre>
</quiz>

<quiz>
**Code Tracing** Determine the output of the following program:
```python
text = 'Peppermint'
text[0] = 'p'
print(text)
```
- [ ] peppermint
- [ ] Peppermint
- [x] TypeError (Strings are immutable)
- [ ] None
</quiz>

<quiz>
**Code Tracing** Determine the output of the following program:

```python
def find_stop(s):
    markers = "XYZxyz"
    result = ""
    for letter in s:
        if letter in markers:
            return result
        result = result + letter

print(find_stop("BlueberryXShake"))
```

- [ ] BlueberryXShake
- [ ] Blueberry
- [x] Blueberr
- [ ] Empty string
</quiz>

<quiz>
Given a list of numbers as input, which of the following code will successfully return the sum of the list? (choose all that applies)

- [ ] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;a = 0<br>&nbsp;&nbsp;for i in range(len(nums)):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = a + 1<br>&nbsp;&nbsp;return a</pre>
- [x] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;a = 0<br>&nbsp;&nbsp;for i in nums:<br>&nbsp;&nbsp;&nbsp;&nbsp;a = a + i<br>&nbsp;&nbsp;return a</pre>
- [ ] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;a = 0<br>&nbsp;&nbsp;for i in nums:<br>&nbsp;&nbsp;&nbsp;&nbsp;a = a + i<br>&nbsp;&nbsp;return i</pre>
- [x] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;a = 0<br>&nbsp;&nbsp;for i in range(len(nums)):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = a + nums[i]<br>&nbsp;&nbsp;return a</pre>
- [ ] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;for i in range(nums):<br>&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1<br>&nbsp;&nbsp;return i</pre>
- [ ] <pre>def sum_of_numbers(nums):<br>&nbsp;&nbsp;a = 0<br>&nbsp;&nbsp;for i in range(len(nums)):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = a + nums[a]<br>&nbsp;&nbsp;return a</pre>
</quiz>

<quiz>

Consider the following image:

<iframe src="https://env3d-lessons.github.io/python-thinkcspy-lectures/extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyA9PSAxNTAgYW5kIGNvbCA8IDE1MDogICAgICAKICAgICAgaW1nLnNldFBpeGVsKGNvbCwgcm93LCBpbWFnZS5QaXhlbCgwLDAsMCkpCiAgICBlbHNlOiAgICAgIAogICAgICBpbWcuc2V0UGl4ZWwoY29sLCByb3csIGltYWdlLlBpeGVsKDI1NSwyNTUsMjU1KSkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLCAzMDApCmltZy5kcmF3KHdpbik=" style="width: 300px; height: 300px; border: 1px solid #ccc;"></iframe>

```python
import image
img = image.EmptyImage(300,300)
for row in range(300):
  for col in range(300):
    if """fill in missing condition..""":
      img.setPixel(col, row, image.Pixel(0,255,0))
    else:      
      img.setPixel(col, row, image.Pixel(255,0,0))
win = image.ImageWin(300, 300)
img.draw(win)
```

Which of the following can be put in the condition to produce the image?

- [ ] <pre>row == col and col < 150<pre>
- [ ] <pre>row < col and col > 150<pre>
- [x] <pre>row == 150 and col < 150<pre>
- [ ] <pre>row < 150 and col == 150<pre>

</quiz>

<quiz>

Which of the following functions could be called to print the following pattern on screen:

<pre>
*
**
***
****
</pre>

- [ ] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(1, n+1):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>print_pattern(3)</pre>
- [x] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(1, n+1):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>print_pattern(4)</pre>
- [ ] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>print_pattern(4)</pre>
- [ ] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i+1)<br>print_pattern(4)</pre>
- [x] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * (i+1))<br>print_pattern(4)</pre>
- [ ] <pre>def print_pattern(n):<br>&nbsp;&nbsp;for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>print_pattern(5)</pre>

</quiz>

