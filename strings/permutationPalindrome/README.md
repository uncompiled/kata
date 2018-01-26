# Permutation Palindrome

Write an efficient function that checks whether any permutation
of an input string is a palindrome.

_You can assume the input string only contains lowercase letters._

## Examples

- "civic" should return `true`
- "ivicc" should return `true`
- "civil" should return `false`
- "livci" should return `false`

## Thoughts

The brute force method is check every permutation of the input
string and if one of them is a palindrome, return `true`.

That's a terrible algorithm because generating all of the permutations
would run in `O(n!)` time because there are `n!` permutations of any
given set (of characters).  You'll also have to process each permutation,
to check if it's a palindrome.  We need to iterate over each character,
resulting in `O(n! * n)` runtime.

I think the "trick" is realizing that we don't have to generate
any permutations.  We only have to be able to figure out if a single
permutation is a palindrome... so what makes something a palindrome?

_A palindrome is the same forwards and backwards._

The typical palindrome test uses two pointers (one at the front and
one at the end) and walks the string toward the middle to check if
those characters are the same.  The problem with this test is that
we need the permutations.

But really, we're just testing whether every distinct character appears
an even number of times (unless the string's length is odd, then the
character in the middle will only appear once).

Now we can walk the string once -- counting the frequency of each character.
If every character appears an even number of times (except for the case
of the odd length string), then the answer is `true` -- yes, there exists
a permutation of this string that is also a palindrome.

This is pretty clean, but while writing this implementation, I realized
that it's messy because when the string's length is odd, we have to
check that only one character appears an odd number of times.

For example, `abcccba`.

Instead of storing the frequency, we can restate the constraint as only
one character can appear an odd number of times.  We can clean it up
a bit by using a Set.  If the character isn't in the set, we add it.
If it's already in the set, we delete it.  Once we iterate through the
string, the only items left in the set will be the characters that appeared
an odd number of times.

If the Set only contains one item, then there exists a permutation of the
string that is also a palindrome.
