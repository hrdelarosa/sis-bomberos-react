import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  CreateServiceInputs,
  IncidentAbejas,
  IncidentDaños,
  IncidentFuga,
  IncidentIndendioInmueble,
  IncidentIndendioOtros,
  IncidentRescate,
  IncidentType,
  SelectLegales,
} from '../types/ServicesTypes'
import servicesStore from '../states/servicesStore'

interface Props {
  personal: number[]
  unidades: number[]
  resetSelectedPersonal: () => void
  resetSelectedUnits: () => void
}

export function useCreateForm({
  personal,
  unidades,
  resetSelectedPersonal,
  resetSelectedUnits,
}: Props) {
  const { createService } = servicesStore()
  const { register, handleSubmit, watch, reset } =
    useForm<CreateServiceInputs>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const incident = watch('incidente')
  const onSubmit: SubmitHandler<CreateServiceInputs> = async (data) => {
    try {
      setIsSubmitting(true)
      data.usuario = 1
      data.personal = personal
      data.unidades = unidades

      const { incendio, fugaDerrame, rescate, abejas, ...rest } = data
      const payload = {
        ...rest,
        ...(data.incidente === 'incendio' && { incendio }),
        ...(data.incidente === 'fugaDerrame' && { fugaDerrame }),
        ...(data.incidente === 'rescate' && { rescate }),
        ...(data.incidente === 'abejas' && { abejas }),
        daños: data.daños,
        legales: data.legales,
      }

      const success = await createService({ input: payload })
      if (success) {
        resetSelectedPersonal()
        resetSelectedUnits()
        handleReset()
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  const gridContent =
    incident === IncidentType.INCEDIO
      ? 'grid-rows-[309px_249px_214px_272px_auto]'
      : incident === IncidentType.fUGA
      ? 'grid-rows-[309px_249px_272px_272px_auto]'
      : incident === IncidentType.RESCATE
      ? 'grid-rows-[309px_249px_272px_272px_auto]'
      : incident === IncidentType.ABEJAS
      ? 'grid-rows-[309px_249px_206px_272px_auto]'
      : 'grid-rows-[309px_249px_272px_auto]'

  const handleReset = () => {
    reset({
      nombre: '',
      telefono: '',
      ubicacion: '',
      incidente: IncidentType.INCEDIO,
      otro: '',
      salida: '',
      llegada: '',
      control: '',
      base: '',
      incendio: {
        inmueble: IncidentIndendioInmueble.NONE,
        inmEspecifique: '',
        otro: IncidentIndendioOtros.NONE,
        otrEspecifique: '',
      },
      fugaDerrame: {
        fuga: IncidentFuga.NONE,
        especifique: '',
        empresa: '',
        material: '',
        capacidad: '',
        noGuia: '',
        observaciones: '',
      },
      rescate: {
        heridos: '',
        cadaveres: '',
        noPersonal: '',
        ambulancia: '',
        equipo: IncidentRescate.NONE,
      },
      abejas: {
        abeja: IncidentAbejas.NONE,
        especifique: '',
        observaciones: '',
      },
      daños: {
        material: IncidentDaños.NONE,
        especifique: '',
        heridos: '',
        muertos: '',
        ambulancia: '',
      },
      legales: {
        legal: SelectLegales.NONE,
        otro: '',
      },
    })
  }

  return {
    register,
    handleSubmit,
    incident,
    onSubmit,
    gridContent,
    handleReset,
    isSubmitting,
  }
}
