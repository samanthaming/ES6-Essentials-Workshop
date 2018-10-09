# Arrow Functions

## The Syntax

```javascript
function() {...}

// ES6
() => {...}
```

## Resources

- [Function Return Syntax Cheatsheet](./7.3-function-return-syntax-cheatsheet.md)
- [Arrow Function Gotchas](./7.4-arrow-functions-gotchas)

## Arrow Function Gotcha - no arguments

One of the gotcha I listed to note is that the arrow function has no `arguments` object.

Normal function has access to the `arguments` object.

```javascript
const greet = function() {
  console.log(arguments);
};

greet('hi', 'hey'); //  { '0': 'hi', '1': 'hey' }
```

Arrow Function has no `arguments` object.

```javascript
const greet = () => {
  console.log(arguments);
};

greet('hi', 'hey'); // arguments not defined
```
