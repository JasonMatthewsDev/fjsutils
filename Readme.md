# FJS-Utils
A collection of javascript utility functions written in a functional style.

### Table of contents

1. [installation](#installation)
2. [arrays](#arrays)
3. [functions](#functions)
4. [numbers](#numbers)
5. [objects](#objects)
6. [strings](#strings)

### Installation
```
npm i fjs-utils
```

or

```
yarn add fjs-utils
```

### Usage


#### installation
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

### Utils

#### arrays
  * chunk - Splits an array into chunks

```javascript
  import { chunk } from 'fjs-utils/arrays';

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(chunk(3, array)); // => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]
```

  * flatten - Flattens an array 1 level

```javascript
  import { flatten } from 'fjs-utils/arrays';

  const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
  console.log(flatten(array)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

  * getProp - Returns an array of values from a specified property in an array of objects

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

  * isArray - Returns boolean, true if input is an array

```javascript
  import { isArray } from 'fjs-utils/arrays';
  console.log(isArray([1, 2])); // => true
  console.log(isArray(12)); // => false
```

  * mean - Calculates the mean of an array of numbers

```javascript
  import { mean } from 'fjs-utils/arrays';
  console.log(mean([1, 2, 3])); // => 2
```

  * sample - Returns random values from an array

```javascript
  import { sample } from 'fjs-utils/arrays';
  const array [1, 2, 3, 4];
  console.log(sample(1, array)); // => [2]
  console.log(sample(2, array)); // => [1, 3]
```

  * sum - Sums an array of numbers

```javascript
  import { sum } from 'fjs-utils/arrays';
  console.log(sum[1, 2, 3]) // => 6
```

#### functions
  * curry - Accepts a function and returns a curried function

```javascript
  import { curry } from 'fjs-utils/functions';

  const add = (a, b) => a + b;
  const add10 = curry(add)(10);
  console.log(add10(5)); // => 15
```

  * curryRight - Accepts a function and returns a curried function that fills params in from right to left

```javascript
  import { curryRight } from 'fjs-utils/functions';

  const concat = `${left}${right}`;
  const appendBar = curryRight(concat)('bar');
  console.log(appendBar('foo')); // => 'foobar'
```

  * identity - returns the input unchanged

```javascript
  import { identity } from 'fjs-utils/functions';
  console.log(identity('foo')); // => 'foo'
```

#### numbers
  * random - Returns a random number between min, max

```javascript
  import { random } from 'fjs-utils/numbers';
  console.log(random(1, 5)); // => 2
  console.log(random(1, 5, true)); // => 2.2398217
```

#### objects
  * converSnakeKeysToCamel - Converts an object's snake cased keys to camel cased
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

  * removeEmptyStrings - Removes keys with empty strings from an object

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

  * removeValueFromObject - Removes keys with specified value from an object

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

  * transformObjectKeysAndValues - transforms an object's keys and values

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

#### strings
  * append - Appends strings with specified value

```javascript
  import { append } from 'fjs-utils/strings';

  console.log(append('bar', 'foo')); // => 'foobar'
  const appendBar = append('bar');
  console.log(appendBar('foo')); // => 'foobar'
```

  * concat - Concatenates two strings

```javascript
  import { concat } from 'fjs-utils/strings';
  console.log(concat('foo', 'bar')); // => 'foobar'
```

  * prepend - Prepends strings with specified value

```javascript
  import { prepend } from 'fjs-utils/strings';
  console.log(prepend('foo', 'bar')); // => 'foobar'
  const prependFoo = prepend('foo');
  console.log(prependFoo('bar')); // => 'foobar'
```

  * snakeToCamel - Converts a snake cased string to camel cased

```javascript
  import { snakeToCamel } from 'fjs-utils/strings';

  console.log(snakeToCamel('snake_cased_string')); // => 'snakeCasedString'
```