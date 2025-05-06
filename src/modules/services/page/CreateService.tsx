import { FilePlus2 } from 'lucide-react'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IncidentType } from '../types/ServicesTypes'
import { useCreateService } from '../hooks/useCreateService'
import { usePersonalSearch } from '../hooks/usePersonalSearch'
import { useFilterUnitAndTypes } from '../hooks/useFilterUnitAndTypes'
import { incidentsServices } from '../constants/incidentsServices'
import { selectCreateService } from '../constants/selectCreateService'
import { useCreateForm } from '../hooks/useCreateForm'

import ContentCard from '../../core/components/ui/ContentCard'
import PersonnelService from '../components/PersonnelService'
import SearchInput from '../../core/components/ui/SearchInput'
import GroupInputs from '../../core/components/ui/GroupInputs'
import Input from '../../core/components/ui/Input'
import Select from '../../core/components/ui/Select'
import CardTypeUnit from '../components/CardTypeUnit'
import CheckUnit from '../components/ui/CheckUnit'
import ButtonAction from '../../core/components/ui/ButtonAction'

export default function CreateService() {
  const { personnel, errorPersonnel, units, errorUnits, types } =
    useCreateService()
  const {
    search,
    setSearch,
    filterPersonal,
    selectedPersonal,
    togglePersonalSelection,
    resetSelectedPersonal,
  } = usePersonalSearch({ personnel })
  const {
    filterUnitsByType,
    selectedUnits,
    toggleUnitSelection,
    filterTypesWithActiveUnits,
    resetSelectedUnits,
  } = useFilterUnitAndTypes({ units })
  const {
    register,
    handleSubmit,
    incident,
    onSubmit,
    gridContent,
    handleReset,
    isSubmitting,
  } = useCreateForm({
    personal: selectedPersonal,
    unidades: selectedUnits,
    resetSelectedUnits,
    resetSelectedPersonal,
  })
  const [animationParent] = useAutoAnimate()

  const handleResetAll = () => {
    handleReset()
    resetSelectedUnits()
    resetSelectedPersonal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div
        className={`grid grid-flow-col ${gridContent} grid-cols-3 gap-3.5`}
        ref={animationParent}
      >
        <ContentCard
          className={`p-5 col-start-3 row-start-1 ${
            incident === incidentsServices[4] ? 'row-span-3' : 'row-span-4'
          }`}
        >
          <PersonnelService
            personnel={filterPersonal}
            error={errorPersonnel}
            selectedPersonal={selectedPersonal}
            togglePersonalSelection={togglePersonalSelection}
          >
            <header>
              <h3 className="text-xl font-semibold mb-3">Personal</h3>

              {!errorPersonnel && (
                <SearchInput
                  placeholder="Burcar personal..."
                  long="w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
            </header>
          </PersonnelService>
        </ContentCard>

        <ContentCard className="p-5 col-span-2">
          <h3 className="text-xl font-semibold mb-3">Datos del Servicio</h3>

          <div className="flex flex-col gap-3">
            <GroupInputs className="grid-cols-[3fr_1fr]">
              <Input
                placeholder="Solicitante"
                autoFocus
                {...register('nombre')}
              />
              <Input placeholder="Teléfono" {...register('telefono')} />
            </GroupInputs>
            <Input placeholder="Ubicación" {...register('ubicacion')} />
            <GroupInputs className="grid-cols-[2fr_3fr]">
              <Select
                label="Incidente"
                htmlFor="incidente-servicio"
                className="w-full"
                {...register('incidente')}
              >
                {incidentsServices.map((incident) => (
                  <option key={incident} value={incident}>
                    {firstCapitalLetter(incident)}
                  </option>
                ))}
              </Select>
              <Input
                label="Otro"
                placeholder="Ejem: Tala de árbol"
                disabled={incident !== IncidentType.OTRO}
                {...register('otro')}
              />
            </GroupInputs>
            <GroupInputs className="grid-cols-4">
              <Input type="time" label="Salida" {...register('salida')} />
              <Input type="time" label="Llegada" {...register('llegada')} />
              <Input type="time" label="Control" {...register('control')} />
              <Input type="time" label="Base" {...register('base')} />
            </GroupInputs>
          </div>
        </ContentCard>

        <ContentCard className="p-5 col-span-2">
          <h3 className="text-xl font-semibold mb-3">Unidades</h3>

          <div className="flex items-start gap-3">
            {errorUnits ? (
              <p className="text-sm font-semibold text-gray-600">
                {errorUnits}
              </p>
            ) : (
              filterTypesWithActiveUnits({ types }).map((type) => (
                <CardTypeUnit
                  key={type.tu_id}
                  type={type.tu_nombre}
                  length={filterUnitsByType({ type: type.tu_nombre }).length}
                >
                  {filterUnitsByType({ type: type.tu_nombre }).map((unit) => (
                    <CheckUnit
                      key={unit.uni_id}
                      htmlFor={`unit-${unit.uni_id}`}
                      id={`unit-${unit.uni_id}`}
                      check={selectedUnits.some((id) => id === unit.uni_id)}
                      text={unit.uni_numero}
                      onChange={() => {
                        toggleUnitSelection({ uni: unit })
                      }}
                      checked={selectedUnits.some((id) => id === unit.uni_id)}
                    />
                  ))}
                </CardTypeUnit>
              ))
            )}
          </div>
        </ContentCard>

        {incident === IncidentType.INCEDIO && (
          <ContentCard className="p-5 col-span-2">
            <h3 className="text-xl font-semibold mb-3">Incendio</h3>

            <div className="flex flex-col gap-3.5">
              <GroupInputs className="grid-cols-[2fr_6fr]">
                <Select
                  label="Inmueble"
                  htmlFor="inmueble-incendio"
                  {...register('incendio.inmueble')}
                >
                  <option value="">Selecciona una opción</option>
                  {selectCreateService.incendio.inmueble.map((incident) => (
                    <option key={incident} value={incident}>
                      {firstCapitalLetter(incident)}
                    </option>
                  ))}
                </Select>

                <Input
                  label="Especifique"
                  // disabled={inmueble !== IncidentIndendioInmueble.OTRO}
                  {...register('incendio.inmEspecifique')}
                />
              </GroupInputs>

              <GroupInputs className="grid-cols-[2fr_6fr]">
                <Select
                  label="Otro"
                  htmlFor="inmueble-incendio"
                  {...register('incendio.otro')}
                >
                  <option value="">Selecciona una opción</option>

                  {selectCreateService.incendio.otros.map((incident) => (
                    <option key={incident} value={incident}>
                      {firstCapitalLetter(incident)}
                    </option>
                  ))}
                </Select>

                <Input
                  label="Especifique"
                  // disabled={otro !== IncidentIndendioOtros.OTRO}
                  {...register('incendio.otrEspecifique')}
                />
              </GroupInputs>
            </div>
          </ContentCard>
        )}
        {incident === IncidentType.fUGA && (
          <ContentCard className="p-5 col-span-2">
            <h3 className="text-xl font-semibold mb-3">Fuga/Derrame</h3>

            <div className="flex flex-col gap-1.5">
              <GroupInputs className="grid-cols-[2fr_6fr]">
                <Select
                  label="Fuga"
                  htmlFor="inmueble-incendio"
                  {...register('fugaDerrame.fuga')}
                >
                  <option value="">Selecciona una opción</option>

                  {selectCreateService.fugaDerrame.map((incident) => (
                    <option key={incident} value={incident}>
                      {firstCapitalLetter(incident)}
                    </option>
                  ))}
                </Select>

                <Input
                  label="Especifique"
                  // disabled={fuga !== IncidentFuga.OTRO}
                  {...register('fugaDerrame.especifique')}
                />
              </GroupInputs>

              <GroupInputs className="grid-cols-[3fr_1fr_1fr]">
                <Input label="Empresa" {...register('fugaDerrame.empresa')} />
                <Input label="Material" {...register('fugaDerrame.material')} />
                <Input
                  label="Capacidad"
                  {...register('fugaDerrame.capacidad')}
                />
              </GroupInputs>

              <GroupInputs className="grid-cols-[1fr_6fr]">
                <Input label="No. Guia" {...register('fugaDerrame.noGuia')} />
                <Input
                  label="Observaciones"
                  {...register('fugaDerrame.observaciones')}
                />
              </GroupInputs>
            </div>
          </ContentCard>
        )}
        {incident === IncidentType.RESCATE && (
          <ContentCard className="p-5 col-span-2">
            <h3 className="text-xl font-semibold mb-3">Rescate</h3>

            <div className="flex flex-col gap-1.5">
              <GroupInputs className="grid-cols-[2fr_2fr_1fr]">
                <Input
                  label="No. de Heridos"
                  {...register('rescate.heridos')}
                />
                <Input
                  label="No. de Cadaveres"
                  {...register('rescate.cadaveres')}
                />
                <Input
                  label="No. Personal"
                  {...register('rescate.noPersonal')}
                />
              </GroupInputs>
              <Input
                label="Parte de Ambulancia"
                {...register('rescate.ambulancia')}
              />

              <GroupInputs className="grid-cols-[2fr_5fr]">
                <Select
                  label="Equipo utilizado"
                  htmlFor="inmueble-incendio"
                  className="w-full"
                  {...register('rescate.equipo')}
                >
                  <option value="">Selecciona una opción</option>

                  {selectCreateService.rescate.map((incident) => (
                    <option key={incident} value={incident}>
                      {firstCapitalLetter(incident)}
                    </option>
                  ))}
                </Select>
                <Input
                  label="Especifique"
                  // disabled={equipo !== IncidentRescate.OTRO}
                  {...register('rescate.noPersonal')}
                />
              </GroupInputs>
            </div>
          </ContentCard>
        )}
        {incident === IncidentType.ABEJAS && (
          <ContentCard className="p-5 col-span-2">
            <h3 className="text-xl font-semibold mb-3">Abejas</h3>

            <div className="flex flex-col gap-1.5">
              <GroupInputs className="grid-cols-[2fr_6fr]">
                <Select
                  label="Abejas"
                  htmlFor="inmueble-incendio"
                  {...register('abejas.abeja')}
                >
                  <option value="">Selecciona una opción</option>
                  {selectCreateService.abejas.map((incident) => (
                    <option key={incident} value={incident}>
                      {firstCapitalLetter(incident)}
                    </option>
                  ))}
                </Select>

                <Input
                  label="Especifique"
                  // disabled={abejas !== IncidentAbejas.OTRO}
                  {...register('abejas.especifique')}
                />
              </GroupInputs>
              <Input
                label="Observaciones"
                {...register('abejas.observaciones')}
              />
            </div>
          </ContentCard>
        )}

        <ContentCard className="p-5 col-span-2">
          <h3 className="text-xl font-semibold mb-3">Daños</h3>

          <div className="flex flex-col gap-1.5">
            <GroupInputs className="grid-cols-[1fr_3fr]">
              <Select
                label="Materiales"
                htmlFor="inmueble-incendio"
                className="w-full"
                {...register('daños.material')}
              >
                <option value="">Selecciona una opción</option>

                {selectCreateService.daños.map((incident) => (
                  <option key={incident} value={incident}>
                    {firstCapitalLetter(incident)}
                  </option>
                ))}
              </Select>

              <Input
                label="Especifique"
                // disabled={daños !== IncidentDaños.OTRO}
                {...register('daños.especifique')}
              />
            </GroupInputs>

            <GroupInputs className="grid-cols-[1fr_1fr]">
              <Input label="Heridos" {...register('daños.heridos')} />
              <Input label="Muertos" {...register('daños.muertos')} />
            </GroupInputs>
            <Input
              label="Parte de Ambulancia"
              {...register('daños.ambulancia')}
            />
          </div>
        </ContentCard>

        <ContentCard className="p-5 col-span-2">
          <h3 className="text-xl font-semibold mb-3">Observiciones</h3>

          <div className="flex flex-col gap-1.5">
            <textarea
              className="w-full h-24 resize-none text-sm bg-white focus:bg-gray-50 text-gray-900 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal border-0 rounded-md p-2 ring-1 transition ease-in-out duration-150"
              {...register('observaciones')}
            />
          </div>
        </ContentCard>

        <ContentCard
          className={`p-5 col-start-3 ${
            incident === incidentsServices[4] ? 'row-start-4' : 'row-start-5'
          }`}
        >
          <h3 className="text-xl font-semibold mb-3">Legales</h3>

          <div className="flex flex-col gap-1.5">
            <Select
              label="Inmueble"
              htmlFor="inmueble-incendio"
              className="w-full"
              {...register('legales.legal')}
            >
              <option value="">Selecciona una opción</option>

              {selectCreateService.legales.map((incident) => (
                <option key={incident} value={incident}>
                  {firstCapitalLetter(incident)}
                </option>
              ))}
            </Select>

            <Input
              label="Especifique"
              // disabled={legales !== SelectLegales.OTRO}
              {...register('legales.otro')}
            />
          </div>
        </ContentCard>
      </div>

      <div className="flex items-center justify-end gap-3">
        <ButtonAction
          className="border border-gray-200 hover:bg-gray-100"
          type="button"
          onClick={handleResetAll}
        >
          Limpiar
          <FilePlus2 className="size-5" />
        </ButtonAction>

        <ButtonAction
          className="bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : 'Guardar'}
          <FilePlus2 className="size-5" />
        </ButtonAction>
      </div>
    </form>
  )
}
