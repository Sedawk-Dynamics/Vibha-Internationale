#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const lockfilePath = path.join(process.cwd(), 'pnpm-lock.yaml');

try {
  if (fs.existsSync(lockfilePath)) {
    fs.unlinkSync(lockfilePath);
    console.log('✓ Successfully deleted pnpm-lock.yaml');
  } else {
    console.log('ℹ pnpm-lock.yaml not found - already deleted');
  }
} catch (error) {
  console.error('✗ Error deleting pnpm-lock.yaml:', error.message);
  process.exit(1);
}
