The pokemon_types.txt file contains a list of Pokémon names and their types.

I'm interested in how many pyschic Pokémon are in the file.  Write a program to print the following:

```
Number of psychic Pokémon: 14
```

<div class='python-embed' editable=true data-files-base-url='pokemon' data-files='pokemon_types.txt,main.py'>

```python

# Write your code here

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]
stdout = getStdout()

class MyTest(testcase.TestCase):
    def test_for_in_code(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")
    def test_output_number_of_psychic_pokemon(self):
        self.assertTrue('Number of psychic Pokemon:' in stdout, "You didn't output the psychic Pokémon header correctly")
    def test_count_psychic_pokemon(self):
        self.assertTrue('Number of psychic Pokemon: 102' in stdout, "You didn't count the number of psychic Pokémon correctly")

unittest.main()
```
</div>