const testData = [
  {
    input1: 1,
    input2: 1,
    message: "If both are numbers",
  },
  {
    input1: "a",
    input2: "a",
    message: "If both are strings",
  },
  { input1: [], input2: [], message: "If both are empty arrays" },
  {
    input1: { a: undefined },
    input2: { b: 1 },
    message: "If a is 1 , b is undefined",
  },
  {
    input1: { b: 1 },
    input2: { a: undefined },
    message: "If b is 1 , a is undefined",
  },
  { input1: [], input2: {}, message: "If one is array another is object" },
  { input1: [], input2: [], message: "Is both are empty arrays" },
  { input1: [1], input2: [1], message: "If both are arrays with same number" },
  {
    input1: [1],
    input2: [2],
    message: "Is both arearrays with different number",
  },
  {
    input1: [1],
    input2: [1, 2],
    message: "If both arrays have different length",
  },
  { input1: 1, input2: "1", message: "If one is number another is string" },
  {
    input1: { a: 1 },
    input2: { a: 1 },
    message: "If both are objects with same keys",
  },
  {
    input1: { a: 1 },
    input2: { b: 1 },
    message: "If both are objects with different keys",
  },
  {
    input1: { a: [1, [5, [1]], 1, 2] },
    input2: { a: [1, [5, [1]], 1, 2] },
    message: "If objects have arrays as values",
  },
  {
    input1: { a: { b: 1 } },
    input2: { a: { b: 1 } },
    message: "If nested objects are there",
  },
];

module.exports = {
  testData,
};
