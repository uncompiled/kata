/**
 * Given a matrix of m * n elements (m rows, n columns),
 * return all elements of the matrix in spiral order.
 */

function spiralOrderMatrix(matrix) {
  let result = [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }

    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    for (let j = right - 1; j >= left; j--) {
      if (top < bottom) result.push(matrix[bottom][j]);
    }

    for (let i = bottom - 1; i > top; i--) {
      if (left < right) result.push(matrix[i][left]);
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  return result;
}

module.exports = spiralOrderMatrix;
