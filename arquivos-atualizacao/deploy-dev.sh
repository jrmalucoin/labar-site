#!/bin/bash

git add .
git commit -m "$1"
git push origin dev

curl "http://168.231.65.61:3000/api/deploy/http://168.231.65.61:3000/api/deploy/e82f65aa95a505b89121c646d8707573fcc3f05447b08dcc"