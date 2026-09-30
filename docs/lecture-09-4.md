## Building a Chatbot

This is how we can build a chatbot using all the techniques we learned 
up to this point.

The basic sequence is only 3 lines: we ask user a question, 
send the question to the AI chat function, and print the answers
to the screen.  We repeat the sequence essentially forever.

We can add more logic to the chatbot to make it more useful, for example, we can use our `isPositive()` function to make the chatbot refuse to answer if the user input is not positive.  We can also add an exit command to allow users to exit the chatbot gracefully.


<div class='python-embed' editable=true>

```python
from chat import chat

def isPositive(s):    
    prompt = """Look at the following sentence, reply with YES if
    it is positive, otherwise reply with NO.  One single word reply 
    only.  DO NOT USE ANY OTHER WORDS.  Here is the input sentence:
    """ 
    question = prompt + s
    answer = chat(question)
    if 'YES' in answer[answer.find('</think>')+10:].upper():
        return True
    else:
        return False

while True:
    question = input("User: ")

    if question.lower() == "exit":
        break

    if not isPositive(question):
        print("I'm sorry, I can only answer positive questions.")
    else:
        answer = chat(question)
        print("AI: ", answer)

print("Goodbye")
```

</div>

### Exercise

Complete the following chatbot to have the following features:

- properly exit using `break` when the program encounters an exit command.

- make the chatbot refuse to answer if the user input is too long. You can define "too long" when the input sentence has more than 5 words.  You can use the `split()` function to split the sentence into words and check the length of the resulting list to see if it is greater than 5.

- keep the structure of the chatbot the same.  Simply modify the code inside the while loop to add the above features, and complete the isTooLong() function to check if the input sentence is too long.

<div class='python-embed' editable=true>

```python
from chat import chat

def isTooLong(s):
    # This function should return True if the input sentence is too long, and False otherwise.    
    # using the split() function to split the sentence into words and 
    # check the length of the resulting list to see if it is greater 
    # than 5
    return None

while True:
    question = input("User: ")
    if question.lower() == "exit":
        break
    answer = chat(question)
    print("AI: ", answer)

print("Goodbye")

import unittest
import testcase
import document

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class MyTest(testcase.TestCase):

    def test_too_long(self):
        self.assertEqual(isTooLong("This is a very long sentence that should be considered too long"), True)

    def test_not_too_long(self):
        self.assertEqual(isTooLong("Short sentence"), False)

    def test_check_using_isTooLong(self):
        self.assertRegex(code, r'.*if.*isTooLong\(question\)', "You need to use isTooLong")

unittest.main()
```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>