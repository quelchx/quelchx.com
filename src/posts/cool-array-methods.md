---
title: What is the Array.prototype.flat() method in JavaScript?
date: "April 12, 2022"
excerpt: What is the flat() method, what can it do and why would be need it?
cover_image: "https://coryrylan.com/assets/images/posts/types/javascript-800x800.png"
---

# What is the Flat Method?

I remember watching a video on YouTube with someone asking computer science students to flatten an array. Sounds simple right?

Watching them problem solve it inspired me to attempt to do this with JavaScript for fun.

I began setting up different approaches, failed somewhat miserably so I started to do some research and found the flat() method...

This method will take an existing array and create a new array will all its sub-array elements concatenated into it. This can be done recursively by specifying its depth.

Okay so what does all this mean? How could this be useful? Lets start by showing some simple examples.

```js
const arr = [0, 1, 2, [3, 4]];
console.log(arr.flat());
// output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// output: [0, 1, 2, [3 ,4]]

console.log(arr2.flat(Infinity));
// output: [0, 1, 2, 3, 4]
```

Pretty cool huh? Almost too easy -- but I know a lot is happening under the hood with this method and I wanted to figure out how to code the functionality of the `flat` method myself.

So lets look at some other ways we can accomplish almost the same thing.

Instead of using the `arr.flat()` method we can write something that is almost equivalent to it:

**Reducing and Concatinating**

```js
const arr = [1, 2, [3, 4]];
console.log(arr.flat());
// output: [1, 2, 3, 4]

console.log(arr.reduce((acc, val) => acc.concat(val), []));
// output: [1, 2, 3, 4]
```

So using the reduce method to concat each value accomplishes the same thing but with more complex nested arrays we need to recusively iterate in order to truely flatten an array like `const arr = [1, 2, [3, 4, [5, 6]]]`. We can do that like so:

**Reducing and Concatinating Recusively**

```js
const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr, depth - 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val),
        []
      )
    : arr.slice();
}

flatDeep(arr, Infinity);
// output: [1, 2, 3, 4, 5, 6]
```

This will recursively loop over each value inside of an array and check if the value is an array. If the value is an array it will begin to also concatinate that array. Here we used a ternary operation to accomplish this rather than a while loop.

Another way we could also do this since we mentioned a while loop -- is using a while loop. According to MDN documents using a method like what im about to showcase can be hard/inefficient as it needs to tag each value with it's own depth.

Here is an example to paint a small picture:

**Using a Stack**

```js
const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(input) {
  const stack = [...input];
  const res = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) stack.push(...next);
    else res.push(next);
  }

  return res.reverse();
}

console.log(flatten(arr));
```

This method above is accomplishes similar feats, but requires a litte more typing. Another way to do the same thing is with a generator function. We can do this as follows:

```js
function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
console.log(flattened);
// output: [1, 2, 3, 4, 5, 6]
```

This use case to me is somewhat odd to me but it is worth noting.

### Elaborating

So to elaborate -- the `arr.flat()` method can accomplish all these other ways of doing the same thing but without writing more code.

To me this is crazy, but it's worth noting to fully understand how the function operates under the hood, we should try to write something that does it similar.

This not only helps you become better with JavaScript, it might make you appreachiate some of the higher order functions JavaScript has to offer out of the box with Objects and Arrays.

### Final Thoughts

Im not a Leet Code guru, nor a master at JavaScript. In fact im pretty average -- maybe slightly above average with it.

I wanted to write this to appreachiate some of the higher order array functions JavaScript offers because it makes my life easier.
