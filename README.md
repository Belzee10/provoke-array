**provoke-array** generates an array for you

### Installation

`npm install provoke-array`

or

`yarn add provoke-array`

```js
provokeArray(length: Number, customReturn: Function);
```

### Examples

#### Basic

```js
import provokeArray from "provoke-array";

provokeArray();
// [{}, {}, {}]
```

By default it returns an array with 3 positions containing empty objects (this is helpful in tests to use mocked data).

#### Custom return

```js
import provokeArray from "provoke-array";

provokeArray(2, i => {
  return {
    id: i,
    name: `Name: ${i}`
  };
});
// [
//     {
//         id: 0,
//         name: 'Name: 0'
//     },
//     {
//         id: 1,
//         name: 'Name: 1'
//     }
// ]
```

You can customize what the function returns by passing a function as 2nd argument.

#### Use with [faker](https://github.com/marak/Faker.js/)

```js
import provokeArray from "provoke-array";
import faker from "faker";

provokeArray(2, i => {
  return {
    id: i,
    name: faker.name.firstName()
  };
});
// [
//     {
//         id: 0,
//         name: 'John'
//     },
//     {
//         id: 1,
//         name: 'Alice'
//     }
// ]
```

You can use it with [faker](https://github.com/marak/Faker.js/) to generate more custom data.
