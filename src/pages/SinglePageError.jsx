import { useRouteError } from 'react-router-dom'

export default function SinglePageError() {
  const error = useRouteError()
  // console.log(error)
  return <div>{error.message}</div>
}
