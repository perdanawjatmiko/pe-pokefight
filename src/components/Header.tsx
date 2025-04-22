'use client'

import { useTheme } from '@/context/ThemeProvider'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex justify-end items-center gap-4 py-4 px-6 border-b border-gray-200 dark:border-gray-700">
      {/* <DarkModeToggle/> */}

      <Link href="/login" className="btn btn-sm btn-outline">
        Login
      </Link>

      <Link href="/account" className="btn btn-sm btn-primary">
        My Account
      </Link>
    </header>
  )
}
