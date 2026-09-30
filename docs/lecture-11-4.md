Here's a real-life dataset of spam or ham (not spam) text messages .  The file `spam.txt` contains the text of the text messages.  Each line of the file is one text message.  The first word of each line is either `spam` or `ham`, which indicates whether the text message is spam or not.  The rest of the line is the text of the message itself.

Below are some of the typical questions that you might be asked on an exam.


<div class='python-embed' editable=true data-files-base-url='spam' data-files='spam.txt,main.py'>

```python

# Return the total number of spam messages in the file
def count_spam_messages():
    # Your code here
    pass

# Return the total number of ham messages in the file
def count_ham_messages():
    # Your code here
    pass

# Return the text of the first spam message in the file (not including the "spam" label)
def get_first_spam_message():
    # Your code here
    pass

# Return the text of the last spam message in the file (not including the "spam" label)
def get_last_spam_message():
    # Your code here
    pass

# Return the text of the first ham message in the file (not including the "ham" label)
def get_first_ham_message():
    # Your code here
    pass

# Return the text of the last ham message in the file (not including the "ham" label)
def get_last_ham_message():
    # Your code here
    pass

# For the following questions, the word is case sensitive, and it show only match if it is a separate word.  For example, if the input word is "free", then it should match "free" but not "freezing" or "freedom".  You can assume that the text of the messages only contains letters, numbers, and spaces (no punctuation).

# Return a list of the text of all the spam messages in the file (not including the "spam" label).  

def get_spam_messages_containing_word(word):
    # Your code here
    pass

# Return a list of the text of all the ham messages in the file (not including the "ham" label).  The input word is case sensitive, so if the input word is "free", then you should only return the ham messages that contains the word "free" (not "Free" or "FREE").
def get_ham_messages_containing_word(word):
    # Your code here
    pass

# Return the likelihood of a message being spam given that it contains the given word.  The likelihood should be a number between 0 and 1, where 0 means that the message is definitely not spam, and 1 means that the message is definitely spam.  You can calculate the likelihood using the formula: (number of spam messages containing the word) / (total number of messages containing the word)
def get_likelihood_of_spam(word):
    # Your code here
    pass

import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_count_spam_messages(self):
        self.assertEqual(count_spam_messages(), 747, "You didn't return the correct number of spam messages")
    def test_count_ham_messages(self):
        self.assertEqual(count_ham_messages(), 4831, "You didn't return the correct number of ham messages")
    def test_get_first_spam_message(self):
        self.assertEqual(get_first_spam_message(), "Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entry question(std txt rate)T&C's apply 08452810075over18's", "You didn't return the correct first spam message")
    def test_get_last_spam_message(self):
        self.assertEqual(get_last_spam_message(), "This is the 2nd time we have tried 2 contact u. U have won the �750 Pound prize. 2 claim is easy, call 087187272008 NOW1! Only 10p per minute. BT-national-rate.\"", "You didn't return the correct last spam message")
    def test_get_first_ham_message(self):
        self.assertEqual(get_first_ham_message(), "Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat...", "You didn't return the correct first ham message")
    def test_get_last_ham_message(self):
        self.assertEqual(get_last_ham_message(), "Rofl. Its true to its name", "You didn't return the correct last ham message")
    def test_get_spam_messages_containing_word(self):
        self.assertEqual(get_spam_messages_containing_word("free")[0], "07732584351 - Rodger Burns - MSG = We tried to call you re your reply to our sms for a free nokia mobile + free camcorder. Please call now 08000930705 for delivery tomorrow", "You didn't return the correct list of spam messages containing the word 'free'")
    def test_get_spam_messages_containing_word_length(self):
        self.assertEqual(len(get_spam_messages_containing_word("free")), 57, "You didn't return the correct list of spam messages containing the word 'free'")
    def test_get_ham_messages_containing_word(self):
        self.assertEqual(get_ham_messages_containing_word("free")[0], "I am waiting machan. Call me once you free.", "You didn't return the correct list of ham messages containing the word 'free'") 
    def test_get_ham_messages_containing_word_length(self):
        self.assertEqual(len(get_ham_messages_containing_word("free")), 54, "You didn't return the correct list of ham messages containing the word 'free'")
    def test_get_likelihood_of_spam(self):
        self.assertAlmostEqual(get_likelihood_of_spam("free"), 0.513, 3, "You didn't return the correct likelihood of a message being spam given that it contains the word 'free'")

``` 
</div>

