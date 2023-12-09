const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, input) => {
  if (err) throw err;

  let answer = input.split(/\r?\n/).reduce((acc, string, index) => {
    let array = string.replace(/^Game \d+: /, "").split(";");

    for (let i = 0; i < array.length; i++) {
      let array2 = array[i].split(",");

      for (let j = 0; j < array2.length; j++) {
        if (array2[j].includes("green") && parseInt(array2[j]) > 13) return acc;

        if (array2[j].includes("red") && parseInt(array2[j]) > 12) return acc;

        if (array2[j].includes("blue") && parseInt(array2[j]) > 14) return acc;
      }
    }

    return acc + index + 1;
  }, 0);

  console.log(answer);
});
