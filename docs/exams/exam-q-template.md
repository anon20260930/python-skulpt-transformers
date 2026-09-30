<!-- This file is a template for exam questions. You can copy and paste this file to create new exam questions. Make sure to change the filename and the question text. 

Since I'm using moodle, I realized that I could include the following in the "eassy" quesiton type, which allows me to give students a place to code and also gives me a place to write test cases to automatically grade their code.

Their code and feedback is automatically added to the textarea of the question, as long as we only have one page per question display type.

Just change the URL in the iframe source to the URL of the python code grading page for the specific question.  One question per page!

<p>
  <script>
    (function() {
      const myContainer = document.currentScript.closest('.essay');

      const iframe = document.createElement('iframe');
      // Set the iframe source to the URL of the Python code grading page for this question
      iframe.src =
        "http://localhost:8000/python-thinkcspy-lectures/exams/midterm-2-2-q1/?fullscreen=1";
      iframe.style.width = "100%";
      iframe.style.height = "90vh";

      document.currentScript.after(iframe);
      const myIframeWindow = iframe.contentWindow;

      window.addEventListener('message', (ev) => {
        // Compare the event source against the specific window reference
        if (ev.source === myIframeWindow) {
          if (ev.data?.eventType == 'python-code-grading') {
            const textarea = myContainer.querySelector(
              '.answer textarea');
            if (textarea) {
              textarea.value = ev.data.code + '\n' + ev.data.feedback;
            }
          }
        }
      });
    })();
  </script>
</p>

-->

Write a function that returns a number.

<div class='python-embed' editable=true>

```python

def getNumber(user_input):
    # Your code here
    pass


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_greater_than_20(self):
        self.assertTrue(getNumber() > 20, "You didn't return the correct number when the input is greater than 20")
    def test_greater_than_40(self):
        self.assertTrue(getNumber() > 40, "You didn't return the correct number when the input is greater than 40")
    def test_greater_than_60(self):
        self.assertTrue(getNumber() > 60, "You didn't return the correct number when the input is greater than 60")
    def test_greater_than_80(self):
        self.assertTrue(getNumber() > 80, "You didn't return the correct number when the input is greater than 80")
    def test_equal_to_100(self):
        self.assertTrue(getNumber() == 100, "You didn't return the correct number when the input is equal to 100")

unittest.main()
```

</div>