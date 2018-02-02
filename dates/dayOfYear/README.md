# Day of Year

Based on the current date, what day is it in the year?

## Example

- `January 1st` is the first day of the year, so the answer should be `1`
- `January 31st` is the 31st day of the year, so the answer should be `31`
- `February 1st` is the 32nd day of the year, so the answer should be `32`

## Thoughts

This is tricky because there aren't always 365 days in a year.

There are 366 days on a leap year.

Seeing as there are 365 days in the year, we could enumerate
all of them based on the number days in each month.

If it's a leap year, we add 1 to the days following `February 29th`.

How do we figure out that it's a leap year?

- It's a leap year if the year is divisible by 4
- EXCEPT when it can be evenly divided by 100

> Every 4th year we add an extra day (the 29th of February),
> which makes 365.25 days a year. This is fairly close,
> but is wrong by about 1 day every 100 years.

- EXCEPT if it can be evenly divided by 400, then it is a leap year

This weirdness is due to the fact that time is a made-up construct
based on the rotation of the Earth around the Sun... so it's possible
that a cataclysmic reaction could change the speed of the Earth's
orbit or that galactic expansion could change our very perception of
time forever.
