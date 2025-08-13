## Part 2. 数当てゲームを作ろう（ステップバイステップ）

### 📁 まずは作成したプロジェクトに組み込もう

先ほど `react-guess-game` というプロジェクトを作成しましたね。ここに数当てゲームのコードを組み込んでいきましょう。

#### ① `src/App.jsx` を編集する

以下のコードを参考に、`App.jsx` にゲームの内容を記述します。

```jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [tries, setTries] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const checkAnswer = () => {
    const num = parseInt(guess, 10);
    setTries(tries + 1);
    if (num === answer) {
      setMessage('正解です！');
      setIsFinished(true);
    } else if (num < answer) {
      setMessage('もっと大きいよ！');
    } else {
      setMessage('もっと小さいよ！');
    }
  };

  const resetGame = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setTries(0);
    setIsFinished(false);
  };

  return (
    <div className="App">
      <h1>数当てゲーム</h1>
      <p>1〜100の数字を当ててください</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isFinished}
      />
      <button onClick={checkAnswer} disabled={isFinished}>判定！</button>
      <p>{message}</p>
      <p>試行回数: {tries}</p>
      <button onClick={resetGame}>リセット</button>
    </div>
  );
}

export default App;
```

#### ② 保存して動作確認！

ターミナルで開発サーバーが立ち上がっていない場合は、以下のコマンドを実行：

```bash
npm run dev   # または yarn dev
```

ブラウザにて http\://localhost:5173 を開き、ゲームが動作するか確認しましょう！

![](/ReactTutorial/img/Part2/Part2-1.png)
---

### 2-1. ランダムな数字を生成しよう（Math.random）

まずは、アプリが「1〜100」の間でランダムな数字を選ぶ処理を作りましょう。

```jsx
const answer = Math.floor(Math.random() * 100) + 1;
```

- `Math.random()` は 0以上1未満のランダムな小数を返します。
- `Math.floor()` で小数点以下を切り捨てて、整数にします。
- `+1` をすることで「1〜100」の範囲になります。

実際のアプリでは、この `answer` を状態として保存し、リセット時に新しく生成します。

---

### 2-2. 入力値と正解を比較してメッセージを表示

フォームから数字を入力し、それが正解と比べてどうかを表示しましょう。

```jsx
function GuessGame() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkAnswer = () => {
    const num = parseInt(guess, 10);
    if (num === answer) {
      setMessage('正解です！');
    } else if (num < answer) {
      setMessage('もっと大きいよ！');
    } else {
      setMessage('もっと小さいよ！');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkAnswer}>判定！</button>
      <p>{message}</p>
    </div>
  );
}
```

---

### 2-3. 試行回数をカウントする

チャレンジした回数をカウントして表示してみましょう。

```jsx
const [tries, setTries] = useState(0);

const checkAnswer = () => {
  const num = parseInt(guess, 10);
  setTries(tries + 1); // 試行回数を1増やす
  // （メッセージ処理は前と同様）
};
```

```jsx
<p>試行回数: {tries}</p>
```

---

### 2-4. 「リセット」ボタンを作ってみよう

もう一度最初から始めたいときに使うリセット処理を作ります。

```jsx
const resetGame = () => {
  setAnswer(Math.floor(Math.random() * 100) + 1);
  setGuess('');
  setMessage('');
  setTries(0);
};
```

```jsx
<button onClick={resetGame}>リセット</button>
```
![](/ReactTutorial/img/Part2/Part2-2.png)
---

### 2-5. プレイ中／終了後の画面切り替え（簡単な状態分岐）

正解した後は、判定ボタンを非表示にしたり、入力を無効にしたりするなどの切り替えがあると親切です。

```jsx
const [isFinished, setIsFinished] = useState(false);

const checkAnswer = () => {
  const num = parseInt(guess, 10);
  setTries(tries + 1);
  if (num === answer) {
    setMessage('正解です！');
    setIsFinished(true);
  } else if (num < answer) {
    setMessage('もっと大きいよ！');
  } else {
    setMessage('もっと小さいよ！');
  }
};
```

```jsx
<input
  type="number"
  value={guess}
  onChange={(e) => setGuess(e.target.value)}
  disabled={isFinished}
/>
<button onClick={checkAnswer} disabled={isFinished}>判定！</button>
```
![](/ReactTutorial/img/Part2/Part2-3.png)
---

これで、基本的な数当てゲームが完成です！次の章では、このゲームを部品ごとに整理していきましょう。

