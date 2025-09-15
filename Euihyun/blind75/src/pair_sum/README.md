# Pair Sum

- Question : [https://www.greatfrontend.com/interviews/study/blind75/questions/algo/pair-sum](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/pair-sum)
- Things I knew before
  - Usage of the hash table data structure, by using the JS Map.
  - for of can be used over an Iterable.
- Approach
  - First tried the basic approach, which is finding all combinations of two numbers, similar to a bubble sort, whose sum matches to target -> O(N^2)
  - However, I tried to look for a more efficient solution, and thought of using Map can improve the time complexity.
  - In detail, two Maps are created from the given array: map1 for (index, value) and map2 for (value, index).
  - Then, iterate over map1 and search from map2 whose key(originally value) is target - value. If there is one, you can return both indices.
  - Two edge cases. The first one is when an array has only two elements. Based on the problem, it must have a solution. Therefore, immediately return [1, 2].
  - The second one is when entries from map1 and map2 mean the same thing. For example, if numbers = [1, 3, 4, 2] and target = 6, if it is iterated over (1, 3), target - value = 6 - 3 = 3, and from map2 (3, 1) might be found. But this violates the assumption of the problem. Therefore, to prevent such case, you need to check if the value of map2(the original index) is not the same as the key of map1(also the original index).
- Time complexity : O(N)
