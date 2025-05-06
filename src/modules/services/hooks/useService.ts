import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect, useState } from 'react'
import servicesStore from '../states/servicesStore'
import { TabService } from '../types/TabServiceTypes'
import authStore from '../../auth/states/authStore'

export function useService({ id }: { id: number }) {
  const { currentService, getServiceById, errorServices, loading } =
    servicesStore()
  const { user } = authStore()
  const [activeTab, setActiveTab] = useState<TabService>('personal')

  const tabs: Array<{ id: TabService; label: string }> = [
    { id: 'personal', label: 'Personal' },
    { id: 'unidades', label: 'Unidades' },
    { id: 'incidente', label: 'Incidente' },
  ]

  const [animationParent] = useAutoAnimate()

  useEffect(() => {
    if (id) getServiceById({ id })
  }, [getServiceById, id])

  return {
    user,
    currentService,
    errorServices,
    loading,
    activeTab,
    setActiveTab,
    tabs,
    animationParent,
  }
}
