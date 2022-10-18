---
id: 59e0a8df964e4540d5abe599
title: Execute Brain****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Write a function to implement a Brain\*\*\*\* interpreter. The function will take a string as a parameter and should return a string as the output. Weitere Details werden unten angegeben:

RCBF is a set of <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> compilers and interpreters written for Rosetta Code in a variety of languages.

Below are links to each of the versions of RCBF.

Eine Implementierung muss lediglich die folgenden Anweisungen ordnungsgemäß implementieren:

| Befehl                    | Beschreibung                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| <code>></code> | Bewege den Zeiger nach rechts                                                               |
| <code>&lt;</code> | Bewege den Zeiger nach links                                                                |
| <code>+</code> | Increment the memory cell under the pointer                                                 |
| <code>-</code> | Decrement the memory cell under the pointer                                                 |
| <code>.</code> | Output the character signified by the cell at the pointer                                   |
| <code>,</code> | Input a character and store it in the cell at the pointer                                   |
| <code>\[</code> | Jump past the matching <code>]</code> if the cell under the pointer is 0           |
| <code>]</code> | Jump back to the matching <code>\[</code> if the cell under the pointer is nonzero |

Any cell size is allowed, EOF (*E*nd-*O*-*F*ile) support is optional, as is whether you have bounded or unbounded memory.

# --hints--

`brain(bye)` sollte einen String zurückgeben

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++<-]>+++++.")` sollte "A" zurückgeben

```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```

`brain(bye)` sollte `Goodbye, World!\r\n` zurückgeben

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` sollte `Hello World!\n` zurückgeben

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` sollte `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89` zurückgeben

```js
assert.equal(brain(fib), '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89');
```

# --seed--

## --before-user-code--

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';
```

## --seed-contents--

```js
function brain(prog) {

}
```

# --solutions--

```js
function brain(prog){
  var output="";
    var code; // formatted code
  var ip = 0; // current instruction within code
  var nest = 0; // current bracket nesting (for Out button)
  var ahead = []; // locations of matching brackets

  var data = [0]; // data array (mod by +, -)
  var dp = 0; // index into data (mod by <, >)

  var inp = 0; // current input character (fetch with ,)
  var quit = 0;
    var commands = {
    '>':function() { if (++dp >= data.length) data[dp]=0 },
    '<':function() { if (--dp < 0) quit++ },
    '+':function() { ++data[dp] },
    '-':function() { --data[dp] },
    '[':function() { if (!data[dp]) ip = ahead[ip]; else ++nest },
    ']':function() { if ( data[dp]) ip = ahead[ip]; else --nest },
    ',':function() {
        var c = document.getElementById("input").value.charCodeAt(inp++);
        data[dp] = isNaN(c) ? 0 : c; // EOF: other options are -1 or no change
    },
    '.':function() {
            output+=String.fromCharCode(data[dp]);
            /*var s = document.getElementById("output").innerHTML)
             + String.fromCharCode(data[dp]);
            s = s.replace(/\n/g,"<br>").replace(/ /g,"&amp;nbsp;");
            document.getElementById("output").innerHTML = s;*/
        },
    };

    let ar=prog.split('');
    var st = [], back, error = -1;
    for (ip=0; ip<ar.length; ip++) {
        switch(ar[ip]) {
        case '[':
            st.push(ip);
            break;
        case ']':
            if (st.length == 0) error = ip;
            back = st.pop();
            ahead[ip] = back;
            ahead[back] = ip;
            break;
        }
    }

    for(ip=0;ip<ar.length;ip++){
    if(commands.hasOwnProperty(ar[ip]))
          commands[ar[ip]]();
    }

    return output;
}
```
