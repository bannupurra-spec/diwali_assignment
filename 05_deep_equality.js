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
  test("Two different numbers should be false", false, 1, 2);
  test("Two same negative numbers should be true", true, -1, -1);
  test("Two different negative numbers should be false", false, -2, -1);
  test("One is number another is string should be false", false, 1, "1");
}

function testBoolean() {
  test("Two same boolean should be true", true, true, true);
  test("Two different boolean should be false", false, false, true);
}

function main() {
  //testNumbers();
  testBoolean();
}

main();
