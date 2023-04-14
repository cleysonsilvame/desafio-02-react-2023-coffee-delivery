import { Trash } from 'phosphor-react'
import { Coffee, useCartStore } from '../../store/cart.store'
import { formatToCurrency } from '../../utils'
import { CountButton } from '../CountButton'
import { AddOrRemoveOptions, CartItemContainer, RemoveButton } from './styles'

interface CartItemProps {
  cart: Coffee
}

export function CartItem({
  cart: { name, amount, price, src },
}: CartItemProps) {
  const addOrIncrementCoffeeInCart = useCartStore(
    (state) => state.addOrIncrementCoffeeInCart,
  )
  const decrementCoffeeFromCart = useCartStore(
    (state) => state.decrementCoffeeFromCart,
  )
  const removeCoffeeFromCart = useCartStore(
    (state) => state.removeCoffeeFromCart,
  )

  return (
    <CartItemContainer>
      <div>
        <img src={src} alt="" />
        <AddOrRemoveOptions>
          <p>{name}</p>
          <div>
            <CountButton
              amount={amount}
              increment={() => addOrIncrementCoffeeInCart({ name, amount: 1 })}
              decrement={() => decrementCoffeeFromCart({ name, amount: 1 })}
            />
            <RemoveButton
              type="button"
              onClick={() => removeCoffeeFromCart({ name })}
            >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </div>
        </AddOrRemoveOptions>
      </div>
      <p className="font-roboto font-bold text-base-text">
        {formatToCurrency.format(Number(price) * amount)}
      </p>
    </CartItemContainer>
  )
}
