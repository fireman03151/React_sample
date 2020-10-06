---
id: 587d78ac367417b2b2512af7
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43GgTa'
forumTopicId: 301115
title: 在推文中使用 justify-content 属性
---

## Description
<section id='description'>
上一项挑战展示了<code>justify-content</code>属性的作用。如果我们想对齐推文内的子元素，可以把<code>justify-content</code>应用在<code>.profile-name</code>上。
</section>

## Instructions
<section id='instructions'>
在 header 的<code>.profile-name</code>元素添加 CSS 属性<code>justify-content</code>，把它的值设为上面挑战提到的任意可用值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>.profile-name</code>元素的<code>justify-content</code>属性可选以下值：center、flex-start、flex-end、space-between、space-around。'
    testString: 'assert(code.match(/header\s.profile-name\s*{\s*?.*?\s*?.*?\s*?\s*?.*?\s*?justify-content\s*:\s*(center|flex-start|flex-end|space-between|space-around|space-evenly)\s*;/g));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              