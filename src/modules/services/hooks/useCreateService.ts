import { useEffect } from 'react'

import personnelStore from '../../personnel/states/personnelStore'
import unitsStore from '../../units/states/unitsStore'
import typesStore from '../../units/states/typesStore'

export function useCreateService() {
  const { personnel, getPersonnel, errorPersonnel } = personnelStore()
  const { units, getUnits, errorUnits } = unitsStore()
  const { types, getTypeUnits } = typesStore()

  useEffect(() => {
    getPersonnel()
    getUnits()
    getTypeUnits()
  }, [getPersonnel, getUnits, getTypeUnits])

  return {
    personnel,
    errorPersonnel,
    units,
    errorUnits,
    types,
  }
}
