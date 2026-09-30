# Midterm 2 Practice

## Question 1

Write a function getTwoDigitInteger that returns true if the user input is both a number and a two-digit integer. Otherwise, it should return false.

NOTE: when `pass` is used in a function, it means that the function doesn't do anything. You will need to replace `pass` with your code.

Write me at least one assert statement to test your function.

<div class='python-embed' editable=true>

```python

def getTwoDigitInteger(user_input):
    # Your code here
    pass


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertTrue("assert" in code, "You didn't use assert in your code")
    def test_getTwoDigitInteger_42(self):
        self.assertTrue(getTwoDigitInteger(42), "You didn't return True for a valid two-digit integer")
    def test_getTwoDigitInteger_5(self):        
        self.assertFalse(getTwoDigitInteger(5), "You didn't return False for a one-digit integer")
    def test_getTwoDigitInteger_abc(self):        
        self.assertFalse(getTwoDigitInteger("abc"), "You didn't return False for a non-integer string")
    def test_getTwoDigitInteger_123(self):        
        self.assertFalse(getTwoDigitInteger(123), "You didn't return False for a three-digit integer")

unittest.main()
```

</div>

## Question 2.1

Write a function that takes one strings as input and returns True if the string contains the character "z", and False otherwise.

Write me at least one assert statement to test your function.

<div class='python-embed' editable=true>

```python
def hasCommonCharacters(string1):
    # Your code here
    pass

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertTrue("assert" in code, "You didn't use assert in your code")
    def test_hasCommonCharacters_zebra(self):
        self.assertTrue(hasCommonCharacters("zebra"), "You didn't return True for a string that contains 'z'")
    def test_hasCommonCharacters_apple(self):        
        self.assertFalse(hasCommonCharacters("apple"), "You didn't return False for a string that doesn't contain 'z'")

unittest.main()
```

</div>


## Question 2.2

Write a function that takes two strings as input and returns True if the two strings has one or more common characters, and False otherwise.

Write me at least one assert statement to test your function.

<div class='python-embed' editable=true>

```python
def hasCommonCharacters(string1, string2):
    # Your code here
    pass


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertTrue("assert" in code, "You didn't use assert in your code")
    def test_hasCommonCharacters_hello_world(self):
        self.assertTrue(hasCommonCharacters("hello", "world"), "You didn't return True for two strings that have common characters")
    def test_hasCommonCharacters_abc_def(self):        
        self.assertFalse(hasCommonCharacters("abc", "def"), "You didn't return False for two strings that don't have common characters")

unittest.main()
```

</div>

## Question 3

In a card game that you are writing, a card is represented by a string consisting of its face value followed by its suit. For example: “AH” for the ace of hearts , “TS” for the ten of spades, “QD” for the queen of diamonds and “3C” for the 3 of clubs.

Noticed that only the first character of the string represents the face value of the card.

Write a function that scores two cards represented in this way according to the following rules:

| Cards | Points | 
|-------|--------|
| Two aces | 30 |
| Ace and other card | 15 + face value of the other card |
| Two cards that have the same face value (not two aces) | 2 * face value of one card |
| Any other combination | 5 |

To score a single card, you can use the score_card function provided.  For instance `score_card("AH")` will return 10, `score_card("TS")` will return 10, `score_card("QD")` will return 10, and `score_card("3C")` will return 3.

Complete the function `scoreHand` that takes in two cards and returns the score of the hand according to the rules above.

Write me at least one assert statement to test your function.

<div class='python-embed' editable=true>

```python

# I'm providing you with a helper function that can score a single card. 
# Use this function in your implementation of scoreHand.  
# DO NOT MODIFY THIS FUNCTION.
def score_card(card):
    face = card[0]
    if face == "A" or face == "K" or face == "Q" or face == "J" or face =="T":
        return 10
    else:
        return ord(card[0]) - ord("0")

assert score_card("AH") == 10, "score_card returns 10 for an ace"
assert score_card("TS") == 10, "score_card returns 10 for a ten"
assert score_card("QD") == 10, "score_card returns 10 for a queen"
assert score_card("3C") == 3, "score_card returns 3 for a 3"

def scoreHand(card1, card2):
    # Your code here
    pass


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertTrue(code.count("assert") > 4, "You didn't add additional assert in your code")
    def test_scoreHand_AH_AH(self):
        self.assertTrue(scoreHand("AH", "AH") == 30, "You didn't return 30 for two aces")
    def test_scoreHand_AH_TS(self):        
        self.assertTrue(scoreHand("AH", "TS") == 25, "You didn't return 15 + face value of the other card for an ace and another card")
    def test_scoreHand_TS_QD(self):        
        self.assertTrue(scoreHand("TS", "QD") == 20, "You didn't return 2 * face value of one card for two cards that have the same face value")
    def test_scoreHand_TS_3C(self):        
        self.assertTrue(scoreHand("TS", "3C") == 5, "You didn't return 5 for any other combination")

unittest.main()

```
</div>