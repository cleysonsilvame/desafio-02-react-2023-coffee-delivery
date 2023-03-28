import styled from 'styled-components'

import { defaultTheme } from '../../../styles/theme'

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

type Colors = typeof defaultTheme.colors

type ColorsKeys = keyof Colors

export type ColorType =
  | `${Extract<ColorsKeys, 'base'>}.${keyof Colors['base']}`
  | `${Extract<ColorsKeys, 'brand'>}.${keyof Colors['brand']}`

interface IconProps {
  color: ColorType
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;

  background: ${({ theme, color }) => {
    const [key, value] = color.split('.')

    return theme.colors[key as ColorsKeys][value as keyof Colors[ColorsKeys]]
  }};

  color: ${({ theme }) => theme.colors.base.background};
`
