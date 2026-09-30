# Chapter 17 Questions

<quiz>
What is printed by

```python
class Point:
  def __init__(self, initX =0, initY =0):
    self.x = initX
    self.y = initY
  def display(self):
    print("(", self.x, ",", self.y, ")")
```

- [ ] ( 0, 0 )
- [ ] ( x, y )
- [ ] ( self.x, self.y )
- [x] Nothing
- [ ] None of the above
</quiz>

<quiz>

```python
class Point:
  def __init__(self, initX =0, initY =0):
    self.x = initX
    self.y = initY
  def display(self):
    print("(", self.x, ",", self.y, ")")
```

What is the purpose of `__init__(…`?

- [x] Initializer method
- [ ] function
- [ ] class
- [ ] object
- [ ] None of the above
</quiz>

<quiz>
In the program below p is a:

```python
class Point:
  def __init__(self, initX =0, initY =0):
    self.x = initX
    self.y = initY
p = Point()
```
- [ ] class
- [x] object
- [ ] initializer
- [ ] self
- [ ] None of the above
</quiz>

<quiz>
What is printed by

```python
class Point:
  def __init__(self, initX =0, initY =0):
    self.x = initX
    self.y = initY
  def getX(self):
    return self.x
p = Point(2,3)
print(p.getX())
```

- [ ] 0
- [x] 2
- [ ] 3
- [ ] x
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by

```python
class Point:
  def __init__(self, initX =0, initY =0):
    self.x = initX + 1
    self.y = initY 
  def getX(self):
    return self.x
p = Point()
print(p.getX())
```

- [ ] 0
- [x] 1
- [ ] 2
- [ ] x
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by

```python
class Point:
  def __init__(self, initX = 0, initY = 0):
    self.x = initX
    self.y = initY + 1
    initX = 7
  def getX(self):
    return self.x
p = Point(2,3)
print(p.getX())
```

- [ ] 0
- [x] 2
- [ ] 3
- [ ] 7
- [ ] Nothing. The code contains an error.
</quiz>

<quiz>
What is printed by

```python
class Point:
  def __init__(self, initX = 0, initY = 0):
    self.x = initX
    self.y = initY + 1
    initX = 7
  def getX(self):
    return 5
p = Point(2,3)
print(p.getX())
```

- [ ] 0
- [ ] 2
- [x] 5
- [ ] 7
- [ ] Nothing. The code contains an error.
</quiz>

