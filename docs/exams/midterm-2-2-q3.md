Write a function called remove_loud_values() that receives a list of numbers, and returns a new list that contains only the numbers that are between -1 and 1 (inclusive).

Make sure that you include assert statements to test your function.

<div class='python-embed' editable=true>

```python
def remove_loud_values(audioFloats):
    # Your code here
    pass

import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertEqual("assert" in code, True, "You didn't use assert in your code")
    def test_remove_loud_values_with_loud_values(self):
        self.assertEqual(remove_loud_values([-1.5, -1, 0, 0.5, 1, 1.5]), [-1, 0, 0.5, 1], "You didn't return the correct list when there are numbers that are not between -1 and 1")
    def test_remove_loud_values_without_loud_values(self):
        self.assertEqual(remove_loud_values([-0.5, 0, 0.5]), [-0.5, 0, 0.5], "You didn't return the original list when all numbers are between -1 and 1")

unittest.main()
```
</div>
