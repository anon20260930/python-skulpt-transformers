So far, we have covered the following concepts:

- expressions
- loops
- functions
- conditionals

Now it's time to combine them!

---

## The `image` module

Similar to the `turtle` module, the `image` module provides additional 
ability to our python program.  Speifically it allows use to manipulate pixels on an image.

The `image` module has a few functions we can call, 

- `image.Pixel()` creates a pixel, an image makes up of many pixels.
- `image.EmptyImage()` creates an image variable
- Just like we can call `.forward()` and `.backward()` with a turtle variable, we can call `.setPixel()` on an image variable.

The code below will paint a single green pixel in the middle of a
100x100 image:

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(50, 50)
img.setPixel( 25, 25, image.Pixel(0,255,0))


win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:55px; width:55px' class='python_output'></iframe>
</div>

NOTE: for the purpose of this lesson, you can safely ignore lines 6 and 7.  They are there to make sure the image is drawn but is not critical
to understanding loops and conditionals.

---

Here's how we can draw an line of 10 pixels:

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(50, 50)

img.setPixel( 10, 25, image.Pixel(0,255,0))
img.setPixel( 11, 25, image.Pixel(0,255,0))
img.setPixel( 12, 25, image.Pixel(0,255,0))
img.setPixel( 13, 25, image.Pixel(0,255,0))
img.setPixel( 14, 25, image.Pixel(0,255,0))
img.setPixel( 15, 25, image.Pixel(0,255,0))
img.setPixel( 16, 25, image.Pixel(0,255,0))
img.setPixel( 17, 25, image.Pixel(0,255,0))
img.setPixel( 18, 25, image.Pixel(0,255,0))
img.setPixel( 19, 25, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:55px; width:55px' class='python_output'></iframe>
</div>

<quiz>

Which of the following code can replace lines 5 to 14 of the above:

- [ ] <pre>for i in range(10):<br>&nbsp;&nbsp;img.setPixel( i, i, image.Pixel(0,255,0))</pre>
- [x] <pre>for x in range(10, 20):<br>&nbsp;&nbsp;img.setPixel( x, 25, image.Pixel(0,255,0))</pre>
- [x] <pre>for k in range(10):<br>&nbsp;&nbsp;img.setPixel( k + 10, 25, image.Pixel(0,255,0))</pre>
- [ ] <pre>for j in range(10, 20):<br>&nbsp;&nbsp;img.setPixel( 25, j, image.Pixel(0,255,0))</pre>

</quiz>

---

## "Nested" loop

The most important concept of this chapter is the idea of a "nested" loop, which is one loop inside another.

The `.setPixel()` function works by providing 2 coordinates and a pixel color. 

Let's say I want to paint the who image green, the below code will paint
5 green lines one after another, changing the y coordinate each time:

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(300, 300)

for i in range(300):
  img.setPixel(i, 0, image.Pixel(0,255,0))
for i in range(300):
  img.setPixel(i, 1, image.Pixel(0,255,0))
for i in range(300):
  img.setPixel(i, 2, image.Pixel(0,255,0))
for i in range(300):
  img.setPixel(i, 3, image.Pixel(0,255,0))
for i in range(300):
  img.setPixel(i, 4, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

So we just need to repeat the for loop another 295 times and we will have a green image.  But that's too many copy and pasting.  So we put the horizontal line loop inside another loop.  Like so:


<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(300, 300)

for j in range(300):
  for i in range(300):
    img.setPixel(i, j, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

Most tricky part here is that each for loop requires a differet variable name.  Variable names cannot conflict!

---

Here are some fun little image code:

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if y < 150:
      img.setPixel(x, y, image.Pixel(0,255,0))
    else:
      img.setPixel(x, y, image.Pixel(255,0,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if y % 5 == 0:
      img.setPixel(x, y, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

<div class='python-embed' editable=true>

```python
import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if x > 150 and y > 150:
      img.setPixel(x, y, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

```

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

---

### Practice

For each image below, choose the code that would create it.

<div class='python-embed'>

<script type='text/plain'>

import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if x < 100:
      img.setPixel(x, y, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

</script>

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

<quiz>

Which of the following code creates the image above?

- [x] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if y &lt; 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &gt; 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x == 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>

</quiz>

<div class='python-embed'>

<script type='text/plain'>

import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if x % 20 == 0:
      img.setPixel(x, y, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

</script>

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

<quiz>

Which of the following code creates the image above?

- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if y % 20 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [x] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x % 20 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x % 20 == 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 20:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>

</quiz>

<div class='python-embed'>

<script type='text/plain'>
import image

img = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    if x > 150 and y < 150:
      img.setPixel(x, y, image.Pixel(0,255,0))

win = image.ImageWin(img.getWidth(), img.getHeight())
img.draw(win)

</script>

<iframe style='height:305px; width:305px' class='python_output'></iframe>
</div>

<quiz>

Which of the following code creates the image above?

- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 150 and y &lt; 150:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [x] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &gt; 150 and y &lt; 150:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &gt; 150 or y &lt; 150:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>
- [ ] <pre>for y in range(300):<br>&nbsp;&nbsp;for x in range(300):<br>&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 150 and y &gt; 150:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.setPixel(x, y, image.Pixel(0,255,0))</pre>

</quiz>

