// Deterministically copy entry.png; each run writes a byte-for-byte identical file.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDirectory, 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationPath = join(outputDirectory, 'entry.png');

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourcePath, destinationPath);

console.log(`Copied ${sourcePath} to ${destinationPath}`);
