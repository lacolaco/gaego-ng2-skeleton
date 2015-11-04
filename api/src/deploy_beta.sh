#!/usr/bin/env bash
VERSION="beta"
echo "Deploy version: ${VERSION}"

appcfg.py update --application sample --version ${VERSION} .
