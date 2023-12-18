import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'

export default function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Mix Master</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

// const Wrapper = styled.nav`
//   background: red;
// `
