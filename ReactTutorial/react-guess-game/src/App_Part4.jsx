import { useEffect, useState } from 'react';
import './App.css';
// 分割したコンポーネントをcomponentsフォルダから読み込む
import InputArea from '../components/InputArea';
import Header from '../components/Header';
import Result from '../components/Result';

function App() {

  // 正解の値を管理（初期値はnull、useEffectで設定）
  const [answer, setAnswer] = useState(null);

  // 副作用を扱う。→初回の画面表示時に実行
  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setAnswer(random);
  }, []); // ← この [] が「初回のみ実行」の意味

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
    // answerがnullの場合は処理をスキップ（初期化前の保護）
    if (answer === null) return;
    
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
      {/* ゲームのタイトルを表示するHeaderコンポーネント */}
      <Header title="数当てゲーム" />
      <p>1〜100の数字を当ててください</p>
      
      {/* 数字入力と判定ボタンを表示するInputAreaコンポーネント */}
      {/* props: guess(入力値), setGuess(入力値更新関数), checkAnswer(判定関数), isFinished(ゲーム終了状態) */}
      <InputArea guess={guess} setGuess={setGuess} checkAnswer={checkAnswer} isFinished={isFinished} />

      {/* 結果メッセージ、試行回数、リセットボタンを表示するResultコンポーネント */}
      {/* props: message(結果メッセージ), tries(試行回数), resetGame(リセット関数), isFinished(ゲーム終了状態) */}
      <Result message={message} tries={tries} resetGame={resetGame} isFinished={isFinished} />
    </div>
  );
}

export default App;