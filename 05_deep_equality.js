function isEqual(value1, value2) {
  if (typeof value1 !== "object" && typeof value2 !== "object") {
    return value1 === value2;
  } else if (
    typeof value1 === "object" &&
    typeof value2 === "object" &&
    Object.keys(value1).length === Object.keys(value2).length
  ) {
    if (Array.isArray(value1) !== Array.isArray(value2)) return false;

    for (const key in value1) {
      let result = key in value2 && isEqual(value1[key], value2[key]);
      if (!result) return false;
    }
    return true;
  }
  return false;
}

module.exports = {
  isEqual,
};
