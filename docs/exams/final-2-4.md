A teacher did a poll to see what the most popular pet was that their students had. The options were dogs, cats, or "other". The teacher recording the info in a text file called "pets.txt". 

Write a program to process the file. The program should print on the screen how many votes each pet got.  The following is what the program would look like when you run the program:

```
Number of dog: 1
Number of cat: 1
Number of other: 2
```

<div class='python-embed' editable='true' data-files-base-url='pets' data-files='main.py,pets.txt'>

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
    def test_output_number_of_dogs(self):
        self.assertTrue('Number of dog:' in stdout, "You didn't output the dog header correctly")
    def test_output_number_of_cats(self):
        self.assertTrue('Number of cat:' in stdout, "You didn't output the cat header correctly")
    def test_output_number_of_others(self):
        self.assertTrue('Number of other:' in stdout, "You didn't output the other header correctly")
    def test_count_dogs(self):
        self.assertTrue('Number of dog: 19' in stdout, "You didn't count the number of dogs correctly")
    def test_count_cats(self):
        self.assertTrue('Number of cat: 8' in stdout, "You didn't count the number of cats correctly")
    def test_count_others(self):
        self.assertTrue('Number of other: 3' in stdout, "You didn't count the number of others correctly")

unittest.main()


```

</div>
