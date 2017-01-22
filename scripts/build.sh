#!/usr/bin/env bash

echo "Building..."
echo 'Source directory: ' $1
echo 'Output directory: ' $2

node_modules/.bin/babel $1 --out-dir $2
