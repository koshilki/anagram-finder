const fs = require("fs");
const groupWords = require("./src/groupWords.js");
const list1 = fs
  .readFileSync("test/data/list1.txt", { encoding: "utf8" })
  .split("\n");
const list2 = fs
  .readFileSync("test/data/list2.txt", { encoding: "utf8" })
  .split("\n");

console.log("List 1");
groupWords(list1).map((l) => console.log(l.join(", ")));

console.log("List 2");
groupWords(list2).map((l) => console.log(l.join(", ")));
