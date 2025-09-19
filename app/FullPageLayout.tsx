import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { ZoomContext } from './ZoomContext'

type FullPageLayoutProps = {
  onClose: () => void
  child: React.ReactNode
}

export default function FullPageLayout({
  onClose,
  child,
}: FullPageLayoutProps) {
  const [zoom, setZoom] = useState(1) // 1 = 100%
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-white dark:bg-zinc-900">
      <button
        className="absolute fixed top-4 right-6 z-10 cursor-pointer rounded-full bg-white px-2 py-2 text-black shadow"
        onClick={onClose}
      >
        <XIcon />
      </button>
      <ZoomContext.Provider value={zoom}>{child}</ZoomContext.Provider>

      <div className="fixed bottom-6 z-10 mb-2 flex gap-2">
        <button
          className="group relative mt-4 inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}
        >
          -
        </button>
        <span className="group relative mt-4 inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
          {Math.round(zoom * 100)}%
        </span>
        <button
          className="group relative mt-4 inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
        >
          +
        </button>
      </div>
    </div>
  )
}
