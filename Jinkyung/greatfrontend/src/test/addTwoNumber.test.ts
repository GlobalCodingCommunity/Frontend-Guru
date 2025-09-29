// src/solutions/addTwoNumbers.test.ts
import { addTwoNumbers } from "../solutions/addTwoNumbers";
import { render, screen } from "@testing-library/react";

test("adds two numbers", () => {
  expect(addTwoNumbers(2, 3)).toBe(5);
});