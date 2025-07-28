# Reactチュートリアル

## 目次

### 第1章：Reactの概要と導入
- [1-1. Reactとは何か？](#1-1-reactとは何か)
- [1-2. なぜReactを使うのか？](#1-2-なぜreactを使うのか)
- [1-3. Reactの開発環境](#1-3-reactの開発環境)
- [1-4. プロジェクトの作成と実行](#1-4-プロジェクトの作成と実行)
- [1-5. Reactの基本概念](#1-5-reactの基本概念)
- [1-6. 開発のベストプラクティス](#1-6-開発のベストプラクティス)
- [1-7. デバッグと開発者ツール](#1-7-デバッグと開発者ツール)
- [1-8. 次のステップ](#1-8-次のステップ)

### 第2章：JSXと基本構文
- [2-1. JSXの基本概念](#2-1-jsxの基本概念)
- [2-2. JSXの基本構文](#2-2-jsxの基本構文)
- [2-3. JavaScriptの式の埋め込み](#2-3-javascriptの式の埋め込み)
- [2-4. 条件分岐とレンダリング](#2-4-条件分岐とレンダリング)
- [2-5. ループ処理とリスト](#2-5-ループ処理とリスト)
- [2-6. イベントハンドリング](#2-6-イベントハンドリング)
- [2-7. フォーム処理](#2-7-フォーム処理)
- [2-8. スタイリング](#2-8-スタイリング)
- [2-9. パフォーマンス最適化](#2-9-パフォーマンス最適化)

### 第3章：コンポーネントの基礎
- [3-1. コンポーネントの基本概念](#3-1-コンポーネントの基本概念)
- [3-2. 関数コンポーネントとクラスコンポーネント](#3-2-関数コンポーネントとクラスコンポーネント)
- [3-3. Propsの詳細](#3-3-propsの詳細)
- [3-4. コンポーネントの設計パターン](#3-4-コンポーネントの設計パターン)
- [3-5. コンポーネントのライフサイクル](#3-5-コンポーネントのライフサイクル)
- [3-6. コンポーネントの最適化](#3-6-コンポーネントの最適化)
- [3-7. エラーハンドリング](#3-7-エラーハンドリング)
- [3-8. コンポーネントのテスト](#3-8-コンポーネントのテスト)
- [3-9. コンポーネントのベストプラクティス](#3-9-コンポーネントのベストプラクティス)

### 第4章：ステート管理の基本
- [4-1. ステート管理の基本概念](#4-1-ステート管理の基本概念)
- [4-2. useStateの詳細](#4-2-usestateの詳細)
- [4-3. 状態更新のパターン](#4-3-状態更新のパターン)
- [4-4. 複数のステートの管理](#4-4-複数のステートの管理)
- [4-5. カスタムフックによる状態管理](#4-5-カスタムフックによる状態管理)
- [4-6. パフォーマンス最適化](#4-6-パフォーマンス最適化)
- [4-7. デバッグと開発者ツール](#4-7-デバッグと開発者ツール)
- [4-8. ベストプラクティス](#4-8-ベストプラクティス)

### 第5章：副作用とライフサイクル
### 第6章：リストとフォーム
### 第7章：ルーティングの導入（React Router）
### 第8章：データの取得（API連携）
- [8-1. API連携の基本概念](#8-1-api連携の基本概念)
- [8-2. fetchを使ったAPI呼び出し](#8-2-fetchを使ったapi呼び出し)
- [8-3. axiosを使ったAPI呼び出し](#8-3-axiosを使ったapi呼び出し)
- [8-4. カスタムフックでのAPI管理](#8-4-カスタムフックでのapi管理)
- [8-5. エラーハンドリングとリトライ機能](#8-5-エラーハンドリングとリトライ機能)
- [8-6. キャッシュとパフォーマンス最適化](#8-6-キャッシュとパフォーマンス最適化)
- [8-7. 実践的な応用例](#8-7-実践的な応用例)
- [8-8. まとめ](#8-8-まとめ)
### 第9章：コンポーネントの再利用と設計
- [9-1. コンポーネントの分割と粒度](#9-1-コンポーネントの分割と粒度)
- [9-2. コンポーネントの設計パターン](#9-2-コンポーネントの設計パターン)
- [9-3. コンポーネントの再利用パターン](#9-3-コンポーネントの再利用パターン)
- [9-4. proptypesによりpropsの型チェック](#9-4-proptypesによるpropsの型チェック)
- [9-5. コンポーネント設計のベストプラクティス](#9-5-コンポーネント設計のベストプラクティス)
- [9-6. 実践的なコンポーネント設計例](#9-6-実践的なコンポーネント設計例)
### 第10章：状態管理の拡張（Context API・useReducer・Store）
- [10-1. 状態管理の基本概念1](#10-1-状態管理の基本概念1)
- [10-2. ContextAPIの実践的な使い方](#10-2-context-apiの実践的な使い方)
- [10-3. useReducerの詳細](#10-3-usereducerの詳細)
- [10-4. 実務での状態管理パターン](#10-4-実務での状態管理パターン)
- [10-5. 状態管理ライブラリの比較と選択基準](#10-5-状態管理ライブラリの比較と選択基準)
- [10-6. パフォーマンス最適化](#10-6-パフォーマンス最適化)
- [10-7. デバッグとテスト](#10-7-デバッグとテスト)
### 第11章：実践的なアプリケーション開発

---

## 第1章：Reactの概要と導入

### 1-1. Reactとは何か？

Reactは、Facebook（現Meta）が開発した「ユーザーインターフェースを作るためのJavaScriptライブラリ」です。2013年にオープンソースとして公開され、現在では世界中の開発者に広く使われています。

#### Reactの基本思想

Reactは以下の3つの基本思想に基づいて設計されています：

1. **宣言的UI（Declarative UI）**
   - 「何を表示したいか」を書くだけで、Reactが「どうやって表示するか」を自動で処理
   - 命令的（Imperative）なDOM操作から解放される

2. **コンポーネントベース**
   - UIを小さな部品（コンポーネント）に分割
   - 再利用可能で保守性の高いコードを書ける

3. **単一データフロー**
   - データは上から下に流れる
   - 予測可能でデバッグしやすい状態管理

#### Reactの特徴

```jsx
// 宣言的UIの例
function Welcome({ name }) {
  return <h1>こんにちは、{name}さん！</h1>;
}

// 従来の命令的アプローチ（jQueryなど）
// document.getElementById('welcome').innerHTML = 'こんにちは、' + name + 'さん！';
```

**主な特徴：**
- **仮想DOM**：実際のDOMを直接操作せず、仮想的なDOMで差分を計算
- **JSX**：JavaScript内でHTMLライクな構文を書ける
- **Hooks**：関数コンポーネントで状態管理やライフサイクルを扱える
- **豊富なエコシステム**：ルーティング、状態管理、UIライブラリなど

### 1-2. なぜReactを使うのか？

#### 企業がReactを採用する理由

**1. 開発効率の向上**
- コンポーネントの再利用により、開発時間を短縮
- 宣言的UIにより、コードが読みやすく保守しやすい

**2. パフォーマンスの最適化**
- 仮想DOMによる効率的な再レンダリング
- 必要な部分のみを更新

**3. 豊富なエコシステム**
- npmレジストリに多数のライブラリが存在
- コミュニティが活発で情報が豊富

**4. 学習コストの低さ**
- JavaScriptの知識があれば始めやすい
- 段階的に学習できる

#### 他のフレームワークとの比較

| フレームワーク | 特徴 | 学習コスト | エコシステム |
|----------------|------|------------|--------------|
| **React** | 柔軟性が高い、ライブラリ | 中 | 非常に豊富 |
| **Vue.js** | 学習しやすい、フレームワーク | 低 | 豊富 |
| **Angular** | 大規模向け、フルスタック | 高 | 豊富 |
| **Svelte** | 軽量、コンパイル時最適化 | 中 | 発展中 |

### 1-3. Reactの開発環境

#### Node.jsとnpmのインストール

**1. Node.jsのインストール**

Node.jsは、JavaScriptをサーバーサイドで実行できる環境です。Reactの開発には必須です。

```bash
# macOS（Homebrew使用）
brew install node

# Windows
# https://nodejs.org/ からLTS版をダウンロード

# Linux（Ubuntu）
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. バージョン確認**

```bash
node -v  # v18.17.0 など
npm -v   # 9.6.7 など
```

**3. パッケージマネージャーの選択**

```bash
# npm（Node.jsに標準搭載）
npm install package-name

# yarn（高速、セキュリティ重視）
npm install -g yarn
yarn add package-name

# pnpm（ディスク容量節約）
npm install -g pnpm
pnpm add package-name
```

#### 開発ツールのインストール

**1. コードエディタ**

```bash
# Visual Studio Code（推奨）
# https://code.visualstudio.com/ からダウンロード

# 推奨拡張機能
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
```

**2. ブラウザ拡張機能**

```bash
# React Developer Tools
# Chrome/Firefoxの拡張機能ストアからインストール
# コンポーネントの階層構造やprops、stateを確認可能
```

### 1-4. プロジェクトの作成と実行

#### create-react-appでの環境構築

**1. プロジェクトの作成**

```bash
# 基本的な作成方法
npx create-react-app my-app

# TypeScript版で作成
npx create-react-app my-app --template typescript

# 特定のバージョンで作成
npx create-react-app@5.0.1 my-app
```

**2. プロジェクト構造の理解**

```
my-app/
├── public/                 # 静的ファイル
│   ├── index.html         # メインのHTMLファイル
│   ├── favicon.ico        # ファビコン
│   └── manifest.json      # PWA設定
├── src/                   # ソースコード
│   ├── App.js            # メインコンポーネント
│   ├── index.js          # エントリーポイント
│   ├── App.css           # スタイル
│   └── logo.svg          # 画像ファイル
├── package.json          # 依存関係とスクリプト
├── README.md             # プロジェクト説明
└── .gitignore           # Git除外設定
```

**3. 開発サーバーの起動**

```bash
cd my-app
npm start
# http://localhost:3000 でアプリが起動
```

#### Viteを使った高速開発環境

**1. Viteプロジェクトの作成**

```bash
# ViteでReactプロジェクトを作成
npm create vite@latest my-app -- --template react

# TypeScript版
npm create vite@latest my-app -- --template react-ts
```

**2. Viteの利点**

- **高速な起動**：開発サーバーの起動が非常に速い
- **HMR（Hot Module Replacement）**：ファイル変更時の更新が高速
- **ビルド時間の短縮**：本番ビルドも高速

```bash
cd my-app
npm install
npm run dev  # 開発サーバー起動
npm run build  # 本番ビルド
```

### 1-5. Reactの基本概念

#### コンポーネントとは

コンポーネントは、UIの一部分を表す再利用可能なコードの塊です。

```jsx
// 関数コンポーネントの例
function Welcome() {
  return <h1>こんにちは！</h1>;
}

// 使用例
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

#### JSXとは

JSXは、JavaScript内でHTMLライクな構文を書ける拡張記法です。

```jsx
// JSXの例
const element = (
  <div className="container">
    <h1>タイトル</h1>
    <p>これは段落です</p>
  </div>
);

// コンパイル後（実際のJavaScript）
const element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'タイトル'),
  React.createElement('p', null, 'これは段落です')
);
```

#### 仮想DOMとは

仮想DOMは、実際のDOMの軽量なコピーです。

```jsx
// 仮想DOMの動作例
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす
      </button>
    </div>
  );
}

// カウントが1から2に変わった時：
// 1. 仮想DOMで差分を計算
// 2. 実際のDOMで必要な部分のみ更新
// 3. <p>タグの内容のみが更新される
```

### 1-6. 開発のベストプラクティス

#### プロジェクト構造の設計

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── common/         # 汎用的なコンポーネント
│   ├── forms/          # フォーム関連
│   └── layout/         # レイアウト関連
├── pages/              # ページコンポーネント
├── hooks/              # カスタムフック
├── utils/              # ユーティリティ関数
├── services/           # API通信
├── styles/             # スタイルファイル
└── assets/             # 画像やフォント
```

#### コーディング規約

**1. コンポーネント名**

```jsx
// ✅ 良い例：PascalCase
function UserProfile() { }
function TodoItem() { }

// ❌ 悪い例
function userProfile() { }
function todo_item() { }
```

**2. ファイル名**

```jsx
// ✅ 良い例
UserProfile.jsx
TodoItem.jsx
useAuth.js

// ❌ 悪い例
userProfile.jsx
todo_item.jsx
```

**3. インポート順序**

```jsx
// 1. React関連
import React, { useState, useEffect } from 'react';

// 2. 外部ライブラリ
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 3. 内部コンポーネント
import Header from './components/Header';
import Footer from './components/Footer';

// 4. ユーティリティ
import { formatDate } from '../utils/date';

// 5. スタイル
import './App.css';
```

#### 開発時の注意点

**1. キーの使用**

```jsx
// ✅ 良い例：一意なキーを使用
{todos.map(todo => (
  <TodoItem key={todo.id} todo={todo} />
))}

// ❌ 悪い例：インデックスをキーに使用
{todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
))}
```

**2. 副作用の管理**

```jsx
// ✅ 良い例：useEffectで副作用を管理
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };
  
  fetchData();
}, []);

// ❌ 悪い例：レンダリング中に副作用を実行
function Component() {
  fetch('/api/data').then(setData); // これは避ける
  return <div>...</div>;
}
```

### 1-7. デバッグと開発者ツール

#### React Developer Tools

**1. インストール**

```bash
# Chrome拡張機能
# https://chrome.google.com/webstore/detail/react-developer-tools

# Firefox拡張機能
# https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
```

**2. 使用方法**

```jsx
// コンポーネントの階層構造を確認
function App() {
  return (
    <div>
      <Header />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </div>
  );
}

// React Developer Toolsで以下が確認可能：
// - コンポーネントの階層
// - propsの値
// - stateの値
// - コンポーネントの再レンダリング
```

#### コンソールログの活用

```jsx
function UserProfile({ user }) {
  console.log('UserProfile rendered with:', user);
  
  useEffect(() => {
    console.log('UserProfile mounted');
    return () => console.log('UserProfile unmounted');
  }, []);
  
  return <div>{user.name}</div>;
}
```

#### エラーバウンダリー

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>エラーが発生しました</h1>;
    }
    
    return this.props.children;
  }
}

// 使用例
<ErrorBoundary>
  <UserProfile user={user} />
</ErrorBoundary>
```

### 1-8. 次のステップ

#### 学習の進め方

**1. 基礎固め（1-2週間）**
- JSXの基本構文
- コンポーネントの作成
- propsの受け渡し

**2. 状態管理（1-2週間）**
- useStateフック
- useEffectフック
- イベントハンドリング

**3. 実践的な開発（2-4週間）**
- フォーム処理
- API連携
- ルーティング

**4. 応用（継続的）**
- 状態管理ライブラリ
- パフォーマンス最適化
- テスト

#### 推奨リソース

**公式ドキュメント**
- [React公式チュートリアル](https://react.dev/learn)
- [React公式ドキュメント](https://react.dev/)

**学習サイト**
- [React Tutorial for Beginners](https://www.youtube.com/watch?v=bMknfKXIFA8)
- [React入門](https://ja.react.dev/learn)

**実践的なプロジェクト**
- TODOアプリ
- 天気予報アプリ
- ブログアプリ
- ショッピングカート

---

## 第2章：JSXと基本構文

### 2-1. JSXの基本概念

#### JSXとは何か？

JSX（JavaScript XML）は、JavaScript内でHTMLライクな構文を書ける拡張記法です。Reactでは、UIの構造を直感的に記述するために使用されます。

```jsx
// JSXの例
const element = <h1>Hello, world!</h1>;

// コンパイル後（実際のJavaScript）
const element = React.createElement('h1', null, 'Hello, world!');
```

#### JSXの利点

**1. 可読性の向上**
```jsx
// JSX（読みやすい）
const userCard = (
  <div className="user-card">
    <img src={user.avatar} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

// 従来のReact.createElement（読みにくい）
const userCard = React.createElement(
  'div',
  { className: 'user-card' },
  React.createElement('img', { src: user.avatar, alt: user.name }),
  React.createElement('h2', null, user.name),
  React.createElement('p', null, user.email)
);
```

**2. 開発効率の向上**
- HTMLの知識をそのまま活用できる
- エディタの補完機能が効く
- 構文エラーを早期に発見できる

### 2-2. JSXの基本構文

#### 要素の作成

```jsx
// 基本的な要素
const title = <h1>React入門</h1>;
const paragraph = <p>これは段落です</p>;
const link = <a href="https://react.dev">React公式サイト</a>;

// 複数の要素（Fragment使用）
const multipleElements = (
  <>
    <h1>タイトル</h1>
    <p>段落1</p>
    <p>段落2</p>
  </>
);
```

#### 属性の指定

```jsx
// HTML属性
const image = <img src="/logo.png" alt="ロゴ" />;
const input = <input type="text" placeholder="名前を入力" />;

// データ属性
const dataElement = <div data-testid="user-info">ユーザー情報</div>;

// カスタム属性
const customElement = <div customAttribute="value">カスタム要素</div>;
```

#### JSXの注意点

**1. 要素は1つの親タグで囲む**
```jsx
// ❌ 悪い例：複数の要素が並んでいる
function BadExample() {
  return (
    <h1>タイトル</h1>
    <p>段落</p>
  );
}

// ✅ 良い例：Fragmentで囲む
function GoodExample() {
  return (
    <>
      <h1>タイトル</h1>
      <p>段落</p>
    </>
  );
}

// ✅ 良い例：divで囲む
function GoodExample2() {
  return (
    <div>
      <h1>タイトル</h1>
      <p>段落</p>
    </div>
  );
}
```

**2. HTML属性名の違い**
```jsx
// HTML → JSX
// class → className
<div className="container">内容</div>

// for → htmlFor
<label htmlFor="name">名前</label>
<input id="name" type="text" />

// tabindex → tabIndex
<button tabIndex={0}>ボタン</button>

// readonly → readOnly
<input type="text" readOnly />

// maxlength → maxLength
<input type="text" maxLength={50} />
```

**3. スタイル属性**
```jsx
// インラインスタイルはオブジェクト形式
const style = {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '16px',
  padding: '10px'
};

const styledElement = <div style={style}>スタイル付き要素</div>;

// または直接記述
const inlineStyled = (
  <div style={{ 
    backgroundColor: 'red', 
    color: 'white' 
  }}>
    インラインスタイル
  </div>
);
```

### 2-3. JavaScriptの式の埋め込み

#### 基本的な式の埋め込み

```jsx
function UserGreeting({ user }) {
  const currentTime = new Date().toLocaleTimeString();
  const isMorning = new Date().getHours() < 12;
  
  return (
    <div>
      <h1>こんにちは、{user.name}さん！</h1>
      <p>現在時刻: {currentTime}</p>
      <p>{isMorning ? 'おはようございます' : 'こんにちは'}</p>
      <p>年齢: {2024 - user.birthYear}歳</p>
    </div>
  );
}
```

#### オブジェクトと配列の表示

```jsx
function UserProfile({ user }) {
  const userInfo = {
    name: user.name,
    email: user.email,
    role: user.role
  };
  
  const skills = ['JavaScript', 'React', 'Node.js'];
  
  return (
    <div>
      {/* オブジェクトの表示 */}
      <h2>ユーザー情報</h2>
      <ul>
        {Object.entries(userInfo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      
      {/* 配列の表示 */}
      <h3>スキル</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### 関数の呼び出し

```jsx
function UtilityFunctions() {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ja-JP');
  };
  
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };
  
  const items = [
    { name: '商品A', price: 1000 },
    { name: '商品B', price: 2000 }
  ];
  
  return (
    <div>
      <p>今日の日付: {formatDate(new Date())}</p>
      <p>合計金額: ¥{calculateTotal(items).toLocaleString()}</p>
    </div>
  );
}
```

### 2-4. 条件分岐とレンダリング

#### 三項演算子

```jsx
function ConditionalRendering({ user, isLoggedIn }) {
  return (
    <div>
      {/* 基本的な条件分岐 */}
      <h1>{isLoggedIn ? 'ようこそ！' : 'ログインしてください'}</h1>
      
      {/* 条件付きコンテンツ */}
      {isLoggedIn ? (
        <div>
          <p>こんにちは、{user.name}さん</p>
          <button>ログアウト</button>
        </div>
      ) : (
        <div>
          <p>ログインが必要です</p>
          <button>ログイン</button>
        </div>
      )}
    </div>
  );
}
```

#### 論理演算子（&&）

```jsx
function LogicalOperator({ user, showDetails }) {
  return (
    <div>
      {/* 条件が真の時のみ表示 */}
      {user && <p>ユーザー: {user.name}</p>}
      
      {/* 複数条件 */}
      {user && user.isAdmin && (
        <div>
          <h3>管理者メニュー</h3>
          <button>ユーザー管理</button>
          <button>設定</button>
        </div>
      )}
      
      {/* 詳細表示の切り替え */}
      {showDetails && (
        <div>
          <p>メール: {user.email}</p>
          <p>電話: {user.phone}</p>
        </div>
      )}
    </div>
  );
}
```

#### 複雑な条件分岐

```jsx
function ComplexConditional({ user, status, theme }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return theme === 'dark' ? '#4CAF50' : '#2E7D32';
      case 'inactive':
        return theme === 'dark' ? '#F44336' : '#C62828';
      case 'pending':
        return theme === 'dark' ? '#FF9800' : '#EF6C00';
      default:
        return '#757575';
    }
  };
  
  const getStatusText = (status) => {
    const statusMap = {
      active: 'アクティブ',
      inactive: '非アクティブ',
      pending: '保留中'
    };
    return statusMap[status] || '不明';
  };
  
  return (
    <div>
      {user ? (
        <div style={{ color: getStatusColor(status) }}>
          <h2>{user.name}</h2>
          <p>ステータス: {getStatusText(status)}</p>
          {status === 'active' && <p>最終ログイン: {user.lastLogin}</p>}
        </div>
      ) : (
        <p>ユーザーが見つかりません</p>
      )}
    </div>
  );
}
```

### 2-5. ループ処理とリスト

#### map関数によるリスト表示

```jsx
function TodoList({ todos }) {
  return (
    <div>
      <h2>タスク一覧</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### フィルタリングとソート

```jsx
function UserList({ users, filter, sortBy }) {
  // フィルタリング
  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'active') return user.status === 'active';
    if (filter === 'admin') return user.role === 'admin';
    return true;
  });
  
  // ソート
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'age') return a.age - b.age;
    if (sortBy === 'created') return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });
  
  return (
    <div>
      <h2>ユーザー一覧</h2>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
            <th>ステータス</th>
            <th>作成日</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <span className={`status-${user.status}`}>
                  {user.status}
                </span>
              </td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

#### グループ化とカテゴリ表示

```jsx
function ProductList({ products }) {
  // カテゴリごとにグループ化
  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
  
  return (
    <div>
      <h2>商品一覧</h2>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>¥{product.price.toLocaleString()}</p>
                <button>カートに追加</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 2-6. イベントハンドリング

#### 基本的なイベント処理

```jsx
function EventHandling() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };
  
  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = 'yellow';
  };
  
  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'white';
  };
  
  const handleInputChange = (event) => {
    console.log('入力値:', event.target.value);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('フォームが送信されました');
  };
  
  return (
    <div>
      <button onClick={handleClick}>クリック</button>
      
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '10px', border: '1px solid black' }}
      >
        マウスオーバーしてください
      </div>
      
      <input 
        type="text" 
        onChange={handleInputChange}
        placeholder="入力してください"
      />
      
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="フォーム入力" />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
```

#### パラメータ付きイベントハンドラー

```jsx
function ParameterizedEvents({ items }) {
  const handleItemClick = (itemId, itemName) => {
    console.log(`アイテム ${itemId}: ${itemName} がクリックされました`);
  };
  
  const handleDelete = (itemId) => {
    if (window.confirm('本当に削除しますか？')) {
      console.log(`アイテム ${itemId} を削除します`);
    }
  };
  
  return (
    <div>
      <h2>アイテム一覧</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span 
              onClick={() => handleItemClick(item.id, item.name)}
              style={{ cursor: 'pointer' }}
            >
              {item.name}
            </span>
            <button 
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: '10px' }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### イベントオブジェクトの活用

```jsx
function EventObjectHandling() {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enterキーが押されました');
    }
  };
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    console.log(`マウス位置: (${clientX}, ${clientY})`);
  };
  
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log(`スクロール位置: ${scrollPercentage.toFixed(1)}%`);
  };
  
  return (
    <div>
      <input 
        type="text" 
        onKeyPress={handleKeyPress}
        placeholder="Enterキーを押してください"
      />
      
      <div 
        onMouseMove={handleMouseMove}
        style={{ 
          height: '200px', 
          border: '1px solid black',
          margin: '10px 0'
        }}
      >
        マウスを動かしてください
      </div>
      
      <div 
        onScroll={handleScroll}
        style={{ 
          height: '100px', 
          overflow: 'auto',
          border: '1px solid black'
        }}
      >
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>スクロール可能なコンテンツ {i + 1}</p>
        ))}
      </div>
    </div>
  );
}
```

### 2-7. フォーム処理

#### 基本的なフォーム

```jsx
function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('送信データ:', formData);
    // APIにデータを送信する処理
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="message">メッセージ:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <button type="submit">送信</button>
    </form>
  );
}
```

#### 複雑なフォーム（バリデーション付き）

```jsx
function AdvancedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    interests: []
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (!value) return 'ユーザー名は必須です';
        if (value.length < 3) return 'ユーザー名は3文字以上で入力してください';
        return '';
      
      case 'email':
        if (!value) return 'メールアドレスは必須です';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return '有効なメールアドレスを入力してください';
        return '';
      
      case 'password':
        if (!value) return 'パスワードは必須です';
        if (value.length < 8) return 'パスワードは8文字以上で入力してください';
        return '';
      
      case 'confirmPassword':
        if (value !== formData.password) return 'パスワードが一致しません';
        return '';
      
      case 'age':
        if (value && (value < 0 || value > 120)) return '有効な年齢を入力してください';
        return '';
      
      default:
        return '';
    }
  };
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    let newValue = value;
    if (type === 'checkbox') {
      const currentInterests = formData.interests;
      newValue = checked
        ? [...currentInterests, value]
        : currentInterests.filter(interest => interest !== value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // バリデーション
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // 全フィールドのバリデーション
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('フォーム送信:', formData);
      // 送信処理
    }
  };
  
  const interests = ['プログラミング', 'デザイン', '音楽', 'スポーツ', '読書'];
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">ユーザー名:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && (
          <span style={{ color: 'red' }}>{errors.username}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span style={{ color: 'red' }}>{errors.email}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="password">パスワード:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span style={{ color: 'red' }}>{errors.password}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="confirmPassword">パスワード確認:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="age">年齢:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.age && errors.age && (
          <span style={{ color: 'red' }}>{errors.age}</span>
        )}
      </div>
      
      <div>
        <label>興味のある分野:</label>
        {interests.map(interest => (
          <label key={interest}>
            <input
              type="checkbox"
              name="interests"
              value={interest}
              checked={formData.interests.includes(interest)}
              onChange={handleChange}
            />
            {interest}
          </label>
        ))}
      </div>
      
      <button type="submit">登録</button>
    </form>
  );
}
```

### 2-8. スタイリング

#### インラインスタイル

```jsx
function InlineStyling() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };
  
  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3'
  };
  
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>
        インラインスタイルの例
      </h2>
      
      <button
        style={isHovered ? buttonHoverStyle : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ホバーしてください
      </button>
    </div>
  );
}
```

#### CSSクラスとモジュール

```jsx
// styles/Button.module.css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.button.primary {
  background-color: #28a745;
}

.button.primary:hover {
  background-color: #1e7e34;
}

.button.danger {
  background-color: #dc3545;
}

.button.danger:hover {
  background-color: #c82333;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ children, variant = 'default', ...props }) {
  const buttonClass = `${styles.button} ${styles[variant] || ''}`;
  
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

// 使用例
function ButtonExample() {
  return (
    <div>
      <Button>デフォルトボタン</Button>
      <Button variant="primary">プライマリボタン</Button>
      <Button variant="danger">削除ボタン</Button>
    </div>
  );
}
```

#### 条件付きスタイリング

```jsx
function ConditionalStyling({ status, isActive, theme }) {
  const getStatusStyle = (status) => {
    const baseStyle = {
      padding: '8px 16px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold'
    };
    
    switch (status) {
      case 'success':
        return {
          ...baseStyle,
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        };
      case 'error':
        return {
          ...baseStyle,
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        };
      case 'warning':
        return {
          ...baseStyle,
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeaa7'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          border: '1px solid #bee5eb'
        };
    }
  };
  
  const cardStyle = {
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    opacity: isActive ? 1 : 0.6,
    transition: 'all 0.3s ease'
  };
  
  return (
    <div style={cardStyle}>
      <div style={getStatusStyle(status)}>
        ステータス: {status}
      </div>
      <p>このカードは{isActive ? 'アクティブ' : '非アクティブ'}です</p>
    </div>
  );
}
```

### 2-9. パフォーマンス最適化

#### 不要な再レンダリングの防止

```jsx
import React, { memo, useMemo, useCallback } from 'react';

// メモ化されたコンポーネント
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  // 重い計算をメモ化
  const processedData = useMemo(() => {
    console.log('Processing data...');
    return data.map(item => ({
      ...item,
      processed: item.value * 2
    }));
  }, [data]);
  
  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>
          {item.name}: {item.processed}
        </div>
      ))}
      <button onClick={onUpdate}>更新</button>
    </div>
  );
});

// 親コンポーネント
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: 'アイテム1', value: 10 },
    { id: 2, name: 'アイテム2', value: 20 }
  ]);
  
  // 関数をメモ化
  const handleUpdate = useCallback(() => {
    console.log('Updating data...');
    setData(prev => prev.map(item => ({
      ...item,
      value: item.value + 1
    })));
  }, []);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        カウント増加
      </button>
      
      <ExpensiveComponent 
        data={data} 
        onUpdate={handleUpdate} 
      />
    </div>
  );
}
```

#### リストの最適化

```jsx
function OptimizedList({ items }) {
  // 仮想化されたリスト（大量のデータ用）
  const VirtualizedList = ({ items, itemHeight = 50, containerHeight = 400 }) => {
    const [scrollTop, setScrollTop] = useState(0);
    
    const visibleItems = useMemo(() => {
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(
        startIndex + Math.ceil(containerHeight / itemHeight),
        items.length
      );
      
      return items.slice(startIndex, endIndex).map((item, index) => ({
        ...item,
        index: startIndex + index
      }));
    }, [items, scrollTop, itemHeight, containerHeight]);
    
    const totalHeight = items.length * itemHeight;
    
    return (
      <div
        style={{ height: containerHeight, overflow: 'auto' }}
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          {visibleItems.map(item => (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: item.index * itemHeight,
                height: itemHeight,
                width: '100%',
                borderBottom: '1px solid #eee',
                padding: '10px'
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <h3>最適化されたリスト</h3>
      <VirtualizedList items={items} />
    </div>
  );
}
```

---

## 第3章：コンポーネントの基礎

### 3-1. コンポーネントの基本概念

#### コンポーネントとは何か？

コンポーネントは、UIの一部分を表す再利用可能なコードの塊です。Reactアプリケーションは、小さなコンポーネントを組み合わせて構築されます。

```jsx
// 基本的なコンポーネント
function Welcome() {
  return <h1>こんにちは！</h1>;
}

// 使用例
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

#### コンポーネントの利点

**1. 再利用性**
- 同じコンポーネントを複数の場所で使用できる
- コードの重複を避けられる

**2. 保守性**
- 小さな単位に分割することで、修正や機能追加が容易
- バグの特定と修正が簡単

**3. テストしやすさ**
- 個別のコンポーネントを独立してテストできる
- ユニットテストが書きやすい

**4. チーム開発**
- 複数の開発者が異なるコンポーネントを並行して開発可能
- 責任の分離が明確

### 3-2. 関数コンポーネントとクラスコンポーネント

#### 関数コンポーネント（現在主流）

関数コンポーネントは、JavaScriptの関数として定義されるコンポーネントです。現在のReact開発では主流となっています。

```jsx
// 基本的な関数コンポーネント
function Greeting() {
  return <h1>こんにちは！</h1>;
}

// アロー関数での定義
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};

// 暗黙的なreturn
const Greeting = () => <h1>こんにちは！</h1>;
```

#### クラスコンポーネント（レガシー）

クラスコンポーネントは、ES6のクラス構文を使用したコンポーネントです。現在は関数コンポーネントとHooksの組み合わせが推奨されています。

```jsx
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'こんにちは！'
    };
  }
  
  render() {
    return <h1>{this.state.message}</h1>;
  }
}
```

#### 関数コンポーネント vs クラスコンポーネント

| 特徴 | 関数コンポーネント | クラスコンポーネント |
|------|-------------------|---------------------|
| **構文** | シンプル | 複雑 |
| **学習コスト** | 低い | 高い |
| **バンドルサイズ** | 小さい | 大きい |
| **Hooks対応** | 完全対応 | 部分的対応 |
| **パフォーマンス** | 最適化されている | 従来の最適化 |
| **将来性** | 推奨 | レガシー |

### 3-3. Propsの詳細

#### Propsの基本

Propsは、親コンポーネントから子コンポーネントにデータを渡すための仕組みです。

```jsx
// 親コンポーネント
function ParentComponent() {
  const user = {
    name: '田中太郎',
    age: 25,
    email: 'tanaka@example.com'
  };
  
  return (
    <div>
      <UserProfile user={user} />
      <UserCard name="佐藤花子" age={30} />
    </div>
  );
}

// 子コンポーネント
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>年齢: {user.age}歳</p>
      <p>メール: {user.email}</p>
    </div>
  );
}

function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>年齢: {age}歳</p>
    </div>
  );
}
```

#### Propsの分割代入

```jsx
// 基本的な分割代入
function Welcome({ name, age, city }) {
  return (
    <div>
      <h1>こんにちは、{name}さん！</h1>
      <p>年齢: {age}歳</p>
      <p>居住地: {city}</p>
    </div>
  );
}

// デフォルト値の設定
function Button({ 
  text = 'ボタン', 
  onClick, 
  disabled = false,
  variant = 'primary' 
}) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
}

// 残りのpropsを展開
function Card({ title, children, ...restProps }) {
  return (
    <div className="card" {...restProps}>
      <h3>{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
```

#### Propsの型チェック（PropTypes）

```jsx
import PropTypes from 'prop-types';

function UserProfile({ user, showEmail, onEdit }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>年齢: {user.age}歳</p>
      {showEmail && <p>メール: {user.email}</p>}
      <button onClick={onEdit}>編集</button>
    </div>
  );
}

// PropTypesによる型チェック
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string
  }).isRequired,
  showEmail: PropTypes.bool,
  onEdit: PropTypes.func
};

// デフォルト値
UserProfile.defaultProps = {
  showEmail: false,
  onEdit: () => {}
};
```

#### 条件付きProps

```jsx
function ConditionalProps({ user, isAdmin, theme }) {
  const cardStyle = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333'
  };
  
  return (
    <div style={cardStyle}>
      <h2>{user.name}</h2>
      <p>年齢: {user.age}歳</p>
      
      {/* 条件付きで表示 */}
      {isAdmin && (
        <div>
          <p>管理者権限</p>
          <button>ユーザー管理</button>
        </div>
      )}
      
      {/* 条件付きでpropsを渡す */}
      <UserActions 
        user={user}
        {...(isAdmin && { canDelete: true })}
        {...(theme === 'dark' && { darkMode: true })}
      />
    </div>
  );
}
```

### 3-4. コンポーネントの設計パターン

#### Presentational Component（表示コンポーネント）

表示コンポーネントは、UIの表示のみを担当し、ビジネスロジックを持たないコンポーネントです。

```jsx
// 表示コンポーネントの例
function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="actions">
        <button onClick={() => onEdit(user.id)}>編集</button>
        <button onClick={() => onDelete(user.id)}>削除</button>
      </div>
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}
```

#### Container Component（コンテナコンポーネント）

コンテナコンポーネントは、データの取得や状態管理を担当し、表示コンポーネントにデータを渡します。

```jsx
// コンテナコンポーネントの例
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (userId) => {
    // 編集処理
    console.log('編集:', userId);
  };
  
  const handleDelete = async (userId) => {
    try {
      await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      console.error('削除エラー:', err);
    }
  };
  
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
```

#### Higher-Order Component（HOC）

HOCは、コンポーネントを受け取って新しいコンポーネントを返す関数です。

```jsx
// ローディング状態を管理するHOC
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ loading, ...props }) {
    if (loading) {
      return <div>読み込み中...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// エラーハンドリングを追加するHOC
function withErrorHandling(WrappedComponent) {
  return function WithErrorHandlingComponent({ error, ...props }) {
    if (error) {
      return <div>エラー: {error}</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// 使用例
const UserListWithLoading = withLoading(UserList);
const UserListWithError = withErrorHandling(UserListWithLoading);

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  return (
    <UserListWithError
      loading={loading}
      error={error}
    />
  );
}
```

#### Render Props パターン

Render Propsは、コンポーネントの子要素として関数を渡すパターンです。

```jsx
// データフェッチング用のRender Propsコンポーネント
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, [url]);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return children({ data, loading, error, refetch: fetchData });
}

// 使用例
function UserList() {
  return (
    <DataFetcher url="/api/users">
      {({ data, loading, error, refetch }) => {
        if (loading) return <div>読み込み中...</div>;
        if (error) return <div>エラー: {error}</div>;
        
        return (
          <div>
            <button onClick={refetch}>再読み込み</button>
            {data.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        );
      }}
    </DataFetcher>
  );
}
```

### 3-5. コンポーネントのライフサイクル

#### 関数コンポーネントのライフサイクル（Hooks）

```jsx
import { useState, useEffect, useRef } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const intervalRef = useRef(null);
  
  // マウント時のみ実行
  useEffect(() => {
    console.log('コンポーネントがマウントされました');
    
    // クリーンアップ関数
    return () => {
      console.log('コンポーネントがアンマウントされます');
    };
  }, []);
  
  // countが変更されるたびに実行
  useEffect(() => {
    console.log('countが変更されました:', count);
  }, [count]);
  
  // データフェッチング
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // タイマーの設定
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <h2>カウント: {count}</h2>
      {data && <p>データ: {JSON.stringify(data)}</p>}
      <button onClick={() => setCount(count + 1)}>
        手動で増加
      </button>
    </div>
  );
}
```

#### カスタムフックでのライフサイクル管理

```jsx
// データフェッチング用のカスタムフック
function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  const refetch = () => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };
  
  return { data, loading, error, refetch };
}

// 使用例
function UserList() {
  const { data: users, loading, error, refetch } = useDataFetching('/api/users');
  
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  
  return (
    <div>
      <button onClick={refetch}>再読み込み</button>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### 3-6. コンポーネントの最適化

#### React.memoによるメモ化

```jsx
import React, { memo } from 'react';

// メモ化されたコンポーネント
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name}: {item.value}
        </div>
      ))}
      <button onClick={onUpdate}>更新</button>
    </div>
  );
});

// カスタム比較関数
const UserCard = memo(({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>編集</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // カスタム比較ロジック
  return (
    prevProps.user.id === nextProps.user.id &&
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.email === nextProps.user.email
  );
});
```

#### useMemoとuseCallbackの活用

```jsx
import React, { useState, useMemo, useCallback } from 'react';

function OptimizedComponent({ users, filterText }) {
  const [selectedUser, setSelectedUser] = useState(null);
  
  // 重い計算をメモ化
  const filteredUsers = useMemo(() => {
    console.log('フィルタリング実行');
    return users.filter(user => 
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [users, filterText]);
  
  // 関数をメモ化
  const handleUserSelect = useCallback((userId) => {
    setSelectedUser(users.find(user => user.id === userId));
  }, [users]);
  
  // ソートされたユーザーリスト
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredUsers]);
  
  return (
    <div>
      <h2>ユーザー一覧</h2>
      <ul>
        {sortedUsers.map(user => (
          <li 
            key={user.id}
            onClick={() => handleUserSelect(user.id)}
            style={{ 
              cursor: 'pointer',
              backgroundColor: selectedUser?.id === user.id ? '#f0f0f0' : 'white'
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      
      {selectedUser && (
        <div>
          <h3>選択されたユーザー</h3>
          <p>名前: {selectedUser.name}</p>
          <p>メール: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
}
```

### 3-7. エラーハンドリング

#### エラーバウンダリー

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // エラーログの送信
    console.error('Error caught by boundary:', error, errorInfo);
    
    // 外部のエラー監視サービスに送信
    // logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>エラーが発生しました</h2>
          <p>申し訳ございませんが、問題が発生しました。</p>
          <button onClick={() => window.location.reload()}>
            ページを再読み込み
          </button>
          
          {process.env.NODE_ENV === 'development' && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>エラー詳細</summary>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }
    
    return this.props.children;
  }
}

// 使用例
function App() {
  return (
    <ErrorBoundary>
      <UserList />
    </ErrorBoundary>
  );
}
```

#### 関数コンポーネントでのエラーハンドリング

```jsx
import { useState, useEffect } from 'react';

function useErrorHandler() {
  const [error, setError] = useState(null);
  
  const handleError = (error) => {
    console.error('Error caught:', error);
    setError(error);
  };
  
  const clearError = () => {
    setError(null);
  };
  
  return { error, handleError, clearError };
}

function UserListWithErrorHandling() {
  const { error, handleError, clearError } = useErrorHandler();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, [handleError]);
  
  if (error) {
    return (
      <div className="error-container">
        <h2>エラーが発生しました</h2>
        <p>{error.message}</p>
        <button onClick={clearError}>再試行</button>
      </div>
    );
  }
  
  if (loading) {
    return <div>読み込み中...</div>;
  }
  
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### 3-8. コンポーネントのテスト

#### 基本的なテスト

```jsx
// UserCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com'
  };
  
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('ユーザー情報が正しく表示される', () => {
    render(
      <UserCard 
        user={mockUser} 
        onEdit={mockOnEdit} 
        onDelete={mockOnDelete} 
      />
    );
    
    expect(screen.getByText('田中太郎')).toBeInTheDocument();
    expect(screen.getByText('tanaka@example.com')).toBeInTheDocument();
  });
  
  test('編集ボタンがクリックされた時にonEditが呼ばれる', () => {
    render(
      <UserCard 
        user={mockUser} 
        onEdit={mockOnEdit} 
        onDelete={mockOnDelete} 
      />
    );
    
    const editButton = screen.getByText('編集');
    fireEvent.click(editButton);
    
    expect(mockOnEdit).toHaveBeenCalledWith(1);
  });
  
  test('削除ボタンがクリックされた時にonDeleteが呼ばれる', () => {
    render(
      <UserCard 
        user={mockUser} 
        onEdit={mockOnEdit} 
        onDelete={mockOnDelete} 
      />
    );
    
    const deleteButton = screen.getByText('削除');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
```

#### カスタムフックのテスト

```jsx
// useDataFetching.test.js
import { renderHook, waitFor } from '@testing-library/react';
import { useDataFetching } from './useDataFetching';

// fetchのモック
global.fetch = jest.fn();

describe('useDataFetching', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  
  test('データの取得に成功する', async () => {
    const mockData = [{ id: 1, name: 'テスト' }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });
    
    const { result } = renderHook(() => useDataFetching('/api/test'));
    
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });
  
  test('データの取得に失敗する', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));
    
    const { result } = renderHook(() => useDataFetching('/api/test'));
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.error).toBe('Network error');
    expect(result.current.data).toBe(null);
  });
});
```

#### 統合テスト

```jsx
// UserList.integration.test.jsx
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import UserList from './UserList';

// APIのモック
jest.mock('./api', () => ({
  fetchUsers: jest.fn()
}));

import { fetchUsers } from './api';

describe('UserList Integration', () => {
  const mockUsers = [
    { id: 1, name: '田中太郎', email: 'tanaka@example.com' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com' }
  ];
  
  beforeEach(() => {
    fetchUsers.mockClear();
  });
  
  test('ユーザーリストが正しく表示される', async () => {
    fetchUsers.mockResolvedValue(mockUsers);
    
    render(<UserList />);
    
    expect(screen.getByText('読み込み中...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('田中太郎')).toBeInTheDocument();
      expect(screen.getByText('佐藤花子')).toBeInTheDocument();
    });
  });
  
  test('エラー時にエラーメッセージが表示される', async () => {
    fetchUsers.mockRejectedValue(new Error('API Error'));
    
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('エラー: API Error')).toBeInTheDocument();
    });
  });
});
```

### 3-9. コンポーネントのベストプラクティス

#### 命名規則

```jsx
// ✅ 良い例：PascalCaseでコンポーネント名
function UserProfile() { }
function TodoItem() { }
function NavigationBar() { }

// ❌ 悪い例
function userProfile() { }
function todo_item() { }
function navBar() { }

// ✅ 良い例：ファイル名もPascalCase
// UserProfile.jsx
// TodoItem.jsx
// NavigationBar.jsx
```

#### 単一責任の原則

```jsx
// ✅ 良い例：1つの責任を持つコンポーネント
function UserAvatar({ user }) {
  return <img src={user.avatar} alt={user.name} />;
}

function UserName({ user }) {
  return <h3>{user.name}</h3>;
}

function UserEmail({ user }) {
  return <p>{user.email}</p>;
}

function UserCard({ user }) {
  return (
    <div className="user-card">
      <UserAvatar user={user} />
      <UserName user={user} />
      <UserEmail user={user} />
    </div>
  );
}

// ❌ 悪い例：複数の責任を持つコンポーネント
function UserCard({ user, onEdit, onDelete, onShare }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>編集</button>
      <button onClick={() => onDelete(user.id)}>削除</button>
      <button onClick={() => onShare(user.id)}>共有</button>
    </div>
  );
}
```

#### Propsの設計

```jsx
// ✅ 良い例：明確で型安全なprops
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  ...restProps 
}) {
  const buttonClass = `btn btn-${variant} btn-${size}`;
  
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}

// 使用例
<Button variant="danger" size="large" onClick={handleDelete}>
  削除
</Button>

// ❌ 悪い例：曖昧なprops
function Button({ 
  text, 
  style, 
  className, 
  onClick, 
  disabled 
}) {
  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
```

#### パフォーマンスの考慮

```jsx
// ✅ 良い例：メモ化とコールバックの最適化
import React, { memo, useCallback } from 'react';

const UserCard = memo(({ user, onEdit, onDelete }) => {
  const handleEdit = useCallback(() => {
    onEdit(user.id);
  }, [user.id, onEdit]);
  
  const handleDelete = useCallback(() => {
    onDelete(user.id);
  }, [user.id, onDelete]);
  
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={handleEdit}>編集</button>
      <button onClick={handleDelete}>削除</button>
    </div>
  );
});

// ❌ 悪い例：毎回新しい関数が作成される
function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>編集</button>
      <button onClick={() => onDelete(user.id)}>削除</button>
    </div>
  );
}
```

---

## 第4章：ステート管理の基本

### 4-1. ステート管理の基本概念

#### ステートとは何か？

ステート（state）は、コンポーネントが持つ「変化する値」のことです。ユーザーの操作や時間の経過によって変化するデータを管理するために使用されます。

```jsx
// ステートの例
function UserProfile() {
  const [name, setName] = useState('田中太郎');
  const [age, setAge] = useState(25);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      <h2>{name}</h2>
      <p>年齢: {age}歳</p>
      <p>ステータス: {isLoggedIn ? 'ログイン中' : 'ログアウト'}</p>
      <p>タスク数: {todos.length}個</p>
    </div>
  );
}
```

#### ステートの特徴

**1. イミュータブル（不変性）**
- ステートは直接変更せず、更新関数を使って変更する
- これにより、Reactが変更を検知して再レンダリングできる

**2. 非同期更新**
- ステートの更新は非同期で行われる
- 複数の更新がバッチ処理される

**3. コンポーネント固有**
- 各コンポーネントは独自のステートを持つ
- 親子間でステートは共有されない

### 4-2. `useState`の詳細

#### 基本的な使い方

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <h2>カウンター</h2>
      <p>現在の値: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
```

#### 初期値の設定

```jsx
// プリミティブ値
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [isActive, setIsActive] = useState(false);

// オブジェクト
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// 配列
const [items, setItems] = useState([]);
const [numbers, setNumbers] = useState([1, 2, 3]);

// 関数による初期値（遅延初期化）
const [expensiveValue, setExpensiveValue] = useState(() => {
  // 重い計算を初期化時のみ実行
  return calculateExpensiveValue();
});
```

#### 関数による初期化

```jsx
function TodoList() {
  // ローカルストレージから初期値を取得
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // 複雑な初期化処理
  const [config, setConfig] = useState(() => {
    const defaultConfig = {
      theme: 'light',
      language: 'ja',
      notifications: true
    };
    
    // ユーザー設定があれば読み込み
    const userConfig = localStorage.getItem('userConfig');
    if (userConfig) {
      return { ...defaultConfig, ...JSON.parse(userConfig) };
    }
    
    return defaultConfig;
  });
  
  return (
    <div>
      <h2>タスク一覧</h2>
      <p>タスク数: {todos.length}</p>
      <p>テーマ: {config.theme}</p>
    </div>
  );
}
```

### 4-3. 状態更新のパターン

#### 基本的な更新

```jsx
function BasicUpdates() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  
  // プリミティブ値の更新
  const increment = () => setCount(count + 1);
  const updateName = (newName) => setName(newName);
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>増加</button>
      
      <input 
        value={name} 
        onChange={(e) => updateName(e.target.value)}
        placeholder="名前を入力"
      />
      
      <button onClick={toggleVisibility}>
        {isVisible ? '非表示' : '表示'}
      </button>
      
      {isVisible && <p>このテキストは表示されています</p>}
    </div>
  );
}
```

#### 関数による更新

```jsx
function FunctionalUpdates() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 関数による更新（推奨）
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const incrementBy = (amount) => {
    setCount(prevCount => prevCount + amount);
  };
  
  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };
  
  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const updateItem = (itemId, updates) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, ...updates } : item
      )
    );
  };
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => incrementBy(5)}>+5</button>
      
      <h3>アイテム一覧</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### オブジェクトの更新

```jsx
function ObjectUpdates() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0,
    preferences: {
      theme: 'light',
      notifications: true
    }
  });
  
  // オブジェクトの更新（スプレッド演算子使用）
  const updateName = (name) => {
    setUser(prevUser => ({
      ...prevUser,
      name
    }));
  };
  
  const updateEmail = (email) => {
    setUser(prevUser => ({
      ...prevUser,
      email
    }));
  };
  
  // ネストしたオブジェクトの更新
  const updateTheme = (theme) => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        theme
      }
    }));
  };
  
  const toggleNotifications = () => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        notifications: !prevUser.preferences.notifications
      }
    }));
  };
  
  return (
    <div>
      <h2>ユーザー設定</h2>
      
      <div>
        <label>名前:</label>
        <input
          value={user.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      
      <div>
        <label>メール:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </div>
      
      <div>
        <label>テーマ:</label>
        <select 
          value={user.preferences.theme}
          onChange={(e) => updateTheme(e.target.value)}
        >
          <option value="light">ライト</option>
          <option value="dark">ダーク</option>
        </select>
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            checked={user.preferences.notifications}
            onChange={toggleNotifications}
          />
          通知を有効にする
        </label>
      </div>
      
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
```

#### 配列の更新

```jsx
function ArrayUpdates() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  // 配列に要素を追加
  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      };
      
      setTodos(prevTodos => [...prevTodos, todo]);
      setNewTodo('');
    }
  };
  
  // 配列から要素を削除
  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  
  // 配列の要素を更新
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // 配列の要素を並び替え
  const moveTodo = (fromIndex, toIndex) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      const [movedTodo] = newTodos.splice(fromIndex, 1);
      newTodos.splice(toIndex, 0, movedTodo);
      return newTodos;
    });
  };
  
  return (
    <div>
      <h2>TODOリスト</h2>
      
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="新しいタスクを入力"
        />
        <button onClick={addTodo}>追加</button>
      </div>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>削除</button>
            {index > 0 && (
              <button onClick={() => moveTodo(index, index - 1)}>↑</button>
            )}
            {index < todos.length - 1 && (
              <button onClick={() => moveTodo(index, index + 1)}>↓</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 4-4. 複数のステートの管理

#### 個別のステート

```jsx
function IndividualStates() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // バリデーション
      const newErrors = {};
      if (!name) newErrors.name = '名前は必須です';
      if (!email) newErrors.email = 'メールアドレスは必須です';
      if (age < 0) newErrors.age = '年齢は0以上で入力してください';
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      
      // 送信処理
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, age })
      });
      
      // 成功時の処理
      setName('');
      setEmail('');
      setAge(0);
      alert('送信完了！');
      
    } catch (error) {
      setErrors({ submit: '送信に失敗しました' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      
      <div>
        <label>メール:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      
      <div>
        <label>年齢:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
      </div>
      
      {errors.submit && (
        <div style={{ color: 'red' }}>{errors.submit}</div>
      )}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
  );
}
```

#### オブジェクトによる統合

```jsx
function UnifiedState() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    errors: {}
  });
  
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const setError = (field, message) => {
    setFormState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [field]: message
      }
    }));
  };
  
  const clearErrors = () => {
    setFormState(prev => ({
      ...prev,
      errors: {}
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    clearErrors();
    
    try {
      // バリデーション
      const newErrors = {};
      if (!formData.name) newErrors.name = '名前は必須です';
      if (!formData.email) newErrors.email = 'メールアドレスは必須です';
      if (formData.age < 0) newErrors.age = '年齢は0以上で入力してください';
      
      if (Object.keys(newErrors).length > 0) {
        setFormState(prev => ({
          ...prev,
          errors: newErrors
        }));
        return;
      }
      
      // 送信処理
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // 成功時の処理
      setFormData({ name: '', email: '', age: 0 });
      alert('送信完了！');
      
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        errors: { submit: '送信に失敗しました' }
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前:</label>
        <input
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
        {formState.errors.name && (
          <span style={{ color: 'red' }}>{formState.errors.name}</span>
        )}
      </div>
      
      <div>
        <label>メール:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
        {formState.errors.email && (
          <span style={{ color: 'red' }}>{formState.errors.email}</span>
        )}
      </div>
      
      <div>
        <label>年齢:</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => updateField('age', Number(e.target.value))}
        />
        {formState.errors.age && (
          <span style={{ color: 'red' }}>{formState.errors.age}</span>
        )}
      </div>
      
      {formState.errors.submit && (
        <div style={{ color: 'red' }}>{formState.errors.submit}</div>
      )}
      
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
  );
}
```

### 4-5. カスタムフックによる状態管理

#### 基本的なカスタムフック

```jsx
// hooks/useCounter.js
import { useState, useCallback } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);
  
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  
  const setValue = useCallback((value) => {
    setCount(value);
  }, []);
  
  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}

// 使用例
function CounterWithHook() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <h2>カウンター: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
```

#### フォーム管理用のカスタムフック

```jsx
// hooks/useForm.js
import { useState, useCallback } from 'react';

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = useCallback((field, value) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
    
    // エラーをクリア
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [errors]);
  
  const setError = useCallback((field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: message
    }));
  }, []);
  
  const setErrors = useCallback((newErrors) => {
    setErrors(newErrors);
  }, []);
  
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  const handleSubmit = useCallback(async (submitFunction) => {
    setIsSubmitting(true);
    setErrors({});
    
    try {
      await submitFunction(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values]);
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    setError,
    setErrors,
    reset,
    handleSubmit
  };
}

// 使用例
function UserForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    setError,
    handleSubmit
  } = useForm({
    name: '',
    email: '',
    age: 0
  });
  
  const onSubmit = async (formData) => {
    // バリデーション
    if (!formData.name) {
      setError('name', '名前は必須です');
      return;
    }
    if (!formData.email) {
      setError('email', 'メールアドレスは必須です');
      return;
    }
    
    // 送信処理
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    alert('送信完了！');
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(onSubmit);
    }}>
      <div>
        <label>名前:</label>
        <input
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      
      <div>
        <label>メール:</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      
      <div>
        <label>年齢:</label>
        <input
          type="number"
          value={values.age}
          onChange={(e) => handleChange('age', Number(e.target.value))}
        />
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
  );
}
```

### 4-6. パフォーマンス最適化

#### 不要な再レンダリングの防止

```jsx
import React, { memo, useCallback, useMemo } from 'react';

// メモ化されたコンポーネント
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  // 重い計算をメモ化
  const processedData = useMemo(() => {
    console.log('Processing data...');
    return data.map(item => ({
      ...item,
      processed: item.value * 2
    }));
  }, [data]);
  
  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>
          {item.name}: {item.processed}
        </div>
      ))}
      <button onClick={onUpdate}>更新</button>
    </div>
  );
});

// 親コンポーネント
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: 'アイテム1', value: 10 },
    { id: 2, name: 'アイテム2', value: 20 }
  ]);
  
  // 関数をメモ化
  const handleUpdate = useCallback(() => {
    console.log('Updating data...');
    setData(prev => prev.map(item => ({
      ...item,
      value: item.value + 1
    })));
  }, []);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        カウント増加
      </button>
      
      <ExpensiveComponent 
        data={data} 
        onUpdate={handleUpdate} 
      />
    </div>
  );
}
```

#### 状態の正規化

```jsx
function NormalizedState() {
  // ❌ 悪い例：ネストしたデータ
  const [badState, setBadState] = useState({
    posts: [
      {
        id: 1,
        title: '投稿1',
        author: {
          id: 1,
          name: '田中',
          email: 'tanaka@example.com'
        },
        comments: [
          {
            id: 1,
            text: 'コメント1',
            user: {
              id: 2,
              name: '佐藤'
            }
          }
        ]
      }
    ]
  });
  
  // ✅ 良い例：正規化されたデータ
  const [normalizedState, setNormalizedState] = useState({
    posts: {
      byId: {
        1: { id: 1, title: '投稿1', authorId: 1, commentIds: [1] }
      },
      allIds: [1]
    },
    users: {
      byId: {
        1: { id: 1, name: '田中', email: 'tanaka@example.com' },
        2: { id: 2, name: '佐藤' }
      },
      allIds: [1, 2]
    },
    comments: {
      byId: {
        1: { id: 1, text: 'コメント1', userId: 2, postId: 1 }
      },
      allIds: [1]
    }
  });
  
  // セレクター関数
  const selectPost = (state, postId) => {
    const post = state.posts.byId[postId];
    if (!post) return null;
    
    return {
      ...post,
      author: state.users.byId[post.authorId],
      comments: post.commentIds.map(id => ({
        ...state.comments.byId[id],
        user: state.users.byId[state.comments.byId[id].userId]
      }))
    };
  };
  
  const post = selectPost(normalizedState, 1);
  
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>著者: {post?.author?.name}</p>
      <h3>コメント</h3>
      {post?.comments?.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <small>by {comment.user.name}</small>
        </div>
      ))}
    </div>
  );
}
```

### 4-7. デバッグと開発者ツール

#### ステートの可視化

```jsx
function StateDebugger({ state, label = 'State' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px', 
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '▼' : '▶'} {label}
      </button>
      
      {isExpanded && (
        <pre style={{ 
          fontSize: '12px', 
          overflow: 'auto',
          maxHeight: '200px'
        }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      )}
    </div>
  );
}

// 使用例
function DebugExample() {
  const [user, setUser] = useState({
    name: '田中太郎',
    age: 25,
    preferences: {
      theme: 'light',
      notifications: true
    }
  });
  
  const [todos, setTodos] = useState([
    { id: 1, text: '買い物', completed: false },
    { id: 2, text: '掃除', completed: true }
  ]);
  
  return (
    <div>
      <h2>デバッグ例</h2>
      
      <StateDebugger state={user} label="User State" />
      <StateDebugger state={todos} label="Todos State" />
      
      <button onClick={() => setUser(prev => ({ ...prev, age: prev.age + 1 }))}>
        年齢を増加
      </button>
      
      <button onClick={() => setTodos(prev => [...prev, { 
        id: Date.now(), 
        text: '新しいタスク', 
        completed: false 
      }])}>
        タスクを追加
      </button>
    </div>
  );
}
```

#### ステート変更の追跡

```jsx
function useStateLogger(initialState, label = 'State') {
  const [state, setState] = useState(initialState);
  
  const setStateWithLogging = useCallback((newState) => {
    console.group(`${label} Update`);
    console.log('Previous State:', state);
    console.log('New State:', newState);
    console.log('Update Type:', typeof newState === 'function' ? 'Function' : 'Value');
    console.groupEnd();
    
    setState(newState);
  }, [state, label]);
  
  return [state, setStateWithLogging];
}

// 使用例
function StateLoggerExample() {
  const [count, setCount] = useStateLogger(0, 'Counter');
  const [user, setUser] = useStateLogger({
    name: '',
    email: ''
  }, 'User');
  
  const increment = () => setCount(prev => prev + 1);
  const updateName = (name) => setUser(prev => ({ ...prev, name }));
  
  return (
    <div>
      <h2>ステートロガー例</h2>
      
      <div>
        <p>カウント: {count}</p>
        <button onClick={increment}>増加</button>
      </div>
      
      <div>
        <input
          value={user.name}
          onChange={(e) => updateName(e.target.value)}
          placeholder="名前を入力"
        />
        <p>名前: {user.name}</p>
      </div>
    </div>
  );
}
```

### 4-8. ベストプラクティス

#### ステート設計の原則

```jsx
// ✅ 良い例：最小限のステート
function GoodStateDesign() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // フィルタリングされたtodosは計算で求める
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
  
  // 完了済みの数も計算で求める
  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length;
  }, [todos]);
  
  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('active')}>未完了</button>
        <button onClick={() => setFilter('completed')}>完了済み</button>
      </div>
      
      <p>完了済み: {completedCount}/{todos.length}</p>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// ❌ 悪い例：冗長なステート
function BadStateDesign() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  
  // ステートの同期が複雑になる
  useEffect(() => {
    const filtered = todos.filter(todo => todo.completed);
    setFilteredTodos(filtered);
    setCompletedCount(filtered.length);
    setActiveCount(todos.length - filtered.length);
  }, [todos]);
  
  return (
    <div>
      <p>完了済み: {completedCount}/{todos.length}</p>
      <p>未完了: {activeCount}</p>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### ステート更新のパターン

```jsx
// ✅ 良い例：関数による更新
function GoodUpdatePatterns() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 関数による更新（推奨）
  const increment = () => setCount(prev => prev + 1);
  const addItem = (newItem) => setItems(prev => [...prev, newItem]);
  const removeItem = (id) => setItems(prev => prev.filter(item => item.id !== id));
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>増加</button>
      
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ❌ 悪い例：直接的な更新
function BadUpdatePatterns() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 直接的な更新（避けるべき）
  const increment = () => {
    const newCount = count + 1; // 古い値を使用
    setCount(newCount);
  };
  
  const addItem = (newItem) => {
    const newItems = [...items, newItem]; // 古い配列を使用
    setItems(newItems);
  };
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>増加</button>
    </div>
  );
}
```

---

## 第5章：副作用とライフサイクル

### 5-1. 副作用（Side Effects）とは何か？

#### 5-1-1. 副作用の基本概念

**副作用（Side Effects）**とは、Reactコンポーネントのレンダリング以外で発生する処理のことです。

**純粋な関数 vs 副作用のある関数**

```jsx
// 純粋な関数（副作用なし）
function add(a, b) {
  return a + b;
}

// 副作用のある関数
function updateTitle(newTitle) {
  document.title = newTitle; // DOMを直接操作
}
```

**Reactにおける副作用の例：**
- APIからのデータ取得
- DOMの直接操作
- タイマーの設定・解除
- イベントリスナーの登録・解除
- ローカルストレージへの保存
- ログ出力

#### 5-1-2. なぜ副作用を特別に扱うのか？

Reactの関数コンポーネントは**純粋関数**として設計されています。つまり：
- 同じ入力（props）に対して常に同じ出力（JSX）を返す
- 外部の状態を変更しない
- 予測可能でテストしやすい

しかし、実際のアプリケーションでは副作用が必要不可欠です。そのため、Reactは`useEffect`フックを提供して、副作用を適切に管理できるようにしています。

### 5-2. `useEffect`の基本的な使い方

#### 5-2-1. `useEffect`の構文

```jsx
useEffect(() => {
  // 副作用の処理をここに書く
  return () => {
    // クリーンアップ処理（オプション）
  };
}, [依存配列]);
```

**パラメータの説明：**
1. **第一引数（関数）**: 実行したい副作用の処理
2. **第二引数（配列）**: 依存配列（いつ実行するかを決める）

#### 5-2-2. 基本的な例：タイマーコンポーネント

```jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // 1秒ごとにtimeを更新するタイマーを設定
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // クリーンアップ関数：コンポーネントがアンマウントされる時に実行
    return () => {
      clearInterval(intervalId);
    };
  }, []); // 空の依存配列 = マウント時のみ実行

  return (
    <div>
      <h3>タイマー</h3>
      <p>経過時間: {time}秒</p>
    </div>
  );
}
```

**この例のポイント：**
- `setInterval`でタイマーを開始
- クリーンアップ関数で`clearInterval`を実行してメモリリークを防止
- 空の依存配列`[]`により、マウント時のみ実行

### 5-3. ライフサイクルと実行タイミング

#### 5-3-1. コンポーネントのライフサイクル

Reactコンポーネントには以下のライフサイクルがあります：

1. **マウント（Mount）**: コンポーネントが初めて画面に表示される
2. **更新（Update）**: propsやstateが変更されて再レンダリングされる
3. **アンマウント（Unmount）**: コンポーネントが画面から消える

#### 5-3-2. `useEffect`の実行タイミング

| 実行タイミング | 依存配列 | 使用例 |
|---------------|----------|--------|
| マウント時のみ | `[]` | 初期データ取得、タイマー開始 |
| 毎回のレンダリング後 | 省略 | DOMの直接操作（非推奨） |
| 特定の値が変更された時 | `[value]` | 値の変更に応じた処理 |
| 複数の値が変更された時 | `[value1, value2]` | 複数条件での処理 |

#### 5-3-3. 実践的な例：ユーザー情報の取得

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // userIdが変更された時に実行
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('ユーザーが見つかりません');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // userIdが変更された時に再実行

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>役職: {user.role}</p>
    </div>
  );
}
```

### 5-4. 依存配列の詳細理解

#### 5-4-1. 依存配列の基本ルール

```jsx
// ❌ 悪い例：依存配列を省略
useEffect(() => {
  console.log(count);
}); // 毎回実行される

// ✅ 良い例：依存配列を明示
useEffect(() => {
  console.log(count);
}, [count]); // countが変更された時のみ実行
```

#### 5-4-2. 依存配列のパターン

```jsx
// 1. マウント時のみ実行
useEffect(() => {
  console.log('コンポーネントがマウントされました');
}, []);

// 2. 特定の値が変更された時に実行
useEffect(() => {
  console.log(`ユーザー名が ${username} に変更されました`);
}, [username]);

// 3. 複数の値が変更された時に実行
useEffect(() => {
  console.log(`ユーザー ${username} の年齢が ${age} に変更されました`);
}, [username, age]);

// 4. 毎回実行（非推奨）
useEffect(() => {
  console.log('毎回実行されます');
}); // 依存配列を省略
```

#### 5-4-3. よくある間違いと解決方法

**問題1: 依存配列の不足**

```jsx
// ❌ 問題のあるコード
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `カウント: ${count}`;
  }, []); // countが依存配列に含まれていない
  
  return (
    <button onClick={() => setCount(count + 1)}>
      カウント: {count}
    </button>
  );
}
```

**解決方法：**

```jsx
// ✅ 正しいコード
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `カウント: ${count}`;
  }, [count]); // countを依存配列に追加
  
  return (
    <button onClick={() => setCount(count + 1)}>
      カウント: {count}
    </button>
  );
}
```

**問題2: 無限ループ**

```jsx
// ❌ 無限ループが発生するコード
function BadExample() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData([...data, '新しいアイテム']); // dataが変更される
  }, [data]); // dataが変更されると再実行 → 無限ループ
}
```

**解決方法：**

```jsx
// ✅ 正しいコード
function GoodExample() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(prevData => [...prevData, '新しいアイテム']); // 関数形式で更新
  }, []); // マウント時のみ実行
}
```

### 5-5. クリーンアップ処理

#### 5-5-1. クリーンアップとは？

クリーンアップ処理は、副作用で設定したリソースを適切に解放するための処理です。

**クリーンアップが必要な例：**
- タイマー（`setInterval`, `setTimeout`）
- イベントリスナー
- WebSocket接続
- サブスクリプション

#### 5-5-2. クリーンアップの基本パターン

```jsx
useEffect(() => {
  // リソースの設定
  const resource = setupResource();
  
  // クリーンアップ関数を返す
  return () => {
    cleanupResource(resource);
  };
}, []);
```

#### 5-5-3. 実践的なクリーンアップ例

**例1: タイマーのクリーンアップ**

```jsx
function TimerWithCleanup() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    // クリーンアップ関数
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // isRunningが変更された時に実行

  return (
    <div>
      <p>時間: {time}秒</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '停止' : '開始'}
      </button>
      <button onClick={() => setTime(0)}>リセット</button>
    </div>
  );
}
```

**例2: イベントリスナーのクリーンアップ**

```jsx
function WindowResizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // イベントリスナーを登録
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // マウント時のみ実行

  return (
    <div>
      <h3>ウィンドウサイズ</h3>
      <p>幅: {windowSize.width}px</p>
      <p>高さ: {windowSize.height}px</p>
    </div>
  );
}
```

**例3: APIサブスクリプションのクリーンアップ**

```jsx
function DataSubscription({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isSubscribed = true; // アンマウントフラグ

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data/${userId}`);
        const result = await response.json();
        
        // コンポーネントがまだマウントされている場合のみ更新
        if (isSubscribed) {
          setData(result);
        }
      } catch (error) {
        if (isSubscribed) {
          console.error('データ取得エラー:', error);
        }
      }
    };

    fetchData();

    // クリーンアップ関数
    return () => {
      isSubscribed = false; // アンマウントフラグを設定
    };
  }, [userId]);

  return (
    <div>
      {data ? (
        <div>データ: {JSON.stringify(data)}</div>
      ) : (
        <div>読み込み中...</div>
      )}
    </div>
  );
}
```

### 5-6. 複数の`useEffect`の管理

#### 5-6-1. 複数の副作用を分離する

関連する副作用は別々の`useEffect`に分けることで、コードの可読性と保守性が向上します。

```jsx
function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isOnline, setIsOnline] = useState(false);

  // ユーザー情報の取得
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, [userId]);

  // ユーザーの投稿を取得
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, [userId]);

  // オンライン状態の監視
  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
    checkOnlineStatus(); // 初期状態をチェック

    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []); // userIdに依存しない

  return (
    <div>
      <h2>{user?.name}のダッシュボード</h2>
      <p>オンライン状態: {isOnline ? 'オンライン' : 'オフライン'}</p>
      <h3>投稿一覧</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 5-7. カスタムフックでの副作用管理

#### 5-7-1. カスタムフックとは？

カスタムフックは、複数のコンポーネントで再利用可能なロジックをまとめた関数です。

#### 5-7-2. 副作用を含むカスタムフックの例

**データ取得のカスタムフック**

```jsx
import { useState, useEffect } from 'react';

// データ取得のカスタムフック
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (isSubscribed) {
          setData(result);
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err.message);
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [url]);

  return { data, loading, error };
}

// 使用例
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**ローカルストレージのカスタムフック**

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 初期値をローカルストレージから取得
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`ローカルストレージから ${key} を取得できませんでした:`, error);
      return initialValue;
    }
  });

  // 値が変更されたらローカルストレージに保存
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`ローカルストレージに ${key} を保存できませんでした:`, error);
    }
  };

  return [storedValue, setValue];
}

// 使用例
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      テーマを切り替え: {theme}
    </button>
  );
}
```

### 5-8. 実践的な応用例

#### 5-8-1. フォームの自動保存

```jsx
import { useState, useEffect } from 'react';

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [saved, setSaved] = useState(true);

  // フォームデータが変更されたら自動保存
  useEffect(() => {
    if (!saved) {
      const timeoutId = setTimeout(() => {
        // 実際のAPI呼び出しをシミュレート
        console.log('自動保存:', formData);
        setSaved(true);
      }, 1000); // 1秒後に保存

      return () => clearTimeout(timeoutId);
    }
  }, [formData, saved]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSaved(false);
  };

  return (
    <form>
      <div>
        <label>タイトル:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>内容:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>著者:</label>
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <p>保存状態: {saved ? '保存済み' : '保存中...'}</p>
    </form>
  );
}
```

#### 5-8-2. 無限スクロール

```jsx
import { useState, useEffect, useRef } from 'react';

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();

  // データ取得
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        // 実際のAPI呼び出しをシミュレート
        const response = await fetch(`/api/items?page=${page}`);
        const newItems = await response.json();
        
        setItems(prev => [...prev, ...newItems]);
        setHasMore(newItems.length > 0);
      } catch (error) {
        console.error('データ取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [page]);

  // 無限スクロールの監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {loading && <div>読み込み中...</div>}
      {hasMore && <div ref={observerRef}>監視要素</div>}
    </div>
  );
}
```

### 5-9. パフォーマンス最適化

#### 5-9-1. `useCallback`と`useMemo`との組み合わせ

```jsx
import { useState, useEffect, useCallback, useMemo } from 'react';

function OptimizedComponent({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // メモ化されたコールバック関数
  const fetchUser = useCallback(async () => {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    setUser(userData);
  }, [userId]);

  // メモ化された計算結果
  const userStats = useMemo(() => {
    if (!user || !posts) return null;
    
    return {
      totalPosts: posts.length,
      averageLikes: posts.reduce((sum, post) => sum + post.likes, 0) / posts.length
    };
  }, [user, posts]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      {userStats && (
        <div>
          <p>総投稿数: {userStats.totalPosts}</p>
          <p>平均いいね数: {userStats.averageLikes}</p>
        </div>
      )}
    </div>
  );
}
```

### 5-10. よくある問題と解決方法

#### 5-10-1. ESLintの警告への対応

```jsx
// ESLintの警告が出る場合
useEffect(() => {
  console.log(someValue);
}, []); // ESLint: someValueが依存配列に含まれていない

// 解決方法1: 依存配列に追加
useEffect(() => {
  console.log(someValue);
}, [someValue]);

// 解決方法2: ESLintルールを無効化（非推奨）
useEffect(() => {
  console.log(someValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// 解決方法3: useRefを使用
const someValueRef = useRef(someValue);
useEffect(() => {
  someValueRef.current = someValue;
}, [someValue]);

useEffect(() => {
  console.log(someValueRef.current);
}, []);
```

#### 5-10-2. 非同期処理の適切な処理

```jsx
// ❌ 問題のあるコード
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data); // コンポーネントがアンマウントされている可能性
  };
  fetchData();
}, []);

// ✅ 正しいコード
useEffect(() => {
  let isSubscribed = true;

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      
      if (isSubscribed) {
        setData(data);
      }
    } catch (error) {
      if (isSubscribed) {
        setError(error.message);
      }
    }
  };

  fetchData();

  return () => {
    isSubscribed = false;
  };
}, []);
```

### 5-11. まとめ

この章では、Reactにおける副作用の管理について詳しく学びました：

**重要なポイント：**
1. **副作用とは**: レンダリング以外の処理（API呼び出し、DOM操作など）
2. **useEffectの基本**: 副作用を適切に管理するためのフック
3. **依存配列**: いつ副作用を実行するかを制御
4. **クリーンアップ**: リソースの適切な解放
5. **カスタムフック**: 再利用可能な副作用ロジックの作成

**ベストプラクティス：**
- 関連する副作用は分離する
- 依存配列は適切に設定する
- クリーンアップ処理を忘れない
- 非同期処理ではアンマウントフラグを使用する
- カスタムフックでロジックを再利用する

これらの知識を活用して、効率的で保守性の高いReactアプリケーションを構築しましょう。

---

## 第6章：リストとフォーム

### 6-1. 配列のレンダリング（map）

#### 6-1-1. 基本的な配列のレンダリング

Reactで配列を画面に表示するには、JavaScriptの`map`メソッドを使用します。

```jsx
const fruits = ['りんご', 'バナナ', 'みかん'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**mapメソッドの基本構文：**
```jsx
array.map((item, index) => JSX要素)
```

#### 6-1-2. オブジェクト配列のレンダリング

実際のアプリケーションでは、オブジェクトの配列を扱うことが多いです。

```jsx
const users = [
  { id: 1, name: '田中太郎', age: 25, role: '開発者' },
  { id: 2, name: '佐藤花子', age: 30, role: 'デザイナー' },
  { id: 3, name: '鈴木一郎', age: 28, role: 'プロジェクトマネージャー' }
];

function UserList() {
  return (
    <div>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>年齢: {user.age}歳</p>
            <p>役職: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### 6-1-3. 条件付きレンダリングとの組み合わせ

配列の要素を条件に応じて表示・非表示にすることもできます。

```jsx
const products = [
  { id: 1, name: 'ノートPC', price: 80000, inStock: true },
  { id: 2, name: 'マウス', price: 3000, inStock: false },
  { id: 3, name: 'キーボード', price: 5000, inStock: true },
  { id: 4, name: 'モニター', price: 25000, inStock: true }
];

function ProductList() {
  return (
    <div>
      <h2>商品一覧</h2>
      <ul>
        {products
          .filter(product => product.inStock) // 在庫がある商品のみフィルタ
          .map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>価格: ¥{product.price.toLocaleString()}</p>
              <span style={{ color: 'green' }}>在庫あり</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
```

### 6-2. `key`属性の重要性

#### 6-2-1. key属性とは？

`key`属性は、Reactがリストの各要素を一意に識別するために使用する特別な属性です。

**なぜkeyが必要？**

Reactは再レンダリング時に、どの要素が変更されたかを正確に把握する必要があります。keyがないと、要素の順序が変わった時に不適切な更新が発生する可能性があります。

#### 6-2-2. key属性の基本ルール

```jsx
// ❌ 悪い例：indexをkeyとして使用
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}

// ✅ 良い例：一意のIDをkeyとして使用
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

#### 6-2-3. key属性の選択基準

**推奨されるkey：**
- データベースのID
- UUID
- 一意の文字列

**避けるべきkey：**
- 配列のインデックス（順序が変わる可能性がある場合）
- ランダムな値（毎回レンダリングで変わる）
- 重複する値

```jsx
// 良い例：データベースIDを使用
const posts = [
  { id: 'post-001', title: 'React入門', author: '田中' },
  { id: 'post-002', title: 'JavaScript基礎', author: '佐藤' }
];

// 悪い例：インデックスを使用（順序が変わる可能性がある場合）
const fruits = ['りんご', 'バナナ', 'みかん'];
{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li> // 順序が変わると問題が発生
))}
```

#### 6-2-4. key属性の問題例と解決方法

**問題例：リストの順序変更**

```jsx
// ❌ 問題のあるコード
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買い物', completed: false },
    { id: 2, text: '掃除', completed: false },
    { id: 3, text: '勉強', completed: false }
  ]);

  const moveToTop = (id) => {
    const todo = todos.find(t => t.id === id);
    const others = todos.filter(t => t.id !== id);
    setTodos([todo, ...others]); // 順序を変更
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}> {/* 問題：indexをkeyとして使用 */}
          {todo.text}
          <button onClick={() => moveToTop(todo.id)}>最上部に移動</button>
        </li>
      ))}
    </ul>
  );
}
```

**解決方法：**

```jsx
// ✅ 正しいコード
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買い物', completed: false },
    { id: 2, text: '掃除', completed: false },
    { id: 3, text: '勉強', completed: false }
  ]);

  const moveToTop = (id) => {
    const todo = todos.find(t => t.id === id);
    const others = todos.filter(t => t.id !== id);
    setTodos([todo, ...others]);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}> {/* 解決：一意のIDをkeyとして使用 */}
          {todo.text}
          <button onClick={() => moveToTop(todo.id)}>最上部に移動</button>
        </li>
      ))}
    </ul>
  );
}
```

### 6-3. フォームと`useState`での入力管理

#### 6-3-1. 制御されたコンポーネント（Controlled Components）

Reactでは、フォームの入力値を`useState`で管理することで、入力値を完全に制御できます。

```jsx
import { useState } from 'react';

