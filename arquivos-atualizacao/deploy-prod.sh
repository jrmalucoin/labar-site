#!/bin/bash

git add .
git commit -m "$1"
git push origin main

curl "http://168.231.65.61:3000/api/deploy/cc3f05447b08dcc"