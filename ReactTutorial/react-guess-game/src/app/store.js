// Redux ToolkitのconfigureStoreをインポート（ストア作成用）
import { configureStore } from "@reduxjs/toolkit";
// gameSliceのリデューサーをインポート
import gameReducer from "../features/gameSlice";

// Reduxストアを設定・作成
// ストア：アプリケーション全体の状態を管理する中央の保管場所
export const store = configureStore({
  reducer: {
    // game: ゲーム関連の状態を管理するリデューサー
    // この名前（game）でstate.gameとしてアクセスできる
    game: gameReducer,
  },
  // 開発時のデバッグ機能を自動で有効化
  // Redux DevToolsの設定も自動で行われる
});
