---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
localeTitle: Добавить описание к вашему package.json
challengeType: 2
---

## Description
<section id='description'> 
Следующая часть хорошего package.json - это поле описания, к которому относится краткое, но информативное описание вашего проекта. 
Если вы когда-нибудь планируете опубликовать пакет в npm, помните, что это строка, которая должна продать вашу идею пользователю, когда он решит, устанавливать пакет или нет. Тем не менее, это не единственный случай использования описания: это отличный способ подвести итог тому, что делает проект, это так же важно для ваших обычных проектов Node.js, чтобы помочь другим разработчикам, будущим сопровождающим или даже вашему будущему самому понять проект быстро. 
Независимо от того, что вы планируете для своего проекта, описание определенно рекомендуется. Давайте добавим что-то похожее на это: 
<code>"description": "A project that does something awesome",</code> 
Инструкции 
Добавьте описание в package.json в вашем проекте Glitch. 
забудьте использовать двойные кавычки для имен полей (") и запятых (,) для разделения полей. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json должен иметь действительный ключ "description"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
