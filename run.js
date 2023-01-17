// const fs = require("fs");

// fs.readFile("read.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile(
//   "wite.txt",
//   "my way of life is dependent on the life of christ",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("written");
//     }
//   }
// );

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
