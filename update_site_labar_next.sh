# Crie o arquivo e cole o script acima
cat > update_site_labar-next.sh << 'EOF'
#!/bin/bash
# Script para atualizar a versão do site no labar-site-next

# Configurações
PASTA_ORIGEM="../labar-site"
PASTA_DESTINO="labar-site-next"
REPO_GITHUB="<https://github.com/djr/labar-site-next.git>"  # Substitua pela URL do seu repositório
BRANCH="main"  # Substitua por "master" se seu branch principal seja master

echo "=== Atualização do site no labar-site-next ==="
echo ""

# 1. Navegar até o diretório pai
cd "$(dirname "$0")"
echo "1. Navegando até o diretório: $(pwd)"
echo ""

# 2. Criar ou clonar labar-site-next se não existe
if [ ! -d "$PASTA_DESTINO" ]; then
    echo "2. Clonando repositório do GitHub em $PASTA_DESTINO..."
    git clone "$REPO_GITHUB" "$PASTA_DESTINO"
    if [ $? -ne 0 ]; then
        echo "Erro: Não foi possível clonar o repositório. Verifique a URL do GitHub."
        exit 1
    fi
else
    echo "2. Pasta $PASTA_DESTINO já existe. Usando a pasta existente."
fi

echo ""

# 3. Navegar até labar-site-next
cd "$PASTA_DESTINO"
echo "3. Navegando até $PASTA_DESTINO: $(pwd)"
echo ""

# 4. Atualizar para a versão mais recente do GitHub (opcional)
echo "4. Atualizando para a versão mais recente do GitHub..."
git fetch origin
git reset --hard origin/$BRANCH
echo ""

# 5. Copiar arquivos da pasta original para a nova versão
echo "5. Copiando arquivos de $PASTA_ORIGEM para $PASTA_DESTINO..."

# Copiar diretórios importantes do Next.js
if [ -d "$PASTA_ORIGEM/src" ]; then
    cp -R "$PASTA_ORIGEM/src" .
    echo "   - Copiado: src"
fi

if [ -d "$PASTA_ORIGEM/public" ]; then
    cp -R "$PASTA_ORIGEM/public" .
    echo "   - Copiado: public"
fi

if [ -f "$PASTA_ORIGEM/package.json" ]; then
    cp "$PASTA_ORIGEM/package.json" .
    echo "   - Copiado: package.json"
fi

if [ -f "$PASTA_ORIGEM/next.config.js" ]; then
    cp "$PASTA_ORIGEM/next.config.js" .
    echo "   - Copiado: next.config.js"
fi

if [ -f "$PASTA_ORIGEM/.env.local" ]; then
    cp "$PASTA_ORIGEM/.env.local" .
    echo "   - Copiado: .env.local"
fi

# Copiar outros arquivos de configuração
for arquivo in tsconfig.json jsconfig.json postcss.config.js tailwind.config.js; do
    if [ -f "$PASTA_ORIGEM/$arquivo" ]; then
        cp "$PASTA_ORIGEM/$arquivo" .
        echo "   - Copiado: $arquivo"
    fi
done

echo ""

# 6. Commit e push
echo "6. Commitando e pushando no GitHub..."
git add .
git commit -m "Atualização da versão do site no labar-site-next - $(date '+%Y-%m-%d %H:%M')"
git push origin "$BRANCH"

if [ $? -eq 0 ]; then
    echo ""
    echo "=== SUCESSO! ==="
    echo "A versão nova do site está atualizada em:"
    echo "   - Local: $(pwd)"
    echo "   - GitHub: $REPO_GITHUB"
else
    echo ""
    echo "=== ERRO ==="
    echo "Não foi possível fazer push no GitHub. Verifique sua configuração de git."
    exit 1
fi
EOF
