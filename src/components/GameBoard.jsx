import Card from './Card.jsx'
import '../styles/GameBoard.css'

const COLUMNS_BY_SIZE = {
  4: 2,
  8: 4,
  12: 4,
  16: 4
}

export default function GameBoard({ cards, boardSize, isLoading, onFlip }) {
  const columns = COLUMNS_BY_SIZE[boardSize] || 4
  const rows = Math.ceil(boardSize / columns) || 1

  if (isLoading) {
    return (
        <div className="board-stage">
          <div className="board-loading">
            <div className="loading-spinner" />
            <p>Scouting the savanna for animals...</p>
          </div>
        </div>
    )
  }

  return (
      <div className="board-stage">
        <div
            className="board-grid"
            style={{ '--board-columns': columns, '--board-rows': rows }}
        >
          {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} onFlip={onFlip} />
          ))}
        </div>
      </div>
  )
}