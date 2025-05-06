interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function ContentCard({ children, ...props }: Props) {
  return (
    <section
      className={`bg-primary-white-main w-full text-black rounded-lg ${props.className}`}
    >
      {children}
    </section>
  )
}
