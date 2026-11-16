const { isEqual } = require("./05_deep_equality");

const testCases = [
  {
    input1: 1,
    input2: 1,
    description: " both are numbers",
    expectedOutput: true,
  },
  {
    input1: "a",
    input2: "a",
    description: " both are strings",
    expectedOutput: true,
  },
  {
    input1: [],
    input2: [],
    description: " both are empty arrays",
    expectedOutput: true,
  },
  {
    input1: { a: undefined },
    input2: { b: 1 },
    description: " a is 1 , b is undefined",
    expectedOutput: false,
  },
  {
    input1: { b: 1 },
    input2: { a: undefined },
    description: " b is 1 , a is undefined",
    expectedOutput: false,
  },
  {
    input1: [],
    input2: {},
    description: " one is array another is object",
    expectedOutput: false,
  },
  {
    input1: [],
    input2: [],
    description: "Is both are empty arrays",
    expectedOutput: true,
  },
  {
    input1: [1],
    input2: [1],
    description: " both are arrays with same number",
    expectedOutput: true,
  },
  {
    input1: [1],
    input2: [2],
    description: "Is both arearrays with different number",
    expectedOutput: false,
  },
  {
    input1: [1],
    input2: [1, 2],
    description: " both arrays have different length",
    expectedOutput: false,
  },
  {
    input1: 1,
    input2: "1",
    description: " one is number another is string",
    expectedOutput: false,
  },
  {
    input1: { a: 1 },
    input2: { a: 1 },
    description: " both are objects with same keys",
    expectedOutput: true,
  },
  {
    input1: { a: 1 },
    input2: { b: 1 },
    description: " both are objects with different keys",
    expectedOutput: false,
  },
  {
    input1: { a: [1, [5, [1]], 1, 2] },
    input2: { a: [1, [5, [1]], 1, 2] },
    description: "objects have arrays as values",
    expectedOutput: true,
  },
  {
    input1: { a: { b: 1 } },
    input2: { a: { b: 1 } },
    description: "nested objects",
    expectedOutput: true,
  },
];

for (let testCase of testCases) {
  const icon =
    isEqual(testCase.input1, testCase.input2) === testCase.expectedOutput
      ? "✅"
      : "❌";
  console.log(`${icon} :  ${testCase.description}`);
}
