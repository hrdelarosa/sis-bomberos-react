interface Props {
  colSpan: number
  message: string
}

export default function TableMessage({ colSpan, message }: Props) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center text-sm text-black p-5 h-24">
        {message}
      </td>
    </tr>
  )
}
