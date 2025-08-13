import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "APIエラーが発生しました");
  } else if (error.request) {
    console.error("Network Error:", error.request);
    throw new Error("サーバーに接続できません");
  } else {
    console.error("Request Error:", error.message);
    throw new Error("リクエストエラーが発生しました");
  }
};

export const userService = {
  getAllUsers: async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getUserById: async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createUser: async (userData) => {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteUser: async (id) => {
    try {
      await api.delete(`/users/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export const todoService = {
  getAllTodos: async () => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getCompletedTodos: async () => {
    try {
      const response = await api.get("/todos/completed");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getPendingTodos: async () => {
    try {
      const response = await api.get("/todos/pending");
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createTodo: async (todoData) => {
    try {
      const response = await api.post("/todos", todoData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateTodo: async (id, todoData) => {
    try {
      const response = await api.put(`/todos/${id}`, todoData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  toggleTodoStatus: async (id) => {
    try {
      const response = await api.patch(`/todos/${id}/toggle`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteTodo: async (id) => {
    try {
      await api.delete(`/todos/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
