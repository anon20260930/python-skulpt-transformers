## A List of any variables

You can create a list of anything.  Here we create a list of images.

<div class='python-embed' editable='true'>

```python

import image 

img1 = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    img1.setPixel(x, y, image.Pixel(255,0,0))

img2 = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    img2.setPixel(x, y, image.Pixel(0,255,0))

img3 = image.EmptyImage(300, 300)

for y in range(300):
  for x in range(300):
    img3.setPixel(x, y, image.Pixel(0,0,255))

images = [img1, img2, img3]

win = image.ImageWin(300, 300)

for img in images:
    img.draw(win)

i = 0

while i < 100:
    images[i%len(images)].draw(win)
    i += 1
```

</div>

