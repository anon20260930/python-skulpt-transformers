# Chapter 11 Questions Jason

<quiz>
Which of the following correctly opens the file data.txt for reading. Assume that the file data.txt is in the same folder as the file you are editing.
- [ ] "data.txt ".open()
- [x] inFile = open("data.txt", "r")
- [ ] inFile.open("data.txt", "r")
- [ ] inFile = open("data.txt", " w")
- [ ] None of the above.
</quiz>

<quiz>

Consider the following folder structure:

<pre>
📄 README.txt
📁 bug
    📄 main.py
    📄 names.txt
    📁 dark
        📄 names.txt
    📁 electric
        📄 names.txt
📁 electric    
    📄 names.txt
    📁 poison
        📄 names.txt
📁 dragon
    📄 names.txt

</pre>

How can main.py read from the file README.txt?

- [ ] `open('README.txt', 'r')`
- [ ] `open('bug/README.txt', 'r')`
- [ ] `open('dragon/README.txt', 'r')`
- [x] `open('../README.txt', 'r')`

</quiz>

<quiz>
On the Runestone website, you can access the file `movie_data.txt`, with the following content:

```
3 April 2015 Furious 7 1516045911 James Wan
1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
12 June 2015 Jurassic World 1670400637 Colin Trevorrow
19 June 2015 Inside Out 856809711 Pete Docter
10 July 2015 Minions 1159398397 Pierre Coffin and Kyle Balda
31 July 2015 Mission: Impossible -- Rogue Nation 682330139 Christopher McQuarrie
2 October 2015 The Martian 629281283 Ridley Scott
6 November 2015 Spectre 880669186 Sam Mendes
20 November 2015 The Hunger Games: Mockingjay Part 2 652955370 Francis Lawrence
18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
```

Given the following code, what will be printed in the output?

```python
def foo():
  f = open('movie_data.txt')
  for line in f:    
    return line
print(foo())
```

- [x] 3 April 2015 Furious 7 1516045911 James Wan
- [ ] 1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
- [ ] 18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
- [ ] 3 April 2015
- [ ] None of the above
</quiz>

<quiz>

On the Runestone website, you can access the file `movie_data.txt`, with the following content:

```
3 April 2015 Furious 7 1516045911 James Wan
1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
12 June 2015 Jurassic World 1670400637 Colin Trevorrow
19 June 2015 Inside Out 856809711 Pete Docter
10 July 2015 Minions 1159398397 Pierre Coffin and Kyle Balda
31 July 2015 Mission: Impossible -- Rogue Nation 682330139 Christopher McQuarrie
2 October 2015 The Martian 629281283 Ridley Scott
6 November 2015 Spectre 880669186 Sam Mendes
20 November 2015 The Hunger Games: Mockingjay Part 2 652955370 Francis Lawrence
18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
```

Given the following code, what will be printed in the output?
```python
def foo():
  f = open('movie_data.txt')
  for line in f:    
    if line[0] == 3:
      return line
print(foo())
```
- [ ] 3 April 2015 Furious 7 1516045911 James Wan
- [ ] 3
- [ ] 18
- [ ] 18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
- [x] None of the above
</quiz>

<quiz>

On the Runestone website, you can access the file `movie_data.txt`, with the following content:

```
3 April 2015 Furious 7 1516045911 James Wan
1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
12 June 2015 Jurassic World 1670400637 Colin Trevorrow
19 June 2015 Inside Out 856809711 Pete Docter
10 July 2015 Minions 1159398397 Pierre Coffin and Kyle Balda
31 July 2015 Mission: Impossible -- Rogue Nation 682330139 Christopher McQuarrie
2 October 2015 The Martian 629281283 Ridley Scott
6 November 2015 Spectre 880669186 Sam Mendes
20 November 2015 The Hunger Games: Mockingjay Part 2 652955370 Francis Lawrence
18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
```

Given the following code, what will be printed in the output?

```python
def foo():
  f = open('movie_data.txt')
  for line in f:    
    if 'December' in line:
      return line
print(foo())
```

