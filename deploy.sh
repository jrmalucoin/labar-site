#!/bin/bash

git add .

if git diff --cached --quiet; then
    echo "Nenhuma alteração para enviar."
else
    git commit -m "$1"
    git push origin main || exit 1
fi

echo "Iniciando deploy..."

curl -s "http://168.231.65.61:3000/api/deploy/bee6f3a5f25dcd47a5e8c07ae85eb1a07d9481fdb0720aec"

echo ""
echo "Deploy enviado."