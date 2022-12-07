function createCube(size) {
  let cube = "";
  let counterRow = 1;

  for (let i = 0; i < size; i++) {
    cube += " ".repeat(size - counterRow);

    cube += "/\\".repeat(i + 1);

    cube += "_\\".repeat(size);

    cube += "\n";

    counterRow++;
  }

  const reverseCubeTest = cube.split("").reverse().join("");

  const reverse = reverseCubeTest.split("\n").map((row) => {
    return row
      .split("")
      .reverse()
      .join("")
      .replaceAll("/\\", "\\/")
      .replaceAll("_\\", "_/");
  }).slice(1);

  cube += reverse.join("\n");

  console.log(cube);

  return cube;
}

createCube(2);
