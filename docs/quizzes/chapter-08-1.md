# Chapter 08 Nested Loop Questions

<quiz>
How many stars are printed by the following code?
```python
for i in range(5):
  for j in range(3):
    print("*")
```
- [ ] 0
- [ ] 3
- [ ] 5
- [x] 15
- [ ] None of the above.
</quiz>

<quiz>
How many stars are printed by the following code?
```python
for i in range(5):
    for j in range(i,4):
        print("*",j)
```
- [ ] 0 
- [ ] 5 
- [x] 10
- [ ] 20
- [ ] None of the above

</quiz>

<quiz>

```python
p = image.Pixel(0,0,255)
```

The colour of the pixel created by the above code is:

- [ ] Red
- [ ] Green
- [x] Blue
- [ ] Yellow
- [ ] Cyan

</quiz>

<quiz>

If img is referencing the following image (the below image is 4 pixels x 4 pixels):

<table border="1" cellspacing="4" cellpadding="0">
  <tr>
    <td width="50" height="50" bgcolor="red"></td>
    <td width="50" height="50" bgcolor="green"></td>
    <td width="50" height="50" bgcolor="green"></td>
    <td width="50" height="50" bgcolor="green"></td>
  </tr>
  <tr>
    <td width="50" height="50" bgcolor="blue"></td>
    <td width="50" height="50" bgcolor="yellow"></td>
    <td width="50" height="50" bgcolor="yellow"></td>
    <td width="50" height="50" bgcolor="red"></td>
  </tr>
  <tr>
    <td width="50" height="50" bgcolor="yellow"></td>
    <td width="50" height="50" bgcolor="red"></td>
    <td width="50" height="50" bgcolor="green"></td>
    <td width="50" height="50" bgcolor="blue"></td>
  </tr>
  <tr>
    <td width="50" height="50" bgcolor="red"></td>
    <td width="50" height="50" bgcolor="blue"></td>
    <td width="50" height="50" bgcolor="blue"></td>
    <td width="50" height="50" bgcolor="yellow"></td>
  </tr>
</table>

The colour of the pixel of the following code:

```python
p = img.getPixel(1,2) 
```

- [x] Red
- [ ] Green
- [ ] Blue
- [ ] Yellow
- [ ] Can't be determined

</quiz>

<quiz>
Assume that img is of size 300 x 300 and completely white. Then the following code when executed

```python
for i in range(300):  
  img.setPixel( i, 150, image.Pixel(0,255,0))
```

changes the image so that :

- [ ] There is a vertical green line in the middle of the image
- [x] There is a horizontal green line in the middle of the image
- [ ] There is a diagonal green line in the middle of the image
- [ ] The whole image is green
- [ ] The image stays white
</quiz>

<quiz>
Assume that img is of size 300 x 300 and completely white. Then the following code, when executed,

```python
for i in range(300):  
  img.setPixel( i, i, image.Pixel(0,255,0))
```
changes the image so that :

- [ ] There is a vertical green line in the middle of the image
- [ ] There is a horizontal green line in the middle of the image
- [x] There is a diagonal green line in the middle of the image
- [ ] The whole image is green
- [ ] The image stays white
</quiz>

<quiz>
Which image is created by the following code snippet?

```python
img = image.EmptyImage(300,300)
for row in range(300):
  for col in range(300):
    if row < col:      
      img.setPixel(col, row, image.Pixel(0,255,0))
    else:      
      img.setPixel(col, row, image.Pixel(255,0,0))
    
```

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIGNvbCA8IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMCwyNTUsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQppbWcuZHJhdyh3aW4p'></iframe>
- [x] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyA8IGNvbDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQppbWcuZHJhdyh3aW4p'></iframe>
- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyA+IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMCwyNTUsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQppbWcuZHJhdyh3aW4p'></iframe>
- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyAhPSBjb2w6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgyNTUsMCwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKaW1nLmRyYXcod2luKQ=='></iframe>

</quiz>




<quiz>
What is the output of the following code?