function SimpleForm() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`入力された値: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange}
        placeholder="何か入力してください"
      />
      <button type="submit">送信</button>
    </form>
  );
}
```

**制御されたコンポーネントのポイント：**
- `value={input}`：入力欄の値をReactが制御
- `onChange`：入力されるたびに`setInput`で更新
- `e.preventDefault()`：フォーム送信のページリロードを防ぐ

#### 6-3-2. 複数の入力フィールドの管理

複数の入力フィールドがある場合、オブジェクトで管理すると効率的です。

```jsx
import { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    role: '開発者'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('送信データ:', formData);
    // 実際のAPI呼び出しなど
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>メールアドレス:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>年齢:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="0"
          max="120"
        />
      </div>
      
      <div>
        <label>役職:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="開発者">開発者</option>
          <option value="デザイナー">デザイナー</option>
          <option value="プロジェクトマネージャー">プロジェクトマネージャー</option>
        </select>
      </div>
      
      <button type="submit">登録</button>
    </form>
  );
}
```

#### 6-3-3. フォームバリデーション

入力値の検証（バリデーション）を実装することで、ユーザーに適切なフィードバックを提供できます。

```jsx
import { useState } from 'react';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // メールアドレスの検証
    if (!formData.email) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    // パスワードの検証
    if (!formData.password) {
      newErrors.password = 'パスワードは必須です';
    } else if (formData.password.length < 6) {
      newErrors.password = 'パスワードは6文字以上で入力してください';
    }

    // パスワード確認の検証
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'パスワードが一致しません';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // リアルタイムバリデーション（オプション）
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('フォーム送信:', formData);
      setIsSubmitted(true);
      // 実際のAPI呼び出しなど
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div style={{ color: 'green' }}>
          登録が完了しました！
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <span style={{ color: 'red', fontSize: '0.8em' }}>
                {errors.email}
              </span>
            )}
          </div>
          
          <div>
            <label>パスワード:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && (
              <span style={{ color: 'red', fontSize: '0.8em' }}>
                {errors.password}
              </span>
            )}
          </div>
          
          <div>
            <label>パスワード確認:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <span style={{ color: 'red', fontSize: '0.8em' }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>
          
          <button type="submit">登録</button>
        </form>
      )}
    </div>
  );
}
```

