# Object Methods

You can use Object methods to produce arrays so you can iterate over objects.

## Iterating over Objects

### Object.keys

It returns an array of the object's property names, in the same order as we with a normal loop.

```javascript
const airports = {
  'YVR': 'Vancouver International Airport',
  'JFK': 'John F. Kennedy International Airport',
  'LAX': 'Los Angeles International Airport'
};

const airportCode = Object.keys(airports);

console.log(airportCode); // [ 'YVR', 'JFK', 'LAX' ]
```


### Object.values

It returns an array of the object's property values, in the same order as we do with the `for...in` loop.

```javascript
const airports = {
  'YVR': 'Vancouver International Airport',
  'JFK': 'John F. Kennedy International Airport',
  'LAX': 'Los Angeles International Airport'
};

const airportName = Object.values(airports);

console.log(airportArray);
/*
  [ 'Vancouver International Airport',
  'John F. Kennedy International Airport',
  'Los Angeles International Airport' ]
*/
```


### Object.entries

It returns a nested array of the object's key-value pairs, in the same order as we do with the `for...in` loop.

```javascript
const airports = {
  'YVR': 'Vancouver International Aiport',
  'JFK': 'John F. Kennedy International Airport',
  'LAX': 'Los Angeles International Airport'
};

const airportArray = Object.entries(airports);

console.log(airportArray);
/*
  [ 
    [ 'YVR', 'Vancouver International Airport' ],
    [ 'JFK', 'John F. Kennedy International Airport' ],
    [ 'LAX', 'Los Angeles International Airport' ] 
  ]
*/

airportArray.forEach(([code, name]) => {
  console.log(code);
});
```

## `for...in` vs `for...of`

`for...in`: It iterates over the enumerable properties of an object, in an arbitrary order.

`for...of` (ES6): It iterates over iterable objects (ie. String, Array, Array-like objects)


My suggestion is to NOT use any of the for loops. Instead you should use `Object.keys`, `Object.values`, or `Object.entries`. That way you're dealing with arrays and you utilize all the awesome array methods.


## `for...of` vs `forEach`

`for...of`: 

- Works with any iterable
- doesn’t give access to index
- you can `break`

`forEach`:

- only for arrays
- gives you access to index
- can’t break
