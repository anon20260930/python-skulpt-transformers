What is an AI Agent?

It's nothing more than strings with a while loop.

Below we instruct our AI to output something, but since AI has a tenancy to be unreliable, we use a loop to ensure the output is correct.

Make your own version of a task that you want to AI to accomplish, and share your version with the class.

<div class='python-embed' editable=true>

```python
from chat import chat

def is_valid_story(text):
    if len(text.split()) == 15:
        return True
    else:
        return False

# The 'Orchestrator' (The human designer's logic)
while True:
    attempt = chat("generate a short story in with exactly 15 words, no more no less. /no_think")

    cleaned = attempt[attempt.find('</think>')+len('</think>'):].strip()
    
    if is_valid_story(cleaned): # The validator
        print("\nSuccess:")
        print(cleaned)
        break
    else:        
        print(".", end='')
```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>