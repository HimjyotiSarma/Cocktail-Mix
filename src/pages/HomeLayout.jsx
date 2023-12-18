import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function HomeLayout() {
  const navigate = useNavigation()
  let isPageLoading = navigate.state === 'loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" style={{ margin: 'auto' }} />
        ) : (
          <Outlet />
        )}
      </section>
    </>
  )
}
