# [Brace matching](https://en.wikipedia.org/wiki/Brace_matching)

Modern text editors like [VS Code](https://code.visualstudio.com/) have a
feature that highlights matching sets of braces (square brackets,
curly brackets, or parentheses).

This exercise is to implement an method that accepts a string and the
cursor position as input.  If the current cursor position is a bracket,
we should return the position of the matching bracket.

If the brackets don't match up, we should return an error.

If the current cursor position is not a bracket, then we should not
return an error.  The reason for this behavior is that if we wanted to use
this as part of a syntax highlighter, then we don't want to throw an error
when the user edits something that isn't a bracket.

## Example

```
Sometimes when I talk (or write), I use an excessive (meaning too many)
number of parentheses (these things: "(" and ")"), so it can be confusing
when they don't match.
```

In the previous string, the first open parenthesis is in index 22 and the
matching closing parenthesis is in index 31.

## Thoughts

As soon as I think of matching brackets, I think of using a stack because
it's great for handling scope.  As soon as we see an opening bracket, we can
push the complement (the closing version of the bracket) onto the stack.

As we iterate through the rest of the input, we look for the closing brackets
and pop them off the stack as we find them.

The matching bracket will be at the same depth in the stack as the opening
bracket, so if we use the stack to keep track of matching sets, we'll
know that we find a match when the stack is empty.

