'use client'
import { useState } from 'react'

const videoIds = [
  'QICN4s5WDYE',
  '0XdAdN5sCuU',
  'muZxV64VjFQ',
  '_Byekl8bFbA',
  'BXEesGUaKq0',
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="aspect-video">
        <iframe
          key={current}
          src={`https://www.youtube-nocookie.com/embed/${videoIds[current]}?modestbranding=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between mt-5">
        <button
          onClick={() => setCurrent(i => i - 1)}
          disabled={current === 0}
          className="text-sm tracking-wide disabled:opacity-20 hover:opacity-60 transition-opacity"
        >
          ← Prev
        </button>
        <div className="flex gap-2">
          {videoIds.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-black' : 'bg-black/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent(i => i + 1)}
          disabled={current === videoIds.length - 1}
          className="text-sm tracking-wide disabled:opacity-20 hover:opacity-60 transition-opacity"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
