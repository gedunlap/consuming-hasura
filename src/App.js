import './App.css';
import { useQuery, gql } from '@apollo/client'

function App() {

  const GET_TODOS = gql`
    query GetTodos {
      Todo_Todo {
        creator
        description
        id
        title
      }
    }
  `

  const { loading, error, data } = useQuery(GET_TODOS)

  console.log(loading, error, data)

  return (
    <div className="App">
      <h1>Consuming Hasura</h1>
    </div>
  )
}

export default App;