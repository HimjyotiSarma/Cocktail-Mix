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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { loader as LandingLoader } from './pages/Landing'
import { loader as CocktailLoader } from './pages/Cocktail'
import { action as newsLetterAction } from './pages/Newsletter'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

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
        loader: CocktailLoader(queryClient),
      },
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
        action: newsLetterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: '/error',
        element: <Error />,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
