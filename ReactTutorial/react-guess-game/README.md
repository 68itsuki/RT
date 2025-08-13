# React 数当てゲーム チュートリアル

このプロジェクトは、Reactの基本からRedux Toolkitまでを段階的に学習できる数当てゲームです。

## 🎮 ゲームの概要

- 1〜100の数字を当てるシンプルな数当てゲーム
- 入力した数字に対して「もっと大きいよ！」「もっと小さいよ！」のヒントが表示
- 正解すると試行回数と共に「正解です！」のメッセージが表示
- 難易度設定機能（最小値・最大値の変更可能）
- プレイ履歴の記録と表示

## 🚀 技術スタック

- **React 19.1.1** - UIライブラリ
- **Vite 7.1.2** - ビルドツール
- **Redux Toolkit 2.8.2** - 状態管理
- **React Redux 9.2.0** - ReduxとReactの連携

## 📁 プロジェクト構成

```
react-guess-game/
├── src/
│   ├── App.jsx              # メインアプリケーション（Redux Provider）
│   ├── Game.jsx             # ゲームコンポーネント（Redux管理）
│   ├── App_Part2.jsx        # Part2用（useState管理）
│   ├── App_Part3.jsx        # Part3用（コンポーネント分割）
│   ├── App_Part4.jsx        # Part4用（useEffect/useRef）
│   ├── App_Part5.jsx        # Part5用（履歴機能）
│   ├── app/
│   │   └── store.js         # Reduxストア設定
│   ├── features/
│   │   └── gameSlice.js     # Reduxスライス（状態・アクション・リデューサー）
│   └── components/
│       ├── Header.jsx       # タイトルコンポーネント
│       ├── InputArea.jsx    # 入力エリアコンポーネント
│       ├── Result.jsx       # 結果表示コンポーネント
│       └── Result.css       # 結果表示用スタイル
├── package.json
└── README.md
```

## 🛠️ セットアップ

### 必要な環境
- Node.js 18以上
- npm または yarn

### インストール
```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 利用可能なスクリプト
```bash
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # 本番用ビルド
npm run preview  # ビルド結果のプレビュー
npm run lint     # ESLintによるコードチェック
```

## 📚 学習内容

### Part 0: 環境構築
- Node.js、npm、Viteのセットアップ
- Reactプロジェクトの初期化

### Part 1: Reactの基本
- コンポーネントとJSX
- useStateフック
- イベントハンドリング
- フォーム入力制御

### Part 2: ゲーム実装
- 数当てゲームのロジック
- 状態管理（useState）
- 条件分岐による表示切り替え

### Part 3: コンポーネント分割
- コンポーネントの分割と再利用
- Propsによる親子間データ受け渡し
- 関数の受け渡しによるイベント処理

### Part 4: 高度な機能
- useEffectフック（副作用処理）
- useRefフック（DOM要素へのアクセス）
- 条件付きスタイリング

### Part 5: 履歴機能
- 配列によるデータ管理
- リストレンダリング（map）
- 難易度設定機能

### Part 6: Redux Toolkit
- 状態管理の整理
- Redux Toolkitの導入
- ストア、スライス、リデューサーの概念
- useSelector、useDispatchの使用

## 🎯 主要機能

### ゲーム機能
- ✅ ランダムな正解数字の生成
- ✅ 入力値の判定とヒント表示
- ✅ 試行回数のカウント
- ✅ ゲーム終了判定
- ✅ リセット機能

### 難易度設定
- ✅ 最小値・最大値の変更
- ✅ 動的な範囲表示
- ✅ 設定に基づく正解生成

### 履歴機能
- ✅ プレイ履歴の記録
- ✅ 履歴の表示
- ✅ リセット時の履歴保持

### 状態管理
- ✅ useStateによる基本状態管理
- ✅ Redux Toolkitによる高度な状態管理
- ✅ コンポーネント間のデータ共有

## 🔧 開発者向け情報

### ファイル命名規則
- `App_PartX.jsx`: 各Partの学習用ファイル
- `components/`: 再利用可能なコンポーネント
- `features/`: Reduxスライス
- `app/`: Reduxストア設定

### コメント
- 各ファイルに詳細なコメントを追加
- 学習目的に合わせた説明
- 技術的な背景も含めて記載

## 📖 学習の進め方

1. **Part 0**: 環境構築から始める
2. **Part 1**: Reactの基本概念を理解
3. **Part 2**: 実際にゲームを作成
4. **Part 3**: コンポーネント分割を学習
5. **Part 4**: 高度なReact機能を体験
6. **Part 5**: 実用的な機能を追加
7. **Part 6**: Reduxによる状態管理を学習

各Partのファイルを確認しながら、段階的にReactの理解を深めることができます。