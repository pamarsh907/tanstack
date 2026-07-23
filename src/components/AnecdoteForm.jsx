import useNotify from '../hooks/useNotify'

const AnecdoteForm = ({ create }) => {
  const { notify } = useNotify()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    try {
      create(content)
    } catch {
      notify(`too short must have length 5 or more`)
    }

    event.target.reset()

    notify(`added ${content}`)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm