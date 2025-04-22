// src/lib/api.ts
export const baseUrl = 'https://pokeapi.co/api/v2'

export async function getPokeDex(limit = 20, offset = 0) {
  try {
    const res = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
    
    if (!res.ok) {
      throw new Error(`Failed to fetch Pokédex: ${res.statusText}`)
    }

    const data = await res.json()
    console.log(data)

    return data // hasilnya: { results, count }
  } catch (error) {
    console.error("Error fetching Pokédex:", error)
    throw new Error("Failed to fetch Pokédex") // Throw ulang agar bisa ditangani lebih tinggi
  }
}

export async function getPokemonById(id: string) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      if (!res.ok) {
        throw new Error(`Pokemon not found: ${res.statusText}`)
      }
      const data = await res.json()
      return data
    } catch (error) {
      console.error('Error fetching Pokémon:', error)
      throw new Error('Failed to fetch Pokémon detail')
    }
  }
