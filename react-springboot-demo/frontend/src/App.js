import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import TodoApp from "./components/TodoApp";

function App() {
  const [activeTab, setActiveTab] = useState("todo");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Spring Boot Demo</h1>
        <nav className="nav-tabs">
          <button
            className={activeTab === "todo" ? "active" : ""}
            onClick={() => setActiveTab("todo")}
          >
            TODOアプリ
          </button>
          <button
            className={activeTab === "user" ? "active" : ""}
            onClick={() => setActiveTab("user")}
          >
            ユーザー管理
          </button>
        </nav>
      </header>

      <main className="App-main">
        {activeTab === "todo" ? <TodoApp /> : <UserList />}
      </main>
    </div>
  );
}

export default App;
