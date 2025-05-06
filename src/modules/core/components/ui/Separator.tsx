interface Props {
  heigth?: 'small' | 'medium'
}

export default function Separator({ heigth = 'medium' }: Props) {
  return (
    <>
      {heigth === 'small' ? (
        <div className="bg-gray-200 shrink-0 bg-border h-px w-full"></div>
      ) : (
        <div className="bg-gray-200 shrink-0 bg-border h-0.5 w-full"></div>
      )}
    </>
  )
}
