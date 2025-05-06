import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import React, { useState, useRef, useEffect } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  icon?: React.ReactNode
  tooltip?: boolean
}

export default function FieldInfo({
  title,
  text,
  icon,
  tooltip = false,
  ...props
}: Props) {
  const [showTooltip, setShowTooltip] = useState(false)
  const textElementRef = useRef<HTMLParagraphElement>(null)
  const [isTextTruncated, setIsTextTruncated] = useState(false)
  const formattedText = text ? firstCapitalLetter(text) : ''

  useEffect(() => {
    const checkIfTruncated = () => {
      const element = textElementRef.current
      if (element) {
        setIsTextTruncated(element.scrollWidth > element.clientWidth)
      }
    }

    checkIfTruncated()
    window.addEventListener('resize', checkIfTruncated)

    return () => {
      window.removeEventListener('resize', checkIfTruncated)
    }
  }, [text])

  return (
    <div className={props.className}>
      <p className="flex items-center gap-1 text-sm text-gray-600 font-medium">
        {icon && <span className="text-primary-red">{icon}</span>}
        {title}
      </p>

      <div
        className="relative w-full"
        onMouseEnter={() => tooltip && isTextTruncated && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <p
          ref={textElementRef}
          className={`${icon && 'ml-5'} font-medium truncate ${
            tooltip && isTextTruncated ? 'cursor-help' : ''
          }`}
        >
          {formattedText}
        </p>

        {tooltip && showTooltip && isTextTruncated && (
          <div className="absolute z-10 px-2.5 py-1.5 bg-black text-white rounded shadow-lg text-sm max-w-md left-5 top-6">
            {formattedText}
            {/* <div className="absolute left-4 top-full w-2 h-2 bg-black transform rotate-45 -translate-y-1"></div> */}
          </div>
        )}
      </div>
    </div>
  )
}
