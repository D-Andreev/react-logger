#!/usr/bin/env bash

sourceDir=""
outputDir=""

echo "Watching..."

if [[ "$1" != "" ]]; then
    sourceDir="$1"
else
    sourceDir="src"
fi

if [[ "$2" != "" ]]; then
    outputDir="$2"
else
    outputDir="dist"
fi

echo 'Source directory: ' "$sourceDir"
echo 'Output directory: ' "$outputDir"

node_modules/.bin/babel "$sourceDir" --out-dir "$outputDir" --watch
