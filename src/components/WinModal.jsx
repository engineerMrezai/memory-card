import { TrophyIcon } from './Icons.jsx'
import '../styles/WinModal.css'

export default function WinModal({
  score,
  bestScore,
  moves,
  isNewBest,
  onPlayAgain,
  onChangeSize
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-card win-card" role="dialog" aria-modal="true">
        <TrophyIcon size={48} />
        <h2 className="modal-title">Expedition Complete</h2>
        <p className="modal-subtitle">
          {isNewBest ? 'New best score for this board!' : 'Every pair found.'}
        </p>

        <div className="win-stats">
          <div>
            <span className="win-stat-label">Score</span>
            <span className="win-stat-value">{score}</span>
          </div>
          <div>
            <span className="win-stat-label">Best</span>
            <span className="win-stat-value">{bestScore}</span>
          </div>
          <div>
            <span className="win-stat-label">Moves</span>
            <span className="win-stat-value">{moves}</span>
          </div>
        </div>

        <div className="win-actions">
          <button type="button" className="btn btn--primary" onClick={onPlayAgain}>
            Play Again
          </button>
          <button type="button" className="btn btn--ghost" onClick={onChangeSize}>
            Change Size
          </button>
        </div>
      </div>
    </div>
  )
}
