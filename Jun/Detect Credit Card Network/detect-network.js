/**
 * Detect the credit card network given a card number string.
 *
 * @param {string} cardNumber - The credit card number as a string of digits.
 * @returns {string} The name of the card network, or "Unknown" if no match.
 */

const networks = [
  {
    name: "American Express",
    lengths: [15],
    prefixRules: [
      { type: "exact", value: "34" },
      { type: "exact", value: "37" },
    ],
  },
  {
    name: "Diner's Club",
    lengths: [14],
    prefixRules: [
      { type: "exact", value: "38" },
      { type: "exact", value: "39" },
    ],
  },
  {
    name: "Visa",
    lengths: [13, 16, 19],
    prefixRules: [{ type: "exact", value: "4" }],
  },
  {
    name: "MasterCard",
    lengths: [16],
    prefixRules: [
      { type: "range", start: 51, end: 55, width: 2 },
    ],
  },
  {
    name: "Discover",
    lengths: [16, 19],
    prefixRules: [
      { type: "exact", value: "6011" },
      { type: "range", start: 644, end: 649, width: 3 },
      { type: "exact", value: "65" },
      { type: "range", start: 622126, end: 622925, width: 6 },
    ],
  },
  {
    name: "Maestro",
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    prefixRules: [
      { type: "exact", value: "50" },
      { type: "range", start: 56, end: 59, width: 2 },
    ],
  },
];

function isPrefixMatch (cardNumberString, prefixRules) {
  return prefixRules.some((prefixRule) => {
    if (prefixRule.type === 'exact') {
      return cardNumberString.startsWith(prefixRule.value)
    }
    if (cardNumberString.length < prefixRule.width) {
      return false
    }
    const prefix = +cardNumberString.slice(0, prefixRule.width)
    return prefix >= prefixRule.start && prefix <= prefixRule.end
  })
}
function detectNetwork(cardNumber) {
  const cardNumberString = String(cardNumber)
  return networks.find(({lengths, prefixRules}) => lengths.includes(cardNumberString.length) && isPrefixMatch(cardNumberString, prefixRules))?.name || 'Unknown'
}

module.exports = detectNetwork;
