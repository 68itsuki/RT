// Reactライブラリから必要な機能をインポート
// useState: コンポーネント内で状態を管理するためのフック
// useEffect: コンポーネントのライフサイクルを管理するためのフック
import React, { useState, useEffect } from "react";
// APIサービスをインポート（ユーザーのCRUD操作を行う関数群）
import { userService } from "../services/api";
// このコンポーネント専用のCSSファイルをインポート
import "./UserList.css";

// UserListコンポーネントを定義（関数コンポーネント）
const UserList = () => {
  // users: ユーザーリストを格納する状態変数（初期値は空配列）
  const [users, setUsers] = useState([]);
  // loading: データ読み込み中かどうかを管理する状態変数（初期値はtrue）
  const [loading, setLoading] = useState(true);
  // error: エラーメッセージを格納する状態変数（初期値はnull）
  const [error, setError] = useState(null);
  // formData: ユーザー作成・編集フォームのデータを管理する状態変数
  const [formData, setFormData] = useState({ name: "", email: "" });
  // editingId: 現在編集中のユーザーIDを管理する状態変数（初期値はnull）
  const [editingId, setEditingId] = useState(null);

  // ユーザーリストを取得する非同期関数
  const fetchUsers = async () => {
    try {
      // 読み込み開始時にloadingをtrueに設定
      setLoading(true);
      // APIからすべてのユーザーを取得
      const data = await userService.getAllUsers();
      // 取得したデータをusers状態に設定
      setUsers(data);
      // エラーをクリア
      setError(null);
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("ユーザーの取得に失敗しました");
    } finally {
      // 成功・失敗に関わらず、読み込み完了時にloadingをfalseに設定
      setLoading(false);
    }
  };

  // useEffectフック：コンポーネントのマウント時に実行
  useEffect(() => {
    fetchUsers(); // ユーザーリストを取得
  }, []); // 空の依存配列なので、マウント時にのみ実行

  // 新しいユーザーを作成する非同期関数
  const handleCreateUser = async (e) => {
    e.preventDefault(); // フォームのデフォルト送信動作を防ぐ
    try {
      // 新しいユーザーをAPIで作成
      await userService.createUser(formData);
      // フォームをリセット（空の状態に戻す）
      setFormData({ name: "", email: "" });
      // ユーザーリストを再取得
      fetchUsers();
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("ユーザーの作成に失敗しました");
    }
  };

  // ユーザーを更新する非同期関数
  const handleUpdateUser = async (id) => {
    try {
      // 指定されたIDのユーザーを更新
      await userService.updateUser(id, formData);
      // フォームをリセット（空の状態に戻す）
      setFormData({ name: "", email: "" });
      // 編集中のIDをクリア
      setEditingId(null);
      // ユーザーリストを再取得
      fetchUsers();
    } catch (err) {
      // エラーが発生した場合、エラーメッセージを設定
      setError("ユーザーの更新に失敗しました");
    }
  };

  // ユーザーを削除する非同期関数
  const handleDeleteUser = async (id) => {
    // 削除前に確認ダイアログを表示
    if (window.confirm("このユーザーを削除しますか？")) {
      try {
        // 指定されたIDのユーザーを削除
        await userService.deleteUser(id);
        // ユーザーリストを再取得
        fetchUsers();
      } catch (err) {
        // エラーが発生した場合、エラーメッセージを設定
        setError("ユーザーの削除に失敗しました");
      }
    }
  };

  // ユーザーの編集を開始する関数
  const startEditing = (user) => {
    // フォームにユーザーの現在のデータを設定
    setFormData({ name: user.name, email: user.email });
    // 編集中のユーザーIDを設定
    setEditingId(user.id);
  };

  // 読み込み中の場合、読み込み中のメッセージを表示
  if (loading) return <div>読み込み中...</div>;

  // コンポーネントのJSXを返す
  return (
    <div className="user-list">
      <h1>ユーザー管理</h1>

      {/* エラーがある場合、エラーメッセージを表示 */}
      {error && <div className="error">{error}</div>}

      {/* ユーザー作成・編集フォーム */}
      <form onSubmit={handleCreateUser} className="user-form">
        <h2>{editingId ? "ユーザー編集" : "ユーザー作成"}</h2>
        {/* 名前入力フィールド */}
        <input
          type="text"
          placeholder="名前"
          value={formData.name} // 現在の名前値を表示
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} // 入力時に名前を更新
          required // 必須入力項目
        />
        {/* メールアドレス入力フィールド */}
        <input
          type="email"
          placeholder="メールアドレス"
          value={formData.email} // 現在のメールアドレス値を表示
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} // 入力時にメールアドレスを更新
          required // 必須入力項目
        />
        {/* 送信ボタン（作成時は「作成」、編集時は「更新」） */}
        <button type="submit">{editingId ? "更新" : "作成"}</button>
        {/* 編集中の場合のみキャンセルボタンを表示 */}
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setFormData({ name: "", email: "" }); // フォームをリセット
              setEditingId(null); // 編集中のIDをクリア
            }}
          >
            キャンセル
          </button>
        )}
      </form>

      {/* ユーザーリストの表示エリア */}
      <div className="users-grid">
        {/* 各ユーザーをマップして表示 */}
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            {/* ユーザーの操作ボタンエリア */}
            <div className="user-actions">
              {/* 編集ボタン */}
              <button onClick={() => startEditing(user)}>編集</button>
              {/* 削除ボタン */}
              <button onClick={() => handleDeleteUser(user.id)}>削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// コンポーネントをエクスポート（他のファイルで使用できるようにする）
export default UserList;
