You can import the chat function to send a question to an AI.

Even the most sophisticated AI results are simply strings, and
you can manipulate its results very easily using python.

Take a look at the following code, the chat function returns a really
long string from the AI.  

Pay attention to the output printed on screen.  The answer includes
a "thinking" part, and the actual answer.  Use the techniques
you learned in your string chapter and remove the "thinking" 
part so that the `answer` variable contains only the answer without all the thoughts.

*NOTE*: if the actual thinking is taking too long, you can shortcut the thinking part adding the string `/no_think` to the end of the question.  This will make the AI skip the thinking part and just give you the answer.  However, you will still need to use string manipulation to remove the thinking tags from the answer.

<div class='python-embed' editable=true>

```python
from chat import chat

answer = chat("What is 2 + 2?")
print(answer)
```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>

<quiz>

Which of the following line will successfully remove the thinking process from the `answer` variable in the code below?

```python
from chat import chat

answer = chat("What is 2 + 2? /no_think")
# choose from below
print(answer)
```

- [ ] `answer = answer - '<think>'`
- [x] `answer = answer[19:]`
- [ ] `answer = answer[-1]`
- [ ] `answer = answer[answer.find('<think>'):]`
- [ ] `answer = answer[answer.find('</think>'):]`
- [x] `answer = answer[answer.find('</think>') + 10:]`

</quiz>