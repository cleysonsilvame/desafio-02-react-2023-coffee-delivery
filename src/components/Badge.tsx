import { ReactNode } from "react"

export interface BadgeProps {
  icon: ReactNode,
  text: string
  color: string
}

export function Badge({ icon, text, color }: BadgeProps) {
  return (
    <div className='flex items-center gap-3'>
      <div className={`w-8 h-8 flex justify-center items-center rounded-full ${color}`}>
        {icon}
      </div>
      <span className='text-base-text'>{text}</span>
    </div>
  )
}