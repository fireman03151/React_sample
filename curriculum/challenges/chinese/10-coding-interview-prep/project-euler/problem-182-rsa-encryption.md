---
id: 5900f4231000cf542c50ff35
challengeType: 5
videoUrl: ''
title: 问题182：RSA加密
---

## Description
<section id="description"> RSA加密基于以下过程：生成两个不同的素数p和q。计算n = pq和φ=（p-1）（q-1）。求整数e，1 <e<φ, such="" that="" gcd(e,φ)="1." a="" message="" in="" this="" system="" is="" number="" the="" interval="" [0,n-1].="" text="" to="" be="" encrypted="" then="" somehow="" converted="" messages="" (numbers="" [0,n-1]).="" encrypt="" text,="" for="" each="" message,="" m,="" c="me" mod="" n="" calculated.="" decrypt="" following="" procedure="" needed:="" calculate="" d="" ed="1" φ,="" c,="" m="cd" n.="" there="" exist="" values="" of="" e="" and="" me="" call="" which="" unconcealed="" messages.="" an="" issue="" when="" choosing="" should="" not="" too="" many="" instance,="" let="" p="19" q="37." φ="18*36=648." if="" we="" choose="" then,="" although="" gcd(181,648)="1" it="" turns="" out="" all="" possible="" messagesm="" (0≤m≤n-1)="" are="" calculating="" any="" valid="" choice="" some="" it&#x27;s="" important="" at="" minimum.="" find="" sum="" e,="" 1&#x3C;e&#x3C;φ(1009,3643)="" so="" value="" &#x3C;="" section=""><h2>说明</h2><section id="instructions"></section><h2>测试</h2><section id="tests"><pre> <code class="language-yml">tests: - text: &lt;code&gt;euler182()&lt;/code&gt; should return 399788195976. testString: &#39;assert.strictEqual(euler182(), 399788195976, &quot;&lt;code&gt;euler182()&lt;/code&gt; should return 399788195976.&quot;);&#39;</code> </pre></section><h2>挑战种子</h2><section id="challengeSeed"><div id="js-seed"><pre> <code class="language-js">function euler182() { // Good luck! return true; } euler182();</code> </pre></div></section><h2>解</h2><section id="solution"><pre> <code class="language-js">// solution required</code> </pre></section></e<φ,></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler182()</code>应该返回399788195976。
    testString: 'assert.strictEqual(euler182(), 399788195976, "<code>euler182()</code> should return 399788195976.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler182() {
  // Good luck!
  return true;
}

euler182();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
