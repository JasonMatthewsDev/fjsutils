# FJS-Utils
[![Build Status](https://travis-ci.com/JasonMatthewsDev/fjsutils.svg?branch=master)](https://travis-ci.com/JasonMatthewsDev/fjsutils)
[![Coverage Status](https://coveralls.io/repos/github/JasonMatthewsDev/fjsutils/badge.svg?branch=master)](https://coveralls.io/github/JasonMatthewsDev/fjsutils?branch=master)
[![npm version](http://img.shields.io/npm/v/fjs-utils.svg?style=flat)](https://npmjs.org/package/fjs-utils "View this project on npm")
[![gzip-size](https://badgen.net/bundlephobia/minzip/fjs-utils)](https://bundlephobia.com/result?p=fjs-utils)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-blue.svg)](https://conventionalcommits.org)

A small foot print collection of javascript utility functions written in a functional style without any external dependancies.

## Table of contents

1. [installation](#installation)
2. [arrays](#arrays)
3. [functions](#functions)
4. [numbers](#numbers)
5. [objects](#objects)
6. [strings](#strings)
7. [utils](#utils)
8. [faq](#faq)

## Installation
```
  npm i fjs-utils
```

or

```
  yarn add fjs-utils
```

## Usage


### installation
To use the library just import it

```javascript
import * as fjs from 'fjs-utils';
```

You can import just the pieces you want

```javascript
import { functions } from 'fjs-utils';
```

or

```javascript
import { curry } from 'fjs-utils/functions';
```

## Utils

### arrays
<details>
<summary>more</summary>

  * **all** - Tests each value with provided functions and returns true if all results are truthy. It's Array.prototype.every renamed

```javascript
  import { all } from 'fjs-utils/arrays';

  const array = [true, true, true];
  console.log(all(Boolean, array)); // => true
```

  * **any** - Tests each value with provided functions and returns true if any results are truthy. It's Array.prototype.some renamed

```javascript
  import { any } from 'fjs-utils/arrays';

  const array = [false, false, true];
  console.log(any(Boolean, array)); // => true
```

  * **bifurcate** - Seperates an array by supplied function.

```javascript
  import { bifurcate } from 'fjs-utils/arrays';

  const array = [true, 0, 'str', false, {}, ''];
  console.log(bifurcate(Boolean, array)) // => [[true, 'str', {}], [0, false, '']]
```

  * **chunk** - Splits an array into chunks

```javascript
  import { chunk } from 'fjs-utils/arrays';

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(chunk(3, array)); // => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]
```

  * **countOccurences** - counts the occurences of a value in an array

```javascript
  import { countOccurrences } from 'fjs-utils/arrays';

  console.log(countOccurrences(1, [1, 2, 3, 2, 1, 1, 2, 3, 2, 1])); //=> 4
```

  * **flatten** - Flattens an array 1 level

```javascript
  import { flatten } from 'fjs-utils/arrays';

  const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
  console.log(flatten(array)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

  * **getProp** - Returns an array of values from a specified property in an array of objects

```javascript
  import { getProp } from 'fjs-utils/arrays';

  const array = [{
    foo: 'foo',
    bar: 'bar',
  },
  {
    foo: 'foo2',
    bar: 'bar2',
  }];
  console.log(getProp('foo', array)); // => ['foo', 'foo2']
```

  * **isArray** - Returns boolean, true if input is an array

```javascript
  import { isArray } from 'fjs-utils/arrays';
  console.log(isArray([1, 2])); // => true
  console.log(isArray(12)); // => false
```

  * **mean** - Calculates the mean of an array of numbers

```javascript
  import { mean } from 'fjs-utils/arrays';
  console.log(mean([1, 2, 3])); // => 2
```

  * **median** - Calculates the median of an array of numbers

```javascript
  import { median } from 'fjs-utils/arrays';
  console.log(median([1, 2, 3])); // => 2
```

  * **sample** - Returns random values from an array

```javascript
  import { sample } from 'fjs-utils/arrays';
  const array = [1, 2, 3, 4];
  console.log(sample(1, array)); // => [2]
  console.log(sample(2, array)); // => [1, 3]
```

  * **shuffle** - Returns a new array with the order randonmized

```javascript
  import { shuffle } from 'fjs-utils/arrays';
  const array = [1, 2, 3, 4, 5];
  console.log(shuffle(array)); // => [3, 1, 2, 5, 4];
```

  * **sum** - Sums an array of numbers

```javascript
  import { sum } from 'fjs-utils/arrays';
  console.log(sum[1, 2, 3]) // => 6
```

</details>

### functions
<details>
<summary>more</summary>

  * **curry** - Accepts a function and returns a curried function

```javascript
  import { curry } from 'fjs-utils/functions';

  const add = (a, b) => a + b;
  const add10 = curry(add)(10);
  console.log(add10(5)); // => 15
```

  * **curryRight** - Accepts a function and returns a curried function that fills params in from right to left

```javascript
  import { curryRight } from 'fjs-utils/functions';

  const concat = `${left}${right}`;
  const appendBar = curryRight(concat)('bar');
  console.log(appendBar('foo')); // => 'foobar'
```

  * **identity** - returns the input unchanged

```javascript
  import { identity } from 'fjs-utils/functions';
  console.log(identity('foo')); // => 'foo'
```

  * **memoize** - returns a function that will memoize the arguments

```javascript
  import { memoize } from 'fjs-utils/functions';

  const fn = (one, two) => `${one}${two}`;
  const memoizedFn = memoize(fn);

  console.log(memoizedFn('foo', 'bar')); // => 'foobar'
```

  * **multi** - returns a function that will return an array of results from multiple functions

```javascript
  import { multi } from 'fjs-utils/functions';

  const maxMin = multi(Math.max, Math.min);
  console.log(maxMin(...[...Array(501).keys()])); // => [500, 0]
```

</details>

### numbers
<details>
<summary>more</summary>

  * **random** - Returns a random number between min, max

```javascript
  import { random } from 'fjs-utils/numbers';
  console.log(random(1, 5)); // => 2
  console.log(random(1, 5, true)); // => 2.2398217
```

</details>

### objects
<details>
<summary>more</summary>

  * **converSnakeKeysToCamel** - Converts an object's snake cased keys to camel cased
```javascript
  import { convertSnakeKeysToCamel } from 'fjs-utils/objects';

  const obj = {
    snake_case: 'snek',
    foo: [{ bar_baz: 'something' }, { lorem_ipsum: 'latin' }],
    obj: { snake_key_again: 'right_here' },
  };
  console.log(convertSnakeKeysToCamel(obj));
  /*
  {
    snakeCase: 'snek',
    foo: [{ barBaz: 'something' }, { loremIpsum: 'latin' }],
    obj: { snakeKeyAgain: 'right_here' },
  }
  */
```

  * **isObject** - Returns true if input is an object

```javascript
  import { isObject } from 'fjs-utils/objects';

  const obj = {};
  const array = [];
  const fn = () => {};
  const str = '';
  console.log(isObject(obj), isObject(array), isObject(fn), isObject(str)); // => true false false false
```

  * **omit** - Omits keys from an object

```javascript
  import { omit } from 'fjs-utils/objects';

  const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };

  console.log(omit['one', 'two', 'three', 'four'], obj); // => { five: 5 }
```

  * **removeEmptyStrings** - Removes keys with empty strings from an object

```javascript
  import { removeEmptyStrings } from 'fjs-utils/objects';
  
  const obj = {
    one: 'one',
    two: '',
    three: 'three',
    four: '',
    five: 'five',
  };

  console.log(removeEmptyStrings(obj));
  /*
  {
    one: 'one',
    three: 'three',
    five: 'five',
  }
  */
```

  * **removeFromObject** - Removes properties from an object based on a comparator

```javascript
  import { removeFromObject } from 'fjs-utils/objects';

  const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };

  const removeGreaterThan3 = ({ val }) => val > 3;
  const removeTwo = ({ key }) => key === 'two';
  const remove = prop => removeGreaterThan3(prop) || removeTwo(prop);

  console.log(removeGreaterThan3, obj); // => { one: 1, three: 3 }
```

  * **removeValueFromObject** - Removes keys with specified value from an object

```javascript
  import { removeValueFromObject } from 'fjs-utils/objects';

  const obj = {
    one: 'foo',
    two: 'bar',
    three: 'foo',
    four: 'bar',
    five: 'foo',
  };

  console.log( removeValueFromObject('bar', obj));
  /*
  {
    one: 'foo',
    three: 'foo',
    five: 'foo',
  }
  */
```

  * **transformObjectKeysAndValues** - transforms an object's keys and values

```javascript
  import { transformObjectKeysAndValues } from 'fjs-utils/objects';

    const obj = {
      left1: 'left1',
      left2: 'left2',
    };
    const keyTrans = key => `${key}right`;
    const valTrans = val => `${val}right`;

    console.log(transformObjectKeysAndValues(obj, keyTrans, valTrans));
    /*
    {
      left1right: 'left1right',
      left2right: 'left2right',
    }
    */
```

</details>

### strings
<details>
<summary>more</summary>

  * **append** - Appends strings with specified value

```javascript
  import { append } from 'fjs-utils/strings';

  console.log(append('bar', 'foo')); // => 'foobar'
  const appendBar = append('bar');
  console.log(appendBar('foo')); // => 'foobar'
```

  * **concat** - Concatenates two strings

```javascript
  import { concat } from 'fjs-utils/strings';
  console.log(concat('foo', 'bar')); // => 'foobar'
```

  * **prepend** - Prepends strings with specified value

```javascript
  import { prepend } from 'fjs-utils/strings';
  console.log(prepend('foo', 'bar')); // => 'foobar'
  const prependFoo = prepend('foo');
  console.log(prependFoo('bar')); // => 'foobar'
```

  * **snakeToCamel** - Converts a snake cased string to camel cased

```javascript
  import { snakeToCamel } from 'fjs-utils/strings';

  console.log(snakeToCamel('snake_cased_string')); // => 'snakeCasedString'
```

</details>

### Utils
<details>
<summary>more</summary>

  * **debounce** - debounces a function. Third paramater can be used to allow the function to be invoked immediately

```javascript
    import { debounce } from 'fjs-utils/utils';
    const fn = () => console.log('foo');
    const debouncedFn = debounce(fn, 100);
    debouncedFn();
    debouncedFn();
    await new Promise(resolve => setTimeout(resolve, 200));
    /*
      'foo'
    */
```

  * **wait** - returns a promise that resolves after n milliseconds
  
```javascript
  import { wait } from 'fjs-utils/utils';
  const fn = async () => {
    console.log(new Date()); // => 0
    await wait(100);
    console.log(new Date()); // => 100
  };

  fn();
```

</details>

## FAQ

<details>
<summary>expand</summary>

  * **How is this different than lodash or ramda?**
    * For one it's not the same set of functions
    * Lodash specifically puts the array or object first which limits the composability
    * This libraray has a different goal than ramda. Ramda's goal is to make functional programming easier in JS. While there are functional concepts here, that's only so it can remain external dependency free.
</details>