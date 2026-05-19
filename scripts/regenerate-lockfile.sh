#!/bin/bash
# Remove the outdated pnpm-lock.yaml to force regeneration
rm -f pnpm-lock.yaml
echo "Removed pnpm-lock.yaml. It will be regenerated on next install."
