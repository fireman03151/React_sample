---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
---

## Description
<section id='description'>
Continuing with the date theme, HTML5 also introduced the <code>time</code> element along with a <code>datetime</code> attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the <code>datetime</code> attribute. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's written in an informal or colloquial manner in the text.
Here's an example:
<code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat's Mortal Kombat survey results are in! Wrap a <code>time</code> tag around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;" and add a <code>datetime</code> attribute to it set to "2016-09-15".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have a <code>p</code> element which includes the text <code>Thank you to everyone for responding to Master Camper Cat's survey.</code> and include a <code>time</code> element.
    testString: assert(timeElement.length);
  - text: Your added <code>time</code> tags should wrap around the text <code>Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;</code>.
    testString: assert(timeElement.length && $(timeElement).html().trim() === "Thursday, September 15<sup>th</sup>");
  - text: Your added <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.
    testString: assert(datetimeAttr && datetimeAttr.length);
  - text: Your added <code>datetime</code> attribute should be set to a value of <code>2016-09-15</code>.
    testString: assert(datetimeAttr === "2016-09-15");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Only change code below this line -->

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>

    <!-- Only change code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</div>

<div id='html-teardown'>

```html
<script>
const pElement = $("article > p")
  .filter((_, elem) => $(elem).text().includes("Thank you to everyone for responding to Master Camper Cat's survey."));
const timeElement = pElement[0] ? $(pElement[0]).find("time") : null;
const datetimeAttr = $(timeElement).attr("datetime");
</script>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>

    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
