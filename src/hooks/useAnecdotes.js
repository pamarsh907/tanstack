import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, update } from '../requests'
import useNotify from './useNotify'

export const useAnecdotes = () => {
  const queryClient = useQueryClient()
  const { notify } = useNotify()

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  })

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: () => {
      console.log('on error in useAnecdotes')
      notify('anecdote must be 5 letters or longer')
    }
  })

  const updateAnecdoteMutation = useMutation({
    mutationFn: (anecdote) => update(anecdote.id, anecdote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  return {
    anecdotes: result.data,
    isPending: result.isPending,
    addAnecdote: (content) => newAnecdoteMutation.mutate({ content, votes: 0 }),
    addVote: (anecdote) => updateAnecdoteMutation.mutate({
      ...anecdote, votes: anecdote.votes + 1
    }),
  }
}