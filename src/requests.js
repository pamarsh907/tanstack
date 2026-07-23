const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch anecdotes')
  }
  return await response.json()
}

export const createAnecdote = async (newAnecdote) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnecdote)
  }
 
  const response = await fetch(baseUrl, options)
 
  if (!response.ok) {
    console.log('failed create')
    throw new Error('Failed to create anecdote')
  } else {
    console.log('created ok')
  }

  return await response.json()
}

export const update = async (id, newAnecdote) => {
  console.log('newAnecdote :', JSON.stringify(newAnecdote))
  console.log('called update anecdote')
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnecdote)
  }
 
  const response = await fetch(`${baseUrl}/${id}`, options)
 
  if (!response.ok) {
    throw new Error('Failed to update anecdote')
  } else {
    console.log('updated ok')
  }
 
  return await response.json()
}