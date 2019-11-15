**provoke-array** generates an array for you

### Installation

`npm install provoke-array`

or

`yarn add provoke-array`

```js
provokeArray((length: Number), (customReturn: Function));
```

### Examples

#### Basic

By default it returns an array with 3 positions containing empty objects (this is helpful in tests to use mocked data).

```js
import provokeArray from "provoke-array";

provokeArray();
// [{}, {}, {}]
```

#### Custom return

You can customize what the function returns by passing a function as 2nd argument.

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

#### Use with [faker](https://github.com/marak/Faker.js/)

You can use it with [faker](https://github.com/marak/Faker.js/) to generate more custom data.

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
