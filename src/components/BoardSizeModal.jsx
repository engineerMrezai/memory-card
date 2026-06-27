import { CompassIcon } from './Icons.jsx'
import '../styles/BoardSizeModal.css'

const SIZE_OPTIONS = [4, 8, 12, 16]

export default function BoardSizeModal({
  mode,
  currentSize,
  onSelect,
  onClose
}) {
  const isSettings = mode === 'settings'

  return (
    <div className="modal-overlay">
      <div className="modal-card" role="dialog" aria-modal="true">
        {isSettings && (
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close settings"
          >
            ×
          </button>
        )}

        <CompassIcon size={36} />

        <h2 className="modal-title">
          {isSettings ? 'Change Expedition Size' : 'Pick Your Expedition Size'}
        </h2>
        <p className="modal-subtitle">
          {isSettings
            ? 'Switching size starts a fresh board.'
            : 'Choose how many cards to flip through the savanna.'}
        </p>

        <div className="size-grid">
          {SIZE_OPTIONS.map((size) => (
            <button
              key={size}
              type="button"
              className={
                'size-option' + (size === currentSize ? ' size-option--active' : '')
              }
              onClick={() => onSelect(size)}
            >
              <span className="size-number">{size}</span>
              <span className="size-caption">{size / 2} pairs</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
