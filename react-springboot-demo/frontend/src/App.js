// ReactライブラリからuseStateフックをインポート
import React, { useState } from "react";
// このコンポーネント専用のCSSファイルをインポート
import "./App.css";
// UserListコンポーネントをインポート
import UserList from "./components/UserList";
// TodoAppコンポーネントをインポート
import TodoApp from "./components/TodoApp";

// Appコンポーネントを定義（アプリケーションのメインコンポーネント）
function App() {
  // activeTab: 現在アクティブなタブを管理する状態変数（初期値は"todo"）
  const [activeTab, setActiveTab] = useState("todo");

  // コンポーネントのJSXを返す
  return (
    <div className="App">
      {/* アプリケーションのヘッダー部分 */}
      <header className="App-header">
        <h1>React + Spring Boot Demo</h1>
        {/* ナビゲーションタブ */}
        <nav className="nav-tabs">
          {/* TODOアプリタブ */}
          <button
            className={activeTab === "todo" ? "active" : ""} // 現在選択されている場合はactiveクラスを適用
            onClick={() => setActiveTab("todo")} // クリック時にactiveTabを"todo"に設定
          >
            TODOアプリ
          </button>
          {/* ユーザー管理タブ */}
          <button
            className={activeTab === "user" ? "active" : ""} // 現在選択されている場合はactiveクラスを適用
            onClick={() => setActiveTab("user")} // クリック時にactiveTabを"user"に設定
          >
            ユーザー管理
          </button>
        </nav>
      </header>

      {/* メインコンテンツエリア */}
      <main className="App-main">
        {/* activeTabの値に応じて表示するコンポーネントを切り替え */}
        {activeTab === "todo" ? <TodoApp /> : <UserList />}
      </main>
    </div>
  );
}

// コンポーネントをエクスポート（他のファイルで使用できるようにする）
export default App;
