# Redundant Braces

Write a function to validate if the input string has redundant braces.

- The input string will always be a valid expression
- The only operators that will be used are `+`, `-`, `*`, and `/`

## Example

- Given `(a + (b + c))`, return `false` because there are no extra braces
- Given `((a + b))`, return `true` because there are extra braces

## Thoughts

You can use a stack to handle opening and closing of braces.

A valid expression contains a `left` expression, `infix operator`,
and `right` expression.

Redundant braces would only have one expression inside them.

We can "resolve" expressions by checking if we have `left operator right`
and pushing a placeholder like `expression` onto the stack.  This is
because we don't actually need to evaluate the expression.  We can just
push the placeholder onto the stack to make sure that we're recording
it's existence.
