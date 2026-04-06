# Detect Credit Card Network

## Problem

Given a credit card number as a string, determine which card network it belongs to based on the prefix (IIN/BIN) and length rules below.

Write a function `detectNetwork(cardNumber)` that returns the network name as a string, or `"Unknown"` if the number does not match any known network.

## Card Network Rules

| Network          | Prefix(es)                          | Length(s) |
| ---------------- | ----------------------------------- | --------- |
| Diner's Club     | 38, 39                              | 14        |
| American Express | 34, 37                              | 15        |
| Visa             | 4                                   | 13, 16, 19 |
| MasterCard       | 51, 52, 53, 54, 55                  | 16        |
| Discover         | 6011, 622126-622925, 644-649, 65    | 16, 19    |
| Maestro          | 50, 56-59                           | 12-19     |

## Examples

```js
detectNetwork("38345678901234")      // "Diner's Club"    (prefix 38, length 14)
detectNetwork("343456789012345")     // "American Express" (prefix 34, length 15)
detectNetwork("4111111111111")       // "Visa"            (prefix 4, length 13)
detectNetwork("4111111111111111")    // "Visa"            (prefix 4, length 16)
detectNetwork("5112345678901234")    // "MasterCard"      (prefix 51, length 16)
detectNetwork("6011123456789012")    // "Discover"        (prefix 6011, length 16)
detectNetwork("5018123456789012")    // "Maestro"         (prefix 50, length 16)
detectNetwork("1234")               // "Unknown"
```

## Constraints

- Input is always a string of digit characters (no spaces, dashes, or letters)
- The string can be empty
- Return the exact network name as shown in the table (case-sensitive)
- If no network matches, return `"Unknown"`

## Things to Consider

- Some prefixes overlap. For example, cards starting with `4` could be Visa, but you also need to check length. Cards starting with `50` are Maestro, while `51`-`55` are MasterCard.
- Discover's `622126-622925` range requires parsing a 6-digit prefix as an integer and comparing against the range boundaries.
- Maestro covers a wide range of lengths (12-19), so cards with prefix `50` or `56`-`59` at any of those lengths should match.

## Getting Started

```bash
npm install
npm test
```

Implement your solution in `detect-network.js`. All tests should pass when your solution is correct.

<details>
<summary>Hints</summary>

- Check more specific prefixes before less specific ones (e.g., check `38`/`39` before checking single-digit prefixes)
- Use `String.prototype.startsWith()` and `cardNumber.length` for matching
- For numeric ranges like `622126-622925`, extract the first 6 characters, convert to a number with `parseInt()` or the unary `+` operator, and compare against the range

</details>
