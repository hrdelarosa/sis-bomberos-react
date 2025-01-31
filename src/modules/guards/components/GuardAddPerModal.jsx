import style from '../styles/ContentMain.module.css'
import { useEffect } from 'react'
import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import { MagnifyingGlass, PlusCircle, XIcon } from '../../core/components/Icons'
import { useFilterdPerGuard } from '../hooks/useFilterdPerGuard'
import usePersonalStore from '../../personnel/store/personnel'

import Modal from '../../core/components/modal/Modal'
import Button from '../../core/components/UI/Button'
import Input from '../../core/components/UI/Input'

export default function GuardAddPerModal({ isModalOpen, closeModal, id }) {
  const { personal, getExcludePersonalGuard, updatePersGuard } =
    usePersonalStore()
  const {
    search,
    setSearch,
    selectedPersonnel,
    selectedPersonnelId,
    filteredPersonnel,
    handleSelectPerson,
    handleRemovePerson,
    setDefaultValues,
  } = useFilterdPerGuard({ personal })

  const onSubmit = async (e) => {
    e.preventDefault()
    const input = {
      personal: selectedPersonnelId,
    }
    updatePersGuard({ id, input })
    // console.log(input)
    setDefaultValues()
    closeModal()
  }

  useEffect(() => {
    if (isModalOpen) {
      getExcludePersonalGuard({ id })
    }
  }, [isModalOpen, getExcludePersonalGuard, id])

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="max-w-5xl max-h-[454px]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">
            Añadir personal a la guardia
          </h4>
        </div>

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-full">
              <p className="font-medium mb-1.5">Selecciona personal/es</p>
              <div className="relative">
                <Input
                  id="search-personal"
                  type="text"
                  placeholder="Buscar trabajador..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-64 pr-6 text-sm py-1.6`}
                />
                <div className="absolute top-2 right-1.5 text-gray-500">
                  <MagnifyingGlass />
                </div>
              </div>
              <div
                className={`mt-2 max-h-72 overflow-y-auto ${style.list_scroll}`}
              >
                {filteredPersonnel.map((person) => (
                  <div
                    key={person.id}
                    className={`flex flex-col gap-0.5 font-normal py-2.5 px-2.5 select-none cursor-pointer hover:bg-fireYellow-50 odd:bg-gray-50 even:bg-white ${
                      selectedPersonnel.includes(person) ? 'bg-gray-200' : ''
                    }`}
                    onClick={() =>
                      !selectedPersonnel.includes(person) &&
                      handleSelectPerson(person)
                    }
                  >
                    {`${person.per_nombres} ${person.per_apellidos}`}
                    <small className="font-medium text-gray-700">{`${
                      person.per_np
                    } - ${capitalLetter(person.ran_nombre)} - ${
                      person.gu_nombre
                        ? capitalLetter(person.gu_nombre)
                        : 'Sin guardia'
                    } ${
                      person.et_nombre
                        ? ` - ${person.et_nombre.split('-')[1]}`
                        : ''
                    }`}</small>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-1">Personal seleccionado</p>

              <div
                className={`max-h-[282px] h-full overflow-y-auto ${style.list_scroll}`}
              >
                {selectedPersonnel.length > 0 ? (
                  <ul>
                    {selectedPersonnel.map((person) => (
                      <li
                        key={person.id}
                        className="flex justify-between items-center gap-0.5 py-2.5 px-2.5 select-none odd:bg-gray-50 even:bg-white"
                      >
                        <div className="flex flex-col gap-0.5">
                          {`${person.per_nombres} ${person.per_apellidos}`}
                          <small className="font-medium text-gray-700">{`${
                            person.per_np
                          } - ${capitalLetter(person.ran_nombre)} - ${
                            person.gu_nombre
                              ? capitalLetter(person.gu_nombre)
                              : 'Sin guardia'
                          } ${
                            person.et_nombre
                              ? ` - ${person.et_nombre.split('-')[1]}`
                              : ''
                          }`}</small>
                        </div>
                        <div
                          className="cursor-pointer text-red-900 hover:text-red-500  hover:-rotate-90 transition-transform duration-200 ease-out"
                          onClick={() => handleRemovePerson(person)}
                        >
                          <XIcon />
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-normal text-gray-600 mt-1.5">
                    No has seleccionado a ninguno. Debes de seleccionar uno
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <Button>
                  Agregar
                  <PlusCircle />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}
