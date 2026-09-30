A teacher did a survey to see what the most popular pet was that their students had. The options were dogs, cats, or "other". The teacher recording the info in a text file called "survey.txt".

However, some students didn't follow the instructions and put something like hamster, or rabbit, or turtle, or lizard, etc.

Write a program to read the file and print out the content that cleans up the data and only shows the number of dogs, cats, and other pets.

For example, if the file contains the following:

```
John Doe: dog
Jane Smith: cat
Bob Johnson: hamster
```

The program should print out:

```
John Doe: dog
Jane Smith: cat
Bob Johnson: other
```

You must use a for-loop to read the file and process the data.

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
    def test_for_in_code(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")
    def test_replace_turtle(self):        
        self.assertTrue('Zoe Harmon: other' in stdout, "You didn't replace 'turtle' with 'other'")
    def test_replace_hamster(self):        
        self.assertTrue('Wojciech Berg: other' in stdout, "You didn't replace 'hamster' with 'other'")    
        self.assertTrue('Bushra Rogers: other' in stdout, "You didn't replace 'hamster' with 'other'")    
    def test_count_lines(self):
        self.assertTrue(stdout.count('\n') >= 30, f"There should be at least 30 lines in the output, you output {stdout.count('\n')} lines")
    def test_count_too_many_lines(self):        
        self.assertTrue(30 <= stdout.count('\n') and stdout.count('\n') < 32, f"Too many lines in the output, there should be one for each student, you output {stdout.count('\n')} lines")
unittest.main()
```

</div>