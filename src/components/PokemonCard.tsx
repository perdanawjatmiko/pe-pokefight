'use client'

import Link from 'next/link'

type Props = {
  name: string
  url: string
}

export default function PokemonCard({ name, url }: Props) {
  const id = url.split('/').filter(Boolean).pop()
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className="bg-white dark:bg-neutral p-4 rounded-xl shadow hover:shadow-lg text-center">
      <img src={img} alt={name} className="w-20 h-20 mx-auto mb-2" />
      <p className="capitalize font-semibold">{name}</p>
      <Link href={`/pokemon/${id}`} className="text-sm text-pokemon-accent hover:underline">
        Detail →
      </Link>
    </div>
  )
}
