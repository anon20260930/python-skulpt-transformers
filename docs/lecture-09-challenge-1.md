# AI Village

The code in `main.py` is a text-based game that allows the player
to converse with various AI fictional characters.  

Notice how a character is simply a call to the `chat` function, but with 
a string prepended to the chat parameter to instruct the AI to behave 
a certain way. This is what is known as **"prompting"** in AI.

## Fixing the bug

Inspect the main loop carefully. We are using a basic `while True`
loop and `input()` to get the player's message. Instead of asking the player exactly who 
they want to talk to, we use the function `classify_character()` to decide
from their raw input who they mean to talk to, and then we send that input
to the correct character. In software engineering, this architectural pattern is called a **router**.

```mermaid
graph TD
    A([Player Input]) --> B[classify_character]
    B -->|Analyzes Text| C{Which NPC?}
    
    C -->|Matches 'guard'| D[talk_to_guard]
    C -->|Matches 'wizard'| E[talk_to_wizard]
    C -->|Matches 'merchant'| F[talk_to_merchant]
    C -->|No match / Default| G[talk_to_villager]
    
    D --> H[Clean Output & Print]
    E --> H
    F --> H
    G --> H
    
    H -->|Loop back| A

```

The issue right now is that the router code doesn't work correctly, and we are almost always stuck talking to the villager. Fix this routing logic.

## Removing all the "thinking"

You'll notice that the `chat` function returns a raw string that includes how
the AI thinks before it answers. This internal monologue is enclosed between `<think>` and `</think>` tags.
Your users shouldn't see this! Use your knowledge of string manipulation and slicing to remove these thinking tags so the game's output is clean.

## More characters

If you look at the code inside `classify_character()`, you'll notice
we are prompting the AI to choose from 4 types of characters, but our main loop logic only actually handles 2 of them.
Modify the code to completely implement and handle all 4 character types (`villager`, `guard`, `wizard`, and `merchant`).

## Extending into different worlds

Using this pipeline structure, you can extend this game engine to any type of universe, genre, or scenario.  You can also incorporate additional techniques taught in class, such as advanced strings, list and dictionaries.

## Ready?

 - Start with [Fixing the bug](lecture-09-challenge-2.md) 
 - Then move on to [Create Your Own Adventure](lecture-09-challenge-3.md) when you're ready to extend the game with more characters and a more complex world.

Go ahead and use AI to help you with this if you like.  The goal is to understand the structure of the code and how to modify it.  Since this is a challenge exercise, it is not graded in the traditional sense.  You will present you learning journey to me as a reflection as well as show me **in person** what you built and explain your code.