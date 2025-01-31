import Error from '../components/Error'

import { useAnimation } from '../../core/hooks/useAnimation'

export default function ContainerForm({ error, title, children }) {
  const { animationParent } = useAnimation()
  return (
    <div
      ref={animationParent}
      className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
    >
      {error.length > 0 && (
        <div className="flex flex-col gap-0.5 bg-fireRed-500 rounded mb-2.5 p-2.5">
          {error.map((error) =>
            error.split(',').map((err, i) => <Error key={i} err={err} />)
          )}
        </div>
      )}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{title}</h2>

      {children}
    </div>
  )
}
