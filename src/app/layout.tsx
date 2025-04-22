import './globals.css'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { ThemeProvider } from '@/context/ThemeProvider'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins' })

export const metadata = {
  title: 'Pokémon App',
  description: 'Pokédex & Catching Pokémon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-gray-50 dark:bg-slate-700 min-h-screen`}>
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <div className="ml-64 w-full">
              <Header />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
