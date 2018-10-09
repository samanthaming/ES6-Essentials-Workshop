# String Methods

Now we have 3 new methods that check whether a string exists within another string.

## startsWith

It checks whether a string starts with a certain element.

```javascript
const course = 'math 101';

// course.indexOf('math') === 0;

course.startsWith('math'); // true
```

## endsWith

It checks whether a string ends with a certain element.

```javascript
const course = 'math 101';

course.endsWith('101'); // true
```

## includes

It checks whether a string contains a certain element.

```javascript
const course = 'math 101';

course.includes('101'); // true
```

## Example

Here's a great use case in combination with the `filter` method

```javascript
const courses = [
  'math 101',
  'math 201',
  'econ 101',
  'econ 201'
];

// Find all the math courses?

// Using includes
courses.filter(course => course.includes('math'));

// Using startsWith
courses.filter(course => course.startsWith('math'));

// [ 'math 101', 'math 201' ]

// Find all the entry 101 courses?

// Using includes
courses.filter(course => course.includes('101'));

// Using endsWith
courses.filter(course => course.endsWith('101'));

// [ 'math 101', 'econ 101' ]
```
