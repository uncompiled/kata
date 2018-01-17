# [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

Reverse Polish notation is also known as postfix notation, which is a format
where operators follow their operands.

This exercise is to evaluate the value of an arithmetic expression in Reverse
Polish Notation.

Valid operators are `+`, `-`, `*`, `/`.

Each operand may be an integer or another expression.

## Example

The expression `3 4 +` evaluates to `7`.

## Thoughts

To evaluate this expression, you can use a stack to simulate
the order of operations.
