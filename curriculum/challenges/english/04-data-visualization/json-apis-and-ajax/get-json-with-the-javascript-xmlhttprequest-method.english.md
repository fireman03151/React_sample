---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
---

## Description
<section id='description'>
You can also request data from an external source. This is where APIs come into play.
Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.
Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.
JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a <code>{</code> and a <code>}</code>.
These properties and their values are often referred to as "key-value pairs".
However, JSON transmitted by APIs are sent as <code>bytes</code>, and your application receives it as a <code>string</code>. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The <code>JSON.parse</code> method parses the string and constructs the JavaScript object described by it.
You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:
<blockquote>req=new XMLHttpRequest();<br>req.open("GET",'/json/cats.json',true);<br>req.send();<br>req.onload=function(){<br>&nbsp;&nbsp;json=JSON.parse(req.responseText);<br>&nbsp;&nbsp;document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);<br>};</blockquote>
Here's a review of what each piece is doing. The JavaScript <code>XMLHttpRequest</code> object has a number of properties and methods that are used to transfer data. First, an instance of the <code>XMLHttpRequest</code> object is created and saved in the <code>req</code> variable.
Next, the <code>open</code> method initializes a request - this example is requesting data from an API, therefore is a "GET" request. The second argument for <code>open</code> is the URL of the API you are requesting data from. The third argument is a Boolean value where <code>true</code> makes it an asynchronous request.
The <code>send</code> method sends the request. Finally, the <code>onload</code> event handler parses the returned data and applies the <code>JSON.stringify</code> method to convert the JavaScript object into a string. This string is then inserted as the message text.
</section>

## Instructions
<section id='instructions'>
Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. Then click the "Get Message" button. Your AJAX function will replace the "The message will go here" text with the raw JSON output from the API.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should create a new <code>XMLHttpRequest</code>.
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), 'Your code should create a new <code>XMLHttpRequest</code>.');
  - text: Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.
    testString: assert(code.match(/\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g), 'Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.');
  - text: Your code should use the <code>send</code> method to send the request.
    testString: assert(code.match(/\.send\(\s*\)/g), 'Your code should use the <code>send</code> method to send the request.');
  - text: Your code should have an <code>onload</code> event handler set to a function.
    testString: assert(code.match(/\.onload\s*=\s*function\(\s*?\)\s*?{/g), 'Your code should have an <code>onload</code> event handler set to a function.');
  - text: Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.
    testString: assert(code.match(/JSON\.parse\(.*\.responseText\)/g), 'Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.');
  - text: Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.
    testString: assert(code.match(/document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g), 'Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line


      // Add your code above this line
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
