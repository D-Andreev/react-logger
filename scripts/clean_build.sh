#!/usr/bin/env bash

dir=""

if [[ "$1" != "" ]]; then
    dir="$1"
else
    dir="dist"
fi

echo "Cleaning build..."
echo 'Target directory: ' "$dir"

rm -rf "$dir"/*