- [ ] 3 April 2015 Furious 7 1516045911 James Wan
- [ ] 1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
- [x] 18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
- [ ] 3 April 2015
- [ ] None of the above

</quiz>

<quiz>

On the Runestone website, you can access the file `movie_data.txt`, with the following content:

```
3 April 2015 Furious 7 1516045911 James Wan
1 May 2015 Avengers: Age of Ultron 1405413868 Joss Whedon
12 June 2015 Jurassic World 1670400637 Colin Trevorrow
19 June 2015 Inside Out 856809711 Pete Docter
10 July 2015 Minions 1159398397 Pierre Coffin and Kyle Balda
31 July 2015 Mission: Impossible -- Rogue Nation 682330139 Christopher McQuarrie
2 October 2015 The Martian 629281283 Ridley Scott
6 November 2015 Spectre 880669186 Sam Mendes
20 November 2015 The Hunger Games: Mockingjay Part 2 652955370 Francis Lawrence
18 December 2015 Star Wars: The Force Awakens 2061081088 J.J. Abrams
```

Given the following code, what will be printed in the output?

```python
def foo():
  f = open('movie_data.txt')
  title = ""
  for line in f:    
    values = line.split()
    if int(values[0]) > 19:
      title = values[3]
  return title
print(foo())
```

- [ ] Furious 7
- [ ] Mission: Impossible – Rogue Nation
- [ ] The Hunger Games: Mockingjay Part 2
- [ ] Star Wars: The Force Awakens
- [x] None of the above

</quiz>

<quiz>

Given the following data.txt file:

```
Joe 10 15 20 30 40
Bill 23 16 19 22
Grace 12 28 21 45 26 10
John 8 22 17 14 32 17 24 Sue 14 32 25 16 89 
```

What is the output of the program on the right?

```python
f = open("data.txt", "r")
for aline in f:
  items = aline.split()
  if len(items[0]) > 4:
    print(items[0])
f.close()
```

- [ ] Joe
- [x] Grace
- [ ] Joe 10 15 20 30 40
- [ ] John 8 22 17 14 32 17 24
- [ ] None of the above

</quiz>

<quiz>
Given the following data.txt file:

```
Joe 10 15 20 30 40
Bill 23 16 19 22
Grace 12 28 21 45 26 10
John 8 22 17 14 32 17 24 Sue 14 32 25 16 89 
```

What is the output of the following program?

```python
f = open("data.txt", "r")
for aline in f:
    items = aline.split()
    if len(items[1:]) > 6:
        print(items[0])
f.close()
```
- [x] John
- [ ] Sue
- [ ] Joe 10 15 20 30 40
- [ ] John 8 22 17 14 32 17 24
- [ ] None of the above
</quiz>

<quiz>

Given the follwoing data.txt file:

```
Joe 10 15 20 30 40
Bill 23 16 19 22
Grace 12 28 21 45 26 10
John 8 22 17 14 32 17 24 Sue 14 32 25 16 89
```

How many characters are written in data1.txt by the program on the right?

```python
f = open("data.txt", "r")
s = ""
for aline in f:
    s = s + aline[:3]
f.close()
print(len(s))
```
- [ ] 2
- [ ] 3
- [ ] 4
- [x] 15
- [ ] None of the above
</quiz>

<quiz>
Given the data.txt file:

```
3
4
1
5
2
```

What does the following program print on the screen?

```python
f = open("data.txt", "r")
x = 0
for aline in f:
  n = int(aline)
  if n > x:
    x = n
f.close()
print(x)
```

- [ ] 0
- [ ] 3
- [x] 5
- [ ] 15
- [ ] None of the above
</quiz>

<quiz>
Given the data.txt file: 

```
3
4
1
5
2
```

What does the following program print on the screen?

```python
f = open("data.txt", "r")
x = 0
for aline in f:
  n = int(aline)
  x = x + n
f.close()
print(x)
```

- [ ] 0
- [ ] 3
- [ ] 5
- [x] 15
- [ ] None of the above
</quiz>

