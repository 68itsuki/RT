// Reduxの状態とアクションを使用するためのフックをインポート
import { useSelector, useDispatch } from 'react-redux';
// gameSliceから必要なアクションをインポート
import { setGuess, checkAnswer, resetGame, setMin, setMax } from './features/gameSlice';
import '../components/Result.css'

function Game() {
  // useSelector: Reduxストアから状態を取得（state.gameから必要な値を分割代入）
  const { guess, message, tries, isFinished, min, max, answer, history } = useSelector((state) => state.game);
  
  // useDispatch: Reduxアクションをディスパッチするための関数を取得
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* ゲームのタイトル */}
      <h1>数当てゲーム</h1>
      
      {/* ゲームの説明文（動的にmin/maxを表示） */}
      <p>{min}〜{max}の数字を当ててください</p>
      
      {/* 難易度設定エリア */}
      <div style={{marginBottom: '20px'}}>
        <label>最小値：
          <input 
            type="number" 
            value={min} 
            onChange={(e) => dispatch(setMin(Number(e.target.value)))} // setMinアクションをディスパッチ
          />
        </label>
        <label>最大値：
          <input 
            type="number" 
            value={max} 
            onChange={(e) => dispatch(setMax(Number(e.target.value)))} // setMaxアクションをディスパッチ
          />
        </label>
      </div>
      
      {/* 数字入力と判定ボタン */}
      <input
        type="number"
        value={guess}
        onChange={(e) => dispatch(setGuess(e.target.value))} // setGuessアクションをディスパッチ
        disabled={isFinished}
      />
      <button onClick={() => dispatch(checkAnswer())} disabled={isFinished}>判定！</button> {/* checkAnswerアクションをディスパッチ */}
      
      {/* 結果メッセージと試行回数 */}
      <p className={isFinished ? 'message success' : 'message'}>{message}</p>
      <p>試行回数: {tries}</p>
      
      {/* リセットボタン */}
      <button onClick={() => dispatch(resetGame())}>リセット</button> {/* resetGameアクションをディスパッチ */}
      
      {/* 過去のプレイ履歴を表示（履歴がある場合のみ表示） */}
      {history.length > 0 && (
        <div>
          <h3>プレイ履歴</h3>
          <ul>
            {/* 配列の各要素をmapで繰り返し表示（リストレンダリング） */}
            {history.map((score, index) => (
              <li key={index}>{index + 1}回目：{score} 回でクリア！</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Game;