import os
import sys

lockfile_path = "/pnpm-lock.yaml"

try:
    if os.path.exists(lockfile_path):
        os.remove(lockfile_path)
        print(f"✓ Successfully deleted {lockfile_path}")
        sys.exit(0)
    else:
        print(f"✗ File does not exist: {lockfile_path}")
        sys.exit(1)
except Exception as e:
    print(f"✗ Error: {str(e)}")
    sys.exit(1)
