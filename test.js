const { isEqual } = require("./05_deep_equality");

function test(description, expectedOutput, input1, input2) {
  const actualOutput = isEqual(input1, input2);
  const result = actualOutput === expectedOutput ? "✅" : "❌";

  console.log(`${result} : ${description}`);
}

function testNumbers() {
  console.log("Testing Numbers");

  test("Two same numbers should be true", true, 1, 1);
  test("Two different numbers should be false", false, 1, 2);
  test("Two same negative numbers should be true", true, -1, -1);
  test("Two different negative numbers should be false", false, -2, -1);
  test("One is number another is string should be false", false, 1, "1");
}

function testStrings() {
  console.log("Testing Strings");

  test("Two same empty strings should be true", true, "", "");
  test("Two same strings should be true", true, "str", "str");
  test("Two different strings should be false", false, "str", "s");
  test("string and number should be false", false, "20", 20);
  test("string and object should be false", false, "str", {});
  test("string and array should be false", false, "str", []);
}

function testBoolean() {
  console.log("Testing Boolean");

  test("Two same boolean should be true", true, true, true);
  test("Two different boolean should be false", false, false, true);
  test("boolean and number should be false", false, false, 10);
  test("boolean and string should be false", false, false, "10");
  test("boolean and object should be false", false, true, {});
  test("boolean and array should be false", false, true, []);
}

function testUndefinedNullNaN() {
  console.log("Testing Undefined , Null , NaN");

  test("Two same NULL values should be true", true, null, null);
  test("Two same Undefined values should be true", true, undefined, undefined);
  test("Two same NaN values should be true", true, NaN, NaN);
  test("null and undefined should be false", false, null, undefined);
  test("NaN and undefined should be false", false, NaN, undefined);
  test("number and NaN should be false", false, 5, NaN);
  test("boolean and null should be false", false, true, null);
}

function testObjects() {
  console.log("Testing Objects");

  test("Two empty objects should be true", true, {}, {});
  test("Empty and non-empty object should be false", false, { a: 1 }, {});
  test(
    "object with same keys & values should be true",
    true,
    { a: 1 },
    { a: 1 },
  );
  test("object with diff keys should be false", false, { a: 1 }, { b: 1 });
  test("object with diff values should be false", false, { a: 1 }, { a: 2 });
  test(
    "Two objects with same nested objects should be true",
    true,
    { a: { b: 1 } },
    { a: { b: 1 } },
  );
  test(
    "Two objects with diff nested objects should be false",
    false,
    { a: { b: 1 }, d: 3 },
    { a: { c: 2 }, d: 3 },
  );
}

function testArray() {
  console.log("Testing Arrays");

  test("Two empty arrays should be true", true, [], []);
  test("object and list should be false", false, {}, []);
  test("two arrays with diff values should be false", false, [1], [2]);
  test("two arrays with same values should be true", true, [1], [1]);
  test(
    "two arrays with same nested array values should be true",
    true,
    [1, [2]],
    [1, [2]],
  );
  test(
    "two arrays with diff nested array values should be false",
    false,
    [1, [1], 2, 3],
    [2, [2], 2, 2],
  );
}

function main() {
  testNumbers();
  testBoolean();
  testUndefinedNullNaN();
  testObjects();
  testArray();
  testStrings();
}

main();
