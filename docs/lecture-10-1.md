## What's a List?

A list is semantically similar to a string, but instead of being a sequence of characters, it's a sequence of items.  Same syntax as strings, but with square brackets instead of quotes.

<div class='python-embed' editable=true>

```python
my_string = "The quick brown fox jumps over the lazy dog"

my_list = ["T","h","e"," ","q","u","i","c","k"," ","b","r","o","w","n"," ","f","o","x"," ","j","u","m","p","s"," ","o","v","e","r"," ","t","h","e"," ","l","a","z","y"," ","d","o","g"]

print(len(my_string) == len(my_list)) # 43
print(my_string[1] == my_list[1]) # True

print(my_string[0:9]) # The quick 
print(my_list[0:9]) # ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k']
print("".join(my_list[0:9])) # The quick 

print(my_string[0:9] == "".join(my_list[0:9])) # True

print(my_string.split()[1] == 'quick') # True

print(my_string.split() == my_list.split()) # Error

```

</div>

<quiz>

Which of the following would result in True for the above list and string?

- [x] `my_string[19] == my_list[19]`
- [x] `len(my_string[16:19]) == len(my_list[-3:])`
- [ ] `my_string[0:3] == my_list[0:3]`
- [x] `my_string[0:3] == "".join(my_list[0:3])`
- [ ] `my_string.split() == my_list.split()`
- [x] `a = my_string.split()`<br>`b = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]`<br>`print(a == b)`
- [x] `['The', 'quick'] + ['brown', 'fox'] == my_string.split()[0:4]`

</quiz>

## Important Notes On Lists

There are a bunch of important things to know about lists that are covered in the textbook.  Make sure to read the textbook and understand the following:

    - Lists can contain any type of item, including other lists.
    - Lists are mutable, which means you can change their contents after they are created.
    - Lists have many built-in methods for adding, removing, and manipulating items.

## The Accumulator Pattern

If you know the following pattern, you can probably get part marks for most of the questions I'll ask in the next midterm and final exam.

<div class='python-embed' editable=true>

```python

# You are provided with a list of items, 
# here we have a list of "strings"

list_of_items = ["dog", "cat", "mouse", "horse"]
total_characters = 0

for item in list_of_items:
    # Do something with the item, in this case
    # I'm simply adding up all the characters
    total_characters = total_characters + len(item)
    
print("The total number of characters is " + str(total_characters))

```
</div>

Most of the time, **especially during exams**, we would express the above wrapped around a function, like this:

<div class='python-embed' editable=true>

```python

def count_all_characters(list_of_items):
    total_characters = 0
    for item in list_of_items:
        # Do something with the item, in this case
        # I'm simply adding up all the characters
        total_characters = total_characters + len(item)
    return total_characters

total_characters = count_all_characters(["dog", "cat", "mouse", "horse"])
print("The total number of characters is " + str(total_characters))

```
</div>

In the code below, we are doing something similar, but instead of counting characters, we are accumulating a list of characters into a new list.  This is a common pattern that you should be familiar with.

<div class='python-embed' editable=true>

```python
my_string = "The quick brown fox jumps over the lazy dog"

my_list = ["T","h","e"," ","q","u","i","c","k"," ","b","r","o","w","n"," ","f","o","x"," ","j","u","m","p","s"," ","o","v","e","r"," ","t","h","e"," ","l","a","z","y"," ","d","o","g"]

chars = []

for c in my_string:
    chars.append(c) # chars = chars + [c] would also work

print(chars == my_list) # True
```
</div>

### Exercise

Modify the function below so that we accumulate the characters if the name of the animal has more than 3 characters.

Also add an appropriate assert statement to test your function.

<div class='python-embed' editable=true>

```python

def count_long_names(list_of_animals):
    total_characters = 0
    for item in list_of_animals:
        total_characters = total_characters + len(item)
    return total_characters

total_characters = count_long_names(["dog", "cat", "mouse", "horse"])
print("The total number of characters is " + str(total_characters))

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):

    def test_assert_present(self):
        self.assertTrue("assert" in code, "You didn't use assert in your code")
        
    def test_count_long_names(self):
        self.assertTrue(count_long_names(["dog", "cat", "mouse", "horse", "elephant"]) == 18, "You didn't set the values properly") 
        
unittest.main()

```
</div>