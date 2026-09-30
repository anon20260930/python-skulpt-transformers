# Chapter 09 Questions

<quiz>
What is printed by

```python
s = "noodle"
t = "soup"
print(s + t)
```

- [x] noodlesoup
- [ ] noodle soup
- [ ] S + t
- [ ] 0
- [ ] Nothing. You cannot add words.
</quiz>

<quiz>
What is printed by

```python
s = "Capilano_University"
print(s[9:12])
```

- [ ] S[9:12]
- [x] Uni
- [ ] _Un
- [ ] Univ
- [ ] Nothing. The code contains a syntax error.
</quiz>

<quiz>
What is printed by

```python
s = "Capilano University"
print(s[1] + s[-1])
```

- [ ] Capilano University
- [ ] at
- [x] ay
- [ ] Cy
- [ ] Nothing. -1 is not a valid index.
</quiz>

<quiz>
What is printed by

```python
s = "Capilano University"
print(s[len(s)-1] + s[0])
```

- [ ] Capilano University
- [x] yC
- [ ] tC
- [ ] y
- [ ] Nothing. len(s)-1 is not a valid index.
</quiz>

<quiz>
What is printed by

```python
s = "Capilano University"
print(s[:3]+s[-3:])
```

- [x] Capity
- [ ] Capiity
- [ ] ity
- [ ] Caty
- [ ] Nothing. There is a syntax error in the code.

</quiz>

<quiz>

What is printed by

```python
v = 1.455  
print('{:.2f} {:.4f}'.format(v, v))
```

- [ ] {:.2f} {:.4f}
- [x] 1.46 1.4550
- [ ] v,v
- [ ] 1.46 1.455
- [ ] Nothing. There is a syntax error in the code.
</quiz>

<quiz>
What is printed by

```python
price = 23.467
formatted = 'The price is ${:.2f}!'.format(price)
print(formatted)
```

- [ ] The price is $23.46
- [ ] The price is $23.47
- [x] The price is $23.47!
- [ ] The price is $23.50!
- [ ] Nothing. There is a syntax error in the code.
</quiz>

<quiz>
What is printed by

```python
if "apple" < "kiwi":
    print("Apples are better!")
else:
    print("Kiwis are better!")
```

- [x] Apples are better!
- [ ] Kiwis are better!
- [ ] Nothing is printed.
- [ ] Nothing. There is a syntax error in the code.
</quiz>

<quiz>
What is printed by

```python
print(ord("B")-ord("A"))
```

- [ ] B-A
- [x] 1
- [ ] ord("B")-ord("A")
- [ ] -1
- [ ] Nothing. The code contains a syntax error.
</quiz>

<quiz>
What is printed by

```python
s = "Capilano University"
s[1]= 'i'
print(s)
```

- [ ] Cipilano University
- [ ] iapilano University
- [ ] Cipilano
- [ ] Iapilano University
- [x] Nothing. There is a error in the code.
</quiz>

<quiz>
How many times is the word HELLO printed on the screen?

```python
s = "Cap"
for ch in s:
  print("HELLO")
```

- [ ] 0
- [ ] 2
- [x] 3
- [ ] 4
- [ ] 0. The code contains an error.
</quiz>

<quiz>
What is printed by

```python
i = 1
s = "Capilano"
while i < len(s):
  print(s[i])
  i = i + 3
```

- [ ] n
- [ ] a<br>l
- [ ] C<br>i
- [x] a<br>l<br>o
- [ ] C<br>i<br>n
</quiz>

<quiz>
What is printed by

```python
def foo(s):

  vowels = "aeiouAEIOU"
  n = 0
  for c in s:
    if c in vowels:
      n = n + 1
  return n

print(foo("Capilano"))
```

- [ ] 0 
- [x] 4
- [ ] 8
- [ ] a<br>i<br>a<br>o
- [ ] True
</quiz>

<quiz>
What is printed by

```python
def foo(s):

  vowels = "aeiouAEIOU"
  new_s = ""
  for c in s:
    if c  in vowels:
      new_s = new_s + c
  return new_s

print(foo("Capilano"))
```

- [x] aiao
- [ ] Cpln
- [ ] 4
- [ ] Capilano
- [ ] new_s
</quiz>

<quiz>
What is printed by

```python
def foo(s, start=0, end=None):
  if end == None:
    end = len(s) // 2
  print(s[start:end])

foo("Capilano")
```

- [ ] Capilano
- [ ] Capil
- [ ] Cap
- [x] Capi
- [ ] Nothing,the code contains an error 
</quiz>

<quiz>
What is printed by

```python
def foo(s, start=0, end=None):
  if end == None:
    end = len(s) // 2
  print(s[start:end])

foo("Capilano",2)
```

- [ ] ap
- [ ] api
- [x] pi
- [ ] pil
- [ ] Nothing,the code contains an error
</quiz>

<quiz>

What is printed by

```python
s = "Capilano"
for i in range(6,len(s)):
  print(s[i])
```

- [ ] Capilano
- [x] n<br>o
- [ ] a<br>n<br>o
- [ ] o
- [ ] Nothing. There is an error in the code.
</quiz>

