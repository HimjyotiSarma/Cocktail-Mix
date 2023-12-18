import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

export default function CocktailCard({ id, name, image, type, info, glass }) {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{type}</p>
        <Link to={`/cocktail/${id}`} alt={info} className="btn">
          detail
        </Link>
      </div>
    </Wrapper>
  )
}