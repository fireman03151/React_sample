---
id: 5a24c314108439a4d4036183
title: استخدام JavaScript المتقدمة في طريقة React Render
challengeType: 6
forumTopicId: 301415
dashedName: use-advanced-javascript-in-react-render-method
---

# --description--

في التحديات السابقة، تعلمت كيفية حقن كود JavaScript في كود JSX باستخدام الأقواس المنحنية، `{ }`، للمهام مثل الوصول إلى props، وتمرير prop، والوصول إلى state، وإدراج التعليقات في كودك، ومؤخراً تصميم مكوناتك (components). هذا كلها حالات استخدام شائعة لوضع JavaScript في JSX، لكنهم ليسوا الطريقة الوحيدة التي يمكنك بها استخدام تعلميات JavaScript البرمجية في مكونات React الخاصة بك.

يمكنك أيضًا كتابة JavaScript قاصدًا في طرقك (methods) تسمى `render`، قبل بيان `return`، و***دون*** إدراجه داخل أقواس منحنية (curly braces). هذا لأنه ليس ضمن تعلميات JSX البرمجية. عندما تريد استخدام متغير (variable) في كود JSX *داخل* تعبير `return` لاحقاً، ضع اسم المتغير (variable) داخل الأقواس المنحنية (curly braces).

# --instructions--

في التعليمات البرمجية المقدمة، طريقة `render` تحتوي على مصفوفة التي تحتوي على 20 عبارة لتمثيل الإجابات الموجودة في لُعْبَة Magic Eight Ball toy بالثمانينيات. أن حدث النقر فوق (click event) الزر (button) مرتبط بطريقة `ask` لذلك في كل مرة يتم النقر على الزر سيتم إنشاء رَقَم عشوائي وتخزينه كمؤشر `randomIndex` في state. في السطر 52، حذف string بقيمة `change me!` وإعادة تعيين `answer` حتى تصل التعليمات البرمجية الخاصة بك عشوائيا إلى ترتيب مختلف في مصفوفة `possibleAnswers` كل مرة يتم فيها تحديث المكون. أخيرا، أدخل ثابت `answer` داخل العلامات `p`.

# --hints--

يجب أن يكون مكون `MagicEightBall` موجوداً وأن يُنتج في الصفحة.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall')
    .length,
  1
);
```

عنصر `MagicEightBall` الفرعي الأول يجب أن يكون عنصر `input`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(0)
    .name(),
  'input'
);
```

عنصر `MagicEightBall` الفرعي الثالث يجب أن يكون عنصر `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(2)
    .name(),
  'button'
);
```

يجب تهيئة state تسمى `MagicEightBall` بخاصية `userInput` وخاصية `randomIndex` وكلاهما مجموعة إلى قيمة string فارغة.

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') ===
    '' &&
    Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === ''
);
```

عندما يتم تحميل `MagicEightBall` أول مرة إلى DOM، يجب أن يعود عنصر `p` فارغ.

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 &&
    Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === ''
);
```

عندما يتم إدخال النص في عنصر `input` ويتم النقر على الزر، يجب أن ينتج مكون `MagicEightBall` عنصر `p` الذي يحتوي على عنصر عشوائي من قائمة `possibleAnswers`.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MagicEightBall));
  const simulate = () => {
    comp.find('input').simulate('change', { target: { value: 'test?' } });
    comp.find('button').simulate('click');
  };
  const result = () => comp.find('p').text();
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const actualAnswers = [
    _1_val,
    _2_val,
    _3_val,
    _4_val,
    _5_val,
    _6_val,
    _7_val,
    _8_val,
    _9_val,
    _10_val
  ];
  const hasIndex = actualAnswers.filter(
    (answer, i) => possibleAnswers.indexOf(answer) !== -1
  );
  const notAllEqual = new Set(actualAnswers);
  assert(notAllEqual.size > 1 && hasIndex.length === 10);
})();
```

# --seed--

## --after-user-code--

```jsx
var possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
  'Most likely'
];
ReactDOM.render(<MagicEightBall />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!'; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}

          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
      'Most likely'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
```