### 6-4. 動的なリスト操作

#### 6-4-1. リストへの追加・削除・更新

実際のアプリケーションでは、リストの要素を動的に操作する必要があります。

```jsx
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: false },
    { id: 2, text: 'プロジェクトを作る', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  // 新しいTODOを追加
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(t => t.id), 0) + 1;
      setTodos(prev => [...prev, {
        id: newId,
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  // TODOを削除
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // TODOの完了状態を切り替え
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h2>TODOアプリ</h2>
      
      {/* 新しいTODOの入力フォーム */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいTODOを入力"
        />
        <button type="submit">追加</button>
      </form>

      {/* TODOリスト */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>

      {/* 統計情報 */}
      <div>
        <p>総数: {todos.length}</p>
        <p>完了: {todos.filter(t => t.completed).length}</p>
        <p>未完了: {todos.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
}
```

#### 6-4-2. リストのフィルタリングとソート

```jsx
import { useState, useMemo } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'ノートPC', price: 80000, category: 'PC' },
    { id: 2, name: 'マウス', price: 3000, category: 'アクセサリ' },
    { id: 3, name: 'キーボード', price: 5000, category: 'アクセサリ' },
    { id: 4, name: 'モニター', price: 25000, category: 'PC' }
  ]);
  
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // フィルタリングとソートを適用した商品リスト
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // フィルタリング
    if (filter !== 'all') {
      result = result.filter(product => product.category === filter);
    }

    // ソート
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

    return result;
  }, [products, filter, sortBy]);

  return (
    <div>
      <h2>商品一覧</h2>
      
      {/* フィルター */}
      <div>
        <label>カテゴリ:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">すべて</option>
          <option value="PC">PC</option>
          <option value="アクセサリ">アクセサリ</option>
        </select>
      </div>

      {/* ソート */}
      <div>
        <label>並び順:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">名前順</option>
          <option value="price">価格順</option>
        </select>
      </div>

      {/* 商品リスト */}
      <ul>
        {filteredAndSortedProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>価格: ¥{product.price.toLocaleString()}</p>
            <p>カテゴリ: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 6-5. 高度なフォーム機能

#### 6-5-1. ファイルアップロード

```jsx
import { useState } from 'react';

function FileUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // 画像プレビューの作成
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log('アップロードするファイル:', selectedFile);
      // 実際のファイルアップロード処理
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ファイルを選択:</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      
      {preview && (
        <div>
          <h4>プレビュー:</h4>
          <img 
            src={preview} 
            alt="プレビュー" 
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
      )}
      
      {selectedFile && (
        <div>
          <p>選択されたファイル: {selectedFile.name}</p>
          <p>サイズ: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
      
      <button type="submit" disabled={!selectedFile}>
        アップロード
      </button>
    </form>
  );
}
```

#### 6-5-2. 複数選択フォーム

```jsx
import { useState } from 'react';

function MultiSelectForm() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++'];
  const days = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];

  const handleSkillChange = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleDayChange = (day) => {
    setSelectedDays(prev => 
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('選択されたスキル:', selectedSkills);
    console.log('選択された曜日:', selectedDays);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>得意なスキル（複数選択可）</h3>
        {skills.map(skill => (
          <label key={skill}>
            <input
              type="checkbox"
              checked={selectedSkills.includes(skill)}
              onChange={() => handleSkillChange(skill)}
            />
            {skill}
          </label>
        ))}
      </div>

      <div>
        <h3>勤務可能な曜日（複数選択可）</h3>
        {days.map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => handleDayChange(day)}
            />
            {day}
          </label>
        ))}
      </div>

      <button type="submit">送信</button>
    </form>
  );
}
```

### 6-6. フォームのカスタムフック

#### 6-6-1. 再利用可能なフォームフック

```jsx
import { useState, useCallback } from 'react';

