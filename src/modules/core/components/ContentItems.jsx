import { useAnimation } from '../hooks/useAnimation'

export default function ContentItems({ children }) {
  const { animationParent } = useAnimation()

  return (
    <section
      ref={animationParent}
      className="flex gap-2 items-center flex-wrap"
    >
      {children}
    </section>
  )
}
