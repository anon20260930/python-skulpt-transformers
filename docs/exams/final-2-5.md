If you have made it this far and want an extra challenge, you can score 2 extra points by implementing a count program that can handle a file with an arbitrary number of pet types (i.e. dog, cat, fish, turtle, etc.)

For example, if you use the survey.txt file, the output should look like this:

```
Number of dog: 19
Number of cat: 8
Number of turtle: 1
Number of hamster: 2
```

NOTE: your code must be able to handle any number of pet types, not just the ones in the example above. You can assume that the file will always have the format of "Name: pet_type" on each line.

<div class='python-embed' editable='true' data-files-base-url='pets' data-files='main.py,survey.txt'>

```python
# Your code here

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]
stdout = getStdout()

class TestChat(testcase.TestCase):

    def test_count_hamsters(self):
        self.assertTrue('Number of hamster: 2' in stdout, "You didn't count the number of hamsters correctly")
    def test_count_turtles(self):
        self.assertTrue('Number of turtle: 1' in stdout, "You didn't count the number of turtles correctly")

unittest.main()
```
</div>