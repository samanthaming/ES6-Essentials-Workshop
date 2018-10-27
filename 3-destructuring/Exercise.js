/** EXERCISE 1
 *
 * Refactor using Destructuring
 *
 */

const shirt = {
  color: 'green',
  size: 'medium',
  material: 'cotton'
};

// Old Way
const color = shirt.color;
const size = shirt.size;
const material = shirt.material;

// Write it the ES6 Way...


/** EXERCISE 2
 *
 * Refactor using Destructuring
 *
 */

const colors = [
  'blue',
  'green',
  'yellow'
];

// Old Way
const blue = colors[0];
const green = colors[1];
const yellow = colors[2];

// Write it the ES6 Way...


/** EXERCISE 3
 *
 * Add default values
 *
 */

const apple = {};

const {
  laptop, // add default value of: 'macbook'
  phone, // add default value of: 'iphone'
  founder, // add default value of: 'steve jobs'
} = apple;

console.log(laptop, phone, year);
// 'macbook iphone steve jobs'


/** EXERCISE 4
 *
 * Destructure and assign new variable names
 *
 * Using destructuring, unpack the variable and assign a new name
 *  that will output: 'potato category vancouver'
 *
 */

const badNames = {
  p: 'potato',
  cat: 'category',
  van: 'vancouver'
};

// 👈  Write your code here...

console.log(potato, category, vancouver);
// 'potato category vancouver'
