The file freestuff.txt contains a list of spam messages.  Each line starts with the word "spam" followed by a space, and then the text of the spam message.  For example, one line might be:

```
spam You won a free iPhone!  Click here to claim it!
```

Write a program to read the file and print out the text of all the spam messages but replace the word free with ****, essentially censoring the word free.  You must use a for-loop to read the file and process the data.

I only want to censor the word free if it is a separate word.  For example, if the spam message contains the word "freezing", then you should not censor that word.  Also make sure we censor both uppercase and lowercase versions of the word free.  For example, if the spam message contains the word "Free", then you should censor that word as well.

<div class='python-embed' editable='true' data-files-base-url='spam' data-files='main.py,freestuff.txt'>

```python
# Your code here


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]
stdout = getStdout()

class MyTest(testcase.TestCase):
    def test_print_stdout(self):
        self.assertTrue(stdout.count('\n') == 10, "You didn't print anything to the screen")
    def test_censor_free(self):
        self.assertTrue(stdout.count('\n') == 10, "You didn't print anything to the screen")
        self.assertTrue('free' not in stdout, "You didn't censor the word 'free' correctly")
    def test_censor_Free(self):
        self.assertTrue(stdout.count('\n') == 10, "You didn't print anything to the screen")
        self.assertTrue('Free' not in stdout, "You didn't censor the word 'Free' correctly")
    def test_dont_censor_FreeMsg(self):
        self.assertTrue(stdout.count('\n') == 10, "You didn't print anything to the screen")
        self.assertTrue('FreeMsg' in stdout, "You censored the word 'FreeMsg' incorrectly")
    def test_dont_censor_FREEPHONE(self):
        self.assertTrue(stdout.count('\n') == 10, "You didn't print anything to the screen")
        self.assertTrue('FREEPHONE' in stdout, "You censored the word 'FREEPHONE' incorrectly")

unittest.main()
```
</div>