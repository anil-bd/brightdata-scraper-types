#!/usr/bin/env bash
# The types are only worth installing if they fail on a bad field name.
# This asserts tsc rejects examples/demo/checks/wrong-field.ts.
set -u
cd "$(dirname "$0")/../examples/demo"
out=$(npx tsc --noEmit --strict --skipLibCheck --moduleResolution node --module commonjs \
      --target ES2022 checks/wrong-field.ts 2>&1)
if echo "$out" | grep -q "prodcut_title"; then
  echo "PASS  tsc rejects the misspelled field"
  echo "      $(echo "$out" | head -1)"
  exit 0
fi
echo "FAIL  tsc accepted a field that does not exist"
echo "$out"
exit 1
