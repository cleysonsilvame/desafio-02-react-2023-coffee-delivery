import { ReactNode } from 'react'
import { BadgeContainer, ColorType, Icon } from './styles'

export interface BadgeProps {
  icon: ReactNode
  text: string
  color: ColorType
}

export function Badge({ icon, text, color }: BadgeProps) {
  return (
    <BadgeContainer>
      <Icon color={color}>{icon}</Icon>
      <span>{text}</span>
    </BadgeContainer>
  )
}
