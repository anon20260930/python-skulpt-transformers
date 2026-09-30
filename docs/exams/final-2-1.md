One of your friends in COMP115 implemented a function named ratio as below. The implementation is correct and has passed all unit tests. The function ratio takes a string of digit characters digits and a one-digit lucky_number as parameters, and returns the ratio of the amount of lucky_number inside digits to the amount of total digits of digits.

For example, ratio("01566321", "6") should return 2/8, since there are 2 occurrences of "6" in the string "01566321", and the total number of digits in the string is 8.

Below are some of the examples of the function ratio:

```python
ratio("01566321", "6") # returns 2/8
ratio("11351", "1") # returns 3/5
ratio("23146325902", "2") # returns 3/11
ratio("235132", "9") # returns 0/6
```

Note that the implementation used a while-loop. Please re-implement this function ratio using for-loop, and pass the your own unit tests.

Hint: We might not need index traversal in the for-loop implementation. Instead, we can traverse each digit character directly using for-loop, i.e., sequence traversal. In this way, the for-loop implementation should be simpler, comparing to the while-loop implementation.

Add an assert statement of your own to test your implementation of ratio.

<div class='python-embed' editable=true>

```python
def ratio(digits, lucky_number):
    if len(digits) == 0: # To avoid division by zero
        return 0
    count = 0
    i = 0
    while i < len(digits):
        if digits[i] == lucky_number:
            count += 1
        i += 1
    return count / len(digits)

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestRatio(testcase.TestCase):

    def test_use_for_loop(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")

    def test_use_assert(self):
        self.assertEqual("assert" in code, True, "You didn't use assert in your code")

    def test_ratio_with_01566321_6(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")
        self.assertEqual(ratio("01566321", "6"), 2/8, 'ratio("01566321", "6") is supposed to return 2/8')

    def test_ratio_with_11351_1(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")    
        self.assertEqual(ratio("11351", "1"), 3/5, 'ratio("11351", "1") is supposed to return 3/5')
    
    def test_ratio_with_23146325902_2(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")  
        self.assertEqual(ratio("23146325902", "2"), 3/11, 'ratio("23146325902", "2") is supposed to return 3/11')

    def test_ratio_with_235132_9(self):
        self.assertEqual("for" in code, True, "You didn't use for-loop in your code")
        self.assertEqual(ratio("235132", "9"), 0/6, 'ratio("235132", "9") is supposed to return 0/6')

unittest.main()
```

</div>