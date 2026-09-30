## A List of Floats

Turns out, programmers use lists of floats to describe all kinds of data (images, video, audio, and text) to a computer.

If you can believe it, even state-of-the-art generative AI systems (like ChatGPT or image generators) are basically just massive "list of floats" processors.

Enough abstract theory! The code below shows how a real audio file is actually just a giant list of floats.

Use a loop to in the `createAudioClip` function to change index 21950 to 22050 (inclusive) to have the value of 1.0.

<div class='python-embed' editable='true'>

```python
# A new audio module to play with audio
from audio import playAudio

# The createAudioClip function returns a list of 44000 floats
def createAudioClip():
    # A second of audio is around 44000 numbers
    list_of_floats = [0] * 44000
    # We use indexing to modify the middle of the clip to become 1
    list_of_floats[22000] = 1
    return list_of_floats

playAudio(createAudioClip())
```

</div>

## How Humans Hear

Turns out, the human ears can hear sounds from a list of numbers, but only when the numbers *change*.  

The loop below creates a list of all 1's, but since your computer speakers has a level 0 by default, playing all 1's will result in 2 changes, at the beginning of the clip and at the end of 1 second, resulting in 2 "clicks".

Modify the loop below to chnage only the odd indicies to 1 and leave the even indicies to 0.

<div class='python-embed' editable='true'>

```python
# A new audio module to play with audio
from audio import playAudio

# The createAudioClip function returns a list of 44000 floats
def createAudioClip():
    # A second of audio is around 44000 numbers
    list_of_floats = [0] * 44000

    for i in range(44000):
        # This won't work
        list_of_floats[i] = 1

    return list_of_floats

playAudio(createAudioClip())

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_createAudioClip(self):
        clip = createAudioClip()
        for i in range(44000):
            if i % 2 == 0:
                self.assertTrue(clip[i] == 0, "You didn't set the values properly")
            else:
                self.assertTrue(clip[i] >= 0.9999999, "You didn't set the values properly")
unittest.main()
```

</div>

## Complex indexing

Can you modify the below so that instead of alternating between odd and even, we alternate 0s and 1s every 100 index location?

i.e. index 0-99 has the value 0, index 100-199 has the value 1, index 200-299 is 0, etc.

<div class='python-embed' editable='true'>

```python
# A new audio module to play with audio
from audio import playAudio

# The createAudioClip function returns a list of 44000 floats
def createAudioClip():
    # A second of audio is around 44000 numbers
    list_of_floats = [0] * 44000

    for i in range(44000):
        # This won't work        
        list_of_floats[i] = 1

    return list_of_floats

playAudio(createAudioClip())

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_createAudioClip(self):
        clip = createAudioClip()
        for i in range(44000):
            if i // 100 % 2 == 1:            
                self.assertTrue(clip[i] >= 0.9999999, "You didn't set the values properly")
            else:
                self.assertTrue(clip[i] == 0, "You didn't set the values properly")
unittest.main()
```

</div>