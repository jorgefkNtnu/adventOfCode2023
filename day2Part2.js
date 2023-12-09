const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, input) => {
  if (err) throw err;

  let answer = input.split(/\r?\n/).reduce((acc, string) => {
    let array = string.replace(/^Game \d+: /, "").split(";");

    let red = 0;
    let blue = 0;
    let green = 0;

    for (let i = 0; i < array.length; i++) {
      let array2 = array[i].split(",");

      for (let j = 0; j < array2.length; j++) {
        if (
          array2[j].includes("green") &&
          (green == 0 || parseInt(array2[j]) > green)
        )
          green = parseInt(array2[j]);
        if (
          array2[j].includes("red") &&
          (red == 0 || parseInt(array2[j]) > red)
        )
          red = parseInt(array2[j]);
        if (
          array2[j].includes("blue") &&
          (blue == 0 || parseInt(array2[j]) > blue)
        )
          blue = parseInt(array2[j]);
      }
    }

    let power = green * blue * red;

    return acc + power;
  }, 0);

  console.log(answer);
});
