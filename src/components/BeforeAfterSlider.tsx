import { useId, useState } from 'react'

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: Props) {
  const [pos, setPos] = useState(50)
  const id = useId()
  const labelId = `${id}-label`

  return (
    <div
      className="ba-slider surface-card"
      role="region"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="visually-hidden">
        Before and after comparison. Use the slider to reveal more of the after photo.
      </p>
      <div className="ba-slider__frame">
        <img
          className="ba-slider__img ba-slider__img--before"
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
        />
        <img
          className="ba-slider__img ba-slider__img--after"
          src={afterSrc}
          alt={afterAlt}
          loading="lazy"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <div className="ba-slider__badge ba-slider__badge--before">Before</div>
        <div className="ba-slider__badge ba-slider__badge--after">After</div>
        <div className="ba-slider__handle" style={{ left: `${pos}%` }} aria-hidden>
          <span className="ba-slider__grip" />
        </div>
      </div>
      <label className="ba-slider__control" htmlFor={`${id}-range`}>
        <span className="ba-slider__control-label">Reveal after photo</span>
        <input
          id={`${id}-range`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
        />
      </label>
    </div>
  )
}
