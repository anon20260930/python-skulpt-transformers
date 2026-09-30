It's hard to believe that the `chat()` function, as simple
as it seems, is the state of the art of how developers
integrate AI into various systems.

Using the `chat()` function, you can literally create 
functions that understand language.  

For example, the chat function below can rate the sentiment
of a sentence:


<div class='python-embed' editable=true>

```python
from chat import chat

sentence = 'Today is a good day'

# We use triple quote to create a string that spans multiple lines
prompt = """Look at the following sentence, reply with YES if
it is positive, otherwise reply with NO.  One single word reply 
only.  DO NOT USE ANY OTHER WORDS.  Here is the input sentence:
""" 

question = prompt + sentence

print(chat(question))
```

<iframe style='width: 100%; height: 200px' class='python_output'></iframe>
</div>

Programmers would use the above technique to program their functions,
below is an example of a boolean function that returns either True
or False depending on the sentiment of the input sentence.  But there
is a bug, can you fix it?

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
    
    if 'yes' in answer:
        return True
    else:
        return False

assert isPositive("This is a terrible world") == False
assert isPositive("This is a wonderful world") == True

import unittest
import testcase

def chat(s):
    if '+' in s:
        return '<think>\n\n</think>\n\nYES'
    if '-' in s:
        return '<think>\n\n</think>\n\nNO'

class MyTest(testcase.TestCase):
    def test_positive(self):
        self.assertTrue(isPositive('+'))
    def test_negative(self):
        self.assertFalse(isPositive('-'))

unittest.main()

```

<iframe style='width: 100%; height: 200px' class='python_output'></iframe>
</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>