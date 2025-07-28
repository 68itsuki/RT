import React, { useState, useEffect } from "react";
import { todoService } from "../services/api";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [filter, setFilter] = useState("all");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      let data;
      switch (filter) {
        case "completed":
          data = await todoService.getCompletedTodos();
          break;
        case "pending":
          data = await todoService.getPendingTodos();
          break;
        default:
          data = await todoService.getAllTodos();
      }
      setTodos(data);
      setError(null);
    } catch (err) {
      setError("TODOの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    try {
      await todoService.createTodo(newTodo);
      setNewTodo({ title: "", description: "" });
      fetchTodos();
    } catch (err) {
      setError("TODOの作成に失敗しました");
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      await todoService.toggleTodoStatus(id);
      fetchTodos();
    } catch (err) {
      setError("TODOの状態変更に失敗しました");
    }
  };

  const handleDeleteTodo = async (id) => {
    if (window.confirm("このTODOを削除しますか？")) {
      try {
        await todoService.deleteTodo(id);
        fetchTodos();
      } catch (err) {
        setError("TODOの削除に失敗しました");
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("ja-JP");
  };

  if (loading) return <div>読み込み中...</div>;

  return (
    <div className="todo-app">
      <h1>TODOアプリ</h1>

      {error && <div className="error">{error}</div>}

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          すべて
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          未完了
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          完了済み
        </button>
      </div>

      <form onSubmit={handleCreateTodo} className="todo-form">
        <h2>新しいTODO</h2>
        <input
          type="text"
          placeholder="タイトル"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          required
        />
        <textarea
          placeholder="説明（オプション）"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button type="submit">追加</button>
      </form>

      <div className="todos-list">
        {todos.length === 0 ? (
          <p className="no-todos">TODOがありません</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <div className="todo-content">
                <h3>{todo.title}</h3>
                {todo.description && <p>{todo.description}</p>}
                <div className="todo-meta">
                  <span>作成日: {formatDate(todo.createdAt)}</span>
                  {todo.completed && (
                    <span>完了日: {formatDate(todo.completedAt)}</span>
                  )}
                </div>
              </div>
              <div className="todo-actions">
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  className={todo.completed ? "uncomplete" : "complete"}
                >
                  {todo.completed ? "未完了に戻す" : "完了にする"}
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete"
                >
                  削除
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoApp;