```python
img = image.EmptyImage(300,300)
for row in range(300):
  for col in range(300):
    if row % 10 == 0:      
      img.setPixel(col, row, image.Pixel(0,255,0))
    else:      
      img.setPixel(col, row, image.Pixel(255,0,0))
    
```

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIGNvbCAlIDEwID09IDA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKaW1nLmRyYXcod2luKQ=='></iframe>
- [x] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyAlIDEwID09IDA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKaW1nLmRyYXcod2luKQ=='></iframe>
- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIGNvbCAlIDEwID09IDA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgyNTUsMCwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKaW1nLmRyYXcod2luKQ=='></iframe>
- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKd2luID0gaW1hZ2UuSW1hZ2VXaW4oMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyAlIDUgPT0gMDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQppbWcuZHJhdyh3aW4p'></iframe>

</quiz>

<quiz>
What is the output of the following code?

```python
img = image.EmptyImage(300,300)
for row in range(300):
  for col in range(300):
    if col < 180:      
      img.setPixel(col, row, image.Pixel(0,255,0))
    else:      
      img.setPixel(col, row, image.Pixel(255,0,0))
    
```

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCgppbWcgPSBpbWFnZS5FbXB0eUltYWdlKDMwMCwzMDApCmZvciByb3cgaW4gcmFuZ2UoMzAwKToKICBmb3IgY29sIGluIHJhbmdlKDMwMCk6CiAgICBpZiByb3cgPiAxODA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKIAp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCgppbWcgPSBpbWFnZS5FbXB0eUltYWdlKDMwMCwzMDApCmZvciByb3cgaW4gcmFuZ2UoMzAwKToKICBmb3IgY29sIGluIHJhbmdlKDMwMCk6CiAgICBpZiByb3cgPCAxODA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKIAp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [x] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCgppbWcgPSBpbWFnZS5FbXB0eUltYWdlKDMwMCwzMDApCmZvciByb3cgaW4gcmFuZ2UoMzAwKToKICBmb3IgY29sIGluIHJhbmdlKDMwMCk6CiAgICBpZiBjb2wgPCAxODA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKIAp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCgppbWcgPSBpbWFnZS5FbXB0eUltYWdlKDMwMCwzMDApCmZvciByb3cgaW4gcmFuZ2UoMzAwKToKICBmb3IgY29sIGluIHJhbmdlKDMwMCk6CiAgICBpZiBjb2wgPiAxODA6CiAgICAgIHAgPSBpbWFnZS5QaXhlbCgwLDI1NSwwKQogICAgZWxzZToKICAgICAgcCA9IGltYWdlLlBpeGVsKDI1NSwwLDApCiAgICBpbWcuc2V0UGl4ZWwoY29sLHJvdywgcCkKIAp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

</quiz>

<quiz>
What is the output of the following code?

```python
img = image.EmptyImage(300,300)
for row in range(300):
  for col in range(300):
    if row == col and row > 150:       
      img.setPixel(col, row, image.Pixel(0,255,0))
    else:      
      img.setPixel(col, row, image.Pixel(255,0,0))
    
```

- [x] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyA9PSBjb2wgYW5kIHJvdyA+IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyAhPSBjb2wgYW5kIHJvdyA+IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyA9PSBjb2wgYW5kIHJvdyA8IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

- [ ] <iframe style='width: 300px; height: 300px' src='../extras/python_code.html#aW1wb3J0IGltYWdlCmltZyA9IGltYWdlLkVtcHR5SW1hZ2UoMzAwLDMwMCkKZm9yIHJvdyBpbiByYW5nZSgzMDApOgogIGZvciBjb2wgaW4gcmFuZ2UoMzAwKToKICAgIGlmIHJvdyAhPSBjb2wgYW5kIHJvdyA8IDE1MDoKICAgICAgcCA9IGltYWdlLlBpeGVsKDAsMjU1LDApCiAgICBlbHNlOgogICAgICBwID0gaW1hZ2UuUGl4ZWwoMjU1LDAsMCkKICAgIGltZy5zZXRQaXhlbChjb2wscm93LCBwKQp3aW4gPSBpbWFnZS5JbWFnZVdpbigzMDAsMzAwKQppbWcuZHJhdyh3aW4p'></iframe>

</quiz>
