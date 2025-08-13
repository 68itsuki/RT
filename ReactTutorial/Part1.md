
## Part 1. Reactの基本を体験しよう

### 1-1. コンポーネントってなに？（JSXとfunction）

Reactでは、画面の部品を「コンポーネント（component）」として分けて作っていきます。 これは「関数で作るUIの部品」だと考えてください。

Reactでは、画面の部品を「コンポーネント」として分けて作っていきます。コンポーネントはJavaScriptの関数で作るのが基本です。

```jsx
function Hello() {
  return <h1>Hello, React!</h1>;
}
```

このように、HTMLのように見える構文（JSX）を返すことで、UIを作成します。

### 1-2. useStateで値を保存してみよう（"フック"ってなんだ？）

「状態」を持つには `useState` というフックを使います。ボタンをクリックすると数字が増える例：

```jsx
import { useState } from 'react';

function Counter() {
  // useStateは「状態を使いたい」ときに呼び出すReactの関数です。
  // これを"フック（hook）"と呼びます（釣り針のように機能を"引っかける"イメージです）。
  const [count, setCount] = useState(0);
  // count: 現在の値
  // setCount: 新しい値をセットするための関数

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### 1-3. イベントを使ってボタンを反応させる

Reactでは `onClick`, `onChange` などのイベントを使って、ユーザー操作に反応します。

```jsx
<button onClick={handleClick}>押してね</button>
```

イベントハンドラ（例: `handleClick`）には関数を渡しましょう。

### 1-4. フォーム入力とリアルタイム表示

フォームの入力値も `useState` で管理します。

```jsx
function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>こんにちは、{name}さん！</p>
    </div>
  );
}
```

### 1-5. 条件分岐でメッセージを切り替える

条件によって表示内容を変えたいときは `if` や三項演算子を使います。

```jsx
{count >= 10 ? <p>おめでとう！</p> : <p>まだまだ！</p>}
```

---

次のPartでは、この知識を使って「数当てゲーム」のロジックを作っていきましょう！
