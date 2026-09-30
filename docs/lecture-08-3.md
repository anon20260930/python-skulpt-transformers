Below is the code for a "chatbot". We will cover the details in chapter 9.

For now, noticed that we are using the user interface pattern from the preivous section to gather user input and send to the reply() function.

Right now the code doesnt's end. Modify it so that if the user enters either "quit" or "exit", the loop breaks and the "Goodbye" message is shown.

<div class='python-embed' editable=true>

```python
from chat import reply

user_q = ""

while True:
    user_q = input("Ask Any Question: ")
    print(reply(user_q))

print("Goodbye")

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_while_true_exists(self):
        self.assertTrue('while True' in code, "You cannot change while True")
    def test_using_break(self):
        self.assertTrue('break' in code, "You need to use break")
    def test_using_if(self):
        self.assertTrue('if' in code, "You need to use if")
    def test_has_quit_string(self):
        self.assertTrue('quit' in code, "You need to detect quit")
    def test_has_exit_string(self):
        self.assertTrue('exit' in code, "You need to detect exit")

unittest.main()

```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>
