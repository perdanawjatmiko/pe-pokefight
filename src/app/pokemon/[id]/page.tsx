// src/app/pokemon/[id]/page.tsx
import Image from 'next/image'
import { getPokemonById } from '@/lib/pokeapi'

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Pokemon #${params.id} - Detail`,
  }
}


export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
  
  const pokemon = await getPokemonById(params.id)

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="rounded-xl bg-white"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Type</h2>
        <div className="flex gap-2 mt-1">
          {pokemon.types.map((t: any) => (
            <span
              key={t.type.name}
              className="px-3 py-1 rounded-full text-sm bg-pokemon-accent text-white capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Stats</h2>
        <ul className="mt-1 space-y-1">
          {pokemon.stats.map((s: any) => (
            <li key={s.stat.name} className="flex justify-between">
              <span className="capitalize">{s.stat.name}</span>
              <span className='text-xs flex gap-1 justify-between items-center'>
                <progress className="progress progress-primary w-56" value={s.base_stat} max="100"></progress>
                {s.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
        <div>
          <p className="font-medium text-black dark:text-white">Height</p>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div>
          <p className="font-medium text-black dark:text-white">Weight</p>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}
