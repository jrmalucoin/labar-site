#!/bin/bash

git add .
git commit -m "$1"
git push origin dev

curl "http://168.231.65.61:3000/api/deploy/7d9481fdb0720aec"