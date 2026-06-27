import { PawIcon } from './Icons.jsx'
import '../styles/Card.css'

export default function Card({ card, index, onFlip }) {
  const tilt = ((index % 5) - 2) * 1.4
  const isRevealed = card.isFlipped || card.isMatched

  return (
    <button
      type="button"
      className={
        'card' +
        (isRevealed ? ' card--revealed' : '') +
        (card.isMatched ? ' card--matched' : '')
      }
      style={{ '--card-tilt': `${tilt}deg` }}
      onClick={() => onFlip(card.id)}
      aria-label={isRevealed ? card.animal : 'Hidden card'}
      disabled={card.isMatched}
    >
      <div className="card-inner">
        <div className="card-face card-face--back">
          <PawIcon size={22} />
        </div>

        <div className="card-face card-face--front">
          {card.gifUrl ? (
            <img src={card.gifUrl} alt={card.animal} loading="lazy" />
          ) : (
            <div className="card-fallback">
              <PawIcon size={28} />
            </div>
          )}
          <span className="card-label">{card.animal}</span>
        </div>
      </div>
    </button>
  )
}
