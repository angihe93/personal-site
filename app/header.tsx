'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Angi He
        </Link>
        <div className="text-zinc-600 dark:text-zinc-500">
          Software Engineer - full-stack, backend, quant
        </div>
      </div>
    </header>
  )
}
