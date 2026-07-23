import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useAnecdotes } from './hooks/useAnecdotes'
import NotificationContext from './components/NotificationContext'
import AnecdoteList from './components/AnecdoteList'


const App = () => {

  const { anecdotes, isPending, addAnecdote, addVote } = useAnecdotes()

  if (isPending) {
    return <div>loading data...</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm create={addAnecdote} />
      <AnecdoteList anecdotes={anecdotes} addVote={addVote} />
    </div>
  )
}

export default App