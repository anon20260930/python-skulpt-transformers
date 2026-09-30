## Memories

The following is a simple chatbot that uses the `while True` loop to keep the conversation going until the user types "exit".  It also uses the `reply` function to get a response from the AI based on the user's input.

<div class='python-embed' editable=true>

```python
from chat import reply

def main():
    while True:
        # Get input from the user
        user_input = input("You: ")
        
        # Check if the user wants to exit
        if user_input.lower() == "exit":
            print("Goodbye!")
            break

        # Build the prompt for the chat function
        prompt = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_input}
        ]

        # Call the chat function with the prompt
        response = reply(prompt)

        # Print the response from the AI
        print("AI:", response)

if __name__ == '__main__':
    main()
```

</div>

Try out the above code, below is my chat interaction with it.

```
You: hi
AI: Hello! How can I assist you today? 😊
You: My name is Jason
AI: Hello, my name is Jason! How can I help you today?
You: What is my name?
AI: Hello! I'm not here to answer that, but what do you want to know about me or your experience with me? Let me know how I can assist you further!
You: tell me my name
AI: Hello! I'm curious to know your name, as I hope we can have a friendly and welcoming environment together. What would you like today? Let me know how I can assist you further. 😊
You: 
```

Noticed it doesn't remember my name?  That's because the AI doesn't have any memory of our previous conversation.  It only sees the current prompt that we send to it.  If we want the AI to remember our name, we need to include it in the prompt every time we call the chat function.

Try change the prompt variable to the following:

```python
        prompt = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "My name is Jason."},
            {"role": "assistant", "content": "Nice to meet you Jason!"},
            {"role": "user", "content": user_input}
        ]
```

In the above case, we are including the entire fake convsersation history so the AI thinks that we have been talking about the same thing the whole time.  Now when we run the program, the AI will remember our name and respond accordingly.

Noticed how the 3 roles are used in the above prompt?  The system role is used to set the behavior of the AI, the user role is used to represent the user's input, and the assistant role is used to represent the AI's response.  By including all three roles in the prompt, we can create a more realistic conversation with the AI.

## Exercise

The following code, I moved the prompt variable outside of the while loop, which basically made it an "accumulator" variable.  For every loop, I want to add both the user's input and the AI's response to the prompt variable so that the AI can remember the entire conversation history.  Add the missing 2 lines of code to make it work.

<div class='python-embed' editable=true>

```python
from chat import reply

def main():
    prompt = [
        {"role": "system", "content": "You are a helpful assistant."},
    ]

    while True:
        # Get input from the user
        user_input = input("You: ")
        
        # Check if the user wants to exit
        if user_input.lower() == "exit":
            print("Goodbye!")
            break

        # MISSING: Add the user's input to the prompt

        # Call the chat function with the prompt
        response = reply(prompt)

        # Print the response from the AI
        print("AI:", response)

        # MISSING: Add the AI's response to the prompt

if __name__ == '__main__':
    main()


import unittest
import document
import testcase
code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

print("\n\nRunning Tests...")

# Redefine the reply and input function (mock)

reply_prompt = []
def reply(prompt):
    global reply_prompt
    reply_prompt = prompt
    return "test response"

# Pre-define your list of mock responses
mock_responses = iter(["hi", "what is my name?", "exit"])

def input(prompt):
    try:
        return next(mock_responses)
    except StopIteration:
        return "No more inputs!"

# Calling the main function to run the chatbot
main()

class TestChat(testcase.TestCase):

    def test_append_user_input_correct_number_of_messages(self):
        self.assertTrue(len(reply_prompt) == 4, "The user's input was not added to the prompt correctly. The prompt should have 4 messages: system, user, assistant, user.")

    def test_append_user_input_correct_roles(self):
        self.assertEqual([m['role'] for m in reply_prompt], ['system', 'user', 'assistant', 'user'], "The user's input was not added to the prompt correctly. The message roles should be in the order: system, user, assistant, user.")


unittest.main()

```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>