import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'
export default function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <Wrapper>
        <h4>Something went wrong in fetching Drinks</h4>
      </Wrapper>
    )
  }
  const formattedDrinks = drinks.map((drink) => {
    const {
      idDrink,
      strAlcoholic,
      strDrink,
      strDrinkThumb,
      strGlass,
      strInstructions,
    } = drink
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      type: strAlcoholic,
      info: strInstructions,
      glass: strGlass,
    }
  })
  console.log(formattedDrinks)
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />
      })}
    </Wrapper>
  )
}
