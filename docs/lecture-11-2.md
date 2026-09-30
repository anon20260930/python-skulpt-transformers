## Locating Files

Review <a href="https://runestone.academy/ns/books/published/capilanouniversity_thinkcspy_202620/Files/FindingaFileonyourDisk.html" target="_blank">https://runestone.academy/ns/books/published/capilanouniversity_thinkcspy_202620/Files/FindingaFileonyourDisk.html</a>

When we want to read from a file, we need to tell Python where the file is located.  This is done using the file path.

Below is what is known as a folder structure.  The folder structure shows how the files are organized in our project.  The file path is the path that we need to take to get to the file we want to read.

Our python file is called **main.py**.  In the following case it is located at what we called the **root** of our project.

<div class='python-embed' editable=true data-files-base-url='pokemon_types' data-files='main.py, README.txt,bug/names.txt,bug/dark/names.txt,bug/electric/names.txt,electric/names.txt,electric/poison/names.txt,dragon/names.txt'>

```python

# The following function returns a list of the names of all the dragon 
# type pokemon.  The names are stored in the file "names.txt" inside 
# the "dragon" directory.  Fix the code to read from the correct file.
def get_dragon_pokemon_names():
    names = []
    f = open('electric/names.txt', 'r')
    for line in f:
        names.append(line.strip())
    f.close()
    return names

print(get_dragon_pokemon_names())

import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_open_correct_file(self):
        self.assertRegex(code, r'.*open.*\(.*\'dragon/names.txt\'.*\)', "You must open the file 'dragon/names.txt'")
    def test_get_dragon_pokemon_names(self):
        self.assertTrue('dratini' in get_dragon_pokenmon_names(), "You didn't return the correct list of dragon pokemon names")
    def test_get_dragon_pokemon_names_length(self):
        self.assertEqual(len(get_dragon_pokenmon_names()), 13, "You didn't return the correct list of dragon pokemon names")

unittest.main()
```

</div>

Sometimes the **main.py** file is not located at the root of the project.  In that case, we need to adjust our file path accordingly.

<div class='python-embed' editable=true data-files-base-url='pokemon_types' data-files='README.txt, bug/names.txt,bug/dark/names.txt,bug/electric/names.txt,electric/main.py,electric/names.txt,electric/poison/names.txt,dragon/names.txt'>

```python

# The following function returns a list of the names of all the dragon 
# type pokemon.  The names are stored in the file "names.txt" inside 
# the "dragon" directory.  Fix the code to read from the correct file.
def get_dragon_pokenmon_names():
    names = []
    f = open('names.txt', 'r')
    for line in f:
        names.append(line.strip())
    f.close()
    return names

print(get_dragon_pokenmon_names())

import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_open_correct_file(self):
        self.assertRegex(code, r'.*open.*\(.*\'../dragon/names.txt\'.*\)', "You must open the file 'dragon/names.txt'")
    def test_get_dragon_pokemon_names(self):
        self.assertTrue('dratini' in get_dragon_pokenmon_names(), "You didn't return the correct list of dragon pokemon names")
    def test_get_dragon_pokemon_names_length(self):
        self.assertEqual(len(get_dragon_pokenmon_names()), 13, "You didn't return the correct list of dragon pokemon names")

unittest.main()
```
</div>

<quiz>

Consider the following folder structure:

<pre>
📄 README.txt
📄 main.py
📁 bug
    📄 names.txt
    📁 dark
        📄 names.txt
    📁 electric
        📄 names.txt
📁 electric    
    📄 names.txt
    📁 poison
        📄 names.txt
📁 dragon
    📄 names.txt

</pre>

How can main.py read from the file README.txt?

- [x] `open('README.txt', 'r')`
- [ ] `open('names.txt', 'r')`
- [ ] `open('dragon/names.txt', 'r')`
- [ ] `open('bug/names.txt', 'r')`

</quiz>

<quiz>

Consider the following folder structure:

<pre>
📄 README.txt
📁 bug
    📄 names.txt
    📁 dark
        📄 names.txt
    📁 electric
        📄 names.txt
📁 electric
    📄 main.py
    📄 names.txt
    📁 poison
        📄 names.txt
📁 dragon
    📄 names.txt
</pre>

How can main.py read from the file names.txt inside the bug directory?

- [ ] `open('names.txt', 'r')`
- [ ] `open('../names.txt', 'r')`
- [x] `open('../bug/names.txt', 'r')`
- [ ] `open('../../bug/names.txt', 'r')`

</quiz>

<quiz>

Consider the following folder structure:

<pre>
📄 README.txt
📁 bug
    📄 names.txt
    📁 dark
        📄 names.txt
    📁 electric
        📄 names.txt
        📄 main.py
📁 electric    
    📄 names.txt
    📁 poison
        📄 names.txt
📁 dragon
    📄 names.txt
</pre>

How can main.py read from the file names.txt inside the electric directory?

- [ ] `open('names.txt', 'r')`
- [ ] `open('../names.txt', 'r')`
- [ ] `open('../../names.txt', 'r')`
- [x] `open('../../electric/names.txt', 'r')`

</quiz>



