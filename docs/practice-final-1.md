Write a function called percentage_of_loud_values() that receives a list of numbers, and returns the percentage of numbers that are outside of the range of -1 to 1.  Note: both -1 and 1 are still considered within the range.

For instance, percentage_of_loud_values([-0.5, 0, 1, 1, 1.5]) should return 20.0, while percentage_of_loud_values([-0.5, 0, 0.5]) should return 0.0.

Make sure that you include assert statements to test your function.

<div class='python-embed' editable=true>

```python
def percentage_of_loud_values(numbers):
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
    def test_percentage_of_loud_values_with_loud_values(self):
        self.assertEqual(percentage_of_loud_values([-0.5, 0, 1, 1, 1.5]), 20.0, "You didn't calculate the percentage correctly when there are loud values")
    def test_percentage_of_loud_values_without_loud_values(self):
        self.assertEqual(percentage_of_loud_values([-0.5, 0, 0.5]), 0.0, "You didn't calculate the percentage correctly when there are no loud values")

unittest.main()
```

</div>