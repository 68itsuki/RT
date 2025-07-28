import React, { useState, useEffect } from "react";
import { userService } from "../services/api";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("ユーザーの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await userService.createUser(formData);
      setFormData({ name: "", email: "" });
      fetchUsers();
    } catch (err) {
      setError("ユーザーの作成に失敗しました");
    }
  };

  const handleUpdateUser = async (id) => {
    try {
      await userService.updateUser(id, formData);
      setFormData({ name: "", email: "" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      setError("ユーザーの更新に失敗しました");
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("このユーザーを削除しますか？")) {
      try {
        await userService.deleteUser(id);
        fetchUsers();
      } catch (err) {
        setError("ユーザーの削除に失敗しました");
      }
    }
  };

  const startEditing = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  if (loading) return <div>読み込み中...</div>;

  return (
    <div className="user-list">
      <h1>ユーザー管理</h1>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleCreateUser} className="user-form">
        <h2>{editingId ? "ユーザー編集" : "ユーザー作成"}</h2>
        <input
          type="text"
          placeholder="名前"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button type="submit">{editingId ? "更新" : "作成"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setFormData({ name: "", email: "" });
              setEditingId(null);
            }}
          >
            キャンセル
          </button>
        )}
      </form>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <div className="user-actions">
              <button onClick={() => startEditing(user)}>編集</button>
              <button onClick={() => handleDeleteUser(user.id)}>削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
