## Databases

What is a database?  It's basically a file containing more data than you want to look at all at once.  The following is a text file containing description of all the 1025 pokemons.  You'll never want to read through the whole thing, but you might want to find the description of a particular pokemon.  

Below is the code to accomplish it.

<div class='python-embed' editable='true' data-files-base-url='pokemon' data-files='info.txt,main.py'>

```python

def find_pokemon(pokemon_name):
    f = open('info.txt')
    for line in f:
        fields = line.split()
        if fields[0] == pokemon_name:
            return ' '.join(fields[1:])
    return None

def main():
    while True:
        pokemon_name = input("Enter the name of a pokemon: ")
        if pokemon_name == 'exit':
            break
        description = find_pokemon(pokemon_name)
        if description is not None:
            print(description)
        else:
            print("Pokemon not found.")

if __name__ == '__main__':
    main()

```
</div>

## Back to AI

Below is a function that takes a description as input and returns a personality type based on the description.  It uses the reply function that we have been using throughout the course.

<div class='python-embed' editable='true' data-files-base-url='pokemon' data-files='info.txt,main.py'>

```python

from chat import reply

def get_personality(description):
    response = reply("The user chose a pokemon with the following description.  What is the user's personality like?" + description)
    return response

print(get_personality("When several of these POKéMON gather, their electricity could build and cause lightning storms."))

```

</div>

## Combining AI with Databases

Now that we have a way to get the description of a pokemon and a way to get a personality type based on the description, we can combine them to create a program that takes the name of a pokemon as input and returns the personality type of the user based on the description of the pokemon.

<div class='python-embed' editable='true' data-files-base-url='pokemon' data-files='info.txt,main.py'>

```python
from chat import reply

def find_pokemon(pokemon_name):
    f = open('info.txt')
    for line in f:
        fields = line.split()
        if fields[0] == pokemon_name:
            return ' '.join(fields[1:])
    return None

def get_personality(description):
    response = reply("The user chose a pokemon with the following description.  What is the user's personality like?" + description)
    return response

def main():
    while True:
        pokemon_name = input("Enter the name of a pokemon: ")
        if pokemon_name == 'exit':
            break
        description = find_pokemon(pokemon_name)
        if description is not None:
            print("Based on your choice of pokemon, I think your personality is:")
            print(get_personality(description))
        else:
            print("Pokemon not found.")

if __name__ == '__main__':
    main()
```

</div>

<script src='../extras/js/python-code-llm-overlay.js'></script>