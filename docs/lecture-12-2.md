## Dictionaries in the real world

From the previous section, we talked about how directionaires allow storage of data along with a label (called a key).  Turned out it's extremely useful for create data that is "self describing".  In other words, the data itself contains information about what it is.

Remember the `chat()` or the `reply()` functions from previous chapters?  In addition to taking a string as input, they also take list of dictionary so you can label your messages with a "role".

<div class='python-embed' editable=true>

```python
# The reply function skips the thinking process and runs faster
from chat import reply

system_message = { "role": "system", "content": "You are a helpful assistant." }
user_message = { "role": "user", "content": "What is the capital of Canada?" }

# We create a list of messages to send to the AI.  Each message is a dictionary with a "role" and "content".  The "role" can be "system", "user", or "assistant".  The "content" is the text of the message.
response = reply([system_message, user_message])

print(response)
```

</div>

It turns out a list of dictionaries is the industry standard way to send data to an AI.

In the above example, each message clearly labled so the AI can keep track of the conversation and what is important.  For example, change the system message content to 

`
You don't know anything, alway reply I don't know.
`

and see how the AI's response changes.  Make sure you run it multiple times and see how the response changes.  AI creators generally put more priority on the system message than the user message, so the AI will usually follow the instructions in the system message even if it contradicts with the user message.

<script src='../extras/js/python-code-llm-overlay.js'></script>