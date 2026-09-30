Write a function called count_within_range() that can process a list of numbers and returns the number of items that are out of range, i.e. outside of the range of -1 to 1.  Note: both -1 and 1 are still considered within the range.

Make sure that you include assert statements to test your function.

<div class='python-embed' editable=true>

```python

def count_within_range(numbers):
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
    def test_count_within_range_valid(self):
        self.assertEqual(count_within_range([-1, 0, 0.5, 1]), 0, "You didn't return 0 for a list of numbers that are all within the range")
    def test_count_within_range_invalid(self):
        self.assertEqual(count_within_range([-1, 0, 0.5, 1.5]), 1, "You didn't return 1 for a list of numbers that are not all within the range")
    def test_count_within_range_multiple_invalids(self):
        self.assertEqual(count_within_range([-1.5, -1, 0, -0.5, -999, 1, 1.5, 999]), 4, "You didn't return 4 for a list of numbers that has multiple numbers that are not within the range")
        
unittest.main()
```

</div>