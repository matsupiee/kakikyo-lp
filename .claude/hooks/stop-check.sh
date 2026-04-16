#!/usr/bin/env bash
# Stop hook: enforce `bun run check-types` and `bun run check` before Claude finishes.
# If either fails, exit 2 with stderr so Claude continues and fixes the issues.

set -uo pipefail

input="$(cat)"

if [ "$(echo "$input" | jq -r '.stop_hook_active // false')" = "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

failed=0
{
  echo "=== bun run check-types ==="
  if ! bun run check-types; then
    failed=1
  fi
  echo ""
  echo "=== bun run check ==="
  if ! bun run check; then
    failed=1
  fi
} 1>&2

if [ "$failed" -eq 1 ]; then
  {
    echo ""
    echo "=== チェックが失敗しました。上記のエラーを修正してから再度終了してください ==="
  } 1>&2
  exit 2
fi

exit 0
