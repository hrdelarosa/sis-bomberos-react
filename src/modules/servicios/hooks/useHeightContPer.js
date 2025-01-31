import { SELECTINCIDENTES } from '../constants/selectService'

export function useHeightContPer({ incidente }) {
  const H_CONTENT_PER =
    incidente === SELECTINCIDENTES.INCENDIO
      ? 'h-[804px]'
      : incidente === SELECTINCIDENTES.FUGA
      ? 'h-[806px]'
      : incidente === SELECTINCIDENTES.ABEJAS
      ? 'h-[757px]'
      : incidente === SELECTINCIDENTES.RESCATE
      ? 'h-[810px]'
      : incidente === SELECTINCIDENTES.OTRO && 'h-[580px]'

  return { H_CONTENT_PER }
}
