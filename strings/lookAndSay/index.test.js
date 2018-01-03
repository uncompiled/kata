const lookAndSay = require("../lookAndSay");

test("negative input is undefined", () => {
  expect(lookAndSay(-10)).toBe(undefined);
});

test("1st number is 1", () => {
  expect(lookAndSay(1)).toEqual("1");
});

test("2nd number is 11", () => {
  expect(lookAndSay(2)).toEqual("11");
});

test("3rd number is 21", () => {
  expect(lookAndSay(3)).toEqual("21");
});

test("4th number is 1211", () => {
  expect(lookAndSay(4)).toEqual("1211");
});

test("5th number is 111221", () => {
  expect(lookAndSay(5)).toEqual("111221");
});

test("10th number is 13211311123113112211", () => {
  expect(lookAndSay(10)).toEqual("13211311123113112211");
});
