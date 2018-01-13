# Compute Mnemonics for a Phone Number

On a [telephone keypad](https://en.wikipedia.org/wiki/Telephone_keypad),
certain numbers correspond to one of 3 or 4 letters of the alphabet.

Usually:

| Number | Letters |
| ------ | --------|
| 2	     | ABC     |
| 3	     | DEF     |
| 4	     | GHI     |
| 5	     | JKL     |
| 6	     | MNO     |
| 7	     | PQRS    |
| 8	     | TUV     |
| 9	     | WXYZ    |

Since words are easier to remember than numbers, sometimes people pay
a premium for a phone number that can be remembered with an interesting
word.

Given a string of numbers, generate all possible character sequences
that correspond to the number.  For simplicity, let's assume that
character sequences don't have to be actual words.

## Example

`2629464` can be turned into `AMAZING`

I can already imagine seeing 1-800-AMA-ZING plastered on a billboard.

## Thoughts

Since each number can be represented by a set of letters,
and I want to compute ALL of the potential character sequences,
I'm going to take a recursive approach.

The first thing I'd do is create an enumerable data structure to
store a mapping of numbers to a set of letters.

As I process the input, I will mimic depth-first search and
add the set of matching letters to the search space until
I build up a string of characters and add it to the set of
mnemonics.

TBH, this has pretty terrible complexity.  Since a single number can
have up to 4 matching letters, the search space for each mnemonic is
exponential: `O(4^n)`.  `n` is the length of the input string and
generating each mnemonic ends up taking `O(n)`, so this algorithm
runs in roughly `O(4^n * n)` time.
