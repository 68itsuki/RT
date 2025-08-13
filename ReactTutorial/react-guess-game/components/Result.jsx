// 結果メッセージ、試行回数、リセットボタン、履歴を表示するコンポーネント
// props: message(結果メッセージ), tries(試行回数), resetGame(リセット関数), isFinished(ゲーム終了状態), history(試行履歴配列)
import './Result.css';
function Result({ message, tries, resetGame, isFinished, history }) {
    return (
        <>
            {/* 結果メッセージを表示 */}
            <p className={isFinished ? 'message success' : 'message'}>{message}</p>
            {/* 試行回数を表示 */}
            <p>試行回数: {tries}</p>
            {/* ゲームをリセットするボタン */}
            <button onClick={resetGame}>リセット</button>
            
            {/* 過去のプレイ履歴を表示 */}
            <ul>
                {/* 配列の各要素をmapで繰り返し表示（リストレンダリング） */}
                {/* key属性はReactが要素を識別するために必要 */}
                {history.map((score, index) => (
                    <li key={index}>{index + 1}回目：{score} 回でクリア！</li>
                ))}
            </ul>
        </>
    );
}
export default Result;