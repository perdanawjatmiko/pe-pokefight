'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
    <aside className={`fixed top-0 left-0 h-screen w-full md:w-64 bg-pokemon-accent text-white p-6 transform transition-transform duration-300 md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <h1 className="text-2xl font-bold mb-8">Pokémon App</h1>
      <nav className="space-y-4">
        <Link href="/pokedex" className="block hover:text-pokemon-primary">Pokédex</Link>
        <Link href="/catch" className="block hover:text-pokemon-primary">Catch Pokémon</Link>
        <Link href="/my-pokemon" className="block hover:text-pokemon-primary">My Pokémon</Link>
      </nav>
    </aside>

    <button className='bg-pokemon-accent rounded-full p-4 cursor-pointer text-white fixed bottom-2 right-2 md:hidden' onClick={toggleSidebar}>
      {open ? <FaTimes size={25}/> : <FaBars size={25}/>}
    </button>
    </>
  )
}
