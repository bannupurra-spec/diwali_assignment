function type(val) {
  if (typeof val === "number") return "number";
  if (typeof val === "string") return "string";
  return typeof val;
}

function areEqualValues(value1, value2) {
  return value1 === value2;
}

function isEqual(value1, value2) {
  if (type(value1) !== type(value2)) return false;

  return value1 === value2;
}

function test(description, expectedOutput, input1, input2) {
  const actualOutput = isEqual(input1, input2);
  const result = actualOutput === expectedOutput ? "✅" : "❌";

  console.log(`${result} : ${description}`);
}

function testNumbers() {
  test("Two same numbers should be true", true, 1, 1);
}

function main() {
  testNumbers();
}

main();
