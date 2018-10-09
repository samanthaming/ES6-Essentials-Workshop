# 1. ES6 Variables

## Problem with `var`

The problem with `var` is that the variable gets leaked to the global scope.

```javascript
if (true) {
  var hello = 'hi';
}

console.log(hello); // "hi"

// 😱 Oh no, it's leaked
```

That's why we use `const` or `let`, that way the variable definition stays scoped to the block.

```javascript
if(true) {
  const hello = 'hi';
}

console.log(hello); // ReferenceError: hello is not defined 

// 🙂 Yay, no pollution
```

## `const` vs `let`

They are very similar. Both are block scoped, but you can't reassign the value with `const`.

Example: `const`

```javascript
const hello = 'hi';
hello = 'hey';

console.log(hello); // TypeError: Assignment to constant variable.
```

Example: `let`

```javascript
let hello = 'hi';
hello = 'hey';

console.log(hello); // "hey"
```

## Using `const` with Reference Types 👽

If you're familar with reference types, then move on. If not, you will find the following interesting.

Example: `const` with Arrays

```javascript
const people = [];

// You can push to the array
people[0] = 'samantha';
console.log(people); // ["samantha"]

// But this won't work
people = ['samantha']; // TypeError: Assignment to constant variable.
```

Example: `const` with Objects

```javascript
const shape = {};

// You add properties
shape.color = 'red';
console.log(shape); // { color: 'red' }

// But this won't work
shape = {color: 'red'} // TypeError: Assignment to constant variable.
```

**Why does it do that?? 😲**

This works because Arrays and Objects are **reference** types. They don't hold values, they are a pointer to the values in memory. As long as you're not changing the pointer, you're good. That's why you can push to an array or add properties to an object. Because you're not actually changing the pointer, you're only changing the value which the pointer is pointing to. The `const` only locks in the pointer not the value of the pointer. 

**UGH, I still don't get! 😩**

Think of reference types as your house address. The house is your `const`. The `const` locks in your house address. You can re-decorate the house however you want -- add furnitures, paint your room green, fill it with new appliances. The `const` police doesn't care what you do with your house. The only thing they care about is your house address because they want to know where you live 🤭! So if you try to change that, that's when they step in and give you an error 🛑

## Temporary Dead Zone

```javascript

```

## Which to use?

Here's the general rule I like to follow.

1. Always use `const`.
2. If it will be changed, use `let`.
3. And on the rare occasion you need to create a global variable, use `var`.
