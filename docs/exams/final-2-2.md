Assume that you are working for the IT department of an organization, and you need to write a Python script to auto-generate a temporary password for each new employee.

## Implement a function 

```python
generate_password(name, birth_date) 
```

to create a password for a given employee from the employee’s name and birth date.

Inputs:

name is the full name of an employee, with one space separating the first and last name, e.g., "Ava love". Assume the last name always has more than 3 letters.

birth_date is in the format of DDMMYYYY, e.g., "25012003".

Output:

Return the temporary password, which is made up of the first 3 characters of last name, in lower-case, followed by 2 characters of the day, 2 characters of the month, and the last 2 characters of the year from the birth date.

Examples:

```python
generate_password("Ava Love", "25012003") # returns "lov250103".
generate_password("Bob McDavid", "13032004") # returns "mcd130304".
generate_password("Cindy Wang", "01062004") # returns "wan010604".
generate_password("Lovepreet Kaur", "12082004") # returns "kau120804".
```

Hint: This question is mostly about string manipulation, it does NOT require a loop. You might need to use the built-in methods for string: str.split(), str.lower().

Grading

Function implementation. (4 marks)

Create your own assert outside of the above examples. (2 marks)

<div class='python-embed' editable=true>

```python
def generate_password(name, birth_date):
    # Your code here
    pass

import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

class TestChat(testcase.TestCase):
    def test_assert_in_code(self):
        self.assertEqual("assert" in code, True, "You didn't use assert in your code")
    def test_generate_password_1(self):
        self.assertEqual(generate_password("Ava Love", "25012003"), "lov250103", "You didn't return the correct password for 'Ava Love' and '25012003'")
    def test_generate_password_2(self):
        self.assertEqual(generate_password("Bob McDavid", "13032004"), "mcd130304", "You didn't return the correct password for 'Bob McDavid' and '13032004'")
    def test_generate_password_3(self):
        self.assertEqual(generate_password("Cindy Wang", "01062004"), "wan010604", "You didn't return the correct password for 'Cindy Wang' and '01062004'")
    def test_generate_password_4(self):
        self.assertEqual(generate_password("Lovepreet Kaur", "12082004"), "kau120804", "You didn't return the correct password for 'Lovepreet Kaur' and '12082004'")
    def test_generate_password_5(self):
        self.assertEqual(generate_password("John Smith", "15071990"), "smi150790", "You didn't return the correct password for 'John Smith' and '15071990'")

unittest.main()

```
</div>