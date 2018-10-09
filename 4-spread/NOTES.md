# Spread

## Combining Arrays

```javascript
const nums1 = [1,2,3];
const nums2 = [4,5,6];

// Old way
const combined = nums1.concat(nums2);

// ES6 way
const combined = [
  ...nums1,
  ...nums2
];

console.log(combined);
// [1,2,3,4,5,6]
```

## Combining Objects

```javascript

const person = {
  name: "samantha"
};

const socialMedia = {
  twitter: "samantha_ming",
  instagram: "samanthaming"
};

const combined = {
  ...person,
  ...socialMedia
};

console.log(combined);
// { name: 'samantha', twitter: 'samantha_ming', instagram: 'samanthaming' }
```

## Copying

Using spread, you can create true copies of an array or object that have different reference points.
That means, it has different addresses in the memory space. So when you try to change something, it will NOT affect all the array or object pointing at that reference point. This is especially important when you're dealing with Redux or any state management system.

> One thing that is really important when working with Redux is that you should never mutate (change directly) your state. Instead you should always return a copy of the state that you change.

_[https://blog.cloudboost.io/react-redux-immutable-update-cheat-sheet-296bfdd1f19](https://blog.cloudboost.io/react-redux-immutable-update-cheat-sheet-296bfdd1f19)_

### Copying Arrays

```javascript
const nums = [1,2,3];
const fakeCopy = nums;

// Darnit, not a real copy
//  It's pointing at the same reference point
console.log(nums === fakeCopy); // true

// Old way
const numsCopy = nums.slice();

// ES6 way
const numsCopy = [...nums];

// Awesome, we create a true copy
//  They are not pointing at the same reference point 
console.log(numsCopy === numsCopy); // false
```

**Remember Arrays are Reference Values**

The issue with reference values, is that changes affect all arrays pointing at that reference point.

```javascript
const nums = [1,2,3];
const fakeCopy = nums;

fakeCopy.push(100);

console.log(nums); // [1, 2, 3, 100] 😱
console.log(fakeCopy); // [1, 2, 3, 100]
```

## Copying Objects

Using spread, you can create true copies of an object that have different reference points.

```javascript
const person = {
  name: 'samantha'
};

const personCopy = {
  ...person
};

console.log(person); // { name: 'samantha' }
console.log(personCopy); // { name: 'samantha' }

// Awesome, we create a true copy
//  They are not pointing at the same reference point 
console.log(person === personCopy); // false
```

## Spreading Arguments

Before ES6, when we want to use the elements of an array as arguments to a function, we resorted to using `apply`. But now we can achieve the same result with `spread`.

```javascript

const nums = [1,3,2];

// Old way using apply:
// const max = Math.max(1,2,3);
// const max = Math.max.apply(null, nums);

const max = Math.max(...nums);

console.log(max); // 3
```
