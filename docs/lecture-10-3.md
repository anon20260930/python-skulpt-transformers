## Audio Indexing and Slicing

The code below gives you an addition function called `readAudio` that can read in an audio file and return a list of floats that represent the audio. Each float is a number between -1 and 1 that represents the amplitude of the sound at that moment in time.

Try loading your own files using `readAudio` and then slicing out different parts of the audio using Python's list slicing syntax. You can play the sliced audio using the `playAudio` function.

You can find free audio files at <a href="https://commons.wikimedia.org/wiki/Category:Audio_files" target="_blank">https://commons.wikimedia.org/wiki/Category:Audio_files</a>

<div class='python-embed' editable='true'>

```python
from audio import readAudio, playAudio

# Load a 1-second audio clip of a computer saying "Hello World"
audio_floats = readAudio('https://upload.wikimedia.org/wikipedia/commons/a/a1/Hello_world_said_by_eSpeakNG.ogg')

playAudio(audio_floats)
```

</div>

<quiz>

How many floats does the above audio clip have? 

- [ ] 21594
- [ ] 22000
- [x] 43189
- [ ] 44000

</quiz>

<quiz>

Which of the following would slice out the "Hello" part of the audio clip?

- [x] audio_floats[:15000]
- [ ] audio_floats[0:len(audio_floats) // 2]
- [x] audio_floats[0:len(audio_floats) // 3]
- [ ] audio_floats[len(audio_floats) // 3:]

</quiz>

