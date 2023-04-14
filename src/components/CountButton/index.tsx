import { Minus, Plus } from 'phosphor-react'
import { AddAndMinusContainer } from './styles'

interface CountButtonProps {
  amount: number
  increment: () => void
  decrement: () => void
}

export function CountButton({
  amount,
  increment,
  decrement,
}: CountButtonProps) {
  return (
    <AddAndMinusContainer>
      <button type="button" onClick={() => amount > 1 && decrement()}>
        <Minus size={14} weight="bold" />
      </button>
      {amount}
      <button type="button" onClick={increment}>
        <Plus size={14} weight="bold" />
      </button>
    </AddAndMinusContainer>
  )
}
