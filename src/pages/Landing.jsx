import { useLoaderData } from 'react-router-dom'
import { fetchCocktail } from '../../fetchCocktail'
import CocktailList from './CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery, useQueryClient } from '@tanstack/react-query'
export default function Landing() {
  const { searchTerm } = useLoaderData()

  const { data: drinks, isLoading } = useQuery(searchCocktailQuery(searchTerm))
  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const request = await fetchCocktail.get('/', {
        params: {
          s: `${searchTerm}`,
        },
      })
      // console.log(request)
      const response = await request.data.drinks
      return response
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // const searchTerm = 'margarita'
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''
    try {
      await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))
      return { searchTerm }
    } catch (error) {
      console.log(error)
      return error
    }
  }
