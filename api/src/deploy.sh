#!/usr/bin/env bash
VERSION=`date '+%Y%m%d-%H%M%S'`
echo "Deploy version: ${VERSION}"

appcfg.py update --application sample --version ${VERSION} .
