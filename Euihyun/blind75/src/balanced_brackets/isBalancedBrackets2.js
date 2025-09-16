// In order to submit to greatfrontend, change the type of str and all following variables to any
function isBalancedBrackets(str) {
  const bracketsStack = [];
  const bracketMatch = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const isOpening = (char) => {
    return bracketMatch[char];
  };

  for (const char of str) {
    if (bracketsStack.length === 0) {
      if (!isOpening(char)) return false;
      else bracketsStack.push(char);
    } else {
      const topChar = bracketsStack[bracketsStack.length - 1];
      if (topChar && !isOpening(topChar)) return false;
      else {
        if (isOpening(char)) {
          bracketsStack.push(char);
        } else if (isOpening(topChar) === char) {
          bracketsStack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return bracketsStack.length === 0;
}

console.log(isBalancedBrackets("[]")); //true
console.log(isBalancedBrackets("([)]")); //false
console.log(isBalancedBrackets("([]){}")); //true
console.log(isBalancedBrackets("](){}[")); //false
console.log(isBalancedBrackets("(){}[]")); //true
