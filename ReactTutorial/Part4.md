## Part 4. useEffectとちょっとした工夫

### 4-1. useEffectってなに？（初回レンダーで乱数生成）

`useEffect` は「副作用（＝レンダーの外で起きる処理）」を扱うためのフックです。 たとえば初回の画面表示時に処理を実行したいときなどに使います。

乱数の生成を `useEffect` で初期化する場合の例：

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setAnswer(random);
  }, []); // ← この [] が「初回のみ実行」の意味

  return <div>ゲーム開始！答えは秘密です</div>;
}
```
[App.jsx→](/ReactTutorial/react-guess-game/src/App_Part4.jsx)


### 4-2. inputに自動フォーカスを当ててみよう（useRef）

`useRef` を使うと、HTML要素に直接アクセスできます。 たとえば、ページが表示されたときに入力欄に自動でカーソルを当てる処理：

```jsx
import { useRef, useEffect } from 'react';

function InputArea(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="number"
      value={props.guess}
      onChange={(e) => props.setGuess(e.target.value)}
      disabled={props.isFinished}
    />
  );
}
```

### 4-3. スタイルを条件で切り替えてみよう（クラス付け替え）

Reactでは、クラス名も状態によって切り替えることができます。

```jsx
<p className={isFinished ? 'message success' : 'message'}>
  {message}
</p>
```
[InputArea.jsx→](/ReactTutorial/react-guess-game/components/InputArea.jsx)

このように書くことで、正解時だけ背景色や文字色を変えるといった演出も可能です。 CSS側でクラスを定義しておきましょう：

```css
.message {
  color: #333; /* 通常のメッセージはグレー */
  font-size: 16px;
  margin: 10px 0;
}
.message.success {
  color: #28a745; /* 成功時は緑色 */
  font-weight: bold;
  font-size: 18px;
}
```
[Result.css→](/ReactTutorial/react-guess-game/components/Result.css)

![](/ReactTutorial/img/Part4/Part4-1.png)
![](/ReactTutorial/img/Part4/Part4-2.png)
---

こういった小さな工夫を加えるだけで、アプリの完成度や使いやすさがグッと向上します。 次はスコアの記録や履歴の表示にチャレンジしてみましょう！

---
[前のページへ](/ReactTutorial/Part3.md)　　　[次のページへ](/ReactTutorial/Part5.md)