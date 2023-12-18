import { useRouteError, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'

export default function Error() {
  const error = useRouteError()
  console.log(error)
  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <p>{error.data}</p>
      </div>
    </Wrapper>
  )
}
