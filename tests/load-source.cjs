const fs = require('node:fs');
const path = require('node:path');
const { transformSync } = require('esbuild');
const sourceRoot = path.resolve(__dirname, '../src') + path.sep;
for (const extension of ['.ts', '.tsx', '.js']) {
  const original = require.extensions[extension] || require.extensions['.js'];
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceRoot)) return original(module, filename);
    const { code } = transformSync(fs.readFileSync(filename, 'utf8'), {
      loader: extension === '.ts' ? 'ts' : 'tsx',
      format: 'cjs',
      target: 'node26',
      jsx: 'automatic',
      sourcefile: filename,
    });
    module._compile(code, filename);
  };
}
require.extensions['.css'] = () => {};
