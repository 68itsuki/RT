import { useState } from 'react';
import './App.css';

function App() {

  // 正解の値を1〜100の範囲でランダムに生成
  // Math.random()で0〜1未満の小数を生成 → 100倍 → 切り捨て → +1で1〜100に
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);

  // ユーザーが入力した値を管理
  const [guess, setGuess] = useState('');

  // 画面上に表示するメッセージを管理（「もっと大きいよ！」「もっと小さいよ！」「正解です！」）
  const [message, setMessage] = useState('');

  // ユーザーの試行回数を管理
  const [tries, setTries] = useState(0);

  // ゲームの終了状態を管理（true: ゲーム終了、false: ゲーム中）
  const [isFinished, setIsFinished] = useState(false);

  // ユーザーが入力した値をチェックする関数
  const checkAnswer = () => {
    // ユーザーが入力した文字列を数値に変換（第2引数の10は10進数を意味）
    const num = parseInt(guess, 10);

    // 試行回数を1増やす
    setTries(tries + 1);

    // 入力値と正解を比較してメッセージを設定
    if (num === answer) {
      setMessage('正解です！');
      setIsFinished(true); // ゲームを終了状態にする
    } else if (num < answer) {
      setMessage('もっと大きいよ！');
    } else {
      setMessage('もっと小さいよ！');
    }
  };

  // ゲームをリセットする関数
  const resetGame = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1); // 新しい正解を生成
    setGuess(''); // 入力値をクリア
    setMessage(''); // メッセージをクリア
    setTries(0); // 試行回数をリセット
    setIsFinished(false); // ゲーム状態を開始状態に戻す
  };

  return (
    <div className="App">
      <h1>数当てゲーム</h1>
      <p>1〜100の数字を当ててください</p>
      
      {/* ユーザーが数字を入力するフィールド */}
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)} // 入力値を状態に保存
        disabled={isFinished} // ゲーム終了時は入力を無効化
      />
      
      {/* 入力値をチェックするボタン。isFinishedがtrueの場合は無効化*/}
      <button onClick={checkAnswer} disabled={isFinished}>判定！</button>
      
      {/* 結果メッセージを表示 */}
      <p>{message}</p>
      
      {/* 試行回数を表示 */}
      <p>試行回数: {tries}</p>
      
      {/* ゲームをリセットするボタン */}
      <button onClick={resetGame}>リセット</button>
    </div>
  );
}

export default App;