# Parameter Improvements

## Default Parameters

Now we can set default values for our default parameters. If no value or `undefined` is passed, then our default value kicks in.

```javascript
function sayHello (name = 'Samantha') {
  
  // Old way:
  // name = name !== undefined ? name : 'Samantha';
  
  console.log(`Hello ${name}!`);
}

sayHello(); // Hello Samantha
sayHello(undefined); // Hello Samantha
sayHello('Sam'); // Hello Sam
```

## Rest Parameter

Rest gather arguments into an array.

```javascript
function greet(greet, ...names) {
  return names
}
greet('hi', 'samantha', 'bob', 'stacy'); // ['samantha', 'bob', 'stacy']
```

### Spread vs Rest

Syntactically, they look very similar. But they differ, depending the context it's being used. When you see it being used in the parameter, then you know it's gathering arguments (rest). Otherwise, it's considered to be spread.

Also, here's how I think of rest vs spread:

`Spread` adds the brackets
`Rest` removes the brackets

```javascript
// Spread --> 1,2,3
// Rest  --> [1,2,3]
```

### Named Parameter

So we learned about destructuring and how we can assign default values. Using that idea, we can create named parameters in our function. 

Without Named Parameter, the arguments must be in a specific order.

```javascript
function meal(protein, veggie){
 return veggie;
}
meal('🥩', '🥦'); // '🥦'
```

Using Named Parameter, the arguments can be in any order. Yay!

```javascript
function({protein, veggie}) {
  return veggie; 
}
meal({veggie: '🥦', protein: '🥩'}); // '🥦'
```
