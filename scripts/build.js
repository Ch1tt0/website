// @ts-check

import * as fs from "node:fs/promises";

const distFolder = ["./dist", "./dist/css", "./dist/assets", "./dist/js"];

try {
  // Step 1: Create dist folder structure.
  distFolder.forEach(async (folder) => {
    const createdDir = await fs.mkdir(folder, { recursive: true });
    console.info(`Created ${createdDir}`);
  });

  // Step 2: Compile using TypeScript.
} catch (error) {
  // @ts-ignore
  console.error("Build script encountered an error: ", error.message);
}
