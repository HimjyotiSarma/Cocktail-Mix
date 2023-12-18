import { useLoaderData } from 'react-router-dom'
import { fetchCocktail } from '../../fetchCocktail'
import CocktailList from './CocktailList'
export default function Landing() {
  const { drinks, searchTerm } = useLoaderData()
  console.log(drinks)
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  )
}

export const loader = async () => {
  // const searchTerm = 'margarita'
  const searchTerm = ''
  try {
    const request = await fetchCocktail.get('/', {
      params: {
        s: `${searchTerm}`,
      },
    })
    // console.log(request)
    const response = await request.data.drinks
    // console.log(response)
    return { drinks: response, searchTerm: searchTerm }
  } catch (error) {
    console.log(error)
    return error
  }
}
