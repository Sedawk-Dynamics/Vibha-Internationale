import os
import sys

lockfile_path = '/pnpm-lock.yaml'

try:
    if os.path.exists(lockfile_path):
        os.remove(lockfile_path)
        print(f"Successfully deleted {lockfile_path}")
    else:
        print(f"{lockfile_path} not found")
except Exception as e:
    print(f"Error deleting {lockfile_path}: {e}")
    sys.exit(1)
