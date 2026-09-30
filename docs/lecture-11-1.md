List data do not usually come within the program as a literal list. Instead, they usually come from some external source.  In this lesson, we are going to learn about text files, which are one of the most common sources of list data.  

Text files are files that contain human-readable text.  They can be created and edited using any text editor (like Notepad, TextEdit, or VSCode).  

## Reading a Text File

To read a text file in Python, we can use the built-in `open()` function.  The `open()` function takes the file name as an argument and returns a file variable.  

The python program itself is saved in a file called `main.py`. 

As long as the data text files belong to the same "folder", you can open it with its filename.

### Exercise 1

For the following code, open the movie_data.txt file instead of example.txt.

<div class='python-embed' editable=true data-files='example.txt,movie_data.txt,main.py'>

```python
# Open the file in read mode (create the file variable)
f = open('example.txt', 'r')

# Loop through each line in the file
for line in f:
    # You can now use all the string functions to process each line
    print(line)

# Close the file after we're done
f.close()

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_not_exist_example_txt(self):
        self.assertTrue('example.txt' not in code, "You must not reference example.txt")        
    def test_open_movie_data_txt(self):
        self.assertRegex(code, r'.*open.*\(.*\'movie_data.txt\'.*\)', "You must open movie_data.txt")        

unittest.main()

``` 
</div>

We can then use the `for` loop to have our looping variable look at each line of the file one by one.  

Essentially, I want you to think of a file variable as a list of strings.  Each item of the list is a line of the data file.

This is a common pattern when working with text files, and it allows us to process each line of the file individually.

