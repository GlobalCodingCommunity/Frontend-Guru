/**
 * @param {number} steps
 * @return {number}
 */
export default function staircaseClimbingCombinations(steps) {
  const dp = Array.from({length: steps + 3}).fill(0)
  dp[0] = 1
  for (let i = 0; i < steps; i++) {
    dp[i + 1] += dp[i]
    dp[i + 2] += dp[i]
  }
  return dp[steps]
}
