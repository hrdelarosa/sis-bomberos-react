import { authTitles } from '../../constants/authTitles'
import { AuthType } from '../../types/TitlesAuth'

export default function HeaderForm({ auth }: { auth: AuthType }) {
  const Icon = authTitles[auth].icon

  return (
    <>
      <h2
        className={`text-2xl font-semibold tracking-tight ${
          auth === 'verify' && 'flex items-center gap-2'
        }`}
      >
        {authTitles[auth].title}
        {Icon && <Icon />}
      </h2>
      {authTitles[auth].sub && (
        <p className="text-sm text-gray-600">{authTitles[auth].sub}</p>
      )}
    </>
  )
}
