#!/bin/bash

echo "🚀 Iniciando desarrollo de UXUI Fans Kit..."

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

echo "🔨 Construyendo proyecto..."
npm run build

echo "👀 Iniciando modo desarrollo (watch)..."
npm run dev
