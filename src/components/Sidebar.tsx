import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-pokemon-accent text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Pokémon App</h1>
      <nav className="space-y-4">
        <Link href="/pokedex" className="block hover:text-pokemon-primary">Pokédex</Link>
        <Link href="/catch" className="block hover:text-pokemon-primary">Catch Pokémon</Link>
        <Link href="/my-pokemon" className="block hover:text-pokemon-primary">My Pokémon</Link>
      </nav>
    </aside>
  )
}
