import { AlarmClock, ArrowRight, Hourglass, House } from 'lucide-react'
import { TimelineStructure, TimelineType } from '../types/TimelineTypes'

export const timelineService: Record<TimelineType, TimelineStructure> = {
  departure: {
    title: 'Hora de Salida',
    sub: 'Momento en que se recibió la alerta',
    icon: AlarmClock,
  },
  arrival: {
    title: 'Hora de Llegada',
    sub: 'Llegada al lugar del incidente',
    icon: ArrowRight,
  },
  control: {
    title: 'Momento en que se controló el incidente',
    sub: 'Momento en que se controló el incidente',
    icon: Hourglass,
  },
  base: {
    title: 'Regreso a Base',
    sub: 'Retorno a la estación',
    icon: House,
  },
}
