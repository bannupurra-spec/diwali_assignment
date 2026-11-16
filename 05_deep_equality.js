function isEqual(value1, value2) {
  if (typeof value1 !== "object" && typeof value2 !== "object") {
    return value1 === value2;
  } else if (
    typeof value1 === "object" &&
    typeof value2 === "object" &&
    Object.keys(value1).length === Object.keys(value2).length
  ) {
    if (Array.isArray(value1) != Array.isArray(value2)) return false;

    for (const key in value1) {
      let result = key in value2 && isEqual(value1[key], value2[key]);
      if (!result) return false;
    }
    return true;
  }
}

function test(a, b, message) {
  const icon = isEqual(a, b) ? "✅" : "❌";
  console.log(a, b);
  console.log(`${icon} : ${message} \n`);
}

test(1, 1, "If both are numbers");
test("a", "a", "If both are strings");
test([], [], "If both are empty arrays");
test({ a: undefined }, { b: 1 }, "If a is 1 , b is undefined");
test({ b: 1 }, { a: undefined }, "If b is 1 , a is undefined");
test([], {}, "If one is array another is object");
test([], [], "Is both are empty arrays");
test([1], [1], "If both are arrays with same number");
test([1], [2], "Is both arearrays with different number");
test([1], [1, 2], "If both arrays have different length");
test(1, "1", "If one is number another is string");
test({ a: 1 }, { a: 1 }, "If both are objects with same keys");
test({ a: 1 }, { b: 1 }, "If both are objects with different keys");
test(
  { a: [1, [5, [1]], 1, 2] },
  { a: [1, [5, [1]], 1, 2] },
  "If objects have arrays as values",
);
test({ a: { b: 1 } }, { a: { b: 1 } }, "If nested objects are there");
