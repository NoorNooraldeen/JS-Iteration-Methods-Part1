2; //You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.

******************************************************************/

const greaterThanOrEqualTo25 = numbers.filter((num) => num >= 25);
console.log(greaterThanOrEqualTo25);

// 2) Create a new array containing numbers that are divisible by 5.
const divisible5 = numbers.filter((num) => num % 5 === 0);
console.log(divisible5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squaredNums = numbers.map((num) => num * num);
console.log(squaredNums);

const numMultBy2 = numbers.map((num) => num * 2);
console.log(numMultBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const numsGreaterOrEqualTo20 = numbers
  .filter((num) => (num) => 20)
  .map((num) => num * 2);
console.log(numsGreaterOrEqualTo20);

const numsDivisbleBy5MultBy3 = numbers
  .filter((num) => num % 5 === 0)
  .map((num) => num * 3);
console.log(numsDivisbleBy5MultBy3);

/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 *
 * This function iterates over the input array
 * and prints each element to the console.
 ************************************/
function logger(array) {
  array.forEach((element) => {
    // Logs each element in the array
    console.log(element);
  });
}

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 *
 * This function takes an array of temperatures in Fahrenheit
 * and converts them into Celsius using the formula.
 ************************************/
function toCelsius(temperatures) {
  // Using map to transform each temperature in Fahrenheit to Celsius
  return temperatures.map((temp) => (temp - 32) * (5 / 9));
}

/**************************************
 * hottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshold temperature
 * - Returns an array of temperatures
 *   that exceed the threshold
 *
 * This function filters out the temperatures that are
 * greater than the specified threshold.
 ***************************************/
function hottestDays(temperatures, threshold) {
  // Using filter to return only temperatures above the threshold
  return temperatures.filter((temp) => temp > threshold);
}

/******************************************
 * logHottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEIT
 * - Accepts a threshold temperature
 *   IN DEGREES FAHRENHEIT
 * - Logs temperatures that exceed the
 *   threshold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *
 * This function filters temperatures above the threshold,
 * converts them to Celsius, and logs them.
 *******************************************/
function logHottestDays(temperatures, threshold) {
  // Step 1: Filter temperatures that are above the threshold using hottestDays
  const hotTemps = hottestDays(temperatures, threshold);

  // Step 2: Convert the filtered temperatures from Fahrenheit to Celsius
  const hotTempsInCelsius = toCelsius(hotTemps);

  // Step 3: Log each temperature in Celsius using the logger function
  logger(hotTempsInCelsius);
}
