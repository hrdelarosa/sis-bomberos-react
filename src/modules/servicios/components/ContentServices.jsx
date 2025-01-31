import { useAnimation } from '../../core/hooks/useAnimation'

export default function ContentServices({ children }) {
  const { animationParent } = useAnimation()

  return (
    <section
      ref={animationParent}
      className="flex gap-4 items-center flex-wrap"
    >
      {children}
    </section>
  )
}
