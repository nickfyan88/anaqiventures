import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.isFile() ? [fullPath] : [];
  });
}

if (fs.existsSync(outDir)) {
  for (const filePath of walk(outDir)) {
    if (!filePath.endsWith(".html.html")) continue;

    const targetPath = filePath.slice(0, -".html".length);
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(filePath, targetPath);
  }
}
