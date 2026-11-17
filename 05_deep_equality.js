function type(val) {
  if (val === null) return "null";
  if (Number.isNaN(val)) return "NaN";
  return typeof val;
}

function areEqualValues(value1, value2) {
  return value1 === value2;
}

function areEqualObjects(value1, value2) {
  if (Object.keys(value1).length === Object.keys(value2).length) {
    for (const key in value1) {
      let result = key in value2 && isEqual(value1[key], value2[key]);
      if (!result) return false;
    }
    return true;
  }
  return false;
}

function isEqual(value1, value2) {
  if (type(value1) !== type(value2)) return false;

  switch (type(value1)) {
    case "null":
    case "NaN":
      return true;
    case "object":
      return areEqualObjects(value1, value2);
  }

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
  test("One is boolean another is number should be false", false, false, 10);
}

function testUndefinedNullNaN() {
  test("Two same NULL values should be true", true, null, null);
  test("Two same Undefined values should be true", true, undefined, undefined);
  test("Two same NaN values should be true", true, NaN, NaN);
  test(
    "One is null other is undefined should be false",
    false,
    null,
    undefined,
  );
  test("One is NaN other is undefined should be false", false, NaN, undefined);
  test("One is number other is NaN should be false", false, 5, NaN);
  test("One is boolean other is null should be false", false, true, null);
}

function testObjects() {
  test("Two empty objects should be true", true, {}, {});
  test("Empty and non-empty object should be false", false, { a: 1 }, {});
  test(
    "object with same keys and values should be true",
    true,
    { a: 1 },
    { a: 1 },
  );
}

function main() {
  //testNumbers();
  // testBoolean();
  // testUndefinedNullNaN();
  testObjects();
}

main();
