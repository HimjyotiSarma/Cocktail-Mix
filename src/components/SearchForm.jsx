import Wrapper from '../assets/wrappers/SearchForm'
import { Form, redirect, useNavigation } from 'react-router-dom'

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation()
  const isSubmitted = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchTerm}
          disabled={isSubmitted}
        />
        <button type="submit" className="btn" disabled={isSubmitted}>
          {isSubmitted ? 'Submitting..' : 'Submit'}
        </button>
      </Form>
    </Wrapper>
  )
}
