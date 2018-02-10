# Largest Rectangle in Histogram

Given `n` non-negative integers representing the histogram’s bar height
where the width of each bar is `1`, find the area of largest rectangle
in the histogram.

## Example

The array `[2, 1, 5, 6, 2, 3]` represents the following histogram:

```
               ┌────┐
          ┌────┤    │
          │    │    │
          │    │    │
          │    │    │    ┌────┐
┌────┐    │    │    ├────┤    │
│    ├────┤    │    │    │    │
└────┴────┴────┴────┴────┴────┘
  2    1    5    6    2     3
```

The largest rectangle has an area of `10`:

```
               ┌────┐
          ┌────┤----│
          │****│****│
          │****│****│
          │****│****│    ┌────┐
┌────┐    │****│****├────┤    │
│    ├────┤****│****│    │    │
└────┴────┴────┴────┴────┴────┘
  2    1    5    6    2     3
```

## Thoughts

### Brute Force

We know that the height of rectangle with the largest area is the height of one
of the bars in the histogram, so we could iterate over each of the heights in
the array (`h`) and find the maximum area for height `h` by searching outwards
to find the largest bounding rectangle.

```javascript
function largestRectangleInHistogram (histograms) {
  let maxArea = 0

  for (let i = 0; i < histograms.length; i++) {
    let height = histograms[i]
    let left = i
    let right = i

    while (left >= 0 && histograms[left] >= height) {
      left = left - 1
    }

    while (right < histograms.length && histograms[right] >= height) {
      right = right + 1
    }

    maxArea = Math.max(maxArea, (right - left - 1) * height)
  }

  return maxArea
}
```

We iterate over the array of bars in the histogram, which is `O(n)`,
but for every bar, we scan outward -- potentially to the entire array.

In the worst case, this would run in `O(n^2)`

### Stack-based Optimization

Using a stack, we can maintain a history of the bars from left to right.
As we iterate through the bar heights, we push each bar onto the stack.

When we see a smaller bar, we pop the previous height off the stack
and calculate the area using the current index as the right boundary
and the element on the stack as the left boundary.

