// @ts-check

import * as fs from "node:fs/promises";

console.info("Hello Script!");

try {
  await fs.mkdir("./dist");
} catch (error) {
  // @ts-ignore
  console.error("Build script encountered an error: ", error.message);
}
