---
id: 587d7b8f367417b2b2512b61
title: Use the map Method to Extract Data from an Array
challengeType: 1
videoUrl: ''
localeTitle: 使用映射方法从数组中提取数据
---

## Description
<section id="description">到目前为止，我们已经学会使用纯函数来避免程序中的副作用。此外，我们已经看到函数的值仅取决于其输入参数。这仅仅是个开始。顾名思义，函数式编程以函数理论为中心。能够将它们作为参数传递给其他函数，并从另一个函数返回一个函数是有意义的。函数被认为是JavaScript中的<code>First Class Objects</code> ，这意味着它们可以像任何其他对象一样使用。它们可以保存在变量中，存储在对象中，也可以作为函数参数传递。让我们从一些简单的数组函数开始，这些函数是数组对象原型的方法。在本练习中，我们将查看<code>Array.prototype.map()</code> ，或更简单的<code>map</code> 。请记住， <code>map</code>方法是一种迭代数组中每个项目的方法。在将回调函数应用于每个元素之后，它会创建一个新数组（不更改原始数组）。 </section>

## Instructions
<section id="instructions"> <code>watchList</code>数组保存包含多部电影信息的对象。使用<code>map</code>从<code>watchList</code>提取标题和评级，并将新数组保存在<code>rating</code>变量中。编辑器中的代码当前使用<code>for</code>循环来执行此操作，将循环功能替换为<code>map</code>表达式。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>watchList</code>变量不应该更改。
    testString: assert(watchList[0].Title === "Inception" && watchList[4].Director == "James Cameron");
  - text: 您的代码不应使用<code>for</code>循环。
    testString: assert(!removeJSComments(code).match(/for\s*?\([\s\S]*?\)/));
  - text: 您的代码应该使用<code>map</code>方法。
    testString: assert(code.match(/\.map/g));
  - text: '<code>rating</code>应该等于<code>[{&quot;title&quot;:&quot;Inception&quot;,&quot;rating&quot;:&quot;8.8&quot;},{&quot;title&quot;:&quot;Interstellar&quot;,&quot;rating&quot;:&quot;8.6&quot;},{&quot;title&quot;:&quot;The Dark Knight&quot;,&quot;rating&quot;:&quot;9.0&quot;},{&quot;title&quot;:&quot;Batman Begins&quot;,&quot;rating&quot;:&quot;8.3&quot;},{&quot;title&quot;:&quot;Avatar&quot;,&quot;rating&quot;:&quot;7.9&quot;}]</code> 。'
    testString: assert.deepEqual(ratings, [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var watchList = [
                 {
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var rating = [];
for(var i=0; i < watchList.length; i++){
  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}

// Add your code above this line

console.log(rating);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
