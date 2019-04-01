module.exports = function tiny(string) {
  if (typeof string !== "string")
    throw new TypeError("Only strings allowed in!");
  return string.replace(" ", "") + " By R2";
};
