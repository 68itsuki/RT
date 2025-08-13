// Reactライブラリから必要な機能をインポート
// useState: コンポーネント内で状態を管理するためのフック
// useEffect: コンポーネントのライフサイクルを管理するためのフック
import React, { useState, useEffect } from "react";
// APIサービスをインポート（TODOのCRUD操作を行う関数群）
import { todoService } from "../services/api";
// このコンポーネント専用のCSSファイルをインポート
import "./TodoApp.css";

// TodoAppコンポーネントを定義（関数コンポーネント）
const TodoApp = () => {
  // todos: TODOリストを格納する状態変数（初期値は空配列）
  const [todos, setTodos] = useState([]);
  // loading: データ読み込み中かどうかを管理する状態変数（初期値はtrue）
  const [loading, setLoading] = useState(true);
  // error: エラーメッセージを格納する状態変数（初期値はnull）
  const [error, setError] = useState(null);
  // newTodo: 新しいTODOの入力フォームデータを管理する状態変数
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  // filter: 現在選択されているフィルターを管理する状態変数（初期値は"all"）
  const [filter, setFilter] = useState("all");

  // TODOリストを取得する非同期関数
  const fetchTodos = async () => {
    try {
      // 読み込み開始時にloadingをtrueに設定
      setLoading(true);
      // データを格納する変数を宣言
      let data;
      // 現在選択されているフィルターに応じて、異なるAPIを呼び出す
      switch (filter) {
        case "completed":
          // 完了済みのTODOのみを取得
          data = await todoService.getCompletedTodos();
          break;
        case "pending":
          // 未完了のTODOのみを取得
          data = await todoService.getPendingTodos();
          break;
        default:
          // すべてのTODOを取得
          data = await todoService.getAllTodos();
      }
      // 取得したデータをtodos状態に設定
      setTodos(data);
      // エラーをクリア
      setError(null);
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("TODOの取得に失敗しました");
    } finally {
      // 成功・失敗に関わらず、読み込み完了時にloadingをfalseに設定
      setLoading(false);
    }
  };

  // useEffectフック：コンポーネントのマウント時とfilterが変更された時に実行
  useEffect(() => {
    fetchTodos(); // TODOリストを取得
  }, [filter]); // filterが変更された時に再実行

  // 新しいTODOを作成する非同期関数
  const handleCreateTodo = async (e) => {
    e.preventDefault(); // フォームのデフォルト送信動作を防ぐ
    try {
      // 新しいTODOをAPIで作成
      await todoService.createTodo(newTodo);
      // フォームをリセット（空の状態に戻す）
      setNewTodo({ title: "", description: "" });
      // TODOリストを再取得
      fetchTodos();
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("TODOの作成に失敗しました");
    }
  };

  // TODOの完了/未完了状態を切り替える非同期関数
  const handleToggleTodo = async (id) => {
    try {
      // 指定されたIDのTODOの状態を切り替え
      await todoService.toggleTodoStatus(id);
      // TODOリストを再取得
      fetchTodos();
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("TODOの状態変更に失敗しました");
    }
  };

  // TODOを削除する非同期関数
  const handleDeleteTodo = async (id) => {
    // 削除前に確認ダイアログを表示
    if (window.confirm("このTODOを削除しますか？")) {
      try {
        // 指定されたIDのTODOを削除
        await todoService.deleteTodo(id);
        // TODOリストを再取得
        fetchTodos();
      } catch (err) {
        // エラーが発生した場合、エラーメッセージを設定
        setError("TODOの削除に失敗しました");
      }
    }
  };

  // 日付文字列を日本語形式にフォーマットする関数
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("ja-JP");
  };

  // 読み込み中の場合、読み込み中のメッセージを表示
  if (loading) return <div>読み込み中...</div>;

  // コンポーネントのJSXを返す
  return (
    <div className="todo-app">
      <h1>TODOアプリ</h1>

      {/* エラーがある場合、エラーメッセージを表示 */}
      {error && <div className="error">{error}</div>}

      {/* フィルターボタン群 */}
      <div className="filter-buttons">
        {/* すべてのTODOを表示するボタン */}
        <button
          className={filter === "all" ? "active" : ""} // 現在選択されている場合はactiveクラスを適用
          onClick={() => setFilter("all")} // クリック時にfilterを"all"に設定
        >
          すべて
        </button>
        {/* 未完了のTODOのみを表示するボタン */}
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          未完了
        </button>
        {/* 完了済みのTODOのみを表示するボタン */}
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          完了済み
        </button>
      </div>

      {/* 新しいTODOを作成するフォーム */}
      <form onSubmit={handleCreateTodo} className="todo-form">
        <h2>新しいTODO</h2>
        {/* タイトル入力フィールド */}
        <input
          type="text"
          placeholder="タイトル"
          value={newTodo.title} // 現在のタイトル値を表示
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })} // 入力時にタイトルを更新
          required // 必須入力項目
        />
        {/* 説明入力フィールド */}
        <textarea
          placeholder="説明（オプション）"
          value={newTodo.description} // 現在の説明値を表示
          onChange={
            (e) => setNewTodo({ ...newTodo, description: e.target.value }) // 入力時に説明を更新
          }
        />
        {/* 送信ボタン */}
        <button type="submit">追加</button>
      </form>

      {/* TODOリストの表示エリア */}
      <div className="todos-list">
        {/* TODOが存在しない場合のメッセージ */}
        {todos.length === 0 ? (
          <p className="no-todos">TODOがありません</p>
        ) : (
          // TODOが存在する場合、各TODOをマップして表示
          todos.map((todo) => (
            <div
              key={todo.id} // Reactのkeyプロパティ（リストの各要素に必要）
              className={`todo-item ${todo.completed ? "completed" : ""}`} // 完了済みの場合はcompletedクラスを追加
            >
              {/* TODOの内容表示エリア */}
              <div className="todo-content">
                <h3>{todo.title}</h3>
                {/* 説明がある場合のみ表示 */}
                {todo.description && <p>{todo.description}</p>}
                {/* TODOのメタ情報（作成日、完了日） */}
                <div className="todo-meta">
                  <span>作成日: {formatDate(todo.createdAt)}</span>
                  {/* 完了済みの場合のみ完了日を表示 */}
                  {todo.completed && (
                    <span>完了日: {formatDate(todo.completedAt)}</span>
                  )}
                </div>
              </div>
              {/* TODOの操作ボタンエリア */}
              <div className="todo-actions">
                {/* 完了/未完了切り替えボタン */}
                <button
                  onClick={() => handleToggleTodo(todo.id)} // クリック時に状態切り替え関数を呼び出し
                  className={todo.completed ? "uncomplete" : "complete"} // 状態に応じてクラス名を変更
                >
                  {todo.completed ? "未完了に戻す" : "完了にする"}
                </button>
                {/* 削除ボタン */}
                <button
                  onClick={() => handleDeleteTodo(todo.id)} // クリック時に削除関数を呼び出し
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

// コンポーネントをエクスポート（他のファイルで使用できるようにする）
export default TodoApp;