// フォーム管理のカスタムフック
function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    setValue,
    setErrors,
    reset
  };
}

// 使用例
function UserRegistrationForm() {
  const { values, errors, handleChange, setErrors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const newErrors = {};

    if (!values.name) newErrors.name = '名前は必須です';
    if (!values.email) newErrors.email = 'メールアドレスは必須です';
    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = 'パスワードが一致しません';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('送信データ:', values);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前:</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>

      <div>
        <label>メールアドレス:</label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <label>パスワード:</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>パスワード確認:</label>
        <input
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">登録</button>
      <button type="button" onClick={reset}>リセット</button>
    </form>
  );
}
```

### 6-7. 実践的な応用例

#### 6-7-1. 検索機能付きリスト

```jsx
import { useState, useMemo } from 'react';

function SearchableList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const items = [
    { id: 1, name: 'React入門', category: 'プログラミング', author: '田中太郎' },
    { id: 2, name: 'JavaScript基礎', category: 'プログラミング', author: '佐藤花子' },
    { id: 3, name: 'デザインの原則', category: 'デザイン', author: '鈴木一郎' },
    { id: 4, name: 'UI/UX設計', category: 'デザイン', author: '高橋美咲' },
    { id: 5, name: 'プロジェクト管理', category: 'マネジメント', author: '渡辺健太' }
  ];

  const categories = ['all', ...new Set(items.map(item => item.category))];

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <h2>検索可能なリスト</h2>
      
      {/* 検索フィールド */}
      <div>
        <input
          type="text"
          placeholder="検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* カテゴリフィルター */}
      <div>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'すべて' : category}
            </option>
          ))}
        </select>
      </div>

      {/* 結果表示 */}
      <div>
        <p>検索結果: {filteredItems.length}件</p>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>著者: {item.author}</p>
              <p>カテゴリ: {item.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

#### 6-7-2. ドラッグ&ドロップリスト

```jsx
import { useState } from 'react';

function DraggableList() {
  const [items, setItems] = useState([
    { id: 1, text: 'アイテム1' },
    { id: 2, text: 'アイテム2' },
    { id: 3, text: 'アイテム3' },
    { id: 4, text: 'アイテム4' }
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedItem !== null && draggedItem !== dropIndex) {
      const newItems = [...items];
      const [draggedItemData] = newItems.splice(draggedItem, 1);
      newItems.splice(dropIndex, 0, draggedItemData);
      setItems(newItems);
    }
    
    setDraggedItem(null);
  };

  return (
    <div>
      <h2>ドラッグ&ドロップリスト</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: draggedItem === index ? '#e0e0e0' : '#f5f5f5',
              cursor: 'grab',
              border: '1px solid #ddd'
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 6-8. パフォーマンス最適化

#### 6-8-1. 仮想化リスト（Virtualization）

大量のデータを表示する場合、仮想化を使用してパフォーマンスを向上させることができます。

```jsx
import { useState, useMemo } from 'react';

function VirtualizedList() {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 50;
  const containerHeight = 400;
  const visibleItemsCount = Math.ceil(containerHeight / itemHeight);

  // 大量のデータを生成
  const items = useMemo(() => {
    return Array.from({ length: 10000 }, (_, index) => ({
      id: index,
      text: `アイテム ${index + 1}`
    }));
  }, []);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemsCount + 1, items.length);

  const visibleItems = items.slice(startIndex, endIndex);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div>
      <h2>仮想化リスト（10,000アイテム）</h2>
      <div
        style={{
          height: containerHeight,
          overflow: 'auto',
          border: '1px solid #ccc'
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: items.length * itemHeight }}>
          <div
            style={{
              position: 'relative',
              top: startIndex * itemHeight
            }}
          >
            {visibleItems.map(item => (
              <div
                key={item.id}
                style={{
                  height: itemHeight,
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  backgroundColor: '#f9f9f9'
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 6-9. まとめ

この章では、Reactにおけるリストとフォームの扱いについて詳しく学びました：

**重要なポイント：**
1. **配列のレンダリング**: `map`メソッドを使用して配列をJSXに変換
2. **key属性**: リストの各要素に一意のkeyを指定してReactの最適化を支援
3. **制御されたコンポーネント**: フォームの値をuseStateで管理
4. **動的なリスト操作**: 追加・削除・更新・フィルタリング・ソート
5. **フォームバリデーション**: 入力値の検証とエラーハンドリング
6. **カスタムフック**: 再利用可能なフォームロジックの作成

**ベストプラクティス：**
- key属性には一意のIDを使用する（インデックスは避ける）
- フォームの状態は適切に管理する
- バリデーションはユーザーフレンドリーに行う
- 大量のデータには仮想化を検討する
- カスタムフックでロジックを再利用する

これらの知識を活用して、ユーザーフレンドリーで効率的なReactアプリケーションを構築しましょう。

---

## 第7章：ルーティングの導入（React Router）

### 7-1. ルーティングとは何か？

#### 7-1-1. ルーティングの基本概念

**ルーティング（Routing）**とは、URLに応じて適切なコンポーネントを表示する機能のことです。

**従来のWebサイト vs SPA（Single Page Application）**

```jsx
// 従来のWebサイト（マルチページアプリケーション）
// ページ遷移時にサーバーから新しいHTMLを取得
<a href="/about">Aboutページへ</a> // ページ全体がリロード

// SPA（React + React Router）
// ページ遷移時にJavaScriptでコンポーネントを切り替え
<Link to="/about">Aboutページへ</Link> // ページリロードなし
```

**React Routerの利点：**
- ページリロードなしの高速な画面遷移
- ブラウザの戻る・進むボタンとの連携
- URLの直接アクセスが可能
- SEOフレンドリーなURL設計

#### 7-1-2. React Routerの種類

React Routerには複数のバージョンがあります：

- **React Router v6**: 最新版（推奨）
- **React Router v5**: 旧版
- **React Router v4**: レガシー版

この章では最新のReact Router v6について説明します。

### 7-2. React Routerのインストールとセットアップ

#### 7-2-1. インストール

```bash
# npmを使用する場合
npm install react-router-dom

# yarnを使用する場合
yarn add react-router-dom

# pnpmを使用する場合
pnpm add react-router-dom
```

#### 7-2-2. 基本的なセットアップ

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**各コンポーネントの役割：**

- **`BrowserRouter`**: ブラウザの履歴APIを使用するルーター
- **`Routes`**: ルート定義をグループ化するコンテナ
- **`Route`**: 個別のルート定義（パスとコンポーネントの対応）

#### 7-2-3. ページコンポーネントの作成

```jsx
// pages/Home.jsx
function Home() {
  return (
    <div>
      <h1>ホームページ</h1>
      <p>ようこそ！</p>
    </div>
  );
}

export default Home;

// pages/About.jsx
function About() {
  return (
    <div>
      <h1>Aboutページ</h1>
      <p>私たちについて</p>
    </div>
  );
}

export default About;

// pages/Contact.jsx
function Contact() {
  return (
    <div>
      <h1>お問い合わせ</h1>
      <p>連絡先情報</p>
    </div>
  );
}

export default Contact;
```

### 7-3. ナビゲーション

#### 7-3-1. `Link`コンポーネント

HTMLの`<a>`タグの代わりに`<Link>`を使用することで、ページリロードなしの遷移が可能になります。

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>
    </nav>
  );
}
```

#### 7-3-2. `NavLink`コンポーネント

現在のページに応じてスタイルを変更したい場合は`<NavLink>`を使用します。

```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            お問い合わせ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
```

**CSS例：**
```css
.active {
  color: #007bff;
  font-weight: bold;
  text-decoration: underline;
}
```

#### 7-3-3. プログラムによるナビゲーション

JavaScriptでページ遷移を行いたい場合は`useNavigate`フックを使用します。

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // ログイン処理
      const response = await loginUser(formData);
      
      if (response.success) {
        // ログイン成功時にダッシュボードへ遷移
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="メールアドレス"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        placeholder="パスワード"
      />
      <button type="submit">ログイン</button>
    </form>
  );
}
```

**`useNavigate`の主なメソッド：**
```jsx
const navigate = useNavigate();

// 指定したパスに遷移
navigate('/dashboard');

// 履歴を置き換える（戻るボタンで前のページに戻れない）
navigate('/dashboard', { replace: true });

// 相対パスでの遷移
navigate('../users');

// 履歴を操作
navigate(-1); // 1ページ戻る
navigate(1);  // 1ページ進む
```

### 7-4. 動的ルーティング

#### 7-4-1. URLパラメータ

動的な値（ユーザーID、商品IDなど）をURLに含めることができます。

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**パラメータの取得：**
```jsx
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('ユーザー取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>読み込み中...</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;

  return (
    <div>
      <h1>ユーザー詳細</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>役職: {user.role}</p>
    </div>
  );
}
```

#### 7-4-2. 複数のパラメータ

複数のパラメータを定義することも可能です。

```jsx
// App.jsx
<Route path="/products/:category/:id" element={<ProductDetail />} />

// ProductDetail.jsx
function ProductDetail() {
  const { category, id } = useParams();
  
  return (
    <div>
      <h1>商品詳細</h1>
      <p>カテゴリ: {category}</p>
      <p>商品ID: {id}</p>
    </div>
  );
}
```

#### 7-4-3. オプショナルパラメータ

パラメータをオプショナルにすることもできます。

```jsx
// App.jsx
<Route path="/blog/:year?/:month?/:day?" element={<Blog />} />

// Blog.jsx
function Blog() {
  const { year, month, day } = useParams();
  
  if (year && month && day) {
    return <div>特定の日付のブログ: {year}/{month}/{day}</div>;
  } else if (year && month) {
    return <div>特定の月のブログ: {year}/{month}</div>;
  } else if (year) {
    return <div>特定の年のブログ: {year}</div>;
  } else {
    return <div>すべてのブログ記事</div>;
  }
}
```

### 7-5. ネストしたルーティング

#### 7-5-1. 基本的なネスト

親ルートの中に子ルートを定義することができます。

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

**親コンポーネント（Dashboard.jsx）：**
```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <header>
        <h1>ダッシュボード</h1>
        <nav>
          <Link to="/dashboard/users">ユーザー一覧</Link>
          <Link to="/dashboard/settings">設定</Link>
        </nav>
      </header>
      
      <main>
        <Outlet /> {/* 子ルートのコンポーネントがここに表示される */}
      </main>
    </div>
  );
}
```

#### 7-5-2. インデックスルート

親ルートにアクセスした時に表示されるデフォルトのコンポーネントを定義できます。

```jsx
// App.jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} /> {/* デフォルトページ */}
  <Route path="users" element={<UserList />} />
  <Route path="settings" element={<Settings />} />
</Route>

// DashboardHome.jsx
function DashboardHome() {
  return (
    <div>
      <h2>ダッシュボードホーム</h2>
      <p>ようこそ！</p>
    </div>
  );
}
```

### 7-6. ルートガード（認証・認可）

#### 7-6-1. 基本的なルートガード

認証が必要なページへのアクセスを制御します。

```jsx
// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token'); // 実際の認証ロジック

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// App.jsx
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
>
  <Route path="users" element={<UserList />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

#### 7-6-2. ロールベースのアクセス制御

ユーザーの役職に応じてアクセスを制御します。

```jsx
// components/RoleBasedRoute.jsx
import { Navigate } from 'react-router-dom';

function RoleBasedRoute({ children, requiredRole }) {
  const userRole = localStorage.getItem('userRole'); // 実際のユーザー情報取得

  if (userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// App.jsx
<Route 
  path="/admin" 
  element={
    <RoleBasedRoute requiredRole="admin">
      <AdminPanel />
    </RoleBasedRoute>
  }
/>
```

#### 7-6-3. 認証状態の管理

より高度な認証状態管理の例：

```jsx
// hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 初期認証状態の確認
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem('token');
        }
      }
    } catch (error) {
      console.error('認証確認エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (response.ok) {
      const { token, user: userData } = await response.json();
      localStorage.setItem('token', token);
      setUser(userData);
      return { success: true };
    } else {
      return { success: false, error: 'ログインに失敗しました' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```

### 7-7. クエリパラメータ

#### 7-7-1. 基本的なクエリパラメータ

URLのクエリ部分（`?key=value`）を扱います。

```jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'name';

  useEffect(() => {
    const fetchProducts = async () => {
      let url = '/api/products';
      const params = new URLSearchParams();
      
      if (category) params.append('category', category);
      if (sort) params.append('sort', sort);
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [category, sort]);

  const handleCategoryChange = (newCategory) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (newCategory) {
        newParams.set('category', newCategory);
      } else {
        newParams.delete('category');
      }
      return newParams;
    });
  };

  return (
    <div>
      <h1>商品一覧</h1>
      
      <div>
        <button onClick={() => handleCategoryChange('')}>すべて</button>
        <button onClick={() => handleCategoryChange('electronics')}>電子機器</button>
        <button onClick={() => handleCategoryChange('clothing')}>衣類</button>
      </div>

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### 7-7-2. 複数のクエリパラメータ

```jsx
function AdvancedSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const priceMin = searchParams.get('priceMin') || '';
  const priceMax = searchParams.get('priceMax') || '';

  const updateSearch = (updates) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });
      return newParams;
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="検索..."
        value={query}
        onChange={(e) => updateSearch({ q: e.target.value })}
      />
      
      <select
        value={category}
        onChange={(e) => updateSearch({ category: e.target.value })}
      >
        <option value="">すべてのカテゴリ</option>
        <option value="electronics">電子機器</option>
        <option value="clothing">衣類</option>
        <option value="books">書籍</option>
      </select>

      <input
        type="number"
        placeholder="最低価格"
        value={priceMin}
        onChange={(e) => updateSearch({ priceMin: e.target.value })}
      />

      <input
        type="number"
        placeholder="最高価格"
        value={priceMax}
        onChange={(e) => updateSearch({ priceMax: e.target.value })}
      />
    </div>
  );
}
```

### 7-8. エラーハンドリング

#### 7-8-1. 404エラーページ

存在しないルートにアクセスした時の処理。

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* ワイルドカードルート */}
</Routes>

// pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動された可能性があります。</p>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
}
```

#### 7-8-2. エラーバウンダリとの組み合わせ

```jsx
// components/ErrorBoundary.jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('エラーが発生しました:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>エラーが発生しました</h1>
          <button onClick={() => window.location.reload()}>
            ページを再読み込み
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// App.jsx
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* ルート定義 */}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
```

### 7-9. 実践的な応用例

#### 7-9-1. 完全なアプリケーション例

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// components/Navigation.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Navigation() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/">ホーム</NavLink>
      
      {user ? (
        <>
          <NavLink to="/dashboard">ダッシュボード</NavLink>
          <button onClick={logout}>ログアウト</button>
        </>
      ) : (
        <NavLink to="/login">ログイン</NavLink>
      )}
    </nav>
  );
}
```

#### 7-9-2. レイアウトコンポーネント

```jsx
// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// App.jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
```

### 7-10. パフォーマンス最適化

#### 7-10-1. コード分割（Code Splitting）

```jsx
import { lazy, Suspense } from 'react';

// 遅延読み込み
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserList = lazy(() => import('./pages/UserList'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>読み込み中...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

#### 7-10-2. プリロード

```jsx
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const preloadComponent = (componentPath) => {
    // コンポーネントをプリロード
    import(componentPath);
  };

  return (
    <nav>
      <Link 
        to="/dashboard"
        onMouseEnter={() => preloadComponent('./pages/Dashboard')}
      >
        ダッシュボード
      </Link>
    </nav>
  );
}
```

### 7-11. まとめ

この章では、React Routerを使用したルーティングについて詳しく学びました：

**重要なポイント：**
1. **ルーティングの基本**: URLに応じたコンポーネントの表示
2. **ナビゲーション**: Link、NavLink、useNavigateの使い分け
3. **動的ルーティング**: URLパラメータとクエリパラメータ
4. **ネストしたルーティング**: 親子関係のあるルート構造
5. **ルートガード**: 認証・認可によるアクセス制御
6. **エラーハンドリング**: 404エラーなどの適切な処理

**ベストプラクティス：**
- 適切なルート構造を設計する
- 認証が必要なルートは保護する
- エラーページを用意する
- パフォーマンスを考慮したコード分割を行う
- ユーザビリティを重視したナビゲーションを設計する

これらの知識を活用して、ユーザーフレンドリーで保守性の高いReactアプリケーションを構築しましょう。

---


## 第8章：データの取得（API連携）

### 8-1. API連携の基本概念

#### 8-1-1. APIとは何か？

**API（Application Programming Interface）**とは、アプリケーション間でデータをやり取りするためのインターフェースです。

**Web APIの種類：**
- **REST API**: HTTPメソッド（GET, POST, PUT, DELETE）を使用
- **GraphQL**: クエリ言語を使用した柔軟なデータ取得
- **WebSocket**: リアルタイム双方向通信

**ReactアプリケーションでのAPI連携：**
```jsx
// フロントエンド（React） ←→ バックエンド（API）
// データの取得・送信・更新・削除
```

#### 8-1-2. HTTPメソッドの基本

| メソッド | 用途 | 例 |
|---------|------|-----|
| GET | データの取得 | ユーザー一覧の取得 |
| POST | データの作成 | 新規ユーザーの登録 |
| PUT | データの更新（全体） | ユーザー情報の完全更新 |
| PATCH | データの更新（部分） | ユーザー名のみ更新 |
| DELETE | データの削除 | ユーザーの削除 |

### 8-2. `fetch`を使ったAPI呼び出し

#### 8-2-1. 基本的なGETリクエスト

```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
        console.error('データ取得エラー:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### 8-2-2. POSTリクエスト（データの作成）

```jsx
import { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newUser = await response.json();
      console.log('作成されたユーザー:', newUser);
      setSuccess(true);
      
      // フォームをリセット
      setFormData({ name: '', email: '', role: 'user' });
    } catch (err) {
      setError(err.message);
      console.error('ユーザー作成エラー:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>新規ユーザー登録</h2>
      
      {error && <div style={{ color: 'red' }}>エラー: {error}</div>}
      {success && <div style={{ color: 'green' }}>ユーザーが正常に作成されました！</div>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>メールアドレス:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>役職:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">一般ユーザー</option>
            <option value="admin">管理者</option>
            <option value="moderator">モデレーター</option>
          </select>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? '作成中...' : 'ユーザーを作成'}
        </button>
      </form>
    </div>
  );
}
```

#### 8-2-3. PUT/PATCHリクエスト（データの更新）

```jsx
import { useState, useEffect } from 'react';

function UserEdit({ userId }) {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ユーザーデータの取得
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          role: userData.role
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  // ユーザーデータの更新
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);

      const response = await fetch(`https://api.example.com/users/${userId}`, {
        method: 'PUT', // または 'PATCH'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;

  return (
    <div>
      <h2>ユーザー編集</h2>
      
      {error && <div style={{ color: 'red' }}>エラー: {error}</div>}
      {success && <div style={{ color: 'green' }}>更新が完了しました！</div>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>メールアドレス:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>役職:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">一般ユーザー</option>
            <option value="admin">管理者</option>
            <option value="moderator">モデレーター</option>
          </select>
        </div>
        
        <button type="submit" disabled={saving}>
          {saving ? '更新中...' : '更新'}
        </button>
      </form>
    </div>
  );
}
```

#### 8-2-4. DELETEリクエスト（データの削除）

```jsx
import { useState } from 'react';

function UserDelete({ userId, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm('本当にこのユーザーを削除しますか？')) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.example.com/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 親コンポーネントに削除完了を通知
      onDelete(userId);
    } catch (err) {
      setError(err.message);
      console.error('削除エラー:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>エラー: {error}</div>}
      
      <button 
        onClick={handleDelete} 
        disabled={loading}
        style={{ backgroundColor: 'red', color: 'white' }}
      >
        {loading ? '削除中...' : '削除'}
      </button>
    </div>
  );
}
```

### 8-3. `axios`を使ったAPI呼び出し

#### 8-3-1. axiosのインストールとセットアップ

```bash
# npmを使用する場合
npm install axios

# yarnを使用する場合
yarn add axios

# pnpmを使用する場合
pnpm add axios
```

#### 8-3-2. 基本的なaxiosの使用

```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserListWithAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get('https://api.example.com/users');
        setUsers(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        console.error('データ取得エラー:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>ユーザー一覧（axios使用）</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### 8-3-3. axiosの設定とインターセプター

```jsx
// api/axios.js
import axios from 'axios';

// ベースURLの設定
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 10秒でタイムアウト
  headers: {
    'Content-Type': 'application/json',
  }
});

// リクエストインターセプター
api.interceptors.request.use(
  (config) => {
    // 認証トークンを自動的に追加
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// レスポンスインターセプター
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401エラーの場合はログインページにリダイレクト
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// 使用例
import api from './api/axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('エラー:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 8-4. カスタムフックでのAPI管理

#### 8-4-1. 基本的なAPIフック

```jsx
import { useState, useEffect } from 'react';

// 汎用的なAPI呼び出しフック
function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
}

// 使用例
function UserList() {
  const { data: users, loading, error, refetch } = useApi('https://api.example.com/users');

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <button onClick={refetch}>再読み込み</button>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### 8-4-2. CRUD操作のカスタムフック

```jsx
import { useState, useCallback } from 'react';

// CRUD操作のカスタムフック
function useCrud(baseUrl) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = useCallback(async (data) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const read = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${baseUrl}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const update = useCallback(async (id, data) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const remove = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  return {
    create,
    read,
    update,
    remove,
    loading,
    error
  };
}

// 使用例
function UserManagement() {
  const { create, read, update, remove, loading, error } = useCrud('https://api.example.com/users');
  const [users, setUsers] = useState([]);

  const handleCreate = async (userData) => {
    try {
      const newUser = await create(userData);
      setUsers(prev => [...prev, newUser]);
    } catch (err) {
      console.error('作成エラー:', err);
    }
  };

  const handleUpdate = async (id, userData) => {
    try {
      const updatedUser = await update(id, userData);
      setUsers(prev => prev.map(user => 
        user.id === id ? updatedUser : user
      ));
    } catch (err) {
      console.error('更新エラー:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await remove(id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      console.error('削除エラー:', err);
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>エラー: {error}</div>}
      {loading && <div>処理中...</div>}
      
      {/* ユーザー管理UI */}
    </div>
  );
}
```

### 8-5. エラーハンドリングとリトライ機能

#### 8-5-1. 高度なエラーハンドリング

```jsx
import { useState, useCallback } from 'react';

// リトライ機能付きAPI呼び出し
function useApiWithRetry(url, maxRetries = 3) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchWithRetry = useCallback(async (retryAttempt = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      setRetryCount(0);
    } catch (err) {
      if (retryAttempt < maxRetries) {
        // 指数バックオフでリトライ
        const delay = Math.pow(2, retryAttempt) * 1000;
        setTimeout(() => {
          setRetryCount(retryAttempt + 1);
          fetchWithRetry(retryAttempt + 1);
        }, delay);
      } else {
        setError(err.message);
        setRetryCount(0);
      }
    } finally {
      setLoading(false);
    }
  }, [url, maxRetries]);

  const retry = useCallback(() => {
    fetchWithRetry();
  }, [fetchWithRetry]);

  return { data, loading, error, retry, retryCount };
}

// 使用例
function UserListWithRetry() {
  const { data: users, loading, error, retry, retryCount } = useApiWithRetry('https://api.example.com/users');

  if (loading) {
    return (
      <div>
        読み込み中...
        {retryCount > 0 && <p>リトライ中... ({retryCount}/3)</p>}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>エラー: {error}</p>
        <button onClick={retry}>再試行</button>
      </div>
    );
  }

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### 8-5-2. グローバルエラーハンドリング

```jsx
// utils/errorHandler.js
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export function handleApiError(error) {
  if (error instanceof ApiError) {
    switch (error.status) {
      case 400:
        return 'リクエストが正しくありません';
      case 401:
        return '認証が必要です';
      case 403:
        return 'アクセスが拒否されました';
      case 404:
        return 'リソースが見つかりません';
      case 500:
        return 'サーバーエラーが発生しました';
      default:
        return error.message;
    }
  }
  
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'ネットワークエラーが発生しました';
  }
  
  return '予期しないエラーが発生しました';
}

// 使用例
function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
          throw new ApiError('ユーザー取得に失敗しました', response.status);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 8-6. キャッシュとパフォーマンス最適化

#### 8-6-1. 基本的なキャッシュ機能

```jsx
import { useState, useEffect, useRef } from 'react';

// キャッシュ機能付きAPIフック
function useCachedApi(url, cacheTime = 5 * 60 * 1000) { // デフォルト5分
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cacheRef = useRef(new Map());

  useEffect(() => {
    const fetchData = async () => {
      const now = Date.now();
      const cached = cacheRef.current.get(url);

      // キャッシュが有効な場合はキャッシュを使用
      if (cached && (now - cached.timestamp) < cacheTime) {
        setData(cached.data);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // キャッシュに保存
        cacheRef.current.set(url, {
          data: result,
          timestamp: now
        });
        
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, cacheTime]);

  const invalidateCache = () => {
    cacheRef.current.delete(url);
  };

  return { data, loading, error, invalidateCache };
}

// 使用例
function UserListWithCache() {
  const { data: users, loading, error, invalidateCache } = useCachedApi('https://api.example.com/users');

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>ユーザー一覧（キャッシュ付き）</h2>
      <button onClick={invalidateCache}>キャッシュをクリア</button>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### 8-6-2. 無限スクロールとページネーション

```jsx
import { useState, useEffect, useCallback } from 'react';

// 無限スクロール用のフック
function useInfiniteScroll(url, pageSize = 10) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async (pageNum) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${url}?page=${pageNum}&limit=${pageSize}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (pageNum === 1) {
        setData(result.data);
      } else {
        setData(prev => [...prev, ...result.data]);
      }
      
      setHasMore(result.data.length === pageSize);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, pageSize]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchData(nextPage);
    }
  }, [loading, hasMore, page, fetchData]);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  return { data, loading, error, hasMore, loadMore };
}

