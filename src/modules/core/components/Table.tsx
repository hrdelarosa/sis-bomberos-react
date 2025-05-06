import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  head: React.ReactNode
  children: React.ReactNode
}

export default function Table({ head, children }: Props) {
  const [animationParent] = useAutoAnimate()

  return (
    <div className="bg-primary-white-main rounded-lg border-2 border-gray-200 overflow-hidden ">
      <div className="overflow-hidden overflow-y-auto overflow-x-auto none-scroll">
        <table className="min-w-full divide-y divide-gray-300 table-auto">
          <thead className="bg-primary-white-main">
            <tr>{head}</tr>
          </thead>
          <tbody
            ref={animationParent}
            className="bg-primary-white-main divide-y divide-gray-200"
          >
            {children}
          </tbody>
        </table>
      </div>
    </div>
  )
}
