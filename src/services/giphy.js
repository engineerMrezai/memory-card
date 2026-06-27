const cache = new Map()

export async function fetchAnimalGif(query) {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  if (cache.has(query)) {
    return cache.get(query)
  }

  if (!apiKey) {
    const fallback = { url: '', failed: true }
    cache.set(query, fallback)
    return fallback
  }

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
        query
      )}&limit=1&rating=g`
    )

    if (!res.ok) {
      throw new Error('Giphy request failed')
    }

    const data = await res.json()
    const url = data?.data?.[0]?.images?.fixed_height?.url || ''
    const result = { url, failed: !url }
    cache.set(query, result)
    return result
  } catch (err) {
    const result = { url: '', failed: true }
    cache.set(query, result)
    return result
  }
}
