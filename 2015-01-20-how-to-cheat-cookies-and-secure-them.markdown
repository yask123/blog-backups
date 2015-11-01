---
layout: post
title: "How to cheat cookies and secure them"
date: 2015-01-20 01:37:20 +0530
comments: true
categories: 
---


Cookies are small data files stored in the browser for storing temporary information such as the current user.

Cookies are sent to the browsers via `HTTP` headers. It sends the HTTP response header with the `Set-Cookie: xyz ` parameter. 
 <!--more--> 
This is a sample implementation of sending cookie information in HTTP response via Google App Engine (python)

```python
class MainPage(Handler):
        def get(self):
                self.response.headers['Content-Type'] = 'text/plain'
                users = self.request.cookies.get('username', 'yask123')

```

Cookies are secure as they only allows the writing and reading of cookie information from a particular domain only. But user can always change it.

In chrome you can use the function :
```javascript 
document.setcookie("username:yask123");
```

This makes them insecure.
But we can secure it by encrypting the data written in the cookie files.

There are number of hashing encryption methods available.For our example we use a weak `md5` hashing function.

Now instead of storing values like `Set-Cookie:"username:yask123"` we store values in this form :
 ```javascript 
 Set-Cookie:"username:yask123,[hash]"
 ```

Let's call this hash function `H()` .
here [hash] = H("yask123")

We can verify if our cookie hasn't been modified by confirming if h("modified-username") == [hash]

Here is the simple implimentation in Python
```python 
import hashlib
x = hashlib.md5("username:yask123")
x.hexdigest()

```
Output: ```06399d25d06c8ca19ad9d1e29567e24d```

But what if user knows which hash function we are using?
Then he can edit the cookie like `Set-Cookie:"username:new_username",[H("new_user")]`

And we will be fooloed into believing this as a valid cookie.


What if we store the encrypted information as `H("Secret-key"+"username") `?

Now the hacker has to guess not only which encryption we used , but also what our `Secret-Key` .

There is a library called `hmac` that does that for us.

This is our new implementation of secure cookie:
```python
import hmac
hmac.new("secret-key", "username:yask123").hexdigest()

```

This is certainly a secure way to store information in cookie.