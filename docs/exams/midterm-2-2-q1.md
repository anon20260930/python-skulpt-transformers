A playing card can be represented as a 2 character string, the first character can be A,J,Q,K,2,3,4,5,6,7,8,9.  The second character can be H, D, S, C, which represent the suit of the card (hearts, diamonds, spades, clubs).  For instance, "AH" represents the ace of hearts, "TS" represents the ten of spades, "QD" represents the queen of diamonds, and "3C" represents the three of clubs.

Write a function is_valid_card that takes in a string and returns True if the string represents a valid card, and False otherwise.

For example, is_valid_card("AH") should return True, while is_valid_card("1H") should return False.

Make sure that you include assert statements to test your function.

<div class='python-embed' editable=true>

```python
def is_valid_card(card):
    # Check if the card has exactly 2 characters
    pass

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertEqual("assert" in code, True, "You didn't use assert in your code")
    def test_is_valid_card_AH(self):
        self.assertEqual(is_valid_card("AH"), True, "You didn't return True for a valid card 'AH'")
    def test_is_valid_card_TS(self):
        self.assertEqual(is_valid_card("TS"), True, "You didn't return True for a valid card 'TS'")
    def test_is_valid_card_QD(self):
        self.assertEqual(is_valid_card("QD"), True, "You didn't return True for a valid card 'QD'")
    def test_is_valid_card_3C(self):
        self.assertEqual(is_valid_card("3C"), True, "You didn't return True for a valid card '3C'")
    def test_is_valid_card_1H(self):
        self.assertEqual(is_valid_card("1H"), False, "You didn't return False for an invalid card '1H'")
    def test_is_valid_card_11S(self):
        self.assertEqual(is_valid_card("11S"), False, "You didn't return False for an invalid card '11S'")
    def test_is_valid_card_ADH(self):
        self.assertEqual(is_valid_card("ADH"), False, "You didn't return False for an invalid card 'ADH'")

unittest.main()
```
</div>