In the simplified game of blackjack, a card's score can be calculated as follows:

Ace (A) is worth 11 points.
Face cards (J, Q, K) are worth 10 points each.
Number cards (2-10) are worth their face value in points.

Write a function score_card that takes in 2 cards represented as strings (like "AH", "TS", etc.) and returns the total score of the two cards according to the rules above.

You can assume that the input cards are always valid and follow the format described above.

Make sure that you include assert statements to test your function.

<div class='python-embed' editable=true>

```python
def score_card(card1, card2):
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
    def test_score_card_AH_TS(self):
        self.assertEqual(score_card("AH", "TS"), 21, "You didn't return the correct score for 'AH' and 'TS'")
    def test_score_card_QD_3C(self):
        self.assertEqual(score_card("QD", "3C"), 13, "You didn't return the correct score for 'QD' and '3C'")
    def test_score_card_2H_5D(self):
        self.assertEqual(score_card("2H", "5D"), 7, "You didn't return the correct score for '2H' and '5D'")
    def test_score_card_JH_KS(self):
        self.assertEqual(score_card("JH", "KS"), 20, "You didn't return the correct score for 'JH' and 'KS'")
    def test_score_card_AH_QD(self):
        self.assertEqual(score_card("AH", "QD"), 21, "You didn't return the correct score for 'AH' and 'QD'")

unittest.main()
```

</div>