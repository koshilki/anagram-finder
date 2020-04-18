const groupWords = require("../src/groupWords.js");
const { expect } = require("chai");
const fs = require("fs");

const testArray = [
  ["Amsterdam", "Erdamamst"],
  ["Arnhem", "Hemarn"],
  ["Damrotter", "Rotterdam", "Terdamrot"],
  ["Paris", "Rispa", "Spari"],
];

describe("groupWords", () => {
  it("should find groups in list1", () => {
    const list1 = fs
      .readFileSync("test/data/list1.txt", { encoding: "utf8" })
      .split("\n");
    const res = groupWords(list1);
    expect(res).to.deep.equal(testArray);
  });
  it("should find groups in list2", () => {
    const list2 = fs
      .readFileSync("test/data/list2.txt", { encoding: "utf8" })
      .split("\n");
    const res = groupWords(list2);
    expect(res).to.deep.equal(testArray);
  });
});
