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

  // ゲームの難易度設定（最小値と最大値）
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  // 指定された範囲でランダムな正解を生成する関数
  const generateAnswer = () => {
    // (max - min + 1)で範囲の幅を計算し、minを加算して指定範囲内の数値を生成
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // ユーザーが入力した値を管理
  const [guess, setGuess] = useState('');

  // 画面上に表示するメッセージを管理（「もっと大きいよ！」「もっと小さいよ！」「正解です！」）
  const [message, setMessage] = useState('');

  // ユーザーの試行回数を管理
  const [tries, setTries] = useState(0);

  // ゲームの終了状態を管理（true: ゲーム終了、false: ゲーム中）
  const [isFinished, setIsFinished] = useState(false);

  // ユーザーの試行履歴を管理（配列で過去の試行回数を記録）
  const [history, setHistory] = useState([]);

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
      // 履歴に今回の試行回数を追加（スプレッド演算子で配列をコピーして新しい要素を追加）
      setHistory([...history, tries + 1]);
    } else if (num < answer) {
      setMessage('もっと大きいよ！');
    } else {
      setMessage('もっと小さいよ！');
    }
  };

  // ゲームをリセットする関数
  const resetGame = () => {
    setAnswer(generateAnswer()); // 新しい正解を生成（現在の難易度設定に基づく）
    setGuess(''); // 入力値をクリア
    setMessage(''); // メッセージをクリア
    setTries(0); // 試行回数をリセット
    setIsFinished(false); // ゲーム状態を開始状態に戻す
  };

  return (
    <div className="App">
      {/* ゲームのタイトルを表示するHeaderコンポーネント */}
      <Header title="数当てゲーム" />
      <p>{min}〜{max}の数字を当ててください</p>
      
      {/* 難易度設定エリア */}
      <div style={{marginBottom: '20px'}}>
        <label>最小値：
          <input 
            type="number" 
            value={min} 
            onChange={(e) => setMin(Number(e.target.value))} // 文字列を数値に変換して設定
          />
        </label>
        <label>最大値：
          <input 
            type="number" 
            value={max} 
            onChange={(e) => setMax(Number(e.target.value))} // 文字列を数値に変換して設定
          />
        </label>
      </div>
      
      {/* 数字入力と判定ボタンを表示するInputAreaコンポーネント */}
      {/* props: guess(入力値), setGuess(入力値更新関数), checkAnswer(判定関数), isFinished(ゲーム終了状態) */}
      <InputArea guess={guess} setGuess={setGuess} checkAnswer={checkAnswer} isFinished={isFinished} />

      {/* 結果メッセージ、試行回数、リセットボタン、履歴を表示するResultコンポーネント */}
      {/* props: message(結果メッセージ), tries(試行回数), resetGame(リセット関数), isFinished(ゲーム終了状態), history(試行履歴) */}
      <Result message={message} tries={tries} resetGame={resetGame} isFinished={isFinished} history={history} />
    </div>
  );
}

export default App;