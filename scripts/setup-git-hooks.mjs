import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

try {
  execFileSync('git', ['rev-parse', '--git-dir'], { stdio: 'ignore' });
} catch {
  // npm install can run outside a Git checkout (for example in a package build).
  process.exit(0);
}

if (existsSync('.githooks')) {
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'inherit' });
}
