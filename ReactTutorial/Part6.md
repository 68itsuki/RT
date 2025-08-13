## Part 6. 状態管理を整理しよう（Redux Toolkit）

### 6-1. 状態管理ってそもそもなに？

Reactでは、コンポーネント内で `useState` を使って状態を管理してきました。しかしアプリが大きくなってくると、複数のコンポーネント間で状態を共有したい場面が増えます。

- 親 → 子：props で渡せる
- 子 → 親 → 孫…：バケツリレーのようになりがち

こうした問題を解決するのが **Redux Toolkit** です。アプリ全体で「状態の保管場所（ストア）」を共有することで、コードの整理や管理がしやすくなります。

---

### 6-2. Redux Toolkitを導入しよう（store / slice / reducer）

まずはパッケージをインストール：

```bash
npm install @reduxjs/toolkit react-redux
```
![](/ReactTutorial/img/Part6/Part6-1.png)
次に、以下のファイル構成を作りましょう：

```
src/
├── app/
│   └── store.js
├── features/
│   └── gameSlice.js
```

#### store.js

```js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
```

#### gameSlice.js

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answer: Math.floor(Math.random() * 100) + 1,
  guess: '',
  message: '',
  tries: 0,
  isFinished: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGuess: (state, action) => {
      state.guess = action.payload;
    },
    checkAnswer: (state) => {
      const num = parseInt(state.guess, 10);
      state.tries++;
      if (num === state.answer) {
        state.message = '正解です！';
        state.isFinished = true;
      } else if (num < state.answer) {
        state.message = 'もっと大きいよ！';
      } else {
        state.message = 'もっと小さいよ！';
      }
    },
    resetGame: (state) => {
      state.answer = Math.floor(Math.random() * 100) + 1;
      state.guess = '';
      state.message = '';
      state.tries = 0;
      state.isFinished = false;
    },
  },
});

export const { setGuess, checkAnswer, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
```

---

### 6-3. ゲーム状態をReduxで管理してみよう

`App.jsx` にProviderを追加：

```jsx
import { Provider } from 'react-redux';
import { store } from './app/store';
import Game from './Game';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
```

`Game.jsx`では、Reduxの状態とアクションを使ってゲームを動かします：

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setGuess, checkAnswer, resetGame } from './features/gameSlice';

function Game() {
  const { guess, message, tries, isFinished } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={guess}
        onChange={(e) => dispatch(setGuess(e.target.value))}
        disabled={isFinished}
      />
      <button onClick={() => dispatch(checkAnswer())} disabled={isFinished}>判定！</button>
      <p>{message}</p>
      <p>試行回数: {tries}</p>
      <button onClick={() => dispatch(resetGame())}>リセット</button>
    </div>
  );
}
```

---

### 6-4. 「やり直しボタン」などもReduxで制御

ゲームの状態に関するもの（正解、試行回数、入力状態など）は、すべてReduxでまとめて制御できます。 このように状態の整理ができると：

- 状態がどこにあるか明確になる
- デバッグしやすい
- 複数の画面やコンポーネントで使い回せる

---

これでこのReactチュートリアルは完了です！お疲れさまでした 🎉

---
[前のページへ](/ReactTutorial/Part5.md)