// 使用例
function InfiniteUserList() {
  const { data: users, loading, error, hasMore, loadMore } = useInfiniteScroll('https://api.example.com/users');

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMore();
    }
  }, [loadMore]);

  if (error) return <div>エラー: {error}</div>;

  return (
    <div onScroll={handleScroll} style={{ height: '400px', overflow: 'auto' }}>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {loading && <div>読み込み中...</div>}
      {!hasMore && <div>すべてのデータを読み込みました</div>}
    </div>
  );
}
```

### 8-7. 実践的な応用例

#### 8-7-1. リアルタイムデータ更新

```jsx
import { useState, useEffect, useRef } from 'react';

function RealTimeUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('データ取得エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    // 30秒ごとにデータを更新
    intervalRef.current = setInterval(fetchUsers, 30000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (loading) return <div>読み込み中...</div>;

  return (
    <div>
      <h2>リアルタイムユーザー一覧</h2>
      <p>30秒ごとに自動更新されます</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### 8-7-2. 検索機能付きAPI

```jsx
import { useState, useEffect, useMemo } from 'react';

function SearchableUserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = searchTerm 
          ? `https://api.example.com/users?search=${encodeURIComponent(searchTerm)}`
          : 'https://api.example.com/users';
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // デバウンス処理
    const timeoutId = setTimeout(fetchUsers, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>検索可能なユーザー一覧</h2>
      
      <input
        type="text"
        placeholder="ユーザーを検索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {loading && <div>読み込み中...</div>}
      
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
      
      {!loading && filteredUsers.length === 0 && (
        <p>該当するユーザーが見つかりません</p>
      )}
    </div>
  );
}
```

### 8-8. まとめ

この章では、ReactアプリケーションでのAPI連携について詳しく学びました：

**重要なポイント：**
1. **APIの基本概念**: HTTPメソッドとREST APIの理解
2. **fetch API**: ネイティブなHTTP通信
3. **axios**: より便利なHTTPクライアント
4. **カスタムフック**: 再利用可能なAPIロジック
5. **エラーハンドリング**: 適切なエラー処理とリトライ機能
6. **パフォーマンス最適化**: キャッシュと無限スクロール

**ベストプラクティス：**
- 適切なエラーハンドリングを実装する
- ローディング状態を管理する
- カスタムフックでロジックを再利用する
- キャッシュを活用してパフォーマンスを向上させる
- セキュリティを考慮したAPI設計を行う

これらの知識を活用して、効率的で保守性の高いReactアプリケーションを構築しましょう。

---

## 第9章：コンポーネントの再利用と設計

### 9-1. コンポーネントの分割と粒度

#### なぜコンポーネントを分割するのか？

**1つのコンポーネントが大きすぎると読みにくくなる**ため、小さな単位に分けるのが基本です。

**分割のメリット：**
- **可読性の向上**：コードが読みやすくなる
- **再利用性**：同じコンポーネントを他の場所でも使える
- **保守性**：バグ修正や機能追加が容易になる
- **テストしやすさ**：小さなコンポーネントはテストしやすい
- **チーム開発**：複数人で同時に開発しやすくなる

#### 分割の基準

```
✔️ OK:
App → Header / UserList / Footer / Sidebar

❌ NG:
Appコンポーネントに全部まとめる
```

**分割の判断基準：**
1. **単一責任の原則**：1つのコンポーネントは1つの役割のみ
2. **再利用可能性**：他の場所でも使えそうか
3. **複雑度**：100行を超える場合は分割を検討
4. **状態の独立性**：独立した状態管理が必要か

#### 実践例：Todoアプリの分割

```jsx
// ❌ 悪い例：全てを1つのコンポーネントに
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  return (
    <div>
      <h1>Todoアプリ</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```jsx
// ✔️ 良い例：適切に分割
function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      <TodoHeader />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

function TodoHeader() {
  return <h1>Todoアプリ</h1>;
}

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいタスクを入力"
      />
      <button type="submit">追加</button>
    </form>
  );
}

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none' 
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}
```

### 9-2. コンポーネントの設計パターン

#### Presentational Component（プレゼンテーショナルコンポーネント）

**特徴：**
- UIの表示だけを担当
- ロジックは持たない
- propsからデータを受け取る
- 再利用しやすい
- テストしやすい

**命名規則：**
- 通常の関数名（例：`UserCard`）
- または`View`サフィックス（例：`UserCardView`）

```jsx
// Presentational Component
function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>年齢: {user.age}歳</p>
      <div className="actions">
        <button onClick={() => onEdit(user.id)}>編集</button>
        <button onClick={() => onDelete(user.id)}>削除</button>
      </div>
    </div>
  );
}

// 使用例
<UserCard 
  user={{ id: 1, name: "田中太郎", email: "tanaka@example.com", age: 25 }}
  onEdit={(id) => console.log('編集:', id)}
  onDelete={(id) => console.log('削除:', id)}
/>
```

#### Container Component（コンテナコンポーネント）

**特徴：**
- 状態管理や処理を担当
- 見た目の部分は子に任せる
- API呼び出しやデータ処理を行う
- ビジネスロジックを含む

**命名規則：**
- `Container`サフィックス（例：`UserListContainer`）
- または機能名（例：`UserList`）

```jsx
// Container Component
function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('ユーザー情報の取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (userId) => {
    // 編集ロジック
    console.log('編集:', userId);
  };

  const handleDelete = async (userId) => {
    try {
      await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError('削除に失敗しました');
    }
  };

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div className="user-list">
      <h2>ユーザー一覧</h2>
      {users.map(user => (
        <UserCard 
          key={user.id}
          user={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
```

#### パターンの組み合わせ例

```jsx
// より実践的な例：商品一覧
function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', price: 'all' });
  const [sortBy, setSortBy] = useState('name');

  // フィルタリングとソートのロジック
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;
    
    // フィルタリング
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.price !== 'all') {
      result = result.filter(p => p.price <= parseInt(filters.price));
    }
    
    // ソート
    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });
    
    return result;
  }, [products, filters, sortBy]);

  return (
    <div>
      <ProductFilters 
        filters={filters}
        onFilterChange={setFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <ProductGrid products={filteredAndSortedProducts} />
    </div>
  );
}

// Presentational Components
function ProductFilters({ filters, onFilterChange, sortBy, onSortChange }) {
  return (
    <div className="filters">
      <select 
        value={filters.category} 
        onChange={(e) => onFilterChange({...filters, category: e.target.value})}
      >
        <option value="all">全カテゴリ</option>
        <option value="electronics">電子機器</option>
        <option value="clothing">衣類</option>
      </select>
      
      <select 
        value={sortBy} 
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="name">名前順</option>
        <option value="price">価格順</option>
      </select>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>¥{product.price.toLocaleString()}</p>
      <button>カートに追加</button>
    </div>
  );
}
```

### 9-3. コンポーネントの再利用パターン

#### 1. 高階コンポーネント（HOC: Higher-Order Component）

**概念：**
- コンポーネントを受け取り、新しいコンポーネントを返す関数
- 共通の機能を複数のコンポーネントに提供

```jsx
// ローディング状態を提供するHOC
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ loading, ...props }) {
    if (loading) {
      return <div>読み込み中...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// 使用例
const UserListWithLoading = withLoading(UserList);
const ProductListWithLoading = withLoading(ProductList);

// 使用
<UserListWithLoading loading={isLoading} users={users} />
```

#### 2. Render Props パターン

**概念：**
- コンポーネントが関数をpropsとして受け取り、その関数を呼び出してレンダリング

```jsx
// データフェッチングを提供するコンポーネント
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading, error });
}

// 使用例
<DataFetcher url="/api/users">
  {({ data, loading, error }) => {
    if (loading) return <div>読み込み中...</div>;
    if (error) return <div>エラー: {error}</div>;
    return <UserList users={data} />;
  }}
</DataFetcher>
```

#### 3. カスタムフック

**概念：**
- 共通のロジックをフックとして抽出
- 最も現代的な再利用パターン

```jsx
// データフェッチングのカスタムフック
function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 使用例
function UserList() {
  const { data: users, loading, error } = useDataFetching('/api/users');

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### 9-4. PropTypesによるpropsの型チェック

#### なぜPropTypesを使うのか？

**メリット：**
- 開発中のバグを早期発見
- コンポーネントの使用方法を明確化
- チーム開発での理解促進
- TypeScriptの代替として使用可能

#### 基本的な使用方法

```bash
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';

function UserProfile({ user, onEdit, showEmail = true }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      {showEmail && <p>{user.email}</p>}
      <button onClick={() => onEdit(user.id)}>編集</button>
    </div>
  );
}

// PropTypesの定義
UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  showEmail: PropTypes.bool
};

// デフォルト値の設定
UserProfile.defaultProps = {
  showEmail: true
};
```

#### よく使うPropTypes

```jsx
function ExampleComponent({ 
  name, 
  age, 
  isActive, 
  items, 
  user, 
  onClick, 
  children 
}) {
  return <div>コンポーネント</div>;
}

ExampleComponent.propTypes = {
  // 基本型
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  
  // 配列とオブジェクト
  items: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string
  }),
  
  // 関数
  onClick: PropTypes.func,
  
  // 子要素
  children: PropTypes.node,
  
  // 複数の型を許可
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  
  // 特定の値のみ許可
  status: PropTypes.oneOf(['pending', 'success', 'error']),
  
  // カスタムバリデーション
  score: function(props, propName, componentName) {
    if (props[propName] < 0 || props[propName] > 100) {
      return new Error(
        `${componentName}の${propName}は0から100の間である必要があります`
      );
    }
  }
};
```

#### 実践的な例

```jsx
function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">¥{product.price.toLocaleString()}</p>
      <div className="actions">
        <button onClick={() => onAddToCart(product.id)}>
          カートに追加
        </button>
        <button onClick={() => onViewDetails(product.id)}>
          詳細を見る
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.oneOf(['electronics', 'clothing', 'books']),
    inStock: PropTypes.bool
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

