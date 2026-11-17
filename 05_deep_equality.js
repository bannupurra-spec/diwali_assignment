function type(val) {
  if (val === null) return "null";
  if (Number.isNaN(val)) return "NaN";
  if (Array.isArray(val)) return "array";
  return typeof val;
}

function areEqualValues(value1, value2) {
  return value1 === value2;
}

function areEqualObjects(value1, value2) {
  if (Object.keys(value1).length === Object.keys(value2).length) {
    for (const key in value1) {
      const result = key in value2 && isEqual(value1[key], value2[key]);

      if (!result) return false;
    }
    return true;
  }
  return false;
}

export function isEqual(value1, value2) {
  if (type(value1) !== type(value2)) return false;

  switch (type(value1)) {
    case "null":
    case "NaN":
      return true;
    case "object":
    case "array":
      return areEqualObjects(value1, value2);
    default:
      return areEqualValues(value1, value2);
  }
}
