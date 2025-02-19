import style from '../../styles/contentPer.module.css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { usePersonalSearch } from '../../../personnel/hooks/usePersonalSearch'
import { useSortedUnits } from '../../../units/hooks/useSortedUnits'
import { useHeightContPer } from '../../hooks/useHeightContPer'
import { useAnimation } from '../../../core/hooks/useAnimation'
import {
  SELECTABEJAS,
  SELECTFUGADERRAME,
  SELECTINCIDENTES,
  SELECTINMUEBLES,
  SELECTOTROS,
  SELECTRESCATE,
  SELECTDAÑOS,
  SELECTLEGALES,
} from '../../constants/selectService'
import { MagnifyingGlass } from '../../../core/components/Icons'
import { Bookmark, BookmarkSlash } from '../Icons'
import { serviceSchema } from '../../schemas/servicio'
import useServicesStore from '../../store/services'
import usePersonalStore from '../../../personnel/store/personnel'
import useUnitsStore from '../../../units/store/units'
import useAuthStore from '../../../auth/store/auth'

import CardInfoService from './CardInfoService'
import GroupInputs from './GroupInputs'
import Input from '../../../core/components/UI/Input'
import Select from '../../../core/components/UI/Select'
import Label from '../../../core/components/UI/Label'
import ItemPersonal from './ItemPersonal'
import Button from '../../../core/components/UI/Button'
import CheckBox from '../../../core/components/UI/CheckBox'

