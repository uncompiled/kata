function distance(s1, s2) {
  if (s1.length === 0) return s2.length;
  if (s2.length === 0) return s1.length;

  const charDistance = s1[0] === s2[0] ? 0 : 1;

  // All the recursion means exponential time
  const insertion = distance(s1.substr(1), s2) + 1;
  const deletion = distance(s1, s2.substr(1)) + 1;
  const substitution = distance(s1.substr(1), s2.substr(1)) + charDistance;

  // But the recurrence is so beautiful... 😢
  return Math.min(insertion, deletion, substitution);
}

function dp(s1, s2) {
  let distance = [];
  // ... increment each row in the first column
  for (let i = 0; i <= s1.length; i++) {
    distance[i] = [i];
  }
  // ... increment each column in the first row
  for (let j = 0; j <= s2.length; j++) {
    distance[0][j] = j;
  }
  // Calculate the edit distance for substrings
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        distance[i][j] = distance[i - 1][j - 1];
      } else {
        distance[i][j] =
          Math.min(
            distance[i][j - 1], // insertion
            distance[i - 1][j], // deletion
            distance[i - 1][j - 1] // substitution
          ) + 1;
      }
    }
  }

  return distance[s1.length][s2.length];
}

module.exports = {
  recursive: distance,
  iterative: dp
};
