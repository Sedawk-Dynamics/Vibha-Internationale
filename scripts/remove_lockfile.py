import os
import sys

lock_file = '/pnpm-lock.yaml'

try:
    if os.path.exists(lock_file):
        os.remove(lock_file)
        print(f"[v0] Successfully deleted {lock_file}")
    else:
        print(f"[v0] File does not exist: {lock_file}")
except Exception as e:
    print(f"[v0] Error deleting file: {e}")
    sys.exit(1)