// 使用例
<ProductCard 
  product={{
    id: 1,
    name: "スマートフォン",
    price: 50000,
    image: "/images/phone.jpg",
    category: "electronics",
    inStock: true
  }}
  onAddToCart={(id) => console.log('カートに追加:', id)}
  onViewDetails={(id) => console.log('詳細表示:', id)}
/>
```

### 9-5. コンポーネント設計のベストプラクティス

#### 1. 命名規則

```jsx
// ✅ 良い例
function UserProfile() { }
function ProductCard() { }
function TodoList() { }

// ❌ 悪い例
function user() { }
function Card() { }
function List() { }
```

#### 2. Propsの設計

```jsx
// ✅ 良い例：明確で具体的
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ❌ 悪い例：曖昧で汎用的すぎる
function Button({ props }) {
  return <button {...props} />;
}
```

#### 3. 状態管理の設計

```jsx
// ✅ 良い例：状態を適切に分割
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('created');

  // フィルタリングとソートのロジック
  const filteredTodos = useMemo(() => {
    let result = todos;
    
    if (filter === 'active') {
      result = result.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      result = result.filter(todo => todo.completed);
    }
    
    if (sortBy === 'created') {
      result.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.text.localeCompare(b.text));
    }
    
    return result;
  }, [todos, filter, sortBy]);

  return (
    <div>
      <TodoFilters filter={filter} onFilterChange={setFilter} />
      <TodoSort sortBy={sortBy} onSortChange={setSortBy} />
      <TodoList todos={filteredTodos} />
    </div>
  );
}
```

#### 4. エラーハンドリング

```jsx
// ✅ 良い例：エラー境界を使用
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('エラーが発生しました:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>何か問題が発生しました。</h1>;
    }

    return this.props.children;
  }
}

// 使用例
<ErrorBoundary>
  <UserList />
</ErrorBoundary>
```

#### 5. パフォーマンス最適化

```jsx
// ✅ 良い例：React.memoで不要な再レンダリングを防ぐ
const UserCard = React.memo(function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>編集</button>
      <button onClick={() => onDelete(user.id)}>削除</button>
    </div>
  );
});

// ✅ 良い例：useCallbackで関数の再作成を防ぐ
function UserList() {
  const [users, setUsers] = useState([]);

  const handleEdit = useCallback((userId) => {
    // 編集ロジック
  }, []);

  const handleDelete = useCallback((userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard 
          key={user.id}
          user={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
```

### 9-6. 実践的なコンポーネント設計例

#### 完全なTodoアプリケーション

```jsx
// メインアプリケーション
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('created');

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredAndSortedTodos = useMemo(() => {
    let result = todos;
    
    // フィルタリング
    if (filter === 'active') {
      result = result.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      result = result.filter(todo => todo.completed);
    }
    
    // ソート
    if (sortBy === 'created') {
      result.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === 'text') {
      result.sort((a, b) => a.text.localeCompare(b.text));
    }
    
    return result;
  }, [todos, filter, sortBy]);

  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoForm onAdd={addTodo} />
      <TodoFilters 
        filter={filter} 
        onFilterChange={setFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <TodoList 
        todos={filteredAndSortedTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <TodoStats todos={todos} />
    </div>
  );
}

// 各コンポーネント
function TodoHeader() {
  return <h1>Todoアプリケーション</h1>;
}

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいタスクを入力..."
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        追加
      </button>
    </form>
  );
}

function TodoFilters({ filter, onFilterChange, sortBy, onSortChange }) {
  return (
    <div className="todo-filters">
      <div className="filter-group">
        <label>フィルター:</label>
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">すべて</option>
          <option value="active">未完了</option>
          <option value="completed">完了済み</option>
        </select>
      </div>
      
      <div className="sort-group">
        <label>ソート:</label>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="created">作成日順</option>
          <option value="text">テキスト順</option>
        </select>
      </div>
    </div>
  );
}

const TodoList = React.memo(function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="no-todos">タスクがありません</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="todo-delete-btn"
      >
        削除
      </button>
    </li>
  );
});

function TodoStats({ todos }) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;

  return (
    <div className="todo-stats">
      <p>総タスク数: {total}</p>
      <p>完了済み: {completed}</p>
      <p>未完了: {active}</p>
    </div>
  );
}

// PropTypesの定義
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

TodoFilters.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf(['created', 'text']).isRequired,
  onSortChange: PropTypes.func.isRequired
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

TodoStats.propTypes = {
  todos: PropTypes.array.isRequired
};
```

この拡充された第9章では、以下の内容を詳細に説明しました：

1. **コンポーネント分割の理論と実践**
2. **Presentational/Container パターンの詳細**
3. **再利用パターン（HOC、Render Props、カスタムフック）**
4. **PropTypesの包括的な使用方法**
5. **ベストプラクティスとパフォーマンス最適化**
6. **完全な実践例（Todoアプリケーション）**

---

## 第10章：状態管理の拡張（Context API・useReducer・Store）

### 10-1. 状態管理の基本概念

#### ローカルステート vs グローバルステート

**ローカルステート（useState）**
- そのコンポーネント内でのみ使用される状態
- 例：フォームの入力値、モーダルの開閉状態

```jsx
function TodoForm() {
  const [input, setInput] = useState(''); // ローカルステート
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  return (
    <form>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
    </form>
  );
}
```

**グローバルステート（Context/Store）**
- 複数のコンポーネント間で共有される状態
- 例：ユーザー情報、テーマ設定、ショッピングカート

```jsx
// ユーザー情報は複数の画面で使われるためグローバルステート
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Profile />
      <Settings />
    </UserContext.Provider>
  );
}
```

**判断基準**
- その状態を**2つ以上のコンポーネント**で使う → グローバルステート
- その状態が**アプリ全体**に関わる → グローバルステート
- その状態が**1つのコンポーネント**のみで使う → ローカルステート

#### 状態のリフトアップ（State Lifting）

共通の親コンポーネントに状態を移動させる手法です。

```jsx
// ❌ 悪い例：兄弟コンポーネント間で状態を共有できない
function TemperatureInput() {
  const [temperature, setTemperature] = useState('');
  return <input value={temperature} onChange={setTemperature} />;
}

function TemperatureDisplay() {
  const [temperature, setTemperature] = useState(''); // 別の状態
  return <p>{temperature}°C</p>;
}

// ✅ 良い例：親で状態を管理
function TemperatureCalculator() {
  const [temperature, setTemperature] = useState('');
  
  return (
    <div>
      <TemperatureInput 
        value={temperature} 
        onChange={setTemperature} 
      />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
}
```

#### Props Drilling問題

深い階層のコンポーネントにpropsを渡す際に発生する問題です。

```jsx
// ❌ Props Drilling問題の例
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Header user={user} />
      <Main>
        <Sidebar user={user} />
        <Content>
          <Article user={user} />
        </Content>
      </Main>
    </div>
  );
}

// ✅ Context APIで解決
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <Main>
          <Sidebar />
          <Content>
            <Article />
          </Content>
        </Main>
      </div>
    </UserContext.Provider>
  );
}

function Article() {
  const { user } = useContext(UserContext); // 直接取得
  return <div>{user.name}</div>;
}
```

#### 単一データフローの原則

Reactの状態管理の基本思想：
1. **状態は上から下に流れる**（親→子）
2. **イベントは下から上に流れる**（子→親）
3. **状態の更新は一箇所で行う**

```jsx
// 単一データフローの例
function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}
```

### 10-2. Context APIの実践的な使い方

#### 複数のContextの組み合わせ

```jsx
// ユーザー情報のContext
const UserContext = createContext();
const ThemeContext = createContext();
const LanguageContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ja');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Header />
          <Main />
          <Footer />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// カスタムフックで使いやすくする
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 使用例
function Profile() {
  const { user, setUser } = useUser();
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={`profile ${theme}`}>
      <h2>{user.name}</h2>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        テーマ切り替え
      </button>
    </div>
  );
}
```

#### Contextのパフォーマンス問題と解決策

**問題：不要な再レンダリング**

```jsx
// ❌ 問題のある例：値が変わらなくても再レンダリング
const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  
  return (
    <AppContext.Provider value={{ user, setUser, count, setCount }}>
      <Header />
      <Main />
    </AppContext.Provider>
  );
}

function Header() {
  const { user } = useContext(AppContext);
  console.log('Header rendered'); // countが変わっても再レンダリングされる
  
  return <header>{user?.name}</header>;
}
```

**解決策1：Contextを分割**

```jsx
// ✅ 解決策：関連する状態ごとにContextを分割
const UserContext = createContext();
const CounterContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CounterContext.Provider value={{ count, setCount }}>
        <Header />
        <Main />
      </CounterContext.Provider>
    </UserContext.Provider>
  );
}
```

**解決策2：useMemoで値を最適化**

```jsx
function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  
  const userValue = useMemo(() => ({ user, setUser }), [user]);
  const counterValue = useMemo(() => ({ count, setCount }), [count]);
  
  return (
    <UserContext.Provider value={userValue}>
      <CounterContext.Provider value={counterValue}>
        <Header />
        <Main />
      </CounterContext.Provider>
    </UserContext.Provider>
  );
}
```

#### カスタムフックとの組み合わせ

```jsx
// カスタムフックでContextをラップ
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
}

function useAuth() {
  const { user, setUser } = useUserContext();
  
  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }, [setUser]);
  
  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);
  
  return {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };
}

// 使用例
function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">ログイン</button>
    </form>
  );
}
```

### 10-3. useReducerの詳細

#### 複雑な状態更新ロジック

```jsx
// フォームデータの管理例
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET':
      return {
        name: '',
        email: '',
        password: '',
        errors: {}
      };
    default:
      return state;
  }
};

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    password: '',
    errors: {}
  });
  
  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // バリデーション
    const errors = {};
    if (!state.name) errors.name = '名前は必須です';
    if (!state.email) errors.email = 'メールアドレスは必須です';
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }
    
    // 送信処理
    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      });
      dispatch({ type: 'RESET' });
    } catch (error) {
      dispatch({ type: 'SET_ERRORS', errors: { submit: '登録に失敗しました' } });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="名前"
      />
      {state.errors.name && <span>{state.errors.name}</span>}
      
      <input
        type="email"
        value={state.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="メールアドレス"
      />
      {state.errors.email && <span>{state.errors.email}</span>}
      
      <button type="submit">登録</button>
    </form>
  );
}
```

#### ミドルウェアパターン

```jsx
// ログ出力ミドルウェア
const loggerMiddleware = (reducer) => {
  return (state, action) => {
    console.log('Previous State:', state);
    console.log('Action:', action);
    
    const newState = reducer(state, action);
    
    console.log('New State:', newState);
    return newState;
  };
};

// 非同期処理ミドルウェア
const asyncMiddleware = (reducer) => {
  return (state, action) => {
    if (action.type === 'ASYNC_ACTION') {
      // 非同期処理を実行
      action.asyncFunction().then(result => {
        action.dispatch({ type: 'ASYNC_SUCCESS', payload: result });
      });
      return { ...state, loading: true };
    }
    return reducer(state, action);
  };
};

// 使用例
const enhancedReducer = asyncMiddleware(loggerMiddleware(counterReducer));
const [state, dispatch] = useReducer(enhancedReducer, { count: 0, loading: false });
```

#### Reducerのテスト方法

```jsx
// Reducerのテスト（純粋関数なのでテストしやすい）
describe('counterReducer', () => {
  it('should increment count', () => {
    const initialState = { count: 0 };
    const action = { type: 'INCREMENT' };
    const newState = counterReducer(initialState, action);
    
    expect(newState.count).toBe(1);
  });
  
  it('should decrement count', () => {
    const initialState = { count: 5 };
    const action = { type: 'DECREMENT' };
    const newState = counterReducer(initialState, action);
    
    expect(newState.count).toBe(4);
  });
  
  it('should return same state for unknown action', () => {
    const initialState = { count: 0 };
    const action = { type: 'UNKNOWN' };
    const newState = counterReducer(initialState, action);
    
    expect(newState).toBe(initialState);
  });
});
```

### 10-4. 実務での状態管理パターン

#### フォーム状態の管理

```jsx
// react-hook-formとの連携
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: '名前は必須です' })}
        placeholder="名前"
      />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input
        {...register('email', { 
          required: 'メールアドレスは必須です',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '有効なメールアドレスを入力してください'
          }
        })}
        placeholder="メールアドレス"
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <button type="submit">送信</button>
    </form>
  );
}
```

#### APIデータのキャッシュ

```jsx
// SWRを使ったデータフェッチング
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(
    `/api/users/${userId}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 30000 // 30秒ごとに更新
    }
  );
  
  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;
  if (!data) return <div>データが見つかりません</div>;
  
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
}
```

#### 楽観的更新

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = async (text) => {
    // 楽観的更新：先にUIを更新
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos(prev => [...prev, newTodo]);
    
    try {
      // 実際のAPI呼び出し
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      
      const savedTodo = await response.json();
      
      // 成功時：サーバーからの正しいデータで更新
      setTodos(prev => 
        prev.map(todo => 
          todo.id === newTodo.id ? savedTodo : todo
        )
      );
    } catch (error) {
      // 失敗時：元に戻す
      setTodos(prev => prev.filter(todo => todo.id !== newTodo.id));
      alert('追加に失敗しました');
    }
  };
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
      <button onClick={() => addTodo('新しいタスク')}>
        タスク追加
      </button>
    </div>
  );
}
```

#### エラー状態の管理

```jsx
// loading/error/dataの3つの状態パターン
function DataComponent() {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null
  });
  
  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      
      setState({
        data,
        loading: false,
        error: null
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error.message
      });
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  if (state.loading) return <div>読み込み中...</div>;
  if (state.error) return <div>エラー: {state.error}</div>;
  if (!state.data) return <div>データがありません</div>;
  
  return (
    <div>
      <h2>{state.data.title}</h2>
      <p>{state.data.description}</p>
    </div>
  );
}
```

### 10-5. 状態管理ライブラリの比較と選択基準

#### Zustand

**特徴：**
- 軽量で学習コストが低い
- Hooksと親和性が高い
- TypeScript対応が優秀
- ボイラープレートが少ない

```jsx
import { create } from 'zustand';

// 基本的なStore
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// 使用例
function Counter() {
  const { count, increment, decrement } = useCounterStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// 複雑なStore
const useUserStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email, password) => {
    set({ isAuthenticated: false });
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const user = await response.json();
      set({ user, isAuthenticated: true });
    } catch (error) {
      set({ user: null, isAuthenticated: false });
      throw error;
    }
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  
  updateProfile: (updates) => {
    const { user } = get();
    set({ user: { ...user, ...updates } });
  }
}));
```

#### Redux Toolkit

**特徴：**
- 業界標準
- 強力な開発者ツール
- 大規模アプリケーションに適している
- イミュータブルな更新が強制される

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Sliceの作成
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Storeの設定
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// 使用例
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
    </div>
  );
}
```

#### 選択基準

| ライブラリ | 適しているケース | 学習コスト | パフォーマンス |
|------------|------------------|------------|----------------|
| **useState + Context** | 小〜中規模アプリ | 低 | 中 |
| **Zustand** | 中規模アプリ、Hooks重視 | 低 | 高 |
| **Redux Toolkit** | 大規模アプリ、チーム開発 | 中 | 高 |
| **Recoil** | React特化、細かい制御 | 中 | 高 |

### 10-6. パフォーマンス最適化

#### メモ化の活用

```jsx
import React, { memo, useMemo, useCallback } from 'react';

// React.memo：コンポーネントのメモ化
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={onUpdate}>更新</button>
    </div>
  );
});

// useMemo：値のメモ化
function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user => user.name.includes(filter));
  }, [users, filter]);
  
  return (
    <ul>
      {filteredUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// useCallback：関数のメモ化
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleUpdate = useCallback(() => {
    console.log('Updating...');
    setCount(prev => prev + 1);
  }, []); // 依存配列が空なので、関数は再作成されない
  
  return (
    <div>
      <p>Count: {count}</p>
      <ExpensiveComponent 
        data={[{ id: 1, name: 'Test' }]} 
        onUpdate={handleUpdate} 
      />
    </div>
  );
}
```

#### 状態の正規化

```jsx
// ❌ 悪い例：ネストしたデータ
const badState = {
  posts: [
    {
      id: 1,
      title: '投稿1',
      author: {
        id: 1,
        name: '田中',
        email: 'tanaka@example.com'
      },
      comments: [
        {
          id: 1,
          text: 'コメント1',
          user: {
            id: 2,
            name: '佐藤'
          }
        }
      ]
    }
  ]
};

// ✅ 良い例：正規化されたデータ
const normalizedState = {
  posts: {
    byId: {
      1: { id: 1, title: '投稿1', authorId: 1, commentIds: [1] }
    },
    allIds: [1]
  },
  users: {
    byId: {
      1: { id: 1, name: '田中', email: 'tanaka@example.com' },
      2: { id: 2, name: '佐藤' }
    },
    allIds: [1, 2]
  },
  comments: {
    byId: {
      1: { id: 1, text: 'コメント1', userId: 2, postId: 1 }
    },
    allIds: [1]
  }
};

// セレクター関数
const selectPost = (state, postId) => {
  const post = state.posts.byId[postId];
  if (!post) return null;
  
  return {
    ...post,
    author: state.users.byId[post.authorId],
    comments: post.commentIds.map(id => ({
      ...state.comments.byId[id],
      user: state.users.byId[state.comments.byId[id].userId]
    }))
  };
};
```

