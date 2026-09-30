## Dictionaries

We are at the final chapter of this term, Chapter 12 - Dictionaries.

Recall a list is a single variable that can hold multiple items.  We can acess each item in the list using its index.  Dictionaries are very similar to lists, but instead of using number as the index, we specify an index specifically for each item when we create the dictionary.

All the mechanical details are covered in chapter 12 (parts 1, 2, 3 and 4) of the textbook. <a href="https://runestone.academy/ns/books/published/thinkcspy/Dictionaries/toctree.html" target="_blank">https://runestone.academy/ns/books/published/thinkcspy/Dictionaries/toctree.html</a>

<div class='python-embed' editable=true>

```python

my_grocery_list = ["chicken", "bread", "lettuce"]
print(my_grocery_list[1]) # Output: "bread"

my_grocery_dict = {
    "protein": "chicken",
    "carbohydrate": "bread",
    "vegetable": "lettuce"
}
print(my_grocery_dict["carbohydrate"]) # Output: "bread"

```

</div>

Dictionaries are especially useful when we want to not only store data, but also associate a label with that data.  Here's an example of a message that we send to a chatbot:

<div class='python-embed' editable=true>
```python
system_message = { "role": "system", "content": "You are a helpful assistant." }
user_message = { "role": "user", "content": "What is the capital of France?" }
``` 
</div>

In the above example, both system_message and user_message are dictionaries.  The "role" key is used to specify the role of the message (system or user), and the "content" key is used to specify the text of the message.

Answer the following questions about the above example:

<quiz>

What is the result of the following code?

```python
print(system_message["role"] == "system")
```
- [x] True
- [ ] False
- [ ] Error

</quiz>

<quiz>

What is the result of the following code?

```python
print(system_message["role"] == user_message["role"])
```
- [ ] True
- [x] False
- [ ] Error

</quiz>

<quiz>

What is the result of the following code?

```python
print(system_message == user_message)
```
- [ ] True
- [x] False
- [ ] Error

</quiz>

<quiz>

What is the result of the following code?

```python
print(system_message[0] == "system")
```
- [ ] True
- [ ] False
- [x] Error

</quiz>

<quiz>

What is the result of the following code?

```python
print(system_message.keys() == user_message.keys())
```
- [x] True
- [ ] False
- [ ] Error

</quiz>

<quiz>

What is the result of the following code?

```python
system_message["role"] = "user"
system_message["content"] = "What is the capital of France?"
print(system_message == user_message)
```
- [x] True
- [ ] False
- [ ] Error

</quiz>

<quiz>

What is the result of the following code?

```python
for i in system_message:
    print(i)
```
- [ ] <pre>0<br>1<br>2<br>3</pre>
- [ ] <pre>role<br>system<br>content<br>You are a helpful assistant.</pre>
- [ ] <pre>system<br>You are a helpful assistant.</pre>
- [x] <pre>role<br>content</pre>
- [ ] Error

</quiz>

