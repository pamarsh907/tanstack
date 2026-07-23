import useNotify from '../hooks/useNotify'

const AnecdoteList = ({ anecdotes, addVote }) => {
  const { notify } = useNotify()

  const handleOnClick = (anecdote) => {
    addVote(anecdote)
    notify(`voted for: ${anecdote.content}`)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleOnClick(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList