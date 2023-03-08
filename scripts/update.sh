#!/usr/bin/env bash

echo "Generating specification..."
yarn run generate:specification

echo "Generating endpoint names..."
yarn run generate:endpoint-names

echo "Press any key to review endpoint names..."
read -n 1
${EDITOR:-vim} specification/extras/endpoint-names.json

echo "Generating routes..."
yarn run generate:routes

echo "Generating types schema..."
yarn run generate:types-schema
