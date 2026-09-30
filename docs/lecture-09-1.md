You have been dealing with `string` as a data type for a while.

<div class='python-embed' editable=true>

```python
s = "this is a string"
print(s)
```

<iframe style='width: 100%; height: 150px' class='python_output'></iframe>
</div>

---
## Call string functions

There are many ways to manipulate and call functions on a string variable:

<div class='python-embed' editable=true>

```python
s = "The quick brown fox jumps over the lazy dog"
print(s[4:])
print(s[-3:])
print(s[:3])
print(s[10:15])
print(s.upper())
print(s.replace('cat','dog'))
```

<iframe style='width: 100%; height: 150px' class='python_output'></iframe>
</div>

---

<quiz>

What is printed by
```python
s = "banana"
print(s[1:4])
```

- [ ] b
- [ ] nan
- [x] ana
- [ ] ban

</quiz>

<quiz>

What is printed by
```python
s = "hello world"
print(s.replace("world", "there"))
```

- [ ] hello world
- [x] hello there
- [ ] there world
- [ ] hello

</quiz>

<quiz>

What is printed by
```python
s = "banana"
print(s.replace("a", "o"))
```

- [ ] bonana
- [ ] banano
- [x] bonono
- [ ] banana

</quiz>

---

## Accumulator Pattern

Here's possibly the most important concept for the entire
introductory programming class.  The **Accumulator Pattern**.

Perhaps the most un-natural concept here is that even
the most sophisticated computational algorithms 
are based on a simple restriction: *we process our data one step 
at a time*.

In the case of a string, the `for` loop can be used to iterate 
on every character, and we can use an accumulator variable to 
store data with every iteration.

<div class='python-embed' editable=true>

```python
s = "The quick brown fox jumps over the lazy dog"

# The following accumulator variable counts the total number of spaces
num_spaces = 0

# We look at one character at a time.
for c in s:
    if c == ' ':
        num_spaces = num_spaces + 1

print('There are',num_spaces, 'spaces in the sentence.')
```

<iframe style='width: 100%; height: 150px' class='python_output'></iframe>
</div>

---

<quiz>

What is printed by
```python
s = "The slow turtle is faster than a fast turtle"
num_turtles = 0

for c in s:
    if c == 'turtle':
        num_turtles = num_turtles + 1

print(num_turtles)
```

- [x] 0
- [ ] 1
- [ ] 2
- [ ] None of the above

</quiz>

---

## Processing words

Use the `.split()` function to break a sentence into words, then iterate over it.

<div class='python-embed' editable=true>

```python
s = "The quick brown fox jumps over the lazy dog"
# words is a list of words without spaces
words = s.split()
final_sentence = ""

for w in words:
    if w == 'fox' or w == 'dog':
        final_sentence = final_sentence + 'cat'
    else:
        final_sentence = final_sentence + w 

# Noticed there are no spaces, can you put the spaces back into 
# the final_sentence?
print(final_sentence)
```

<iframe style='width: 100%; height: 150px' class='python_output'></iframe>
</div>

---

<quiz>

What is the output of the following code?

```python
s = "The quick brown fox jumps over the lazy dog"
# words is a list of words without spaces
words = s.split()
final_sentence = ""

# This is tricky: you need to ask yourself what is the purpose of i
i = 0

for w in words:
    if i % 2 == 0:
        final_sentence = final_sentence + w.upper()
    else:
        final_sentence = final_sentence + w.lower()
    i = i + 1

# Noticed there are no spaces, can you put the spaces back into 
# the final_sentence?
print(final_sentence)
```

- [ ] THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
- [ ] THE quick BROWN fox JUMPS over THE lazy DOG
- [ ] theQUICKbrownFOXjumpsOVERtheLAZYdog
- [x] THEquickBROWNfoxJUMPSoverTHElazyDOG

</quiz>

---

## Unicode

Special characters are characters that, when printed, have special meaning.
For instance, `\n` is called a new line character and prints a new line instead of `\n`.

If you use `\U`, you can insert special characters you cannot type via 
the keyboard.  For instance, here are the codes for all emojis: [https://unicode.org/emoji/charts/full-emoji-list.html](https://unicode.org/emoji/charts/full-emoji-list.html)

You can also use the `chr()` function to return a character based on 
its unicode.

This is how we use special characters:

<div class='python-embed' editable=true>

```python
s1 = "The\nquick brown \U0001F98A\njumps over\tthe lazy \U0001F436\n"
s2 = "Use double \\ to print the slash character"
s3 = "The slow " + chr(0x1f98a) + " will be eaten by the fast " + chr(0x1f436)


# The print function itself adds a newline to the end of s when printed.
# You can remove the newline using print(s, end='')
print(s1)
print(s2)
print(s3)
```

<iframe style='width: 100%; height: 150px' class='python_output'></iframe>
</div>

---

<quiz>

What would the following code print?

```python

# 0x1F600 is the hexadecimal code point for the grinning face emoji 😀
for i in range(5):
    print(chr(0x1F600 + i), end=' ')

```

- [ ] 😀😁😂😃😄
- [x] 😀 😁 😂 😃 😄
- [ ] \U0001F600 \U0001F601 \U0001F602 \U0001F603 \U0001F604
- [ ] 0x1F600 0x1F601 0x1F602 0x1F603 0x1F604

</quiz>

---

## Final Notes

There are many string functions available.  Take a look at
[https://www.w3schools.com/PYTHON/python_ref_string.asp](https://www.w3schools.com/PYTHON/python_ref_string.asp) for a list of all these
functions.  Some of the other useful functions are `find()`, 
`startswith()`, and `endswith()`.