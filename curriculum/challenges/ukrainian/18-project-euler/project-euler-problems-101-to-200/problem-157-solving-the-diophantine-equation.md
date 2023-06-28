---
id: 5900f4091000cf542c50ff1c
title: 'Завдання 157: розв’язок діофантових рівнянь'
challengeType: 1
forumTopicId: 301788
dashedName: problem-157-solving-the-diophantine-equation
---

# --description--

Розглянемо діофантове рівняння $\frac{1}{a} + \frac{1}{b} = \frac{p}{{10}^n}$ з натуральними числами $a$, $b$, $p$, $n$, за умови $a ≤ b$.

За умови $n = 1$ рівняння матиме 20 розв’язків, показаних нижче:

$$\begin{array}{lllll} \frac{1}{1}  + \frac{1}{1}  = \frac{20}{10} & \frac{1}{1} + \frac{1}{2}  = \frac{15}{10} & \frac{1}{1}  + \frac{1}{5}  = \frac{12}{10} & \frac{1}{1} + \frac{1}{10} = \frac{11}{10} & \frac{1}{2}  + \frac{1}{2}  = \frac{10}{10} \\\\
  \frac{1}{2}  + \frac{1}{5}  = \frac{7}{10}   & \frac{1}{2} + \frac{1}{10} = \frac{6}{10} & \frac{1}{3}  + \frac{1}{6}  = \frac{5}{10}   & \frac{1}{3} + \frac{1}{15} = \frac{4}{10} & \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10} \\\\
  \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10}  & \frac{1}{5}  + \frac{1}{5}  = \frac{4}{10} & \frac{1}{5}  + \frac{1}{10} = \frac{3}{10}  & \frac{1}{6}  + \frac{1}{30} = \frac{2}{10} & \frac{1}{10} + \frac{1}{10} = \frac{2}{10} \\\\
  \frac{1}{11} + \frac{1}{110} = \frac{1}{10} & \frac{1}{12} + \frac{1}{60}  = \frac{1}{10} & \frac{1}{14} + \frac{1}{35}  = \frac{1}{10} & \frac{1}{15} + \frac{1}{30}  = \frac{1}{10} & \frac{1}{20} + \frac{1}{20}  = \frac{1}{10} \end{array}$$

Скільки розв’язків матиме це рівняння за умови $1 ≤ n ≤ 9$?

# --hints--

`diophantineEquation()` має повернути `53490`.

```js
assert.strictEqual(diophantineEquation(), 53490);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation() {

  return true;
}

diophantineEquation();
```

# --solutions--

```js
// solution required
```
