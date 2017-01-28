#!/usr/bin/env bash

dir=""

if [[ "$1" != "" ]]; then
    dir="$1"
else
    dir="example/build"
fi

echo "Cleaning example build..."
echo 'Target directory: ' $1

rm -rf $1/*
