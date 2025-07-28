# 配布ガイド

このプロジェクトを配布する際の手順と注意事項を説明します。

## 📦 配布パッケージの内容

### 必須ファイル
- `README.md` - プロジェクトの説明とセットアップ手順
- `setup.sh` - 自動セットアップスクリプト
- `backend/` - Spring Bootバックエンドプロジェクト
- `frontend/` - Reactフロントエンドプロジェクト

### バックエンド（Spring Boot）
```
backend/
├── src/
│   └── main/
│       ├── java/com/example/demo/
│       │   ├── controller/     # REST API コントローラー
│       │   ├── entity/         # JPA エンティティ
│       │   ├── repository/     # データアクセス層
│       │   ├── service/        # ビジネスロジック
│       │   └── DemoApiApplication.java
│       └── resources/
│           └── application.properties
├── pom.xml
├── mvnw
└── mvnw.cmd
```

### フロントエンド（React）
```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── UserList.js
│   │   ├── UserList.css
│   │   ├── TodoApp.js
│   │   └── TodoApp.css
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🚀 配布手順

### 1. プロジェクトのクリーンアップ
```bash
# 不要なファイルを削除
find . -name "node_modules" -type d -exec rm -rf {} +
find . -name "target" -type d -exec rm -rf {} +
find . -name ".git" -type d -exec rm -rf {} +
find . -name ".DS_Store" -delete
```

### 2. ZIPファイルの作成
```bash
# プロジェクトディレクトリで実行
zip -r react-springboot-demo.zip . -x "*.git*" "node_modules/*" "target/*" ".DS_Store"
```

### 3. 配布ファイルの確認
配布前に以下の項目を確認してください：

- [ ] README.mdが正しく記載されている
- [ ] setup.shが実行可能になっている
- [ ] すべてのソースファイルが含まれている
- [ ] 不要なファイルが除外されている

## 📋 受講生向けセットアップ手順

### 前提条件の確認
受講生は以下の環境が必要です：

1. **Java 17以上**
   ```bash
   java -version
   ```

2. **Node.js 16以上**
   ```bash
   node -v
   npm -v
   ```

3. **Maven 3.6以上**（オプション）
   ```bash
   mvn -version
   ```

### セットアップ手順

#### 1. プロジェクトの展開
```bash
# ZIPファイルを展開
unzip react-springboot-demo.zip
cd react-springboot-demo
```

#### 2. 自動セットアップ
```bash
# セットアップスクリプトを実行
./setup.sh
```

#### 3. 手動セットアップ（自動セットアップが失敗した場合）

**バックエンド（Spring Boot）**
```bash
cd backend
chmod +x mvnw
./mvnw clean install -DskipTests
```

**フロントエンド（React）**
```bash
cd frontend
npm install
```

#### 4. アプリケーションの起動

**バックエンド起動**
```bash
cd backend
./mvnw spring-boot:run
```

**フロントエンド起動**（新しいターミナルで）
```bash
cd frontend
npm start
```

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### 1. 権限エラー
```bash
# setup.shの実行権限を付与
chmod +x setup.sh
```

#### 2. Maven Wrapperの権限エラー
```bash
# mvnwの実行権限を付与
chmod +x backend/mvnw
```

#### 3. ポート競合
- バックエンド: `application.properties`で`server.port=8081`に変更
- フロントエンド: `PORT=3001 npm start`で起動

#### 4. 依存関係エラー
```bash
# バックエンド
cd backend
./mvnw clean install

# フロントエンド
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## 📚 学習リソース

### 参考資料
- [React + Spring Boot 連携完全ガイド](./React_SpringBoot_Integration_Guide.md)
- [Spring Boot公式ドキュメント](https://spring.io/projects/spring-boot)
- [React公式ドキュメント](https://reactjs.org/docs/)

### 追加学習項目
1. **認証機能の実装**
2. **データベースの永続化**
3. **テストの実装**
4. **デプロイメント**

## 📞 サポート

問題が発生した場合は、以下の情報を確認してください：

1. **環境情報**
   - OS: macOS/Windows/Linux
   - Java バージョン
   - Node.js バージョン
   - Maven バージョン

2. **エラーログ**
   - バックエンドのログ
   - フロントエンドのコンソールエラー
   - ブラウザの開発者ツール

3. **実行手順**
   - どの手順でエラーが発生したか
   - 実行したコマンド
   - 期待される動作

## 📄 ライセンス

このプロジェクトは学習目的で作成されています。 