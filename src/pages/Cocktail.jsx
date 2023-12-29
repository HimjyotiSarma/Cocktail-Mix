import { Link, Navigate, useLoaderData } from 'react-router-dom'
import { fetchSingleCocktail } from '../../fetchCocktail'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useQuery } from '@tanstack/react-query'

const searchSingleCocktailQuery = (searchedId) => {
  return {
    queryKey: ['searchCocktail', searchedId],
    queryFn: async () => {
      const request = await fetchSingleCocktail('/', {
        params: {
          i: `${searchedId}`,
        },
      })
      const response = await request.data
      return response
    },
  }
}

export default function Cocktail() {
  const { id } = useLoaderData()
  const { data, isLoading } = useQuery(searchSingleCocktailQuery(id))
  if (!data) {
    return <Navigate to="/" />
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  const currentDrink = data.drinks[0]
  // console.log(data.drinks[0])
  const {
    strAlcoholic: type,
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strGlass: glass,
    strInstructions: info,
  } = currentDrink
  console.log(currentDrink)

  // const ingredients = []
  // console.log(currentDrink.strIngredient1)
  // for (let i = 1; i <= 15; i++) {
  //   if (currentDrink['strIngredient' + i] === null) {
  //     break
  //   }
  //   if (currentDrink['strIngredient' + i]) {
  //     ingredients.push(currentDrink['strIngredient' + i])
  //   }
  // }

  // const joined = ingredients.join(', ')
  // console.log(joined)

  const allIngredients = Object.keys(currentDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && currentDrink[key] != null
    )
    .map((key) => currentDrink[key])
  console.log(allIngredients)

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {type}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {allIngredients.join(', ')}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {info}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export const loader = (queryClient) => async (data) => {
  const searchedId = data?.params?.id
  console.log(searchedId)
  await queryClient.ensureQueryData(searchSingleCocktailQuery(searchedId))
  return { id: searchedId }
}
