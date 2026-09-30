## Reminder

**Computers are *finite* machines**, which means that they have a finite amount of memory and a finite amount of processing power.  A computer can only look at one piece of data at a time.  This is why when we process a list or file, we can only look at one item at a time.  This is why we have to write loops.

## File Processing Patterns

Processing a file is a common task in programming, and there are some common patterns that you can use to process files.  It turns out, these are very similar patterns to the ones we have been using to process lists.  Since a file variable is essentially a list of strings.

When we read a line from a file, it usually ends with a special character called the newline character, which is represented by `\n`.  This character indicates the end of a line.  When we print a string that contains `\n`, it will create a new line in the output.

Since the print function itself adds a newline character at the end of the string it prints, if we print a string that already ends with a newline character, we will get an extra blank line in the output.

Here's a list of strings:

<div class='python-embed' editable=true>

```python

# poke_types is a list of strings, where each string is a line of the type.txt file
pokemon_types = ["bulbasaur grass poison\n", "ivysaur grass poison\n", "venusaur grass poison\n", "charmander fire\n", "charmeleon fire\n", "charizard fire flying\n", "squirtle water\n", "wartortle water\n", "blastoise water\n", "caterpie bug\n"]

def find_grass_pokemon():
    grass_pokemon = []
    for p in pokemon_types:
        if "grass" in p:
            grass_pokemon.append(p)
    return grass_pokemon

print(find_grass_pokemon())

```
</div>

Here's using a file variable to do the same thing:

<div class='python-embed' editable=true data-files-base-url='pokemon' data-files='type.txt,main.py'>

```python

# We can do the same thing with a file variable.  The file variable is essentially a list of strings, where each string is a line of the file.

def find_grass_pokemon():
    grass_pokemon = []
    f = open('type.txt', 'r')
    for line in f:
        if "grass" in line:
            grass_pokemon.append(line)
    f.close()
    return grass_pokemon

print(find_grass_pokemon())

```
</div>

## The strip() function

NOTE: \n is what we called **whitespace character**.  Other examples of whitespace characters include the space and the tab character (represented by `\t`).

To remove the newline character from the end of a string, we can use the `strip()` function.  The `strip()` function removes any leading and trailing whitespace characters from a string, including the newline character.

Exercise: Modify the code above to use the `strip()` function to remove the newline character from each line before printing it.

<div class='python-embed' editable=true data-files-base-url='pokemon' data-files='type.txt,main.py'>

```python

def find_grass_pokemon():
    grass_pokemon = []
    f = open('type.txt', 'r')
    for line in f:
        if "grass" in line:
            grass_pokemon.append(line)
    f.close()
    return grass_pokemon

print(find_grass_pokemon())

import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_strip_in_code(self):
        self.assertTrue("strip" in code, "You didn't use the strip() function in your code")

unittest.main()

```
</div>

## The split() function

The `split()` function is a string method that splits a string into a list of substrings based on a specified delimiter.  By default, the delimiter is any whitespace character (including spaces, tabs, and newlines).

Complete the following function so we can count all the pokemons that have multiple types.  Pay attention to the filenames.

<div class='python-embed' editable=true data-files-base-url='pokemon' data-files='pokemon_types.txt,main.py'>

```python

def count_pokemon_with_multiple_types():
    count = 0
    # Figure out what to go here

    return count

print(count_pokemon_with_multiple_types())

```
</div>

## Finding the first and last item

The following are a couple of common patterns for finding the first and last item in a file that satisfies a certain condition.  For example, we can find the first and last pokemon that has the "grass" type.

<div class='python-embed' editable=true data-files-base-url='pokemon' data-files='pokemon_types.txt,main.py'>

```python

def find_first_grass_pokemon():
    f = open('pokemon_types.txt', 'r')
    first_grass = None
    for line in f:
        if "grass" in line:            
            first_grass = line.split()[0]
            break
    f.close()
    return first_grass

def find_last_grass_pokemon():
    last_grass = None
    f = open('pokemon_types.txt', 'r')
    for line in f:
        if "grass" in line:
            last_grass = line.split()[0]
    f.close()
    return last_grass

print(find_first_grass_pokemon())
print(find_last_grass_pokemon())

```
</div>