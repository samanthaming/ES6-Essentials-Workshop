# Enhanced Object Literals

## Shorthand Property Names

When the object's key that you're defining has the same name as the variable being passed in as properties, you can simply pass the key name.

```javascript
const name = 'kiwi';
const color = 'green';

const fruit = {
  // Old way
  // name: name;
  // color: color
  
  // ES6 way
  name,
  color,
};
console.log(fruit); // { name: 'kiwi', color: 'green' }
```

## Shorthand Method Names

When you specifying a function in object, now you don't have to write the keyword `function`.

```javascript
const fruit = {
  // eat: function() {
    
  eat() {
    return 'Mmmm 😋';
  }
};

console.log(fruit.eat()); // 'Mmmm 😋'
```

## Computed Property Names

Now you can set dynamic object keys and use an expression that will be computed as a property name on an object.

```javascript
const name = 'kiwi';
const color = 'green';

const fruit = {
  [`${name} fruit`]: name,
  color,
};

console.log(fruit); // { 'kiwi fruit': 'kiwi', color: 'green' }
```
