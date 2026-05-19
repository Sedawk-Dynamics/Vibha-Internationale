import os
import sys

lockfile_path = '/pnpm-lock.yaml'

try:
    if os.path.exists(lockfile_path):
        os.remove(lockfile_path)
        print(f"✓ Successfully deleted {lockfile_path}")
        sys.exit(0)
    else:
        print(f"✗ File not found: {lockfile_path}")
        sys.exit(1)
except Exception as e:
    print(f"✗ Error deleting lockfile: {e}")
    sys.exit(1)
