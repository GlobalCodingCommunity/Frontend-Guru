/**
 * @param {number[]} prices
 * @return {number}
 */
export default function optimalStockTrading(prices) {
  let profit = 0
  let min = 10 ** 9
  let max = -1 * 10 ** 9
  for (const price of prices) {
    if (min > price) {
      min = price
      max = price
    }
    if (max < price) {
      max = price
    }
    profit = Math.max(profit, max - min)
  }
  return profit
}
