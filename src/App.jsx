import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useAnecdotes } from './hooks/useAnecdotes'


const App = () => {
  const { anecdotes, isPending, addAnecdote, addVote } = useAnecdotes()
  console.log('anecdotes :', anecdotes)

  if (isPending) {
    return <div>loading data...</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm create={addAnecdote} />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App