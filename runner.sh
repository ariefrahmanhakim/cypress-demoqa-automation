#!/usr/bin/env sh

# Set this value and run: sh runner.sh
# Values: open | run
DEFAULT_MODE="open"
# Browser for headless run mode. Change as needed: chrome | edge | electron | firefox
DEFAULT_RUN_BROWSER="chrome"

set -eu

MODE="${1:-$DEFAULT_MODE}"

if [ "$#" -gt 0 ]; then
  shift
fi

kill_existing_cypress() {
  echo "Stopping existing Cypress processes..."

  powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "
    \$ErrorActionPreference = 'SilentlyContinue'
    \$processes = Get-CimInstance Win32_Process | Where-Object {
      (\$_.Name -eq 'Cypress.exe') -or
      (\$_.Name -eq 'node.exe' -and \$_.CommandLine -match 'cypress')
    }

    foreach (\$process in \$processes) {
      Stop-Process -Id \$process.ProcessId -Force
    }
  " >/dev/null 2>&1 || true

  taskkill.exe //F //IM Cypress.exe >/dev/null 2>&1 || true
}

run_cypress() {
  case "$MODE" in
    open)
      echo "Starting Cypress in interactive mode..."
      npx cypress open "$@"
      ;;
    run)
      echo "Starting Cypress in headless mode..."
      echo "Browser: $DEFAULT_RUN_BROWSER"
      npx cypress run --browser "$DEFAULT_RUN_BROWSER" "$@"
      ;;
    *)
      echo "Invalid mode: $MODE"
      echo "Usage: sh runner.sh [open|run] [cypress-options]"
      exit 1
      ;;
  esac
}

kill_existing_cypress
run_cypress "$@"
