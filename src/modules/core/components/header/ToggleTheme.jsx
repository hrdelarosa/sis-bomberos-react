import { useTheme } from '../../context/ThemeContext'
import { ThemeMoon, ThemeSun } from './Icons'

export default function ToggleTheme() {
  const { toggleTheme } = useTheme()

  return (
    <label className="inline-flex items-center relative select-none cursor-pointer">
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        onChange={toggleTheme}
      />
      <div className="relative w-16 h-8 bg-gray-100 peer-checked:bg-[#303030] rounded-full after:absolute after:content-[''] after:size-6 after:bg-white peer-checked:after:bg-black after:rounded-full after:top-[4px] after:left-[4px] active:after:w-[50px] peer-checked:after:left-[60px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
      <ThemeSun />
      <ThemeMoon />
    </label>
  )
}
