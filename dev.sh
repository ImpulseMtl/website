#!/bin/bash
PORT=${1:-8000}
DIR="${2:-$(pwd)/src}"

echo "🚀 Starting local server at http://localhost:$PORT"
echo "📂 Serving directory: $DIR"
echo "🔄 Press Ctrl+C to stop the server."

cd "$DIR" || { echo "❌ Failed to change directory to $DIR"; exit 1; }

if command -v python3 &>/dev/null; then
    python3 -m http.server "$PORT"
else
    echo "❌ Python 3 is not installed."
    exit 1
fi