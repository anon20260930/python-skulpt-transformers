Here's a function that detects the sentiment of a sentence.  It returns a number between -1 and 1, where -1 is very negative, 0 is neutral, and 1 is very positive.

<div class='python-embed' editable='true'>

```python

print(getSentiment("I love this!"))
print(getSentiment("I hate this!"))
print(getSentiment("This is okay."))

```
</div>


Below is a function that returns a list of the current news.

Complete the function get_news_sentiment() to return the average sentiment of the current news summaries.  You will need to use both the retrieve_news() function and the getSentiment() function inside the get_news_sentiment() function to complete this task.

<div class='python-embed' editable='true'>

```python
import urllib.request

def retrieve_news():
    my_socket = urllib.request.urlopen('https://actually-relevant-api.onrender.com/api/stories')
    dta = jsonToDict(my_socket.read())
    return [ i['summary'] for i in dta['data'] ]

print(retrieve_news())

def get_news_sentiment():
    # Returns the combined sentiment of the current news 
    # summary using the getSentiment function.  
    #
    # Loop over each news summary and get the sentiment of 
    # each summary.  Then return the average sentiment of all 
    # the summaries.
    pass

print(get_news_sentiment())


import unittest
import document
import testcase

code = document.getElementById('code').innerText
code = code[:code.find('import unittest')]

# Redefined retrieve_news() to avoid making an actual HTTP request during testing
news=""
def retrieve_news():
    global news    
    return [news] * 3

class TestChat(testcase.TestCase):
    def test_get_positive_sentiment(self):
        global news
        news = "So happy!"
        self.assertTrue( get_news_sentiment() == getSentiment(news), "The sentiment of So happy! is not correct.  Make sure you are averaging the sentiment of all the news summaries.")
    def test_get_negative_sentiment(self):
        global news
        news = "So sad!"
        self.assertTrue( get_news_sentiment() == getSentiment(news), "The sentiment of So sad! is not correct.  Make sure you are averaging the sentiment of all the news summaries.")



unittest.main()
```
</div>



