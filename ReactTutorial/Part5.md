## Part 5. スコア保存＆履歴機能（簡易版）

### 5-1. スコアの保存：ローカル変数で配列管理

複数回プレイしてきた履歴（スコア）を残したいときは、配列で記録する方法があります。

```jsx
const [history, setHistory] = useState([]);

const checkAnswer = () => {
  const num = parseInt(guess, 10);
  setTries(tries + 1);

  if (num === answer) {
    setMessage('正解です！');
    setIsFinished(true);
    setHistory([...history, tries + 1]); // 試行回数を履歴に追加
  } else if (num < answer) {
    setMessage('もっと大きいよ！');
  } else {
    setMessage('もっと小さいよ！');
  }
};
```
[App.jsx](/ReactTutorial/react-guess-game/src/App_Part5.jsx)
このように、`setHistory([...history, 新しい値])` で履歴を追加できます。

---

### 5-2. プレイ履歴を表示してみよう（リストレンダリング）

Reactでは配列の内容を `.map()` を使って繰り返し表示できます。

```jsx
<ul>
  {history.map((score, index) => (
    <li key={index}>{index + 1}回目：{score} 回でクリア！</li>
  ))}
</ul>
```
[Result.jsx→](/ReactTutorial/react-guess-game/components/Result.jsx)

これで「過去何回プレイして、何回で正解したか」が一覧で見えるようになります。

![](/ReactTutorial/img/Part5/Part5-1.png)
---

### 5-3. 難易度を選べるようにしてみよう（min / maxの指定）

ゲーム開始時に「1〜100」だけでなく、自由に範囲を指定できるようにしてみましょう。

```jsx
const [min, setMin] = useState(1);
const [max, setMax] = useState(100);

const generateAnswer = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resetGame = () => {
  setAnswer(generateAnswer());
  setGuess('');
  setMessage('');
  setTries(0);
  setIsFinished(false);
};
```

難易度（min/max）を選ぶ入力欄も作ってみましょう：

```jsx
<label>
  最小値：<input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} />
</label>
<label>
  最大値：<input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
</label>
```

その上で「リセット」ボタンを押すと、新しい範囲でゲームが開始されます。

![](/ReactTutorial/img/Part5/Part5-2.png)
---

これで「繰り返し遊べる」「スコアで成長を確認できる」「難易度を調整できる」ゲームになりました！ 次は最終章：状態管理の整理（Redux Toolkit編）に進みましょう。

---
[前のページへ](/ReactTutorial/Part4.md)　　　[次のページへ](/ReactTutorial/Part6.md)