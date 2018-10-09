# Array Methods

## map

It applies a function on every element of the array and returns that as a new array.

```javascript
const names = ['sam', 'bob', 'sue'];

// Using function
const namesUppercase = names.map(function(name) {
  return name.toUpperCase();
});

// Using arrow function
const namesUppercase = names.map((name) => {
  return name.toUpperCase();
});

// One liner arrow function
const namesUppercase = names.map(name => name.toUpperCase());

console.log(namesUppercase); // [ 'SAM', 'BOB', 'SUE' ]
```

## filter

Creates a new array that filters out all the items that don’t pass our specified test.

```javascript

const names = ['sam', 'bobby', 'sue'];

const shortNamesOnly = names.filter(name => name.length <= 3);

console.log(shortNamesOnly); // ['sam', 'sue']
```


## reduce

It applies a function to each element of the array and reduce it to a single value. 


### `reduce` an array numbers

```javascript

const nums = [1,2,3,4];
/*
  0 + 1 = 1
  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10
*/
const total = nums.reduce((total, current) => {
  return total + current;
}, 0);

console.log(total); // 10
```


### `reduce` an array of strings

```javascript

const letters = ['a', 'b', 'c'];
// we want a single string, 'abc';

/*
  '' + 'a' = 'a'
  'a' + 'b' = 'ab'
  'ab' + 'c' = 'abc'
*/

const str = letters.reduce((str, letter) => {
  return str + letter;
}, '');

// const str = letters.reduce((str, letter) => str + letter, '');

console.log(str); // 'abc'
```


### `reduce` an array of objects

```javascript

const laptops = [
  {type: 'mac'},
  {type: 'pc'},
  {type: 'mac'},
];

// we want a count of the number of macs and pcs
// { mac: 2, pc: 1 }
/*
  0: accum = {mac: 0, pc: 0}
  1: accum['mac'] = accum['mac'] + 1 --> accum['mac] += 1
  2: accum['pc'] += 1
  3: accum['mac'] += 1
  0: accum = {mac: 0, pc: 0}
  
  1: accum[current.type] += 1
  2: accum[current.type] += 1
  3: accum[current.type] += 1
*/

const laptopCount = laptops.reduce((laptopCount, laptop) => {
  laptopCount[laptop.type] += 1;
  return laptopCount;
}, {mac: 0, pc: 0});

console.log(laptopCount); // { mac: 2, pc: 1 }
```

## forEach

Typically you’d just use map. It doesn’t do anything, it simple loops over the array. Similar to your `for` loop

```javascript
const nums = [1,2,3,4,5];

// for-loop
for(let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// forEach
nums.forEach((num) => {
  console.log(num);
});
```


## find/findIndex

It finds the FIRST element in the array that matches your provided test.

```javascript
const members = [
  {name: 'sam', id: 101},
  {name: 'bob', id: 201},
  {name: 'sue', id: 301},
];

const id = 301;

const foundMember = members.find(member => member.id === id);
const foundMemberIndex = members.findIndex(member => member.id === id);

console.log(foundMember); // { name: 'sue', id: 301 }
console.log(foundMemberIndex); // 2

// remember JS is 0 index
```


## some/every

It used to check if the elements in array meets a specified criteria or not. Unlike the other methods, this returns either true or false.

```javascript
const stockLevels = [100, 0, 5, 33];

// Is the product available at SOME stores?
const isAvailable = stockLevels.some(stock => stock > 0);
console.log(isAvailable); // true

// Is the product available at EVERY stores?
const isFullyStock = stockLevels.every(stock => stock > 0);
console.log(isFullyStock); // false
```
