---
id: 587d78ad367417b2b2512af9
title: Use the align-items Property in the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade de itens de alinhamento no Tweet Incorporar
---

## Descrição
<section id="description"> O último desafio apresentou a propriedade <code>align-items</code> e deu um exemplo. Essa propriedade pode ser aplicada a alguns elementos de incorporação do tweet para alinhar os itens flexíveis dentro deles. </section>

## Instruções
<section id="instructions"> Adicione a propriedade CSS <code>align-items</code> ao elemento <code>.follow-btn</code> do cabeçalho. Defina o valor para <code>center</code>. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: O elemento <code>.follow-btn</code> deve ter a propriedade <code>align-items</code> definida como um valor de center.
    testString: 'assert($(".follow-btn").css("align-items") == "center", "The <code>.follow-btn</code> element should have the <code>align-items</code> property set to a value of center.");'

```

</section>

## Desafio Seed
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
    justify-content: center;
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
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
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

## Soluções
<section id='solution'>

```js
// solution required
```
</section>
