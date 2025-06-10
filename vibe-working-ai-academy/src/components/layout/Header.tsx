'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null // Or a loading skeleton
  }

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Vibe Working Academy
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-sky-500 dark:hover:text-sky-400">Home</Link>
          {/* Add other navigation links here */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}
