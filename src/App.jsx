import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages'

import { loader as LandingLoader } from './pages/Landing'
import { loader as CocktailLoader } from './pages/Cocktail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        loader: CocktailLoader,
      },
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
      },
      {
        path: '/error',
        element: <Error />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
