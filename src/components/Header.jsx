import { PawIcon, CrownIcon, GearIcon } from './Icons.jsx'
import '../styles/Header.css'

export default function Header({ score, bestScore, moves, onOpenSettings }) {
  return (
    <header className="header">
      <div className="header-title">
        <PawIcon size={26} />
        <h1>Memory cards</h1>
      </div>

      <div className="header-stats">
        <div className="stat-badge stat-badge--score">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score}</span>
        </div>

        <div className="stat-badge stat-badge--best">
          <CrownIcon size={16} />
          <span className="stat-label">Best</span>
          <span className="stat-value">{bestScore}</span>
        </div>

        <div className="stat-badge stat-badge--moves">
          <span className="stat-label">Moves</span>
          <span className="stat-value">{moves}</span>
        </div>

        <button
          type="button"
          className="settings-button"
          onClick={onOpenSettings}
          aria-label="Open settings"
        >
          <GearIcon size={20} />
        </button>
      </div>
    </header>
  )
}
