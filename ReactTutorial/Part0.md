## Part 0. はじめに／準備

### 0-1. この教材で学べること（数当てゲームを作ろう！）

このチュートリアルでは、Reactというライブラリを使って「数当てゲーム」を作成します。

**数当てゲームのルール：**

* アプリがランダムに選んだ1〜100の数字を、ユーザーが当てます。
* 入力した数字に対して「もっと大きいよ！」「もっと小さいよ！」というヒントが表示されます。
* 正解すると「おめでとう！」のメッセージと挑戦回数が表示されます。

このシンプルなゲームを通して、次のようなReactの基本を体験できます：

* コンポーネントの分割と再利用
* 状態（State）の使い方（useState）
* イベントハンドリング
* フォーム入力の制御
* 条件分岐による表示の切り替え

**目的：**
「Reactって面白い！作れる！」という感覚を味わいながら、最後までやり切れるように構成しています。

---

### 0-2. 必要な前提知識・PC環境

この教材では、以下の知識があることを前提とします：

#### 🔤 前提知識（最低限）

* HTML / CSSの基本構文がわかる
* JavaScriptの基本文法（変数、if文、関数、配列、オブジェクト）
* ターミナルでコマンドを実行したことがある

#### 💻 推奨環境

| 項目           | 推奨バージョン                   |
| ------------ | ------------------------- |
| OS           | Windows 10以上 / macOS 11以上 |
| Node.js      | 18以上                      |
| npm または Yarn | 最新版（どちらでもOK）              |
| エディタ         | Visual Studio Code（推奨）    |
| ブラウザ         | Google Chrome（推奨）         |

---

### 0-3. 使用ツールのインストール

#### ① Node.js のインストール

以下の公式サイトからインストーラーをダウンロードしてください：
[https://nodejs.org/ja](https://nodejs.org/ja)

* インストールが完了したら、ターミナルで以下を確認しましょう：

```bash
node -v
npm -v
```
![](/ReactTutorial/img/Part0/Part0-1.png)

#### ② パッケージマネージャ（npm または Yarn）

今回は `npm` でも `Yarn` でもOKです。
Yarnを使いたい場合は以下のコマンドでインストール：

```bash
npm install --global yarn
```

#### ③ Vite（Reactプロジェクトの雛形ジェネレーター）

Viteは、Reactの学習に最適な高速な開発ツールです。
プロジェクトの作成時に自動でインストールされます。

---

### 0-4. プロジェクトの初期化と動作確認

以下の手順でReactプロジェクトを立ち上げましょう（Yarn版とnpm版の両方を紹介します）。

#### 🛠 プロジェクト作成コマンド

```bash
# ViteでReactプロジェクトを作成（TypeScriptは使わずJavaScriptで進めます）
npm create vite@latest react-guess-game -- --template react
# または
yarn create vite react-guess-game --template react
```
![](/ReactTutorial/img/Part0/Part0-2.png)
#### 📁 ディレクトリに移動して依存関係をインストール

```bash
cd react-guess-game
npm install   # または yarn
```

#### 🚀 開発サーバーを起動

```bash
npm run dev   # または yarn dev
```
![](/ReactTutorial/img/Part0/Part0-3.png)

#### 🌐 ブラウザで表示を確認

表示されたURL（例：[http://localhost:5173）を開き、Viteの初期画面が表示されれば成功です！](http://localhost:5173）を開き、Viteの初期画面が表示されれば成功です！)  

![](/ReactTutorial/img/Part0/Part0-4.png)
---

次は、実際にReactコンポーネントを作っていくところから始めていきましょう！
