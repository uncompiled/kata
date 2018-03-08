# Excel Column Number

Given a column title as appears in an Excel sheet,
return its corresponding column number.

## Example

- Given column `A`, it is the first column in the sheet, so return `1`
- Given column `B`, it is the second column in the sheet, so return `2`
- Given column `C`, it is the third column in the sheet, so return `3`
- Given column `AA`, it is the 27th in the sheet, so return `27`

## Thoughts

A through Z maps to the numbers 1 through 26.
AA through AZ maps to 27 through 52.

Excel spreadsheet numbers are a base-26 number system, so what
we need to do is convert base-26 to base-10 (decimal).
