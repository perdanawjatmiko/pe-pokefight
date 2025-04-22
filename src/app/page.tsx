import { getPokeDex } from '@/lib/pokeapi'
import PokemonCard from '@/components/PokemonCard'
import Pagination from '@/components/Pagination'

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const limit = 20
  const offset = (currentPage - 1) * limit

  const data = await getPokeDex(limit, offset)
  const totalPages = Math.ceil(data.count / limit)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pokédex</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.results.map((pokemon: { name: string; url: string }) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
