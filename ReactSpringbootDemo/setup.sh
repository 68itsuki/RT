#!/bin/bash

echo "🚀 React + Spring Boot Demo Project セットアップ開始"

# バックエンドのセットアップ
echo "📦 バックエンド（Spring Boot）のセットアップ..."
cd backend

# Maven Wrapperの権限を設定
chmod +x mvnw

# 依存関係をダウンロード
echo "Maven依存関係をダウンロード中..."
./mvnw clean install -DskipTests

echo "✅ バックエンドセットアップ完了"

# フロントエンドのセットアップ
echo "📦 フロントエンド（React）のセットアップ..."
cd ../frontend

# 依存関係をインストール
echo "npm依存関係をインストール中..."
npm install

echo "✅ フロントエンドセットアップ完了"

echo ""
echo "🎉 セットアップ完了！"
echo ""
echo "次のコマンドでアプリケーションを起動してください："
echo ""
echo "1. バックエンド起動:"
echo "   cd backend"
echo "   ./mvnw spring-boot:run"
echo ""
echo "2. フロントエンド起動（新しいターミナルで）:"
echo "   cd frontend"
echo "   npm start"
echo ""
echo "📖 詳細は README.md を参照してください" 