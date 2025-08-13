// 数字入力フィールドと判定ボタンを表示するコンポーネント
// props: guess(入力値), setGuess(入力値更新関数), checkAnswer(判定関数), isFinished(ゲーム終了状態)
function InputArea({ guess, setGuess, checkAnswer, isFinished }) {
  return (
    <>
      {/* 数字入力フィールド */}
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)} // 入力値を状態に保存
        disabled={isFinished} // ゲーム終了時は入力を無効化
      />
      {/* 入力値をチェックするボタン。isFinishedがtrueの場合は無効化 */}
      <button onClick={checkAnswer} disabled={isFinished}>判定！</button>
    </>
  );
}
export default InputArea;