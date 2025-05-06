import { useEffect } from 'react'
import guardsStore from '../states/guardsStore'

export function useGuardByStation({ id }: { id: number | undefined }) {
  const { guards, getGurdByStation, loading, errorGuards } = guardsStore()

  useEffect(() => {
    if (id) getGurdByStation({ id })
  }, [getGurdByStation, id])

  return { guards, errorGuards, loading }
}
