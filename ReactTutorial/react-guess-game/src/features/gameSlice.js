// Redux ToolkitのcreateSliceをインポート（スライス作成用）
import { createSlice } from "@reduxjs/toolkit";

// 初期状態を定義（アプリケーションの初期データ）
const initialState = {
  answer: Math.floor(Math.random() * 100) + 1, // 正解の数字（1〜100のランダム）
  guess: "", // ユーザーが入力した値
  message: "", // 表示するメッセージ
  tries: 0, // 試行回数
  isFinished: false, // ゲーム終了状態
  min: 1, // 難易度設定：最小値
  max: 100, // 難易度設定：最大値
  history: [], // 過去のプレイ履歴（試行回数の配列）
};

// Redux ToolkitのcreateSliceでスライスを作成
// スライス：状態、アクション、リデューサーをまとめたもの
export const gameSlice = createSlice({
  name: "game", // スライスの名前（デバッグ用）
  initialState, // 初期状態
  reducers: {
    // アクション：状態を変更するための関数群

    // ユーザーの入力値を設定するアクション
    setGuess: (state, action) => {
      state.guess = action.payload; // action.payloadには入力値が含まれる
    },

    // 難易度の最小値を設定するアクション
    setMin: (state, action) => {
      state.min = action.payload;
    },

    // 難易度の最大値を設定するアクション
    setMax: (state, action) => {
      state.max = action.payload;
    },

    // 答えをチェックするアクション（ゲームの核となる処理）
    checkAnswer: (state) => {
      const num = parseInt(state.guess, 10); // 入力値を数値に変換
      state.tries++; // 試行回数を1増やす

      if (num === state.answer) {
        // 正解の場合
        state.message = "正解です！";
        state.isFinished = true; // ゲームを終了状態にする
        // 正解時に試行回数を履歴に追加
        state.history.push(state.tries);
      } else if (num < state.answer) {
        // 入力値が正解より小さい場合
        state.message = "もっと大きいよ！";
      } else {
        // 入力値が正解より大きい場合
        state.message = "もっと小さいよ！";
      }
    },

    // ゲームをリセットするアクション
    resetGame: (state) => {
      // 現在のmin/maxの範囲で新しい正解を生成
      state.answer =
        Math.floor(Math.random() * (state.max - state.min + 1)) + state.min;
      state.guess = ""; // 入力値をクリア
      state.message = ""; // メッセージをクリア
      state.tries = 0; // 試行回数をリセット
      state.isFinished = false; // ゲーム状態を開始状態に戻す
      // 履歴は保持する（リセット時に履歴をクリアしない）
      // state.history = [];
    },
  },
});

// アクションクリエーターをエクスポート（コンポーネントで使用）
export const { setGuess, setMin, setMax, checkAnswer, resetGame } =
  gameSlice.actions;

// リデューサーをエクスポート（ストアで使用）
export default gameSlice.reducer;
