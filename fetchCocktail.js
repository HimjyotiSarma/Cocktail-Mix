import axios from 'axios'

export const fetchCocktail = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
})

export const fetchSingleCocktail = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
})
