# React + Spring Boot Demo Project

このプロジェクトは、ReactとSpring Bootの連携を学ぶためのデモアプリケーションです。

## 📁 プロジェクト構成

```
react-springboot-demo/
├── backend/                 # Spring Boot バックエンド
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/demo/
│   │   │   │   ├── controller/     # REST API コントローラー
│   │   │   │   ├── entity/         # JPA エンティティ
│   │   │   │   ├── repository/     # データアクセス層
│   │   │   │   ├── service/        # ビジネスロジック
│   │   │   │   └── DemoApiApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/                # React フロントエンド
│   ├── public/
│   ├── src/
│   │   ├── components/      # React コンポーネント
│   │   ├── services/        # API 通信サービス
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🚀 セットアップ手順

### 前提条件
- Java 17以上
- Node.js 16以上
- Maven 3.6以上

### 1. バックエンド（Spring Boot）の起動

```bash
# バックエンドディレクトリに移動
cd backend

# Mavenで依存関係をダウンロード
./mvnw clean install

# アプリケーションを起動
./mvnw spring-boot:run
```

バックエンドは `http://localhost:8080` で起動します。

### 2. フロントエンド（React）の起動

```bash
# 新しいターミナルでフロントエンドディレクトリに移動
cd frontend

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm start
```

フロントエンドは `http://localhost:3000` で起動します。

## 📚 機能

### ユーザー管理機能
- ユーザーの作成、読み取り、更新、削除（CRUD）
- ユーザー一覧の表示
- ユーザー情報の編集

### TODOアプリ機能
- TODOの作成、読み取り、更新、削除（CRUD）
- TODOの完了/未完了の切り替え
- フィルタリング機能（すべて、未完了、完了済み）
- 作成日時と完了日時の表示

## 🔧 API エンドポイント

### ユーザーAPI
- `GET /api/users` - 全ユーザー取得
- `GET /api/users/{id}` - 特定ユーザー取得
- `POST /api/users` - ユーザー作成
- `PUT /api/users/{id}` - ユーザー更新
- `DELETE /api/users/{id}` - ユーザー削除

### TODO API
- `GET /api/todos` - 全TODO取得
- `GET /api/todos/completed` - 完了済みTODO取得
- `GET /api/todos/pending` - 未完了TODO取得
- `GET /api/todos/{id}` - 特定TODO取得
- `POST /api/todos` - TODO作成
- `PUT /api/todos/{id}` - TODO更新
- `PATCH /api/todos/{id}/toggle` - TODO状態切り替え
- `DELETE /api/todos/{id}` - TODO削除

## 🛠️ 技術スタック

### バックエンド
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **H2 Database** (インメモリ)
- **Maven**

### フロントエンド
- **React 18.2.0**
- **Axios** (HTTP通信)
- **Create React App**

## 📖 学習ポイント

1. **RESTful API設計**
   - HTTPメソッドの適切な使用
   - レスポンスステータスコード
   - JSONデータのやり取り

2. **フロントエンド・バックエンド連携**
   - CORS設定
   - API通信の実装
   - エラーハンドリング

3. **データベース操作**
   - JPAエンティティの設計
   - リポジトリパターン
   - 基本的なCRUD操作

4. **React開発**
   - コンポーネント設計
   - 状態管理（useState, useEffect）
   - フォーム処理

## 🔍 トラブルシューティング

### よくある問題

1. **ポート競合**
   - バックエンド: `application.properties`で`server.port`を変更
   - フロントエンド: `PORT=3001 npm start`でポート変更

2. **CORSエラー**
   - バックエンドのCORS設定を確認
   - フロントエンドのAPI URLを確認

3. **依存関係エラー**
   - バックエンド: `./mvnw clean install`
   - フロントエンド: `npm install`

## 📝 開発のヒント

1. **H2コンソール**
   - `http://localhost:8080/h2-console`でデータベースを確認
   - JDBC URL: `jdbc:h2:mem:testdb`
   - ユーザー名: `sa`
   - パスワード: （空）

2. **APIテスト**
   - Postmanを使用してAPIをテスト
   - ブラウザの開発者ツールでネットワークタブを確認

3. **デバッグ**
   - ブラウザのコンソールでエラーを確認
   - Spring Bootのログを確認


## 📄 ライセンス

このプロジェクトは学習目的で作成されています。 