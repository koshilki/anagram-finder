const processList = require("../src/processList.js");
const { expect } = require("chai");
const fs = require("fs");

const testArray = [
  ["Amsterdam", "Erdamamst"],
  ["Arnhem", "Hemarn"],
  ["Damrotter", "Rotterdam", "Terdamrot"],
  ["Paris", "Rispa", "Spari"],
];

describe("processList", () => {
  it("should process list1", () => {
    const list1 = fs
      .readFileSync("test/data/list1.txt", { encoding: "utf8" })
      .split("\n");
    const res = processList(list1);
    expect(res).to.deep.equal(testArray);
  });
  it("should process list2", () => {
    const list2 = fs
      .readFileSync("test/data/list2.txt", { encoding: "utf8" })
      .split("\n");
    const res = processList(list2);
    expect(res).to.deep.equal(testArray);
  });
});