export default function Form() {
  const { user } = useAuthStore()
  const { animationParent } = useAnimation()
  const { idNewService, createService } = useServicesStore()
  const { personal, getAllPersonal } = usePersonalStore()
  const { units, getAllUnits, types, getAllTypesU } = useUnitsStore()
  const { filterUnitsByType, selectedUnits, toggleUnitSelection } =
    useSortedUnits({ units })
  const {
    search,
    setSearch,
    filterPersonal,
    selectedPersonal,
    togglePersonalSelection,
  } = usePersonalSearch({ personal: personal })
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      nombre: '',
      telefono: '',
      salida: '',
      llegada: '',
      control: '',
      base: '',
      incidente: SELECTINCIDENTES.OTRO,
      ubicacion: '',
      otro: '',
      observaciones: '',
      incendio: {
        inmueble: '',
        inmEspecifique: '',
        otro: '',
        otrEspecifique: '',
      },
      fugaDerrame: {
        fuga: '',
        especifique: '',
        capacidad: '',
        empresa: '',
        material: '',
        noGuia: '',
        observaciones: '',
      },
      abejas: {
        abejas: '',
        especifique: '',
        observaciones: '',
      },
      rescate: {
        heridos: '',
        cadaveres: '',
        ambulancia: '',
        equipo: '',
        noPersonal: '',
        especifique: '',
      },
      daños: {
        material: '',
        especifique: '',
        heridos: '',
        muertos: '',
        ambulancia: '',
      },
      legales: {
        legales: '',
        otro: '',
      },
    },
    resolver: zodResolver(serviceSchema),
  })
  const navigate = useNavigate()
  const incidente = watch('incidente')
  const [inmueble, otro, fuga, legales] = watch([
    'incendio.inmueble',
    'incendio.otrEspecifique',
    'fugaDerrame.fuga',
    'legales',
  ])
  const { H_CONTENT_PER } = useHeightContPer({ incidente })

  const onSubmit = async (data) => {
    const input = {
      creado: user.id,
      ...data,
      unidades: selectedUnits,
      personal: selectedPersonal,
      incendio: data.incendio || {
        inmueble: '',
        inmEspecifique: '',
        otro: '',
        otrEspecifique: '',
      },
      fugaDerrame: data.fugaDerrame || {
        fuga: '',
        especifique: '',
        capacidad: '',
        empresa: '',
        material: '',
        noGuia: '',
        observaciones: '',
      },
      abejas: data.abejas || {
        abejas: '',
        especifique: '',
        observaciones: '',
      },
      rescate: data.rescate || {
        heridos: '',
        cadaveres: '',
        ambulancia: '',
        equipo: '',
        noPersonal: '',
        especifique: '',
      },
      daños: data.daños || {
        material: '',
        especifique: '',
        heridos: '',
        muertos: '',
        ambulancia: '',
      },
      legales: data.legales || {
        legales: '',
        otro: '',
      },
    }

    createService({ input })
    console.log(input)
    navigate('/services')
  }

  const onError = (errors) => {
    Object.entries(errors).forEach(([field, error]) => {
      toast.error(`${capitalLetter(field)}: ${error.message}`, {
        duration: 3000,
        closeButton: true,
      })
    })
  }

  useEffect(() => {
    getAllPersonal()
    getAllUnits()
    getAllTypesU()
  }, [getAllPersonal, getAllUnits, getAllTypesU])

  useEffect(() => {
    if (idNewService) navigate(`/services/${idNewService}`)
  }, [idNewService, navigate])

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-3 pb-6"
    >
      <div className="flex gap-3 h-fit">
        <div ref={animationParent} className="w-full flex flex-col gap-3">
          <CardInfoService title="Datos del Servicio">
            <GroupInputs className="grid-cols-[3fr,_1fr]">
              <Input
                id="nombre"
                type="text"
                placeholder="Nombre"
                {...register('nombre')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />

              <Input
                id="telefono"
                type="text"
                placeholder="Teléfono"
                {...register('telefono')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </GroupInputs>

            <Input
              id="ubicacion"
              type="text"
              placeholder="Ubicación"
              {...register('ubicacion')}
              className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
            />

            <GroupInputs className="grid-cols-[2fr,_7fr]">
              <Select
                id="incidente"
                {...register('incidente')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                options={SELECTINCIDENTES}
              />

              <Input
                id="otro"
                type="text"
                placeholder="Otro"
                {...register('otro')}
                disabled={incidente !== SELECTINCIDENTES.OTRO}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal disabled:bg-gray-200/60 disabled:cursor-not-allowed disabled:ring-gray-500"
              />
            </GroupInputs>

            <GroupInputs className="grid-cols-4 gap-5">
              <div>
                <Label htmlFor="salida" label="Salida" />
                <Input
                  id="salida"
                  type="time"
                  className="text-xs mt-0.5 bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  {...register('salida')}
                />
              </div>

              <div>
                <Label htmlFor="llegada" label="Llegada" />
                <Input
                  id="llegada"
                  type="time"
                  className="text-xs mt-0.5 bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  {...register('llegada')}
                />
              </div>

              <div>
                <Label htmlFor="control" label="Control" />
                <Input
                  id="control"
                  type="time"
                  className="text-xs mt-0.5 bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  {...register('control')}
                />
              </div>

              <div>
                <Label htmlFor="base" label="Base" />
                <Input
                  id="base"
                  type="time"
                  className="text-xs mt-0.5 bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  {...register('base')}
                />
              </div>
            </GroupInputs>
          </CardInfoService>

          <CardInfoService title="Unidades">
            <div className="flex gap-5">
              {types.map((type) => (
                <div key={type.id} className="flex flex-col gap-1">
                  <Label label={capitalLetter(type.tu_nombre)} />
                  <div
                    className={`grid ${
                      type.tu_nombre === 'ambulancias'
                        ? 'grid-cols-2'
                        : type.tu_nombre === 'pipas'
                        ? 'grid-cols-4'
                        : type.tu_nombre === 'motobombas'
                        ? 'grid-cols-2'
                        : 'grid-cols-2'
                    } gap-y-1 gap-x-2.5 p-2 border border-gray-300 rounded-md`}
                  >
                    {filterUnitsByType(type.tu_nombre).map((unidad) => (
                      <CheckBox
                        key={unidad.id}
                        htmlFor={unidad.id}
                        text={unidad.uni_numero}
                        onChange={() => toggleUnitSelection(unidad.id)}
                        checked={selectedUnits.includes(unidad.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardInfoService>

          {incidente === SELECTINCIDENTES.INCENDIO && (
            <CardInfoService title="Incendio">
              <div className="flex flex-col gap-1">
                <Label label="Inmueble" />
                <GroupInputs className="grid-cols-[2fr,_6fr]">
                  <Select
                    id="inmueble"
                    {...register('incendio.inmueble')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                    options={SELECTINMUEBLES}
                  />

                  <Input
                    id="inmEspecifique"
                    type="text"
                    placeholder="Especifique"
                    {...register('incendio.inmEspecifique')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal disabled:bg-gray-200/60 disabled:cursor-not-allowed disabled:ring-gray-500"
                    disabled={inmueble !== SELECTINMUEBLES.OTRO}
                  />
                </GroupInputs>
              </div>

              <div className="flex flex-col gap-1">
                <Label label="Otro" />
                <GroupInputs className="grid-cols-[2fr,_6fr]">
                  <Select
                    id="otro"
                    {...register('incendio.otro')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                    options={SELECTOTROS}
                  />

                  <Input
                    id="otrEspecifique"
                    type="text"
                    placeholder="Especifique"
                    {...register('incendio.otrEspecifique')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal disabled:bg-gray-200/60 disabled:cursor-not-allowed disabled:ring-gray-500"
                    disabled={otro !== SELECTOTROS.OTRO}
                  />
                </GroupInputs>
              </div>
            </CardInfoService>
          )}

          {incidente === SELECTINCIDENTES.FUGA && (
            <CardInfoService title="Fuga/Derrame">
              <GroupInputs className="grid-cols-[3fr,_9fr]">
                <Select
                  id="fuga"
                  {...register('fugaDerrame.fuga')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  options={SELECTFUGADERRAME}
                />

                <Input
                  id="especifique"
                  type="text"
                  placeholder="Especifique"
                  {...register('fugaDerrame.especifique')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal disabled:bg-gray-200/60 disabled:cursor-not-allowed disabled:ring-gray-500"
                  disabled={fuga !== SELECTFUGADERRAME.OTRO}
                />
              </GroupInputs>

              <GroupInputs className="grid-cols-2">
                <Input
                  id="capacidad"
                  type="text"
                  placeholder="Capacidad"
                  {...register('fugaDerrame.capacidad')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
                <Input
                  id="empresa"
                  type="text"
                  placeholder="Empresa"
                  {...register('fugaDerrame.empresa')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>

              <GroupInputs className="grid-cols-[2fr,_1fr,_8fr]">
                <Input
                  id="material"
                  type="text"
                  placeholder="Material"
                  {...register('fugaDerrame.material')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
                <Input
                  id="noGuia"
                  type="text"
                  placeholder="Guia"
                  {...register('fugaDerrame.noGuia')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
                <Input
                  id="observaciones"
                  type="text"
                  placeholder="Observaciones"
                  {...register('fugaDerrame.observaciones')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>
            </CardInfoService>
          )}

          {incidente === SELECTINCIDENTES.ABEJAS && (
            <CardInfoService
              title="Abejas"
              className={`${incidente !== SELECTINCIDENTES.ABEJAS && 'hidden'}`}
            >
              <GroupInputs className="grid-cols-[3fr,_9fr]">
                <Select
                  id="abejas"
                  {...register('abejas.abejas')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  options={SELECTABEJAS}
                />

                <Input
                  id="especifique"
                  type="text"
                  placeholder="Especifique"
                  {...register('abejas.especifique')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>
              <Input
                id="observaciones"
                type="text"
                placeholder="Observaciones"
                {...register('abejas.observaciones')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </CardInfoService>
          )}

          {incidente === SELECTINCIDENTES.RESCATE && (
            <CardInfoService title="Rescate">
              <GroupInputs className="grid-cols-2">
                <Input
                  id="heridos"
                  type="text"
                  placeholder="No. de Heridos"
                  {...register('rescate.heridos')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
                <Input
                  id="cadaveres"
                  type="text"
                  placeholder="No. de cadaveres"
                  {...register('rescate.cadaveres')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>
              <Input
                id="ambulancia"
                type="text"
                placeholder="Parte de ambulancia"
                {...register('rescate.ambulancia')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />

              <div className="flex flex-col gap-1">
                <Label text="Equipo utilizado" />
                <GroupInputs className="grid-cols-[4fr,_2fr,_8fr]">
                  <Select
                    id="equipo"
                    {...register('rescate.equipo')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                    options={SELECTRESCATE}
                  />
                  <Input
                    id="noPersonal"
                    type="text"
                    placeholder="No. Personal"
                    {...register('rescate.noPersonal')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  />
                  <Input
                    id="especifique"
                    type="text"
                    placeholder="Especifique"
                    {...register('rescate.especifique')}
                    className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  />
                </GroupInputs>
              </div>
            </CardInfoService>
          )}

          <CardInfoService title="Daños">
            <div className="flex flex-col gap-1">
              <Label text="Materiales" />
              <GroupInputs className="grid-cols-[3fr,_9fr]">
                <Select
                  id="material"
                  {...register('daños.material')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  options={SELECTDAÑOS}
                />
                <Input
                  id="especifique"
                  type="text"
                  placeholder="Especifique"
                  {...register('daños.especifique')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>
            </div>

            <div className="flex flex-col gap-1">
              <Label text="Humanos" />
              <GroupInputs className="grid-cols-2">
                <Input
                  id="heridos"
                  type="text"
                  placeholder="Heridos"
                  {...register('daños.heridos')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
                <Input
                  id="muertos"
                  type="text"
                  placeholder="Muertos"
                  {...register('daños.muertos')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </GroupInputs>
            </div>
            <Input
              id="ambulancia"
              type="text"
              placeholder="Parte de ambulancia"
              {...register('daños.ambulancia')}
              className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
            />
          </CardInfoService>
        </div>

        <CardInfoService title="Personal" className="max-w-[410px]">
          <div className="relative">
            <Input
              id="search-personal"
              type="text"
              placeholder="Buscar trabajador..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-64 pr-6 text-sm`}
            />
            <div className="absolute top-2 right-1.5 text-gray-500">
              <MagnifyingGlass />
            </div>
          </div>

          <div
            className={`overflow-y-auto overflow-x-auto ${H_CONTENT_PER} ${style.personal_container}`}
          >
            <ul className="divide-y divide-slate-200">
              {filterPersonal.map((persona) => (
                <ItemPersonal
                  key={persona.id}
                  persona={persona}
                  selectedPersonal={selectedPersonal}
                  togglePersonalSelection={togglePersonalSelection}
                />
              ))}
            </ul>
          </div>
        </CardInfoService>
      </div>

      <div className="flex gap-2 h-fit">
        <CardInfoService title="Observaciones">
          <textarea
            {...register('observaciones')}
            rows={4}
            cols={40}
            placeholder="Observaciones"
            className="w-full h-full resize-none text-gray-900 border-0 rounded-md p-2 text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 focus:outline-none placeholder:text-gray-500 placeholder:font-normal ring-1 transition ease-in-out duration-150"
          />
        </CardInfoService>

        <CardInfoService title="Legales" className="max-w-[410px]">
          <Select
            id="legales"
            {...register('legales.legales')}
            className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
            options={SELECTLEGALES}
          />

          <Input
            id="otro"
            type="text"
            placeholder="Otro"
            {...register('legales.otro')}
            className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal disabled:bg-gray-200/60 disabled:cursor-not-allowed disabled:ring-gray-500"
            disabled={legales !== SELECTLEGALES.OTRO}
          />
        </CardInfoService>
      </div>

      <div className="flex items-center gap-5 pt-3">
        <Button type="submit">
          <div className="flex gap-2 items-center p-0.5">
            Guardar Servicio
            <Bookmark />
          </div>
        </Button>

        <button className="flex items-center gap-1.5 select-none py-0.5 px-4 rounded-lg border-2 border-gray-300 bg-white text-black hover:bg-fireRed-800 hover:text-white hover:border-fireRed-800 text-sm font-semibold leading-loose transition-colors duration-200 ease-out group">
          <div className="flex gap-2 items-center p-0.5">
            <input type="reset" value="Limpiar" />
            <BookmarkSlash />
          </div>
        </button>
      </div>
    </form>
  )
}
