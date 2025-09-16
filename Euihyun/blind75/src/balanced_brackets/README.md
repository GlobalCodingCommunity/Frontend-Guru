# Balanced Brackets

- Question : [https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets)
- Things I knew before
  - Usage of the stack data structure, both by implementing the data structure and by using the JS array which provides Array.push() and Array.pop()
  - string in JavaScript is an iterable, so for of can be used over a string
- Approach
  - Iterate over a string and push or pop each character in a stack (we can use an array in JS/TS). After iterations, if the stack is empty, return true. Else, return false.
  - Cases to look at
    - If the stack is empty
      - If the character in iteration is one of ), }, ], immediately return false
      - Else, push the character
    - If the stack is not empty
      - If the character at the top of the stack is one of ), }, ], immediately return false
      - Else
        - If the character in iteration is one of (, {, [, push it and continue iteration
        - If the character in iteration is one of ), }, ], and the character at the top of the stack is the matching character, pop the stack and continue iteration
        - If the character in iteration is one of ), }, ], and the character at the top of the stack is the mismatching character, immediately return false
- Time complexity : O(N)
