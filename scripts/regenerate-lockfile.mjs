import fs from 'fs';
import path from 'path';

// Remove outdated pnpm-lock.yaml
const lockfilePath = path.resolve('pnpm-lock.yaml');

try {
  if (fs.existsSync(lockfilePath)) {
    fs.unlinkSync(lockfilePath);
    console.log('[v0] Successfully removed pnpm-lock.yaml');
    console.log('[v0] The lockfile will be regenerated on next pnpm install with correct dependency versions');
  } else {
    console.log('[v0] pnpm-lock.yaml not found');
  }
} catch (error) {
  console.error('[v0] Error removing lockfile:', error.message);
  process.exit(1);
}