#### 選択的な再レンダリング

```jsx
// コンテキストの分割による最適化
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// ユーザー情報のみを必要とするコンポーネント
function UserProfile() {
  const { user } = useContext(UserContext);
  console.log('UserProfile rendered');
  
  return <div>{user?.name}</div>;
}

// テーマのみを必要とするコンポーネント
function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log('ThemeToggle rendered');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme}
    </button>
  );
}
```

### 10-7. デバッグとテスト

#### Redux DevToolsの使い方

```jsx
// Redux DevToolsの設定
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

// ブラウザでRedux DevToolsを開く
// 1. F12で開発者ツールを開く
// 2. Reduxタブを選択
// 3. アクションの履歴を確認
// 4. 状態の変化を時系列で追跡
```

#### 状態管理のテスト戦略

```jsx
// Reducerのテスト
describe('userReducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const initialState = { user: null, isAuthenticated: false };
    const user = { id: 1, name: '田中' };
    const action = { type: 'LOGIN_SUCCESS', payload: user };
    
    const newState = userReducer(initialState, action);
    
    expect(newState.user).toEqual(user);
    expect(newState.isAuthenticated).toBe(true);
  });
});

// カスタムフックのテスト
import { renderHook, act } from '@testing-library/react-hooks';

describe('useAuth', () => {
  it('should login user', async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });
    
    expect(result.current.isAuthenticated).toBe(true);
  });
});

// コンポーネントのテスト
import { render, screen, fireEvent } from '@testing-library/react';

describe('LoginForm', () => {
  it('should submit form with user data', () => {
    const mockLogin = jest.fn();
    render(<LoginForm onLogin={mockLogin} />);
    
    fireEvent.change(screen.getByPlaceholderText('メールアドレス'), {
      target: { value: 'test@example.com' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('パスワード'), {
      target: { value: 'password' }
    });
    
    fireEvent.click(screen.getByText('ログイン'));
    
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password'
    });
  });
});
```

#### デバッグ時のベストプラクティス

```jsx
// デバッグ用のカスタムフック
function useDebugState(state, label = 'State') {
  useEffect(() => {
    console.log(`${label}:`, state);
  }, [state, label]);
}

// 使用例
function MyComponent() {
  const [user, setUser] = useState(null);
  useDebugState(user, 'User State');
  
  // 状態の変化を追跡
  const handleLogin = (userData) => {
    console.log('Login attempt:', userData);
    setUser(userData);
  };
  
  return <div>{/* コンポーネントの内容 */}</div>;
}

// 開発環境でのみログを出力
const debugLog = (message, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEBUG] ${message}:`, data);
  }
};

// エラーバウンダリー
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>エラーが発生しました</h1>;
    }
    
    return this.props.children;
  }
}
```

---

## 第11章：実践的なアプリケーション開発

### 11-1. プロジェクト構造の設計

#### 11-1-1. フォルダ構造の重要性

実務では、プロジェクトの規模が大きくなるにつれて、コードの整理が重要になります。適切なフォルダ構造を設計することで、以下のメリットがあります：

- **保守性の向上**: 必要なファイルを素早く見つけられる
- **チーム開発の効率化**: 他の開発者が理解しやすい構造
- **スケーラビリティ**: 機能追加時の影響範囲を最小限に抑える
- **再利用性**: 共通コンポーネントの管理が容易

#### 11-1-2. 推奨フォルダ構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── common/         # 汎用的なコンポーネント（Button, Input, Modal等）
│   ├── forms/          # フォーム関連のコンポーネント
│   ├── layout/         # レイアウト関連のコンポーネント（Header, Footer, Sidebar等）
│   └── features/       # 機能別のコンポーネント（TodoItem, UserCard等）
├── hooks/              # カスタムフック
│   ├── api/            # API通信関連のフック
│   ├── form/           # フォーム関連のフック
│   └── ui/             # UI関連のフック
├── pages/              # ページコンポーネント（ルーティング単位）
├── services/           # API通信や外部サービス
│   ├── api/            # APIクライアント
│   └── external/       # 外部サービス（認証、分析等）
├── stores/             # 状態管理（Zustand, Redux等）
├── types/              # TypeScript型定義
│   ├── api/            # API関連の型定義
│   ├── components/     # コンポーネント関連の型定義
│   └── common/         # 共通の型定義
├── utils/              # ユーティリティ関数
│   ├── validation/     # バリデーション関数
│   ├── formatting/     # フォーマット関数
│   └── helpers/        # ヘルパー関数
├── styles/             # スタイルファイル
│   ├── global/         # グローバルスタイル
│   ├── components/     # コンポーネント別スタイル
│   └── themes/         # テーマ設定
├── constants/          # 定数定義
├── assets/             # 画像、アイコン等の静的ファイル
└── tests/              # テストファイル
```

#### 11-1-3. 命名規則の統一

**ファイル名の命名規則**
- コンポーネント: PascalCase（例：`TodoItem.tsx`）
- フック: camelCase（例：`useTodoList.ts`）
- ユーティリティ: camelCase（例：`formatDate.ts`）
- 定数: UPPER_SNAKE_CASE（例：`API_ENDPOINTS.ts`）

**フォルダ名の命名規則**
- すべて小文字（例：`components/`, `hooks/`）
- 複数形で統一（例：`components/`, `types/`）

### 11-2. 状態管理の実践

#### 11-2-1. 状態管理の選択基準

**小規模アプリケーション（1-3人開発）**
- React Context + useReducer
- Zustand（軽量で学習コストが低い）

**中規模アプリケーション（4-10人開発）**
- Zustand
- Redux Toolkit（複雑な状態管理が必要な場合）

**大規模アプリケーション（10人以上開発）**
- Redux Toolkit
- Recoil（Facebook製、実験的）
- Jotai（軽量でTypeScript対応）

#### 11-2-2. Zustandを使った状態管理

Zustandは、軽量で学習コストが低く、TypeScriptとの相性も良い状態管理ライブラリです。

**基本的なストアの作成**

```typescript
// stores/todoStore.ts
import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  // 状態
  todos: Todo[];
  loading: boolean;
  error: string | null;
  filter: 'all' | 'active' | 'completed';
  
  // アクション
  fetchTodos: () => Promise<void>;
  addTodo: (text: string) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  // 初期状態
  todos: [],
  loading: false,
  error: null,
  filter: 'all',
  
  // アクションの実装
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/todos');
      if (!response.ok) {
        throw new Error('データの取得に失敗しました');
      }
      const todos = await response.json();
      set({ todos, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : '不明なエラーが発生しました',
        loading: false 
      });
    }
  },
  
  addTodo: async (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    // 楽観的更新（Optimistic Update）
    set(state => ({ todos: [...state.todos, newTodo] }));
    
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newTodo.text })
      });
      
      if (!response.ok) {
        throw new Error('タスクの追加に失敗しました');
      }
      
      const savedTodo = await response.json();
      // サーバーから返されたデータで更新
      set(state => ({
        todos: state.todos.map(todo => 
          todo.id === newTodo.id ? savedTodo : todo
        )
      }));
    } catch (error) {
      // エラー時は楽観的更新を元に戻す
      set(state => ({
        todos: state.todos.filter(todo => todo.id !== newTodo.id),
        error: error instanceof Error ? error.message : '追加に失敗しました'
      }));
    }
  },
  
  toggleTodo: async (id: number) => {
    const currentTodos = get().todos;
    const todo = currentTodos.find(t => t.id === id);
    if (!todo) return;
    
    // 楽観的更新
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
    
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed })
      });
      
      if (!response.ok) {
        throw new Error('タスクの更新に失敗しました');
      }
    } catch (error) {
      // エラー時は元に戻す
      set(state => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
        error: error instanceof Error ? error.message : '更新に失敗しました'
      }));
    }
  },
  
  deleteTodo: async (id: number) => {
    const currentTodos = get().todos;
    const todo = currentTodos.find(t => t.id === id);
    if (!todo) return;
    
    // 楽観的更新
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
    
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('タスクの削除に失敗しました');
      }
    } catch (error) {
      // エラー時は元に戻す
      set(state => ({
        todos: [...state.todos, todo],
        error: error instanceof Error ? error.message : '削除に失敗しました'
      }));
    }
  },
  
  setFilter: (filter: 'all' | 'active' | 'completed') => {
    set({ filter });
  },
  
  clearCompleted: () => {
    const completedTodos = get().todos.filter(todo => todo.completed);
    const completedIds = completedTodos.map(todo => todo.id);
    
    // 楽観的更新
    set(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }));
    
    // バックグラウンドで削除処理
    completedIds.forEach(async (id) => {
      try {
        await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      } catch (error) {
        console.error(`タスク ${id} の削除に失敗:`, error);
      }
    });
  }
}));
```

#### 11-2-3. カスタムフックの作成

状態管理のロジックをカスタムフックに分離することで、コンポーネントをよりシンプルに保てます。

```typescript
// hooks/useTodoList.ts
import { useEffect, useMemo } from 'react';
import { useTodoStore } from '../stores/todoStore';

export const useTodoList = () => {
  const { 
    todos, 
    loading, 
    error, 
    filter, 
    fetchTodos, 
    setFilter 
  } = useTodoStore();
  
  // フィルタリングされたタスク
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
  
  // 統計情報
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    
    return { total, completed, active };
  }, [todos]);
  
  // 初回読み込み
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  
  return {
    todos: filteredTodos,
    loading,
    error,
    filter,
    stats,
    setFilter
  };
};
```

### 11-3. コンポーネント設計の実践

#### 11-3-1. コンポーネントの分割原則

**単一責任の原則**
- 1つのコンポーネントは1つの責任を持つ
- 複雑なコンポーネントは小さなコンポーネントに分割

**再利用性の向上**
- 汎用的なコンポーネントと具体的なコンポーネントを分離
- Propsで柔軟性を持たせる

#### 11-3-2. 実装例：TODOアプリケーション

**共通コンポーネント**

```typescript
// components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

```typescript
// components/common/Input.tsx
import React, { forwardRef } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  error,
  className = ''
}, ref) => {
  const baseClasses = 'px-3 py-2 border rounded focus:outline-none focus:ring-2';
  const errorClasses = error ? 'border-red-500' : 'border-gray-300';
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
  
  const classes = [
    baseClasses,
    errorClasses,
    disabledClasses,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={classes}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});
```

**機能別コンポーネント**

```typescript
// components/features/TodoItem.tsx
import React from 'react';
import { Button } from '../common/Button';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  createdAt,
  onToggle,
  onDelete
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <div className="flex-1">
          <p className={`${completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {text}
          </p>
          <p className="text-xs text-gray-500">
            作成日: {formatDate(createdAt)}
          </p>
        </div>
      </div>
      <Button
        variant="danger"
        size="small"
        onClick={() => onDelete(id)}
      >
        削除
      </Button>
    </div>
  );
};
```

```typescript
// components/features/TodoList.tsx
import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodoStore } from '../../stores/todoStore';

export const TodoList: React.FC = () => {
  const { todos, loading, error, toggleTodo, deleteTodo } = useTodoStore();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">読み込み中...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <p className="text-red-800">エラー: {error}</p>
      </div>
    );
  }
  
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        タスクがありません。新しいタスクを追加してください。
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
};
```

```typescript
// components/features/AddTodoForm.tsx
import React, { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { useTodoStore } from '../../stores/todoStore';

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { addTodo } = useTodoStore();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!text.trim()) {
      setError('タスクの内容を入力してください');
      return;
    }
    
    if (text.length > 100) {
      setError('タスクは100文字以内で入力してください');
      return;
    }
    
    try {
      await addTodo(text.trim());
      setText('');
    } catch (error) {
      setError('タスクの追加に失敗しました');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          value={text}
          onChange={setText}
          placeholder="新しいタスクを入力してください"
          error={error}
        />
      </div>
      <Button type="submit" disabled={!text.trim()}>
        タスクを追加
      </Button>
    </form>
  );
};
```

```typescript
// components/features/TodoStats.tsx
import React from 'react';
import { useTodoList } from '../../hooks/useTodoList';

export const TodoStats: React.FC = () => {
  const { stats, filter, setFilter } = useTodoList();
  
  const filterButtons = [
    { key: 'all' as const, label: 'すべて', count: stats.total },
    { key: 'active' as const, label: '未完了', count: stats.active },
    { key: 'completed' as const, label: '完了', count: stats.completed }
  ];
  
  return (
    <div className="bg-gray-50 p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">統計</h3>
        <div className="text-sm text-gray-600">
          合計: {stats.total} | 完了: {stats.completed} | 未完了: {stats.active}
        </div>
      </div>
      
      <div className="flex space-x-2">
        {filterButtons.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1 rounded text-sm ${
              filter === key
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {label} ({count})
          </button>
        ))}
      </div>
    </div>
  );
};
```

### 11-4. エラーハンドリングとユーザビリティ

#### 11-4-1. エラーバウンダリー

```typescript
// components/common/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // エラー監視サービスに送信
    // reportError(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <h2 className="text-red-800 font-medium">エラーが発生しました</h2>
          <p className="text-red-600 text-sm mt-1">
            ページを再読み込みしてください。
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm"
          >
            再読み込み
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

#### 11-4-2. ローディング状態の管理

```typescript
// components/common/LoadingSpinner.tsx
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = '読み込み中...'
}) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );
};
```

### 11-5. パフォーマンス最適化

#### 11-5-1. React.memoによるメモ化

```typescript
// components/features/TodoItem.tsx（最適化版）
import React, { memo } from 'react';
import { Button } from '../common/Button';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = memo<TodoItemProps>(({
  id,
  text,
  completed,
  createdAt,
  onToggle,
  onDelete
}) => {
  // コンポーネントの実装（前回と同じ）
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50">
      {/* 既存のJSX */}
    </div>
  );
});
```

#### 11-5-2. useCallbackとuseMemoの活用

```typescript
// hooks/useTodoList.ts（最適化版）
import { useEffect, useMemo, useCallback } from 'react';
import { useTodoStore } from '../stores/todoStore';

export const useTodoList = () => {
  const { 
    todos, 
    loading, 
    error, 
    filter, 
    fetchTodos, 
    setFilter 
  } = useTodoStore();
  
  // メモ化されたフィルタリング結果
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
  
  // メモ化された統計情報
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    
    return { total, completed, active };
  }, [todos]);
  
  // メモ化されたフィルター変更関数
  const handleFilterChange = useCallback((newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
  }, [setFilter]);
  
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  
  return {
    todos: filteredTodos,
    loading,
    error,
    filter,
    stats,
    setFilter: handleFilterChange
  };
};
```

### 11-6. テストの実装

#### 11-6-1. コンポーネントテスト

```typescript
// components/features/__tests__/TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../TodoItem';

const mockTodo = {
  id: 1,
  text: 'テストタスク',
  completed: false,
  createdAt: new Date('2024-01-01T00:00:00Z'),
  onToggle: jest.fn(),
  onDelete: jest.fn()
};

describe('TodoItem', () => {
  it('タスクの内容を表示する', () => {
    render(<TodoItem {...mockTodo} />);
    expect(screen.getByText('テストタスク')).toBeInTheDocument();
  });
  
  it('チェックボックスをクリックするとonToggleが呼ばれる', () => {
    render(<TodoItem {...mockTodo} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockTodo.onToggle).toHaveBeenCalledWith(1);
  });
  
  it('削除ボタンをクリックするとonDeleteが呼ばれる', () => {
    render(<TodoItem {...mockTodo} />);
    const deleteButton = screen.getByText('削除');
    fireEvent.click(deleteButton);
    expect(mockTodo.onDelete).toHaveBeenCalledWith(1);
  });
  
  it('完了済みタスクは取り消し線が表示される', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(<TodoItem {...completedTodo} />);
    const taskText = screen.getByText('テストタスク');
    expect(taskText).toHaveClass('line-through');
  });
});
```

#### 11-6-2. カスタムフックのテスト

```typescript
// hooks/__tests__/useTodoList.test.ts
import { renderHook, act } from '@testing-library/react';
import { useTodoList } from '../useTodoList';
import { useTodoStore } from '../../stores/todoStore';

// モック
jest.mock('../../stores/todoStore');

describe('useTodoList', () => {
  const mockUseTodoStore = useTodoStore as jest.MockedFunction<typeof useTodoStore>;
  
  beforeEach(() => {
    mockUseTodoStore.mockReturnValue({
      todos: [
        { id: 1, text: 'タスク1', completed: false, createdAt: new Date() },
        { id: 2, text: 'タスク2', completed: true, createdAt: new Date() }
      ],
      loading: false,
      error: null,
      filter: 'all',
      fetchTodos: jest.fn(),
      setFilter: jest.fn()
    });
  });
  
  it('フィルタリングされたタスクを返す', () => {
    const { result } = renderHook(() => useTodoList());
    expect(result.current.todos).toHaveLength(2);
  });
  
  it('統計情報を正しく計算する', () => {
    const { result } = renderHook(() => useTodoList());
    expect(result.current.stats).toEqual({
      total: 2,
      completed: 1,
      active: 1
    });
  });
});
```

### 11-7. デプロイメントと本番環境

#### 11-7-1. 環境変数の管理

```typescript
// .env.local
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_ENVIRONMENT=development

// .env.production
REACT_APP_API_BASE_URL=https://api.example.com/api
REACT_APP_ENVIRONMENT=production
```

```typescript
// utils/config.ts
export const config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  isDevelopment: process.env.REACT_APP_ENVIRONMENT === 'development',
  isProduction: process.env.REACT_APP_ENVIRONMENT === 'production'
};
```

#### 11-7-2. ビルド最適化

```json
// package.json
{
  "scripts": {
    "build": "GENERATE_SOURCEMAP=false react-scripts build",
    "build:analyze": "npm run build && npx serve -s build"
  }
}
```

### 11-8. アプリケーションの完成

```typescript
// App.tsx
import React from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { TodoList } from './components/features/TodoList';
import { AddTodoForm } from './components/features/AddTodoForm';
import { TodoStats } from './components/features/TodoStats';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            TODOアプリケーション
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <AddTodoForm />
            <TodoStats />
            <TodoList />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
```

### 11-9. 実務でのベストプラクティス

#### 11-9-1. コードレビューのポイント

**コンポーネント設計**
- 単一責任の原則を守っているか
- 再利用可能なコンポーネントになっているか
- Propsの型定義は適切か

**パフォーマンス**
- 不要な再レンダリングが発生していないか
- メモ化を適切に使用しているか
- 大きなリストの場合は仮想化を検討しているか

**エラーハンドリング**
- 適切なエラーバウンダリーが設定されているか
- ユーザーフレンドリーなエラーメッセージを表示しているか
- ネットワークエラーに対する適切な処理があるか

#### 11-9-2. チーム開発での注意点

**命名規則の統一**
- コンポーネント名はPascalCase
- ファイル名はコンポーネント名と一致
- フォルダ名は小文字で複数形

**コミットメッセージの規約**
```
feat: 新しい機能の追加
fix: バグ修正
docs: ドキュメントの更新
style: コードスタイルの変更
refactor: リファクタリング
test: テストの追加・修正
chore: その他の変更
```

**ブランチ戦略**
- `main`: 本番環境
- `develop`: 開発環境
- `feature/機能名`: 新機能開発
- `hotfix/修正内容`: 緊急修正

この拡充により、React初心者でも実務で使える包括的な知識を身につけることができます。基本概念から実践的なパターンまで、段階的に学習できる構成になっています。