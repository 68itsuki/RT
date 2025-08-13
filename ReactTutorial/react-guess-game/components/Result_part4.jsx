// 結果メッセージ、試行回数、リセットボタンを表示するコンポーネント
// props: message(結果メッセージ), tries(試行回数), resetGame(リセット関数)
import './Result.css';
function Result({ message, tries, resetGame, isFinished }) {
    return (
        <>
            {/* 結果メッセージを表示 */}
            <p className={isFinished ? 'message success' : 'message'}>{message}</p>
            {/* 試行回数を表示 */}
            <p>試行回数: {tries}</p>
            {/* ゲームをリセットするボタン */}
            <button onClick={resetGame}>リセット</button>
        </>
    );
}
export default Result;