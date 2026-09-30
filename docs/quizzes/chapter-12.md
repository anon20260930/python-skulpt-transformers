# Chapter 12 Questions

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
print(s['dog'])
```

- [ ] 1
- [ ] dog
- [x] woof
- [ ] s['dog']
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
print(s[1])
```

- [ ]  dog
- [ ]  woof
- [ ] 'dog':'woof',
- [ ] s[1]
- [x] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
s['horse'] = 'neigh'
print(s['horse'])
```

- [ ] 3
- [ ] horse
- [x] neigh
- [ ] s['horse']
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
s['dog'] = 'martha'
print(s['dog'])
```

- [ ]  1
- [ ] woof,martha
- [ ] woof
- [x] martha
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
keys = list(s.keys())
print(keys)
```

- [ ] 3
- [x] ['pig', 'dog', 'cat']
- [ ] ['oink', 'woof', 'meow']
- [ ] keys
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
vals = list(s.values())
print(vals)
```

- [ ] 3
- [ ] ['pig', 'dog', 'cat']
- [x] ['oink', 'woof', 'meow']
- [ ] [('pig', 'oink'),('dog', 'woof'), ('cat', 'meow')]
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
items = list(s.items())
print(items)
```

- [ ] 3
- [ ] ['pig', 'dog', 'cat']
- [ ] ['oink', 'woof', 'meow']
- [x] [('pig', 'oink'),('dog', 'woof'), ('cat', 'meow')]
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
print('pig':'oink'in s)
```

- [ ] True
- [ ] False
- [ ] 'pig':'oink'
- [ ] 'pig':'oink' in s
- [x] None of the above.

</quiz>

<quiz>
What is printed by the following code

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
print('pig' in s)
```
- [x] True
- [ ] False
- [ ] oink
- [ ] 'pig'in s
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code?

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
d = s
d['dog'] = 'roof'
print(s['dog'])
```
- [ ] woof
- [x] roof
- [ ] ['oink', 'woof', 'meow']
- [ ] s['dog']
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code?

```python
s={'pig':'oink','dog':'woof','cat':'meow'}
d = s.copy()
d['dog'] = 'roof'
print(s['dog'])
```
- [x] woof
- [ ] roof
- [ ] ['oink', 'woof', 'meow']
- [ ] s['dog']
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code?

```python
s={'pig':4,'dog':2,'cat':4}
s['horse'] = 1
```

- [ ] print(len(s)) 3
- [x] 4
- [ ] 5
- [ ] 11
- [ ] None of the above.
</quiz>

<quiz>
What is printed by the following code?

```python
s={'pig':2,'dog':2,'cat':5}
s['horse'] = 1 
for key in s.keys():
  if s[key] > 3:
    print(s[key])
```

- [ ] 1
- [x] 5
- [ ] cat
- [ ] horse
- [ ] None of the above.

</quiz>

<quiz>
What is printed by the following code?

```python
s={'pig':2,'dog':4,'cat':5,'horse':1}
animals = ""
for key in s.keys():
  if s[key] > 3:
    animals = animals + key
print(animals)
```
- [ ] 1
- [ ] 9
- [ ] horse
- [x] dogcat
- [ ] None of the above.
</quiz>

