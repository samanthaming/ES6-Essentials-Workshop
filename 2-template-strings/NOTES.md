# 2. Template Literals

(They were called template strings)

### String Interpolation

With template literals, you can now do string interpolation.

```javascript
const name = 'samantha';

// Old way
'hello ' + name; // "hello samantha'

// ES6 way
`hello ${name}`; // "hello samantha'
```

## Expression Interpolation

With template literals, you can also perform operations.

Example:

```javascript
const name = 'samantha';

`hello ${name.toUpperCase()}`; // hello SAMANTHA
```

Example: 

```javascript
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"
```

## Multi-line

With template literals, you can easily do multi-line string outputs.

Example: Not a true multi-line string

```javascript

const multiLine = 'I ' +
'DO NOT ' +
'span ' +
'multiple ' +
'line. ';

console.log(multiLine); // I DO NOT span multiple line. 
```

Example: True multi-line string

```javascript
// Old way
'I \n' +
'span \n' +
'multiple \n' +
'line. \n';

// ES6 way
`I 
span
multiple 
line.`;

/* Same output for both ways
  I
  span
  multiple
  line.
*/
```

## Tagged Template

A more advance use of template literal is the ability to tag them. When I say `tag`, it means I can apply a function on our template strings. 

The first argument is the array of string values. And the rest of the arguments are the expression (the value inside the curly braces).

Example: Manipulating a template string with a tag function.

Here we're creating a scream tag function where we return the original string but now our expressions are all capitalized.

```javascript
function scream(strings, name1, name2) {
  let output = '';
  let names = [name1, name2];
  for(let i = 0; i < strings.length; i ++) {
    let name = names[i] || "";
    output += strings[i].toLowerCase() + name.toUpperCase();
  }
  return output;
  // you can also return something completely different
}

const name1 = 'samantha';
const name2 = 'susan';

scream`Hello ${name1} and ${name2}!`;

/* 
  1st argument (the strings):
    Hello 
    and 
    !
    
  Remaining argument (the expressions):
    name1
    name2
*/
```
