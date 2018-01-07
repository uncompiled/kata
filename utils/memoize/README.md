# [Memoization](https://en.wikipedia.org/wiki/Memoization)

Memoization is a technique that is used to save the result of some computation.
This is usually done inside a data structure such as an Array or a Map.

In computing, space is usually cheaper than time, so memoization is a trade-off
to get faster executation at the cost of using more memory.

## Example

The most common example use case for memoization is the textbook definition
of the Fibonacci sequence:

```
f(n) = f(n-1) + f(n-2)
```

This generates the following sequence of numbers:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

Using the definition of the Fibonacci sequence, let's translate the recurrence
to JavaScript:

```javascript
function fibonacci (n) {
  if ((n === 0) || (n === 1)) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
```

The problem is that to calculate any number, we have to calculate the two
previous Fibonacci numbers.  Since we are doing a literal translation of
the recurrence relation, the calculation of the two previous Fibonacci
numbers also requires re-calculating of _their_ previous two Fibonacci
numbers... all the way back to the beginning.

Instead of recomputing the previous values, we can store them as they
are calculated, which prunes most of the recursion from the function
call stack.

```javascript
function fibonacci (n) {
  let fib = {}

  function f (n) {
    if ((n === 0) || (n === 1)) return 1
    return (fib[n]) ? fib[n] : (fib[n] = f(n-1) + f(n-2))
  }

  return f(n)
}
```

## Thoughts

Personally, I think that it's harder to read code that has been
memoized in-line.  In Python (or other languages), you can create
a decorator to call a higher order function that wraps a called
function with memoization.

You can't use decorators in JavaScript
([yet](https://tc39.github.io/proposal-decorators/)) without using a transpiler
or compiler.  Decorators are supported in
[TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html),
but we can still implement the functionality in vanilla JavaScript without
using a decorator.
