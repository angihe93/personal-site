import { XIcon } from 'lucide-react'

type FullPageLayoutProps = {
  onClose: () => void
  child: React.ReactNode
}

export default function FullPageLayout({
  onClose,
  child,
}: FullPageLayoutProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-white">
      <button
        className="absolute top-6 right-6 z-10 cursor-pointer rounded-full bg-white px-2 py-2 text-black shadow"
        onClick={onClose}
      >
        <XIcon />
      </button>
      {child}
    </div>
  )
}
