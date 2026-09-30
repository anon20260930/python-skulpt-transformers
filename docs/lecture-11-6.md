The program below ask the user for 3 pokemons and then uses the descriptions of those pokemons to get a personality type from the reply function. 

<div class='python-embed' editable='false' data-files-base-url='pokemon' data-files='info.txt,main.py' data-files-display='false'>

<script type='text/python'>
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
    descriptions = []

    while True:        
        print( str(len(descriptions)) + " pokemon descriptions stored.")
        pokemon_name = input("Enter the name of a pokemon: ")
        if pokemon_name == 'exit':
            break
        description = find_pokemon(pokemon_name)
        if description is not None:
            descriptions.append(description)
            if len(descriptions) == 3:
                print()
                print("Based on your choice of pokemon, I think your personality is:")
                print(get_personality(" ".join(descriptions)))
                descriptions = []  # Reset the list
        else:
            print("Pokemon not found.")
        print()

if __name__ == '__main__':
    main()
</script>

</div>

## Exercise

Modify the program below to work similar to the one above, once you got that working, make your own version with either more/less description, or a different prompt to the chat function.  There are many ways to do this, one way is to use what you learned in chapter 10 to store descriptions in a list using an accumulator list variable.  Once the list reaches length of 3, the program calls the reply function with the correct prompt use to generate a personality type and print the result to the user. 

Share your version on the class forum.

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

    # This is the accumulator list storing descriptions    
    descriptions = []

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