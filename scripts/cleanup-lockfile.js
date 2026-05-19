import fs from 'fs';
import path from 'path';

const lockfilePath = path.join(process.cwd(), 'pnpm-lock.yaml');

try {
  if (fs.existsSync(lockfilePath)) {
    fs.unlinkSync(lockfilePath);
    console.log('[v0] Successfully deleted pnpm-lock.yaml');
  } else {
    console.log('[v0] pnpm-lock.yaml does not exist');
  }
} catch (error) {
  console.error('[v0] Error deleting pnpm-lock.yaml:', error);
  process.exit(1);
}
