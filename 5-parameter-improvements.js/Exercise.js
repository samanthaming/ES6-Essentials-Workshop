/** EXERCISE 1
 *
 * Refactor using Default Parameter
 *
 */

function getWeather(weather) { // 👈  Set a default value of 'sunny'
  return weather;
}

getWeather();
// Output: sunny


/** EXERCISE 2
 *
 * Refactor using the Rest Parameter
 *
 */

function fruitArray(fruits) { // 👈  Change this to a rest parameter
  return fruits; // ['apple', 'kiwi', 'pear'];
}

fruitArray('apple', 'kiwi', 'pear');
