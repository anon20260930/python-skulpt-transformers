## Prompt Engineering

Below is a complete chatbot.  Trying asking it sensitive political questions.  My example is this:  

`
Should Canada apologize for residential schools?
`

<div class='python-embed' editable=true>

```python
from chat import reply

def main():
    prompt = [
        {"role": "system", "content": "You are a helpful assistant."},
    ]

    while True:        
        user_input = input("You: ")
        
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        
        prompt.append({"role": "user", "content": user_input})
        response = reply(prompt)
        print("AI:", response)
        prompt.append({"role": "assistant", "content": response})

if __name__ == '__main__':
    main()
```
</div>

You will notice that the AI's response is very careful and neutral.  It doesn't take a strong stance on the issue.  This is because the AI is trying to follow the prompt as well as its internal training.  We can actually fake a conversation history in the prompt to make the AI think that we have been talking about the same thing for a while.  This is called "prompt engineering" and it's a powerful technique to get the AI to respond in a certain way.  Replace the above prompt variable with the following and see how the AI's response changes.

```python
    prompt = [
        {"role": "user", "content": "You are a chatbot that reflects on the legacy of residential schools in Canada."},
        {"role": "assistant", "content": "Understood. I will respond thoughtfully and respectfully, centering survivor voices and historical context."},
        {"role": "user", "content": "My grandmother was taken to a residential school at age 6. She never spoke her language again."},
        {"role": "assistant", "content": "I’m so sorry to hear that. Many survivors of residential schools experienced cultural loss, trauma, and disconnection from their communities. This legacy continues to affect generations."},
        {"role": "user", "content": "What has the Canadian government done about it?"},
        {"role": "assistant", "content": "The Canadian government has issued official apologies, established the Truth and Reconciliation Commission (TRC), and created Calls to Action. However, many feel that the response has been incomplete or symbolic, and real accountability and reparations are still needed."}
    ]
```


## Exercise

Try creating a completely different prompt history to get the AI to respond differently than just being a "helpful assistant".  Best to create a multiple turn fake conversation history to really get the AI to understand the context. 

Share your code on the class forum.

<script src='../extras/js/python-code-llm-overlay.js'></script>