## Part 3. コンポーネントを整理しよう

### 3-1. ゲーム画面の部品を分けてみよう（Header / InputArea / Resultなど）

これまで、すべてのコードを `App.jsx` に書いていましたが、コードが長くなってくると管理が大変になります。

Reactでは、画面を機能単位で「部品（コンポーネント）」に分けるのが基本です。今回は以下のように分割してみましょう：

- `Header.jsx`: タイトルや説明を表示
- `InputArea.jsx`: 入力欄と判定ボタン
- `Result.jsx`: メッセージや試行回数、リセットボタン

#### 📁 ファイル構成イメージ

```
src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── InputArea.jsx
│   └── Result.jsx
```

### 3-2. 親から子へ値を渡す（Props入門）

コンポーネント間でデータを受け渡すには「props（プロップス）」を使います。

例：`Header`コンポーネントにタイトル文字列を渡す

```jsx
// App.jsx
<Header title="数当てゲーム" />
```

```jsx
// Header.jsx
function Header({ title }) {
  return <h1>{title}</h1>;
}
export default Header;
```

ここで `title` は親（App）から子（Header）に渡された値（props）です。

### 3-3. 子から親にイベントを伝える（関数を渡す）

ユーザーがボタンをクリックしたときの処理（判定やリセット）は、親コンポーネントが管理したい内容です。

そのため、子コンポーネントに「関数」を渡して実行してもらいます。

```jsx
// App.jsx
<InputArea guess={guess} setGuess={setGuess} checkAnswer={checkAnswer} isFinished={isFinished} />
```

```jsx
// InputArea.jsx
function InputArea({ guess, setGuess, checkAnswer, isFinished }) {
  return (
    <>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isFinished}
      />
      <button onClick={checkAnswer} disabled={isFinished}>判定！</button>
    </>
  );
}
export default InputArea;
```

このように、状態の管理は親が行い、子は見た目と操作だけを担当するように分離できます。

---

これで、コードの見通しが良くなり、再利用性の高い設計になってきました！ 次の章では、`useEffect` や `useRef` を使って、ちょっとした工夫を加えてみましょう。

